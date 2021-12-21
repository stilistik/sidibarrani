<template>
  <div class="z-0 absolute w-full h-full flex">
    <div
      class="w-full h-full absolute top-0 left-0"
      :class="[bg1class]"
      :style="{ clipPath: 'polygon(0 0, 54% 0, 44% 100%, 0% 100%)' }"
    />
    <div
      class="w-full h-full absolute top-0 left-0"
      :class="[bg2class]"
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
import { computed, defineComponent, reactive } from "vue";
import { Color, colorClasses } from "../utils/ColorUtils";

export default defineComponent({
  name: "SplitBackground",
  props: ["color1", "color2", "size", "hovered"],
  setup(props) {
    const bg1class = computed(() => {
      return props.hovered
        ? colorClasses[props.color1 as Color].bgHover
        : colorClasses[props.color1 as Color].bg;
    });

    const bg2class = computed(() => {
      return props.hovered
        ? colorClasses[props.color2 as Color].bgHover
        : colorClasses[props.color2 as Color].bg;
    });

    return reactive({
      size: props.size,
      bg1class,
      bg2class,
    });
  },
});
</script>
