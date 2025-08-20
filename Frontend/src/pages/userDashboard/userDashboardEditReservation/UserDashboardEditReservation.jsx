import Divider from "@mui/material/Divider";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

import {
    StyledReservationEdit,
    MainSection,
    MainTitle,
    MainDescription,
    Section,
    LeftSubsection,
    LeftSubsectionTitle,
    LeftSubsectionDescription,
    Input,
    MultipleRightSubsection,
    MultipleRow,
    MultipleBox,
    MultipleBoxTitle, Label, Select, InputContainer, ServicesContainer, ServiceOption, ServiceCircle
} from "./styles";

import Button from "../../../components/button/Button.jsx";

import {getReservationById, updateReservation} from "../../../services/reservationService/ReservationService.jsx";
import {useUserProfile} from "../../../context/userContext.jsx";
import {calculateTotalDays, calculateTotalAmount} from "../../../utils/reservationUtils.ts";
import {useState, useEffect} from "react";
import {useParams, useLocation} from "react-router-dom";

const UserDashboardEditReservation = () => {
    const {reservationId} = useParams();
    const location = useLocation();
    const {reloadProfile} = useUserProfile();

    const [reservation, setReservation] = useState(location.state?.reservation || null);
    const [error, setError] = useState(null);
    const [additionalServices, setAdditionalServices] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [snackbar, setSnackbar] = useState({
        open: false,
        message: "",
        severity: "success",
    });

    useEffect(() => {
        if (!reservation) {
            (async () => {
                try {
                    const data = await getReservationById(reservationId);
                    setReservation(data);
                    setAdditionalServices(data.additional_services || []);
                } catch (err) {
                    setError(err.message);
                }
            })();
        } else {
            setAdditionalServices(reservation.additional_services || []);
        }
    }, [reservation, reservationId]);

    useEffect(() => {
        if (!reservation) return;

        const checkin = reservation.checkin_date;
        const checkout = reservation.checkout_date;
        const daily = reservation.hotel?.daily || 0;
        const discount = reservation.hotel?.discount || 0;

        if (checkin && checkout && daily) {
            const days = calculateTotalDays(checkin, checkout);
            const total = calculateTotalAmount({
                daily: daily,
                discount: discount,
                totalDays: days
            });
            setTotalPrice(total);
        }
    }, [reservation?.checkin_date, reservation?.checkout_date, reservation?.hotel]);

    const toggleService = (id) => {
        setAdditionalServices(prev =>
            prev.includes(id) ? prev.filter(sid => sid !== id) : [...prev, id]
        );
    };

    const handleChange = (e) => {
        const {name, value} = e.target;
        setReservation(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleUpdate = async () => {
        const payload = {
            ...reservation,
            pet_type: reservation.pet_type.toString(),
            pet_age: reservation.pet_age.toString(),
            checkin: reservation.checkin_date,
            checkout: reservation.checkout_date,
            additional_services: additionalServices,
            total_price: totalPrice
        };

        const requiredFields = [
            "pet_name", "pet_age", "pet_type", "checkin", "checkout"
        ];

        const emptyFields = requiredFields.filter(
            (field) => !payload[field] || payload[field].toString().trim() === ""
        );

        if (emptyFields.length > 0) {
            setSnackbar({
                open: true,
                message: "Compila tutti i campi obbligatori prima di salvare.",
                severity: "error",
            });
            return;
        }

        await updateReservation(reservationId, payload)
            .then(() => {
                setSnackbar({
                    open: true,
                    message: "Dati aggiornati con successo.",
                    severity: "success",
                });
            })
            .catch((err) => {
                console.error("Errore durante l'aggiornamento:", err);
                setSnackbar({
                    open: true,
                    message: "Errore durante il salvataggio.",
                    severity: "error",
                });
            });

        await reloadProfile();
    };

    if (error) return <div>Errore: {error}</div>;
    if (!reservation) return <div>Caricamento...</div>;

    return (
        <StyledReservationEdit>
            <MainSection>
                <MainTitle>Modifica prenotazione</MainTitle>
                <MainDescription>Aggiorna i dettagli della tua prenotazione</MainDescription>
                <Divider/>
            </MainSection>

            <Section>
                <LeftSubsection>
                    <LeftSubsectionTitle>Animale*</LeftSubsectionTitle>
                    <LeftSubsectionDescription>Dettagli dell'animale prenotato</LeftSubsectionDescription>
                </LeftSubsection>
                <MultipleRightSubsection>
                    <MultipleRow>
                        <MultipleBox width="48%">
                            <MultipleBoxTitle>Nome</MultipleBoxTitle>
                            <Input name="pet_name" value={reservation.pet_name || ""} onChange={handleChange}/>
                        </MultipleBox>
                        <MultipleBox width="48%">
                            <InputContainer flex="1">
                                <Label>Taglia</Label>
                                <Select name="pet_type" value={reservation.pet_type || ""} onChange={handleChange}>
                                    <option value="1">Piccola</option>
                                    <option value="2">Media</option>
                                    <option value="3">Grande</option>
                                    <option value="4">Gatto</option>
                                </Select>
                            </InputContainer>
                        </MultipleBox>
                    </MultipleRow>
                    <MultipleRow>
                        <MultipleBox width="48%">
                            <MultipleBoxTitle>Età</MultipleBoxTitle>
                            <Input type="number" name="pet_age" value={reservation.pet_age || ""}
                                   onChange={handleChange}/>
                        </MultipleBox>
                        <MultipleBox width="48%">
                            <InputContainer width="100px">
                                <Label>Genere</Label>
                                <Select name="pet_gender" value={reservation.pet_gender || ""} onChange={handleChange}>
                                    <option value="M">M</option>
                                    <option value="F">F</option>
                                </Select>
                            </InputContainer>
                        </MultipleBox>
                    </MultipleRow>
                </MultipleRightSubsection>
            </Section>

            <Divider/>

            <Section>
                <LeftSubsection>
                    <LeftSubsectionTitle>Date*</LeftSubsectionTitle>
                </LeftSubsection>
                <MultipleRightSubsection>
                    <MultipleRow>
                        <MultipleBox width="48%">
                            <MultipleBoxTitle>Check-in</MultipleBoxTitle>
                            <Input
                                type="date"
                                name="checkin_date"
                                value={reservation.checkin_date || ""}
                                onChange={handleChange}
                                min={new Date().toISOString().split("T")[0]}
                            />
                        </MultipleBox>
                        <MultipleBox width="48%">
                            <MultipleBoxTitle>Check-out</MultipleBoxTitle>
                            <Input
                                type="date"
                                name="checkout_date"
                                value={reservation.checkout_date || ""}
                                min={reservation.checkin_date ? new Date(new Date(reservation.checkin_date).getTime() + 86400000).toISOString().split("T")[0] : ""}
                                onChange={handleChange}
                            />
                        </MultipleBox>
                    </MultipleRow>
                </MultipleRightSubsection>
            </Section>

            <Divider/>

            <Section>
                <LeftSubsection>
                    <LeftSubsectionTitle>Pagamento e servizi</LeftSubsectionTitle>
                </LeftSubsection>
                <MultipleRightSubsection>
                    <MultipleRow>
                        <MultipleBox width="100%">
                            <MultipleBoxTitle>Note</MultipleBoxTitle>
                            <Input type="text" name="remarks" value={reservation.remarks || ""} onChange={handleChange}/>
                        </MultipleBox>
                    </MultipleRow>
                    <MultipleRow>
                        <MultipleBox width="48%">
                            <MultipleBoxTitle>Numero carta</MultipleBoxTitle>
                            <Input type="text" name="card" value={reservation.card || ""} onChange={handleChange}/>
                        </MultipleBox>
                        <MultipleBox width="48%">
                            <InputContainer width="100px">
                                <Label>Servizi addizionali</Label>
                                <MultipleRightSubsection>
                                    <ServicesContainer>
                                        {[
                                            {id: 1, name: "Bagno"},
                                            {id: 2, name: "Tosatura"},
                                            {id: 3, name: "Passeggio"},
                                            {id: 4, name: "Check-up"}
                                        ].map(service => (
                                            <ServiceOption key={service.id} onClick={() => toggleService(service.id)}>
                                                <ServiceCircle selected={additionalServices.includes(service.id)}/>
                                                <Label>{service.name}</Label>
                                            </ServiceOption>
                                        ))}
                                    </ServicesContainer>
                                </MultipleRightSubsection>
                            </InputContainer>
                        </MultipleBox>
                    </MultipleRow>
                    <MultipleBox width="48%">
                        <MultipleBoxTitle>Prezzo totale</MultipleBoxTitle>
                        <Input type="number" name="total_price" value={totalPrice} readOnly/>
                    </MultipleBox>
                </MultipleRightSubsection>
            </Section>

            <Button
                color="white"
                backgroundcolor="#0a846b"
                borderradius="8px"
                width="50%"
                margin="30px auto 0 auto"
                onClick={handleUpdate}
            >
                Aggiorna
            </Button>

            <Snackbar
                open={snackbar.open}
                autoHideDuration={3000}
                onClose={() => setSnackbar({...snackbar, open: false})}
                anchorOrigin={{vertical: "bottom", horizontal: "center"}}
            >
                <Alert
                    onClose={() => setSnackbar({...snackbar, open: false})}
                    severity={snackbar.severity}
                    sx={{width: "100%"}}
                >
                    {snackbar.message}
                </Alert>
            </Snackbar>
        </StyledReservationEdit>
    );
};

export default UserDashboardEditReservation;
