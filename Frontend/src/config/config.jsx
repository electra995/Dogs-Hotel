const API_BASE_URL = import.meta.env.VITE_API_URL;

if (!API_BASE_URL) {
  throw new Error("La variabile d'ambiente VITE_API_URL non è definita. Controlla il tuo file .env.local o le impostazioni di Vercel.");
}

export { API_BASE_URL };