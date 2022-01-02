<template>
  <div class="z-0 absolute w-full h-full flex">
    <div
      class="w-full h-full absolute top-0 left-0"
      :class="[bg1class]"
      :style="{
        clipPath: 'polygon(0 0, 54% 0, 44% 100%, 0% 100%)',
        transform: getLeftTransform(),
      }"
    />
    <div
      class="w-full h-full absolute top-0 left-0"
      :class="[bg2class]"
      :style="{
        clipPath: 'polygon(56% 0, 100% 0, 100% 100%, 46% 100%)',
        transform: getRightTransform(),
      }"
    />
    <div
      class="
        absolute
        font-extrabold
        z-10
        flex
        items-center
        justify-center
        bg-gray-800
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
import {
  computed,
  defineComponent,
  onMounted,
  reactive,
  ref,
  watch,
} from "vue";
import { spring } from "../spring";
import { Color, colorClasses } from "../utils/ColorUtils";

export default defineComponent({
  name: "SplitBackground",
  props: ["color1", "color2", "size", "hovered", "animationDelay"],
  setup(props) {
    const bg1class = computed(() => {
      return props.hovered
        ? colorClasses[props.color1 as Color]?.bgLight
        : colorClasses[props.color1 as Color]?.bg;
    });

    const bg2class = computed(() => {
      return props.hovered
        ? colorClasses[props.color2 as Color]?.bgLight
        : colorClasses[props.color2 as Color]?.bg;
    });

    const xOptions = reactive({ immediateValue: 0 });
    const x = spring(1000, xOptions);

    onMounted(() => {
      xOptions.immediateValue = 1000;
      setTimeout(() => {
        x.value = 0;
      }, 100 + props.animationDelay);
    });

    function getLeftTransform() {
      return `translate(-${x.value}px, 0)`;
    }

    function getRightTransform() {
      return `translate(${x.value}px, 0)`;
    }

    return reactive({
      size: props.size,
      bg1class,
      bg2class,
      getLeftTransform,
      getRightTransform,
    });
  },
});
</script>
