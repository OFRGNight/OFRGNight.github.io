<template>
  <section id="socials">
  <div class="container">
    <h2 class="will-animate title">Nossas redes</h2>
    <br>
        <div class="socialIcons">
            <a v-for="social in siteMeta.socials" :key="social.url" class="socialIcon" :href="social.url" :target="social.target">
              <div class="will-animate">
                <img class="will-animate mx-auto" height="100px" width="100px" :src="social.icon" :alt="social.name" ></img>
                <p class="will-animate">{{ social.name }}</p>
              </div>
            </a>
        </div>
  </div>
</section>
</template>
<script setup lang="ts">
import siteMeta from '~/siteMeta';
</script>