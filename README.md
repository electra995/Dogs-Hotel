# Dogs Hotel 🐾

**Dogs Hotel** è un'applicazione web full-stack progettata come prototipo per un servizio di prenotazione online
dedicato a strutture ricettive per animali domestici. L'applicazione permette ai proprietari di animali di trovare e
prenotare il soggiorno ideale per i loro amici a quattro zampe e ai gestori delle strutture di amministrare le proprie
inserzioni.

Questo progetto è stato sviluppato utilizzando un frontend in **React** e un backend API RESTful in **Python/FastAPI**.

---

## 🚀 Funzionalità Principali

### Per gli Utenti (Clienti)

* **Registrazione come Cliente**: Possibilità di creare un account.
* **Anteprima delle Strutture Disponibili**: Esplorazione delle strutture disponibili sulla piattaforma.
* **Visualizzazione Dettagliata**: Accesso a pagine dedicate per ogni hotel con informazioni su servizi, prezzi e
  recensioni.
* **Dashboard Utente**: Un'area riservata per visualizzare e moddificare i propri dati utente e
  visualizzare/modificare/eliminare le proprie prenotazioni.

### Per i Gestori di Strutture (Admin)

* **Registrazione come Proprietario**: Possibilità di creare un account con privilegi di amministratore.
* **Dashboard Admin**: Creazione e modifica delle informazioni relative alla propria struttura e visualizzazione delle
  prenotazioni.

---

## 🛠️ Stack Tecnologico

| Frontend                                 | Backend                           | Database                              |
|------------------------------------------|-----------------------------------|---------------------------------------|
| ![React Badge][react-badge]              | ![Python Badge][python-badge]     | ![PostgreSQL Badge][postgres-badge]   |
| ![Vite Badge][vite-badge]                | ![FastAPI Badge][fastapi-badge]   | ![SQLAlchemy Badge][sqlalchemy-badge] |
| ![Styled Components Badge][styled-badge] | ![Pydantic Badge][pydantic-badge] |                                       |
| ![React Router Badge][router-badge]      | ![Uvicorn Badge][uvicorn-badge]   |                                       |

[react-badge]: https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black

[vite-badge]: https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white

[styled-badge]: https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white

[router-badge]: https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white

[python-badge]: https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white

[fastapi-badge]: https://img.shields.io/badge/FastAPI-009688?style=for-the-badge&logo=fastapi&logoColor=white

[pydantic-badge]: https://img.shields.io/badge/Pydantic-e92063?style=for-the-badge&logo=pydantic&logoColor=white

[uvicorn-badge]: https://img.shields.io/badge/Uvicorn-27BEB6?style=for-the-badge&logo=uvicorn&logoColor=white

[postgres-badge]: https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white

[sqlalchemy-badge]: https://img.shields.io/badge/SQLAlchemy-D71F00?style=for-the-badge&logo=sqlalchemy&logoColor=white

---

## ⚙️ Installazione e Avvio del Progetto

Per eseguire il progetto in locale, è necessario avere installato **Node.js**, **Python** e **PostgreSQL**.

### 1. Prerequisiti

* **Node.js**: `v18.x` o superiore.
* **Python**: `v3.9` o superiore.
* **PostgreSQL**: Assicurarsi di avere un'istanza del database in esecuzione.

### 2. Configurazione del Database

Prima di avviare il backend, è necessario configurare il database PostgreSQL.
Questo progetto include un file di dump del database (`db_dump.sql`) che contiene la struttura delle tabelle e i dati di
esempio. Per installarlo, segui questi passaggi:

**Passo 1: Creare l'Utente e Importare i Dati dal File di Dump**

Apri `psql` o un client grafico come pgAdmin ed esegui i seguenti comandi SQL per creare un database vuoto e l'utente
che lo gestirà.

1. Crea l'utente (se non esiste già):
   ```sql
   CREATE USER fastapi_user WITH PASSWORD 'password';
   ```
2. Carica il dump del db:
   ```bash
   psql -U fastapi_user -d prenotazioni_db < dump.sql
   ```
3. Garantisci i privilegi all'utente sul nuovo database:
   ```sql
   GRANT ALL PRIVILEGES ON DATABASE prenotazioni_db TO fastapi_user;
   ```

### 3. Setup del Backend

1. **Naviga nella cartella del backend**:
   ```bash
   cd Backend
   ```
2. **Crea e attiva un ambiente virtuale**:
   ```bash
   # Su Windows
   python -m venv venv
   .\venv\Scripts\activate

   # Su macOS/Linux
   python3 -m venv venv
   source venv/bin/activate
   ```
3. **Installa le dipendenze Python**:
   ```bash
   pip install -r requirements.txt
   ```
4. **Modifica il file di ambiente `.env`** nella cartella `Backend`. Modifica la seguente riga se hai usato
   credenziali diverse:
   ```env
   DATABASE_URL=postgresql://fastapi_user:password@localhost:5432/prenotazioni_db
   ```
5. **Avvia il server backend**:
   ```bash
   uvicorn app.main:app --host 0.0.0.0 --reload --port 8000
   ```
   Il backend sarà in esecuzione su `http://127.0.0.1:8000`.

### 4. Setup del Frontend

1. Apri un nuovo terminale e **naviga nella cartella del frontend**:
   ```bash
   cd Frontend
   ```
2. **Installa le dipendenze Node.js**:
   ```bash
   npm install
   ```
3. **Avvia il server di sviluppo del frontend**:
   ```bash
   npm run dev
   ```
   Il frontend sarà accessibile nel tuo browser all'indirizzo `http://localhost:5173` (o un'altra porta indicata da
   Vite).

---

## ✅ Utilizzo

Una volta avviati sia il backend che il frontend, apri il tuo browser e visita `http://localhost:5173`.  
L'applicazione sarà pronta per essere utilizzata. Potrai registrare nuovi utenti (sia "user" che "employee") e interagire con le funzionalità implementate.

### 👤 Accesso come Utente (Cliente)

Puoi accedere con un account già presente nel database utilizzando le seguenti credenziali:

- **Email**: `user@gmail.com`  
- **Password**: `1234567890`  

Questo utente ha già dei dati registrati e alcune prenotazioni a diverse strutture.  
Le funzionalità disponibili includono:

* **Prenotazioni**: possibilità di selezionare una delle strutture disponibili e avviare il processo di prenotazione, che prevede:
  - inserimento delle date del soggiorno,  
  - compilazione dei dati dell’utente (se non già presenti),  
  - inserimento delle informazioni dell’animale e dei servizi opzionali,  
  - completamento dei dati di pagamento.  
* **Dashboard Utente**:
  - **Profilo**: visualizzare e modificare le informazioni personali.  
  - **Le mie prenotazioni**: visualizzare, modificare o eliminare le prenotazioni future.  

---

### 🛠️ Accesso come Amministratore (Gestore Struttura)

Puoi accedere con un account **admin** già presente nel database utilizzando le seguenti credenziali:

- **Email**: `admin@gmail.com`  
- **Password**: `1234567890`  

Questo account dispone già di dati relativi a un hotel e prenotazioni effettuate dagli utenti.  
Le funzionalità disponibili includono:

* **Dashboard Admin**:
  - **Profilo**: visualizzare e modificare le informazioni relative alla propria struttura.  
  - **Storico Clienti**: elenco di tutti i clienti che hanno soggiornato o soggiorneranno nell’hotel.  
  - **Gestione Prenotazioni**: pannello dedicato per visualizzare i clienti futuri e passati, i servizi prenotati e lo stato dei pagamenti (saldato o meno).  
