import {
    StyleHotel,
    HotelContainer,
    HotelContainerHeader,
    Icon,
    TitleContainer,
    Title,
    Vacancy,
    HotelMainSection,
    HotelMainSectionHeader,
    HotelSubcontainerHeader,
    HotelSubcontainerHeaderBox,
    HotelDescriptionTitle,
    HotelDescriptionSubtitle,
    HotelDescriptionDetail,
    SectionTitleContainer,
    ButtonsContainer,
    SectionTitle,
    SectionSubtitle,
    HotelBodyContainer,
    HotelLeftContainer,
    RatingsRow,
    Stars,
    Ratings,
    HotelRightContainer,
    ChecksRow,
    CheckinBox,
    CheckinTitle,
    CheckoutBox,
    CheckoutTitle,
    RightTitle,
    RightContainerRow,
    RowTitle,
    RowDetail,
    TotalRow,
    IconBox,
    TotalDetail,
    GoogleMapsSection,
    GoogleMapTitle,
    GoogleMapAddress,
    ReviewsContainer,
} from "./styles.ts";

import Navbar from "../../components/navbar/Navbar.jsx";
import Button from "../../components/button/Button.jsx";
import Footer from "../../components/footer/Footer.jsx";
import Review from "../../components/review/Review.jsx";

import {useNavigate} from "react-router-dom";
import {useEffect, useState, useMemo} from "react";
import {useParams} from "react-router-dom";
import {useAuth} from "../../context/authContext.jsx";
import {fetchHotelProfile} from "../../services/hotelService/HotelService.jsx";
import {getReviews} from "../../services/reviewService/ReviewService.jsx";
import {SERVICE_FEES, TOURIST_TAX, calculateTotalAmount, calculateTotalDays} from "../../utils/reservationUtils.ts";

const Hotel = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    const {user} = useAuth();

    const [hotel, setHotel] = useState(null);
    const [error, setError] = useState(null);
    const [totalDays, setTotalDays] = useState(0);
    const [dateError, setDateError] = useState(null);
    const [checkInDate, setCheckInDate] = useState(null);
    const [checkOutDate, setCheckOutDate] = useState(null);
    const [reviews, setReviews] = useState([]);
    const [ratingsNumber, setRatingsNumber] = useState(0);
    const [userRating, setUserRating] = useState(0);
    const [reviewsError, setReviewsError] = useState(null);

    useEffect(() => {
        fetchHotelProfile(id)
            .then(data => setHotel(data))
            .catch(err => setError(err.message));
    }, [id]);

    useEffect(() => {
        if (checkInDate && checkOutDate) {
            const diffDays = calculateTotalDays(checkInDate, checkOutDate);
            setTotalDays(diffDays);
        } else {
            setTotalDays(0);
        }
    }, [checkInDate, checkOutDate]);

    useEffect(() => {
        getReviews()
            .then(data => {
                setReviews(data.reviews);
                setRatingsNumber(data.ratings_number);
                setUserRating(data.user_rating);
            })
            .catch(() => setReviewsError("Errore nel caricamento delle recensioni."));
    }, []);

    const handleCheckInChange = (e) => {
        const newCheckIn = e.target.value;
        setCheckInDate(newCheckIn);

        if (checkOutDate && new Date(checkOutDate) <= new Date(newCheckIn)) {
            setCheckOutDate("");
        }
    };

    const handleCheckOutChange = (e) => {
        setCheckOutDate(e.target.value);
    };

    const total = useMemo(() => {
        if (hotel && totalDays > 0) {
            return calculateTotalAmount({
                daily: hotel.daily,
                discount: hotel.discount,
                totalDays: totalDays
            });
        }
        return hotel ? hotel.daily : 0;
    }, [hotel, totalDays]);

    const handleBookingClick = () => {
        if (!checkInDate || !checkOutDate || totalDays <= 0) {
            setDateError("Seleziona date valide per procedere con la prenotazione.");
            return;
        }

        if (!user) {
            navigate("/login");
            return;
        }

        setDateError(null);

        navigate("/pet-owner", {
            state: {
                hotelId: hotel.id,
                checkInDate,
                checkOutDate,
                totalDays,
                total
            }
        });
    };

    if (error) return <div>Errore: {error}</div>;
    if (!hotel) return <div>Caricamento...</div>;

    return (
        <StyleHotel>
            <Navbar/>
            <HotelContainer>
                <HotelContainerHeader>
                    <HotelSubcontainerHeader>
                        <Icon width="60px" height="60px" borderRadius="40px" src={hotel.image_url}/>
                        <TitleContainer>
                            <Title>{hotel.name}</Title>
                            <Vacancy>
                                <img src="/images/green-dot.png" alt=""/>{" "}
                                {"Posti disponibili"}
                            </Vacancy>
                        </TitleContainer>
                        <Icon width="32px" height="32px" src="/images/gray-flag.png"/>
                    </HotelSubcontainerHeader>

                    <HotelSubcontainerHeader gap="20px">
                        <HotelSubcontainerHeaderBox>
                            <HotelDescriptionTitle>Chi siamo</HotelDescriptionTitle>
                            <HotelDescriptionSubtitle>{hotel.name}</HotelDescriptionSubtitle>
                        </HotelSubcontainerHeaderBox>
                        <HotelDescriptionDetail>
                            {hotel.description}
                        </HotelDescriptionDetail>
                    </HotelSubcontainerHeader>
                </HotelContainerHeader>

                <HotelMainSection>
                    <HotelMainSectionHeader>
                        <SectionTitleContainer>
                            <SectionTitle>{hotel.name}</SectionTitle>
                            <SectionSubtitle>
                                <img width="7" height="7" src="/images/black-dot.png" alt=""/>
                                <span style={{color: "green"}}>Aperto</span>
                                <span>Check-in alle {hotel.checkin}</span>
                            </SectionSubtitle>
                        </SectionTitleContainer>
                        <ButtonsContainer>
                            <IconBox><Icon width="20px" height="20px" src="/images/green-whats.svg"/></IconBox>
                            <IconBox><Icon width="20px" height="20px" src="/images/green-face.svg"/></IconBox>
                            <IconBox><Icon width="20px" height="20px" src="/images/green-insta.svg"/></IconBox>
                        </ButtonsContainer>
                    </HotelMainSectionHeader>

                    <HotelBodyContainer>
                        <HotelLeftContainer>
                            <RatingsRow>
                                <span>{userRating.toFixed(1)}</span>
                                <Stars>
                                    {Array.from({length: Math.round(userRating)}, (_, i) => (
                                        <img src="/images/black-star.svg" key={i} alt=""/>
                                    ))}
                                </Stars>
                                <Ratings>{`(${ratingsNumber})`}</Ratings>
                            </RatingsRow>

                            {reviewsError && <div style={{color: "red"}}>{reviewsError}</div>}
                            <ReviewsContainer>
                                {reviews.map((review) => (
                                    <Review key={review.id} review={review}/>
                                ))}
                            </ReviewsContainer>
                        </HotelLeftContainer>

                        <HotelRightContainer>
                            <ChecksRow>
                                <CheckinBox>
                                    <CheckinTitle>CHECK-IN</CheckinTitle>
                                    <input
                                        type="date"
                                        value={checkInDate || ""}
                                        onChange={handleCheckInChange}
                                        min={new Date().toISOString().split("T")[0]}
                                    />
                                </CheckinBox>

                                <CheckoutBox>
                                    <CheckoutTitle>CHECK-OUT</CheckoutTitle>
                                    <input
                                        type="date"
                                        value={checkOutDate || ""}
                                        onChange={handleCheckOutChange}
                                        disabled={!checkInDate}
                                        min={checkInDate ? new Date(new Date(checkInDate).getTime() + 86400000).toISOString().split("T")[0] : ""}
                                    />
                                </CheckoutBox>
                            </ChecksRow>

                            <RightTitle>
                                {totalDays > 0
                                    ? `€${total},00 totale per ${totalDays} ${totalDays > 1 ? 'notti' : 'notte'}`
                                    : `€${hotel.daily},00 / al giorno`}
                            </RightTitle>

                            {dateError && <RowTitle color="red" fontSize="12px">{dateError}</RowTitle>}

                            <Button
                                color="#ffffff"
                                backgroundcolor="#0a846b"
                                borderradius="4px"
                                fontWeight="400"
                                width="50%"
                                onClick={handleBookingClick}
                            >
                                Prenota
                            </Button>

                            <RowTitle color="#a7a7a7" fontSize="12px">Non ti sarà ancora addebitato alcun
                                importo</RowTitle>

                            {totalDays > 0 && (
                                <>
                                    <RightContainerRow>
                                        <RowTitle>€{hotel.daily} x {totalDays} {totalDays > 1 ? 'notti' : 'notte'}</RowTitle>
                                        <RowDetail>€{hotel.daily * totalDays}</RowDetail>
                                    </RightContainerRow>
                                    <RightContainerRow>
                                        <RowTitle>Sconto:</RowTitle>
                                        <RowDetail>€{-((hotel.daily * totalDays) * hotel.discount)}</RowDetail>
                                    </RightContainerRow>
                                    <RightContainerRow>
                                        <RowTitle>Costi di servizio:</RowTitle>
                                        <RowDetail>€{SERVICE_FEES}</RowDetail>
                                    </RightContainerRow>
                                    <RightContainerRow padding="0 10px 22px 10px" borderbottom="1px solid #e3e0e0">
                                        <RowTitle>Tassa di soggiorno:</RowTitle>
                                        <RowDetail>€{TOURIST_TAX}</RowDetail>
                                    </RightContainerRow>
                                    <RightContainerRow>
                                        <TotalRow>Totale:</TotalRow>
                                        <TotalDetail>€{total}</TotalDetail>
                                    </RightContainerRow>
                                </>
                            )}
                        </HotelRightContainer>
                    </HotelBodyContainer>
                </HotelMainSection>

                <GoogleMapsSection>
                    <GoogleMapTitle>Località</GoogleMapTitle>
                    <GoogleMapAddress>
                        <Icon src="/images/map-pointer.svg"/>
                        {hotel.address}, {hotel.address_number}, {hotel.cap} {hotel.city} {hotel.province}
                    </GoogleMapAddress>
                </GoogleMapsSection>
            </HotelContainer>
            <Footer/>
        </StyleHotel>
    );
};

export default Hotel;
