export const gameFragment = /* GraphQL */ `
  fragment GameFragment on Game {
    id
    index
    public
    status
    mode
    winCondition
    createdAt
    updatedAt
    result
    winner {
      id
      name
    }
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
          isLastStack
          actions(sortDirection: ASC) {
            items {
              id
              type
              value
              updatedAt
            }
          }
          points
          winner {
            id
            teamID
            team {
              id
              name
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
        result
        createdAt
        updatedAt
      }
      nextToken
    }
    messages {
      items {
        id
        text
        User {
          id
          username
        }
      }
    }
  }
`;
