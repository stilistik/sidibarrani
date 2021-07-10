// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Deck, DeckCard, Card, Round, Team, User, Game } = initSchema(schema);

export {
  Deck,
  DeckCard,
  Card,
  Round,
  Team,
  User,
  Game
};