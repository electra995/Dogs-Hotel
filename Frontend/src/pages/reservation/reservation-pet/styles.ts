import styled from "styled-components";

export const StyledPetRegister = styled.div`
    width: 100%;
    height: 100%;
    min-height: 100vh;
    background: linear-gradient(
            175.31deg,
            #c7ded9 3.79%,
            rgba(199, 222, 217, 0) 87.34%
    );
    margin: auto;
`;

export const PetRegisterContainer = styled.div`
    width: 80%;
    margin: auto auto 2rem;

    @media (max-width: 600px) {
        width: 100%;
    }
`;

export const PetRegisterSection = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 10px;
    margin-top: 4rem;
    padding-bottom: 26px;
    box-shadow: 0 0 50px 0 #0000000d;

    @media (max-width: 1000px) {
        margin-top: 2rem;
    }

    @media (max-width: 600px) {
        margin-top: 1rem;
    }
`;

export const PetRegisterBodyContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    padding: 32px 40px;
    gap: 100px;

    @media (max-width: 1400px) {
        gap: 50px;
    }

    @media (max-width: 1100px) {
        flex-direction: column;
        gap: 10px;
        margin-top: 0;
        padding: 20px 30px;
    }
`;

export const PetRegisterLeftContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 10px;
`;

export const PetMainInfos = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 20px;
`;

export const AditionalServices = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin-bottom: 20px;
`;

export const AdicionalServicesRow = styled.div`
    display: flex;
    gap: 14px;
`;

export const Remarks = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
`;

export const RemarkInput = styled.textarea`
    border-radius: 4px;
    outline: none;
    padding: 14px;
    border-color: #e0e0e0;
    font-weight: 400;
    font-size: 16px;
    resize: none;
    width: 100%;

    &::placeholder {
        color: #a5a5a5;
        font-size: 14px;
        font-family: "Poppins", serif;
    }
`;

export const LeftTitleRow = styled.div`
    @media (max-width: 600px) {
        margin-bottom: 0;
    }
`;

export const LeftTitle = styled.h1`
    font-size: 21px;
    margin: 0;
    font-weight: 600;

    @media (max-width: 1000px) {
        font-size: 18px;
    }
`;

export const LeftSubtitle = styled.span`
    margin: 0;
    font-size: 14px;
`;

export const LeftRow = styled.div`
    display: flex;
    gap: 10px;

    @media (max-width: 600px) {
        gap: 10px;
    }
`;

export const InputContainer = styled.div`
    width: ${(props) => (props.width ? props.width : "auto")};
    flex-direction: ${(props) =>
            props.flexdirection ? props.flexdirection : "column"};
    align-items: ${(props) =>
            props.alignitems ? props.alignitems : "flex-start"};
    display: flex;
    flex: ${(props) => props.flex};
    gap: 4px;
`;

export const Select = styled.select`
    padding: 10px;
    cursor: pointer;
    background-color: #f1efef;
    border-radius: 6px;
    outline: none;
`;

export const Label = styled.label`
    font-size: 12px;
    color: #757575;
    font-weight: 500;
`;

export const Input = styled.input`
    width: ${(props) => (props.width ? props.width : "100%")};
    border: 1px solid #d8d7d7;
    outline: none;
    background-color: #ffffff;
    padding: 12px;
    border-radius: 4px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;

    &::placeholder {
        color: #bebdbd;
    }
`;

export const ButtonRow = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 40px;
`;

export const PetRegisterRightContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 14px;
    padding-bottom: 10px;
    border: 1px solid #e9e8e8;
    border-radius: 4px;
    background-color: white;
    height: min-content;
    box-shadow: 0 0 20px 0 #0000000d;
    margin-top: 70px;

    @media (max-width: 1100px) {
        width: fit-content;
        margin: 0 auto;
    }
`;
