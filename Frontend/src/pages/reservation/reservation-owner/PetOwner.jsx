import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

import {
    StylePetOwner,
    PetOwnerContainer,
    MainSection,
    BodyContainer,
    LeftContainer,
    LeftTitleRow,
    LeftTitle,
    LeftRow,
    InputContainer,
    Label,
    Input,
    ButtonRow,
    RightContainer,
} from "./styles.ts";

import DateRangePicker from "../../../components/DatePicker/DatePicker.jsx";
import Navbar from "../../../components/navbar/Navbar.jsx";
import Button from "../../../components/button/Button.jsx";
import ReservationNav from "../../../components/reservationNav/ReservationNav.jsx";
import Footer from "../../../components/footer/Footer.jsx";

import {useLocation, useNavigate} from "react-router-dom";
import {fetchUserProfile, updateUserProfile} from "../../../services/profileService/ProfileService.jsx";
import {useEffect, useState} from "react";
import {fetchHotelProfile} from "../../../services/hotelService/HotelService.jsx";
import {useAuth} from "../../../context/authContext.jsx";
import {addDays} from "date-fns";

const PetOwner = () => {
    const navigate = useNavigate();

    const [userData, setUserData] = useState(null);
    const [hotelData, setHotelData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [snackbar, setSnackbar] = useState({
        open: false,
        message: "",
        severity: "success",
    });

    const {user} = useAuth();
    const userId = user?.id;

    const location = useLocation();
    const {
        hotelId,
        checkInDate,
        checkOutDate,
        totalDays,
        total
    } = location.state || {};

    const [profile, setProfile] = useState({
        name: "",
        address: "",
        address_number: "",
        cap: "",
        province: "",
        phone: "",
        email: "",
        image: "/images/user-profile.png",
    });

    useEffect(() => {
        async function loadData() {
            try {
                if (!userId) throw new Error("ID utente mancante");

                const [user, hotel] = await Promise.all([
                    fetchUserProfile(userId),
                    fetchHotelProfile(hotelId),
                ]);

                setUserData(user);
                setHotelData(hotel);

                setProfile({
                    name: user.name || "",
                    address: user.address || "",
                    address_number: user.address_number || "",
                    cap: user.cap || "",
                    province: user.province || "",
                    phone: user.phone || "",
                    email: user.email || user.email,
                    image: user.image_url || "/images/user-profile.png",
                });

            } catch (err) {
                console.error("Errore nel caricamento dati:", err.message);
            } finally {
                setLoading(false);
            }
        }

        void loadData();
    }, [hotelId, userId]);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setProfile((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleUpdate = async () => {
        if (!user) return false;

        const payload = {
            name: profile.name,
            address: profile.address,
            address_number: profile.address_number,
            cap: profile.cap,
            province: profile.province,
            phone: profile.phone,
            email: profile.email,
        };

        const requiredFields = [
            "name", "address", "address_number", "cap", "province", "phone"
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
            return false;
        }

        try {
            await updateUserProfile(user.id, payload);
            setUserData((prev) => ({...prev, ...payload}));
            return true;
        } catch (err) {
            console.error("Errore durante l'aggiornamento:", err);
            setSnackbar({
                open: true,
                message: "Errore durante il salvataggio.",
                severity: "error",
            });
            return false;
        }
    };

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

    const handleBookingClick = async () => {
        const success = await handleUpdate();
        if (!success) return;

        navigate("/pet-register", {
            state: {
                userData,
                hotelData,
                checkInDate,
                checkOutDate,
                totalDays,
                total
            }
        });
    };

    if (loading) {
        return <div>Caricamento...</div>;
    }

    if (!hotelData) {
        return <div>Dati hotel non disponibili</div>;
    }

    return (
        <StylePetOwner>
            <Navbar/>
            <PetOwnerContainer>
                <MainSection>
                    <ReservationNav hotelData={hotelData} stepImage={"/images/dog-owner-step.svg"}>
                    </ReservationNav>

                    <BodyContainer>
                        <LeftContainer>
                            <LeftTitleRow>
                                <LeftTitle>Proprietario</LeftTitle>
                            </LeftTitleRow>

                            <LeftRow>
                                <InputContainer width="30%">
                                    <Label>Nome</Label>
                                    <Input
                                        type="text"
                                        name="name"
                                        placeholder="Nome"
                                        value={profile.name}
                                        onChange={handleChange}
                                    />
                                </InputContainer>
                                <InputContainer flex="1">
                                    <Label>E-mail</Label>
                                    <Input
                                        type="text"
                                        name="email"
                                        placeholder="E-mail"
                                        value={profile.email}
                                        onChange={handleChange}
                                    />
                                </InputContainer>
                            </LeftRow>
                            <LeftRow>
                                <InputContainer width="70%">
                                    <Label>Indirizzo</Label>
                                    <Input
                                        type="text"
                                        name="address"
                                        placeholder="Indirizzo"
                                        value={profile.address}
                                        onChange={handleChange}
                                    />
                                </InputContainer>
                                <InputContainer flex="1">
                                    <Label>Numero</Label>
                                    <Input
                                        type="text"
                                        name="address_number"
                                        placeholder="0"
                                        value={profile.address_number}
                                        onChange={handleChange}
                                    />
                                </InputContainer>
                            </LeftRow>
                            <LeftRow>
                                <InputContainer width="45%">
                                    <Label>CAP</Label>
                                    <Input
                                        type="text"
                                        name="cap"
                                        placeholder="00000"
                                        value={profile.cap}
                                        onChange={handleChange}
                                    />
                                </InputContainer>
                                <InputContainer flex="1">
                                    <Label>Provincia</Label>
                                    <Input
                                        type="text"
                                        name="province"
                                        placeholder="Provincia"
                                        value={profile.province}
                                        onChange={handleChange}
                                    />
                                </InputContainer>
                                <InputContainer flex="1">
                                    <Label>Telefono</Label>
                                    <Input
                                        type="text"
                                        name="phone"
                                        placeholder="(+39) 000 000 0000"
                                        value={profile.phone}
                                        onChange={handleChange}
                                    />
                                </InputContainer>
                            </LeftRow>
                        </LeftContainer>

                        <RightContainer>
                            <DateRangePicker range={dateRange} onChange={setDateRange}/>
                        </RightContainer>
                    </BodyContainer>
                    <ButtonRow>
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
                </MainSection>
            </PetOwnerContainer>
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
        </StylePetOwner>
    );
};

export default PetOwner;
