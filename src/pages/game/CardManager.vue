<template>
  <div class="absolute left-0 top-0">
    <Card
      v-for="{
        card,
        position,
        width,
        visible,
        interactive,
        onClick,
        onMouseEnter,
        onMouseLeave,
        zIndex,
      } in state"
      v-show="visible"
      :key="card"
      :card="card"
      :x="position.x"
      :y="position.y"
      :width="width"
      :height="width * 1.4"
      :interactive="interactive"
      @click="onClick"
      @mouseenter="onMouseEnter"
      @mouseleave="onMouseLeave"
      :style="{ zIndex: Z_OFFSET + zIndex }"
    />
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, provide, reactive } from "vue";
import { cardsByCode } from "../../cards";
import Card from "../../components/Card.vue";
import Button from "../../components/Button.vue";

interface CardState {
  card: string;
  width: number;
  position: { x: number; y: number };
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
      card: string,
      key: K,
      value: CardState[K]
    ) => void;
    resetCardState: (card: string) => void;
  };
};

const Z_OFFSET = 0;

export default defineComponent({
  name: "CardManager",
  components: {
    Card,
    Button,
  },
  setup() {
    const state: CardState[] = Object.keys(cardsByCode).map((card) => {
      return reactive({
        card,
        width: 140,
        position: { x: 0, y: 0 },
        visible: false,
        zIndex: 0,
        interactive: false,
        onClick: undefined,
        onMouseEnter: undefined,
        onMouseLeave: undefined,
      });
    });

    function setCardState<K extends keyof CardState>(
      card: string,
      key: K,
      value: CardState[K]
    ) {
      const cardState = state.find((el) => el.card === card);
      if (cardState) cardState[key] = value;
    }

    function resetCardState(card: string) {
      const cardState = state.find((el) => el.card === card);
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

    provide("CardManagerAPI", {
      setCardState,
      resetCardState,
    });

    return reactive({ state, Z_OFFSET });
  },
});
</script>
