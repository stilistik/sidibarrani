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
`;
export const updatePlayer = /* GraphQL */ `
  mutation UpdatePlayer(
    $input: UpdatePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    updatePlayer(input: $input, condition: $condition) {
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
`;
export const deletePlayer = /* GraphQL */ `
  mutation DeletePlayer(
    $input: DeletePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    deletePlayer(input: $input, condition: $condition) {
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
`;
export const updateDeck = /* GraphQL */ `
  mutation UpdateDeck(
    $input: UpdateDeckInput!
    $condition: ModelDeckConditionInput
  ) {
    updateDeck(input: $input, condition: $condition) {
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
`;
export const deleteDeck = /* GraphQL */ `
  mutation DeleteDeck(
    $input: DeleteDeckInput!
    $condition: ModelDeckConditionInput
  ) {
    deleteDeck(input: $input, condition: $condition) {
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
`;
export const createGame = /* GraphQL */ `
  mutation CreateGame(
    $input: CreateGameInput!
    $condition: ModelGameConditionInput
  ) {
    createGame(input: $input, condition: $condition) {
      id
      name
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Teams {
        nextToken
        startedAt
      }
      Rounds {
        nextToken
        startedAt
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Teams {
        nextToken
        startedAt
      }
      Rounds {
        nextToken
        startedAt
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
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      Teams {
        nextToken
        startedAt
      }
      Rounds {
        nextToken
        startedAt
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
      }
      player {
        id
        name
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
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
      }
      player {
        id
        name
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
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
      }
      player {
        id
        name
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
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
      }
    }
  }
`;
