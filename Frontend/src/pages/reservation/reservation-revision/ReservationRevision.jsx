import {
    StyledReservationRevision,
    ReservationRevisionContainer,
    ReservationRevisionSection,
    BodyContainer,
    LeftContainer,
    LeftTitleRow,
    LeftTitle,
    Subsection,
    SubsectionTitle,
    SubsectionRow,
    SubsectionRowTitle,
    SubsectionRowDetail,
    RightContainer,
    RightContainerRow,
    RowTitle,
    RowDetail,
    TotalRow,
    TotalDetail,
} from "./styles.ts";

import Navbar from "../../../components/navbar/Navbar.jsx";
import ReservationNav from "../../../components/reservationNav/ReservationNav.jsx";
import Footer from "../../../components/footer/Footer.jsx";

import {useLocation} from "react-router-dom";

const ReservationRevision = () => {
    const ANIMALS = [
        {id: "1", label: "Cane di taglia piccola"},
        {id: "2", label: "Cane di taglia media"},
        {id: "3", label: "Cane di taglia grande"},
        {id: "4", label: "Gatto"},
    ];

    const SERVICES = [
        {id: 1, label: "Bagno"},
        {id: 2, label: "Tosatura"},
        {id: 3, label: "Passeggio"},
        {id: 4, label: "Check-up"},
    ];

    const location = useLocation();
    const {
        userData,
        hotelData,
        checkInDate,
        checkOutDate,
        totalDays,
        total,
        petProfile,
        additionalServices
    } = location.state || {};

    const petTypeName = ANIMALS.find(a => a.id === petProfile?.type)?.label || "Sconosciuto";

    const serviceNames = additionalServices?.map(
        serviceId => SERVICES.find(s => s.id === serviceId)?.label || "Servizio sconosciuto"
    );

    console.log("Location state:", location.state);

    return (
        <StyledReservationRevision>
            <Navbar/>
            <ReservationRevisionContainer>
                <ReservationRevisionSection>
                    <ReservationNav hotelData={hotelData} stepImage={"/images/reservation-revision-step.svg"}>
                    </ReservationNav>

                    <BodyContainer>
                        <LeftContainer>
                            <LeftTitleRow>
                                <LeftTitle>Revisione</LeftTitle>
                            </LeftTitleRow>
                            <Subsection>
                                <SubsectionTitle>Proprietario</SubsectionTitle>
                                <SubsectionRow>
                                    <SubsectionRowTitle>Nome</SubsectionRowTitle>
                                    <SubsectionRowDetail>
                                        {userData.name}
                                    </SubsectionRowDetail>
                                </SubsectionRow>
                                <SubsectionRow>
                                    <SubsectionRowTitle>Indirizzo</SubsectionRowTitle>
                                    <SubsectionRowDetail>
                                        {userData.address}, {userData.address_number}, {userData.cap} {userData.province}
                                    </SubsectionRowDetail>
                                </SubsectionRow>
                                <SubsectionRow>
                                    <SubsectionRowTitle>E-mail</SubsectionRowTitle>
                                    <SubsectionRowDetail>
                                        {userData.email}
                                    </SubsectionRowDetail>
                                </SubsectionRow>
                                <SubsectionRow>
                                    <SubsectionRowTitle>Telefono</SubsectionRowTitle>
                                    <SubsectionRowDetail>{userData.phone}</SubsectionRowDetail>
                                </SubsectionRow>
                            </Subsection>
                            <Subsection>
                                <SubsectionTitle>Animale</SubsectionTitle>
                                <SubsectionRow>
                                    <SubsectionRowTitle>Nome</SubsectionRowTitle>
                                    <SubsectionRowDetail>{petProfile.name}</SubsectionRowDetail>
                                </SubsectionRow>
                                <SubsectionRow>
                                    <SubsectionRowTitle>Tipo</SubsectionRowTitle>
                                    <SubsectionRowDetail>{petTypeName}</SubsectionRowDetail>
                                </SubsectionRow>
                                <SubsectionRow>
                                    <SubsectionRowTitle>Età</SubsectionRowTitle>
                                    <SubsectionRowDetail>{petProfile.age}</SubsectionRowDetail>
                                </SubsectionRow>
                                <SubsectionRow>
                                    <SubsectionRowTitle>Servizi addizionali</SubsectionRowTitle>
                                    <SubsectionRowDetail>{serviceNames.join(", ")}</SubsectionRowDetail>
                                </SubsectionRow>
                            </Subsection>
                            <Subsection>
                                <SubsectionTitle>Prenotazione</SubsectionTitle>
                                <SubsectionRow>
                                    <SubsectionRowTitle>Hotel</SubsectionRowTitle>
                                    <SubsectionRowDetail>{hotelData.name}</SubsectionRowDetail>
                                </SubsectionRow>
                                <SubsectionRow>
                                    <SubsectionRowTitle>Indirizzo</SubsectionRowTitle>
                                    <SubsectionRowDetail>
                                        {hotelData.address}, {hotelData.address_number}, {hotelData.cap} {hotelData.city} {hotelData.province}
                                    </SubsectionRowDetail>
                                </SubsectionRow>
                                <SubsectionRow>
                                    <SubsectionRowTitle>Check-in</SubsectionRowTitle>
                                    <SubsectionRowDetail>
                                        {new Date(checkInDate).toLocaleDateString("it-IT", {
                                            year: "numeric",
                                            month: "long",
                                            day: "numeric",
                                        })}
                                    </SubsectionRowDetail>
                                </SubsectionRow>
                                <SubsectionRow>
                                    <SubsectionRowTitle>Check-out</SubsectionRowTitle>
                                    <SubsectionRowDetail>
                                        {new Date(checkOutDate).toLocaleDateString("it-IT", {
                                            year: "numeric",
                                            month: "long",
                                            day: "numeric",
                                        })}
                                    </SubsectionRowDetail>
                                </SubsectionRow>
                                <SubsectionRow>
                                    <SubsectionRowTitle>Note</SubsectionRowTitle>
                                    <SubsectionRowDetail>
                                        {petProfile.remarks}
                                    </SubsectionRowDetail>
                                </SubsectionRow>
                            </Subsection>
                            <Subsection borderbottom="none">
                                <SubsectionTitle>Pagamento</SubsectionTitle>
                                <SubsectionRow>
                                    <SubsectionRowTitle>Metodo di pagamento</SubsectionRowTitle>
                                    <SubsectionRowDetail>
                                        Carta di credito
                                    </SubsectionRowDetail>
                                </SubsectionRow>
                            </Subsection>
                        </LeftContainer>

                        <RightContainer>
                            <RightContainerRow>
                                <RowTitle>Soggiorno di {totalDays} {totalDays > 1 ? "giorni" : "giorno"}</RowTitle>
                                <RowDetail>€{total}</RowDetail>
                            </RightContainerRow>
                            <TotalRow>
                                <RowTitle>Subtotale:</RowTitle>
                                <TotalDetail>€{total}</TotalDetail>
                            </TotalRow>
                        </RightContainer>
                    </BodyContainer>
                </ReservationRevisionSection>
            </ReservationRevisionContainer>
            <Footer/>
        </StyledReservationRevision>
    );
};

export default ReservationRevision;
