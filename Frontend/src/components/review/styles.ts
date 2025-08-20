import styled from "styled-components";

export const StyledReviews = styled.div`
    display: flex;
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #e6e6e6;

    @media (max-width: 1250px) {
        margin-bottom: 10px;
        padding-bottom: 10px;
    }
`;

export const ReviewContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const FirstRow = styled.div``;

export const Profile = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 10px;
`;

export const Avatar = styled.img`
    width: 40px;
    height: 40px;
`;

export const UsernameRatingBox = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Username = styled.span`
    color: #1a1a1a;
    font-size: 14px;
    font-weight: 500;
`;

export const UserRating = styled.span`
    display: flex;
`;

export const ReviewDate = styled.div``;

export const ReviewSecondRow = styled.span`
    color: #808080;
    font-size: 14px;
    font-weight: 400;
    text-align: justify;
    text-justify: inter-word;

    @media (max-width: 1250px) {
        font-size: 12px;
    }
`;
