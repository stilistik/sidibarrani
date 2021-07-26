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
        activeStackID
        createdAt
        updatedAt
        hands {
          nextToken
        }
        stacks {
          nextToken
        }
        activeStack {
          id
          roundID
          createdAt
          updatedAt
        }
      }
      Rounds {
        items {
          id
          gameID
          status
          activeStackID
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
        activeStackID
        createdAt
        updatedAt
        hands {
          nextToken
        }
        stacks {
          nextToken
        }
        activeStack {
          id
          roundID
          createdAt
          updatedAt
        }
      }
      Rounds {
        items {
          id
          gameID
          status
          activeStackID
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const playCard = /* GraphQL */ `
  mutation PlayCard($value: String) {
    playCard(value: $value) {
      id
      type
      stackID
      userID
      value
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
        activeStackID
        createdAt
        updatedAt
        hands {
          nextToken
        }
        stacks {
          nextToken
        }
        activeStack {
          id
          roundID
          createdAt
          updatedAt
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
        activeStackID
        createdAt
        updatedAt
        hands {
          nextToken
        }
        stacks {
          nextToken
        }
        activeStack {
          id
          roundID
          createdAt
          updatedAt
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
        activeStackID
        createdAt
        updatedAt
        hands {
          nextToken
        }
        stacks {
          nextToken
        }
        activeStack {
          id
          roundID
          createdAt
          updatedAt
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
export const createAction = /* GraphQL */ `
  mutation CreateAction(
    $input: CreateActionInput!
    $condition: ModelActionConditionInput
  ) {
    createAction(input: $input, condition: $condition) {
      id
      type
      stackID
      userID
      value
      createdAt
      updatedAt
    }
  }
`;
export const updateAction = /* GraphQL */ `
  mutation UpdateAction(
    $input: UpdateActionInput!
    $condition: ModelActionConditionInput
  ) {
    updateAction(input: $input, condition: $condition) {
      id
      type
      stackID
      userID
      value
      createdAt
      updatedAt
    }
  }
`;
export const deleteAction = /* GraphQL */ `
  mutation DeleteAction(
    $input: DeleteActionInput!
    $condition: ModelActionConditionInput
  ) {
    deleteAction(input: $input, condition: $condition) {
      id
      type
      stackID
      userID
      value
      createdAt
      updatedAt
    }
  }
`;
export const createStack = /* GraphQL */ `
  mutation CreateStack(
    $input: CreateStackInput!
    $condition: ModelStackConditionInput
  ) {
    createStack(input: $input, condition: $condition) {
      id
      roundID
      createdAt
      updatedAt
      actions {
        items {
          id
          type
          stackID
          userID
          value
          createdAt
          updatedAt
        }
        nextToken
      }
      round {
        id
        gameID
        status
        activeStackID
        createdAt
        updatedAt
        hands {
          nextToken
        }
        stacks {
          nextToken
        }
        activeStack {
          id
          roundID
          createdAt
          updatedAt
        }
      }
    }
  }
`;
export const updateStack = /* GraphQL */ `
  mutation UpdateStack(
    $input: UpdateStackInput!
    $condition: ModelStackConditionInput
  ) {
    updateStack(input: $input, condition: $condition) {
      id
      roundID
      createdAt
      updatedAt
      actions {
        items {
          id
          type
          stackID
          userID
          value
          createdAt
          updatedAt
        }
        nextToken
      }
      round {
        id
        gameID
        status
        activeStackID
        createdAt
        updatedAt
        hands {
          nextToken
        }
        stacks {
          nextToken
        }
        activeStack {
          id
          roundID
          createdAt
          updatedAt
        }
      }
    }
  }
`;
export const deleteStack = /* GraphQL */ `
  mutation DeleteStack(
    $input: DeleteStackInput!
    $condition: ModelStackConditionInput
  ) {
    deleteStack(input: $input, condition: $condition) {
      id
      roundID
      createdAt
      updatedAt
      actions {
        items {
          id
          type
          stackID
          userID
          value
          createdAt
          updatedAt
        }
        nextToken
      }
      round {
        id
        gameID
        status
        activeStackID
        createdAt
        updatedAt
        hands {
          nextToken
        }
        stacks {
          nextToken
        }
        activeStack {
          id
          roundID
          createdAt
          updatedAt
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
      activeStackID
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
      stacks {
        items {
          id
          roundID
          createdAt
          updatedAt
        }
        nextToken
      }
      activeStack {
        id
        roundID
        createdAt
        updatedAt
        actions {
          nextToken
        }
        round {
          id
          gameID
          status
          activeStackID
          createdAt
          updatedAt
        }
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
      activeStackID
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
      stacks {
        items {
          id
          roundID
          createdAt
          updatedAt
        }
        nextToken
      }
      activeStack {
        id
        roundID
        createdAt
        updatedAt
        actions {
          nextToken
        }
        round {
          id
          gameID
          status
          activeStackID
          createdAt
          updatedAt
        }
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
      activeStackID
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
      stacks {
        items {
          id
          roundID
          createdAt
          updatedAt
        }
        nextToken
      }
      activeStack {
        id
        roundID
        createdAt
        updatedAt
        actions {
          nextToken
        }
        round {
          id
          gameID
          status
          activeStackID
          createdAt
          updatedAt
        }
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
        activeStackID
        createdAt
        updatedAt
        hands {
          nextToken
        }
        stacks {
          nextToken
        }
        activeStack {
          id
          roundID
          createdAt
          updatedAt
        }
      }
      Rounds {
        items {
          id
          gameID
          status
          activeStackID
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
        activeStackID
        createdAt
        updatedAt
        hands {
          nextToken
        }
        stacks {
          nextToken
        }
        activeStack {
          id
          roundID
          createdAt
          updatedAt
        }
      }
      Rounds {
        items {
          id
          gameID
          status
          activeStackID
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
        activeStackID
        createdAt
        updatedAt
        hands {
          nextToken
        }
        stacks {
          nextToken
        }
        activeStack {
          id
          roundID
          createdAt
          updatedAt
        }
      }
      Rounds {
        items {
          id
          gameID
          status
          activeStackID
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
