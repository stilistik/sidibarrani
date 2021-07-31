/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUserHand = /* GraphQL */ `
  query GetUserHand($roundID: String!) {
    getUserHand(roundID: $roundID) {
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
        turnSequence
        turn
        mode
        betPoints
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
export const getTeam = /* GraphQL */ `
  query GetTeam($id: ID!) {
    getTeam(id: $id) {
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
export const listTeams = /* GraphQL */ `
  query ListTeams(
    $filter: ModelTeamFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTeams(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      cards
      createdAt
      updatedAt
      round {
        id
        gameID
        status
        activeStackID
        turnSequence
        turn
        mode
        betPoints
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
        cards
        createdAt
        updatedAt
        round {
          id
          gameID
          status
          activeStackID
          turnSequence
          turn
          mode
          betPoints
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
        activeStackID
        turnSequence
        turn
        mode
        betPoints
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
          activeStackID
          turnSequence
          turn
          mode
          betPoints
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
      activeStackID
      turnSequence
      turn
      mode
      betPoints
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
          activeStackID
          turnSequence
          turn
          mode
          betPoints
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
        activeStackID
        turnSequence
        turn
        mode
        betPoints
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
        turnSequence
        turn
        mode
        betPoints
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
          activeStackID
          turnSequence
          turn
          mode
          betPoints
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
        private
        activeRoundID
        status
        name
        createdAt
        updatedAt
        Teams {
          nextToken
        }
        ActiveRound {
          id
          gameID
          status
          activeStackID
          turnSequence
          turn
          mode
          betPoints
          createdAt
          updatedAt
        }
        Rounds {
          nextToken
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
