/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const echo = /* GraphQL */ `
  query Echo($msg: String) {
    echo(msg: $msg)
  }
`;
export const getTeam = /* GraphQL */ `
  query GetTeam($id: ID!) {
    getTeam(id: $id) {
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
export const listTeams = /* GraphQL */ `
  query ListTeams(
    $filter: ModelTeamFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTeams(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getPlayer = /* GraphQL */ `
  query GetPlayer($id: ID!) {
    getPlayer(id: $id) {
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
export const listPlayers = /* GraphQL */ `
  query ListPlayers(
    $filter: ModelPlayerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlayers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
        teams {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getRound = /* GraphQL */ `
  query GetRound($id: ID!) {
    getRound(id: $id) {
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
export const listRounds = /* GraphQL */ `
  query ListRounds(
    $filter: ModelRoundFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRounds(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        gameID
        result
        createdAt
        updatedAt
        Deck {
          id
          createdAt
          updatedAt
        }
      }
      nextToken
    }
  }
`;
export const getDeck = /* GraphQL */ `
  query GetDeck($id: ID!) {
    getDeck(id: $id) {
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
export const listDecks = /* GraphQL */ `
  query ListDecks(
    $filter: ModelDeckFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDecks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        updatedAt
        DeckCards {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getCard = /* GraphQL */ `
  query GetCard($id: ID!) {
    getCard(id: $id) {
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
export const listCards = /* GraphQL */ `
  query ListCards(
    $filter: ModelCardFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCards(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        rank
        suit
        createdAt
        updatedAt
        decks {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getGame = /* GraphQL */ `
  query GetGame($id: ID!) {
    getGame(id: $id) {
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
export const listGames = /* GraphQL */ `
  query ListGames(
    $filter: ModelGameFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGames(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
        Teams {
          nextToken
        }
        Rounds {
          nextToken
        }
      }
      nextToken
    }
  }
`;
