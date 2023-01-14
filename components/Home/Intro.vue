<script setup lang="ts">
import siteMeta from '~/siteMeta';
</script>

<template>
  <section id="intro">
  <div class="container">
    <h1 class="will-animate">{{ siteMeta.slogan }}</h1>
    <p class="will-animate tagLine">{{ siteMeta.tagLine }}</p>
    <br>
    <a class="will-animate button" href="#about">SAIBA MAIS</a>
  </div>
</section>
</template>