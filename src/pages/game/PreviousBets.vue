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
      <ModeIcon :mode="action.mode" :size="20" />
      <span>{{ action.amount }}</span>
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
        const mode = item.value.split(":")[0];
        const amount = item.value.split(":")[1];
        const username = item.user.username;
        return { id: item.id, mode, amount, username };
      })
    );

    return reactive({
      actions,
    });
  },
});
</script>
