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
      createdAt
      updatedAt
      TeamPlayers {
        items {
          id
          teamID
          playerID
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
      color
      name
      gameID
      createdAt
      updatedAt
      TeamPlayers {
        items {
          id
          teamID
          playerID
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
      color
      name
      gameID
      createdAt
      updatedAt
      TeamPlayers {
        items {
          id
          teamID
          playerID
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const onCreatePlayer = /* GraphQL */ `
  subscription OnCreatePlayer {
    onCreatePlayer {
      id
      name
      createdAt
      updatedAt
      teams {
        items {
          id
          teamID
          playerID
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const onUpdatePlayer = /* GraphQL */ `
  subscription OnUpdatePlayer {
    onUpdatePlayer {
      id
      name
      createdAt
      updatedAt
      teams {
        items {
          id
          teamID
          playerID
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const onDeletePlayer = /* GraphQL */ `
  subscription OnDeletePlayer {
    onDeletePlayer {
      id
      name
      createdAt
      updatedAt
      teams {
        items {
          id
          teamID
          playerID
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
      result
      createdAt
      updatedAt
      Deck {
        id
        createdAt
        updatedAt
        DeckCards {
          nextToken
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
      createdAt
      updatedAt
      Deck {
        id
        createdAt
        updatedAt
        DeckCards {
          nextToken
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
      createdAt
      updatedAt
      Deck {
        id
        createdAt
        updatedAt
        DeckCards {
          nextToken
        }
      }
    }
  }
`;
export const onCreateDeck = /* GraphQL */ `
  subscription OnCreateDeck {
    onCreateDeck {
      id
      createdAt
      updatedAt
      DeckCards {
        items {
          id
          deckID
          cardID
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const onUpdateDeck = /* GraphQL */ `
  subscription OnUpdateDeck {
    onUpdateDeck {
      id
      createdAt
      updatedAt
      DeckCards {
        items {
          id
          deckID
          cardID
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const onDeleteDeck = /* GraphQL */ `
  subscription OnDeleteDeck {
    onDeleteDeck {
      id
      createdAt
      updatedAt
      DeckCards {
        items {
          id
          deckID
          cardID
          createdAt
          updatedAt
        }
        nextToken
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
      createdAt
      updatedAt
      decks {
        items {
          id
          deckID
          cardID
          createdAt
          updatedAt
        }
        nextToken
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
      createdAt
      updatedAt
      decks {
        items {
          id
          deckID
          cardID
          createdAt
          updatedAt
        }
        nextToken
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
      createdAt
      updatedAt
      decks {
        items {
          id
          deckID
          cardID
          createdAt
          updatedAt
        }
        nextToken
      }
    }
  }
`;
export const onCreateGame = /* GraphQL */ `
  subscription OnCreateGame {
    onCreateGame {
      id
      name
      createdAt
      updatedAt
      Teams {
        items {
          id
          color
          name
          gameID
          createdAt
          updatedAt
        }
        nextToken
      }
      Rounds {
        items {
          id
          gameID
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
      name
      createdAt
      updatedAt
      Teams {
        items {
          id
          color
          name
          gameID
          createdAt
          updatedAt
        }
        nextToken
      }
      Rounds {
        items {
          id
          gameID
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
      name
      createdAt
      updatedAt
      Teams {
        items {
          id
          color
          name
          gameID
          createdAt
          updatedAt
        }
        nextToken
      }
      Rounds {
        items {
          id
          gameID
          result
          createdAt
          updatedAt
        }
        nextToken
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
      createdAt
      updatedAt
      team {
        id
        color
        name
        gameID
        createdAt
        updatedAt
        TeamPlayers {
          nextToken
        }
      }
      player {
        id
        name
        createdAt
        updatedAt
        teams {
          nextToken
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
      createdAt
      updatedAt
      team {
        id
        color
        name
        gameID
        createdAt
        updatedAt
        TeamPlayers {
          nextToken
        }
      }
      player {
        id
        name
        createdAt
        updatedAt
        teams {
          nextToken
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
      createdAt
      updatedAt
      team {
        id
        color
        name
        gameID
        createdAt
        updatedAt
        TeamPlayers {
          nextToken
        }
      }
      player {
        id
        name
        createdAt
        updatedAt
        teams {
          nextToken
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
      createdAt
      updatedAt
      deck {
        id
        createdAt
        updatedAt
        DeckCards {
          nextToken
        }
      }
      card {
        id
        rank
        suit
        createdAt
        updatedAt
        decks {
          nextToken
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
      createdAt
      updatedAt
      deck {
        id
        createdAt
        updatedAt
        DeckCards {
          nextToken
        }
      }
      card {
        id
        rank
        suit
        createdAt
        updatedAt
        decks {
          nextToken
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
      createdAt
      updatedAt
      deck {
        id
        createdAt
        updatedAt
        DeckCards {
          nextToken
        }
      }
      card {
        id
        rank
        suit
        createdAt
        updatedAt
        decks {
          nextToken
        }
      }
    }
  }
`;
