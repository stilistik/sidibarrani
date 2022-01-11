<template>
  <div class="flex flex-col justify-center gap-5">
    <Tooltip v-for="mode in modes" :key="mode.value" :placement="'left'">
      <template v-slot:tooltip>
        <h4 class="text-xl" v-if="mode.title">{{ mode.title }}</h4>
        <span v-if="mode.tooltip">{{ mode.tooltip }}</span>
      </template>
      <template v-slot:outlet>
        <Button
          :size="'large'"
          class="w-32"
          @click="onClick(mode.value)"
          :active="selectedMode === mode.value"
        >
          <ModeIcon :mode="mode.value" />
        </Button>
      </template>
    </Tooltip>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import Button from "../../components/Button.vue";
import ModeIcon from "./ModeIcon.vue";
import Tooltip from "../../components/Tooltip.vue";

export default defineComponent({
  components: {
    ModeIcon,
    Button,
    Tooltip,
  },
  props: {
    selectedMode: String,
  },
  emits: ["modeChange"],
  setup(_props, context) {
    const modes = [
      {
        value: "BOTTOM_UP",
        title: "Bottom-Up Mode",
        tooltip: "Lower ranks are stronger than higher ranks.",
      },
      {
        value: "TOP_DOWN",
        title: "Top-Down Mode",
        tooltip: "Higher ranks are stronger than lower ranks",
      },
      {
        value: "SLALOM_BOTTOM",
        title: "Slalom Bottom",
        tooltip:
          "Slalom starting with a Bottom-Up round, then alternating between Top-Down and Bottom-Up modes.",
      },
      {
        value: "SLALOM_TOP",
        title: "Slalom Top",
        tooltip:
          "Slalom starting with a Top-Down round, then alternating between Top-Down and Bottom-Up modes.",
      },
      {
        value: "TRUMP_D",
        title: "Trump Diamond",
        tooltip:
          "Diamond cards are stronger than all other cards. The highest card is the J of diamonds, followed by the 9 of diamonds.",
      },
      {
        value: "TRUMP_H",
        title: "Trump Hearts",
        tooltip:
          "Heart cards are stronger than all other cards. The highest card is the J of hearts, followed by the 9 of hearts.",
      },
      {
        value: "TRUMP_S",
        title: "Trump Spades",
        tooltip:
          "Spade cards are stronger than all other cards. The highest card is the J of spades, followed by the 9 of spades.",
      },
      {
        value: "TRUMP_C",
        title: "Trump Cross",
        tooltip:
          "Cross cards are stronger than all other cards. The highest card is the J of crosses, followed by the 9 of crosses.",
      },
    ];

    function onClick(mode: string) {
      context.emit("modeChange", mode);
    }

    return reactive({
      modes,
      onClick,
    });
  },
});
</script>
