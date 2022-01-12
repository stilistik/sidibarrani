import { Color } from "../utils/ColorUtils";

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
  TeamA: Team;
  TeamB: Team;
  teamAColor: Color;
  teamBColor: Color;
  messages: { items: Message[] };
  winnerID: string;
  winner: Team;
  result: string;
}

export enum GameMode {
  DUO = "DUO",
}

export interface Message {
  id: string;
  text: string;
  createdAt: string;
  updatedAt: string;
  user: User;
}

export interface Round {
  id: string;
  gameID: string;
  status: RoundStatus;
  hands: { items: Hand[] };
  stackCount: number;
  stacks: { items: Stack[] };
  activeStackID: string;
  activeStack: Stack;
  turnSequence: string[];
  turn: string;
  mode: RoundMode;
  stake: string;
  result: string;
  winnerID: string;
  winner: Team;
}

export enum RoundMode {
  TOP_DOWN = "TOP_DOWN",
  BOTTOM_UP = "BOTTOM_UP",
  SLALOM_BOTTOM = "SLALOM_BOTTOM",
  SLALOM_TOP = "SLALOM_TOP",
  TRUMP_D = "TRUMP_D",
  TRUMP_H = "TRUMP_H",
  TRUMP_C = "TRUMP_C",
  TRUMP_S = "TRUMP_S",
}

export interface Stack {
  id: string;
  winnerID: string;
  winner: TeamUser;
  points: number;
  roundID: string;
  size: number;
  actions: { items: Action[] };
  isLastStack: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Action {
  id: string;
  value: string;
  type: ActionType;
  stackID: string;
  userID: string;
  user: User;
  createdAt: string;
  updatedAt: string;
}

export enum ActionType {
  PLAY = "PLAY",
  BET = "BET",
  SKIP = "SKIP",
}

export enum RoundStatus {
  BET = "BET",
  PLAY = "PLAY",
  ENDED = "ENDED",
}

export interface Hand {
  cards: string[];
}

export interface Team {
  id: string;
  name: string;
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
