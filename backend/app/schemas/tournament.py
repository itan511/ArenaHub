from datetime import datetime

from pydantic import BaseModel, ConfigDict, Field


class TournamentCreate(BaseModel):
    name: str = Field(max_length=320)
    description: str = Field(max_length=320)
    format: str = Field(max_length=128)
    date_start: datetime
    date_end: datetime
    prize_pool: str = Field(max_length=128)


class TournamentUpdate(BaseModel):
    name: str | None = Field(default=None, max_length=320)
    description: str | None = Field(default=None, max_length=320)
    format: str | None = Field(default=None, max_length=128)
    date_start: datetime | None = None
    date_end: datetime | None = None
    prize_pool: str | None = Field(default=None, max_length=128)


class TournamentRead(BaseModel):
    id: int
    name: str
    description: str
    format: str
    date_start: datetime
    date_end: datetime
    prize_pool: str
    created_at: datetime

    model_config = ConfigDict(from_attributes=True)
