<script setup lang="ts">
import Header from "/src/limbs/Header.vue";
import Footer from "./limbs/Footer.vue";
</script>

<template>
  <div class="mainDivApp">
    <Header />
    <div class="contentRouter"><RouterView /></div>
    <Footer />
  </div>
</template>
