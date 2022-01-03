export const gameFragment = /* GraphQL */ `
  fragment GameFragment on Game {
    id
    index
    private
    status
    mode
    winCondition
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
    teamAColor
    TeamA {
      id
      name
      TeamUsers {
        items {
          id
          userID
          user {
            id
            username
          }
        }
      }
    }
    teamBColor
    TeamB {
      id
      name
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
