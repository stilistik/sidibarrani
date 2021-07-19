<template>
  <div class="relative p-8 space-y-4 shadow-xl rounded-xl h-48" :class="color">
    <h3 class="text-3xl font-extrabold leading-tight">{{ name }}</h3>
    <h3 class="text-2xl font-bold leading-tight">
      {{ team1name }} VS {{ team2name }}
    </h3>
    <button
      class="
        absolute
        bottom-2
        right-2
        bg-gray-800
        text-white
        font-bold
        px-4
        py-2
        text-3xl
        rounded-lg
        hover:bg-gray-700
        transition-all
      "
      @click="join"
    >
      Join
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Game",
  props: ["name", "id", "index", "team1name", "team2name"],
  computed: {
    color(): string {
      const gradients: string[] = [
        "bg-green-400",
        "bg-red-400",
        "bg-purple-400",
        "bg-pink-400",
        "bg-blue-400",
        "bg-yellow-400",
        "bg-indigo-400",
        "bg-teal-400",
        "bg-orange-400",
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
