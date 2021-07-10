/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateGameInput = {
  id?: string | null,
  name: string,
  _version?: number | null,
};

export type ModelGameConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelGameConditionInput | null > | null,
  or?: Array< ModelGameConditionInput | null > | null,
  not?: ModelGameConditionInput | null,
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

export type Game = {
  __typename: "Game",
  id: string,
  name: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  createdAt: string,
  updatedAt: string,
  teams?: ModelTeamConnection | null,
};

export type ModelTeamConnection = {
  __typename: "ModelTeamConnection",
  items?:  Array<Team | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type Team = {
  __typename: "Team",
  id: string,
  gameID: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  createdAt: string,
  updatedAt: string,
  players?: ModelPlayerTeamsConnection | null,
};

export type ModelPlayerTeamsConnection = {
  __typename: "ModelPlayerTeamsConnection",
  items?:  Array<PlayerTeams | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type PlayerTeams = {
  __typename: "PlayerTeams",
  id: string,
  playerID: string,
  teamID: string,
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
  name: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  createdAt: string,
  updatedAt: string,
  teams?: ModelPlayerTeamsConnection | null,
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

export type CreateTeamInput = {
  id?: string | null,
  gameID: string,
  _version?: number | null,
};

export type ModelTeamConditionInput = {
  gameID?: ModelIDInput | null,
  and?: Array< ModelTeamConditionInput | null > | null,
  or?: Array< ModelTeamConditionInput | null > | null,
  not?: ModelTeamConditionInput | null,
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

export type UpdateTeamInput = {
  id: string,
  gameID?: string | null,
  _version?: number | null,
};

export type DeleteTeamInput = {
  id: string,
  _version?: number | null,
};

export type CreatePlayerTeamsInput = {
  id?: string | null,
  playerID: string,
  teamID: string,
  _version?: number | null,
};

export type ModelPlayerTeamsConditionInput = {
  playerID?: ModelIDInput | null,
  teamID?: ModelIDInput | null,
  and?: Array< ModelPlayerTeamsConditionInput | null > | null,
  or?: Array< ModelPlayerTeamsConditionInput | null > | null,
  not?: ModelPlayerTeamsConditionInput | null,
};

export type UpdatePlayerTeamsInput = {
  id: string,
  playerID?: string | null,
  teamID?: string | null,
  _version?: number | null,
};

export type DeletePlayerTeamsInput = {
  id: string,
  _version?: number | null,
};

export type CreatePlayerInput = {
  id?: string | null,
  name: string,
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

export type ModelTeamFilterInput = {
  id?: ModelIDInput | null,
  gameID?: ModelIDInput | null,
  and?: Array< ModelTeamFilterInput | null > | null,
  or?: Array< ModelTeamFilterInput | null > | null,
  not?: ModelTeamFilterInput | null,
};

export type ModelPlayerTeamsFilterInput = {
  id?: ModelIDInput | null,
  playerID?: ModelIDInput | null,
  teamID?: ModelIDInput | null,
  and?: Array< ModelPlayerTeamsFilterInput | null > | null,
  or?: Array< ModelPlayerTeamsFilterInput | null > | null,
  not?: ModelPlayerTeamsFilterInput | null,
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

export type CreateGameMutationVariables = {
  input: CreateGameInput,
  condition?: ModelGameConditionInput | null,
};

export type CreateGameMutation = {
  createGame?:  {
    __typename: "Game",
    id: string,
    name: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    teams?:  {
      __typename: "ModelTeamConnection",
      items?:  Array< {
        __typename: "Team",
        id: string,
        gameID: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
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
    name: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    teams?:  {
      __typename: "ModelTeamConnection",
      items?:  Array< {
        __typename: "Team",
        id: string,
        gameID: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
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
    name: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    teams?:  {
      __typename: "ModelTeamConnection",
      items?:  Array< {
        __typename: "Team",
        id: string,
        gameID: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type CreateTeamMutationVariables = {
  input: CreateTeamInput,
  condition?: ModelTeamConditionInput | null,
};

export type CreateTeamMutation = {
  createTeam?:  {
    __typename: "Team",
    id: string,
    gameID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    players?:  {
      __typename: "ModelPlayerTeamsConnection",
      items?:  Array< {
        __typename: "PlayerTeams",
        id: string,
        playerID: string,
        teamID: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
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
    gameID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    players?:  {
      __typename: "ModelPlayerTeamsConnection",
      items?:  Array< {
        __typename: "PlayerTeams",
        id: string,
        playerID: string,
        teamID: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
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
    gameID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    players?:  {
      __typename: "ModelPlayerTeamsConnection",
      items?:  Array< {
        __typename: "PlayerTeams",
        id: string,
        playerID: string,
        teamID: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type CreatePlayerTeamsMutationVariables = {
  input: CreatePlayerTeamsInput,
  condition?: ModelPlayerTeamsConditionInput | null,
};

export type CreatePlayerTeamsMutation = {
  createPlayerTeams?:  {
    __typename: "PlayerTeams",
    id: string,
    playerID: string,
    teamID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    team:  {
      __typename: "Team",
      id: string,
      gameID: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      players?:  {
        __typename: "ModelPlayerTeamsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    },
    player:  {
      __typename: "Player",
      id: string,
      name: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      teams?:  {
        __typename: "ModelPlayerTeamsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    },
  } | null,
};

export type UpdatePlayerTeamsMutationVariables = {
  input: UpdatePlayerTeamsInput,
  condition?: ModelPlayerTeamsConditionInput | null,
};

export type UpdatePlayerTeamsMutation = {
  updatePlayerTeams?:  {
    __typename: "PlayerTeams",
    id: string,
    playerID: string,
    teamID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    team:  {
      __typename: "Team",
      id: string,
      gameID: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      players?:  {
        __typename: "ModelPlayerTeamsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    },
    player:  {
      __typename: "Player",
      id: string,
      name: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      teams?:  {
        __typename: "ModelPlayerTeamsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    },
  } | null,
};

export type DeletePlayerTeamsMutationVariables = {
  input: DeletePlayerTeamsInput,
  condition?: ModelPlayerTeamsConditionInput | null,
};

export type DeletePlayerTeamsMutation = {
  deletePlayerTeams?:  {
    __typename: "PlayerTeams",
    id: string,
    playerID: string,
    teamID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    team:  {
      __typename: "Team",
      id: string,
      gameID: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      players?:  {
        __typename: "ModelPlayerTeamsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    },
    player:  {
      __typename: "Player",
      id: string,
      name: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      teams?:  {
        __typename: "ModelPlayerTeamsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    },
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
    name: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    teams?:  {
      __typename: "ModelPlayerTeamsConnection",
      items?:  Array< {
        __typename: "PlayerTeams",
        id: string,
        playerID: string,
        teamID: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
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
    name: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    teams?:  {
      __typename: "ModelPlayerTeamsConnection",
      items?:  Array< {
        __typename: "PlayerTeams",
        id: string,
        playerID: string,
        teamID: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
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
    name: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    teams?:  {
      __typename: "ModelPlayerTeamsConnection",
      items?:  Array< {
        __typename: "PlayerTeams",
        id: string,
        playerID: string,
        teamID: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type GetGameQueryVariables = {
  id: string,
};

export type GetGameQuery = {
  getGame?:  {
    __typename: "Game",
    id: string,
    name: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    teams?:  {
      __typename: "ModelTeamConnection",
      items?:  Array< {
        __typename: "Team",
        id: string,
        gameID: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
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
      name: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      teams?:  {
        __typename: "ModelTeamConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
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
      name: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      teams?:  {
        __typename: "ModelTeamConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetTeamQueryVariables = {
  id: string,
};

export type GetTeamQuery = {
  getTeam?:  {
    __typename: "Team",
    id: string,
    gameID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    players?:  {
      __typename: "ModelPlayerTeamsConnection",
      items?:  Array< {
        __typename: "PlayerTeams",
        id: string,
        playerID: string,
        teamID: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
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
      gameID: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      players?:  {
        __typename: "ModelPlayerTeamsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
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
      gameID: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      players?:  {
        __typename: "ModelPlayerTeamsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncPlayerTeamsQueryVariables = {
  filter?: ModelPlayerTeamsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncPlayerTeamsQuery = {
  syncPlayerTeams?:  {
    __typename: "ModelPlayerTeamsConnection",
    items?:  Array< {
      __typename: "PlayerTeams",
      id: string,
      playerID: string,
      teamID: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      team:  {
        __typename: "Team",
        id: string,
        gameID: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      },
      player:  {
        __typename: "Player",
        id: string,
        name: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      },
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
    name: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    teams?:  {
      __typename: "ModelPlayerTeamsConnection",
      items?:  Array< {
        __typename: "PlayerTeams",
        id: string,
        playerID: string,
        teamID: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
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
      name: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      teams?:  {
        __typename: "ModelPlayerTeamsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
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
      name: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      teams?:  {
        __typename: "ModelPlayerTeamsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateGameSubscription = {
  onCreateGame?:  {
    __typename: "Game",
    id: string,
    name: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    teams?:  {
      __typename: "ModelTeamConnection",
      items?:  Array< {
        __typename: "Team",
        id: string,
        gameID: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type OnUpdateGameSubscription = {
  onUpdateGame?:  {
    __typename: "Game",
    id: string,
    name: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    teams?:  {
      __typename: "ModelTeamConnection",
      items?:  Array< {
        __typename: "Team",
        id: string,
        gameID: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type OnDeleteGameSubscription = {
  onDeleteGame?:  {
    __typename: "Game",
    id: string,
    name: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    teams?:  {
      __typename: "ModelTeamConnection",
      items?:  Array< {
        __typename: "Team",
        id: string,
        gameID: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type OnCreateTeamSubscription = {
  onCreateTeam?:  {
    __typename: "Team",
    id: string,
    gameID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    players?:  {
      __typename: "ModelPlayerTeamsConnection",
      items?:  Array< {
        __typename: "PlayerTeams",
        id: string,
        playerID: string,
        teamID: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type OnUpdateTeamSubscription = {
  onUpdateTeam?:  {
    __typename: "Team",
    id: string,
    gameID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    players?:  {
      __typename: "ModelPlayerTeamsConnection",
      items?:  Array< {
        __typename: "PlayerTeams",
        id: string,
        playerID: string,
        teamID: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type OnDeleteTeamSubscription = {
  onDeleteTeam?:  {
    __typename: "Team",
    id: string,
    gameID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    players?:  {
      __typename: "ModelPlayerTeamsConnection",
      items?:  Array< {
        __typename: "PlayerTeams",
        id: string,
        playerID: string,
        teamID: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type OnCreatePlayerTeamsSubscription = {
  onCreatePlayerTeams?:  {
    __typename: "PlayerTeams",
    id: string,
    playerID: string,
    teamID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    team:  {
      __typename: "Team",
      id: string,
      gameID: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      players?:  {
        __typename: "ModelPlayerTeamsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    },
    player:  {
      __typename: "Player",
      id: string,
      name: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      teams?:  {
        __typename: "ModelPlayerTeamsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    },
  } | null,
};

export type OnUpdatePlayerTeamsSubscription = {
  onUpdatePlayerTeams?:  {
    __typename: "PlayerTeams",
    id: string,
    playerID: string,
    teamID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    team:  {
      __typename: "Team",
      id: string,
      gameID: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      players?:  {
        __typename: "ModelPlayerTeamsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    },
    player:  {
      __typename: "Player",
      id: string,
      name: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      teams?:  {
        __typename: "ModelPlayerTeamsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    },
  } | null,
};

export type OnDeletePlayerTeamsSubscription = {
  onDeletePlayerTeams?:  {
    __typename: "PlayerTeams",
    id: string,
    playerID: string,
    teamID: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    team:  {
      __typename: "Team",
      id: string,
      gameID: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      players?:  {
        __typename: "ModelPlayerTeamsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    },
    player:  {
      __typename: "Player",
      id: string,
      name: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      teams?:  {
        __typename: "ModelPlayerTeamsConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
    },
  } | null,
};

export type OnCreatePlayerSubscription = {
  onCreatePlayer?:  {
    __typename: "Player",
    id: string,
    name: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    teams?:  {
      __typename: "ModelPlayerTeamsConnection",
      items?:  Array< {
        __typename: "PlayerTeams",
        id: string,
        playerID: string,
        teamID: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type OnUpdatePlayerSubscription = {
  onUpdatePlayer?:  {
    __typename: "Player",
    id: string,
    name: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    teams?:  {
      __typename: "ModelPlayerTeamsConnection",
      items?:  Array< {
        __typename: "PlayerTeams",
        id: string,
        playerID: string,
        teamID: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};

export type OnDeletePlayerSubscription = {
  onDeletePlayer?:  {
    __typename: "Player",
    id: string,
    name: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    teams?:  {
      __typename: "ModelPlayerTeamsConnection",
      items?:  Array< {
        __typename: "PlayerTeams",
        id: string,
        playerID: string,
        teamID: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
  } | null,
};
