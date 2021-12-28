<template>
  <div class="fixed w-screen h-screen top-0 left-0">
    <Card
      v-for="{
        card,
        position,
        immediatePosition,
        width,
        visible,
        interactive,
        onClick,
        onMouseEnter,
        onMouseLeave,
        zIndex,
        flipAppear,
      } in state"
      v-show="visible"
      :key="card"
      :card="card"
      :x="position.x"
      :y="position.y"
      :initX="immediatePosition?.x"
      :initY="immediatePosition?.y"
      :width="width"
      :height="width * 1.4"
      :interactive="interactive"
      :flipAppear="flipAppear"
      @click="onClick"
      @mouseenter="onMouseEnter"
      @mouseleave="onMouseLeave"
      :style="{ zIndex }"
    />
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, provide, reactive, Ref, ref } from "vue";
import { cardsByCode } from "../../cards";
import Card from "../../components/Card.vue";
import Button from "../../components/Button.vue";

interface CardState {
  id: string;
  card: string;
  width: number;
  position: { x: number; y: number };
  immediatePosition: { x: number; y: number } | null;
  flipAppear: boolean;
  visible: boolean;
  interactive: boolean;
  zIndex: number;
  onClick: Function | undefined;
  onMouseEnter: Function | undefined;
  onMouseLeave: Function | undefined;
}

export const useCardManager = () => {
  return inject("CardManagerAPI") as {
    setCardState: <K extends keyof CardState>(
      id: string,
      key: K,
      value: CardState[K]
    ) => void;
    resetCardState: (id: string) => void;
    addHiddenCard: (id: string) => void;
    removeHiddenCard: (id: string) => void;
    replaceHiddenCard: (id: string, hiddenId: string) => void;
  };
};

export default defineComponent({
  name: "CardManager",
  components: {
    Card,
    Button,
  },
  setup() {
    const normalCards = Object.keys(cardsByCode).map((card) => {
      return reactive({
        id: card,
        card,
        width: 140,
        position: { x: window.innerWidth / 2, y: -100 },
        immediatePosition: null,
        visible: false,
        zIndex: 100,
        interactive: false,
        flipAppear: false,
        onClick: undefined,
        onMouseEnter: undefined,
        onMouseLeave: undefined,
      });
    });

    const hiddenCards = Array(36)
      .fill(undefined)
      .map((_, idx) => {
        return reactive({
          id: null,
          card: "X",
          width: 140,
          position: { x: window.innerWidth / 2, y: -100 },
          immediatePosition: null,
          visible: false,
          zIndex: 0,
          interactive: false,
          flipAppear: false,
          onClick: undefined,
          onMouseEnter: undefined,
          onMouseLeave: undefined,
        });
      });

    const state: CardState[] = [...normalCards, ...hiddenCards];

    function setCardState<K extends keyof CardState>(
      id: string,
      key: K,
      value: CardState[K]
    ) {
      const cardState = state.find((el) => el.id === id);
      if (cardState) cardState[key] = value;
    }

    function resetCardState(id: string) {
      const cardState = state.find((el) => el.id === id);
      if (cardState) {
        cardState.width = 140;
        cardState.position = { x: 0, y: 0 };
        cardState.visible = false;
        cardState.zIndex = 0;
        cardState.interactive = false;
        cardState.onClick = undefined;
        cardState.onMouseEnter = undefined;
        cardState.onMouseLeave = undefined;
      }
    }

    function addHiddenCard(id: string) {
      if (hiddenCards.some((el) => el.id === id)) return;
      const hiddenCard = hiddenCards.find((el) => !el.id);
      if (hiddenCard) {
        hiddenCard.id = id;
      } else {
        throw new Error("Out of hidden cards");
      }
    }

    function removeHiddenCard(id: string) {
      const hiddenCard = hiddenCards.find((el) => el.id === id);
      if (hiddenCard) {
        hiddenCard.id = null;
        resetCardState(hiddenCard.id);
      }
    }

    function replaceHiddenCard(id: string, hiddenId: string) {
      const card = normalCards.find((el) => el.id === id);
      const hiddenCard = hiddenCards.find((el) => el.id === hiddenId);

      if (card && hiddenCard) {
        card.immediatePosition = hiddenCard.position;
        card.flipAppear = true;
        hiddenCard.visible = false;
        hiddenCard.id = null;
      }
    }

    provide("CardManagerAPI", {
      setCardState,
      resetCardState,
      addHiddenCard,
      removeHiddenCard,
      replaceHiddenCard,
    });

    return reactive({ state });
  },
});
</script>
