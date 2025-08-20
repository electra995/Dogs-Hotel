import styled from "styled-components";

export const UserIcon = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 40px;
`;

export const NameColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 150px;
    gap: 2px;
    margin: 0 auto;
    font-size: 13px;

    :first-child {
        font-weight: bold;
    }
`;

export const StatusColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 140px;
    gap: 2px;
    margin: 0 auto;
    font-size: 13px;
`;

export const StatusBox = styled.span`
    background-color: #d5f7ce;
    padding: 1px 8px;
    border-radius: 10px;
    color: #206707;
    width: 80px;
    font-weight: bold;
    font-size: 13px;
`;
