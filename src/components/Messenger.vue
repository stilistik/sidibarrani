<template>
  <div v-if="minimized" class="fixed bottom-10 left-10">
    <IconButton @click="minimized = false" class="">
      <Icon icon="comments" />
      <span
        v-if="unreadMessages > 0"
        class="absolute top-0 right-0 rounded-full bg-primary text-sm font-black"
        style="width: 20px; height: 20px"
      >
        {{ unreadMessages }}
      </span>
    </IconButton>
  </div>
  <div
    v-else
    class="fixed bottom-10 left-10 rounded-2xl bg-gray-800 p-3 flex flex-col"
    style="max-height: 300px; max-width: 400px"
  >
    <div class="flex justify-between text-white items-center">
      <p class="font-black">Chat</p>
      <IconButton :size="'small'" @click="minimized = true">
        <Icon icon="minus" />
      </IconButton>
    </div>
    <div ref="container" class="flex-1 overflow-auto">
      <div v-for="message in $props.messages" :key="message.id">
        <span
          class="font-black mr-2"
          :class="getMessageUserClass(message?.User?.username)"
        >
          {{ message?.User?.username }}:
        </span>
        <span class="text-white break-words">{{ message?.text }}</span>
      </div>
    </div>
    <div class="flex text-white mt-3" :class="getInputClasses()">
      <Input
        type="text"
        v-model="text"
        @keydown="handleKeyDown"
        @focus="handleFocus"
        @blur="handleBlur"
        class="flex-1 text-base font-normal rounded-r-none border-none"
      />
      <Button @click="handleClick" class="rounded-l-none">
        <Icon icon="paper-plane" />
      </Button>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  onMounted,
  onUpdated,
  PropType,
  ref,
  toRef,
  watch,
} from "vue";
import Input from "./Input.vue";
import Button from "./Button.vue";
import IconButton from "./IconButton.vue";
import { Message } from "../graphql/types";
import { useCreateMessageMutatio } from "../api";
import { colorClasses, colors } from "../utils/ColorUtils";

export default defineComponent({
  components: {
    Input,
    Button,
    IconButton,
  },
  props: {
    messages: Array as PropType<Message[]>,
    gameID: String,
  },
  setup(props) {
    const createMessageMutation = useCreateMessageMutatio();
    const text = ref("");
    const focused = ref(false);
    const container = ref(null);
    const minimized = ref(true);
    const unreadMessages = ref(0);
    const messages = toRef(props, "messages");

    watch(messages, (_, prevValue) => {
      if (!prevValue) return;
      if (minimized.value) unreadMessages.value++;
    });

    watch(minimized, (newValue) => {
      if (!newValue) unreadMessages.value = 0;
    });

    function scrollDown() {
      if (container.value)
        container.value.scrollTop = container.value.scrollHeight + 50;
    }

    onMounted(scrollDown);
    onUpdated(scrollDown);

    function handleFocus() {
      focused.value = true;
    }

    function handleBlur() {
      focused.value = false;
    }

    function sendMessage() {
      createMessageMutation.mutate({
        gameID: props.gameID,
        text: text.value,
      });
      text.value = "";
    }

    function handleKeyDown(e: any) {
      if (e.key === "Enter") {
        sendMessage();
      }
    }

    function handleClick() {
      sendMessage();
    }

    function getInputClasses() {
      const classes: string[] = ["border-2", "rounded-xl", "border-gray-700"];
      if (focused.value) {
        classes.push("border-primary");
      }
      return classes;
    }

    function getMessageUserClass(username: string) {
      const idx = username.charCodeAt(0) % colors.length;
      const color = colors[idx];
      return [colorClasses[color].text];
    }

    return {
      text,
      container,
      minimized,
      unreadMessages,
      handleKeyDown,
      handleClick,
      handleFocus,
      handleBlur,
      getInputClasses,
      getMessageUserClass,
    };
  },
});
</script>
