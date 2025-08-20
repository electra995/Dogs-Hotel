import {StyledUserDashboard, Container} from "./styles.ts";

import Navbar from "../../components/navbar/Navbar.jsx";
import Footer from "../../components/footer/Footer.jsx";
import UserDashboardNav from "./userDashboardNav/UserDashboardNav.jsx";

import {Outlet} from "react-router-dom";
import {UserProfileProvider} from "../../context/userContext.jsx";

const UserDashboard = () => {
    return (
        <StyledUserDashboard>
            <Navbar/>
            <Container>
                <UserDashboardNav/>
                <UserProfileProvider>
                    <Outlet/>
                </UserProfileProvider>
            </Container>
            <Footer/>
        </StyledUserDashboard>
    );
};

export default UserDashboard;
