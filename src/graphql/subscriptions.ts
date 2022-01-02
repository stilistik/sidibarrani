/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onUpdateGameState = /* GraphQL */ `
  subscription OnUpdateGameState($id: ID!) {
    onUpdateGameState(id: $id) {
      id
      index
      mode
      private
      winCondition
      activeRoundID
      status
      result
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
export const onCreateSequenceNumber = /* GraphQL */ `
  subscription OnCreateSequenceNumber {
    onCreateSequenceNumber {
      id
      indexNumber
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateSequenceNumber = /* GraphQL */ `
  subscription OnUpdateSequenceNumber {
    onUpdateSequenceNumber {
      id
      indexNumber
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteSequenceNumber = /* GraphQL */ `
  subscription OnDeleteSequenceNumber {
    onDeleteSequenceNumber {
      id
      indexNumber
      createdAt
      updatedAt
    }
  }
`;
export const onCreateTeam = /* GraphQL */ `
  subscription OnCreateTeam {
    onCreateTeam {
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
export const onUpdateTeam = /* GraphQL */ `
  subscription OnUpdateTeam {
    onUpdateTeam {
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
export const onDeleteTeam = /* GraphQL */ `
  subscription OnDeleteTeam {
    onDeleteTeam {
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
export const onCreateHand = /* GraphQL */ `
  subscription OnCreateHand {
    onCreateHand {
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
export const onUpdateHand = /* GraphQL */ `
  subscription OnUpdateHand {
    onUpdateHand {
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
export const onDeleteHand = /* GraphQL */ `
  subscription OnDeleteHand {
    onDeleteHand {
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
export const onCreateAction = /* GraphQL */ `
  subscription OnCreateAction {
    onCreateAction {
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
export const onUpdateAction = /* GraphQL */ `
  subscription OnUpdateAction {
    onUpdateAction {
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
export const onDeleteAction = /* GraphQL */ `
  subscription OnDeleteAction {
    onDeleteAction {
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
export const onCreateStack = /* GraphQL */ `
  subscription OnCreateStack {
    onCreateStack {
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
export const onUpdateStack = /* GraphQL */ `
  subscription OnUpdateStack {
    onUpdateStack {
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
export const onDeleteStack = /* GraphQL */ `
  subscription OnDeleteStack {
    onDeleteStack {
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
export const onCreateRound = /* GraphQL */ `
  subscription OnCreateRound {
    onCreateRound {
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
export const onUpdateRound = /* GraphQL */ `
  subscription OnUpdateRound {
    onUpdateRound {
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
export const onDeleteRound = /* GraphQL */ `
  subscription OnDeleteRound {
    onDeleteRound {
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
export const onCreateGame = /* GraphQL */ `
  subscription OnCreateGame {
    onCreateGame {
      id
      index
      mode
      private
      winCondition
      activeRoundID
      status
      result
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
export const onUpdateGame = /* GraphQL */ `
  subscription OnUpdateGame {
    onUpdateGame {
      id
      index
      mode
      private
      winCondition
      activeRoundID
      status
      result
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
export const onDeleteGame = /* GraphQL */ `
  subscription OnDeleteGame {
    onDeleteGame {
      id
      index
      mode
      private
      winCondition
      activeRoundID
      status
      result
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateTeamUser = /* GraphQL */ `
  subscription OnCreateTeamUser {
    onCreateTeamUser {
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
export const onUpdateTeamUser = /* GraphQL */ `
  subscription OnUpdateTeamUser {
    onUpdateTeamUser {
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
export const onDeleteTeamUser = /* GraphQL */ `
  subscription OnDeleteTeamUser {
    onDeleteTeamUser {
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
