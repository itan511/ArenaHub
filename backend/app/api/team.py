from fastapi import APIRouter, Depends, HTTPException
from typing import List
from data.models.models import Team
from app.api.auth import get_current_user

router = APIRouter(prefix="/teams", tags=["Teams"])

teams_db = []

@router.get("/", response_model=List[Team])
def get_teams():
    return teams_db

@router.post("/", response_model=Team)
def create_team(team: Team, user=Depends(get_current_user)):
    teams_db.append(team)
    return team

@router.put("/{team_id}", response_model=Team)
def update_team(team_id: int, updated_team: Team, user=Depends(get_current_user)):
    for i, t in enumerate(teams_db):
        if t.id == team_id:
            teams_db[i] = updated_team
            return updated_team
    raise HTTPException(status_code=404, detail="Team not found")

@router.delete("/{team_id}")
def delete_team(team_id: int, user=Depends(get_current_user)):
    global teams_db
    teams_db = [t for t in teams_db if t.id != team_id]
    return {"message": "Deleted"}
