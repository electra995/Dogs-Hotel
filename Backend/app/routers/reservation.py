from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database import get_db
from app.crud import reservation as reservation_crud
from app.schemas import (
    ReservationBase,
    ReservationRequest,
    ReservationWithUserResponse,
)

router = APIRouter(prefix="/api/reservations", tags=["Reservation"])


@router.get("/{hotel_id}", response_model=ReservationWithUserResponse)
def get_reservations_with_user(hotel_id: int, db: Session = Depends(get_db)):
    return reservation_crud.get_reservations(hotel_id, db)


@router.put("/", response_model=ReservationBase)
def create_reservation(
    reservation_data: ReservationRequest, db: Session = Depends(get_db)
):
    return reservation_crud.add_reservation(db=db, reservation_data=reservation_data)


@router.delete("/{reservation_id}")
def delete_reservation(reservation_id: int, db: Session = Depends(get_db)):
    return reservation_crud.delete_reservation_by_id(reservation_id, db)


@router.get("/id/{reservation_id}", response_model=ReservationBase)
def get_reservation(reservation_id: int, db: Session = Depends(get_db)):
    return reservation_crud.get_reservation_by_id(reservation_id, db)


@router.patch("/{reservation_id}", response_model=ReservationBase)
def update_reservation(
    reservation_id: int,
    reservation_data: ReservationRequest,
    db: Session = Depends(get_db),
):
    return reservation_crud.update_reservation(reservation_id, reservation_data, db)
