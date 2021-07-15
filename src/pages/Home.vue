<template>
  <AppHeader />
  <PageContainer>
    <PageTitle>Home</PageTitle>
    <div class="text-white">
      <span v-if="isLoading">Loading</span>
      <span v-if="isError">Error</span>
      <User
        v-for="item in data?.items"
        :key="item.id"
        :username="item.username"
        class="mb-4"
      />
    </div>
  </PageContainer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageContainer from "../components/PageContainer.vue";
import AppHeader from "../components/AppHeader.vue";
import PageTitle from "../components/PageTitle.vue";
import Button from "../components/Button.vue";
import Link from "../components/Link.vue";
import Input from "../components/Input.vue";
import Loading from "../components/Loading.vue";
import Hand from "../components/Hand.vue";
import User from "../components/User.vue";
import { useListUsersQuery } from "../api/queries";

export default defineComponent({
  name: "Home",
  components: {
    PageContainer,
    PageTitle,
    Button,
    Link,
    Input,
    Loading,
    Hand,
    User,
    AppHeader,
  },
  setup() {
    return useListUsersQuery();
  },
});
</script>
