/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTeam = /* GraphQL */ `
  subscription OnCreateTeam {
    onCreateTeam {
      id
      color
      name
      gameID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      TeamPlayers {
        items {
          id
          teamID
          playerID
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
      color
      name
      gameID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      TeamPlayers {
        items {
          id
          teamID
          playerID
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
      color
      name
      gameID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      TeamPlayers {
        items {
          id
          teamID
          playerID
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
          teamID
          playerID
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
          teamID
          playerID
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
          teamID
          playerID
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
export const onCreateRound = /* GraphQL */ `
  subscription OnCreateRound {
    onCreateRound {
      id
      gameID
      result
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Deck {
        id
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        DeckCards {
          nextToken
          startedAt
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
      result
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Deck {
        id
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        DeckCards {
          nextToken
          startedAt
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
      result
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Deck {
        id
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        DeckCards {
          nextToken
          startedAt
        }
      }
    }
  }
`;
export const onCreateDeck = /* GraphQL */ `
  subscription OnCreateDeck {
    onCreateDeck {
      id
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      DeckCards {
        items {
          id
          deckID
          cardID
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
export const onUpdateDeck = /* GraphQL */ `
  subscription OnUpdateDeck {
    onUpdateDeck {
      id
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      DeckCards {
        items {
          id
          deckID
          cardID
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
export const onDeleteDeck = /* GraphQL */ `
  subscription OnDeleteDeck {
    onDeleteDeck {
      id
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      DeckCards {
        items {
          id
          deckID
          cardID
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
export const onCreateCard = /* GraphQL */ `
  subscription OnCreateCard {
    onCreateCard {
      id
      rank
      suit
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      decks {
        items {
          id
          deckID
          cardID
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
export const onUpdateCard = /* GraphQL */ `
  subscription OnUpdateCard {
    onUpdateCard {
      id
      rank
      suit
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      decks {
        items {
          id
          deckID
          cardID
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
export const onDeleteCard = /* GraphQL */ `
  subscription OnDeleteCard {
    onDeleteCard {
      id
      rank
      suit
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      decks {
        items {
          id
          deckID
          cardID
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
      Teams {
        items {
          id
          color
          name
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
      Rounds {
        items {
          id
          gameID
          result
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
      Teams {
        items {
          id
          color
          name
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
      Rounds {
        items {
          id
          gameID
          result
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
      Teams {
        items {
          id
          color
          name
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
      Rounds {
        items {
          id
          gameID
          result
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
export const onCreateTeamPlayer = /* GraphQL */ `
  subscription OnCreateTeamPlayer {
    onCreateTeamPlayer {
      id
      teamID
      playerID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      team {
        id
        color
        name
        gameID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        TeamPlayers {
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
export const onUpdateTeamPlayer = /* GraphQL */ `
  subscription OnUpdateTeamPlayer {
    onUpdateTeamPlayer {
      id
      teamID
      playerID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      team {
        id
        color
        name
        gameID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        TeamPlayers {
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
export const onDeleteTeamPlayer = /* GraphQL */ `
  subscription OnDeleteTeamPlayer {
    onDeleteTeamPlayer {
      id
      teamID
      playerID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      team {
        id
        color
        name
        gameID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        TeamPlayers {
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
export const onCreateDeckCard = /* GraphQL */ `
  subscription OnCreateDeckCard {
    onCreateDeckCard {
      id
      deckID
      cardID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      deck {
        id
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        DeckCards {
          nextToken
          startedAt
        }
      }
      card {
        id
        rank
        suit
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        decks {
          nextToken
          startedAt
        }
      }
    }
  }
`;
export const onUpdateDeckCard = /* GraphQL */ `
  subscription OnUpdateDeckCard {
    onUpdateDeckCard {
      id
      deckID
      cardID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      deck {
        id
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        DeckCards {
          nextToken
          startedAt
        }
      }
      card {
        id
        rank
        suit
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        decks {
          nextToken
          startedAt
        }
      }
    }
  }
`;
export const onDeleteDeckCard = /* GraphQL */ `
  subscription OnDeleteDeckCard {
    onDeleteDeckCard {
      id
      deckID
      cardID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      deck {
        id
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        DeckCards {
          nextToken
          startedAt
        }
      }
      card {
        id
        rank
        suit
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        decks {
          nextToken
          startedAt
        }
      }
    }
  }
`;
