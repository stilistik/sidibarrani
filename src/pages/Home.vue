<template>
  <PageContainer>
    <PageHeader>Home</PageHeader>
    <div class="flex gap-2 justify-center mt-10">
      <C10 />
      <H10 />
      <D10 />
      <S10 />
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
import * as Cards from "../cards";

export default defineComponent({
  name: "Home",
  components: {
    PageContainer,
    PageHeader,
    Button,
    Link,
    Input,
    Loading,
    ...Cards,
  },
});
</script>
