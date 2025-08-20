import {
    StyledHome,
    FirstBanner,
    Hero,
    HeroTitle,
    OrangeHeroSpan,
    HeroInputContainer,
    HeroInput,
    SectionContainer,
    SectionTitle,
    ButtonBox,
    SectionSubtitleContainer,
    SectionSubtitle,
    CardsContainer,
} from "./styles.ts";

import Navbar from "../../components/navbar/Navbar.jsx";
import LodgingCard from "../../components/lodgingCard/LodgingCard.jsx";
import Button from "../../components/button/Button.jsx";
import Footer from "../../components/footer/Footer.jsx";

import {AuthProvider, useAuth} from "../../context/AuthContext";
import {useLodgings} from "../../context/lodgingContext.jsx";

const HomeContent = () => {
    const {lodgings, loading, error} = useLodgings();
    const {user} = useAuth();

    return (
        <StyledHome>
            <Navbar borderbottom="none"/>
            <FirstBanner/>
            <Hero>
                <HeroTitle>
                    Prenota ora e offri al tuo animale{" "}
                    <OrangeHeroSpan>soggiorno sicuro</OrangeHeroSpan> e{" "}
                    <OrangeHeroSpan>pieno di coccole</OrangeHeroSpan>!
                </HeroTitle>

                <HeroInputContainer>
                    <HeroInput borderright type="text" placeholder="Città"/>
                    <HeroInput type="text" placeholder="Razza"/>
                    <Button color="white" backgroundcolor="#f26938" borderradius={"50px"}>
                        Cerca
                    </Button>
                </HeroInputContainer>
            </Hero>

            <SectionContainer>
                <SectionTitle>
                    {user?.role === "employee" ? "Gestione strutture" : "Prenotazioni"}
                </SectionTitle>

                {user?.role === "employee" ? (
                    <SectionSubtitleContainer>
                        <SectionSubtitle>Accedi alla tua Hotel Dashboard per gestire strutture e
                            prenotazioni</SectionSubtitle>
                        <ButtonBox>
                            <Button
                                color="#0a846b"
                                backgroundcolor="transparent"
                                border="2px solid #0a846b"
                                borderradius="50px"
                                fontWeight="500"
                                padding="8px 18px"
                                fontSize="16px"
                                onClick={() => window.location.href = "/hotel-dashboard"}
                            >
                                Vai alla Dashboard {">"}
                            </Button>
                        </ButtonBox>
                    </SectionSubtitleContainer>
                ) : (
                    <>
                        <SectionSubtitleContainer>
                            <SectionSubtitle>Popolare</SectionSubtitle>
                            <ButtonBox>
                                <Button
                                    color="#0a846b"
                                    backgroundcolor="transparent"
                                    border="2px solid #0a846b"
                                    borderradius="50px"
                                    fontWeight="500"
                                    padding="8px 18px"
                                    fontSize="16px"
                                    onClick={() => window.location.href = "/lodgings"}
                                >
                                    Mostra altro {">"}
                                </Button>
                            </ButtonBox>
                        </SectionSubtitleContainer>

                        <CardsContainer>
                            {loading ? (
                                <p>Caricamento...</p>
                            ) : error ? (
                                <p>{error}</p>
                            ) : lodgings.length === 0 ? (
                                <p>Nessuna struttura trovata.</p>
                            ) : (
                                lodgings.map((lodging) => (
                                    <LodgingCard lodging={lodging} key={lodging.id}/>
                                ))
                            )}
                        </CardsContainer>
                    </>
                )}
            </SectionContainer>

            <Footer/>
        </StyledHome>
    );
};

const Home = () => (
    <AuthProvider>
        <HomeContent/>
    </AuthProvider>
);

export default Home;
