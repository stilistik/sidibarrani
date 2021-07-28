<template>
  <div ref="cardRef" class="absolute top-0 left-0">
    <component
      class="shadow-2xl rounded-xl"
      :is="card"
      :style="style"
      @mousemove="onMouseMove"
      @mouseenter="onMouseEnter"
      @mouseleave="onMouseLeave"
      @mousedown="onMouseDown"
      @click.stop.prevent="onClick"
    />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, ref } from "vue";
import { cardsByCode } from "../cards";
import { spring } from "vue3-spring";
import { useEventListener } from "../utils/UseEventListener";

const calcX = (y: number) => -y / 15;
const calcY = (x: number) => x / 15;

export default defineComponent({
  props: {
    card: String,
    width: Number,
    height: Number,
  },
  setup(props, context) {
    const cardRef = ref(null);
    const card = computed(() => cardsByCode[props.card as string]);

    const scale = spring(1, { damping: 12, precision: 8 });
    const p = spring({ x: 0, y: 0 }, { damping: 20 });
    const pos = reactive({ x: 0, y: 0 });
    const down = ref(false);

    function onMouseMove(event: any) {
      if (down.value) {
        pos.x += event.movementX;
        pos.y += event.movementY;
      } else {
        const rect = cardRef.value.getBoundingClientRect();
        p.x = event.pageX - rect.left - pos.x - props.width / 2;
        p.y = event.pageY - rect.top - pos.y - props.height / 2;
      }
    }

    function onMouseDown() {
      down.value = true;
    }

    function onMouseUp() {
      down.value = false;
    }

    function onMouseEnter(event: Event) {
      scale.value = 1.1;
    }

    function onMouseLeave(event: Event) {
      scale.value = 1.0;
      p.x = 0;
      p.y = 0;
    }

    function onClick(event: Event) {
      context.emit("click", props.card, event);
    }

    useEventListener(document, "mouseup", onMouseUp);

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
      onMouseDown,
      onMouseUp,
      onClick,
    });
  },
});
</script>
