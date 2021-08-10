<template>
  <AppHeader />
  <PageContainer>
    <div class="background text-center" :style="style">
      <h1 class="mt-10 text-9xl font-extrabold">
        {{ gameName }}
      </h1>
    </div>
    <div class="w-full flex justify-center mt-10">
      <CopyJoinLink />
    </div>
    <div class="text-white">
      <div class="flex items-start mt-20">
        <Team :team="team1" class="flex-1" />
        <div class="background" :style="style">
          <p class="font-extrabold text-9xl p-10 mt-4">VS</p>
        </div>
        <Team :team="team2" class="flex-1" />
      </div>
      <Button @click="leaveGame">Leave Game</Button>
    </div>

    <div class="flex justify-center mt-20">
      <StartGame :id="gameId" />
    </div>
  </PageContainer>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  onBeforeUnmount,
  reactive,
  watchEffect,
} from "vue";
import PageContainer from "../components/PageContainer.vue";
import AppHeader from "../components/AppHeader.vue";
import PageTitle from "../components/PageTitle.vue";
import Loading from "../components/Loading.vue";
import Button from "../components/Button.vue";
import Team from "../components/Team.vue";
import StartGame from "../components/StartGame.vue";
import CopyJoinLink from "../components/CopyJoinLink.vue";
import {
  useLeaveTeamMutation,
  useGameQuery,
  useGameSubscription,
} from "../api";
import router from "../router";
import { useQueryClient } from "vue-query";
import { Message } from "../utils/Message";

const images = [
  "assets/bg-1.jpeg",
  "assets/bg-2.jpeg",
  "assets/bg-3.jpeg",
  "assets/bg-4.jpeg",
];

export default defineComponent({
  name: "LobbyPage",
  components: {
    AppHeader,
    PageContainer,
    PageTitle,
    Loading,
    Team,
    StartGame,
    CopyJoinLink,
    Button,
  },
  setup() {
    const leaveGameMutation = useLeaveTeamMutation();
    const qclient = useQueryClient();
    const gameId = computed(
      () => router.currentRoute.value.query.gameId as string
    );

    async function leaveGame() {
      try {
        await leaveGameMutation.mutateAsync({
          input: { gameID: gameId.value },
        });
        qclient.invalidateQueries("getGame");
      } catch (err) {
        Message.error("Could not leave the game");
      }
    }

    const subscription = useGameSubscription(gameId.value);

    onBeforeUnmount(() => {
      subscription.unsubscribe();
    });

    const { data } = useGameQuery(gameId);

    watchEffect(() => {
      if (data?.value?.status === "STARTED") {
        router.replace({ path: "game", query: { gameId: gameId.value } });
      }
    });

    const team1 = computed(() => {
      return data?.value?.Teams?.items[0];
    });

    const team2 = computed(() => {
      return data?.value?.Teams?.items[1];
    });

    const gameName = computed(() => {
      return data?.value?.name;
    });

    const style = computed(() => {
      const idx = data?.value?.index || 0;
      const img = images[idx % images.length];
      return {
        backgroundImage: `url(${img})`,
      };
    });

    return reactive({
      team1,
      team2,
      gameName,
      gameId,
      leaveGame,
      style,
    });
  },
});
</script>

<style scoped>
.background {
  background-size: cover;
  color: #fff;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  padding: 0;
}
</style>
