--
-- PostgreSQL database dump
--

-- Dumped from database version 17.5
-- Dumped by pg_dump version 17.5

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: hotels; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.hotels (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    city character varying(100) NOT NULL,
    daily integer NOT NULL,
    image_url text,
    address character varying(255),
    description text,
    address_number character varying(20),
    cap character varying(10),
    province character varying(100),
    social_url text,
    checkin character varying(20),
    checkout character varying(20),
    discount double precision,
    user_id integer NOT NULL,
    type integer[],
    accepted_animals integer[]
);


ALTER TABLE public.hotels OWNER TO postgres;

--
-- Name: hotels_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.hotels_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.hotels_id_seq OWNER TO postgres;

--
-- Name: hotels_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.hotels_id_seq OWNED BY public.hotels.id;


--
-- Name: reservations; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.reservations (
    id integer NOT NULL,
    user_id integer NOT NULL,
    hotel_id integer NOT NULL,
    checkin_date date NOT NULL,
    checkout_date date NOT NULL,
    total_price numeric(10,2) NOT NULL,
    created_at timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    pet_name character varying(20),
    pet_type integer,
    pet_age integer,
    additional_services integer[],
    remarks text,
    card character varying(20),
    pet_gender character varying(1)
);


ALTER TABLE public.reservations OWNER TO postgres;

--
-- Name: reservations_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.reservations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.reservations_id_seq OWNER TO postgres;

--
-- Name: reservations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.reservations_id_seq OWNED BY public.reservations.id;


--
-- Name: reviews; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.reviews (
    id integer NOT NULL,
    avatar text NOT NULL,
    user_name character varying(100) NOT NULL,
    user_rating smallint NOT NULL,
    comment text NOT NULL,
    CONSTRAINT reviews_user_rating_check CHECK (((user_rating >= 1) AND (user_rating <= 5)))
);


ALTER TABLE public.reviews OWNER TO postgres;

--
-- Name: reviews_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.reviews_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.reviews_id_seq OWNER TO postgres;

--
-- Name: reviews_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.reviews_id_seq OWNED BY public.reviews.id;


--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id integer NOT NULL,
    name character varying(100) NOT NULL,
    email character varying(255) NOT NULL,
    is_admin boolean DEFAULT false,
    password_hash text NOT NULL,
    address character varying(255),
    address_number character varying(20),
    cap character varying(10),
    province character varying(100),
    phone character varying(20),
    image_url text
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.users_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.users_id_seq OWNER TO postgres;

--
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.users_id_seq OWNED BY public.users.id;


--
-- Name: hotels id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.hotels ALTER COLUMN id SET DEFAULT nextval('public.hotels_id_seq'::regclass);


--
-- Name: reservations id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.reservations ALTER COLUMN id SET DEFAULT nextval('public.reservations_id_seq'::regclass);


--
-- Name: reviews id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.reviews ALTER COLUMN id SET DEFAULT nextval('public.reviews_id_seq'::regclass);


--
-- Name: users id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users ALTER COLUMN id SET DEFAULT nextval('public.users_id_seq'::regclass);


--
-- Data for Name: hotels; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.hotels (id, name, city, daily, image_url, address, description, address_number, cap, province, social_url, checkin, checkout, discount, user_id, type, accepted_animals) FROM stdin;
3	Coccole e Code	Torino	80	/images/lodgingCard2.png	Corso Vittorio Emanuele II	Da Coccole e Code, il benessere del tuo cane è al centro di tutto. Offriamo un ambiente accogliente, sicuro e igienizzato, con attenzioni personalizzate per ogni ospite. Le passeggiate quotidiane, momenti di gioco e la presenza costante del nostro personale qualificato garantiscono una permanenza serena e felice. Scegli Coccole e Code per far sentire il tuo amico a quattro zampe come in famiglia.	152	10138	TO	prova.com	14:00	10:00	0.2	4	{3}	{1}
4	Il Rifugio Peloso	Genova	70	/images/lodgingCard4.png	Via San Vincenzo	Il Rifugio Peloso garantisce un'accoglienza calorosa e professionale per cani e gatti. Con spazi ampi e puliti, passeggiate regolari e giochi interattivi, il benessere del tuo pet è la nostra missione quotidiana.	33	16121	GE	https://ilrifugiopeloso.com	13:00	09:00	0.1	6	{1,2}	{2,1,3}
8	Fido & Friends	Cagliari	80	/images/lodgingCard8.png	Via Sassari	Fido & Friends si impegna a garantire un soggiorno sicuro e divertente per il tuo pet. Strutture moderne, passeggiate quotidiane e personale qualificato assicurano un’esperienza unica e positiva.	10	09124	CA	https://fidofriends.com	14:00	11:00	0.22	10	{3,1}	{1,2,3,4}
7	Cuccioli & Coccole	Trieste	95	/images/lodgingCard7.png	Via Mazzini	Cuccioli & Coccole offre un ambiente sereno, igienizzato e ricco di attenzioni per il tuo animale. Passeggiate, giochi e assistenza personalizzata per una vacanza felice e spensierata.	27	34121	TS	https://cuccioliecoccole.it	15:00	10:00	0.18	9	{1,2}	{1,2,3}
6	Zampe in Festa	Napoli	75	/images/lodgingCard6.png	Piazza Dante	Zampe in Festa è il luogo perfetto per il tuo pet. Cura, attenzione e attività ludiche sono al centro del nostro servizio, in un ambiente accogliente e sicuro. La soddisfazione del cliente a quattro zampe è garantita.	18	80134	NA	https://zampeinfesta.com	16:00	12:00	0.2	8	{1}	{1,2}
5	Coda Felice	Bologna	85	/images/lodgingCard5.png	Via Galliera	Da Coda Felice il comfort e la sicurezza del tuo animale sono prioritari. Offriamo servizi personalizzati, area giochi e monitoraggio continuo, con personale qualificato per una permanenza senza stress.	105	40121	BO	https://codafelice.it	14:30	10:30	0.25	7	{2}	{1,4}
10	Bau & Miao Resort	Milano	85	/images/lodgingCard1.png	Via delle Rose	Un’accogliente pensione per cani e gatti dove il comfort è al primo posto. Le camere sono climatizzate, i giochi all’aperto non mancano e gli ospiti a quattro zampe ricevono coccole a volontà. Disponibile servizio di webcam per permettere ai proprietari di seguire le giornate dei loro amici.	15	20145	MI	https://bauemiaoresort.com	13:00	11:00	0.15	20	{2}	{1,4}
11	Arca Felice Pet Hotel	Firenze	105	/images/lodgingCard3.png	Strada dei Tigli	Struttura immersa nel verde, pensata per animali che amano correre e rilassarsi. Dispone di ampi spazi esterni, area giochi coperta per i giorni di pioggia e uno staff specializzato in comportamenti animali. Ogni ospite ha un box personalizzato e attività giornaliere.	8	50135	FI	https://arcafelicepethotel.com	15:00	9:00	0.2	21	{1,2}	{1,2,3}
\.


--
-- Data for Name: reservations; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.reservations (id, user_id, hotel_id, checkin_date, checkout_date, total_price, created_at, pet_name, pet_type, pet_age, additional_services, remarks, card, pet_gender) FROM stdin;
7	5	5	2025-08-19	2025-08-23	297.00	2025-08-11 20:40:47.304286	Helena	1	11	{}	Ha energia infinita, se potete stancarlo un po’ con giochi e passeggiate vi ringrazio!	1234 1234 1234 1234	F
2	5	3	2025-08-18	2025-08-24	426.00	2025-08-09 02:47:17.067253	Camillo	3	4	{4,3,2}	Si addormenta solo se qualcuno gli dice buonanotte (lo so, è viziato).	1234 1234 1234 1234	F
10	5	5	2025-08-18	2025-08-20	169.50	2025-08-13 23:02:55.263758	Ciro	4	4	{1}	Pretende di essere servito con calma, altrimenti miagola per protesta.		M
16	5	8	2025-08-21	2025-08-26	354.00	2025-08-20 22:28:20.532691	Balù	2	8	{1}	Quando vede la palla entra in modalità maratona: attenzione a non stancarvi voi prima di lui.		
17	5	5	2025-09-02	2025-09-04	169.50	2025-08-20 23:57:43.066516	Kled	4	11	{4}	Si arrampica ovunque come se fosse King Kong, anche sul frigorifero.		
15	19	5	2025-08-21	2025-08-24	233.25	2025-08-20 21:34:11.755865	Molly	2	4	{1,2,4}	Si spaventa un po’ con i temporali, in quei momenti ha bisogno di compagnia.		F
11	12	7	2025-09-15	2025-09-20	431.50	2025-08-14 00:45:46.467077	Luna	2	6	{3,2}	Quando gioca tende a correre in tondo come una trottola impazzita.	1234 1234 1234 1234	M
14	5	3	2025-08-20	2025-08-24	298.00	2025-08-14 01:06:16.223393	Gennaro	1	5	{1,2,3,4}	Con le coccole non ha un limite: più ne riceve, più ne chiede.		M
13	5	3	2025-08-29	2025-08-31	170.00	2025-08-14 01:05:46.081325	Stella	4	3	{1}	Ama guardare dall’alto: se non lo trovate, cercate sopra gli armadi.		M
12	5	3	2025-08-15	2025-08-17	170.00	2025-08-14 01:05:18.831082	Yumi	2	4	{2}	Non lasciate scarpe in giro: le considera il suo passatempo preferito.		F
9	5	4	2025-08-14	2025-08-17	231.00	2025-08-13 22:17:50.811181	Polpetta	2	11	{2,3}	Ama l’acqua: se c’è una ciotola grande abbastanza, ci si sdraia dentro.		M
6	5	6	2025-08-11	2025-08-17	402.00	2025-08-11 20:39:49.638896	Rodrigo	4	4	{}	Ha l’abitudine di nascondersi nei posti più improbabili: controllate le scatole prima di chiuderle.		M
8	11	6	2025-08-13	2025-08-16	222.00	2025-08-12 15:32:57.529948	Pippo	3	6	{3,2}	Quando sente un fischietto pensa che sia un invito a cantare… a modo suo.		M
1	5	3	2025-08-11	2025-08-17	426.00	2025-08-09 02:42:45.010316	Roger	1	3	{1,2}	Si emoziona moltissimo quando vede la ciotola: occhio che fa la danza della pappa!	1234 1234 1234 1234	M
\.


--
-- Data for Name: reviews; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.reviews (id, avatar, user_name, user_rating, comment) FROM stdin;
19	/images/geralt-avatar.png	Geralt di Rivia	2	Troppo caos e poca attenzione ai singoli animali. Non lo consiglio.
13	/images/clark-avatar.png	Clark Kent	4	Struttura solida e ben organizzata, con spazi ampi e puliti.
10	/images/peter-avatar.png	Peter Jason Quill	2	Servizi base buoni, ma niente di innovativo. Il prezzo non giustifica l’offerta.
18	/images/lara-avatar.png	Lara Croft	4	Spazi adatti e personale esperto, anche se qualche piccolo dettaglio è migliorabile.
11	/images/arthur-avatar.png	Arthur Morgan	3	Personale gentile ma un po’ disorganizzato. Potrebbe migliorare.
16	/images/sherlock-avatar.png	Sherlock Holmes	5	Molto professionali, con un approccio scientifico alla cura degli animali.
20	/images/yennefer-avatar.png	Yennefer di Vengerberg	5	Servizio impeccabile e grande cura. Il mio animale è tornato sereno e felice.
3	/images/bruce-avatar.png	Bruce Wayne	3	Struttura elegante ma il rapporto qualità-prezzo non è eccezionale. Servizi buoni, ma mi aspettavo di più.
1	/images/tony-avatar.png	Tony Stark	5	Servizio eccellente, tecnologie all'avanguardia e attenzione ai dettagli. Il mio animale è stato trattato come una vera star.
15	/images/hans-avatar.png	Hans Capon	4	Buona attenzione alle esigenze particolari degli animali. Mi sono trovata bene.
5	/images/walter-avatar.png	Walter White	2	Purtroppo ho avuto qualche problema con la pulizia delle stanze. Aspettative non pienamente soddisfatte.
6	/images/saul-avatar.png	Saul Goodman	1	Esperienza deludente, poca attenzione e scarsa comunicazione. Non credo tornerò.
2	/images/alan-avatar.png	Alan Wake	4	Buona esperienza, personale competente e ambiente sicuro. Solo qualche dettaglio migliorabile nelle aree gioco.
7	/images/eleven-avatar.png	Eleven Doctor	4	Molto soddisfatto, soprattutto per la cura nelle passeggiate. Ambiente tranquillo e personale gentile.
8	/images/erwin-avatar.png	Erwin Smith	3	Sufficiente, ma mancano alcune comodità essenziali per gli animali più esigenti.
9	/images/astarion-avatar.png	Astarion Ancunín	5	Professionalità e attenzione al cliente di alto livello. Ottima esperienza complessiva.
14	/images/frieren-avatar.png	Frieren	3	Non male, ma alcune aree potrebbero essere più curate. Il personale è comunque disponibile.
4	/images/elena-avatar.png	Elena Gilbert	5	Accoglienza impeccabile e cura straordinaria. Il mio cane si è sentito protetto e amato.
12	/images/parker-avatar.png	Peter Parker	5	Ottimo! Servizi eccellenti e aggiornamenti costanti. Il mio gatto è stato felice.
17	/images/percy-avatar.png	Percival de Rolo	3	Esperienza nella media, né positiva né negativa. Tutto sommato sufficiente.
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, name, email, is_admin, password_hash, address, address_number, cap, province, phone, image_url) FROM stdin;
20	Giovanna	admin6@gmail.com	t	$2b$12$u6VjCY/s1kLnEu43dHV1B.cAc9hAKwpyIZ1Zp0ETaHQOfvbM9neuu	\N	\N	\N	\N	\N	\N
21	Roberto	admin7@gmail.com	t	$2b$12$kfgc6Ej2YDStsxK29OcgsuMKJen44rCEhKDbY3z0qqo.FJuRGxEPa	\N	\N	\N	\N	\N	\N
5	Clarissa	user@gmail.com	f	$2b$12$xVJqDLjxrChAFhRvRpkPP.svGf7nB2lLZZG/jWH5pIZQzgHpAlQke	Viale Cristoforo Colombo	29	00018	RM	+39 333 444 5555	/images/profile-avatar.png
6	Giacomo	admin1@gmail.com	t	$2b$12$xVJqDLjxrChAFhRvRpkPP.svGf7nB2lLZZG/jWH5pIZQzgHpAlQke	\N	\N	\N	\N	\N	\N
4	Clarissa	admin@gmail.com	t	$2b$12$W0ZloGL8UgC.yS/ct4kN0el3TDpMJvslXVfI8yYYcB5wlbJLWgLB.	\N	\N	\N	\N	\N	\N
10	Carlo	admin5@gmail.com	t	$2b$12$xVJqDLjxrChAFhRvRpkPP.svGf7nB2lLZZG/jWH5pIZQzgHpAlQke	\N	\N	\N	\N	\N	\N
9	Guglielmo	admin4@gmail.com	t	$2b$12$xVJqDLjxrChAFhRvRpkPP.svGf7nB2lLZZG/jWH5pIZQzgHpAlQke	\N	\N	\N	\N	\N	\N
8	Simone	admin3@gmail.com	t	$2b$12$xVJqDLjxrChAFhRvRpkPP.svGf7nB2lLZZG/jWH5pIZQzgHpAlQke	\N	\N	\N	\N	\N	\N
7	Amelia	admin2@gmail.com	t	$2b$12$xVJqDLjxrChAFhRvRpkPP.svGf7nB2lLZZG/jWH5pIZQzgHpAlQke	\N	\N	\N	\N	\N	\N
12	Helena	user2@gmail.com	f	$2b$12$qhpJ2.OaqXX99kULWpLk9.eBZ.h0yOA2/nep3butiW2i4OSI/T3Li	Via Pavesi	23	70345	TO	+39 333 444 5555	/images/user-profile.png
11	David	user1@gmail.com	f	$2b$12$.51QfoaF/rXi.bQrPwopeuivqFm.JbQXwAUKci3/pFOl8xAyty7se	Via Vittorio Emanuele	134	80147	MI	+39 333 444 5555	/images/user-profile.png
19	Denise	user3@gmail.com	f	$2b$12$YzfI/H17xEMIvI9XjYQhHeHZSR11kNBYTzYSa3GGE25fI.I8E5Q0i	Via Roma	39	00012	NA	+39 333 444 5555	/images/user-profile.png
\.


--
-- Name: hotels_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.hotels_id_seq', 11, true);


--
-- Name: reservations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.reservations_id_seq', 17, true);


--
-- Name: reviews_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.reviews_id_seq', 20, true);


--
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.users_id_seq', 21, true);


--
-- Name: hotels hotels_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.hotels
    ADD CONSTRAINT hotels_pkey PRIMARY KEY (id);


--
-- Name: reservations reservations_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.reservations
    ADD CONSTRAINT reservations_pkey PRIMARY KEY (id);


--
-- Name: reviews reviews_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.reviews
    ADD CONSTRAINT reviews_pkey PRIMARY KEY (id);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: reservations fk_hotel; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.reservations
    ADD CONSTRAINT fk_hotel FOREIGN KEY (hotel_id) REFERENCES public.hotels(id) ON DELETE CASCADE;


--
-- Name: reservations fk_user; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.reservations
    ADD CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE;


--
-- Name: hotels fk_user_hotel; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.hotels
    ADD CONSTRAINT fk_user_hotel FOREIGN KEY (user_id) REFERENCES public.users(id) ON DELETE CASCADE;


--
-- Name: TABLE hotels; Type: ACL; Schema: public; Owner: postgres
--

GRANT SELECT,INSERT,DELETE,UPDATE ON TABLE public.hotels TO fastapi_user;


--
-- Name: SEQUENCE hotels_id_seq; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON SEQUENCE public.hotels_id_seq TO fastapi_user;


--
-- Name: TABLE reservations; Type: ACL; Schema: public; Owner: postgres
--

GRANT SELECT,INSERT,DELETE,UPDATE ON TABLE public.reservations TO fastapi_user;


--
-- Name: SEQUENCE reservations_id_seq; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON SEQUENCE public.reservations_id_seq TO fastapi_user;


--
-- Name: TABLE reviews; Type: ACL; Schema: public; Owner: postgres
--

GRANT SELECT,INSERT,DELETE,UPDATE ON TABLE public.reviews TO fastapi_user;


--
-- Name: SEQUENCE reviews_id_seq; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON SEQUENCE public.reviews_id_seq TO fastapi_user;


--
-- Name: TABLE users; Type: ACL; Schema: public; Owner: postgres
--

GRANT SELECT,INSERT,DELETE,UPDATE ON TABLE public.users TO fastapi_user;


--
-- Name: SEQUENCE users_id_seq; Type: ACL; Schema: public; Owner: postgres
--

GRANT ALL ON SEQUENCE public.users_id_seq TO fastapi_user;


--
-- PostgreSQL database dump complete
--

