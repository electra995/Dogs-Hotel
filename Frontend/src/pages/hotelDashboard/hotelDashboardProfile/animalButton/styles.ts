import styled from "styled-components";

export const ToggleContainer = styled.div`
    display: flex;
    gap: 20px;
`;

export const ToggleButton = styled.button.withConfig({
    shouldForwardProp: (prop) => prop !== "istoggled"
})`
    padding: 6px 12px;
    background-color: white;
    border: ${(props) =>
            props.istoggled ? "1px solid #EC641D" : "1px solid grey"};
    color: ${(props) => (props.istoggled ? "#EC641D" : "grey")};
    border-radius: 14px;
    cursor: pointer;
`;
