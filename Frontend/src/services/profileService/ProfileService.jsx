import {API_BASE_URL} from "../../config/config.jsx";


export async function fetchUserProfile(userId) {
    if (!userId) throw new Error("User ID non fornito");

    const res = await fetch(`${API_BASE_URL}/users/${userId}`);
    if (!res.ok) {
        throw new Error("Errore nel caricamento dati utente");
    }
    return res.json();
}

export async function updateUserProfile(userId, profileData) {
    if (!userId) throw new Error("User ID non fornito");

    const res = await fetch(`${API_BASE_URL}/users/${userId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(profileData),
    });

    if (!res.ok) {
        throw new Error("Errore durante l'aggiornamento dati utente");
    }

    return true;
}

export async function fetchUserReservations(userId) {
    if (!userId) throw new Error("User ID non fornito");

    const res = await fetch(`${API_BASE_URL}/users/${userId}/reservations`);
    if (!res.ok) {
        throw new Error("Errore nel caricamento delle prenotazioni utente");
    }
    return res.json();
}
