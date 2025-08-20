import styled from "styled-components";

export const ToggleContainer = styled.div`
    display: flex;
    gap: 20px;
`;

export const ToggleButton = styled.button.withConfig({
    shouldForwardProp: (prop) => prop !== "istoggled",
})`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    padding: 20px 16px;
    border-radius: 8px;
    width: 120px;
    gap: 12px;

    font-size: 18px;
    cursor: pointer;

    border: ${(props) => (props.istoggled ? "1px solid #EC641D" : "1px solid #e6e3e3")};
    color: ${(props) => (props.istoggled ? "#EC641D" : "#b3b3b3")};
    background-color: white;

    @media (max-width: 1000px) {
        padding: 8px 4px;
        width: 70px;

        & > :first-child {
            width: 20px;
        }

        & > :nth-child(2) {
            font-size: 12px;
        }
    }
`;
