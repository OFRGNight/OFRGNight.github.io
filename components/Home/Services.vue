<template>
  <section id="services">
  <div class="container">
    <h2 class="will-animate title">Serviços mais comuns</h2>
    <br>
      <div class="serviceIcons">
        <div v-for="service in siteMeta.services" :key="service.name" class="will-animate serviceIcon">
          <Icon :name="service.icon" size="100px" class="text-red-500" />
          <h3 class="will-animate">{{ service.name }}</h3>
        </div>
      </div>
  </div>
</section>
</template>
<script setup lang="ts">
import siteMeta from '~/siteMeta';
</script>