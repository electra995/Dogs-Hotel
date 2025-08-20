from fastapi import HTTPException

from app.models import Hotel

from sqlalchemy.orm import Session

from app.schemas import HotelProfileUpdate


def get_hotels(db: Session):
    return db.query(Hotel).all()


def get_hotel_by_id(hotel_id: int, db: Session):
    return db.query(Hotel).filter(Hotel.id == hotel_id).first()


def get_hotel_by_user_id(user_id: int, db: Session):
    return db.query(Hotel).filter(Hotel.user_id == user_id).first()


def update_hotel(hotel_id: int, payload: HotelProfileUpdate, db: Session):
    user = db.query(Hotel).filter(Hotel.id == hotel_id).first()
    if not user:
        raise HTTPException(status_code=404, detail="Hotel non trovato")

    for field, value in payload.model_dump(exclude_unset=True).items():
        setattr(user, field, value)

    db.commit()
    return {"message": "Profilo aggiornato con successo"}
