from typing import List

from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.ext.asyncio import AsyncSession

from app.core.deps import get_current_user
from app.db.session import get_session
from app.schemas.tournament import TournamentCreate, TournamentRead, TournamentUpdate
from app.services.tournaments import (
    create_tournament as service_create_tournament,
)
from app.services.tournaments import (
    delete_tournament as service_delete_tournament,
)
from app.services.tournaments import (
    get_all_tournaments,
    get_tournament_by_id,
)
from app.services.tournaments import (
    update_tournament as service_update_tournament,
)

router = APIRouter(prefix="/tournaments", tags=["Tournaments"])


@router.get("/", response_model=List[TournamentRead])
async def list_tournaments(session: AsyncSession = Depends(get_session)):
    tournaments = await get_all_tournaments(session)
    return tournaments


@router.get("/{tournament_id}", response_model=TournamentRead)
async def get_tournament(
    tournament_id: int,
    session: AsyncSession = Depends(get_session),
):
    tournament = await get_tournament_by_id(session, tournament_id)
    if not tournament:
        raise HTTPException(status_code=404, detail="Tournament not found")
    return tournament


@router.post("/", response_model=TournamentRead, status_code=status.HTTP_201_CREATED)
async def create_tournament(
    tournament: TournamentCreate,
    session: AsyncSession = Depends(get_session),
    user=Depends(get_current_user),
):
    new_tournament = await service_create_tournament(session, tournament)
    return new_tournament


@router.put("/{tournament_id}", response_model=TournamentRead)
async def update_tournament(
    tournament_id: int,
    updated: TournamentUpdate,
    session: AsyncSession = Depends(get_session),
    user=Depends(get_current_user),
):
    tournament = await get_tournament_by_id(session, tournament_id)
    if not tournament:
        raise HTTPException(status_code=404, detail="Tournament not found")

    updated_tournament = await service_update_tournament(session, tournament, updated)
    return updated_tournament


@router.delete("/{tournament_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_tournament(
    tournament_id: int,
    session: AsyncSession = Depends(get_session),
    user=Depends(get_current_user),
):
    tournament = await get_tournament_by_id(session, tournament_id)
    if not tournament:
        raise HTTPException(status_code=404, detail="Tournament not found")

    await service_delete_tournament(session, tournament)
    return None
