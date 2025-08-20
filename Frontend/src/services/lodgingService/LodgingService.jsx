import {API_BASE_URL} from "../../config/config.jsx";


export const fetchLodgings = async () => {
    const response = await fetch(`${API_BASE_URL}/lodgings`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (!response.ok) {
        throw new Error(`Errore nel caricamento: ${response.status}`);
    }

    return await response.json();
};
