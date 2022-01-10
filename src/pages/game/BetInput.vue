<template>
  <div
    class="flex items-center h-14 rounded-xl border-transparent border-2"
    :class="{ 'border-primary shadow-primary': focused }"
  >
    <Input
      placeholder="Place Bet"
      type="text"
      :value="modelValue"
      @input="handleInput"
      class="h-full rounded-r-none focus:ring-none focus:border-none"
      style="width: 160px"
      @focus="handleFocus"
      @blur="handleBlur"
      @keydown="handleKeyDown"
    />
    <div class="h-full">
      <Button class="h-1/2 rounded-none" @click="increment">
        <Icon icon="caret-up" />
      </Button>
      <Button class="h-1/2 rounded-none" @click="decrement">
        <Icon icon="caret-down" />
      </Button>
    </div>
    <StaticTooltip>
      <template v-slot:tooltip>
        <h4 class="text-xl">Place bet</h4>
        <span>Place a bet of your choosing on the currently selected mode</span>
      </template>
      <template v-slot:outlet>
        <Button class="h-full rounded-none" @click="$emit('onPlaceBet')">
          <Icon icon="coins" />
        </Button>
      </template>
    </StaticTooltip>
    <StaticTooltip>
      <template v-slot:tooltip>
        <h4 class="text-xl">Skip</h4>
        <span
          >Skip to the next player without taking action. If everyone has
          skipped, the highest bet mode will be selected to play.</span
        >
      </template>
      <template v-slot:outlet>
        <Button class="h-full rounded-l-none" @click="$emit('onSkip')">
          <Icon icon="forward" />
        </Button>
      </template>
    </StaticTooltip>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Input from "../../components/Input.vue";
import Button from "../../components/Button.vue";
import StaticTooltip from "../../components/StaticTooltip.vue";
export default defineComponent({
  name: "BetInput",
  components: {
    Input,
    Button,
    StaticTooltip,
  },
  props: {
    modelValue: Number,
  },
  emits: ["update:modelValue", "onPlaceBet", "onSkip"],
  setup(props, context) {
    const focused = ref(false);

    function handleFocus() {
      focused.value = true;
    }
    function handleBlur() {
      focused.value = false;
    }

    function handleKeyDown(e: KeyboardEvent) {
      if (
        !["Backspace", "Escape", "Tab"].includes(e.key) &&
        isNaN(Number(e.key))
      ) {
        e.preventDefault();
      }
    }

    function handleInput(e: any) {
      let value = Math.round(Number(e.target.value));
      if (value > 157) {
        value = 157;
      }
      context.emit("update:modelValue", value);
    }

    function increment() {
      context.emit("update:modelValue", props.modelValue + 10);
    }

    function decrement() {
      context.emit("update:modelValue", props.modelValue - 10);
    }

    return {
      handleFocus,
      handleBlur,
      handleKeyDown,
      handleInput,
      increment,
      decrement,
      focused,
    };
  },
});
</script>
