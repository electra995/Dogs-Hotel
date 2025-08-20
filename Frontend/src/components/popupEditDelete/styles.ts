import styled from "styled-components";

export const Popup = styled.div`
    position: absolute;
    background: white;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
    padding: 0.5rem 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    z-index: 1000;
    min-width: 150px;
`;

export const VisualizeIcon = styled.span`
    width: 22px;
    height: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #aeadad;
    border-radius: 50%;
    cursor: pointer;
`;

