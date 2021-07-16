// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const RoundStatus = {
  "DEAL": "DEAL",
  "BET": "BET",
  "PLAY": "PLAY"
};

const GameStatus = {
  "STARTED": "STARTED",
  "CREATED": "CREATED",
  "ENDED": "ENDED"
};

const { Team, TeamUser, User, Round, Game } = initSchema(schema);

export {
  Team,
  TeamUser,
  User,
  Round,
  Game,
  RoundStatus,
  GameStatus
};