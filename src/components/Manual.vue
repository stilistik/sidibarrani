<template>
  <div class="text-white my-20">
    <h1 class="text-4xl font-black my-5">How To Play</h1>

    <a
      href="#"
      class="hover:text-primary"
      @click="generalExpanded = !generalExpanded"
    >
      <h3 class="text-2xl font-black my-5">
        <Icon :icon="generalExpanded ? 'minus' : 'plus'" class="mr-2" />
        <span>General Rules</span>
      </h3>
    </a>
    <div v-if="generalExpanded">
      <p>
        Sidi Barrani is played like the traditional
        <Em>Jass</Em> ("Schieber", for the savvy ones amongst us). What is
        special about Sidi Barrani, is that it adds a gambling stage before the
        actual game, where players already see their cards and can place bets on
        the outcome of the game.
      </p>
      <ul class="list-disc list-outside p-5">
        <li>
          To place a bet, players select a <Em>play mode</Em> and select the
          <Em>amount of points</Em> they think they will be able to make in this
          mode. Ideally players chose the mode that best suits the cards they
          have been dealt.
        </li>
        <li>
          The higher the bet, the more likely you are going to be allowed to
          play your game, but also the <Em>more risk</Em> you are taking of
          awarding the bounty to the enemy team.
        </li>
        <li>
          If in any round of betting, <Em>all players have skipped</Em>, the
          highest amount bet will be allowed to play the game in their selected
          play mode.
        </li>
      </ul>
      <p>
        After the play mode has been determined in the gambling stage, the game
        transitions into the play stage. Players take turns in
        <Em>playing one card each</Em>. After each round, the highest card wins
        and the points of the stack are awarded to the winning team. This goes
        on until all the cards have been played. Cards have
        <Em>different strengths</Em>
        depending on the play mode:
      </p>
      <ul class="list-disc list-outside p-5">
        <li>
          <Em>Top Down:</Em> The highest cards are the strongest (from Ace to 6)
        </li>
        <li>
          <Em>Bottom Up:</Em> The lowest cards are the strongest (from 6 to Ace)
        </li>
        <li>
          <Em>Slalom:</Em> Every round, the mode switches between bottom-up and
          top-down, the first turn determines which mode is being played first
        </li>
        <li>
          <Em>Trump:</Em> The J from the trump suit is the strongest card in the
          game, followed by the 9. Cards of the trump suit are stronger than all
          other cards. Cards from other suits follow a normal top-down ranking
        </li>
      </ul>
      <p>The round ends when all cards have been played.</p>
      <ul class="list-disc list-outside p-5">
        <li>
          If a team manages to <Em>achieve their bet points</Em>, they will be
          awarded the points.
        </li>
        <li>If not, the enemy team is awarded the points</li>
      </ul>
      <p>
        After the round has ended, players are shown a summary screen of each
        turn of the round, as well as the current result of the game. The game
        has finished if one of the teams has achieved the
        <Em>win condition</Em>, otherwise it will transition into the next
        round.
      </p>
    </div>

    <a href="#" class="hover:text-primary" @click="duoExpanded = !duoExpanded">
      <h3 class="text-2xl font-black my-5">
        <Icon :icon="duoExpanded ? 'minus' : 'plus'" class="mr-2" />
        <span>Mode: DUO</span>
      </h3>
    </a>
    <div v-if="duoExpanded">
      <p>In the <Em>DUO</Em> mode, 2 players face each other.</p>
      <ul class="list-disc list-outside p-5">
        <li>Each player receives a total of 18 cards to play</li>
        <li>6 cards are on the player's hand, visible <Em>only to them</Em></li>
        <li>
          6 cards are covered on the field, <Em>unknown to both</Em> players
        </li>
        <li>
          6 cards are <Em>openly visible</Em> lying ontop of the covered cards
          on the play field; these cards are known to both players
        </li>
      </ul>
      <p>
        Once the game mode has been set and the game is in the play stage,
        players can both play cards <Em>from their hands</Em> as well as
        revealed cards <Em>from the field</Em>. Covered cards in the field will
        reveal themselves after the blocking card on top has been played.
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Em from "./Em.vue";

export default defineComponent({
  components: {
    Em,
  },
  setup() {
    const generalExpanded = ref(false);
    const duoExpanded = ref(true);

    return {
      generalExpanded,
      duoExpanded,
    };
  },
});
</script>
