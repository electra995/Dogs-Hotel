import {API_BASE_URL} from "../../config/config.jsx";


export async function addReservation(reservationData) {
    const res = await fetch(`${API_BASE_URL}/reservations`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(reservationData),
    });

    if (!res.ok) {
        throw new Error("Errore durante l'inserimento della prenotazione");
    }

    return true;
}

export async function getHotelReservations(hotelId) {
    const res = await fetch(`${API_BASE_URL}/reservations/${hotelId}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (!res.ok) {
        throw new Error(`Errore durante il recupero delle prenotazioni (HTTP ${res.status})`);
    }

    return await res.json();
}

export async function getReservationById(reservationId) {
    const res = await fetch(`${API_BASE_URL}/reservations/${reservationId}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (!res.ok) {
        throw new Error(`Errore durante il recupero della prenotazione (HTTP ${res.status})`);
    }

    return await res.json();
}


export async function deleteReservation(reservationId) {
    const res = await fetch(`${API_BASE_URL}/reservations/${reservationId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (!res.ok) {
        throw new Error(`Errore durante l'eliminazione della prenotazione (HTTP ${res.status})`);
    }

    return true;
}

export async function updateReservation(reservationId, reservationData) {
    const res = await fetch(`${API_BASE_URL}/reservations/${reservationId}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(reservationData),
    });

    if (!res.ok) {
        throw new Error(`Errore durante l'aggiornamento della prenotazione (HTTP ${res.status})`);
    }

    return await res.json();
}
