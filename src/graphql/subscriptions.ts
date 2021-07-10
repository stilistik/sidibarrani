/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateGame = /* GraphQL */ `
  subscription OnCreateGame {
    onCreateGame {
      id
      name
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      teams {
        items {
          id
          gameID
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
      name
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      teams {
        items {
          id
          gameID
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
      name
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      teams {
        items {
          id
          gameID
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
export const onCreateTeam = /* GraphQL */ `
  subscription OnCreateTeam {
    onCreateTeam {
      id
      gameID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      players {
        items {
          id
          playerID
          teamID
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
export const onUpdateTeam = /* GraphQL */ `
  subscription OnUpdateTeam {
    onUpdateTeam {
      id
      gameID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      players {
        items {
          id
          playerID
          teamID
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
export const onDeleteTeam = /* GraphQL */ `
  subscription OnDeleteTeam {
    onDeleteTeam {
      id
      gameID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      players {
        items {
          id
          playerID
          teamID
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
export const onCreatePlayerTeams = /* GraphQL */ `
  subscription OnCreatePlayerTeams {
    onCreatePlayerTeams {
      id
      playerID
      teamID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      team {
        id
        gameID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        players {
          nextToken
          startedAt
        }
      }
      player {
        id
        name
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        teams {
          nextToken
          startedAt
        }
      }
    }
  }
`;
export const onUpdatePlayerTeams = /* GraphQL */ `
  subscription OnUpdatePlayerTeams {
    onUpdatePlayerTeams {
      id
      playerID
      teamID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      team {
        id
        gameID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        players {
          nextToken
          startedAt
        }
      }
      player {
        id
        name
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        teams {
          nextToken
          startedAt
        }
      }
    }
  }
`;
export const onDeletePlayerTeams = /* GraphQL */ `
  subscription OnDeletePlayerTeams {
    onDeletePlayerTeams {
      id
      playerID
      teamID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      team {
        id
        gameID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        players {
          nextToken
          startedAt
        }
      }
      player {
        id
        name
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        teams {
          nextToken
          startedAt
        }
      }
    }
  }
`;
export const onCreatePlayer = /* GraphQL */ `
  subscription OnCreatePlayer {
    onCreatePlayer {
      id
      name
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      teams {
        items {
          id
          playerID
          teamID
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
export const onUpdatePlayer = /* GraphQL */ `
  subscription OnUpdatePlayer {
    onUpdatePlayer {
      id
      name
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      teams {
        items {
          id
          playerID
          teamID
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
export const onDeletePlayer = /* GraphQL */ `
  subscription OnDeletePlayer {
    onDeletePlayer {
      id
      name
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      teams {
        items {
          id
          playerID
          teamID
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
