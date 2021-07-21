<template>
  <div
    class="w-full p-8 space-y-4 shadow-xl rounded-xl text-white"
    :class="color"
  >
    <h3 class="text-4xl font-thin">{{ name }}</h3>
    <h3 class="text-2xl font-thin">{{ team1name }} VS {{ team2name }}</h3>
    <Button @click="join">Join</Button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Button from "./Button.vue";

export default defineComponent({
  name: "Game",
  components: {
    Button,
  },
  props: ["name", "id", "index", "team1name", "team2name"],
  computed: {
    color(): string {
      const gradients: string[] = [
        "shadow-green",
        "shadow-red",
        "shadow-purple",
        "shadow-pink",
        "shadow-blue",
        "shadow-yellow",
        "shadow-indigo",
        "shadow-teal",
        "shadow-orange",
      ];
      const indexInBounds = this.$props.index % gradients.length;
      return gradients[indexInBounds];
    },
  },
  methods: {
    join() {
      this.$router.push({ path: "/lobby", query: { gameId: this.$props.id } });
    },
  },
});
</script>
