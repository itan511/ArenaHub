from fastapi import APIRouter, Depends, HTTPException, status
from pydantic import BaseModel, EmailStr
from sqlalchemy.ext.asyncio import AsyncSession

from app.core.security import create_access_token, hash_password, verify_password
from app.db.session import get_session
from app.models.user import User
from app.services.users import get_user_by_email

router = APIRouter(tags=["auth"])


class Token(BaseModel):
    access_token: str
    token_type: str = "bearer"


class Login(BaseModel):
    email: EmailStr
    password: str


@router.post("/login", response_model=Token)
async def login(
    data: Login,
    session: AsyncSession = Depends(get_session),
):
    user = await get_user_by_email(
        session=session,
        email=data.email,
    )

    if not user or not verify_password(data.password, user.hashed_password):
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid credentials",
        )

    return Token(access_token=create_access_token(sub=user.email))


class Register(BaseModel):
    email: EmailStr
    password: str


@router.post("/register", status_code=status.HTTP_201_CREATED)
async def register(
    data: Register,
    session: AsyncSession = Depends(get_session),
):
    existing_user = await get_user_by_email(
        session=session,
        email=data.email,
    )

    if existing_user:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Email already registered",
        )

    user = User(
        email=data.email,
        hashed_password=hash_password(data.password),
        is_active=True,
    )

    session.add(user)
    await session.commit()
    await session.refresh(user)

    return {
        "id": user.id,
        "email": user.email,
        "is_active": user.is_active,
    }
