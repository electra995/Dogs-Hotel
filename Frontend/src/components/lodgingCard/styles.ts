import styled from "styled-components";

export const StyledLodgingCard = styled.div`
    display: flex;
    justify-content: center;
    align-items: inherit;
    flex-direction: column;
    background-color: white;
    border-radius: 12px;
    padding: 8px;
    gap: 10px;
    box-shadow: 0 4px 28px -2px #00000014;
    cursor: pointer;
    
    flex: 1 1 280px;
    max-width: 640px;
`;

export const CardImage = styled.img`
    width: 100%;
    height: 100%;
    margin-bottom: 10px;

    @media (max-width: 769px) {
        height: 200px;
        object-fit: cover;
    }

    @media (max-width: 560px) {
        height: 160px;
        object-fit: cover;
    }
`;

export const CardContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    font-size: 18px;
    padding: 0 10px;

    @media (max-width: 1224px) {
        font-size: 14px;
    }
`;

export const CardTitle = styled.h4`
    margin: 0;
    color: #f26938;
`;

export const City = styled.span`
    font-weight: 700;
`;

export const Price = styled.span`
    font-weight: 700;
    color: green;
`;
