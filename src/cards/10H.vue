<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="2.5in"
    height="3.5in"
    viewBox="-120 -168 240 336"
    preserveAspectRatio="none"
    class="card"
    face="TH"
  >
    <symbol id="H" viewBox="-600 -600 1200 1200" preserveAspectRatio="xMinYMid">
      <path
        d="M0 -300C0 -400 100 -500 200 -500C300 -500 400 -400 400 -250C400 0 0 400 0 500C0 400 -400 0 -400 -250C-400 -400 -300 -500 -200 -500C-100 -500 0 -400 -0 -300Z"
        fill="red"
      />
    </symbol>
    <symbol
      id="HT"
      viewBox="-500 -500 1000 1000"
      preserveAspectRatio="xMinYMid"
    >
      <path
        d="M-260 430L-260 -430M-50 0L-50 -310A150 150 0 0 1 250 -310L250 310A150 150 0 0 1 -50 310Z"
        stroke="red"
        stroke-width="80"
        stroke-linecap="square"
        stroke-miterlimit="1.5"
        fill="none"
      />
    </symbol>
    <rect
      width="239"
      height="335"
      x="-119.5"
      y="-167.5"
      rx="12"
      ry="12"
      fill="white"
    />
    <use xlink:href="#HT" height="32" width="32" x="-114.4" y="-156" />
    <use xlink:href="#H" height="26.769" width="26.769" x="-111.784" y="-119" />
    <use xlink:href="#H" height="70" width="70" x="-87.501" y="-135.501" />
    <use xlink:href="#H" height="70" width="70" x="17.501" y="-135.501" />
    <use xlink:href="#H" height="70" width="70" x="-87.501" y="-68.5" />
    <use xlink:href="#H" height="70" width="70" x="17.501" y="-68.5" />
    <use xlink:href="#H" height="70" width="70" x="-35" y="-102" />
    <g transform="rotate(180)">
      <use xlink:href="#HT" height="32" width="32" x="-114.4" y="-156" />
      <use
        xlink:href="#H"
        height="26.769"
        width="26.769"
        x="-111.784"
        y="-119"
      />
      <use xlink:href="#H" height="70" width="70" x="-87.501" y="-135.501" />
      <use xlink:href="#H" height="70" width="70" x="17.501" y="-135.501" />
      <use xlink:href="#H" height="70" width="70" x="-87.501" y="-68.5" />
      <use xlink:href="#H" height="70" width="70" x="17.501" y="-68.5" />
      <use xlink:href="#H" height="70" width="70" x="-35" y="-102" />
    </g>
    <g transform="scale(0.3) translate(-87, -87)">
      <path
        d="M93 80V94.5C93 94.5 99.3141 102 95.5 113.5C92.1756 123.524 80.5 128 73 128.5C65.5 129 51.1368 126.5 47.5 112C43.8632 97.5 53.5 86.5 53.5 86.5L51 85C51 85 42.5 93.5 42.5 107C42.5 120.5 51 135.5 73 135C95 134.5 105.5 119.5 105.5 103C105.5 86.5 93 80 93 80Z"
        fill="red"
      />
      <path
        d="M103.5 56H72V58.5C72 58.5 82 58.5 82 64V124.5C87.5 122.5 91 118 91 118V60.5H103.5C118.825 60.5 119.5 73 119.5 77C119.5 81 119.5 85.5 115.5 90.5C112.621 94.0985 106.5 96.5 106.5 96.5L107.5 101.5C107.5 101.5 126.5 103.5 126.5 123C126.5 142.5 109 143.5 106.5 143.5H91V132C87 134.5 82 135.5 82 135.5C82 137.5 82.5697 142.588 80.5 145C78.247 147.626 72 147.5 72 147.5C71.7625 148.447 71.9492 149.025 72 150H106.5C106.5 150 136.5 149.5 136.5 123C136.5 97.5 113.5 98 113.5 98C113.5 98 128.5 93.5 128.5 77C128.5 61.9975 116.5 56 103.5 56Z"
        fill="red"
      />
      <path
        d="M73 25.5C78.5 24.6316 85 24.5 92.5 28V44.5H90C90 40.5 89.625 37.5 87 34.5C84.375 31.5 79.1471 30.2588 72.5 31.5C62.8162 34.9059 59.5 43 61.5 50.5C63.5 58 80 69 80 69V74.5V81C72.9634 76.4687 56 65 53 56C50 47 52.5 39.5 57 34.5C61.5 29.5 67.5 26.3684 73 25.5Z"
        fill="red"
      />
      <circle
        cx="88.5"
        cy="88.5"
        r="85"
        stroke="red"
        stroke-width="7"
        fill="none"
      />
    </g>
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "H10",
});
</script>
