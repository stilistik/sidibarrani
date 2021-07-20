<template>
  <div
    class="
      absolute
      top-0
      w-screen
      transform
      transition
      duration-500
      -translate-y-full
      origin-top
    "
    :class="{ 'transform-none': hasMessage }"
  >
    <div
      class="py-5 px-5 font-extrabold flex justify-between"
      :class="{
        'bg-green-400': state.type === 'success',
        'bg-red-400': state.type === 'error',
        'bg-yellow-400': state.type === 'warning',
        'bg-blue-400': state.type === 'info',
      }"
    >
      <span>{{ state.message }}</span>
      <button @click="close"><Icon icon="times" /></button>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onUpdated, reactive } from "vue";
import { Message } from "../utils/Message";

export default defineComponent({
  name: "NotificationHub",
  setup() {
    console.log("test");

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

    onUpdated(() => {
      if (state.message) {
        setTimeout(() => {
          state.message = null;
        }, 3000);
      }
    });

    const hasMessage = computed(() => Boolean(state.message));
    return { state, hasMessage };
  },
  methods: {
    close() {
      this.state.message = null;
    },
  },
});
</script>
