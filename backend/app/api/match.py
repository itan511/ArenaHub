from data.models.models import Match
from fastapi import APIRouter, Depends, HTTPException
from typing import List
from app.api.auth import get_current_user

router = APIRouter(prefix="/matches", tags=["Matches"])

matches_db = []

@router.get("/", response_model=List[Match])
def get_matches():
    return matches_db

@router.post("/", response_model=Match)
def create_match(match: Match, user=Depends(get_current_user)):
    matches_db.append(match)
    return match

@router.put("/{match_id}", response_model=Match)
def update_match(match_id: int, winner_id: int, user=Depends(get_current_user)):
    for m in matches_db:
        if m.id == match_id:
            m.winner_id = winner_id
            return m
    raise HTTPException(status_code=404, detail="Match not found")
