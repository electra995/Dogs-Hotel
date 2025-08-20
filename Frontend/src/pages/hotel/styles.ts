import styled from "styled-components";

export const StyleHotel = styled.div`
    width: 100%;
    height: 100%;
    min-height: 100vh;
    background: linear-gradient(
            175.31deg,
            #c7ded9 3.79%,
            rgba(199, 222, 217, 0) 87.34%
    );
    margin: auto;
`;

export const HotelContainer = styled.div`
    width: 80%;
    margin: auto;
    padding-bottom: 2rem;

    @media (max-width: 1250px) {
        width: 90%;
    }
`;

export const HotelContainerHeader = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 4rem;
    gap: 40px;
    align-items: center;
    width: 100%;

    @media (max-width: 1250px) {
        gap: 28px;
    }

    @media (max-width: 1000px) {
        padding-top: 40px;
    }
`;

export const HotelSubcontainerHeader = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: ${(props) => props.flexdirection};
    gap: ${(props) => props.gap};
    width: 100%;
`;

export const HotelSubcontainerHeaderBox = styled.div`
    min-width: 20%;
    display: flex;
    flex-direction: column;
    padding-top: 10px;

    @media (max-width: 1000px) {
        min-width: 24%;
    }

    @media (max-width: 700px) {
        min-width: 120px;
    }
`;

export const HotelDescriptionTitle = styled.span``;

export const HotelDescriptionSubtitle = styled.h1`
    margin: 0;
    color: #0a846b;
    font-size: 22px;
    white-space: nowrap;

    @media (max-width: 1000px) {
        font-size: 20px;
    }

    @media (max-width: 700px) {
        font-size: 16px;
    }
`;

export const HotelDescriptionDetail = styled.span`
    font-size: 16px;
    line-height: 3;

    @media (max-width: 1250px) {
        line-height: 2;
    }

    @media (max-width: 1000px) {
        font-size: 12px;
    }

    @media (max-width: 600px) {
        line-height: 1.6;
    }
`;

export const Icon = styled.img`
    width: ${(props) => (props.width ? props.width : "auto")};
    height: ${(props) => (props.height ? props.height : "auto")};
    border-radius: ${(props) => props.borderRadius};
`;

export const IconBox = styled.div`
    display: flex;
    padding: 10px;
    border: 2px solid #0a846b;
    border-radius: 50%;
    cursor: pointer;

    @media (max-width: 600px) {
        padding: 6px;
    }
`;

export const TitleContainer = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    margin-left: 16px;
`;

export const Title = styled.h1`
    margin: 0;
    font-size: 25px;
`;

export const Vacancy = styled.span`
    font-size: 15px;
    color: #0a846b;
    font-weight: 500;
`;

export const HotelMainSection = styled.div`
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 10px;
    margin-top: 4rem;
    padding-bottom: 26px;
    box-shadow: 0 0 50px 0 #0000000d;

    @media (max-width: 1250px) {
        margin-top: 2rem;
    }
`;

export const HotelMainSectionHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 40px;
    border-bottom: 2px solid #e1e1e1;

    @media (max-width: 600px) {
        padding: 0 20px;
    }
`;

export const SectionTitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    padding: 32px 0;

    @media (max-width: 1000px) {
        padding: 24px 0;
    }

    @media (max-width: 600px) {
        padding: 24px 0;
    }
`;

export const ButtonsContainer = styled.div`
    display: flex;
    gap: 10px;
`;

export const SectionTitle = styled.h1`
    font-size: 28px;
    font-weight: 600;
    margin: 0;

    @media (max-width: 1000px) {
        font-size: 22px;
    }

    @media (max-width: 600px) {
        font-size: 18px;
    }
`;

export const SectionSubtitle = styled.div`
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 14px;
`;

export const HotelBodyContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
    padding: 32px 40px;

    @media (max-width: 1000px) {
        flex-direction: column;
        margin-top: 10px;
        padding: 22px 40px;
    }

    @media (max-width: 600px) {
        margin-top: 10px;
        padding: 12px 20px;
    }
`;

export const HotelLeftContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 66%;

    @media (max-width: 1000px) {
        width: 100%;
    }
`;

export const RatingsRow = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

export const Stars = styled.div`
    display: flex;
`;

export const Ratings = styled.span`
    color: #f26938;
`;

export const ReviewsContainer = styled.div`
    margin-top: 20px;
`;

export const HotelRightContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-top: 10px;
    gap: 14px;
    padding: 28px 20px;
    border: 1px solid #e9e8e8;
    border-radius: 14px;
    background-color: white;
    width: 26%;
    height: min-content;
    box-shadow: 0 0 20px 0 #0000000d;

    @media (max-width: 1000px) {
        width: 90%;
        margin: 20px auto 0 auto;
    }
`;

export const ChecksRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    border: 1px solid #cccccc;
    border-radius: 8px;
`;

export const CheckinBox = styled.div`
    display: flex;
    text-align: center;
    flex-direction: column;
    padding: 6px;
    flex: 1;
    border-right: 1px solid #cccccc;
`;

export const CheckinTitle = styled.span`
    font-size: 12px;
    font-weight: bold;
`;

export const CheckoutBox = styled.div`
    display: flex;
    text-align: center;
    flex-direction: column;
    padding: 6px;
    flex: 1;
`;

export const CheckoutTitle = styled.span`
    font-size: 12px;
    font-weight: bold;
`;

export const RightTitle = styled.h1`
    margin: 0;
    font-size: 20px;
    align-self: center;
    font-weight: 500;

    & > span {
        font-size: 18px;
    }
`;

export const RightContainerRow = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    font-size: 14px;
    border-bottom: ${(props) => props.borderbottom};
    padding: ${(props) => (props.padding ? props.padding : "0 10px")};
`;

export const RowTitle = styled.span`
    font-weight: 400;
    color: ${(props) => (props.color ? props.color : "black")};
    font-size: ${(props) => (props.fontSize ? props.fontSize : "14px")};
`;

export const RowDetail = styled.span`
    font-weight: 500;
`;

export const TotalRow = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    font-weight: 600;
    font-size: 16px;
`;

export const TotalDetail = styled.span`
    font-weight: 600;
    font-size: 16px;
`;

export const GoogleMapsSection = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 40px;
`;

export const GoogleMapTitle = styled.h1`
    margin: 0;
    font-size: 24px;

    @media (max-width: 1000px) {
        font-size: 22px;
    }

    @media (max-width: 600px) {
        font-size: 20px;
    }
`;

export const GoogleMapAddress = styled.span`
    display: flex;
    gap: 10px;
    margin-top: 10px;
    align-items: center;

    @media (max-width: 1000px) {
        font-size: 14px;
    }

    @media (max-width: 600px) {
        font-size: 12px;
    }
`;
