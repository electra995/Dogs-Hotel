import styled from "styled-components";

export const MainSectionHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 40px;
    border-bottom: 2px solid #e1e1e1;

    @media (max-width: 1000px) {
        flex-direction: column;
        padding: 0;
    }

    @media (max-width: 600px) {
        padding: 0;
    }
`;

export const SectionTitleAndAvatarContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

export const Icon = styled.img`
    width: ${(props) => (props.width ? props.width : "auto")};
    height: ${(props) => (props.height ? props.height : "auto")};
    border-radius: ${(props) => props.borderRadius};

`;

export const SectionTitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    padding: 32px 0;

    @media (max-width: 1000px) {
        padding: 10px 0;
    }
`;

export const SectionTitle = styled.h1`
    font-size: 24px;
    font-weight: 600;
    margin: 0;

    @media (max-width: 1000px) {
        font-size: 18px;
    }
`;

export const SectionSubtitle = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 14px;
`;

export const Vacancy = styled.span`
    font-size: 15px;
    color: #0a846b;
    font-weight: 500;
`;

export const ImageContainer = styled.div`
    display: flex;
    justify-content: center;

    @media (max-width: 1000px) {
        width: 100%;
        padding: 10px 0;
    }
`;
