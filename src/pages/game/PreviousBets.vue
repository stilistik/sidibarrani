<template>
  <div class="flex flex-col gap-3">
    <div
      v-for="action in actions"
      :key="action.id"
      class="
        flex
        items-center
        bg-gray-800
        rounded-full
        px-3
        py-1
        font-black
        gap-2
      "
    >
      <span>{{ action.username }}</span>
      <span v-if="action.skip">Skip</span>
      <ModeIcon v-if="action.mode !== null" :mode="action.mode" :size="20" />
      <span v-if="action.amount !== null">{{ action.amount }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive } from "vue";
import { useActiveStack } from "../../api";
import ModeIcon from "./ModeIcon.vue";

export default defineComponent({
  components: {
    ModeIcon,
  },
  setup() {
    const activeStack = useActiveStack();
    const actions = computed(() =>
      activeStack.value?.actions?.items.map((item: any) => {
        if (item.type === "BET") {
          return {
            id: item.id,
            skip: false,
            mode: item.value.split(":")[0],
            amount: item.value.split(":")[1],
            username: item.user.username,
          };
        } else if (item.type === "SKIP") {
          return {
            id: item.id,
            skip: true,
            mode: null as string,
            amount: null as string,
            username: item.user.username,
          };
        }
      })
    );

    return reactive({
      actions,
    });
  },
});
</script>
