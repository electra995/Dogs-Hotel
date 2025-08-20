import {Outlet} from "react-router-dom";

import Navbar from "../../components/navbar/Navbar.jsx";
import HotelDashboardNav from "./hotelDashboardNav/HotelDashboardNav.jsx";

import {StyledHome, Container} from "./styles.ts";

import {ReservationsProvider} from "../../context/hotelContext.jsx";

const HotelDashboard = () => {
    return (
        <StyledHome>
            <Navbar/>
            <Container>
                <HotelDashboardNav/>
                <ReservationsProvider>
                    <Outlet/>
                </ReservationsProvider>
            </Container>
        </StyledHome>
    );
};

export default HotelDashboard;
