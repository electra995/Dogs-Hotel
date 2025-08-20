import {API_BASE_URL} from "../../config/config.jsx";


export const apiLogin = async (email, password) => {
    try {
        const response = await fetch(`${API_BASE_URL}/user/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({email, password}),
        });

        let errorMessage = "Login fallito. Riprova.";

        if (!response.ok) {
            const errorText = await response.text();

            try {
                const errorData = JSON.parse(errorText);
                errorMessage = errorData.message || errorMessage;
            } catch (e) {
                errorMessage = errorText || errorMessage;
            }

            if (response.status === 401) {
                throw new Error("Credenziali errate. Riprova.");
            }
            throw new Error(errorMessage);

        }

        const data = await response.json();
        return data;

    } catch (error) {
        throw new Error(error.message || "Errore di connessione. Riprova più tardi.");
    }
};


export const apiRegister = async (role, name, email, password) => {
    try {
        const response = await fetch(`${API_BASE_URL}/user/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({role, name: name, email, password}),
        });

        let errorMessage = "Registrazione fallita. Riprova.";

        if (!response.ok) {
            const errorText = await response.text();

            try {
                const errorData = JSON.parse(errorText);
                errorMessage = errorData.message || errorMessage;
            } catch (e) {
                errorMessage = errorText || errorMessage;
            }

            if (response.status === 400) {
                throw new Error("Email già registrata. Prova con un'altra email.");
            }
            throw new Error(errorMessage);
        }

        const data = await response.json();
        return data;

    } catch (error) {
        throw new Error(error.message || "Errore di connessione. Riprova più tardi.");
    }
};
