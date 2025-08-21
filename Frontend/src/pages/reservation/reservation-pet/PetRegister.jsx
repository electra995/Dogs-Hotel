import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

import {
    StyledPetRegister,
    PetRegisterContainer,
    PetRegisterSection,
    LeftSubtitle,
    PetRegisterBodyContainer,
    PetRegisterLeftContainer,
    PetMainInfos,
    AditionalServices,
    AdicionalServicesRow,
    Remarks,
    RemarkInput,
    LeftTitleRow,
    LeftTitle,
    LeftRow,
    InputContainer,
    Label,
    Input,
    ButtonRow,
    PetRegisterRightContainer,
    Select,
} from "./styles.ts";

import DateRangePicker from "../../../components/datePicker/DatePicker.jsx";
import Navbar from "../../../components/navbar/Navbar.jsx";
import Button from "../../../components/button/Button.jsx";
import ReservationNav from "../../../components/reservationNav/ReservationNav.jsx";
import Footer from "../../../components/footer/Footer.jsx";
import ServicesButton from "./servicesButton/ServicesButton.jsx";

import {useEffect, useState} from "react";
import {addDays} from "date-fns";
import {useLocation, useNavigate} from "react-router-dom";

const PetRegister = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const {
        userData,
        hotelData,
        checkInDate,
        checkOutDate,
        totalDays,
        total
    } = location.state || {};

    const [snackbar, setSnackbar] = useState({
        open: false,
        message: "",
        severity: "success",
    });

    const [petProfile, setPetProfile] = useState({
        name: "",
        type: "",
        age: "",
        gender: "",
        remarks: "",
    });

    const [additionalServices, setAdditionalServices] = useState([]);

    const [dateRange, setDateRange] = useState([
        {
            startDate: new Date(),
            endDate: addDays(new Date(), 7),
            key: "selection",
        },
    ]);

    useEffect(() => {
        if (checkInDate && checkOutDate) {
            setDateRange([
                {
                    startDate: new Date(checkInDate),
                    endDate: new Date(checkOutDate),
                    key: "selection",
                },
            ]);
        }
    }, [checkInDate, checkOutDate]);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setPetProfile((prev) => ({
            ...prev,
            [name]: value,
        }));
    };


    const handleBookingClick = () => {
        const requiredFields = [
            "name", "age", "type", "gender"
        ];

        const emptyFields = requiredFields.filter(
            (field) => !petProfile[field] || petProfile[field].toString().trim() === ""
        );

        if (emptyFields.length > 0) {
            setSnackbar({
                open: true,
                message: "Compila tutti i campi obbligatori prima di salvare.",
                severity: "error",
            });
            return;
        }

        navigate("/reservation-payment", {
            state: {
                userData,
                hotelData,
                checkInDate: dateRange[0].startDate,
                checkOutDate: dateRange[0].endDate,
                totalDays,
                total,
                petProfile,
                additionalServices,
            },
        });
    };

    const handleBackClick = () => {
        navigate("/pet-owner", {
            state: {
                hotelId: hotelData.id,
                checkInDate: dateRange[0].startDate,
                checkOutDate: dateRange[0].endDate,
                totalDays,
                total,
            },
        });
    };

    return (
        <StyledPetRegister>
            <Navbar/>
            <PetRegisterContainer>
                <PetRegisterSection>
                    <ReservationNav hotelData={hotelData} stepImage={"/images/pet-register-step.svg"}>
                    </ReservationNav>

                    <PetRegisterBodyContainer>
                        <PetRegisterLeftContainer>
                            <PetMainInfos>
                                <LeftTitleRow>
                                    <LeftTitle>Animale</LeftTitle>
                                </LeftTitleRow>

                                <LeftRow>
                                    <InputContainer width="60%">
                                        <Label>Nome</Label>
                                        <Input
                                            type="text"
                                            placeholder="Nome dell'animale"
                                            name="name"
                                            value={petProfile.name}
                                            onChange={handleChange}
                                        />
                                    </InputContainer>
                                    <InputContainer flex="1">
                                        <Label>Taglia</Label>
                                        <Select
                                            name="type"
                                            value={petProfile.type}
                                            onChange={handleChange}
                                        >
                                            <option value="">Seleziona</option>
                                            <option value="1">Piccola</option>
                                            <option value="2">Media</option>
                                            <option value="3">Grande</option>
                                            <option value="4">Gatto</option>
                                        </Select>
                                    </InputContainer>
                                </LeftRow>
                                <LeftRow>
                                    <InputContainer width="100px">
                                        <Label>Età</Label>
                                        <Input
                                            type="text"
                                            placeholder="Età"
                                            name="age"
                                            value={petProfile.age}
                                            onChange={handleChange}
                                        />
                                    </InputContainer>
                                    <InputContainer width="100px">
                                        <Label>Genere</Label>
                                        <Select
                                            name="gender"
                                            value={petProfile.gender}
                                            onChange={handleChange}
                                        >
                                            <option value="">Seleziona</option>
                                            <option value="M">M</option>
                                            <option value="F">F</option>
                                        </Select>
                                    </InputContainer>
                                </LeftRow>
                            </PetMainInfos>

                            <AditionalServices>
                                <LeftTitleRow>
                                    <LeftTitle>Servizi addizionali</LeftTitle>
                                </LeftTitleRow>
                                <AdicionalServicesRow>
                                    <ServicesButton
                                        selectedIds={additionalServices}
                                        onChange={setAdditionalServices}
                                    />
                                </AdicionalServicesRow>
                            </AditionalServices>

                            <Remarks>
                                <LeftTitleRow>
                                    <LeftTitle>Osservazioni</LeftTitle>
                                </LeftTitleRow>
                                <LeftRow>
                                    <LeftSubtitle>
                                        Scrivi eventuali osservazioni che ritieni importanti affinché i nostri
                                        professionisti conoscano il tuo animale domestico
                                    </LeftSubtitle>
                                </LeftRow>
                                <LeftRow>
                                    <RemarkInput
                                        rows="4"
                                        placeholder="Osservazioni"
                                        name="remarks"
                                        value={petProfile.remarks}
                                        onChange={handleChange}
                                    />
                                </LeftRow>
                            </Remarks>
                        </PetRegisterLeftContainer>

                        <PetRegisterRightContainer>
                            <DateRangePicker range={dateRange} onChange={setDateRange}/>
                        </PetRegisterRightContainer>
                    </PetRegisterBodyContainer>
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
                            Avanti
                        </Button>
                    </ButtonRow>
                </PetRegisterSection>
            </PetRegisterContainer>
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
        </StyledPetRegister>
    );
};

export default PetRegister;
