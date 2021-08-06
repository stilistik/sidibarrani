<template>
  <div class="flex w-full justify-center gap-3 pt-52">
    <Button
      v-for="mode in modes"
      :key="mode"
      :size="'large'"
      class="w-32"
      @click="onClick(mode)"
      :active="selectedMode === mode"
    >
      <ModeIcon :mode="mode" />
    </Button>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import Button from "../../components/Button.vue";
import ModeIcon from "./ModeIcon.vue";

export default defineComponent({
  components: {
    ModeIcon,
    Button,
  },
  props: {
    selectedMode: String,
  },
  emits: ["modeChange"],
  setup(_props, context) {
    const modes = [
      "BOTTOM_UP",
      "TOP_DOWN",
      "SLALOM",
      "TRUMP_D",
      "TRUMP_H",
      "TRUMP_S",
      "TRUMP_C",
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
