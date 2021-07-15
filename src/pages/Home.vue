<template>
  <PageContainer>
    <PageHeader>Home</PageHeader>
    <Hand />
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
  },
});
</script>
