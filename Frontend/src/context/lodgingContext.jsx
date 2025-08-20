import {createContext, useContext, useEffect, useState} from "react";
import {fetchLodgings} from "../services/lodgingService/LodgingService.jsx";

const LodgingsContext = createContext();

export const LodgingsProvider = ({children}) => {
    const [lodgings, setLodgings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadLodgings = async () => {
            try {
                setLoading(true);
                const data = await fetchLodgings();
                setLodgings(data);
            } catch (err) {
                console.error("Errore caricamento strutture:", err);
                setError("Errore nel caricamento delle strutture.");
            } finally {
                setLoading(false);
            }
        };
        void loadLodgings();
    }, []);

    return (
        <LodgingsContext.Provider value={{lodgings, loading, error}}>
            {children}
        </LodgingsContext.Provider>
    );
};

export const useLodgings = () => {
    const context = useContext(LodgingsContext);
    if (!context) {
        throw new Error("useLodgings deve essere usato dentro LodgingsProvider");
    }
    return context;
};
