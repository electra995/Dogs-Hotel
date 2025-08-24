import {
    StyledNavbar,
    LeftContainer,
    LeftList,
    Icon,
    LeftListItem,
    RightContainer,
    HamburgerIcon,
    MobileMenu
} from "./styles.ts";

import Button from "../button/Button.jsx";

import {Link} from "react-router-dom";
import {useAuth} from "../../context/authContext.jsx";
import {useState} from "react";

const Navbar = ({borderbottom}) => {
    const {user, logout} = useAuth();

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <StyledNavbar borderbottom={borderbottom}>
            <LeftContainer>
                <Link to="/">
                    <Icon src="/images/logo-navbar.svg" alt="Logo"/>
                </Link>
                <LeftList>
                    {user && (
                        <>
                            <span>Benvenuto/a, {user.name}</span>
                            <LeftListItem>
                                <Link
                                    to={
                                        user.role === "employee"
                                            ? "/hotel-dashboard/profile"
                                            : "/user-dashboard/profile"
                                    }
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

            <HamburgerIcon
                src="/images/menu-burguer.svg"
                alt="Menu"
                onClick={() => setMenuOpen(!menuOpen)}
            />

            {menuOpen && (
                <MobileMenu>
                    {user ? (
                        <>
                            <Link
                                to={
                                    user.role === "employee"
                                        ? "/hotel-dashboard/profile"
                                        : "/user-dashboard/profile"
                                }
                            >
                                {user.role === "employee" ? "Hotel Dashboard" : "Profilo"}
                            </Link>
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
                        </>
                    ) : (
                        <>
                            <Link to="/login">Login</Link>
                            <Link to="/register">Registrati</Link>
                            <Link to="/lodgings">Prenotazioni</Link>
                        </>
                    )}
                </MobileMenu>
            )}
        </StyledNavbar>
    );
};

export default Navbar;
