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
      z-50
    "
    :class="{ 'transform-none': hasMessage }"
  >
    <div
      class="py-5 px-5 font-extrabold flex justify-between items-center h-20"
      :class="{
        'bg-green-400': state.type === 'success',
        'bg-red-400': state.type === 'error',
        'bg-yellow-400': state.type === 'warning',
        'bg-blue-400': state.type === 'info',
      }"
    >
      <span>{{ state.message }}</span>
      <IconButton @click="close">
        <Icon icon="times" />
      </IconButton>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onUpdated, reactive } from "vue";
import { Message } from "../utils/Message";
import IconButton from "./IconButton.vue";

export default defineComponent({
  name: "NotificationHub",
  components: {
    IconButton,
  },
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
