from datetime import date, datetime
from typing import Optional, List

from pydantic import BaseModel, EmailStr, conint


class LoginRequest(BaseModel):
    email: EmailStr
    password: str


class RegisterRequest(BaseModel):
    role: str
    name: str
    email: EmailStr
    password: str


class UserBase(BaseModel):
    id: int
    name: str
    email: EmailStr
    role: Optional[str] = None
    address: Optional[str] = None
    address_number: Optional[str] = None
    cap: Optional[str] = None
    province: Optional[str] = None
    phone: Optional[str] = None
    image_url: Optional[str] = None

    class Config:
        from_attributes = True


class UserResponse(BaseModel):
    id: int
    name: str
    email: EmailStr
    role: str
    address: Optional[str] = None
    address_number: Optional[str] = None
    cap: Optional[str] = None
    province: Optional[str] = None
    phone: Optional[str] = None
    image_url: Optional[str] = None

    class Config:
        from_attributes = True


class UserProfileUpdate(BaseModel):
    address: Optional[str] = None
    address_number: Optional[str] = None
    cap: Optional[str] = None
    province: Optional[str] = None
    phone: Optional[str] = None
    email: Optional[EmailStr] = None


class HotelBase(BaseModel):
    id: int
    name: Optional[str] = None
    city: Optional[str] = None
    address: Optional[str] = None
    daily: Optional[int] = None
    image_url: Optional[str] = None
    description: Optional[str] = None
    address_number: Optional[str] = None
    cap: Optional[str] = None
    province: Optional[str] = None
    social_url: Optional[str] = None
    checkin: Optional[str] = None
    checkout: Optional[str] = None
    discount: Optional[float] = None
    type: Optional[List[int]] = []
    accepted_animals: Optional[List[int]] = []
    user_id: int

    class Config:
        from_attributes = True


class HotelCreate(BaseModel):
    user_id: int
    name: str
    city: str
    daily: int
    address: Optional[str] = None
    description: Optional[str] = None


LodgingResponse = List[HotelBase]


class HotelProfileUpdate(BaseModel):
    id: int
    name: Optional[str] = None
    city: Optional[str] = None
    address: Optional[str] = None
    daily: Optional[int] = None
    image_url: Optional[str] = None
    description: Optional[str] = None
    address_number: Optional[str] = None
    cap: Optional[str] = None
    province: Optional[str] = None
    social_url: Optional[str] = None
    checkin: Optional[str] = None
    checkout: Optional[str] = None
    discount: Optional[float] = None
    type: Optional[List[int]] = []
    accepted_animals: Optional[List[int]] = []


class ReservationBase(BaseModel):
    id: int
    user_id: int
    hotel_id: int
    pet_name: str
    pet_type: int
    pet_age: int
    pet_gender: str
    checkin_date: date
    checkout_date: date
    total_price: float
    card: Optional[str] = None
    created_at: Optional[datetime] = None
    additional_services: Optional[List[int]] = []
    remarks: Optional[str] = None


class ReservationRequest(BaseModel):
    user_id: int
    hotel_id: int
    checkin: datetime
    checkout: datetime
    total_price: float
    pet_name: str
    pet_type: str
    pet_age: str
    additional_services: Optional[List[int]] = []
    remarks: Optional[str] = None
    card: Optional[str] = None
    pet_gender: str
    created_at: Optional[datetime] = None

    class Config:
        from_attributes = True


class ReservationBaseWithUser(ReservationBase):
    user: UserBase

    class Config:
        from_attributes = True


class ReservationBaseWithHotel(ReservationBase):
    hotel: HotelBase

    class Config:
        from_attributes = True


ReservationResponse = List[ReservationBaseWithHotel]

ReservationWithUserResponse = List[ReservationBaseWithUser]


class ReviewBase(BaseModel):
    avatar: str
    user_name: str
    user_rating: conint(ge=1, le=5)
    comment: str

    class Config:
        from_attributes = True


class ReviewResponse(BaseModel):
    reviews: List[ReviewBase]
    ratings_number: int
    user_rating: float

    class Config:
        from_attributes = True
