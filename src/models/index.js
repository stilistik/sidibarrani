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

const { Round, Game, User } = initSchema(schema);

export {
  Round,
  Game,
  User,
  RoundStatus,
  GameStatus
};