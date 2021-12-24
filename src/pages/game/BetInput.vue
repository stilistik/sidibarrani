<template>
  <div
    class="flex items-center h-14 rounded-xl border-transparent border-2"
    :class="{ 'border-primary shadow-primary': focused }"
  >
    <Input
      placeholder="Place Bet"
      type="number"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      class="h-full rounded-r-none focus:ring-none focus:border-none"
      style="width: 160px"
      @focus="handleFocus"
      @blur="handleBlur"
    />
    <Button class="h-full rounded-none" @click="$emit('onPlaceBet')">
      <Icon icon="coins" />
    </Button>
    <Button class="h-full rounded-l-none" @click="$emit('onSkip')">
      <Icon icon="forward" />
    </Button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import Input from "../../components/Input.vue";
import Button from "../../components/Button.vue";
export default defineComponent({
  name: "BetInput",
  components: { Input, Button },
  props: {
    modelValue: String,
  },
  emits: ["update:modelValue", "onPlaceBet", "onSkip"],
  setup() {
    const focused = ref(false);

    function handleFocus() {
      focused.value = true;
    }
    function handleBlur() {
      focused.value = false;
    }

    return {
      handleFocus,
      handleBlur,
      focused,
    };
  },
});
</script>
