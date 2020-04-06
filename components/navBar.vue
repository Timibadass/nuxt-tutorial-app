<template>
  <nav class="nav">
    <div class="logo__container">
      <Logo />
    </div>
    <nuxt-link to="/">Home</nuxt-link>
    <nuxt-link to="/About">About</nuxt-link>
  </nav>
</template>

<script>
import Logo from "@/components/Logo";
export default {
  name: "nav-bar",
  components: {
    Logo
  }
};
</script>

<style>
</style>