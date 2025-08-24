import styled from "styled-components";

export const StyledFooter = styled.div`
    background: linear-gradient(180deg, rgba(10, 132, 107, 0) 0%, #0a846b 100%);
    padding: 30px 0;
`;

export const LeftList = styled.div`
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 46px;
    color: #0a846b;
    font-weight: 600;

    @media (max-width: 1024px) {
        width: 100%;
    }
`;

export const FooterContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 60%;
    margin: 0 auto;
    gap: 20px;
    color: white;

    @media (max-width: 1024px) {
        width: 80%;
    }
`;

export const Icon = styled.img`
    width: ${(props) => (props.width ? props.width : "100%")};
    height: ${(props) => (props.height ? props.height : "auto")};
    max-width: 100%;
    display: block;

    @media (max-width: 768px) {
        width: 60px;
        height: 60px;
    }
`;

export const FooterRow = styled.div`
    display: flex;
    justify-content: center;
    text-align: center;
    gap: 20px;
    font-weight: ${(props) => props.fontWeight};
    padding-top: ${(props) => props.paddingpop};

    @media (max-width: 600px) {
        font-size: 12px;
    }
`;
