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
      status
      stacks {
        items {
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
      activeStack {
        id
        size
        winner {
          id
          user {
            id
            username
          }
          team {
            id
            name
            color
          }
        }
        actions(sortDirection: ASC) {
          items {
            id
            type
            value
            updatedAt
            user {
              id
              username
            }
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
