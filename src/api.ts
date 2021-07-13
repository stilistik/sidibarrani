/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateTeamInput = {
  id?: string | null,
  color?: string | null,
  name?: string | null,
  gameID?: string | null,
  _version?: number | null,
};

export type ModelTeamConditionInput = {
  color?: ModelStringInput | null,
  name?: ModelStringInput | null,
  gameID?: ModelIDInput | null,
  and?: Array< ModelTeamConditionInput | null > | null,
  or?: Array< ModelTeamConditionInput | null > | null,
  not?: ModelTeamConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Team = {
  __typename: "Team",
  id: string,
  color?: string | null,
  name?: string | null,
  gameID?: string | null,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  createdAt: string,
  updatedAt: string,
  TeamPlayers?: ModelTeamPlayerConnection | null,
};

export type ModelTeamPlayerConnection = {
  __typename: "ModelTeamPlayerConnection",
  items?:  Array<TeamPlayer | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type TeamPlayer = {
  __typename: "TeamPlayer",
  id: string,
  teamID: string,
  playerID: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  createdAt: string,
  updatedAt: string,
  team: Team,
  player: Player,
};

export type Player = {
  __typename: "Player",
  id: string,
  name?: string | null,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  createdAt: string,
  updatedAt: string,
  teams?: ModelTeamPlayerConnection | null,
};

export type UpdateTeamInput = {
  id: string,
  color?: string | null,
  name?: string | null,
  gameID?: string | null,
  _version?: number | null,
};

export type DeleteTeamInput = {
  id: string,
  _version?: number | null,
};

export type CreatePlayerInput = {
  id?: string | null,
  name?: string | null,
  _version?: number | null,
};

export type ModelPlayerConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelPlayerConditionInput | null > | null,
  or?: Array< ModelPlayerConditionInput | null > | null,
  not?: ModelPlayerConditionInput | null,
};

export type UpdatePlayerInput = {
  id: string,
  name?: string | null,
  _version?: number | null,
};

export type DeletePlayerInput = {
  id: string,
  _version?: number | null,
};

export type CreateRoundInput = {
  id?: string | null,
  gameID?: string | null,
  result?: string | null,
  _version?: number | null,
  roundDeckId?: string | null,
};

export type ModelRoundConditionInput = {
  gameID?: ModelIDInput | null,
  result?: ModelStringInput | null,
  and?: Array< ModelRoundConditionInput | null > | null,
  or?: Array< ModelRoundConditionInput | null > | null,
  not?: ModelRoundConditionInput | null,
};

export type Round = {
  __typename: "Round",
  id: string,
  gameID?: string | null,
  result?: string | null,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  createdAt: string,
  updatedAt: string,
  Deck?: Deck | null,
};

export type Deck = {
  __typename: "Deck",
  id: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  createdAt: string,
  updatedAt: string,
  DeckCards?: ModelDeckCardConnection | null,
};

export type ModelDeckCardConnection = {
  __typename: "ModelDeckCardConnection",
  items?:  Array<DeckCard | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type DeckCard = {
  __typename: "DeckCard",
  id: string,
  deckID: string,
  cardID: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  createdAt: string,
  updatedAt: string,
  deck: Deck,
  card: Card,
};

export type Card = {
  __typename: "Card",
  id: string,
  rank?: number | null,
  suit?: CardSuit | null,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  createdAt: string,
  updatedAt: string,
  decks?: ModelDeckCardConnection | null,
};

export enum CardSuit {
  HEARTS = "HEARTS",
  CLUBS = "CLUBS",
  SPADES = "SPADES",
  DIAMONDS = "DIAMONDS",
}


export type UpdateRoundInput = {
  id: string,
  gameID?: string | null,
  result?: string | null,
  _version?: number | null,
  roundDeckId?: string | null,
};

export type DeleteRoundInput = {
  id: string,
  _version?: number | null,
};

export type CreateDeckInput = {
  id?: string | null,
  _version?: number | null,
};

export type ModelDeckConditionInput = {
  and?: Array< ModelDeckConditionInput | null > | null,
  or?: Array< ModelDeckConditionInput | null > | null,
  not?: ModelDeckConditionInput | null,
};

export type UpdateDeckInput = {
  id: string,
  _version?: number | null,
};

export type DeleteDeckInput = {
  id: string,
  _version?: number | null,
};

export type CreateCardInput = {
  id?: string | null,
  rank?: number | null,
  suit?: CardSuit | null,
  _version?: number | null,
};

export type ModelCardConditionInput = {
  rank?: ModelIntInput | null,
  suit?: ModelCardSuitInput | null,
  and?: Array< ModelCardConditionInput | null > | null,
  or?: Array< ModelCardConditionInput | null > | null,
  not?: ModelCardConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelCardSuitInput = {
  eq?: CardSuit | null,
  ne?: CardSuit | null,
};

export type UpdateCardInput = {
  id: string,
  rank?: number | null,
  suit?: CardSuit | null,
  _version?: number | null,
};

export type DeleteCardInput = {
  id: string,
  _version?: number | null,
};

export type CreateGameInput = {
  id?: string | null,
  name?: string | null,
  _version?: number | null,
};

export type ModelGameConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelGameConditionInput | null > | null,
  or?: Array< ModelGameConditionInput | null > | null,
  not?: ModelGameConditionInput | null,
};

export type Game = {
  __typename: "Game",
  id: string,
  name?: string | null,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  createdAt: string,
  updatedAt: string,
  Teams?: ModelTeamConnection | null,
  Rounds?: ModelRoundConnection | null,
};

export type ModelTeamConnection = {
  __typename: "ModelTeamConnection",
  items?:  Array<Team | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelRoundConnection = {
  __typename: "ModelRoundConnection",
  items?:  Array<Round | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type UpdateGameInput = {
  id: string,
  name?: string | null,
  _version?: number | null,
};

export type DeleteGameInput = {
  id: string,
  _version?: number | null,
};

export type CreateTeamPlayerInput = {
  id?: string | null,
  teamID: string,
  playerID: string,
  _version?: number | null,
};

export type ModelTeamPlayerConditionInput = {
  teamID?: ModelIDInput | null,
  playerID?: ModelIDInput | null,
  and?: Array< ModelTeamPlayerConditionInput | null > | null,
  or?: Array< ModelTeamPlayerConditionInput | null > | null,
  not?: ModelTeamPlayerConditionInput | null,
};

export type UpdateTeamPlayerInput = {
  id: string,
  teamID?: string | null,
  playerID?: string | null,
  _version?: number | null,
};

export type DeleteTeamPlayerInput = {
  id: string,
  _version?: number | null,
};

export type CreateDeckCardInput = {
  id?: string | null,
  deckID: string,
  cardID: string,
  _version?: number | null,
};

export type ModelDeckCardConditionInput = {
  deckID?: ModelIDInput | null,
  cardID?: ModelIDInput | null,
  and?: Array< ModelDeckCardConditionInput | null > | null,
  or?: Array< ModelDeckCardConditionInput | null > | null,
  not?: ModelDeckCardConditionInput | null,
};

export type UpdateDeckCardInput = {
  id: string,
  deckID?: string | null,
  cardID?: string | null,
  _version?: number | null,
};

export type DeleteDeckCardInput = {
  id: string,
  _version?: number | null,
};

export type ModelTeamFilterInput = {
  id?: ModelIDInput | null,
  color?: ModelStringInput | null,
  name?: ModelStringInput | null,
  gameID?: ModelIDInput | null,
  and?: Array< ModelTeamFilterInput | null > | null,
  or?: Array< ModelTeamFilterInput | null > | null,
  not?: ModelTeamFilterInput | null,
};

export type ModelPlayerFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelPlayerFilterInput | null > | null,
  or?: Array< ModelPlayerFilterInput | null > | null,
  not?: ModelPlayerFilterInput | null,
};

export type ModelPlayerConnection = {
  __typename: "ModelPlayerConnection",
  items?:  Array<Player | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelRoundFilterInput = {
  id?: ModelIDInput | null,
  gameID?: ModelIDInput | null,
  result?: ModelStringInput | null,
  and?: Array< ModelRoundFilterInput | null > | null,
  or?: Array< ModelRoundFilterInput | null > | null,
  not?: ModelRoundFilterInput | null,
};

export type ModelDeckFilterInput = {
  id?: ModelIDInput | null,
  and?: Array< ModelDeckFilterInput | null > | null,
  or?: Array< ModelDeckFilterInput | null > | null,
  not?: ModelDeckFilterInput | null,
};

export type ModelDeckConnection = {
  __typename: "ModelDeckConnection",
  items?:  Array<Deck | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelCardFilterInput = {
  id?: ModelIDInput | null,
  rank?: ModelIntInput | null,
  suit?: ModelCardSuitInput | null,
  and?: Array< ModelCardFilterInput | null > | null,
  or?: Array< ModelCardFilterInput | null > | null,
  not?: ModelCardFilterInput | null,
};

export type ModelCardConnection = {
  __typename: "ModelCardConnection",
  items?:  Array<Card | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelGameFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelGameFilterInput | null > | null,
  or?: Array< ModelGameFilterInput | null > | null,
  not?: ModelGameFilterInput | null,
};

export type ModelGameConnection = {
  __typename: "ModelGameConnection",
  items?:  Array<Game | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelTeamPlayerFilterInput = {
  id?: ModelIDInput | null,
  teamID?: ModelIDInput | null,
  playerID?: ModelIDInput | null,
  and?: Array< ModelTeamPlayerFilterInput | null > | null,
  or?: Array< ModelTeamPlayerFilterInput | null > | null,
  not?: ModelTeamPlayerFilterInput | null,
};

export type ModelDeckCardFilterInput = {
  id?: ModelIDInput | null,
  deckID?: ModelIDInput | null,
  cardID?: ModelIDInput | null,
  and?: Array< ModelDeckCardFilterInput | null > | null,
  or?: Array< ModelDeckCardFilterInput | null > | null,
  not?: ModelDeckCardFilterInput | null,
};

export type CreateTeamMutationVariables = {
  input: CreateTeamInput,
  condition?: ModelTeamConditionInput | null,
};

export type CreateTeamMutation = {
  createTeam?:  {
    __typename: "Team",
    id: string,
    color?: string | null,
    name?: string | null,
    gameID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    TeamPlayers?:  {
      __typename: "ModelTeamPlayerConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type UpdateTeamMutationVariables = {
  input: UpdateTeamInput,
  condition?: ModelTeamConditionInput | null,
};

export type UpdateTeamMutation = {
  updateTeam?:  {
    __typename: "Team",
    id: string,
    color?: string | null,
    name?: string | null,
    gameID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    TeamPlayers?:  {
      __typename: "ModelTeamPlayerConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type DeleteTeamMutationVariables = {
  input: DeleteTeamInput,
  condition?: ModelTeamConditionInput | null,
};

export type DeleteTeamMutation = {
  deleteTeam?:  {
    __typename: "Team",
    id: string,
    color?: string | null,
    name?: string | null,
    gameID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    TeamPlayers?:  {
      __typename: "ModelTeamPlayerConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type CreatePlayerMutationVariables = {
  input: CreatePlayerInput,
  condition?: ModelPlayerConditionInput | null,
};

export type CreatePlayerMutation = {
  createPlayer?:  {
    __typename: "Player",
    id: string,
    name?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    teams?:  {
      __typename: "ModelTeamPlayerConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type UpdatePlayerMutationVariables = {
  input: UpdatePlayerInput,
  condition?: ModelPlayerConditionInput | null,
};

export type UpdatePlayerMutation = {
  updatePlayer?:  {
    __typename: "Player",
    id: string,
    name?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    teams?:  {
      __typename: "ModelTeamPlayerConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type DeletePlayerMutationVariables = {
  input: DeletePlayerInput,
  condition?: ModelPlayerConditionInput | null,
};

export type DeletePlayerMutation = {
  deletePlayer?:  {
    __typename: "Player",
    id: string,
    name?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    teams?:  {
      __typename: "ModelTeamPlayerConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type CreateRoundMutationVariables = {
  input: CreateRoundInput,
  condition?: ModelRoundConditionInput | null,
};

export type CreateRoundMutation = {
  createRound?:  {
    __typename: "Round",
    id: string,
    gameID?: string | null,
    result?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    Deck?:  {
      __typename: "Deck",
      id: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type UpdateRoundMutationVariables = {
  input: UpdateRoundInput,
  condition?: ModelRoundConditionInput | null,
};

export type UpdateRoundMutation = {
  updateRound?:  {
    __typename: "Round",
    id: string,
    gameID?: string | null,
    result?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    Deck?:  {
      __typename: "Deck",
      id: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type DeleteRoundMutationVariables = {
  input: DeleteRoundInput,
  condition?: ModelRoundConditionInput | null,
};

export type DeleteRoundMutation = {
  deleteRound?:  {
    __typename: "Round",
    id: string,
    gameID?: string | null,
    result?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    Deck?:  {
      __typename: "Deck",
      id: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type CreateDeckMutationVariables = {
  input: CreateDeckInput,
  condition?: ModelDeckConditionInput | null,
};

export type CreateDeckMutation = {
  createDeck?:  {
    __typename: "Deck",
    id: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    DeckCards?:  {
      __typename: "ModelDeckCardConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type UpdateDeckMutationVariables = {
  input: UpdateDeckInput,
  condition?: ModelDeckConditionInput | null,
};

export type UpdateDeckMutation = {
  updateDeck?:  {
    __typename: "Deck",
    id: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    DeckCards?:  {
      __typename: "ModelDeckCardConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type DeleteDeckMutationVariables = {
  input: DeleteDeckInput,
  condition?: ModelDeckConditionInput | null,
};

export type DeleteDeckMutation = {
  deleteDeck?:  {
    __typename: "Deck",
    id: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    DeckCards?:  {
      __typename: "ModelDeckCardConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type CreateCardMutationVariables = {
  input: CreateCardInput,
  condition?: ModelCardConditionInput | null,
};

export type CreateCardMutation = {
  createCard?:  {
    __typename: "Card",
    id: string,
    rank?: number | null,
    suit?: CardSuit | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    decks?:  {
      __typename: "ModelDeckCardConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type UpdateCardMutationVariables = {
  input: UpdateCardInput,
  condition?: ModelCardConditionInput | null,
};

export type UpdateCardMutation = {
  updateCard?:  {
    __typename: "Card",
    id: string,
    rank?: number | null,
    suit?: CardSuit | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    decks?:  {
      __typename: "ModelDeckCardConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type DeleteCardMutationVariables = {
  input: DeleteCardInput,
  condition?: ModelCardConditionInput | null,
};

export type DeleteCardMutation = {
  deleteCard?:  {
    __typename: "Card",
    id: string,
    rank?: number | null,
    suit?: CardSuit | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    decks?:  {
      __typename: "ModelDeckCardConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type CreateGameMutationVariables = {
  input: CreateGameInput,
  condition?: ModelGameConditionInput | null,
};

export type CreateGameMutation = {
  createGame?:  {
    __typename: "Game",
    id: string,
    name?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    Teams?:  {
      __typename: "ModelTeamConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Rounds?:  {
      __typename: "ModelRoundConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type UpdateGameMutationVariables = {
  input: UpdateGameInput,
  condition?: ModelGameConditionInput | null,
};

export type UpdateGameMutation = {
  updateGame?:  {
    __typename: "Game",
    id: string,
    name?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    Teams?:  {
      __typename: "ModelTeamConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Rounds?:  {
      __typename: "ModelRoundConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type DeleteGameMutationVariables = {
  input: DeleteGameInput,
  condition?: ModelGameConditionInput | null,
};

export type DeleteGameMutation = {
  deleteGame?:  {
    __typename: "Game",
    id: string,
    name?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    Teams?:  {
      __typename: "ModelTeamConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Rounds?:  {
      __typename: "ModelRoundConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type CreateTeamPlayerMutationVariables = {
  input: CreateTeamPlayerInput,
  condition?: ModelTeamPlayerConditionInput | null,
};

export type CreateTeamPlayerMutation = {
  createTeamPlayer?:  {
    __typename: "TeamPlayer",
    id: string,
    teamID: string,
    playerID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    team:  {
      __typename: "Team",
      id: string,
      color?: string | null,
      name?: string | null,
      gameID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    player:  {
      __typename: "Player",
      id: string,
      name?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
  } | null,
};

export type UpdateTeamPlayerMutationVariables = {
  input: UpdateTeamPlayerInput,
  condition?: ModelTeamPlayerConditionInput | null,
};

export type UpdateTeamPlayerMutation = {
  updateTeamPlayer?:  {
    __typename: "TeamPlayer",
    id: string,
    teamID: string,
    playerID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    team:  {
      __typename: "Team",
      id: string,
      color?: string | null,
      name?: string | null,
      gameID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    player:  {
      __typename: "Player",
      id: string,
      name?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
  } | null,
};

export type DeleteTeamPlayerMutationVariables = {
  input: DeleteTeamPlayerInput,
  condition?: ModelTeamPlayerConditionInput | null,
};

export type DeleteTeamPlayerMutation = {
  deleteTeamPlayer?:  {
    __typename: "TeamPlayer",
    id: string,
    teamID: string,
    playerID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    team:  {
      __typename: "Team",
      id: string,
      color?: string | null,
      name?: string | null,
      gameID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    player:  {
      __typename: "Player",
      id: string,
      name?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
  } | null,
};

export type CreateDeckCardMutationVariables = {
  input: CreateDeckCardInput,
  condition?: ModelDeckCardConditionInput | null,
};

export type CreateDeckCardMutation = {
  createDeckCard?:  {
    __typename: "DeckCard",
    id: string,
    deckID: string,
    cardID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    deck:  {
      __typename: "Deck",
      id: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    card:  {
      __typename: "Card",
      id: string,
      rank?: number | null,
      suit?: CardSuit | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
  } | null,
};

export type UpdateDeckCardMutationVariables = {
  input: UpdateDeckCardInput,
  condition?: ModelDeckCardConditionInput | null,
};

export type UpdateDeckCardMutation = {
  updateDeckCard?:  {
    __typename: "DeckCard",
    id: string,
    deckID: string,
    cardID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    deck:  {
      __typename: "Deck",
      id: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    card:  {
      __typename: "Card",
      id: string,
      rank?: number | null,
      suit?: CardSuit | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
  } | null,
};

export type DeleteDeckCardMutationVariables = {
  input: DeleteDeckCardInput,
  condition?: ModelDeckCardConditionInput | null,
};

export type DeleteDeckCardMutation = {
  deleteDeckCard?:  {
    __typename: "DeckCard",
    id: string,
    deckID: string,
    cardID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    deck:  {
      __typename: "Deck",
      id: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    card:  {
      __typename: "Card",
      id: string,
      rank?: number | null,
      suit?: CardSuit | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
  } | null,
};

export type EchoQueryVariables = {
  msg?: string | null,
};

export type EchoQuery = {
  echo?: string | null,
};

export type GetTeamQueryVariables = {
  id: string,
};

export type GetTeamQuery = {
  getTeam?:  {
    __typename: "Team",
    id: string,
    color?: string | null,
    name?: string | null,
    gameID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    TeamPlayers?:  {
      __typename: "ModelTeamPlayerConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type ListTeamsQueryVariables = {
  filter?: ModelTeamFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTeamsQuery = {
  listTeams?:  {
    __typename: "ModelTeamConnection",
    items?:  Array< {
      __typename: "Team",
      id: string,
      color?: string | null,
      name?: string | null,
      gameID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncTeamsQueryVariables = {
  filter?: ModelTeamFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncTeamsQuery = {
  syncTeams?:  {
    __typename: "ModelTeamConnection",
    items?:  Array< {
      __typename: "Team",
      id: string,
      color?: string | null,
      name?: string | null,
      gameID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetPlayerQueryVariables = {
  id: string,
};

export type GetPlayerQuery = {
  getPlayer?:  {
    __typename: "Player",
    id: string,
    name?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    teams?:  {
      __typename: "ModelTeamPlayerConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type ListPlayersQueryVariables = {
  filter?: ModelPlayerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPlayersQuery = {
  listPlayers?:  {
    __typename: "ModelPlayerConnection",
    items?:  Array< {
      __typename: "Player",
      id: string,
      name?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncPlayersQueryVariables = {
  filter?: ModelPlayerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncPlayersQuery = {
  syncPlayers?:  {
    __typename: "ModelPlayerConnection",
    items?:  Array< {
      __typename: "Player",
      id: string,
      name?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetRoundQueryVariables = {
  id: string,
};

export type GetRoundQuery = {
  getRound?:  {
    __typename: "Round",
    id: string,
    gameID?: string | null,
    result?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    Deck?:  {
      __typename: "Deck",
      id: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type ListRoundsQueryVariables = {
  filter?: ModelRoundFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRoundsQuery = {
  listRounds?:  {
    __typename: "ModelRoundConnection",
    items?:  Array< {
      __typename: "Round",
      id: string,
      gameID?: string | null,
      result?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncRoundsQueryVariables = {
  filter?: ModelRoundFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncRoundsQuery = {
  syncRounds?:  {
    __typename: "ModelRoundConnection",
    items?:  Array< {
      __typename: "Round",
      id: string,
      gameID?: string | null,
      result?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetDeckQueryVariables = {
  id: string,
};

export type GetDeckQuery = {
  getDeck?:  {
    __typename: "Deck",
    id: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    DeckCards?:  {
      __typename: "ModelDeckCardConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type ListDecksQueryVariables = {
  filter?: ModelDeckFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListDecksQuery = {
  listDecks?:  {
    __typename: "ModelDeckConnection",
    items?:  Array< {
      __typename: "Deck",
      id: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncDecksQueryVariables = {
  filter?: ModelDeckFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncDecksQuery = {
  syncDecks?:  {
    __typename: "ModelDeckConnection",
    items?:  Array< {
      __typename: "Deck",
      id: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetCardQueryVariables = {
  id: string,
};

export type GetCardQuery = {
  getCard?:  {
    __typename: "Card",
    id: string,
    rank?: number | null,
    suit?: CardSuit | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    decks?:  {
      __typename: "ModelDeckCardConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type ListCardsQueryVariables = {
  filter?: ModelCardFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCardsQuery = {
  listCards?:  {
    __typename: "ModelCardConnection",
    items?:  Array< {
      __typename: "Card",
      id: string,
      rank?: number | null,
      suit?: CardSuit | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncCardsQueryVariables = {
  filter?: ModelCardFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncCardsQuery = {
  syncCards?:  {
    __typename: "ModelCardConnection",
    items?:  Array< {
      __typename: "Card",
      id: string,
      rank?: number | null,
      suit?: CardSuit | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetGameQueryVariables = {
  id: string,
};

export type GetGameQuery = {
  getGame?:  {
    __typename: "Game",
    id: string,
    name?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    Teams?:  {
      __typename: "ModelTeamConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Rounds?:  {
      __typename: "ModelRoundConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type ListGamesQueryVariables = {
  filter?: ModelGameFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGamesQuery = {
  listGames?:  {
    __typename: "ModelGameConnection",
    items?:  Array< {
      __typename: "Game",
      id: string,
      name?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncGamesQueryVariables = {
  filter?: ModelGameFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncGamesQuery = {
  syncGames?:  {
    __typename: "ModelGameConnection",
    items?:  Array< {
      __typename: "Game",
      id: string,
      name?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncTeamPlayersQueryVariables = {
  filter?: ModelTeamPlayerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncTeamPlayersQuery = {
  syncTeamPlayers?:  {
    __typename: "ModelTeamPlayerConnection",
    items?:  Array< {
      __typename: "TeamPlayer",
      id: string,
      teamID: string,
      playerID: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncDeckCardsQueryVariables = {
  filter?: ModelDeckCardFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncDeckCardsQuery = {
  syncDeckCards?:  {
    __typename: "ModelDeckCardConnection",
    items?:  Array< {
      __typename: "DeckCard",
      id: string,
      deckID: string,
      cardID: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateTeamSubscription = {
  onCreateTeam?:  {
    __typename: "Team",
    id: string,
    color?: string | null,
    name?: string | null,
    gameID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    TeamPlayers?:  {
      __typename: "ModelTeamPlayerConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type OnUpdateTeamSubscription = {
  onUpdateTeam?:  {
    __typename: "Team",
    id: string,
    color?: string | null,
    name?: string | null,
    gameID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    TeamPlayers?:  {
      __typename: "ModelTeamPlayerConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type OnDeleteTeamSubscription = {
  onDeleteTeam?:  {
    __typename: "Team",
    id: string,
    color?: string | null,
    name?: string | null,
    gameID?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    TeamPlayers?:  {
      __typename: "ModelTeamPlayerConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type OnCreatePlayerSubscription = {
  onCreatePlayer?:  {
    __typename: "Player",
    id: string,
    name?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    teams?:  {
      __typename: "ModelTeamPlayerConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type OnUpdatePlayerSubscription = {
  onUpdatePlayer?:  {
    __typename: "Player",
    id: string,
    name?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    teams?:  {
      __typename: "ModelTeamPlayerConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type OnDeletePlayerSubscription = {
  onDeletePlayer?:  {
    __typename: "Player",
    id: string,
    name?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    teams?:  {
      __typename: "ModelTeamPlayerConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type OnCreateRoundSubscription = {
  onCreateRound?:  {
    __typename: "Round",
    id: string,
    gameID?: string | null,
    result?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    Deck?:  {
      __typename: "Deck",
      id: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type OnUpdateRoundSubscription = {
  onUpdateRound?:  {
    __typename: "Round",
    id: string,
    gameID?: string | null,
    result?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    Deck?:  {
      __typename: "Deck",
      id: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type OnDeleteRoundSubscription = {
  onDeleteRound?:  {
    __typename: "Round",
    id: string,
    gameID?: string | null,
    result?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    Deck?:  {
      __typename: "Deck",
      id: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type OnCreateDeckSubscription = {
  onCreateDeck?:  {
    __typename: "Deck",
    id: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    DeckCards?:  {
      __typename: "ModelDeckCardConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type OnUpdateDeckSubscription = {
  onUpdateDeck?:  {
    __typename: "Deck",
    id: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    DeckCards?:  {
      __typename: "ModelDeckCardConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type OnDeleteDeckSubscription = {
  onDeleteDeck?:  {
    __typename: "Deck",
    id: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    DeckCards?:  {
      __typename: "ModelDeckCardConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type OnCreateCardSubscription = {
  onCreateCard?:  {
    __typename: "Card",
    id: string,
    rank?: number | null,
    suit?: CardSuit | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    decks?:  {
      __typename: "ModelDeckCardConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type OnUpdateCardSubscription = {
  onUpdateCard?:  {
    __typename: "Card",
    id: string,
    rank?: number | null,
    suit?: CardSuit | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    decks?:  {
      __typename: "ModelDeckCardConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type OnDeleteCardSubscription = {
  onDeleteCard?:  {
    __typename: "Card",
    id: string,
    rank?: number | null,
    suit?: CardSuit | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    decks?:  {
      __typename: "ModelDeckCardConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type OnCreateGameSubscription = {
  onCreateGame?:  {
    __typename: "Game",
    id: string,
    name?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    Teams?:  {
      __typename: "ModelTeamConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Rounds?:  {
      __typename: "ModelRoundConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type OnUpdateGameSubscription = {
  onUpdateGame?:  {
    __typename: "Game",
    id: string,
    name?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    Teams?:  {
      __typename: "ModelTeamConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Rounds?:  {
      __typename: "ModelRoundConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type OnDeleteGameSubscription = {
  onDeleteGame?:  {
    __typename: "Game",
    id: string,
    name?: string | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    Teams?:  {
      __typename: "ModelTeamConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Rounds?:  {
      __typename: "ModelRoundConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type OnCreateTeamPlayerSubscription = {
  onCreateTeamPlayer?:  {
    __typename: "TeamPlayer",
    id: string,
    teamID: string,
    playerID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    team:  {
      __typename: "Team",
      id: string,
      color?: string | null,
      name?: string | null,
      gameID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    player:  {
      __typename: "Player",
      id: string,
      name?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
  } | null,
};

export type OnUpdateTeamPlayerSubscription = {
  onUpdateTeamPlayer?:  {
    __typename: "TeamPlayer",
    id: string,
    teamID: string,
    playerID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    team:  {
      __typename: "Team",
      id: string,
      color?: string | null,
      name?: string | null,
      gameID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    player:  {
      __typename: "Player",
      id: string,
      name?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
  } | null,
};

export type OnDeleteTeamPlayerSubscription = {
  onDeleteTeamPlayer?:  {
    __typename: "TeamPlayer",
    id: string,
    teamID: string,
    playerID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    team:  {
      __typename: "Team",
      id: string,
      color?: string | null,
      name?: string | null,
      gameID?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    player:  {
      __typename: "Player",
      id: string,
      name?: string | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
  } | null,
};

export type OnCreateDeckCardSubscription = {
  onCreateDeckCard?:  {
    __typename: "DeckCard",
    id: string,
    deckID: string,
    cardID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    deck:  {
      __typename: "Deck",
      id: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    card:  {
      __typename: "Card",
      id: string,
      rank?: number | null,
      suit?: CardSuit | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
  } | null,
};

export type OnUpdateDeckCardSubscription = {
  onUpdateDeckCard?:  {
    __typename: "DeckCard",
    id: string,
    deckID: string,
    cardID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    deck:  {
      __typename: "Deck",
      id: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    card:  {
      __typename: "Card",
      id: string,
      rank?: number | null,
      suit?: CardSuit | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
  } | null,
};

export type OnDeleteDeckCardSubscription = {
  onDeleteDeckCard?:  {
    __typename: "DeckCard",
    id: string,
    deckID: string,
    cardID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    deck:  {
      __typename: "Deck",
      id: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
    card:  {
      __typename: "Card",
      id: string,
      rank?: number | null,
      suit?: CardSuit | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    },
  } | null,
};
