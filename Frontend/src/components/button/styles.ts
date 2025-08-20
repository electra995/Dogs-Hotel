import styled from "styled-components";

export const StyledButton = styled.button`
    color: ${(props) => props.color};
    margin: ${(props) => props.margin};
    background-color: ${(props) => props.backgroundcolor};
    border: ${(props) => props.border};
    border-radius: ${(props) => props.borderradius};
    font-weight: ${(props) => props.fontWeight ? props.fontWeight : 400};
    padding: ${(props) => props.padding ? props.padding : '6px 26px'};
    font-size: ${(props) => props.fontSize ? props.fontSize : '14px'};
    cursor: pointer;
    height: 26px;
    gap: ${(props) => props.gap ? props.gap : '10px'};
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${(props) => (props.width ? props.width : "auto")};
`;