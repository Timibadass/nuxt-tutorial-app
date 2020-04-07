<template>
  <section class="directory" v-if="directory">
    <h1 class="directory__name">{{ directory.name }}</h1>
    <p class="directory__info">{{ directory.info }}</p>
  </section>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "directory-info",
  computed: {
    ...mapState(["directory"])
  }
};
</script>

<style></style>
