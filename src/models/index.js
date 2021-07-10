// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Game, Team, PlayerTeams, Player } = initSchema(schema);

export {
  Game,
  Team,
  PlayerTeams,
  Player
};