export const gameFragment = /* GraphQL */ `
  fragment GameFragment on Game {
    id
    private
    status
    name
    createdAt
    updatedAt
    ActiveRound {
      id
      turn
      activeStack {
        id
        size
        actions(sortDirection: ASC) {
          items {
            id
            type
            value
            updatedAt
          }
        }
      }
    }
    Teams {
      items {
        id
        gameID
        name
        color
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
`;
