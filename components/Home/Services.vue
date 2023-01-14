<template>
  <section id="services">
  <div class="container">
    <h2 class="will-animate title">Serviços mais comuns</h2>
    <br>
      <div class="serviceIcons">
        <div v-for="service in siteMeta.services" :key="service.name" class="will-animate serviceIcon">
          <img class="will-animate mx-auto" height="100px" width="100px" :src="service.icon" :alt="service.name" :title="service.description"></img>
          <h3 class="will-animate">{{ service.name }}</h3>
        </div>
      </div>
  </div>
</section>
</template>
<script setup lang="ts">
import siteMeta from '~/siteMeta';
</script>