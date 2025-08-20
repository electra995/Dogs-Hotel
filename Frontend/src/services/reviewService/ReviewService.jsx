import {API_BASE_URL} from "../../config/config.jsx";


export async function getReviews() {
    const res = await fetch(`${API_BASE_URL}/reviews/`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (!res.ok) {
        throw new Error(`Errore durante il recupero delle recensioni (HTTP ${res.status})`);
    }

    return await res.json();
}
