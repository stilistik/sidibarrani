/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSequenceNumber = /* GraphQL */ `
  query GetSequenceNumber($id: ID!) {
    getSequenceNumber(id: $id) {
      id
      indexNumber
      createdAt
      updatedAt
    }
  }
`;
export const listSequenceNumbers = /* GraphQL */ `
  query ListSequenceNumbers(
    $filter: ModelSequenceNumberFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSequenceNumbers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        indexNumber
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTeam = /* GraphQL */ `
  query GetTeam($id: ID!) {
    getTeam(id: $id) {
      id
      name
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
export const listTeams = /* GraphQL */ `
  query ListTeams(
    $filter: ModelTeamFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTeams(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
        TeamUsers {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getHand = /* GraphQL */ `
  query GetHand($id: ID!) {
    getHand(id: $id) {
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
export const listHands = /* GraphQL */ `
  query ListHands(
    $filter: ModelHandFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listHands(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getAction = /* GraphQL */ `
  query GetAction($id: ID!) {
    getAction(id: $id) {
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
export const listActions = /* GraphQL */ `
  query ListActions(
    $filter: ModelActionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listActions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
        }
      }
      nextToken
    }
  }
`;
export const getStack = /* GraphQL */ `
  query GetStack($id: ID!) {
    getStack(id: $id) {
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
          name
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
export const listStacks = /* GraphQL */ `
  query ListStacks(
    $filter: ModelStackFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStacks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getRound = /* GraphQL */ `
  query GetRound($id: ID!) {
    getRound(id: $id) {
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
export const listRounds = /* GraphQL */ `
  query ListRounds(
    $filter: ModelRoundFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRounds(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
      nextToken
    }
  }
`;
export const getGame = /* GraphQL */ `
  query GetGame($id: ID!) {
    getGame(id: $id) {
      id
      index
      mode
      private
      winCondition
      activeRoundID
      status
      teamAID
      teamBID
      teamAColor
      teamBColor
      result
      createdAt
      updatedAt
      TeamA {
        id
        name
        createdAt
        updatedAt
        TeamUsers {
          nextToken
        }
      }
      TeamB {
        id
        name
        createdAt
        updatedAt
        TeamUsers {
          nextToken
        }
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
      messages {
        items {
          id
          gameID
          text
          userID
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const listGames = /* GraphQL */ `
  query ListGames(
    $filter: ModelGameFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGames(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        index
        mode
        private
        winCondition
        activeRoundID
        status
        teamAID
        teamBID
        teamAColor
        teamBColor
        result
        createdAt
        updatedAt
        TeamA {
          id
          name
          createdAt
          updatedAt
        }
        TeamB {
          id
          name
          createdAt
          updatedAt
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
        }
        Rounds {
          nextToken
        }
        messages {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getMessage = /* GraphQL */ `
  query GetMessage($id: ID!) {
    getMessage(id: $id) {
      id
      gameID
      text
      userID
      createdAt
      updatedAt
      User {
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
export const listMessages = /* GraphQL */ `
  query ListMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        gameID
        text
        userID
        createdAt
        updatedAt
        User {
          id
          email
          username
          lastOnline
          createdAt
          updatedAt
        }
      }
      nextToken
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
