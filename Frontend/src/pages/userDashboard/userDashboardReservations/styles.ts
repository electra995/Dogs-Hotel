import styled from "styled-components";

export const StyledUserDashboardReservations = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    background-color: white;
    border-radius: 4px;
    width: 70%;
    padding: 3rem 1rem;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 30px;
`;

export const MainTitle = styled.h1`
    font-size: 16px;
    color: grey;
    margin: ${(props) => props.margintop} 0 0;
`;

export const Section = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem 0;
    gap: 20px;
    max-height: 600px;
    overflow-y: auto;
`;

export const HotelCard = styled.div`
    display: flex;
    flex-direction: column;
    gap: 14px;
    background-color: #dff1e9;
    padding: 1rem 2rem;
    border-radius: 10px;
`;

export const HotelRow = styled.div`
    display: flex;
    align-items: center;
    gap: ${(props) => (props.gap ? props.gap : "10px")};
    width: 100%;
    font-size: 14px;
    justify-content: ${(props) => props.justify || "flex-start"};
    margin-top: ${(props) => props.margintop};
`;

export const Icon = styled.img`
    width: ${(props) => (props.width ? props.width : "auto")};
    height: ${(props) => (props.height ? props.height : "auto")};
    border-radius: ${(props) => props.borderRadius};
`;

export const Span = styled.span`
    font-size: ${(props) => props.fontSize};
    font-weight: ${(props) => props.fontWeight};
`;
