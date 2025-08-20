import styled from "styled-components";

export const StyledLodgings = styled.div`
    width: 100%;
    height: 100%;
    min-height: 100vh;
    background: linear-gradient(
            175.31deg,
            #c7ded9 3.79%,
            rgba(199, 222, 217, 0) 87.34%
    );
    margin: auto;
    padding-bottom: 10rem;
`;

export const LodgingsContainer = styled.div`
    display: flex;
    padding-top: 60px;
    width: 80%;
    margin: auto;
    gap: 20px;
`;

export const LeftContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 24%;
    padding: 22px;
    background-color: white;
    border-radius: 10px;
    gap: 10px;
    height: min-content;
`;

export const LeftTitle = styled.h1`
    margin: 0;
    text-transform: uppercase;
    color: #ff7300;
    font-size: 18px;
`;

export const LeftSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 10px;
`;

export const LeftSectionTitle = styled.span`
    font-weight: 600;
`;

export const LeftSectionItem = styled.span`
    cursor: pointer;`
;

export const RightContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 74%;
`;

export const InputRangeContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-weight: bold;
    font-size: 12px;
    margin-top: 2rem;
`;

export const InputRangeDetails = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const InputRange = styled.input`
    cursor: pointer;
    accent-color: #ff8400;
`;

export const CardsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 10px 40px;
    justify-content: start;

    @media (max-width: 1500px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 870px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;
