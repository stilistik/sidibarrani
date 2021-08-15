<template>
  <component
    :is="card"
    style="backface-visibility: hidden; -webkit-backface-visibility: hidden"
  />
</template>

<script lang="ts">
import { computed, defineComponent, reactive } from "vue";
import { cardsByCode } from "../../cards";

export default defineComponent({
  props: {
    card: String,
  },
  setup(props) {
    const card = computed(() => cardsByCode[props.card as string]);
    return reactive({
      card,
    });
  },
});
</script>
