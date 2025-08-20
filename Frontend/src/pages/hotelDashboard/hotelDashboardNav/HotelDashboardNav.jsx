import {StyledHotelDashboardNav, Icon} from "./styles.ts";

import {NavLink} from "react-router-dom";

const HotelDashboardNav = () => {
    return (
        <StyledHotelDashboardNav>
            <NavLink
                style={({isActive}) =>
                    isActive ? {backgroundColor: "#0A846B", color: "white"} : {}
                }
                to="/hotel-dashboard/panel"
            >
                <Icon src="/images/barras.svg" alt=""/>
                Pannello
            </NavLink>
            <NavLink
                style={({isActive}) =>
                    isActive ? {backgroundColor: "#0A846B", color: "white"} : {}
                }
                to="/hotel-dashboard/historic"
            >
                <Icon src="/images/historic.svg" alt=""/>
                Storico dei clienti
            </NavLink>
            <NavLink
                style={({isActive}) =>
                    isActive ? {backgroundColor: "#0A846B", color: "white"} : {}
                }
                to="/hotel-dashboard/profile"
            >
                <Icon src="/images/profile.svg" alt=""/>
                Profilo
            </NavLink>
        </StyledHotelDashboardNav>
    );
};

export default HotelDashboardNav;
