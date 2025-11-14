from fastapi import APIRouter, Depends, HTTPException
from app.data.models.models import Player
from typing import List
from app.api.auth import get_current_user

router = APIRouter(prefix="/players", tags=["Players"])

players_db = []

@router.get("/", response_model=List[Player])
def get_players():
    return players_db

@router.post("/", response_model=Player)
def add_player(player: Player, user=Depends(get_current_user)):
    players_db.append(player)
    return player

@router.put("/{player_id}", response_model=Player)
def update_player(player_id: int, player: Player, user=Depends(get_current_user)):
    for i, p in enumerate(players_db):
        if p.id == player_id:
            players_db[i] = player
            return player
    raise HTTPException(status_code=404, detail="Player not found")
