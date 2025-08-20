from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database import get_db
from app.crud import hotel as hotel_crud
from app.schemas import LodgingResponse, HotelBase, HotelProfileUpdate

router = APIRouter(prefix="/api/lodgings", tags=["Hotel"])


@router.get("/", response_model=LodgingResponse)
def get_lodgings(db: Session = Depends(get_db)):
    return hotel_crud.get_hotels(db)


@router.get("/{hotel_id}", response_model=HotelBase)
def get_hotel_by_id(hotel_id: int, db: Session = Depends(get_db)):
    return hotel_crud.get_hotel_by_id(hotel_id, db)


@router.get("/by_user/{user_id}", response_model=HotelBase)
def get_hotel_by_user_id(user_id: int, db: Session = Depends(get_db)):
    return hotel_crud.get_hotel_by_user_id(user_id, db)


@router.put("/{hotel_id}")
def update_hotel_profile(
    hotel_id: int, payload: HotelProfileUpdate, db: Session = Depends(get_db)
):
    return hotel_crud.update_hotel(hotel_id, payload, db)
