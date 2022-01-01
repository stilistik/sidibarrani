export const gameFragment = /* GraphQL */ `
  fragment GameFragment on Game {
    id
    index
    private
    status
    mode
    createdAt
    updatedAt
    ActiveRound {
      id
      turn
      status
      mode
      result
      hands {
        items {
          id
          userID
          type
          cards
        }
      }
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
          winner {
            id
            teamID
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
        TeamUsers {
          items {
            id
            user {
              id
              username
            }
          }
        }
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
