import styled from "styled-components";

export const StyledNavbar = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px 30px 6px 30px;
    width: 80%;
    margin: 0 auto;
    font-size: 18px;
    border-bottom: ${(props) =>
            props.borderbottom ? props.borderbottom : "1px solid #ffffff"};
    z-index: 10;
    position: relative;
`;

export const LeftContainer = styled.div`
    display: flex;
    justify-content: center;
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
        display: none;
    }
`;

export const Icon = styled.img`
    cursor: pointer;
    width: 140px;
    height: auto;
   padding: 0 50px;
`;

export const LeftListItem = styled.li`
    cursor: pointer;

    a {
        text-decoration: none;
        color: #0a846b;
    }
`;

export const RightContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 14px;

    @media (max-width: 1024px) {
        display: none;
    }
`;

export const HamburgerIcon = styled.img`
    display: none;
    width: 32px;
    height: 32px;
    cursor: pointer;

    @media (max-width: 1024px) {
        display: block;
    }
`;

export const MobileMenu = styled.div`
    position: absolute;
    top: 60px;
    right: 20px;
    background: white;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    z-index: 20;

    a {
        text-decoration: none;
        color: #0a846b;
        font-weight: 600;
    }
`;
