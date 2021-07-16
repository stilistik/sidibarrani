/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTeam = /* GraphQL */ `
  subscription OnCreateTeam {
    onCreateTeam {
      id
      gameID
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
export const onUpdateTeam = /* GraphQL */ `
  subscription OnUpdateTeam {
    onUpdateTeam {
      id
      gameID
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
export const onDeleteTeam = /* GraphQL */ `
  subscription OnDeleteTeam {
    onDeleteTeam {
      id
      gameID
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
export const onCreateRound = /* GraphQL */ `
  subscription OnCreateRound {
    onCreateRound {
      id
      gameID
      status
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateRound = /* GraphQL */ `
  subscription OnUpdateRound {
    onUpdateRound {
      id
      gameID
      status
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteRound = /* GraphQL */ `
  subscription OnDeleteRound {
    onDeleteRound {
      id
      gameID
      status
      createdAt
      updatedAt
    }
  }
`;
export const onCreateGame = /* GraphQL */ `
  subscription OnCreateGame {
    onCreateGame {
      id
      private
      status
      name
      createdAt
      updatedAt
      Teams {
        items {
          id
          gameID
          name
          createdAt
          updatedAt
        }
        nextToken
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
export const onUpdateGame = /* GraphQL */ `
  subscription OnUpdateGame {
    onUpdateGame {
      id
      private
      status
      name
      createdAt
      updatedAt
      Teams {
        items {
          id
          gameID
          name
          createdAt
          updatedAt
        }
        nextToken
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
export const onDeleteGame = /* GraphQL */ `
  subscription OnDeleteGame {
    onDeleteGame {
      id
      private
      status
      name
      createdAt
      updatedAt
      Teams {
        items {
          id
          gameID
          name
          createdAt
          updatedAt
        }
        nextToken
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
