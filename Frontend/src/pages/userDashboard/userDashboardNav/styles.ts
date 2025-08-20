import styled from "styled-components";

export const StyledUserDashboardNav = styled.div`
    height: 100%;
    width: 250px;
    min-width: 250px;
    z-index: 1;
    top: 0;
    left: 0;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    border-right: 1px solid white;
    margin-top: 2rem;

    a {
        text-decoration: none;
        color: black;
        padding: 24px 0 24px 30px;
        display: flex;
        gap: 14px;
        align-items: center;
        font-size: 15px;

        img {
            filter: brightness(0) saturate(100%) invert(36%) sepia(88%) saturate(474%) hue-rotate(118deg) brightness(91%) contrast(92%);
            transition: filter 0.2s ease;
        }
    }

    a.active {
        background-color: #0A846B;
        color: white;

        img {
            filter: brightness(0) invert(1);
        }
    }
`;

export const Icon = styled.img`
    width: 22px;
`;
