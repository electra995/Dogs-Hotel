import {API_BASE_URL} from "../../config/config.jsx";


export async function fetchHotelProfile(hotelId) {
    if (!hotelId) throw new Error("Hotel ID non fornito");

    const res = await fetch(`${API_BASE_URL}/lodgings/${hotelId}`);
    if (!res.ok) {
        throw new Error("Errore nel caricamento dati dell'Hotel");
    }
    return res.json();
}

export async function fetchHotelProfileByUserId(userId) {
    if (!userId) throw new Error("User ID non fornito");

    const res = await fetch(`${API_BASE_URL}/lodgings/by_user/${userId}`);
    if (!res.ok) {
        throw new Error("Errore nel caricamento dati dell'Hotel per user ID");
    }
    return res.json();
}

export async function updateHotelProfile(hotelId, hotelData) {
    if (!hotelId) throw new Error("Hotel ID non fornito");

    const res = await fetch(`${API_BASE_URL}/lodgings/${hotelId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(hotelData),
    });

    if (!res.ok) {
        throw new Error("Errore durante l'aggiornamento dati hotel");
    }

    return true;
}
