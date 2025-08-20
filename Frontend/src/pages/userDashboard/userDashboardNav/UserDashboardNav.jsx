import {StyledUserDashboardNav, Icon} from "./styles.ts";

import {NavLink} from "react-router-dom";

const UserDashboardNav = () => {
    return (
        <StyledUserDashboardNav>
            <NavLink to="/user-dashboard/reservations" className={({isActive}) => isActive ? "active" : ""}>
                <Icon src="/images/reservation.svg" alt=""/>
                Le mie prenotazioni
            </NavLink>

            <NavLink to="/user-dashboard/profile" className={({isActive}) => isActive ? "active" : ""}>
                <Icon src="/images/profile.svg" alt=""/>
                Profilo
            </NavLink>
        </StyledUserDashboardNav>
    );
};

export default UserDashboardNav;
