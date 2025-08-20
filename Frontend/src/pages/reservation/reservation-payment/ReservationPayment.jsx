import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

import {
    StyledReservationPayment,
    ReservationPaymentContainer,
    ReservationPaymentSection,
    Icon,
    BodyContainer,
    LeftContainer,
    LeftMainInfos,
    LeftRow,
    InputContainer,
    InputSubcontainer,
    Label,
    Input,
    ButtonRow,
    RightContainer,
    RightContainerRow,
    RowTitle,
    RowDetail,
    TotalRow,
    TotalDetail,
} from "./styles.ts";

import Navbar from "../../../components/navbar/Navbar.jsx";
import Button from "../../../components/button/Button.jsx";
import ReservationNav from "../../../components/reservationNav/ReservationNav.jsx";
import Footer from "../../../components/footer/Footer.jsx";

import {useLocation, useNavigate} from "react-router-dom";
import {useState} from "react";
import {addReservation} from "../../../services/reservationService/ReservationService.jsx";

const ReservationPayment = () => {
    const navigate = useNavigate();

    const location = useLocation();
    const {
        userData,
        hotelData,
        checkInDate,
        checkOutDate,
        totalDays,
        total,
        petProfile,
        additionalServices,
    } = location.state || {};

    const [cardHolderName, setCardHolderName] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [cvc, setCvc] = useState("");
    const [expiryDate, setExpiryDate] = useState("");
    const [paymentMethod, setPaymentMethod] = useState('prepay');
    const [snackbar, setSnackbar] = useState({
        open: false,
        message: "",
        severity: "success",
    });

    async function saveReservation() {
        const payload = {
            user_id: userData.id,
            hotel_id: hotelData.id,
            checkin: checkInDate,
            checkout: checkOutDate,
            total_price: total,
            created_at: new Date().toISOString(),
            pet_name: petProfile?.name,
            pet_type: petProfile?.type,
            pet_age: petProfile?.age,
            additional_services: additionalServices,
            remarks: petProfile.remarks,
            card: cardNumber || "",
            pet_gender: petProfile.gender
        };

        try {
            await addReservation(payload);
        } catch (err) {
            setSnackbar({
                open: true,
                message: "Errore durante il salvataggio.",
                severity: "error",
            });
        }
    }

    const handleBookingClick = async () => {
        const payload = {
            userId: userData?.id,
            hotelId: hotelData?.id,
            checkInDate,
            checkOutDate,
            totalDays,
            total,
            petProfile,
            additionalServices,
            cardNumber: cardNumber.replace(/\s+/g, ""),
        };

        try {
            await saveReservation(payload);
            navigate("/reservation-revision", {
                state: {
                    userData,
                    hotelData,
                    petProfile,
                    checkInDate,
                    checkOutDate,
                    additionalServices,
                    totalDays,
                    total
                },
            });
        } catch (error) {
            console.error("Errore nel salvataggio della prenotazione:", error);
            alert("Errore durante il salvataggio della prenotazione. Riprova più tardi.");
        }
    };

    const handleBackClick = () => {
        navigate("/pet-register", {
            state: {
                userData,
                hotelData,
                checkInDate,
                checkOutDate,
                totalDays,
                total,
                petProfile,
                additionalServices,
            },
        });
    };

    return (
        <StyledReservationPayment>
            <Navbar/>
            <ReservationPaymentContainer>
                <ReservationPaymentSection>
                    <ReservationNav hotelData={hotelData} stepImage={"/images/reservation-payment-step.svg"}>
                    </ReservationNav>

                    <BodyContainer>
                        <LeftContainer>
                            <LeftMainInfos>
                                <LeftRow marginBottom="20px">
                                    <InputContainer width="42%">
                                        <Label>Modalità di pagamento</Label>
                                        <div style={{display: 'flex', gap: '20px'}}>
                                            <label>
                                                <input
                                                    type="radio"
                                                    name="paymentMethod"
                                                    value="prepay"
                                                    checked={paymentMethod === 'prepay'}
                                                    onChange={() => setPaymentMethod('prepay')}
                                                />
                                                Pagare anticipatamente
                                            </label>

                                            <label>
                                                <input
                                                    type="radio"
                                                    name="paymentMethod"
                                                    value="payAtCheckout"
                                                    checked={paymentMethod === 'payAtCheckout'}
                                                    onChange={() => setPaymentMethod('payAtCheckout')}
                                                />
                                                Saldare al momento del checkout
                                            </label>
                                        </div>
                                    </InputContainer>
                                </LeftRow>
                                <LeftRow>
                                    <InputContainer width="100%">
                                        <Label>Nome sulla carta</Label>
                                        <Input
                                            type="text"
                                            placeholder="Nome"
                                            value={cardHolderName}
                                            onChange={(e) => setCardHolderName(e.target.value)}
                                        />
                                    </InputContainer>
                                </LeftRow>
                                <LeftRow>
                                    <InputContainer width="80%">
                                        <Label>Numero</Label>
                                        <InputSubcontainer paddingLeft="0px">
                                            <Input
                                                border="none"
                                                type="text"
                                                placeholder="1234 1234 1234 1234"
                                                value={cardNumber}
                                                onChange={(e) => {
                                                    const val = e.target.value.replace(/[^\d\s]/g, "");
                                                    setCardNumber(val);
                                                }}
                                            />
                                            <Icon width="110px" src="/images/banks.svg" alt=""/>
                                        </InputSubcontainer>
                                    </InputContainer>
                                    <InputContainer flex="1">
                                        <Label>CVC</Label>
                                        <Input
                                            type="text"
                                            placeholder="123"
                                            value={cvc}
                                            onChange={(e) => {
                                                const val = e.target.value.replace(/\D/g, "");
                                                setCvc(val);
                                            }}
                                        />
                                    </InputContainer>
                                </LeftRow>
                                <LeftRow>
                                    <InputContainer width="10%">
                                        <Label>Data di scadenza</Label>
                                        <Input
                                            type="text"
                                            placeholder="MM/YYYY"
                                            value={expiryDate}
                                            onChange={(e) => {
                                                const val = e.target.value;
                                                if (/^\d{0,2}(\/\d{0,4})?$/.test(val)) {
                                                    setExpiryDate(val);
                                                }
                                            }}
                                        />
                                    </InputContainer>
                                </LeftRow>
                            </LeftMainInfos>
                        </LeftContainer>

                        <RightContainer>
                            <RightContainerRow>
                                <RowTitle>
                                    Soggiorno di {totalDays} {totalDays > 1 ? "giorni" : "giorno"}
                                </RowTitle>
                                <RowDetail>€{total}</RowDetail>
                            </RightContainerRow>
                            <TotalRow>
                                <RowTitle>Subtotale:</RowTitle>
                                <TotalDetail>€{total}</TotalDetail>
                            </TotalRow>
                        </RightContainer>
                    </BodyContainer>
                    <ButtonRow>
                        <Button
                            color="#0a846b"
                            backgroundcolor="#ffffff"
                            border="2px solid #0a846b"
                            borderradius="6px"
                            fontWeight="600"
                            width="10%"
                            onClick={handleBackClick}
                        >
                            Indietro
                        </Button>

                        <Button
                            color="#ffffff"
                            backgroundcolor="#0a846b"
                            border="2px solid #0a846b"
                            borderradius="6px"
                            fontWeight="500"
                            width="10%"
                            onClick={handleBookingClick}
                        >
                            Paga e prenota
                        </Button>
                    </ButtonRow>
                </ReservationPaymentSection>
            </ReservationPaymentContainer>
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
            <Footer/>
        </StyledReservationPayment>
    );
};

export default ReservationPayment;
