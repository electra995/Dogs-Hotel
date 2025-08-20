import {
    StyledLodgings,
    LodgingsContainer,
    LeftContainer,
    LeftTitle,
    LeftSection,
    LeftSectionTitle,
    LeftSectionItem,
    RightContainer,
    InputRangeContainer,
    InputRangeDetails,
    InputRange,
    CardsContainer,
} from "./styles.ts";

import LodgingCard from "../../components/lodgingCard/LodgingCard.jsx";
import Navbar from "../../components/navbar/Navbar.jsx";

import {useLodgings} from "../../context/lodgingContext.jsx";

const Lodgings = () => {

    const {lodgings, loading, error} = useLodgings();

    return (
        <StyledLodgings>
            <Navbar/>
            <LodgingsContainer>
                <LeftContainer>
                    <LeftTitle>Filtri</LeftTitle>
                    <LeftSection>
                        <LeftSectionTitle>Tipo</LeftSectionTitle>
                        <LeftSectionItem>Asilo diurno</LeftSectionItem>
                        <LeftSectionItem>Pensione lunga durata</LeftSectionItem>
                        <LeftSectionItem>Hotel pet friendly</LeftSectionItem>
                    </LeftSection>
                    <LeftSection>
                        <LeftSectionTitle>Viaggio con</LeftSectionTitle>
                        <LeftSectionItem>Cane di taglia piccola</LeftSectionItem>
                        <LeftSectionItem>Cane di taglia media</LeftSectionItem>
                        <LeftSectionItem>Cane di taglia grande</LeftSectionItem>
                        <LeftSectionItem>Gatto</LeftSectionItem>
                        <InputRangeContainer>
                            <InputRangeDetails>
                                <span>€ 0</span>
                                <span>€ 1000</span>
                            </InputRangeDetails>
                            <InputRange type="range"/>
                        </InputRangeContainer>
                    </LeftSection>
                </LeftContainer>
                <RightContainer>
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
                </RightContainer>
            </LodgingsContainer>
        </StyledLodgings>
    );
};

export default Lodgings;
