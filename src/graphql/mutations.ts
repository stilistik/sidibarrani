/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTeam = /* GraphQL */ `
  mutation CreateTeam(
    $input: CreateTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    createTeam(input: $input, condition: $condition) {
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
export const updateTeam = /* GraphQL */ `
  mutation UpdateTeam(
    $input: UpdateTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    updateTeam(input: $input, condition: $condition) {
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
export const deleteTeam = /* GraphQL */ `
  mutation DeleteTeam(
    $input: DeleteTeamInput!
    $condition: ModelTeamConditionInput
  ) {
    deleteTeam(input: $input, condition: $condition) {
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
export const createPlayer = /* GraphQL */ `
  mutation CreatePlayer(
    $input: CreatePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    createPlayer(input: $input, condition: $condition) {
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
export const updatePlayer = /* GraphQL */ `
  mutation UpdatePlayer(
    $input: UpdatePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    updatePlayer(input: $input, condition: $condition) {
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
export const deletePlayer = /* GraphQL */ `
  mutation DeletePlayer(
    $input: DeletePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    deletePlayer(input: $input, condition: $condition) {
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
export const createRound = /* GraphQL */ `
  mutation CreateRound(
    $input: CreateRoundInput!
    $condition: ModelRoundConditionInput
  ) {
    createRound(input: $input, condition: $condition) {
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
export const updateRound = /* GraphQL */ `
  mutation UpdateRound(
    $input: UpdateRoundInput!
    $condition: ModelRoundConditionInput
  ) {
    updateRound(input: $input, condition: $condition) {
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
export const deleteRound = /* GraphQL */ `
  mutation DeleteRound(
    $input: DeleteRoundInput!
    $condition: ModelRoundConditionInput
  ) {
    deleteRound(input: $input, condition: $condition) {
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
export const createDeck = /* GraphQL */ `
  mutation CreateDeck(
    $input: CreateDeckInput!
    $condition: ModelDeckConditionInput
  ) {
    createDeck(input: $input, condition: $condition) {
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
export const updateDeck = /* GraphQL */ `
  mutation UpdateDeck(
    $input: UpdateDeckInput!
    $condition: ModelDeckConditionInput
  ) {
    updateDeck(input: $input, condition: $condition) {
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
export const deleteDeck = /* GraphQL */ `
  mutation DeleteDeck(
    $input: DeleteDeckInput!
    $condition: ModelDeckConditionInput
  ) {
    deleteDeck(input: $input, condition: $condition) {
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
export const createCard = /* GraphQL */ `
  mutation CreateCard(
    $input: CreateCardInput!
    $condition: ModelCardConditionInput
  ) {
    createCard(input: $input, condition: $condition) {
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
export const updateCard = /* GraphQL */ `
  mutation UpdateCard(
    $input: UpdateCardInput!
    $condition: ModelCardConditionInput
  ) {
    updateCard(input: $input, condition: $condition) {
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
export const deleteCard = /* GraphQL */ `
  mutation DeleteCard(
    $input: DeleteCardInput!
    $condition: ModelCardConditionInput
  ) {
    deleteCard(input: $input, condition: $condition) {
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
export const createGame = /* GraphQL */ `
  mutation CreateGame(
    $input: CreateGameInput!
    $condition: ModelGameConditionInput
  ) {
    createGame(input: $input, condition: $condition) {
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
export const updateGame = /* GraphQL */ `
  mutation UpdateGame(
    $input: UpdateGameInput!
    $condition: ModelGameConditionInput
  ) {
    updateGame(input: $input, condition: $condition) {
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
export const deleteGame = /* GraphQL */ `
  mutation DeleteGame(
    $input: DeleteGameInput!
    $condition: ModelGameConditionInput
  ) {
    deleteGame(input: $input, condition: $condition) {
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
export const createTeamPlayer = /* GraphQL */ `
  mutation CreateTeamPlayer(
    $input: CreateTeamPlayerInput!
    $condition: ModelTeamPlayerConditionInput
  ) {
    createTeamPlayer(input: $input, condition: $condition) {
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
export const updateTeamPlayer = /* GraphQL */ `
  mutation UpdateTeamPlayer(
    $input: UpdateTeamPlayerInput!
    $condition: ModelTeamPlayerConditionInput
  ) {
    updateTeamPlayer(input: $input, condition: $condition) {
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
export const deleteTeamPlayer = /* GraphQL */ `
  mutation DeleteTeamPlayer(
    $input: DeleteTeamPlayerInput!
    $condition: ModelTeamPlayerConditionInput
  ) {
    deleteTeamPlayer(input: $input, condition: $condition) {
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
export const createDeckCard = /* GraphQL */ `
  mutation CreateDeckCard(
    $input: CreateDeckCardInput!
    $condition: ModelDeckCardConditionInput
  ) {
    createDeckCard(input: $input, condition: $condition) {
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
export const updateDeckCard = /* GraphQL */ `
  mutation UpdateDeckCard(
    $input: UpdateDeckCardInput!
    $condition: ModelDeckCardConditionInput
  ) {
    updateDeckCard(input: $input, condition: $condition) {
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
export const deleteDeckCard = /* GraphQL */ `
  mutation DeleteDeckCard(
    $input: DeleteDeckCardInput!
    $condition: ModelDeckCardConditionInput
  ) {
    deleteDeckCard(input: $input, condition: $condition) {
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
