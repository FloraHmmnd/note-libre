<template>
  <Header></Header>
  <div class="container">
    <UserControls></UserControls>
    <Player></Player>
  </div>
</template>

<script setup>
import Header from "../components/Header.vue";
import UserControls from "../components/UserControls.vue";
import Player from "../components/Player.vue";
</script>

<style scoped>
.container {
  display: flex;
  width: 100%;
}
</style>
