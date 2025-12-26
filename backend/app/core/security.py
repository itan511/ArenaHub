from datetime import datetime, timedelta, timezone

import bcrypt
from jose import jwt

from app.core.settings import settings

MAX_PASSWORD_LENGTH = 72


def hash_password(password: str) -> str:
    encoded = password.encode("utf-8")
    if len(encoded) > MAX_PASSWORD_LENGTH:
        encoded = encoded[:MAX_PASSWORD_LENGTH] 
    hashed = bcrypt.hashpw(encoded, bcrypt.gensalt())
    return hashed.decode("utf-8")


def verify_password(password: str, hashed: str) -> bool:
    encoded = password.encode("utf-8")
    if len(encoded) > MAX_PASSWORD_LENGTH:
        encoded = encoded[:MAX_PASSWORD_LENGTH]
    return bcrypt.checkpw(encoded, hashed.encode("utf-8"))


def create_access_token(sub: str, minutes: int | None = None) -> str:
    exp = datetime.now(timezone.utc) + timedelta(
        minutes=minutes or settings.ACCESS_TOKEN_EXPIRE_MINUTES
    )
    return jwt.encode(
        {"sub": sub, "exp": exp}, settings.SECRET_KEY, algorithm=settings.JWT_ALG
    )
