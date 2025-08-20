import styled from "styled-components";

export const StyledReservationRevision = styled.div`
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

export const ReservationRevisionContainer = styled.div`
    width: 80%;
    margin: auto auto 2rem;

    @media (max-width: 600px) {
        width: 100%;
    }
`;

export const ReservationRevisionSection = styled.div`
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

export const BodyContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    padding: 32px 40px;

    @media (max-width: 1400px) {
        gap: 50px;
    }

    @media (max-width: 1100px) {
        flex-direction: column;
        gap: 10px;
        margin-top: 0;
        padding: 20px 16px;
    }
`;

export const LeftContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 62%;

    @media (max-width: 1100px) {
        width: 100%;
    }
`;

export const LeftTitleRow = styled.div`
    margin-bottom: 10px;
`;

export const LeftTitle = styled.h1`
    margin: 0;
    font-size: 26px;
    font-weight: 600;
    font-size: ${(props) => props.fontSize};
    font-weight: ${(props) => props.fontWeight};

    @media (max-width: 600px) {
        font-size: 22px;
    }
`;

export const Subsection = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 32px 0;
    border-bottom: ${(props) =>
            props.borderbottom ? props.borderbottom : "1px solid #dedddd"};

    @media (max-width: 1000px) {
        padding: 14px 0;
    }
`;

export const SubsectionTitle = styled.h3`
    font-size: 18px;
    font-weight: 600;
    color: #0a970a;
    margin: 0 0 20px;
`;

export const SubsectionRow = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    gap: 40px;
    font-size: 14px;
    margin-bottom: 10px;

    @media (max-width: 1000px) {
        gap: 20px;
    }
`;

export const SubsectionRowTitle = styled.h5`
    margin: 0;
    font-weight: bold;
    font-size: 16px;
    min-width: 140px;

    @media (max-width: 600px) {
        font-size: 14px;
    }
`;

export const SubsectionRowDetail = styled.span`
    @media (max-width: 600px) {
        font-size: 12px;
    }
`;

export const RightContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 14px;
    padding: 10px;
    border: 1px solid #e9e8e8;
    border-radius: 4px;
    background-color: white;
    width: 30%;
    height: min-content;
    box-shadow: 0 0 20px 0 #0000000d;

    @media (max-width: 1100px) {
        margin: 0 auto;
        width: 44%;
        padding: 10px;
    }

    @media (max-width: 850px) {
        width: 70%;
    }
`;

export const RightContainerRow = styled.div`
    display: flex;
    justify-content: space-between;
    width: 95%;
    font-size: 14px;
    padding: 10px;
`;

export const RowTitle = styled.span`
    font-weight: 400;
`;

export const RowDetail = styled.span`
    font-weight: 500;
`;

export const TotalRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 95%;
    font-weight: 700;
    font-size: 16px;
    margin: 20px 0;
    padding-top: 20px;
    border-top: 1px solid lightgray;
`;

export const TotalDetail = styled.span`
    font-weight: 700;
    font-size: 26px;

    @media (max-width: 600px) {
        font-size: 20px;
    }
`;
