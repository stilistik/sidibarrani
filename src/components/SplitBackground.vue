<template>
  <div class="z-0 absolute w-full h-full flex">
    <div
      class="w-full h-full absolute top-0 left-0"
      :class="[`bg-${color1}-400`]"
      :style="{ clipPath: 'polygon(0 0, 54% 0, 44% 100%, 0% 100%)' }"
    />
    <div
      class="w-full h-full absolute top-0 left-0"
      :class="[`bg-${color2}-400`]"
      :style="{ clipPath: 'polygon(56% 0, 100% 0, 100% 100%, 46% 100%)' }"
    />
    <div
      class="
        absolute
        font-extrabold
        z-10
        flex
        items-center
        justify-center
        bg-gray-900
        rounded-full
      "
      :style="{
        width: size + 'px',
        height: size + 'px',
        top: '50%',
        marginTop: -size / 2 + 'px',
        left: '50%',
        marginLeft: -size / 2 + 'px',
      }"
    >
      VS
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";

export default defineComponent({
  name: "SplitBackground",
  props: ["color1", "color2", "size"],
  setup(props) {
    return reactive({ size: props.size });
  },
});
</script>
