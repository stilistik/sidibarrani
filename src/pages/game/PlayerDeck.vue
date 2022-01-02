<template>
  <div
    :class="getRootClasses()"
    :style="{
      height: '370px',
      width: '1200px',
      zIndex: -1,
    }"
  >
    <div
      :class="getOuterClasses()"
      class="absolute top-0 left-0"
      :style="{
        height: '370px',
        width: '1200px',
        clipPath: getOuterClipPath(),
      }"
    />
    <div class="absolute bg-gray-900" :style="getInnerStyle()" />
    <h1 :class="getTextClasses()" :style="getTextStyle()">
      {{ name }}
    </h1>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, reactive } from "vue";
import { Color, colorClasses } from "../../utils/ColorUtils";

export default defineComponent({
  name: "PlayerDeck",
  props: {
    location: String as PropType<"top" | "bottom">,
    color: String as PropType<Color>,
    endStraightRight: Boolean,
    name: String,
  },
  setup(props) {
    function getRootClasses() {
      const classes = ["absolute", "left-1/2", "-translate-x-1/2"];
      classes.push(props.location === "top" ? "top-0" : "bottom-0");
      return classes;
    }

    function getOuterClasses() {
      return [colorClasses[props.color].bg];
    }

    function getInnerStyle() {
      const style: any = { left: "3px", height: "500px", width: "1194px" };
      if (props.location === "top") {
        style.bottom = "4px";
        if (props.endStraightRight) {
          style.width = "1200px";
          style.clipPath = "polygon(0% 80%, 10% 100%, 100% 100%, 100% 80%)";
        } else {
          style.clipPath = "polygon(0% 80%, 10% 100%, 90% 100%, 100% 80%)";
        }
      } else if (props.location === "bottom") {
        style.top = "4px";
        if (props.endStraightRight) {
          style.width = "1200px";
          style.clipPath = "polygon(0% 20%, 10% 0, 100% 0, 100% 20%)";
        } else {
          style.clipPath = "polygon(0% 20%, 10% 0, 90% 0, 100% 20%)";
        }
      }

      return style;
    }

    function getOuterClipPath() {
      if (props.location === "top") {
        return "polygon(0% 80%, 10% 100%, 90% 100%, 100% 80%)";
      } else if (props.location === "bottom") {
        return "polygon(0% 20%, 10% 0, 90% 0, 100% 20%)";
      }
    }

    function getTextClasses() {
      return [colorClasses[props.color].text, "font-black"];
    }

    function getTextStyle() {
      const style: any = { position: "absolute" };
      if (props.location === "top") {
        style.top = "370px";
        style.left = "10%";
      } else {
        style.bottom = "370px";
        style.left = "10%";
      }
      return style;
    }

    return reactive({
      getRootClasses,
      getOuterClasses,
      getTextClasses,
      getInnerStyle,
      getOuterClipPath,
      getTextStyle,
    });
  },
});
</script>
