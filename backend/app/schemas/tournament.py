from datetime import datetime

from pydantic import BaseModel, ConfigDict, Field


class TournamentCreate(BaseModel):
    name: str = Field(max_length=320)
    game: str = Field(max_length=128)
    date_start: datetime
    date_end: datetime


class TournamentUpdate(BaseModel):
    name: str | None = Field(default=None, max_length=320)
    game: str | None = Field(default=None, max_length=128)
    date_start: datetime | None = None
    date_end: datetime | None = None


class TournamentRead(BaseModel):
    id: int
    name: str
    game: str
    date_start: datetime
    date_end: datetime
    created_at: datetime

    model_config = ConfigDict(from_attributes=True)
