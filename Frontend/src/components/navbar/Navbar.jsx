import {
    StyledNavbar,
    LeftContainer,
    LeftList,
    Icon,
    LeftListItem,
    RightContainer,
} from "./styles.ts";

import Button from "../button/Button.jsx";

import {Link} from "react-router-dom";
import {useAuth} from "../../context/AuthContext";

const Navbar = ({borderbottom}) => {
    const {user, logout} = useAuth();

    return (
        <StyledNavbar borderbottom={borderbottom}>
            <LeftContainer>
                <LeftList>
                    <Link to="/">
                        <Icon src="/images/logo-navbar.svg" alt=""/>
                    </Link>
                    {user && (
                        <>
                            <span>Benvenuto/a, {user.name}</span>
                            <LeftListItem>
                                <Link
                                    to={user.role === "employee" ? "/hotel-dashboard/profile" : "/user-dashboard/profile"}
                                >
                                    {user.role === "employee" ? "Hotel Dashboard" : "Profilo"}
                                </Link>
                            </LeftListItem>
                        </>
                    )}
                    {(!user || user.role !== "employee") && (
                        <LeftListItem>
                            <Link to="/lodgings">Prenotazioni</Link>
                        </LeftListItem>
                    )}

                </LeftList>
            </LeftContainer>
            <RightContainer>
                {user ? (
                    <Button
                        onClick={logout}
                        padding="10px 22px"
                        fontSize="18px"
                        color="white"
                        backgroundcolor="#888"
                        borderradius="50px"
                    >
                        Logout
                    </Button>
                ) : (
                    <>
                        <Link to="/login" style={{textDecoration: "none"}}>
                            <Button
                                padding="10px 22px"
                                fontSize="18px"
                                color="white"
                                borderradius="50px"
                                backgroundcolor="#0a846b"
                            >
                                Login
                            </Button>
                        </Link>
                        <Link to="/register" style={{textDecoration: "none"}}>
                            <Button
                                padding="10px 22px"
                                fontSize="18px"
                                color="white"
                                backgroundcolor="#f26938"
                                borderradius="50px"
                            >
                                Registrati
                            </Button>
                        </Link>
                    </>
                )}
            </RightContainer>
        </StyledNavbar>
    );
};

export default Navbar;
