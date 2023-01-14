<template>
  <section id="team">
  <div class="container">
    <h2 class="will-animate title">Conheça nossa equipe</h2>
    <br>
    <div class="teamMembers">
        <div v-for="member in siteMeta.team" :key="member.name" class="will-animate memberCard">
          <img class="will-animate avatar mx-auto" :src="member.image" :alt="member.name" />
          <h3 class="will-animate name">{{ member.name }}</h3>
          <p class="will-animate role">{{ member.role }}</p>
        </div>
    </div>
  </div>
</section>
</template>
<script setup lang="ts">
import siteMeta from '~/siteMeta';
</script>