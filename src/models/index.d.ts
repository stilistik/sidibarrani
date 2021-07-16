import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum RoundStatus {
  DEAL = "DEAL",
  BET = "BET",
  PLAY = "PLAY"
}

export enum GameStatus {
  STARTED = "STARTED",
  CREATED = "CREATED",
  ENDED = "ENDED"
}



export declare class Team {
  readonly id: string;
  readonly Users?: (User | null)[];
  readonly gameID?: string;
  readonly name?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Team>);
  static copyOf(source: Team, mutator: (draft: MutableModel<Team>) => MutableModel<Team> | void): Team;
}

export declare class User {
  readonly id: string;
  readonly email: string;
  readonly username: string;
  readonly lastOnline?: number;
  readonly teamID?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<User>);
  static copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

export declare class Round {
  readonly id: string;
  readonly gameID?: string;
  readonly status?: RoundStatus | keyof typeof RoundStatus;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Round>);
  static copyOf(source: Round, mutator: (draft: MutableModel<Round>) => MutableModel<Round> | void): Round;
}

export declare class Game {
  readonly id: string;
  readonly private?: boolean;
  readonly Rounds?: (Round | null)[];
  readonly status?: GameStatus | keyof typeof GameStatus;
  readonly Teams?: (Team | null)[];
  readonly name?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Game>);
  static copyOf(source: Game, mutator: (draft: MutableModel<Game>) => MutableModel<Game> | void): Game;
}