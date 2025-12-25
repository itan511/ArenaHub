from sqlalchemy import DateTime, String, func
from sqlalchemy.orm import Mapped, mapped_column

from app.db.base import Base


class Tournament(Base):
    __tablename__ = "tournaments"
    id: Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[str] = mapped_column(String(320), unique=True, index=True)
    description: Mapped[str] = mapped_column(String(320), unique=True, index=True)
    format: Mapped[str] = mapped_column(String(128))
    date_start: Mapped[DateTime] = mapped_column(DateTime(timezone=True))
    date_end: Mapped[DateTime] = mapped_column(DateTime(timezone=True))
    prize_pool: Mapped[str] = mapped_column(String(128))
    created_at: Mapped[DateTime] = mapped_column(
        DateTime(timezone=True), server_default=func.now()
    )
