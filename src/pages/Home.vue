<template>
  <div class="w-full h-full p-10 bg-gray-900">
    <div class="container mx-auto px-20">
      <div class="text-center">
        <h1 class="text-9xl font-extrabold mt-20 text-white">Sidi Barrani</h1>
      </div>
      <div class="flex justify-center w-full my-10">
        <input
          v-bind="name"
          type="text"
          placeholder="Your name"
          class="rounded-xl text-3xl font-bold shadow-xl"
        />
      </div>
      <div class="flex justify-center w-full">
        <router-link
          to="/create"
          style="width: 250px"
          class="
            text-center
            bg-gradient-to-r
            from-green-400
            hover:from-green-300
            to-blue-500
            hover:to-blue-400
            text-6xl
            font-extrabold
            rounded-xl
            shadow-2xl
            p-4
            mx-2
          "
        >
          Create
        </router-link>
        <router-link
          to="/games"
          style="width: 250px"
          class="
            text-center
            bg-gradient-to-r
            from-purple-400
            hover:from-purple-300
            to-red-500
            hover:to-red-400
            text-6xl
            font-extrabold
            rounded-xl
            shadow-2xl
            p-4
            mx-2
          "
        >
          Join
        </router-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
  data: function () {
    return { name: "" };
  },
});
</script>
