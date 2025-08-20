import {
  MainSectionHeader,
  SectionTitleAndAvatarContainer,
  Icon,
  SectionTitleContainer,
  SectionTitle,
  SectionSubtitle,
  Vacancy,
  ImageContainer
} from "./styles.ts";

const ReservationNav = ({ hotelData, stepImage }) => {
  return (
    <MainSectionHeader>
      <SectionTitleAndAvatarContainer>
        <Icon
          width="60px"
          height="60px"
          borderRadius="40px"
          src={hotelData.image_url}
          alt={`${hotelData.name} logo`}
        />
        <SectionTitleContainer>
          <SectionTitle>{hotelData.name}</SectionTitle>
          <SectionSubtitle>
            <Vacancy>
              <img src="/images/green-dot.png" alt=""/>
              {" Posti disponibili"}
            </Vacancy>
          </SectionSubtitle>
        </SectionTitleContainer>
      </SectionTitleAndAvatarContainer>
      <ImageContainer>
        <img src={stepImage} alt="Step illustration"/>
      </ImageContainer>
    </MainSectionHeader>
  );
};

export default ReservationNav;
