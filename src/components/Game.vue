<template>
  <div
    class="
      pt-6
      md:p-8
      text-center
      md:text-left
      space-y-4
      shadow-xl
      m-10
      rounded-xl
    "
  >
    <h3 class="text-3xl font-bold leading-tight text-gray-900">{{ name }}</h3>
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