<template>
  <div v-if="hasMessage" class="absolute top-0 w-screen">
    <div
      v-if="state.type === 'success'"
      class="bg-green-400 py-5 px-5 font-extrabold flex justify-between"
    >
      <span>{{ state.message }}</span>
      <button>X</button>
    </div>
    <div
      v-if="state.type === 'error'"
      class="bg-red-400 py-5 px-5 font-extrabold"
    >
      <span>{{ state.message }}</span>
    </div>
    <div
      v-if="state.type === 'warning'"
      class="bg-yellow-400 py-5 px-5 font-extrabold"
    >
      <span>{{ state.message }}</span>
    </div>
    <div
      v-if="state.type === 'info'"
      class="bg-blue-400 py-5 px-5 font-extrabold"
    >
      <span>{{ state.message }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onUpdated, reactive } from "vue";

interface Message {
  success?: (msg: string) => void;
  error?: (msg: string) => void;
  warning?: (msg: string) => void;
  info?: (msg: string) => void;
}

export const Message: Message = {};

export default defineComponent({
  name: "NotificationHub",
  setup() {
    const state = reactive({ message: null as string, type: null as string });

    Message.success = (msg: string) => {
      state.message = msg;
      state.type = "success";
    };

    Message.error = (msg: string) => {
      state.message = msg;
      state.type = "error";
    };

    Message.warning = (msg: string) => {
      state.message = msg;
      state.type = "warning";
    };

    Message.info = (msg: string) => {
      state.message = msg;
      state.type = "info";
    };

    // onUpdated(() => {
    //   if (state.message) {
    //     setTimeout(() => {
    //       state.message = null;
    //     }, 3000);
    //   }
    // });

    const hasMessage = computed(() => Boolean(state.message));
    return { state, hasMessage };
  },
});
</script>
