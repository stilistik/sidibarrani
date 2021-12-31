/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createNewGame = /* GraphQL */ `
  mutation CreateNewGame($input: CreateNewGameInput) {
    createNewGame(input: $input) {
      id
      index
      mode
      private
      activeRoundID
      status
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
        stackCount
        activeStackID
        turnSequence
        turn
        mode
        betPoints
        result
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
          size
          winnerID
          createdAt
          updatedAt
        }
      }
      Rounds {
        items {
          id
          gameID
          status
          stackCount
          activeStackID
          turnSequence
          turn
          mode
          betPoints
          result
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const joinTeam = /* GraphQL */ `
  mutation JoinTeam($teamID: String!) {
    joinTeam(teamID: $teamID) {
      id
      index
      mode
      private
      activeRoundID
      status
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
        stackCount
        activeStackID
        turnSequence
        turn
        mode
        betPoints
        result
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
          size
          winnerID
          createdAt
          updatedAt
        }
      }
      Rounds {
        items {
          id
          gameID
          status
          stackCount
          activeStackID
          turnSequence
          turn
          mode
          betPoints
          result
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const leaveGame = /* GraphQL */ `
  mutation LeaveGame($gameID: String!) {
    leaveGame(gameID: $gameID) {
      id
      index
      mode
      private
      activeRoundID
      status
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
        stackCount
        activeStackID
        turnSequence
        turn
        mode
        betPoints
        result
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
          size
          winnerID
          createdAt
          updatedAt
        }
      }
      Rounds {
        items {
          id
          gameID
          status
          stackCount
          activeStackID
          turnSequence
          turn
          mode
          betPoints
          result
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const startGame = /* GraphQL */ `
  mutation StartGame($gameID: String!) {
    startGame(gameID: $gameID) {
      id
      index
      mode
      private
      activeRoundID
      status
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
        stackCount
        activeStackID
        turnSequence
        turn
        mode
        betPoints
        result
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
          size
          winnerID
          createdAt
          updatedAt
        }
      }
      Rounds {
        items {
          id
          gameID
          status
          stackCount
          activeStackID
          turnSequence
          turn
          mode
          betPoints
          result
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const playCard = /* GraphQL */ `
  mutation PlayCard($roundID: String!, $value: String!) {
    playCard(roundID: $roundID, value: $value) {
      id
      index
      mode
      private
      activeRoundID
      status
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
        stackCount
        activeStackID
        turnSequence
        turn
        mode
        betPoints
        result
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
          size
          winnerID
          createdAt
          updatedAt
        }
      }
      Rounds {
        items {
          id
          gameID
          status
          stackCount
          activeStackID
          turnSequence
          turn
          mode
          betPoints
          result
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const clearStack = /* GraphQL */ `
  mutation ClearStack($roundID: String!) {
    clearStack(roundID: $roundID) {
      id
      index
      mode
      private
      activeRoundID
      status
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
        stackCount
        activeStackID
        turnSequence
        turn
        mode
        betPoints
        result
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
          size
          winnerID
          createdAt
          updatedAt
        }
      }
      Rounds {
        items {
          id
          gameID
          status
          stackCount
          activeStackID
          turnSequence
          turn
          mode
          betPoints
          result
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const newRound = /* GraphQL */ `
  mutation NewRound($gameID: String!) {
    newRound(gameID: $gameID) {
      id
      index
      mode
      private
      activeRoundID
      status
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
        stackCount
        activeStackID
        turnSequence
        turn
        mode
        betPoints
        result
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
          size
          winnerID
          createdAt
          updatedAt
        }
      }
      Rounds {
        items {
          id
          gameID
          status
          stackCount
          activeStackID
          turnSequence
          turn
          mode
          betPoints
          result
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const endRound = /* GraphQL */ `
  mutation EndRound($roundID: String!) {
    endRound(roundID: $roundID) {
      id
      index
      mode
      private
      activeRoundID
      status
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
        stackCount
        activeStackID
        turnSequence
        turn
        mode
        betPoints
        result
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
          size
          winnerID
          createdAt
          updatedAt
        }
      }
      Rounds {
        items {
          id
          gameID
          status
          stackCount
          activeStackID
          turnSequence
          turn
          mode
          betPoints
          result
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const placeBet = /* GraphQL */ `
  mutation PlaceBet($roundID: String!, $value: String!) {
    placeBet(roundID: $roundID, value: $value) {
      id
      index
      mode
      private
      activeRoundID
      status
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
        stackCount
        activeStackID
        turnSequence
        turn
        mode
        betPoints
        result
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
          size
          winnerID
          createdAt
          updatedAt
        }
      }
      Rounds {
        items {
          id
          gameID
          status
          stackCount
          activeStackID
          turnSequence
          turn
          mode
          betPoints
          result
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const skipBet = /* GraphQL */ `
  mutation SkipBet($roundID: String!) {
    skipBet(roundID: $roundID) {
      id
      index
      mode
      private
      activeRoundID
      status
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
        stackCount
        activeStackID
        turnSequence
        turn
        mode
        betPoints
        result
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
          size
          winnerID
          createdAt
          updatedAt
        }
      }
      Rounds {
        items {
          id
          gameID
          status
          stackCount
          activeStackID
          turnSequence
          turn
          mode
          betPoints
          result
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const clearData = /* GraphQL */ `
  mutation ClearData {
    clearData
  }
`;
export const createSequenceNumber = /* GraphQL */ `
  mutation CreateSequenceNumber(
    $input: CreateSequenceNumberInput!
    $condition: ModelSequenceNumberConditionInput
  ) {
    createSequenceNumber(input: $input, condition: $condition) {
      id
      indexNumber
      createdAt
      updatedAt
    }
  }
`;
export const updateSequenceNumber = /* GraphQL */ `
  mutation UpdateSequenceNumber(
    $input: UpdateSequenceNumberInput!
    $condition: ModelSequenceNumberConditionInput
  ) {
    updateSequenceNumber(input: $input, condition: $condition) {
      id
      indexNumber
      createdAt
      updatedAt
    }
  }
`;
export const deleteSequenceNumber = /* GraphQL */ `
  mutation DeleteSequenceNumber(
    $input: DeleteSequenceNumberInput!
    $condition: ModelSequenceNumberConditionInput
  ) {
    deleteSequenceNumber(input: $input, condition: $condition) {
      id
      indexNumber
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
      type
      cards
      createdAt
      updatedAt
      round {
        id
        gameID
        status
        stackCount
        activeStackID
        turnSequence
        turn
        mode
        betPoints
        result
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
          size
          winnerID
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
      type
      cards
      createdAt
      updatedAt
      round {
        id
        gameID
        status
        stackCount
        activeStackID
        turnSequence
        turn
        mode
        betPoints
        result
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
          size
          winnerID
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
      type
      cards
      createdAt
      updatedAt
      round {
        id
        gameID
        status
        stackCount
        activeStackID
        turnSequence
        turn
        mode
        betPoints
        result
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
          size
          winnerID
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
export const createStack = /* GraphQL */ `
  mutation CreateStack(
    $input: CreateStackInput!
    $condition: ModelStackConditionInput
  ) {
    createStack(input: $input, condition: $condition) {
      id
      roundID
      size
      winnerID
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
        stackCount
        activeStackID
        turnSequence
        turn
        mode
        betPoints
        result
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
          size
          winnerID
          createdAt
          updatedAt
        }
      }
      winner {
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
        }
        user {
          id
          email
          username
          lastOnline
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
      size
      winnerID
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
        stackCount
        activeStackID
        turnSequence
        turn
        mode
        betPoints
        result
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
          size
          winnerID
          createdAt
          updatedAt
        }
      }
      winner {
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
        }
        user {
          id
          email
          username
          lastOnline
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
      size
      winnerID
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
        stackCount
        activeStackID
        turnSequence
        turn
        mode
        betPoints
        result
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
          size
          winnerID
          createdAt
          updatedAt
        }
      }
      winner {
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
        }
        user {
          id
          email
          username
          lastOnline
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
      stackCount
      activeStackID
      turnSequence
      turn
      mode
      betPoints
      result
      createdAt
      updatedAt
      hands {
        items {
          id
          roundID
          userID
          type
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
          size
          winnerID
          createdAt
          updatedAt
        }
        nextToken
      }
      activeStack {
        id
        roundID
        size
        winnerID
        createdAt
        updatedAt
        actions {
          nextToken
        }
        round {
          id
          gameID
          status
          stackCount
          activeStackID
          turnSequence
          turn
          mode
          betPoints
          result
          createdAt
          updatedAt
        }
        winner {
          id
          teamID
          userID
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
      stackCount
      activeStackID
      turnSequence
      turn
      mode
      betPoints
      result
      createdAt
      updatedAt
      hands {
        items {
          id
          roundID
          userID
          type
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
          size
          winnerID
          createdAt
          updatedAt
        }
        nextToken
      }
      activeStack {
        id
        roundID
        size
        winnerID
        createdAt
        updatedAt
        actions {
          nextToken
        }
        round {
          id
          gameID
          status
          stackCount
          activeStackID
          turnSequence
          turn
          mode
          betPoints
          result
          createdAt
          updatedAt
        }
        winner {
          id
          teamID
          userID
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
      stackCount
      activeStackID
      turnSequence
      turn
      mode
      betPoints
      result
      createdAt
      updatedAt
      hands {
        items {
          id
          roundID
          userID
          type
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
          size
          winnerID
          createdAt
          updatedAt
        }
        nextToken
      }
      activeStack {
        id
        roundID
        size
        winnerID
        createdAt
        updatedAt
        actions {
          nextToken
        }
        round {
          id
          gameID
          status
          stackCount
          activeStackID
          turnSequence
          turn
          mode
          betPoints
          result
          createdAt
          updatedAt
        }
        winner {
          id
          teamID
          userID
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
      index
      mode
      private
      activeRoundID
      status
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
        stackCount
        activeStackID
        turnSequence
        turn
        mode
        betPoints
        result
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
          size
          winnerID
          createdAt
          updatedAt
        }
      }
      Rounds {
        items {
          id
          gameID
          status
          stackCount
          activeStackID
          turnSequence
          turn
          mode
          betPoints
          result
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
      index
      mode
      private
      activeRoundID
      status
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
        stackCount
        activeStackID
        turnSequence
        turn
        mode
        betPoints
        result
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
          size
          winnerID
          createdAt
          updatedAt
        }
      }
      Rounds {
        items {
          id
          gameID
          status
          stackCount
          activeStackID
          turnSequence
          turn
          mode
          betPoints
          result
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
      index
      mode
      private
      activeRoundID
      status
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
        stackCount
        activeStackID
        turnSequence
        turn
        mode
        betPoints
        result
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
          size
          winnerID
          createdAt
          updatedAt
        }
      }
      Rounds {
        items {
          id
          gameID
          status
          stackCount
          activeStackID
          turnSequence
          turn
          mode
          betPoints
          result
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
