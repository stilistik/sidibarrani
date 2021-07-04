/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTeam = /* GraphQL */ `
  subscription OnCreateTeam {
    onCreateTeam {
      id
      score
      name
      gameID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Users {
        nextToken
        startedAt
      }
    }
  }
`;
export const onUpdateTeam = /* GraphQL */ `
  subscription OnUpdateTeam {
    onUpdateTeam {
      id
      score
      name
      gameID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Users {
        nextToken
        startedAt
      }
    }
  }
`;
export const onDeleteTeam = /* GraphQL */ `
  subscription OnDeleteTeam {
    onDeleteTeam {
      id
      score
      name
      gameID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Users {
        nextToken
        startedAt
      }
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      username
      email
      teamID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      username
      email
      teamID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      username
      email
      teamID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onCreateGame = /* GraphQL */ `
  subscription OnCreateGame {
    onCreateGame {
      id
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Teams {
        nextToken
        startedAt
      }
    }
  }
`;
export const onUpdateGame = /* GraphQL */ `
  subscription OnUpdateGame {
    onUpdateGame {
      id
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Teams {
        nextToken
        startedAt
      }
    }
  }
`;
export const onDeleteGame = /* GraphQL */ `
  subscription OnDeleteGame {
    onDeleteGame {
      id
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Teams {
        nextToken
        startedAt
      }
    }
  }
`;
