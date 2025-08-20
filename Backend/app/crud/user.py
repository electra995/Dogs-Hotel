import bcrypt
from fastapi import HTTPException
from sqlalchemy import func

from sqlalchemy.orm import Session, joinedload
from app.models import User, Hotel, Reservation
from app.schemas import RegisterRequest, LoginRequest, UserProfileUpdate, UserResponse


def register_user(payload: RegisterRequest, db: Session):
    hashed_pw = bcrypt.hashpw(payload.password.encode(), bcrypt.gensalt()).decode()
    existing_user = (
        db.query(User).filter(func.lower(User.email) == payload.email.lower()).first()
    )

    if existing_user:
        raise HTTPException(status_code=400, detail="Email o cellulare già registrato.")

    is_admin = payload.role.lower() == "employee"

    new_user = User(
        is_admin=is_admin,
        name=payload.name,
        email=payload.email,
        password_hash=hashed_pw,
    )

    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    if is_admin:
        default_hotel = Hotel(
            name="",
            city="",
            daily=0,
            address="",
            description="",
            user_id=new_user.id,
        )
        db.add(default_hotel)
        db.commit()
        db.refresh(default_hotel)

    return UserResponse(
        id=new_user.id,
        name=new_user.name,
        email=new_user.email,
        role=payload.role.lower(),
    )


def login_user(payload: LoginRequest, db: Session):
    user = (
        db.query(User).filter(func.lower(User.email) == payload.email.lower()).first()
    )

    if not user:
        raise HTTPException(status_code=401, detail="Username non valido.")

    if not bcrypt.checkpw(payload.password.encode(), user.password_hash.encode()):
        raise HTTPException(status_code=401, detail="Password non valida.")

    return UserResponse(
        id=user.id,
        name=user.name,
        email=user.email,
        role="employee" if user.is_admin else "guest",
    )


def get_user_by_id(user_id: int, db: Session):
    user = db.query(User).filter(User.id == user_id).first()
    if not user:
        raise HTTPException(status_code=404, detail="Utente non trovato")
    return user


def update_user(user_id: int, payload: UserProfileUpdate, db: Session):
    user = db.query(User).filter(User.id == user_id).first()
    if not user:
        raise HTTPException(status_code=404, detail="Utente non trovato")

    for field, value in payload.model_dump(exclude_unset=True).items():
        setattr(user, field, value)

    db.commit()
    return {"message": "Profilo aggiornato con successo"}


def get_reservations_by_user_id(user_id: int, db: Session):
    return (
        db.query(Reservation)
        .options(joinedload(Reservation.hotel))
        .filter(Reservation.user_id == user_id)
        .all()
    )
