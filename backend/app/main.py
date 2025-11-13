from fastapi import FastAPI
from app.api import auth, tournament, player, match, team

app = FastAPI(title="ArenaHub API")

app.include_router(auth.router)
app.include_router(tournament.router)
app.include_router(player.router)
app.include_router(match.router)
app.include_router(team.router) 
