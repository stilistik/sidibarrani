<template>
  <div
    class="absolute"
    :style="style"
    @mousemove="onMouseMove"
    @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave"
    @click.stop.prevent="onClick"
  >
    <div
      class="absolute w-full h-full shadow-2xl rounded-xl"
      :style="outerStyle"
    >
      <component
        :is="card"
        class="absolute w-full h-full"
        style="backface-visibility: hidden; -webkit-backface-visibility: hidden"
      />
      <img
        src="/assets/card_back_2.png"
        class="absolute w-full h-full p-2 bg-white rounded-xl"
        style="
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          transform: rotateY(180deg);
        "
      />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, ref, toRefs, watch } from "vue";
import { cardsByCode } from "../cards";
import { spring } from "../spring";

const calcX = (y: number) => -y / 15;
const calcY = (x: number) => x / 15;

export default defineComponent({
  props: {
    card: String,
    width: Number,
    height: Number,
    x: Number,
    y: Number,
    initX: Number,
    initY: Number,
    interactive: Boolean,
  },
  setup(props, context) {
    const cardRef = ref(null);
    const card = computed(() => cardsByCode[props.card as string]);

    const rotation = spring(0, { damping: 12 });
    const scale = spring(1, { damping: 12, precision: 8, from: 0 });
    const p = spring({ x: 0, y: 0 }, { damping: 20 });
    const pos = spring(
      { x: props.x, y: props.y },
      { from: { x: props.initX || props.x, y: props.initY || props.y } }
    );

    const { x, y } = toRefs(props);
    watch(x, (newValue) => {
      pos.x = newValue;
    });
    watch(y, (newValue) => {
      pos.y = newValue;
    });

    function onMouseMove(event: any) {
      if (!props.interactive) return;
      p.x = event.pageX - pos.x - props.width / 2;
      p.y = event.pageY - pos.y - props.height / 2;
    }

    function onMouseEnter(event: Event) {
      if (!props.interactive) return;
      scale.value = 1.1;
      context.emit("mouseenter", event);
    }

    function onMouseLeave(event: Event) {
      if (!props.interactive) return;
      scale.value = 1.0;
      p.x = 0;
      p.y = 0;
      context.emit("mouseleave", event);
    }

    function onClick(event: Event) {
      if (!props.interactive) return;
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

    const outerStyle = computed(() => {
      return `transform-style: preserve-3d; transform-origin: center; transition: transform 0.3s ease; transform: perspective(1000px) rotateY(${rotation.value}deg);`;
    });

    return reactive({
      cardRef,
      card: card,
      style,
      onMouseMove,
      onMouseEnter,
      onMouseLeave,
      onClick,
      outerStyle,
    });
  },
});
</script>
