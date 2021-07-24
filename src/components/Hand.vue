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
import { defineComponent, computed } from "vue";
import { CardComponents, cardsByCode } from "../cards";

export default defineComponent({
  name: "Hand",
  components: {
    ...CardComponents,
  },
  props: {
    cards: Array,
  },
  setup(props) {
    const cards = computed(() =>
      props.cards.map((code) => cardsByCode[code as string])
    );
    return { cards: cards };
  },
  methods: {
    computeStyle(index: number) {
      return "";
    },
  },
});
</script>
