import {createContext, useContext, useEffect, useState} from "react";
import {getHotelReservations} from "../services/reservationService/ReservationService.jsx";
import {fetchHotelProfileByUserId} from "../services/hotelService/HotelService.jsx";
import {useAuth} from "./authContext.jsx";

const ReservationsContext = createContext();

export const ReservationsProvider = ({children}) => {
    const [reservations, setReservations] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const {user} = useAuth();

    useEffect(() => {
        const loadReservations = async () => {
            if (!user?.id) return;

            try {
                setLoading(true);

                const hotel = await fetchHotelProfileByUserId(user.id);
                if (!hotel?.id) {
                    throw new Error("ID hotel non trovato per l'utente");
                }

                const data = await getHotelReservations(hotel.id);
                setReservations(data);

            } catch (err) {
                console.error("Errore caricamento prenotazioni:", err);
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        void loadReservations();
    }, [user]);

    return (
        <ReservationsContext.Provider value={{reservations, loading, error}}>
            {children}
        </ReservationsContext.Provider>
    );
};

export const useReservations = () => {
    return useContext(ReservationsContext);
};
