from pydantic import BaseModel
from typing import List, Optional

class Player(BaseModel):
    id: int
    nickname: str
    country: Optional[str] = None
    team_id: Optional[int] = None

class Tournament(BaseModel):
    id: int
    name: str
    game: str
    date_start: str
    date_end: str
    teams: List[int] = []

class Match(BaseModel):
    id: int
    tournament_id: int
    team1_id: int
    team2_id: int
    score: Optional[str] = None
    status: Optional[str] = "upcoming"

class Team(BaseModel):
    id: int
    name: str
    country: str
    logo_url: Optional[str] = None
    players: List[int] = []

class Token(BaseModel):
    access_token: str
    token_type: str