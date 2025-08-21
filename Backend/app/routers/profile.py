from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database import get_db
from app.schemas import UserBase, UserProfileUpdate, ReservationResponse
from app.crud import user as user_crud

router = APIRouter(prefix="/users", tags=["User"])


@router.get("/{user_id}", response_model=UserBase)
def get_user_profile(user_id: int, db: Session = Depends(get_db)):
    return user_crud.get_user_by_id(user_id, db)


@router.put("/{user_id}")
def update_user_profile(
        user_id: int, payload: UserProfileUpdate, db: Session = Depends(get_db)
):
    return user_crud.update_user(user_id, payload, db)


@router.get("/{user_id}/reservations", response_model=ReservationResponse)
def get_user_reservations(user_id: int, db: Session = Depends(get_db)):
    return user_crud.get_reservations_by_user_id(user_id, db)
