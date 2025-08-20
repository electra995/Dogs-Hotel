import Divider from "@mui/material/Divider";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

import {
    StyleHotelDashboardProfile,
    MainSection,
    MainTitle,
    MainDescription,
    Section,
    LeftSubsection,
    LeftSubsectionTitle,
    LeftSubsectionDescription,
    Input,
    RightSubsection,
    UserIcon,
    Delete,
    Update,
    DescriptionInput,
    MultipleRightSubsection,
    MultipleRow,
    MultipleBox,
    MultipleBoxTitle,
    ScheduleColumn,
    ScheduleBox,
    ValueInput,
    DiscountTitle,
} from "./styles.ts";

import AnimalButton from "./animalButton/AnimalButton.jsx";
import ToggleButtons from "./toggleButton/ToggleButton.jsx";
import ScheduleButton from "./selectButton/SelectButton.jsx";
import Button from "../../../components/button/Button.jsx";

import {useEffect, useState} from "react";
import {useAuth} from "../../../context/authContext.jsx";
import {fetchHotelProfileByUserId, updateHotelProfile} from "../../../services/hotelService/HotelService.jsx";

const HotelDashboardProfile = () => {
    const {user} = useAuth();

    const [profile, setProfile] = useState({
        name: "",
        image_url: "",
        description: "",
        address: "",
        address_number: "",
        city: "",
        cap: "",
        province: "",
        social_url: "",
        accepted_animals: "",
        type: "",
        checkin: "",
        checkout: "",
        daily: "",
        discount: "",
    });

    const [originalProfile, setOriginalProfile] = useState(null);
    const [acceptedAnimals, setAcceptedAnimals] = useState([]);
    const [hotelTypes, setHotelTypes] = useState([]);
    const [snackbar, setSnackbar] = useState({
        open: false,
        message: "",
        severity: "success",
    });

    useEffect(() => {
        if (!user) return;

        fetchHotelProfileByUserId(user.id)
            .then((data) => {
                if (!data) throw new Error("Nessun hotel trovato per questo utente");

                setAcceptedAnimals(data.accepted_animals || []);
                setHotelTypes(data.type || []);

                const profileData = {
                    id: data.id,
                    name: data.name || "",
                    image_url: data.image_url || "/images/user-profile.png",
                    description: data.description || "",
                    address: data.address || "",
                    address_number: data.address_number || "",
                    city: data.city || "",
                    cap: data.cap || "",
                    province: data.province || "",
                    social_url: data.social_url || "",
                    checkin: data.checkin || "",
                    checkout: data.checkout || "",
                    daily: data.daily || 0,
                    discount: data.discount * 100 || 0,
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
            "name", "address", "address_number",
            "city", "cap", "province", "checkin",
            "checkout", "daily", "discount"
        ];

        const emptyFields = requiredFields.filter(
            (field) => !profile[field] || profile[field].toString().trim() === ""
        );

        if (acceptedAnimals.length === 0 || hotelTypes.length === 0 || emptyFields.length > 0) {
            setSnackbar({
                open: true,
                message: "Compila tutti i campi obbligatori prima di salvare.",
                severity: "error",
            });
            return;
        }

        const payload = {
            id: profile.id,
            name: profile.name,
            image_url: profile.image_url,
            description: profile.description,
            address: profile.address,
            address_number: profile.address_number,
            city: profile.city,
            cap: profile.cap,
            province: profile.province,
            social_url: profile.social_url,
            accepted_animals: acceptedAnimals,
            type: hotelTypes,
            checkin: profile.checkin,
            checkout: profile.checkout,
            daily: profile.daily,
            discount: profile.discount / 100,
        };

        await updateHotelProfile(profile.id, payload)
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
        <StyleHotelDashboardProfile>
            <MainSection>
                <MainTitle>Il mio profilo</MainTitle>
                <MainDescription>
                    Aggiorna qui la tua foto e i tuoi dati personali
                </MainDescription>
                <Divider/>
            </MainSection>

            <Section>
                <LeftSubsection>
                    <LeftSubsectionTitle>Nome dell'Hotel*</LeftSubsectionTitle>
                    <LeftSubsectionDescription>Sarà mostrato nel tuo profilo</LeftSubsectionDescription>
                </LeftSubsection>
                <Input
                    width="100%"
                    type="text"
                    placeholder="Nome"
                    name="name"
                    value={profile.name}
                    onChange={handleChange}
                />
            </Section>

            <Divider/>

            <Section>
                <LeftSubsection>
                    <LeftSubsectionTitle>Foto</LeftSubsectionTitle>
                    <LeftSubsectionDescription>Sarà mostrata nel tuo profilo</LeftSubsectionDescription>
                </LeftSubsection>
                <RightSubsection>
                    <UserIcon src={profile.image_url} alt="User Profile"/>
                    <Delete>Elimina</Delete>
                    <Update>Aggiorna</Update>
                </RightSubsection>
            </Section>

            <Divider/>

            <Section>
                <LeftSubsection>
                    <LeftSubsectionTitle>Descrizione</LeftSubsectionTitle>
                    <LeftSubsectionDescription>Scrivi ciò che vuoi che i clienti sappiano</LeftSubsectionDescription>
                </LeftSubsection>
                <RightSubsection>
                    <DescriptionInput
                        name="description"
                        cols="30"
                        rows="10"
                        value={profile.description}
                        onChange={handleChange}
                    />
                </RightSubsection>
            </Section>

            <Divider/>

            <Section>
                <LeftSubsection>
                    <LeftSubsectionTitle>Località*</LeftSubsectionTitle>
                    <LeftSubsectionDescription>Sarà mostrato nel tuo profilo</LeftSubsectionDescription>
                </LeftSubsection>
                <MultipleRightSubsection>
                    <MultipleRow>
                        <MultipleBox width="60%">
                            <MultipleBoxTitle>Indirizzo</MultipleBoxTitle>
                            <Input
                                name="address"
                                type="text"
                                placeholder="Indirizzo"
                                value={profile.address}
                                onChange={handleChange}
                            />
                        </MultipleBox>
                        <MultipleBox width="35%">
                            <MultipleBoxTitle>Numero</MultipleBoxTitle>
                            <Input
                                name="address_number"
                                type="text"
                                placeholder="0"
                                value={profile.address_number}
                                onChange={handleChange}
                            />
                        </MultipleBox>
                    </MultipleRow>
                    <MultipleRow>
                        <MultipleBox width="40%">
                            <MultipleBoxTitle>CAP</MultipleBoxTitle>
                            <Input
                                name="cap"
                                type="text"
                                placeholder="00000"
                                value={profile.cap}
                                onChange={handleChange}
                            />
                        </MultipleBox>
                        <MultipleBox width="40%">
                            <MultipleBoxTitle>Città</MultipleBoxTitle>
                            <Input
                                name="city"
                                type="text"
                                placeholder="Città"
                                value={profile.city}
                                onChange={handleChange}
                            />
                        </MultipleBox>
                        <MultipleBox width="55%">
                            <MultipleBoxTitle>Provincia</MultipleBoxTitle>
                            <Input
                                name="province"
                                type="text"
                                placeholder="Provincia"
                                value={profile.province}
                                onChange={handleChange}
                            />
                        </MultipleBox>
                    </MultipleRow>
                </MultipleRightSubsection>
            </Section>

            <Divider/>

            <Section>
                <LeftSubsection>
                    <LeftSubsectionTitle>Social network</LeftSubsectionTitle>
                    <LeftSubsectionDescription>Saranno mostrati nel tuo profilo</LeftSubsectionDescription>
                </LeftSubsection>
                <MultipleRightSubsection>
                    <MultipleRow>
                        <MultipleBox width="48%">
                            <MultipleBoxTitle>Incolla il link</MultipleBoxTitle>
                            <Input
                                name="social_url"
                                type="text"
                                placeholder="URL"
                                value={profile.social_url}
                                onChange={handleChange}
                            />
                        </MultipleBox>
                    </MultipleRow>
                </MultipleRightSubsection>
            </Section>

            <Divider/>

            <Section>
                <LeftSubsection>
                    <LeftSubsectionTitle>Animali accettati*</LeftSubsectionTitle>
                    <LeftSubsectionDescription>Seleziona quali animali saranno accettati nel tuo
                        hotel</LeftSubsectionDescription>
                </LeftSubsection>
                <RightSubsection>
                    <AnimalButton selectedIds={acceptedAnimals}
                                  onChange={setAcceptedAnimals}/>
                </RightSubsection>
            </Section>

            <Divider/>

            <Section>
                <LeftSubsection>
                    <LeftSubsectionTitle>Tipo di Hotel*</LeftSubsectionTitle>
                    <LeftSubsectionDescription>Seleziona l’opzione che più si allinea con l’essenza del tuo
                        stabilimento</LeftSubsectionDescription>
                </LeftSubsection>
                <RightSubsection>
                    <ToggleButtons selectedIds={hotelTypes}
                                   onChange={setHotelTypes}/>
                </RightSubsection>
            </Section>

            <Divider/>

            <Section>
                <LeftSubsection minwidth="120px">
                    <LeftSubsectionTitle>Check-in*</LeftSubsectionTitle>
                    <LeftSubsectionDescription>Seleziona orario</LeftSubsectionDescription>
                </LeftSubsection>
                <ScheduleColumn>
                    <ScheduleBox>
                        <ScheduleButton
                            name="checkin"
                            value={profile.checkin}
                            onChange={handleChange}
                        />
                    </ScheduleBox>
                </ScheduleColumn>

                <LeftSubsection minwidth="120px">
                    <LeftSubsectionTitle>Check-out*</LeftSubsectionTitle>
                    <LeftSubsectionDescription>Seleziona orario</LeftSubsectionDescription>
                </LeftSubsection>
                <ScheduleColumn>
                    <ScheduleBox>
                        <ScheduleButton
                            name="checkout"
                            value={profile.checkout}
                            onChange={handleChange}
                        />
                    </ScheduleBox>
                </ScheduleColumn>
            </Section>

            <Divider/>

            <Section>
                <LeftSubsection>
                    <LeftSubsectionTitle>Prezzi del soggiorno*</LeftSubsectionTitle>
                    <LeftSubsectionDescription>Inserisci il prezzo</LeftSubsectionDescription>
                </LeftSubsection>
                <ScheduleColumn>
                    <DiscountTitle>Prezzo / Sconto</DiscountTitle>
                    <ScheduleBox>
                        <ValueInput
                            name="daily"
                            type="number"
                            value={profile.daily}
                            onChange={handleChange}
                        />
                        -
                        <ValueInput
                            name="discount"
                            type="number"
                            value={profile.discount}
                            onChange={handleChange}
                        />
                        %
                    </ScheduleBox>
                </ScheduleColumn>
            </Section>

            <Divider/>

            <Button
                color="white"
                backgroundcolor="#0a846b"
                borderradius="8px"
                fontWeight="500"
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
        </StyleHotelDashboardProfile>
    );
};

export default HotelDashboardProfile;
