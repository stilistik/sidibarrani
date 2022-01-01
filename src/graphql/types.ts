export interface Game {
  id: string;
  index: number;
  mode: GameMode;
  winCondition: number;
  private: boolean;
  activeRoundID: string;
  activeRound: Round;
  status: GameStatus;
  Rounds: { items: Round[] };
  Teams: { items: Team[] };
}

export enum GameMode {
  DUO = "DUO",
}

export interface Round {}

export interface Team {
  id: string;
  name: string;
  gameID: string;
  color: string;
  TeamUsers: {
    items: TeamUser[];
  };
}

export interface TeamUser {
  id: string;
  teamID: string;
  userID: string;
  team: Team;
  user: User;
}

export interface User {
  id: string;
  email: string;
  username: string;
  lastOnline: string;
}

export enum GameStatus {
  CREATED = "CREATED",
  WAITING = "WAITING",
  STARTED = "STARTED",
  ENDED = "ENDED",
}
