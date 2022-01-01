import { Game, GameMode } from "../graphql/types";

export function getParticipantNameByIndex(game: Game, index: 0 | 1) {
  if (game.mode === GameMode.DUO) {
    return game?.Teams?.items?.[index]?.TeamUsers?.items?.[index]?.user
      ?.username;
  } else {
    return game.Teams?.items?.[index]?.TeamUsers?.items
      ?.map((teamUser) => teamUser.user.username)
      .join(", ");
  }
}

export function getParticipantColorByIndex(game: Game, index: 0 | 1) {
  return game?.Teams?.items?.[index]?.color;
}
