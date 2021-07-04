<template>
  <div class="game">
    <h3>{{ name }}</h3>
    <button>Join</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Game",
  props: ["name", "id"],
});
</script>

<style scoped>
div.game {
  display: flex;
  height: 30px;
  align-items: center;
}
</style>