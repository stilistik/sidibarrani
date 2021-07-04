// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Team, User, Game } = initSchema(schema);

export {
  Team,
  User,
  Game
};