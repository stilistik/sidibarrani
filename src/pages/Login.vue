<template>
  <div class="w-full h-full p-10 bg-gray-900">
    <div class="container mx-auto px-20">
      <div class="text-center">
        <h1 class="text-9xl font-extrabold mt-20 text-white">Sidi Barrani</h1>
      </div>
      <div class="flex flex-col col-span-4 items-center w-full my-10 gap-5">
        <input
          v-model="name"
          type="text"
          placeholder="Username"
          class="rounded-xl text-3xl font-bold shadow-xl"
        />
        <input
          v-model="password"
          type="password"
          placeholder="Password"
          class="rounded-xl text-3xl font-bold shadow-xl"
        />
      </div>
      <div class="flex justify-center w-full">
        <button
          @click="login()"
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
          Login
        </button>
      </div>
      <span class="text-white" v-if="loading">Loading...</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject } from "vue";
import { API, graphqlOperation } from "aws-amplify";
import { createPlayer } from "../graphql/mutations";

export default defineComponent({
  name: "Login",
  data: function () {
    return { name: "", password: "", loading: false };
  },
  methods: {
    createPlayer: async function (redirectTo: string) {
      this.loading = true;
      const res = (await API.graphql(
        graphqlOperation(createPlayer, {
          input: {
            name: this.name,
          },
        })
      )) as any;
      this.loading = false;
    },
  },
});
</script>
