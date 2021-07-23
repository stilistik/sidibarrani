/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createNewGame = /* GraphQL */ `
  mutation CreateNewGame($input: CreateNewGameInput) {
    createNewGame(input: $input) {
      id
      private
      activeRoundID
      status
      name
      createdAt
      updatedAt
      Teams {
        items {
          id
          gameID
          name
          color
          createdAt
          updatedAt
        }
        nextToken
      }
      ActiveRound {
        id
        gameID
        status
        createdAt
        updatedAt
        hands {
          nextToken
        }
      }
      Rounds {
        items {
          id
          gameID
          status
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const joinTeam = /* GraphQL */ `
  mutation JoinTeam($input: JoinTeamInput!) {
    joinTeam(input: $input) {
      id
      teamID
      userID
      createdAt
      updatedAt
      team {
        id
        gameID
        name
        color
        createdAt
        updatedAt
        TeamUsers {
          nextToken
        }
      }
      user {
        id
        email
        username
        lastOnline
        createdAt
        updatedAt
        teams {
          nextToken
        }
      }
    }
  }
`;
export const leaveGame = /* GraphQL */ `
  mutation LeaveGame($input: LeaveGameInput!) {
    leaveGame(input: $input)
  }
`;
export const startGame = /* GraphQL */ `
  mutation StartGame($id: String!) {
    startGame(id: $id) {
      id
      private
      activeRoundID
      status
      name
      createdAt
      updatedAt
      Teams {
        items {
          id
          gameID
          name
          color
          createdAt
          updatedAt
        }
        nextToken
      }
      ActiveRound {
        id
        gameID
        status
        createdAt
        updatedAt
        hands {
          nextToken
        }
      }
      Rounds {
        items {
          id
          gameID
          status
          createdAt
          updatedAt
        }
        nextToken
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
      name
      color
      createdAt
      updatedAt
      TeamUsers {
        items {
          id
          teamID
          userID
          createdAt
          updatedAt
        }
        nextToken
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
      name
      color
      createdAt
      updatedAt
      TeamUsers {
        items {
          id
          teamID
          userID
          createdAt
          updatedAt
        }
        nextToken
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
      name
      color
      createdAt
      updatedAt
      TeamUsers {
        items {
          id
          teamID
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const createHand = /* GraphQL */ `
  mutation CreateHand(
    $input: CreateHandInput!
    $condition: ModelHandConditionInput
  ) {
    createHand(input: $input, condition: $condition) {
      id
      roundID
      userID
      cards
      createdAt
      updatedAt
      round {
        id
        gameID
        status
        createdAt
        updatedAt
        hands {
          nextToken
        }
      }
      user {
        id
        email
        username
        lastOnline
        createdAt
        updatedAt
        teams {
          nextToken
        }
      }
    }
  }
`;
export const updateHand = /* GraphQL */ `
  mutation UpdateHand(
    $input: UpdateHandInput!
    $condition: ModelHandConditionInput
  ) {
    updateHand(input: $input, condition: $condition) {
      id
      roundID
      userID
      cards
      createdAt
      updatedAt
      round {
        id
        gameID
        status
        createdAt
        updatedAt
        hands {
          nextToken
        }
      }
      user {
        id
        email
        username
        lastOnline
        createdAt
        updatedAt
        teams {
          nextToken
        }
      }
    }
  }
`;
export const deleteHand = /* GraphQL */ `
  mutation DeleteHand(
    $input: DeleteHandInput!
    $condition: ModelHandConditionInput
  ) {
    deleteHand(input: $input, condition: $condition) {
      id
      roundID
      userID
      cards
      createdAt
      updatedAt
      round {
        id
        gameID
        status
        createdAt
        updatedAt
        hands {
          nextToken
        }
      }
      user {
        id
        email
        username
        lastOnline
        createdAt
        updatedAt
        teams {
          nextToken
        }
      }
    }
  }
`;
export const createRound = /* GraphQL */ `
  mutation CreateRound(
    $input: CreateRoundInput!
    $condition: ModelRoundConditionInput
  ) {
    createRound(input: $input, condition: $condition) {
      id
      gameID
      status
      createdAt
      updatedAt
      hands {
        items {
          id
          roundID
          userID
          cards
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const updateRound = /* GraphQL */ `
  mutation UpdateRound(
    $input: UpdateRoundInput!
    $condition: ModelRoundConditionInput
  ) {
    updateRound(input: $input, condition: $condition) {
      id
      gameID
      status
      createdAt
      updatedAt
      hands {
        items {
          id
          roundID
          userID
          cards
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const deleteRound = /* GraphQL */ `
  mutation DeleteRound(
    $input: DeleteRoundInput!
    $condition: ModelRoundConditionInput
  ) {
    deleteRound(input: $input, condition: $condition) {
      id
      gameID
      status
      createdAt
      updatedAt
      hands {
        items {
          id
          roundID
          userID
          cards
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const createGame = /* GraphQL */ `
  mutation CreateGame(
    $input: CreateGameInput!
    $condition: ModelGameConditionInput
  ) {
    createGame(input: $input, condition: $condition) {
      id
      private
      activeRoundID
      status
      name
      createdAt
      updatedAt
      Teams {
        items {
          id
          gameID
          name
          color
          createdAt
          updatedAt
        }
        nextToken
      }
      ActiveRound {
        id
        gameID
        status
        createdAt
        updatedAt
        hands {
          nextToken
        }
      }
      Rounds {
        items {
          id
          gameID
          status
          createdAt
          updatedAt
        }
        nextToken
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
      private
      activeRoundID
      status
      name
      createdAt
      updatedAt
      Teams {
        items {
          id
          gameID
          name
          color
          createdAt
          updatedAt
        }
        nextToken
      }
      ActiveRound {
        id
        gameID
        status
        createdAt
        updatedAt
        hands {
          nextToken
        }
      }
      Rounds {
        items {
          id
          gameID
          status
          createdAt
          updatedAt
        }
        nextToken
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
      private
      activeRoundID
      status
      name
      createdAt
      updatedAt
      Teams {
        items {
          id
          gameID
          name
          color
          createdAt
          updatedAt
        }
        nextToken
      }
      ActiveRound {
        id
        gameID
        status
        createdAt
        updatedAt
        hands {
          nextToken
        }
      }
      Rounds {
        items {
          id
          gameID
          status
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      email
      username
      lastOnline
      createdAt
      updatedAt
      teams {
        items {
          id
          teamID
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      email
      username
      lastOnline
      createdAt
      updatedAt
      teams {
        items {
          id
          teamID
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      email
      username
      lastOnline
      createdAt
      updatedAt
      teams {
        items {
          id
          teamID
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const createTeamUser = /* GraphQL */ `
  mutation CreateTeamUser(
    $input: CreateTeamUserInput!
    $condition: ModelTeamUserConditionInput
  ) {
    createTeamUser(input: $input, condition: $condition) {
      id
      teamID
      userID
      createdAt
      updatedAt
      team {
        id
        gameID
        name
        color
        createdAt
        updatedAt
        TeamUsers {
          nextToken
        }
      }
      user {
        id
        email
        username
        lastOnline
        createdAt
        updatedAt
        teams {
          nextToken
        }
      }
    }
  }
`;
export const updateTeamUser = /* GraphQL */ `
  mutation UpdateTeamUser(
    $input: UpdateTeamUserInput!
    $condition: ModelTeamUserConditionInput
  ) {
    updateTeamUser(input: $input, condition: $condition) {
      id
      teamID
      userID
      createdAt
      updatedAt
      team {
        id
        gameID
        name
        color
        createdAt
        updatedAt
        TeamUsers {
          nextToken
        }
      }
      user {
        id
        email
        username
        lastOnline
        createdAt
        updatedAt
        teams {
          nextToken
        }
      }
    }
  }
`;
export const deleteTeamUser = /* GraphQL */ `
  mutation DeleteTeamUser(
    $input: DeleteTeamUserInput!
    $condition: ModelTeamUserConditionInput
  ) {
    deleteTeamUser(input: $input, condition: $condition) {
      id
      teamID
      userID
      createdAt
      updatedAt
      team {
        id
        gameID
        name
        color
        createdAt
        updatedAt
        TeamUsers {
          nextToken
        }
      }
      user {
        id
        email
        username
        lastOnline
        createdAt
        updatedAt
        teams {
          nextToken
        }
      }
    }
  }
`;
