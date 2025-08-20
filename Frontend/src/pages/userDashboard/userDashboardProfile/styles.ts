import styled from "styled-components";

export const StyledHotelDashboardProfile = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    background-color: white;
    border-radius: 4px;
    width: 70%;
    padding: 1rem 4rem 2rem 4rem;
`;

export const MainSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    padding-bottom: 14px;
`;

export const MainTitle = styled.h1`
    margin: 0;
    font-size: 20px;
`;

export const MainDescription = styled.span`
    font-size: 16px;
    color: gray;
    padding-bottom: 14px;
`;

export const Section = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 50px;
    width: 100%;
    padding: 30px 0;
`;

export const LeftSubsection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
    font-size: 16px;
    min-width: ${(props) => (props.minwidth ? props.minwidth : "220px")};
    max-width: ${(props) => (props.maxWidth ? props.maxWidth : "220px")};
`;

export const LeftSubsectionTitle = styled.span`
    margin: 0;
    font-size: 16px;
`;

export const LeftSubsectionDescription = styled.span`
    color: gray;
    font-size: 14px;
`;

export const Input = styled.input`
    height: 20px;
    padding: 8px 10px;
    border-radius: 6px;
    outline: none;
    width: ${(props) => props.width};
    border: 1px solid lightgrey;
`;

export const RightSubsection = styled.div`
    display: flex;
    flex-direction: ${(props) =>
            props.flexdirection ? props.flexdirection : "row"};
    align-items: ${(props) => (props.alignItems ? props.alignItems : "center")};
    width: 100%;
    gap: 30px;
`;

export const UserIcon = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 40px;
`;

export const Delete = styled.span`
    color: #0a846b;
    font-size: 14px;
    cursor: pointer;
`;

export const Update = styled.span`
    color: #f26938;
    font-size: 14px;
    cursor: pointer;
`;

export const MultipleRightSubsection = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const MultipleRow = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 12px;
`;

export const MultipleBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
    width: ${(props) => props.width};
    flex: ${(props) => props.flex};
`;

export const MultipleBoxTitle = styled.span`
    font-size: 14px;
`;
