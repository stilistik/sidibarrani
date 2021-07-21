<template>
  <Button size="large" @click="start">Start</Button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Message } from "../utils/Message";
import Button from "./Button.vue";

export default defineComponent({
  name: "StartGame",
  components: {
    Button,
  },
  setup() {},
  methods: {
    start() {
      console.log("start");
      Message.success("Started the game");
    },
  },
});
</script>
