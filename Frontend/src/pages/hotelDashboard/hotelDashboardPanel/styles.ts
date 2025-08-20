import styled from "styled-components";

export const StyledHotelDashboardPanel = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 100%;
    padding-top: 10px;
    margin-left: 60px;
`;

export const FirstRow = styled.div`
    display: flex;
    gap: 80px;
    width: 100%;
`;

export const GuestsBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 2000px;
`;

export const GuestsTitle = styled.h1`
    font-size: 18px;
`;

export const GuestCardsContainer = styled.div`
    display: flex;
    gap: 30px;
    width: 100%;
`;

export const GuestCard = styled.div`
    background-color: ${(props) =>
            props.status === "Pagato" ? "white" : "#9ac7be"};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 190px;
    padding: 14px 16px;
    border-radius: 10px;
    gap: 6px;
`;

export const GuestAvatar = styled.img`
    width: 80px;
    border-radius: 40px;
`;

export const GuestName = styled.span`
    color: ${(props) => (props.status === "Pagato" ? "black" : "white")};
    font-size: 16px;
    font-weight: 600;
    margin-top: 4px;
`;

export const GuestService = styled.span`
    background-color: ${(props) =>
            props.status === "Pagato" ? "#3d786c" : "white"};
    color: ${(props) => (props.status === "Pagato" ? "white" : "#9ac7be")};
    font-size: 12px;
    font-weight: 500;
    padding: 2px 14px;
    border-radius: 8px;
    text-transform: uppercase;
    margin-top: 4px;
`;

export const GuestDate = styled.span`
    color: ${(props) => (props.status === "Pagato" ? "black" : "white")};
    font-size: 14px;
    margin-top: 4px;
`;

export const GuestPrice = styled.span`
    color: black;
    font-size: 24px;
    font-weight: bold;
    margin-top: 14px;
`;

export const GuestPayStatus = styled.span`
    color: #4a7068;
    font-weight: bold;
`;

export const SecondRow = styled.div`
    display: flex;
    width: 100%;
    gap: 90px;
`;

export const OccupantsBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 2000px;
`;

export const OccupantsTitle = styled.h1`
    font-size: 18px;
    margin: 0 0 12px 0;
`;

export const OccupantsCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 100%;
    height: 400px;
    overflow-y: scroll;
    padding-right: 10px;
`;

export const OccupantCard = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color: white;
    border-radius: 14px;
    padding: 14px 18px;
`;

export const OccupantAvatar = styled.img`
    width: 80px;
    border-radius: 40px;
`;

export const OccupantMiddleBox = styled.div`
    display: flex;
    gap: 10px;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    margin-left: 20px;
    width: 55%;
`;

export const OccupantName = styled.h1`
    font-size: 16px;
    font-weight: 600;
    margin: 0;
`;

export const OccupantServiceBox = styled.div`
    font-size: 12px;
    font-weight: 500;
    border-radius: 8px;
    text-transform: uppercase;
    display: flex;
    gap: 20px;
`;

export const OccupantService = styled.span`
    background-color: ${(props) => {
        switch (props.service) {
            case "Bagno":
                return "#1f618d";
            case "Tosatura":
                return "#972121";
            case "Passeggio":
                return "#d35400";
            case "Check-up":
                return "#7d3c98";
            default:
                return "#2c3e50";
        }
    }};
    color: white;
    padding: 2px 14px;
    border-radius: 6px;
`;

export const OccupantDate = styled.span`
    font-size: 14px;
    margin-top: 4px;
`;

export const OccupantRightBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
    height: 100%;
    border-left: 1px solid lightgray;
`;

export const OccupantPrice = styled.span`
    color: black;
    font-size: 20px;
    font-weight: bold;
`;

export const OccupantPayStatus = styled.span`
    color: #4fa985;
    font-weight: bold;
`;

export const AnalysisBox = styled.div`
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 520px;
`;

export const AnalysisTitle = styled.h1`
    font-size: 18px;
    margin: 0;
`;

export const RadialChartsBox = styled.div`
    display: flex;
    gap: 30px;
`;

export const RadialChartsDetailsBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    font-size: 14px;
    gap: 20px;
`;

export const AddOccupantsButton = styled.button`
    width: 100%;
    background-color: #0a846b;
    color: white;
    padding: 10px 20px;
    text-transform: uppercase;
    font-weight: 500;
    font-size: 18px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
`;
