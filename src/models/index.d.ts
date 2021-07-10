import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Game {
  readonly id: string;
  readonly name: string;
  readonly teams?: (Team | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Game>);
  static copyOf(source: Game, mutator: (draft: MutableModel<Game>) => MutableModel<Game> | void): Game;
}

export declare class Team {
  readonly id: string;
  readonly gameID: string;
  readonly players?: (PlayerTeams | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Team>);
  static copyOf(source: Team, mutator: (draft: MutableModel<Team>) => MutableModel<Team> | void): Team;
}

export declare class PlayerTeams {
  readonly id: string;
  readonly player: Player;
  readonly team: Team;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<PlayerTeams>);
  static copyOf(source: PlayerTeams, mutator: (draft: MutableModel<PlayerTeams>) => MutableModel<PlayerTeams> | void): PlayerTeams;
}

export declare class Player {
  readonly id: string;
  readonly name: string;
  readonly teams?: (PlayerTeams | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Player>);
  static copyOf(source: Player, mutator: (draft: MutableModel<Player>) => MutableModel<Player> | void): Player;
}