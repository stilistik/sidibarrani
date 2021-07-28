<template>
  <component
    class="absolute shadow-2xl rounded-xl"
    :is="card"
    :style="style"
    @mousemove="onMouseMove"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
    @click.stop.prevent="onClick"
  />
</template>

<script lang="ts">
import { computed, defineComponent, reactive, ref, toRefs, watch } from "vue";
import { cardsByCode } from "../cards";
import { spring } from "vue3-spring";

const calcX = (y: number) => -y / 15;
const calcY = (x: number) => x / 15;

export default defineComponent({
  props: {
    card: String,
    width: Number,
    height: Number,
    x: Number,
    y: Number,
  },
  setup(props, context) {
    const cardRef = ref(null);
    const card = computed(() => cardsByCode[props.card as string]);

    const scale = spring(1, { damping: 12, precision: 8 });
    const p = spring({ x: 0, y: 0 }, { damping: 20 });
    const pos = spring(
      { x: props.x, y: props.y },
      { from: { x: props.x, y: props.y } }
    );

    const { x, y } = toRefs(props);
    watch(x, (newValue) => {
      pos.x = newValue;
    });
    watch(y, (newValue) => {
      pos.y = newValue;
    });

    function onMouseMove(event: any) {
      p.x = event.pageX - pos.x - props.width / 2;
      p.y = event.pageY - pos.y - props.height / 2;
    }

    function onMouseEnter(event: Event) {
      scale.value = 1.1;
      context.emit("mouseenter", event);
    }

    function onMouseLeave(event: Event) {
      scale.value = 1.0;
      p.x = 0;
      p.y = 0;
      context.emit("mouseleave", event);
    }

    function onClick(event: Event) {
      context.emit("onClick", props.card, event);
    }

    const style = computed(() => {
      return `width:${props.width}px; height:${
        props.height
      }px;  transform:  translateX(${pos.x}px) translateY(${pos.y}px) scale(${
        scale.value
      }) perspective(800px) rotateX(${calcX(p.y)}deg) rotateY(${calcY(
        p.x
      )}deg)`;
    });

    return reactive({
      cardRef,
      card: card,
      style,
      onMouseMove,
      onMouseEnter,
      onMouseLeave,
      onClick,
    });
  },
});
</script>
