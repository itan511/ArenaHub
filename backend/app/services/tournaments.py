from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.models.tournament import Tournament
from app.schemas.tournament import TournamentCreate, TournamentUpdate


async def get_tournament_by_id(
    session: AsyncSession, tournament_id: int
) -> Tournament | None:
    return (
        await session.execute(select(Tournament).where(Tournament.id == tournament_id))
    ).scalar_one_or_none()


async def get_all_tournaments(session: AsyncSession) -> list[Tournament]:
    result = await session.execute(select(Tournament))
    return list(result.scalars().all())


async def create_tournament(
    session: AsyncSession, data: TournamentCreate
) -> Tournament:
    tournament = Tournament(**data.model_dump())
    session.add(tournament)
    await session.commit()
    await session.refresh(tournament)
    return tournament


async def update_tournament(
    session: AsyncSession, tournament: Tournament, data: TournamentUpdate
) -> Tournament:
    for field, value in data.model_dump(exclude_unset=True).items():
        setattr(tournament, field, value)

    await session.commit()
    await session.refresh(tournament)
    return tournament


async def delete_tournament(session: AsyncSession, tournament: Tournament) -> None:
    await session.delete(tournament)
    await session.commit()
