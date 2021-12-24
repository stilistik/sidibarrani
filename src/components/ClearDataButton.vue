<template>
  <IconButton v-if="shouldRender" @click="handleClearData">
    <Icon icon="trash" />
  </IconButton>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useClearDataMutation } from "../api";
import { Message } from "../utils/Message";
import IconButton from "./IconButton.vue";

export default defineComponent({
  name: "ClearDataButton",
  components: {
    IconButton,
  },
  setup(props) {
    const clearDataMutation = useClearDataMutation();

    async function handleClearData() {
      try {
        const success = await clearDataMutation.mutateAsync();
        if (success) {
          Message.success("Data has been cleared");
        }
      } catch (data: any) {
        const msg = data.errors[0].message;
        Message.error(`Error clearing data: ${msg}`);
      }
    }

    const shouldRender = import.meta.env.DEV;

    return { handleClearData, shouldRender };
  },
});
</script>
