<template>
  <div
    class="
      text-primary
      font-black
      text-7xl
      border-8
      rounded-full
      border-primary
      flex
      items-center
      justify-center
      tracking-tighter
      shadow-primary
    "
    :style="{
      textShadow: '2px 2px 10px black',
      width: '220px',
      minWidth: '220px',
      height: '220px',
      minHeight: '220px',
    }"
  >
    SB
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Logo",
});
</script>
