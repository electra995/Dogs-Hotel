from fastapi import HTTPException, status

from sqlalchemy.orm import Session, joinedload

from app.models import Reservation

from app.schemas import ReservationRequest


def get_reservations(hotel_id: int, db: Session):
    return db.query(Reservation).filter(Reservation.hotel_id == hotel_id).all()


def get_reservations_user(db: Session):
    return db.query(Reservation).options(joinedload(Reservation.user)).all()


def add_reservation(db: Session, reservation_data: ReservationRequest) -> Reservation:
    reservation = Reservation(
        user_id=reservation_data.user_id,
        hotel_id=reservation_data.hotel_id,
        pet_name=reservation_data.pet_name,
        pet_type=int(reservation_data.pet_type),
        pet_age=int(reservation_data.pet_age),
        pet_gender=reservation_data.pet_gender,
        checkin_date=reservation_data.checkin,
        checkout_date=reservation_data.checkout,
        total_price=reservation_data.total_price,
        additional_services=reservation_data.additional_services,
        remarks=reservation_data.remarks,
        card=reservation_data.card,
    )

    try:
        db.add(reservation)
        db.commit()
        db.refresh(reservation)
    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=500, detail=f"Database error: {str(e)}")

    return reservation


def delete_reservation_by_id(reservation_id: int, db: Session) -> None:
    reservation = db.query(Reservation).filter(Reservation.id == reservation_id).first()
    if not reservation:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Reservation with id {reservation_id} not found",
        )

    try:
        db.delete(reservation)
        db.commit()
    except Exception as e:
        db.rollback()
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Database error during deletion: {str(e)}",
        )


def get_reservation_by_id(reservation_id: int, db: Session) -> Reservation:
    reservation = db.query(Reservation).filter(Reservation.id == reservation_id).first()
    if not reservation:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Reservation with id {reservation_id} not found",
        )
    return reservation


def update_reservation(
    reservation_id: int, reservation_data: ReservationRequest, db: Session
) -> Reservation:
    reservation = db.query(Reservation).filter(Reservation.id == reservation_id).first()
    if not reservation:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Reservation with id {reservation_id} not found",
        )

    reservation.pet_name = reservation_data.pet_name
    reservation.pet_type = int(reservation_data.pet_type)
    reservation.pet_age = int(reservation_data.pet_age)
    reservation.pet_gender = reservation_data.pet_gender
    reservation.checkin_date = reservation_data.checkin
    reservation.checkout_date = reservation_data.checkout
    reservation.total_price = reservation_data.total_price
    reservation.additional_services = reservation_data.additional_services
    reservation.remarks = reservation_data.remarks
    reservation.card = reservation_data.card

    try:
        db.commit()
        db.refresh(reservation)
    except Exception as e:
        db.rollback()
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Database error during update: {str(e)}",
        )

    return reservation
