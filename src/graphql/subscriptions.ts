/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateRound = /* GraphQL */ `
  subscription OnCreateRound {
    onCreateRound {
      id
      gameID
      status
      _version
      _deleted
      _lastChangedAt
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
      _version
      _deleted
      _lastChangedAt
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
      private
      status
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Rounds {
        items {
          id
          gameID
          status
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
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
      private
      status
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Rounds {
        items {
          id
          gameID
          status
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
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
      private
      status
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Rounds {
        items {
          id
          gameID
          status
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($id: String) {
    onCreateUser(id: $id) {
      id
      email
      username
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($id: String) {
    onUpdateUser(id: $id) {
      id
      email
      username
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($id: String) {
    onDeleteUser(id: $id) {
      id
      email
      username
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
