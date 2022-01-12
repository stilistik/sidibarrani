import { Game, GameMode, Team } from "../graphql/types";
import { Color } from "./ColorUtils";

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
    // default to enable spectator mode
    userTeam = game.TeamA;
    userTeamColor = game.teamAColor;
    opponentTeam = game.TeamB;
    opponentTeamColor = game.teamBColor;
  }

  const opponentId = opponentTeam.TeamUsers.items[0].user.id;
  const playerId = userTeam.TeamUsers.items[0].user.id;
  return {
    playerId,
    userTeam,
    userTeamColor,
    opponentTeamColor,
    opponentTeam,
    opponentId,
  };
}

export function getGameTeamById(game: Game, teamId: string): Team {
  if (game.TeamA.id === teamId) return game.TeamA;
  else if (game.TeamB.id === teamId) return game.TeamB;
  else throw new Error(`Could not find team with id ${teamId} in game`);
}

export function getTeamColorById(game: Game, teamId: string): Color {
  if (game.TeamA.id === teamId) return game.teamAColor;
  else if (game.TeamB.id === teamId) return game.teamBColor;
  else throw new Error(`Could not find team with id ${teamId} in game`);
}
