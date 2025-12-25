from app.core.settings import settings
from sqlalchemy.ext.asyncio import AsyncSession, async_sessionmaker, create_async_engine

engine = create_async_engine(
    settings.DATABASE_URL, pool_pre_ping=True, echo=settings.DEBUG
)
AsyncSessionLocal = async_sessionmaker(
    engine, expire_on_commit=False, autoflush=False, class_=AsyncSession
)


async def get_session() -> AsyncSession:
    async with AsyncSessionLocal() as session:
        yield session
