from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    POSTGRES_USER: str
    POSTGRES_PASSWORD: str
    POSTGRES_DB: str
    POSTGRES_HOST: str
    POSTGRES_PORT: int

    @property
    def DATABASE_URL(self) -> str:
        return (
            f"postgresql+asyncpg://{self.POSTGRES_USER}:"
            f"{self.POSTGRES_PASSWORD}@"
            f"{self.POSTGRES_HOST}:"
            f"{self.POSTGRES_PORT}/"
            f"{self.POSTGRES_DB}"
        )

    APP_NAME: str = "ArenaHub"
    ENV: str = "local"
    DEBUG: bool = True

    SECRET_KEY: str = "very-secret"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60
    JWT_ALG: str = "HS256"

    CORS_ORIGINS: list[str] = ["*"]

    model_config = SettingsConfigDict(env_file=".env", case_sensitive=False)

    class Config:
        env_file = ".env"


settings = Settings()
