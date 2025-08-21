from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from contextlib import asynccontextmanager

from database import engine
import models as models
from routers import profile, auth, hotel, reservation, review


# ----------------- LIFESPAN -----------------


@asynccontextmanager
async def lifespan(app: FastAPI):
    models.Base.metadata.create_all(bind=engine)
    yield


# ----------------- FASTAPI APP -----------------

app = FastAPI(lifespan=lifespan)

# ----------------- MIDDLEWARE -----------------

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",  # frontend Vite dev
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ----------------- ENDPOINTS AUTHENTICATION -----------------

app.include_router(auth.router)

# ----------------- ENDPOINTS DASHBOARDS -----------------

app.include_router(profile.router)
app.include_router(hotel.router)

# ----------------- ENDPOINTS RESERVATIONS -----------------

app.include_router(reservation.router)

# ----------------- ENDPOINTS REVIEWS -----------------

app.include_router(review.router)
