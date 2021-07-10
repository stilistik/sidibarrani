/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateGame = /* GraphQL */ `
  subscription OnCreateGame {
    onCreateGame {
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
export const onUpdateGame = /* GraphQL */ `
  subscription OnUpdateGame {
    onUpdateGame {
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
export const onDeleteGame = /* GraphQL */ `
  subscription OnDeleteGame {
    onDeleteGame {
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
export const onCreateTeam = /* GraphQL */ `
  subscription OnCreateTeam {
    onCreateTeam {
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
export const onUpdateTeam = /* GraphQL */ `
  subscription OnUpdateTeam {
    onUpdateTeam {
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
export const onDeleteTeam = /* GraphQL */ `
  subscription OnDeleteTeam {
    onDeleteTeam {
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
export const onCreatePlayerTeams = /* GraphQL */ `
  subscription OnCreatePlayerTeams {
    onCreatePlayerTeams {
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
export const onUpdatePlayerTeams = /* GraphQL */ `
  subscription OnUpdatePlayerTeams {
    onUpdatePlayerTeams {
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
export const onDeletePlayerTeams = /* GraphQL */ `
  subscription OnDeletePlayerTeams {
    onDeletePlayerTeams {
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
export const onCreatePlayer = /* GraphQL */ `
  subscription OnCreatePlayer {
    onCreatePlayer {
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
export const onUpdatePlayer = /* GraphQL */ `
  subscription OnUpdatePlayer {
    onUpdatePlayer {
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
export const onDeletePlayer = /* GraphQL */ `
  subscription OnDeletePlayer {
    onDeletePlayer {
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
