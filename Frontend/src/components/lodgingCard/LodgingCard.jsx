import {
    StyledLodgingCard,
    CardImage,
    CardContentContainer,
    CardTitle,
    City,
    Price,
} from "./styles.ts";

import {Link} from "react-router-dom";

const LodgingCard = ({lodging}) => {
    return (
        <StyledLodgingCard key={lodging.id}>
            <Link to={`/hotels/${lodging.id}`}>
                <CardImage src={lodging.image_url} alt={lodging.name}/>
            </Link>
            <CardContentContainer>
                <CardTitle>{lodging.name}</CardTitle>
                <City>{lodging.city}</City>
                <Price>€ {lodging.daily} Notte</Price>
            </CardContentContainer>
        </StyledLodgingCard>
    );
};

export default LodgingCard;
