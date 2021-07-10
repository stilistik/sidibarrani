import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Deck {
  readonly id: string;
  readonly cards?: (DeckCard | null)[];
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
  readonly suit?: number;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Card>);
  static copyOf(source: Card, mutator: (draft: MutableModel<Card>) => MutableModel<Card> | void): Card;
}

export declare class Round {
  readonly id: string;
  readonly deck?: Deck;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Round>);
  static copyOf(source: Round, mutator: (draft: MutableModel<Round>) => MutableModel<Round> | void): Round;
}

export declare class Team {
  readonly id: string;
  readonly score?: number;
  readonly name?: string;
  readonly users?: (User | null)[];
  readonly gameID?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Team>);
  static copyOf(source: Team, mutator: (draft: MutableModel<Team>) => MutableModel<Team> | void): Team;
}

export declare class User {
  readonly id: string;
  readonly username?: string;
  readonly email?: string;
  readonly teamID?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<User>);
  static copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

export declare class Game {
  readonly id: string;
  readonly teams?: (Team | null)[];
  readonly name?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Game>);
  static copyOf(source: Game, mutator: (draft: MutableModel<Game>) => MutableModel<Game> | void): Game;
}