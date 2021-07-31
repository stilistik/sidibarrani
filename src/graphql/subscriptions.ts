/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onUpdateGameState = /* GraphQL */ `
  subscription OnUpdateGameState($id: ID!) {
    onUpdateGameState(id: $id) {
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
  subscription OnCreateHand($userID: String) {
    onCreateHand(userID: $userID) {
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
export const onUpdateHand = /* GraphQL */ `
  subscription OnUpdateHand($userID: String) {
    onUpdateHand(userID: $userID) {
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
export const onDeleteHand = /* GraphQL */ `
  subscription OnDeleteHand($userID: String) {
    onDeleteHand(userID: $userID) {
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
export const onCreateRound = /* GraphQL */ `
  subscription OnCreateRound {
    onCreateRound {
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
export const onUpdateRound = /* GraphQL */ `
  subscription OnUpdateRound {
    onUpdateRound {
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
export const onDeleteRound = /* GraphQL */ `
  subscription OnDeleteRound {
    onDeleteRound {
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
export const onCreateGame = /* GraphQL */ `
  subscription OnCreateGame {
    onCreateGame {
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
export const onUpdateGame = /* GraphQL */ `
  subscription OnUpdateGame {
    onUpdateGame {
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
export const onDeleteGame = /* GraphQL */ `
  subscription OnDeleteGame {
    onDeleteGame {
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
