import random

from sqlalchemy.orm import Session
from app.models import Review
from app.schemas import ReviewResponse


def get_reviews(db: Session):
    all_reviews = db.query(Review).all()
    selected_reviews = random.sample(all_reviews, 4)
    ratings_number = random.randint(20, 100)
    avg_rating = sum(review.user_rating for review in selected_reviews) / 4
    avg_rating = round(avg_rating, 1)

    return ReviewResponse(
        reviews=selected_reviews,
        ratings_number=ratings_number,
        user_rating=avg_rating,
    )
