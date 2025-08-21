import Divider from "@mui/material/Divider";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

import {
    StyledHotelDashboardProfile,
    MainDescription,
    MainSection,
    MainTitle,
    Section,
    LeftSubsection,
    LeftSubsectionTitle,
    LeftSubsectionDescription,
    Input,
    RightSubsection,
    UserIcon,
    Delete,
    Update,
    MultipleRightSubsection,
    MultipleRow,
    MultipleBox,
    MultipleBoxTitle,
} from "./styles.ts";

import Button from "../../../components/button/Button.jsx";

import {useState, useEffect} from "react";
import {useAuth} from "../../../context/authContext.jsx";
import {fetchUserProfile, updateUserProfile} from "../../../services/profileService/ProfileService.jsx";

const UserDashboardProfile = () => {
    const {user} = useAuth();

    const [profile, setProfile] = useState({
        name: "",
        image_url: "",
        address: "",
        address_number: "",
        cap: "",
        province: "",
        phone: "",
    });

    const [originalProfile, setOriginalProfile] = useState(null);
    const [snackbar, setSnackbar] = useState({
        open: false,
        message: "",
        severity: "success",
    });

    useEffect(() => {
        if (!user) return;

        fetchUserProfile(user.id)
            .then((data) => {
                if (!data) throw new Error("Nessun hotel trovato per questo utente");

                const profileData = {
                    name: data.name || "",
                    image_url: data.image_url || "/images/user-profile.png",
                    address: data.address || "",
                    address_number: data.address_number || "",
                    cap: data.cap || "",
                    province: data.province || "",
                    phone: data.phone || "",
                    email: data.email || "",
                };
                setProfile(profileData);
                setOriginalProfile(profileData);
            })
            .catch((err) => {
                console.error("Errore nel caricamento dati hotel:", err);
                setSnackbar({
                    open: true,
                    message: "Errore nel caricamento dati hotel.",
                    severity: "error",
                });
            });
    }, [user]);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setProfile((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleUpdate = async () => {
        if (!user) return;

        const requiredFields = [
            "address", "address_number", "cap", "province", "phone"
        ];

        const emptyFields = requiredFields.filter(
            (field) => !profile[field] || profile[field].toString().trim() === ""
        );

        if (emptyFields.length > 0) {
            setSnackbar({
                open: true,
                message: "Compila tutti i campi obbligatori prima di salvare.",
                severity: "error",
            });
            return;
        }

        const payload = {
            name: profile.name,
            image_url: profile.image_url,
            address: profile.address,
            address_number: profile.address_number,
            cap: profile.cap,
            province: profile.province,
            phone: profile.phone,
            email: profile.email,
        };

        await updateUserProfile(user.id, payload)
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
    };

    return (
        <StyledHotelDashboardProfile>
            <MainSection>
                <MainTitle>Il mio profilo</MainTitle>
                <MainDescription>Aggiorna qui la tua foto e i tuoi dati personali</MainDescription>
                <Divider/>
            </MainSection>

            <Section>
                <LeftSubsection>
                    <LeftSubsectionTitle>Foto</LeftSubsectionTitle>
                    <LeftSubsectionDescription>Sarà mostrata nel tuo profilo</LeftSubsectionDescription>
                </LeftSubsection>
                <RightSubsection>
                    <UserIcon src={profile.image_url} alt="User Profile"/>
                    <Delete>Annulla</Delete>
                    <Update>Aggiorna</Update>
                </RightSubsection>
            </Section>

            <Divider/>

            <Section>
                <LeftSubsection>
                    <LeftSubsectionTitle>Indirizzo*</LeftSubsectionTitle>
                    <LeftSubsectionDescription>Sarà mostrato nel tuo profilo</LeftSubsectionDescription>
                </LeftSubsection>
                <MultipleRightSubsection>
                    <MultipleRow>
                        <MultipleBox width="60%">
                            <MultipleBoxTitle>Indirizzo</MultipleBoxTitle>
                            <Input
                                name="address"
                                type="text"
                                value={profile.address}
                                onChange={handleChange}
                                placeholder="Indirizzo"
                            />
                        </MultipleBox>
                        <MultipleBox width="35%">
                            <MultipleBoxTitle>Numero</MultipleBoxTitle>
                            <Input
                                name="address_number"
                                type="text"
                                value={profile.address_number}
                                onChange={handleChange}
                                placeholder="0"
                            />
                        </MultipleBox>
                    </MultipleRow>
                    <MultipleRow>
                        <MultipleBox width="40%">
                            <MultipleBoxTitle>CAP</MultipleBoxTitle>
                            <Input
                                name="cap"
                                type="text"
                                value={profile.cap}
                                onChange={handleChange}
                                placeholder="00000"
                            />
                        </MultipleBox>
                        <MultipleBox width="55%">
                            <MultipleBoxTitle>Provincia</MultipleBoxTitle>
                            <Input
                                name="province"
                                type="text"
                                value={profile.province}
                                onChange={handleChange}
                                placeholder="Provincia"
                            />
                        </MultipleBox>
                    </MultipleRow>
                </MultipleRightSubsection>
            </Section>

            <Divider/>

            <Section>
                <LeftSubsection>
                    <LeftSubsectionTitle>Contatto*</LeftSubsectionTitle>
                    <LeftSubsectionDescription>Solo i luoghi in cui soggiornerai potranno vedere queste
                        informazioni</LeftSubsectionDescription>
                </LeftSubsection>
                <MultipleRightSubsection>
                    <MultipleRow>
                        <MultipleBox width="48%">
                            <MultipleBoxTitle>Telefono</MultipleBoxTitle>
                            <Input
                                name="phone"
                                type="text"
                                value={profile.phone}
                                onChange={handleChange}
                                placeholder="(+39) 000 000 0000"
                            />
                        </MultipleBox>
                        <MultipleBox width="48%">
                            <MultipleBoxTitle>E-mail</MultipleBoxTitle>
                            <Input
                                name="email"
                                type="text"
                                value={profile.email}
                                onChange={handleChange}
                                placeholder="E-mail"
                            />
                        </MultipleBox>
                    </MultipleRow>
                </MultipleRightSubsection>
            </Section>

            <Button
                color="white"
                backgroundcolor="#0a846b"
                borderradius="8px"
                fontweight="500"
                border="1px solid #0a846b"
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
        </StyledHotelDashboardProfile>
    );
};

export default UserDashboardProfile;
