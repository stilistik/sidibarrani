<template>
  <PageContainer>
    <PageHeader>Home</PageHeader>
    <div class="text-white">
      <span v-if="isLoading">Loading</span>
      <span v-if="isError">Error</span>
      <User
        v-for="item in data?.items"
        :key="item.id"
        :username="item.username"
      />
    </div>
  </PageContainer>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageContainer from "../components/PageContainer.vue";
import PageHeader from "../components/PageHeader.vue";
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
    PageHeader,
    Button,
    Link,
    Input,
    Loading,
    Hand,
    User,
  },
  setup() {
    return useListUsersQuery();
  },
});
</script>
