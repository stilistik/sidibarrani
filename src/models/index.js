// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const CardSuit = {
  "HEARTS": "HEARTS",
  "CLUBS": "CLUBS",
  "SPADES": "SPADES",
  "DIAMONDS": "DIAMONDS"
};

const { Team, TeamPlayer, Player, Round, Deck, DeckCard, Card, Game } = initSchema(schema);

export {
  Team,
  TeamPlayer,
  Player,
  Round,
  Deck,
  DeckCard,
  Card,
  Game,
  CardSuit
};