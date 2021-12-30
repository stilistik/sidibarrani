<template>
  <div
    :class="outer"
    :style="{
      height: '370px',
      width: '1200px',
      clipPath: outerClipPath,
    }"
  />
  <div
    :class="inner"
    :style="{
      height: '366px',
      width: '1196px',
      clipPath: innerClipPath,
    }"
  />
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { Color, colorClasses } from "../../utils/ColorUtils";

export default defineComponent({
  name: "PlayerDeck",
  props: {
    location: String as PropType<"top" | "bottom">,
    color: String as PropType<Color>,
    endStraightRight: Boolean,
  },
  setup(props) {
    const classes: string[] = ["absolute", "left-1/2", "-translate-x-1/2"];
    let outerClipPath = "";
    let innerClipPath = "";
    if (props.location === "top") {
      classes.push("top-0");
      outerClipPath = innerClipPath =
        "polygon(0% 80%, 10% 100%, 90% 100%, 100% 80%)";
      if (props.endStraightRight) {
        innerClipPath = "polygon(0% 80%, 10% 100%, 100% 100%, 100% 80%)";
      }
    } else if (props.location === "bottom") {
      classes.push("bottom-0");
      outerClipPath = innerClipPath = "polygon(0% 20%, 10% 0, 90% 0, 100% 20%)";
      if (props.endStraightRight) {
        innerClipPath = "polygon(0% 20%, 10% 0, 100% 0, 100% 20%)";
      }
    }

    return {
      outer: [...classes, colorClasses[props.color]?.bg],
      inner: [...classes, "bg-gray-900"],
      outerClipPath,
      innerClipPath,
    };
  },
});
</script>
