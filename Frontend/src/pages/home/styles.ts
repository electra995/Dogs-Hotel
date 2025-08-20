import styled from "styled-components";

export const StyledHome = styled.div`
    width: 100%;
    height: 100%;
    background: linear-gradient(
            175.31deg,
            #c7ded9 3.79%,
            rgba(199, 222, 217, 0) 87.34%
    );
    margin: auto;
    position: relative;
    z-index: 10;
`;

export const Hero = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 20px;
    width: 50%;
    margin: 24.7rem auto 60px auto;
    padding-top: 14px;
    padding-bottom: 14px;
    z-index: 10;
    position: relative;

    @media (max-width: 1024px) {
        width: 90%;
    }
`;

export const HeroTitle = styled.h1`
    font-size: 26px;
    text-align: center;
    width: 80%;
    margin: 0 auto;
    font-weight: 600;

    @media (max-width: 1024px) {
        font-size: 22px;
    }

    @media (max-width: 646px) {
        font-size: 18px;
    }
`;

export const OrangeHeroSpan = styled.span`
    color: #f26938;
`;

export const HeroInputContainer = styled.form`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 95%;
    margin: 10px auto 0 auto;
    background-color: white;
    box-shadow: 0 0 20px 0 #0000001a;
    padding: 6px;
    border-radius: 30px;
`;

export const HeroInput = styled.input`
    width: 40%;
    outline: none;
    border: none;
    border-right: ${(props) =>
            props.borderright ? "1px solid #bebcbc" : "none"};
    margin-left: 10px;
    height: 30px;

    &::placeholder {
        color: #bebcbc;
    }
`;

export const SectionContainer = styled.div`
    margin: auto;
    width: 80%;

    @media (max-width: 560px) {
        width: 90%;
    }
`;

export const SectionTitle = styled.span`
    font-weight: 500;
    font-size: 20px;

    @media (max-width: 1224px) {
        font-size: 16px;
    }
`;

export const ButtonBox = styled.div`
    @media (max-width: 1024px) {
        display: none;
    }
`;

export const SectionSubtitleContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 14px;
`;

export const SectionSubtitle = styled.h2`
    margin: 0;
    font-size: 30px;
    color: #0a846b;

    @media (max-width: 1224px) {
        font-size: 26px;
    }

    @media (max-width: 600px) {
        font-size: 20px;
    }
`;

export const CardsContainer = styled.div`
    display: grid;
    justify-content: start;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px 70px;

    @media (max-width: 1500px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 870px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

export const FirstBanner = styled.div`
    background-image: url("/images/first-banner.png");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 640px;
    position: absolute;
    top: 0;
    left: 0;
`;
