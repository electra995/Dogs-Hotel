import {Divider, Snackbar, Alert} from "@mui/material";
import {format} from "date-fns";

import {
    StyledUserDashboardReservations,
    Container,
    MainTitle,
    Section,
    HotelCard,
    HotelRow,
    Icon,
    Span,
} from "./styles.ts";

import VisualizeIconWithPopup from "../../../components/popupEditDelete/PopupEditDelete.jsx";

import {useUserProfile} from "../../../context/userContext.jsx";
import {useState, useEffect} from "react";
import {deleteReservation} from "../../../services/reservationService/ReservationService.jsx";
import {useNavigate} from "react-router-dom";

const UserDashboardReservations = () => {
    const {bookings} = useUserProfile();
    const navigate = useNavigate();

    const [reservations, setReservations] = useState([]);
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [snackbarSeverity, setSnackbarSeverity] = useState("success"); // "success" | "error"
    const [snackbarMessage, setSnackbarMessage] = useState("");

    useEffect(() => {
        setReservations(bookings);
    }, [bookings]);

    if (!bookings) return <div>Caricamento prenotazioni...</div>;

    const today = new Date();

    const nextReservations = reservations.filter(
        (b) => new Date(b.checkin_date) > today
    );
    const previousReservations = reservations.filter(
        (b) => new Date(b.checkin_date) <= today
    );

    const handleEdit = (reservation) => {
        navigate(`/user-dashboard/reservations/edit/${reservation.id}`, {
            state: {reservation}
        });
    };


    const handleDelete = async (reservationId) => {
        try {
            await deleteReservation(reservationId);
            setReservations((prev) => prev.filter((r) => r.id !== reservationId));
            setSnackbarSeverity("success");
            setSnackbarMessage("Prenotazione eliminata con successo!");
            setSnackbarOpen(true);
        } catch (error) {
            console.error("Errore eliminazione prenotazione:", error);
            setSnackbarSeverity("error");
            setSnackbarMessage("Errore durante l'eliminazione della prenotazione.");
            setSnackbarOpen(true);
        }
    };

    const handleCloseSnackbar = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }
        setSnackbarOpen(false);
    };

    return (
        <StyledUserDashboardReservations>
            <Container>
                <MainTitle>Prossime prenotazioni</MainTitle>
                <Section>
                    {nextReservations.map((reservation) => (
                        <HotelCard key={reservation.id}>
                            <HotelRow justify="space-between">
                                <div style={{display: "flex", alignItems: "center", gap: "10px"}}>
                                    <Icon
                                        width="42px"
                                        height="42px"
                                        borderRadius="40px"
                                        src={reservation.hotel?.image_url}
                                        alt=""
                                    />
                                    <Span fontWeight="600">{reservation.hotel?.name}</Span>
                                </div>
                                <VisualizeIconWithPopup
                                    onEdit={() => handleEdit(reservation)}
                                    onDelete={() => handleDelete(reservation.id)}
                                />
                            </HotelRow>
                            <Span
                                margintop="20px"
                                fontSize="14px"
                            >{`${reservation.hotel?.address}, ${reservation.hotel?.address_number}, ${reservation.hotel?.cap} ${reservation.hotel?.city} ${reservation.hotel?.province}`}</Span>
                            <HotelRow margintop="20px">
                                <Span fontWeight="600">Check-in:</Span>
                                {format(new Date(reservation.checkin_date), "dd-MM-yyyy")}
                            </HotelRow>
                            <HotelRow>
                                <Span fontWeight="600">Check-out:</Span>
                                {format(new Date(reservation.checkout_date), "dd-MM-yyyy")}
                            </HotelRow>
                            <HotelRow>
                                <Span fontWeight="600">Pet:</Span>
                                {reservation.pet_name}
                            </HotelRow>
                        </HotelCard>
                    ))}
                </Section>

                <Divider/>

                <MainTitle margintop="20px">Storico prenotazioni</MainTitle>
                <Section>
                    {previousReservations.map((reservation) => (
                        <HotelCard key={reservation.id}>
                            <HotelRow>
                                <Icon
                                    width="42px"
                                    height="42px"
                                    borderRadius="40px"
                                    src={reservation.hotel?.image_url}
                                    alt=""
                                />
                                <Span fontWeight="600">{reservation.hotel?.name}</Span>
                            </HotelRow>
                            <Span
                                margintop="20px"
                                fontSize="14px"
                            >{`${reservation.hotel?.address}, ${reservation.hotel?.address_number}, ${reservation.hotel?.cap} ${reservation.hotel?.city} ${reservation.hotel?.province}`}</Span>
                            <HotelRow margintop="20px">
                                <Span fontWeight="600">Check-in:</Span>
                                {reservation.checkin_date}
                            </HotelRow>
                            <HotelRow>
                                <Span fontWeight="600">Check-out:</Span>
                                {reservation.checkout_date}
                            </HotelRow>
                            <HotelRow>
                                <Span fontWeight="600">Animale:</Span>
                                {reservation.pet_name}
                            </HotelRow>
                        </HotelCard>
                    ))}
                </Section>
            </Container>

            <Snackbar
                open={snackbarOpen}
                autoHideDuration={3000}
                onClose={handleCloseSnackbar}
                anchorOrigin={{vertical: "bottom", horizontal: "center"}}
            >
                <Alert
                    onClose={handleCloseSnackbar}
                    severity={snackbarSeverity}
                    sx={{width: "100%"}}
                >
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </StyledUserDashboardReservations>
    );
};

export default UserDashboardReservations;
