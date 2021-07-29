<template>
  <div
    :style="`transform-origin:center; transform: scale(${scale});`"
    class="absolute top-28 w-full flex justify-center z-10 pointer-events-none"
  >
    <h3
      class="
        text-4xl
        font-black
        text-primary
        bg-gray-800
        py-3
        px-5
        rounded-full
        shadow-2xl
      "
    >
      Its Your Turn!
    </h3>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, ref, watchEffect } from "vue";
import { useActiveRound } from "../api";
import { useCurrentUser } from "../utils/Auth";
import { spring } from "vue3-spring";

export default defineComponent({
  setup() {
    const user = useCurrentUser();
    const activeRound = useActiveRound();

    const isUsersTurn = computed(() => {
      const turn = activeRound?.value?.turn;
      const userId = user?.value?.id;
      return Boolean(turn) && Boolean(userId) && turn === userId;
    });

    const scale = spring(0, { damping: 8 });
    watchEffect(() => {
      if (isUsersTurn.value) {
        scale.value = 1;
      } else {
        scale.value = 0;
      }
    });

    return reactive({
      scale,
    });
  },
});
</script>
