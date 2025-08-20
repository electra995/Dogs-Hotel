import styled from "styled-components";

export const StyledRegister = styled.div`
    display: flex;
    width: 100%;
    min-height: 100%;
    background: linear-gradient(
            175.31deg,
            #c7ded9 3.79%,
            rgba(199, 222, 217, 0) 87.34%
    );

    @media (max-width: 768px) {
        justify-content: center;
        flex-direction: column;
    }
`;

export const LogoMobile = styled.img`
    display: none;

    @media (max-width: 1224px) {
        display: block;
        width: 100px;
        padding-bottom: 16px;
    }
`;

export const RegisterImage = styled.img`
    width: 50%;
    height: 100%;
    max-height: 100vh;
    object-fit: cover;

    @media (max-width: 1224px) {
        display: none;
    }
`;

export const RightSection = styled.div`
    width: 34%;
    margin: 0 auto;
    padding-top: 4rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;

    @media (max-width: 1224px) {
        width: 100%;
        padding: 20px 0 4rem;
    }
`;

export const RightContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    text-align: center;

    @media (min-width: 1224px) {
        width: 70%;
        margin: 0 auto;
    }

    @media (max-width: 1224px) {
        width: 80%;
        margin: 0 auto;
    }

    @media (max-width: 478px) {
        padding: 20px;
    }
`;

export const Title = styled.h1`
    color: black;
    font-weight: 600;
    font-size: 36px;
    width: 100%;

    @media (max-width: 1290px) {
        width: 100%;
    }

    @media (max-width: 1224px) {
        font-size: 22px;
    }
`;

export const Subtitle = styled.p`
    width: 100%;
    text-align: center;
    font-size: 22px;
    font-weight: 500;

    @media (max-width: 1224px) {
        margin-top: 0;
        margin-bottom: 10px;
        font-size: 18px;
    }
`;

export const OptionContainer = styled.div`
    display: flex;
    gap: 14px;

    @media (max-width: 768px) {
        & > div {
            padding: 10px 20px;
        }
    }
`;

export const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin-top: 30px;

    @media (max-width: 1224px) {
        gap: 12px;
    }
`;

export const InputContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 4px;

    @media (max-width: 1224px) {
        gap: 0;
    }
`;

export const Label = styled.label`
    font-size: 20px;
    color: #757575;

    @media (max-width: 1224px) {
        font-size: 16px;
    }
`;

export const Input = styled.input`
    width: 100%;
    border: none;
    outline: none;
    background-color: transparent;
    border-bottom: 1px solid #c1bebe;
`;

export const SubmitContainer = styled.div`
    display: flex;
    justify-content: space-between;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const SubmitCheckContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 768px) {
        justify-content: flex-start;
        margin-bottom: 1rem;
    }
`;

export const ButtonBox = styled.div`
    @media (max-width: 1224px) {
        width: 130px;
        margin: 3rem auto 0;
    }
`;

export const InputCheck = styled.input`
    width: 20px;
    height: 20px;
    cursor: pointer;
`;

export const InputCheckSpan = styled.span`
    font-size: 14px;
    color: darkgrey;
`;

export const AccessLoginContainer = styled.div`
    display: flex;
    margin-top: 1rem;
    width: 100%;
    justify-content: center;
    font-size: 16px;
    gap: 6px;

    @media (max-width: 640px) {
        font-size: 14px;
    }
`;

export const LoginLink = styled.span`
    text-transform: capitalize;
    text-decoration: underline;
    font-weight: bold;
    cursor: pointer;
`;
