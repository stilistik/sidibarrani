<template>
  <div class="flex items-center gap-10">
    <Button @click="copy" class="flex items-center gap-5 rounded-full">
      <template v-if="copied">Link copied!</template>
      <template v-else>
        Copy Game Link
        <Icon icon="copy" />
      </template>
    </Button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Button from "./Button.vue";

export default defineComponent({
  name: "CopyJoinLink",
  data() {
    return {
      copied: false,
    };
  },
  components: {
    Button,
  },
  methods: {
    copy() {
      const dummy = document.createElement("input");
      const text = window.location.href;
      document.body.appendChild(dummy);
      dummy.value = text;
      dummy.select();
      document.execCommand("copy");
      document.body.removeChild(dummy);
      this.copied = true;
      setTimeout(() => {
        this.copied = false;
      }, 1000);
    },
  },
});
</script>
