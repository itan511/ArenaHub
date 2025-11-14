from fastapi import APIRouter, HTTPException, Depends
from typing import List
from app.data.models.models import Tournament
from app.api.auth import get_current_user

router = APIRouter(prefix="/tournaments", tags=["Tournaments"])

tournaments_db = []

@router.get("/", response_model=List[Tournament])
def list_tournaments():
    return tournaments_db

@router.post("/", response_model=Tournament)
def create_tournament(tournament: Tournament, user=Depends(get_current_user)):
    tournaments_db.append(tournament)
    return tournament

@router.put("/{tournament_id}", response_model=Tournament)
def update_tournament(tournament_id: int, updated: Tournament, user=Depends(get_current_user)):
    for i, t in enumerate(tournaments_db):
        if t.id == tournament_id:
            tournaments_db[i] = updated
            return updated
    raise HTTPException(status_code=404, detail="Tournament not found")

@router.delete("/{tournament_id}")
def delete_tournament(tournament_id: int, user=Depends(get_current_user)):
    global tournaments_db
    tournaments_db = [t for t in tournaments_db if t.id != tournament_id]
    return {"message": "Deleted"}
