from sqlalchemy import (
    Column,
    Integer,
    String,
    Boolean,
    Float,
    ForeignKey,
    ARRAY,
    Date,
    Text,
    DateTime,
    func,
)
from sqlalchemy.orm import relationship

from app.database import Base


class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)
    is_admin = Column(Boolean, nullable=False)
    name = Column(String, nullable=False)
    email = Column(String, unique=True, nullable=False)
    password_hash = Column(String, nullable=False)

    address = Column(String, nullable=True)
    address_number = Column(String, nullable=True)
    cap = Column(String, nullable=True)
    province = Column(String, nullable=True)
    phone = Column(String, nullable=True)
    image_url = Column(String, nullable=True)

    hotels = relationship("Hotel", back_populates="owner", cascade="all, delete-orphan")


class Hotel(Base):
    __tablename__ = "hotels"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, nullable=True)
    city = Column(String, nullable=True)
    daily = Column(Integer, nullable=True)
    image_url = Column(String, nullable=True)
    address = Column(String, nullable=True)
    description = Column(Text, nullable=True)
    address_number = Column(String, nullable=True)
    cap = Column(String, nullable=True)
    province = Column(String, nullable=True)
    social_url = Column(String, nullable=True)
    checkin = Column(String, nullable=True)
    checkout = Column(String, nullable=True)
    discount = Column(Float, nullable=True)

    type = Column(ARRAY(Integer))
    accepted_animals = Column(ARRAY(Integer))

    user_id = Column(Integer, ForeignKey("users.id"), nullable=False)

    owner = relationship("User", back_populates="hotels")


class Reservation(Base):
    __tablename__ = "reservations"

    id = Column(Integer, primary_key=True, index=True)

    user_id = Column(Integer, ForeignKey("users.id"), nullable=False, index=True)
    hotel_id = Column(Integer, ForeignKey("hotels.id"), nullable=False, index=True)

    pet_name = Column(String(50), nullable=False)
    pet_type = Column(Integer, nullable=False)
    pet_age = Column(Integer, nullable=False)
    pet_gender = Column(String(1), nullable=False)
    checkin_date = Column(Date, nullable=False)
    checkout_date = Column(Date, nullable=False)
    total_price = Column(Float, nullable=False)
    additional_services = Column(ARRAY(Integer), nullable=True)
    remarks = Column(Text, nullable=True)
    card = Column(Integer, nullable=True)

    created_at = Column(DateTime(timezone=True), server_default=func.now())

    user = relationship("User")
    hotel = relationship("Hotel")


class Review(Base):
    __tablename__ = "reviews"

    id = Column(Integer, primary_key=True, index=True)
    avatar = Column(String, nullable=False)
    user_name = Column(String, nullable=False, index=True)
    user_rating = Column(Integer, nullable=False)
    comment = Column(Text, nullable=False)
