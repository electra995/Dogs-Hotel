import styled from "styled-components";

export const StyledReservationEdit = styled.div`
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

export const MultipleBox = styled.div<{ width?: string; flex?: number }>`
    display: flex;
    flex-direction: column;
    gap: 2px;
    width: ${(props) => props.width || "auto"};
    flex: ${(props) => props.flex ?? "none"};
`;

export const MultipleBoxTitle = styled.span`
    font-size: 14px;
`;

export const Input = styled.input<{ width?: string }>`
    height: 20px;
    padding: 8px 10px;
    border-radius: 6px;
    outline: none;
    width: ${(props) => props.width || "100%"};
    border: 1px solid lightgrey;
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

export const ServicesContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 10px;
`;

export const ServiceOption = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
`;

export const ServiceCircle = styled.div<{ selected?: boolean }>`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid #0a846b;
    background-color: ${({selected}) => (selected ? "#0a846b" : "transparent")};
    transition: background-color 0.2s ease-in-out;
`;
