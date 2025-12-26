from sqlalchemy.ext.asyncio import AsyncEngine

from .base import Base
from .session import engine 


async def init_models(engine: AsyncEngine = engine, drop: bool = False):
    async with engine.begin() as conn:
        if drop:
            await conn.run_sync(Base.metadata.drop_all)
        await conn.run_sync(Base.metadata.create_all)
