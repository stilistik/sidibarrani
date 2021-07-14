<template>
  <PageContainer>
    <PageHeader>Home</PageHeader>
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

export default defineComponent({
  name: "Home",
  components: {
    PageContainer,
    PageHeader,
    Button,
    Link,
    Input,
    Loading,
  },
});
</script>
