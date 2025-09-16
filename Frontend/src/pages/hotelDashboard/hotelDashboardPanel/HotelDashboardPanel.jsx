import {Swiper, SwiperSlide} from "swiper/react";

import {
    StyledHotelDashboardPanel,
    FirstRow,
    GuestsBox,
    GuestsTitle,
    GuestCardsContainer,
    GuestCard,
    GuestAvatar,
    GuestName,
    GuestService,
    GuestDate,
    GuestPrice,
    GuestPayStatus,
    SecondRow,
    OccupantsBox,
    OccupantsTitle,
    OccupantsCardContainer,
    OccupantCard,
    OccupantAvatar,
    OccupantMiddleBox,
    OccupantName,
    OccupantServiceBox,
    OccupantService,
    OccupantDate,
    OccupantRightBox,
    OccupantPrice,
    OccupantPayStatus
} from "./styles.ts";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";

import {Pagination, Navigation} from "swiper/modules";
import {useReservations} from "../../../context/hotelContext.jsx";

const HotelDashboardPanel = () => {

    const {reservations, loading, error} = useReservations();

    const today = new Date();
    const arrivingGuests = reservations.filter(r => new Date(r.checkin_date) > today);
    const pastOccupants = reservations.filter(r => new Date(r.checkin_date) <= today);

    const additionalServicesLabel = {
        1: "Bagno",
        2: "Tosatura",
        3: "Passeggio",
        4: "Check-up",
    };

    const getPaymentStatus = (card) => {
        return card && card.trim() !== "" ? "Pagato" : "Non pagato";
    };

    if (loading) return <p>Caricamento...</p>;
    if (error) return <p></p>;

    return (
        <StyledHotelDashboardPanel>
            <FirstRow>
                <GuestsBox>
                    <GuestsTitle>Ospiti in arrivo</GuestsTitle>
                    <GuestCardsContainer>
                        <Swiper
                            height={"100%"}
                            slidesPerView={Math.min(Math.max(arrivingGuests.length - 1, 1), 3)}
                            navigation={true}
                            modules={[Pagination, Navigation]}
                            id="mySwiper4"
                        >
                            {arrivingGuests.map((guest) => (
                                <SwiperSlide key={guest.id}>
                                    <GuestCard status={getPaymentStatus(guest.card)}>
                                        <GuestAvatar src={guest.user?.image_url || "/images/default-user.png"}/>
                                        <GuestName
                                            status={getPaymentStatus(guest.card)}>{guest.user?.name} - {guest.pet_name}</GuestName>
                                        {guest.additional_services && guest.additional_services.length > 0 ? (
                                            guest.additional_services.map(serviceId => (
                                                <GuestService key={serviceId} status={getPaymentStatus(guest.card)}>
                                                    {additionalServicesLabel[serviceId] || "Servizio sconosciuto"}
                                                </GuestService>
                                            ))
                                        ) : (
                                            <GuestService status={getPaymentStatus(guest.card)}>Nessun
                                                servizio</GuestService>
                                        )}
                                        <GuestDate status={getPaymentStatus(guest.card)}>
                                            {new Date(guest.checkin_date).toLocaleDateString("it-IT")}
                                        </GuestDate>
                                        <GuestPrice>{`€ ${guest.total_price.toFixed(2)}`}</GuestPrice>
                                        <GuestPayStatus>{getPaymentStatus(guest.card)}</GuestPayStatus>
                                    </GuestCard>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </GuestCardsContainer>
                </GuestsBox>
            </FirstRow>
            <SecondRow>
                <OccupantsBox>
                    <OccupantsTitle>Ospiti attuali e passati</OccupantsTitle>
                    <OccupantsCardContainer>
                        {pastOccupants.map((occupant) => (
                            <OccupantCard key={occupant.id}>
                                <OccupantAvatar src={occupant.user?.image_url || "/images/user-profile.png"}/>
                                <OccupantMiddleBox>
                                    <OccupantName>{occupant.user?.name} - {occupant.pet_name}</OccupantName>
                                    <OccupantServiceBox>
                                        {occupant.additional_services && occupant.additional_services.length > 0 ? (
                                            occupant.additional_services.map(serviceId => (
                                                <OccupantService key={serviceId}
                                                                 service={additionalServicesLabel[serviceId]}
                                                                 status={getPaymentStatus(occupant.card)}>
                                                    {additionalServicesLabel[serviceId] || "Servizio sconosciuto"}
                                                </OccupantService>
                                            ))
                                        ) : (
                                            <OccupantService status={getPaymentStatus(occupant.card)}>Nessun
                                                servizio</OccupantService>
                                        )}
                                    </OccupantServiceBox>
                                    <OccupantDate>{new Date(occupant.checkin_date).toLocaleDateString("it-IT")}</OccupantDate>
                                </OccupantMiddleBox>
                                <OccupantRightBox>
                                    <OccupantPrice>€ {occupant.total_price.toFixed(2)}</OccupantPrice>
                                    <OccupantPayStatus>{getPaymentStatus(occupant.card)}</OccupantPayStatus>
                                </OccupantRightBox>
                            </OccupantCard>
                        ))}
                    </OccupantsCardContainer>
                </OccupantsBox>
            </SecondRow>
        </StyledHotelDashboardPanel>
    );
};

export default HotelDashboardPanel;
