<template>
  <img
    class="p-2 bg-white rounded-xl"
    :style="style"
    src="/assets/card_back_2.png"
  />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CardBack",
});
</script>
