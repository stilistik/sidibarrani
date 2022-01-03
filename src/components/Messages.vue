<template>
  <div
    ref="container"
    class="fixed bottom-10 left-10 rounded-2xl bg-gray-800 overflow-auto p-3"
    style="max-height: 300px; max-width: 400px"
  >
    <div v-for="message in $props.messages" :key="message.id">
      <span
        class="font-black mr-2"
        :class="getMessageUserClass(message?.User?.username)"
      >
        {{ message?.User?.username }}:
      </span>
      <span class="text-white break-words">{{ message?.text }}</span>
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
import { Message } from "../graphql/types";
import { useCreateMessageMutatio } from "../api";
import { colorClasses, colors } from "../utils/ColorUtils";

export default defineComponent({
  components: {
    Input,
    Button,
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

    function scrollDown() {
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
