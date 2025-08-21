from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database import get_db
from app.schemas import RegisterRequest, LoginRequest, UserBase
from app.crud import user as user_crud

router = APIRouter(prefix="/user", tags=["Auth"])


@router.post("/register", response_model=UserBase)
def register(payload: RegisterRequest, db: Session = Depends(get_db)):
    return user_crud.register_user(payload, db)


@router.post("/login", response_model=UserBase)
def login(payload: LoginRequest, db: Session = Depends(get_db)):
    return user_crud.login_user(payload, db)
