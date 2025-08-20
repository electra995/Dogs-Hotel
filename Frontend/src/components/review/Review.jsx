import {
    StyledReviews,
    ReviewContainer,
    FirstRow,
    Profile,
    Avatar,
    UsernameRatingBox,
    Username,
    UserRating,
    ReviewDate,
    ReviewSecondRow
} from "./styles.ts";

const Review = ({review}) => {
    return (
        <StyledReviews>
            <ReviewContainer>
                <FirstRow>
                    <Profile>
                        <Avatar src={review.avatar}/>
                        <UsernameRatingBox>
                            <Username>{review.user_name}</Username>
                            <UserRating>
                                {Array.from(Array(review.user_rating), (e, i) => {
                                    return <img src="/images/full-star.svg" key={i} alt={""}/>;
                                })}
                                {Array.from(Array(5 - review.user_rating), (e, i) => {
                                    return <img src="/images/empty-star.svg" key={i} alt={""}/>;
                                })}
                            </UserRating>
                        </UsernameRatingBox>
                    </Profile>
                    <ReviewDate></ReviewDate>
                </FirstRow>
                <ReviewSecondRow>{review.comment}</ReviewSecondRow>
            </ReviewContainer>
        </StyledReviews>
    );
};

export default Review;
