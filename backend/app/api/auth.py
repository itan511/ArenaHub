from fastapi import APIRouter, HTTPException, Depends, status, Header # type: ignore

router = APIRouter(prefix="/auth", tags=["Auth"])

users = {
    "user1": {"username": "user1", "password": "12345"},
    "user2": {"username": "user2", "password": "abcd"},
}

active_tokens = {}

@router.post("/login")
def login(username: str, password: str):
    user = users.get(username)
    if not user or user["password"] != password:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid credentials")
    token = f"token-{username}"
    active_tokens[token] = username
    return {"token": token}

def get_current_user(authorization: str = Header(None)):
    if not authorization or authorization not in active_tokens:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Unauthorized")
    username = active_tokens[authorization]
    return {"username": username}
