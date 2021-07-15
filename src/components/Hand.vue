<template>
  <div class="absolute left-0 bottom-0 w-full mb-10">
    <div class="flex gap-2 justify-center">
      <component
        v-for="(card, idx) in cards"
        :is="card"
        :key="card"
        :style="computeStyle(idx)"
      />
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import * as Cards from "../cards";

export default defineComponent({
  name: "Hand",
  components: {
    ...Cards,
  },
  setup(props) {
    const cards = ["H10", "D10", "C10", "S10"];
    return { cards };
  },
  methods: {
    computeStyle(index: number) {
      return "";
    },
  },
});
</script>
