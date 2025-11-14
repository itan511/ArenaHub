from fastapi import FastAPI
from app.api import auth, tournament, player, match, team
import uvicorn

app = FastAPI(title="ArenaHub API")

app.include_router(auth.router)
app.include_router(tournament.router)
app.include_router(player.router)
app.include_router(match.router)
app.include_router(team.router) 

if __name__ == "__main__":
      uvicorn.run(app, host="0.0.0.0", port=5000, log_level="info")