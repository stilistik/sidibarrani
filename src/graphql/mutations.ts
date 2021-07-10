/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createGame = /* GraphQL */ `
  mutation CreateGame(
    $input: CreateGameInput!
    $condition: ModelGameConditionInput
  ) {
    createGame(input: $input, condition: $condition) {
      id
      name
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      teams {
        items {
          id
          gameID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const updateGame = /* GraphQL */ `
  mutation UpdateGame(
    $input: UpdateGameInput!
    $condition: ModelGameConditionInput
  ) {
    updateGame(input: $input, condition: $condition) {
      id
      name
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      teams {
        items {
          id
          gameID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const deleteGame = /* GraphQL */ `
  mutation DeleteGame(
    $input: DeleteGameInput!
    $condition: ModelGameConditionInput
  ) {
    deleteGame(input: $input, condition: $condition) {
      id
      name
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      teams {
        items {
          id
          gameID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const createTeam = /* GraphQL */ `
  mutation CreateTeam(
    $input: CreateTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    createTeam(input: $input, condition: $condition) {
      id
      gameID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      players {
        items {
          id
          playerID
          teamID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const updateTeam = /* GraphQL */ `
  mutation UpdateTeam(
    $input: UpdateTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    updateTeam(input: $input, condition: $condition) {
      id
      gameID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      players {
        items {
          id
          playerID
          teamID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const deleteTeam = /* GraphQL */ `
  mutation DeleteTeam(
    $input: DeleteTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    deleteTeam(input: $input, condition: $condition) {
      id
      gameID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      players {
        items {
          id
          playerID
          teamID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const createPlayerTeams = /* GraphQL */ `
  mutation CreatePlayerTeams(
    $input: CreatePlayerTeamsInput!
    $condition: ModelPlayerTeamsConditionInput
  ) {
    createPlayerTeams(input: $input, condition: $condition) {
      id
      playerID
      teamID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      team {
        id
        gameID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        players {
          nextToken
          startedAt
        }
      }
      player {
        id
        name
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        teams {
          nextToken
          startedAt
        }
      }
    }
  }
`;
export const updatePlayerTeams = /* GraphQL */ `
  mutation UpdatePlayerTeams(
    $input: UpdatePlayerTeamsInput!
    $condition: ModelPlayerTeamsConditionInput
  ) {
    updatePlayerTeams(input: $input, condition: $condition) {
      id
      playerID
      teamID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      team {
        id
        gameID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        players {
          nextToken
          startedAt
        }
      }
      player {
        id
        name
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        teams {
          nextToken
          startedAt
        }
      }
    }
  }
`;
export const deletePlayerTeams = /* GraphQL */ `
  mutation DeletePlayerTeams(
    $input: DeletePlayerTeamsInput!
    $condition: ModelPlayerTeamsConditionInput
  ) {
    deletePlayerTeams(input: $input, condition: $condition) {
      id
      playerID
      teamID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      team {
        id
        gameID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        players {
          nextToken
          startedAt
        }
      }
      player {
        id
        name
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        teams {
          nextToken
          startedAt
        }
      }
    }
  }
`;
export const createPlayer = /* GraphQL */ `
  mutation CreatePlayer(
    $input: CreatePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    createPlayer(input: $input, condition: $condition) {
      id
      name
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      teams {
        items {
          id
          playerID
          teamID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const updatePlayer = /* GraphQL */ `
  mutation UpdatePlayer(
    $input: UpdatePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    updatePlayer(input: $input, condition: $condition) {
      id
      name
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      teams {
        items {
          id
          playerID
          teamID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const deletePlayer = /* GraphQL */ `
  mutation DeletePlayer(
    $input: DeletePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    deletePlayer(input: $input, condition: $condition) {
      id
      name
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      teams {
        items {
          id
          playerID
          teamID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
