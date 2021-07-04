<template>
  <GameList />
  <CreateGame />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import GameList from "./components/GameList.vue";
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
Amplify.configure(awsconfig);

export default defineComponent({
  name: "App",
  components: {
    GameList,
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>