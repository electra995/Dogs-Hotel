from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database import get_db
from app.crud import review as review_crud
from app.schemas import (
    ReviewResponse,
)

router = APIRouter(prefix="/reviews", tags=["Review"])


@router.get("/", response_model=ReviewResponse)
def read_reviews(db: Session = Depends(get_db)):
    return review_crud.get_reviews(db)
