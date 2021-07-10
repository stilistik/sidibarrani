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
      teams {
        items {
          id
          gameID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
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
      teams {
        items {
          id
          gameID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
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
      teams {
        items {
          id
          gameID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
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
      players {
        items {
          id
          playerID
          teamID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
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
      players {
        items {
          id
          playerID
          teamID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
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
      players {
        items {
          id
          playerID
          teamID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
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
      player {
        id
        name
        teams {
          nextToken
        }
        createdAt
        updatedAt
      }
      team {
        id
        gameID
        players {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
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
      player {
        id
        name
        teams {
          nextToken
        }
        createdAt
        updatedAt
      }
      team {
        id
        gameID
        players {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
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
      player {
        id
        name
        teams {
          nextToken
        }
        createdAt
        updatedAt
      }
      team {
        id
        gameID
        players {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
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
      teams {
        items {
          id
          playerID
          teamID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
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
      teams {
        items {
          id
          playerID
          teamID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
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
      teams {
        items {
          id
          playerID
          teamID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
