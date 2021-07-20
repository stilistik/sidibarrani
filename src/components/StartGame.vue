<template>
  <Button size="large">Start</Button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Button from "./Button.vue";

export default defineComponent({
  name: "StartGame",
  components: {
    Button,
  },
  setup() {},
});
</script>
