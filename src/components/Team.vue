<template>
  <div class="rounded-xl p-10 text-3xl font-extrabold">
    <div v-if="Boolean(team)" class="flex flex-col gap-5">
      <p>{{ team?.name }}</p>
      <User
        v-for="item in teamUsers"
        :key="item.id"
        :id="item.user.id"
        :username="item.user.username"
      />
      <JoinTeam :teamID="team?.id" />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive } from "vue";
import User from "./User.vue";
import JoinTeam from "./JoinTeam.vue";

export default defineComponent({
  components: {
    User,
    JoinTeam,
  },
  props: {
    team: Object,
  },
  setup(props) {
    const teamUsers = computed(() => {
      return props.team?.TeamUsers?.items || [];
    });

    return reactive({
      teamUsers,
    });
  },
});
</script>
