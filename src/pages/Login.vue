<template>
  <page-container>
    <page-header>Sidi Barrani</page-header>
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
    <div class="flex flex-col col-span-4 items-center w-full gap-y-5">
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
      <a
        class="text-blue-400 hover:text-white font-bold text-xl cursor-pointer"
        @click="signup()"
      >
        Sign Up
      </a>
    </div>
    <span class="text-white" v-if="loading">Loading...</span>
  </page-container>
</template>

<script lang="ts">
import { defineComponent, inject } from "vue";
import { API, graphqlOperation } from "aws-amplify";
import { createPlayer } from "../graphql/mutations";
import PageContainer from "../components/PageContainer.vue";
import PageHeader from "../components/PageHeader.vue";

export default defineComponent({
  name: "Login",
  components: {
    PageContainer,
    PageHeader,
  },
  data: function () {
    return { name: "", password: "", loading: false };
  },
  methods: {
    login: async function () {},
    signup: function () {
      this.$router.push("/signup");
    },
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
