import { Game, GameMode } from "../graphql/types";

export function resolveTeams(game: Game, userId: string) {
  if (!game || !userId) return null;

  let userTeam = null;
  let opponentTeam = null;
  let userTeamColor = null;
  let opponentTeamColor = null;

  const userInTeamA = game.TeamA.TeamUsers.items.some(
    (teamUser) => teamUser.user.id === userId
  );

  const userInTeamB = game.TeamB.TeamUsers.items.some(
    (teamUser) => teamUser.user.id === userId
  );

  if (userInTeamA) {
    userTeam = game.TeamA;
    userTeamColor = game.teamAColor;
    opponentTeam = game.TeamB;
    opponentTeamColor = game.teamBColor;
  } else if (userInTeamB) {
    userTeam = game.TeamB;
    userTeamColor = game.teamBColor;
    opponentTeam = game.TeamA;
    opponentTeamColor = game.teamAColor;
  } else {
    throw new Error("User not found in either of the game teams.");
  }

  const opponentId = opponentTeam.TeamUsers.items[0].user.id;

  return {
    userTeam,
    userTeamColor,
    opponentTeamColor,
    opponentTeam,
    opponentId,
  };
}
