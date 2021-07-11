import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum CardSuit {
  HEARTS = "HEARTS",
  CLUBS = "CLUBS",
  SPADES = "SPADES",
  DIAMONDS = "DIAMONDS"
}



export declare class Team {
  readonly id: string;
  readonly color?: string;
  readonly name?: string;
  readonly TeamPlayers?: (TeamPlayer | null)[];
  readonly gameID?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Team>);
  static copyOf(source: Team, mutator: (draft: MutableModel<Team>) => MutableModel<Team> | void): Team;
}

export declare class TeamPlayer {
  readonly id: string;
  readonly team: Team;
  readonly player: Player;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<TeamPlayer>);
  static copyOf(source: TeamPlayer, mutator: (draft: MutableModel<TeamPlayer>) => MutableModel<TeamPlayer> | void): TeamPlayer;
}

export declare class Player {
  readonly id: string;
  readonly teams?: (TeamPlayer | null)[];
  readonly name?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Player>);
  static copyOf(source: Player, mutator: (draft: MutableModel<Player>) => MutableModel<Player> | void): Player;
}

export declare class Round {
  readonly id: string;
  readonly gameID?: string;
  readonly result?: string;
  readonly Deck?: Deck;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Round>);
  static copyOf(source: Round, mutator: (draft: MutableModel<Round>) => MutableModel<Round> | void): Round;
}

export declare class Deck {
  readonly id: string;
  readonly DeckCards?: (DeckCard | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Deck>);
  static copyOf(source: Deck, mutator: (draft: MutableModel<Deck>) => MutableModel<Deck> | void): Deck;
}

export declare class DeckCard {
  readonly id: string;
  readonly deck: Deck;
  readonly card: Card;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<DeckCard>);
  static copyOf(source: DeckCard, mutator: (draft: MutableModel<DeckCard>) => MutableModel<DeckCard> | void): DeckCard;
}

export declare class Card {
  readonly id: string;
  readonly decks?: (DeckCard | null)[];
  readonly rank?: number;
  readonly suit?: CardSuit | keyof typeof CardSuit;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Card>);
  static copyOf(source: Card, mutator: (draft: MutableModel<Card>) => MutableModel<Card> | void): Card;
}

export declare class Game {
  readonly id: string;
  readonly name?: string;
  readonly Teams?: (Team | null)[];
  readonly Rounds?: (Round | null)[];
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Game>);
  static copyOf(source: Game, mutator: (draft: MutableModel<Game>) => MutableModel<Game> | void): Game;
}