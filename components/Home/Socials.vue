<template>
  <section id="socials">
  <div class="container">
    <h2 class="will-animate title">Nossas redes</h2>
    <br>
        <div class="socialIcons">
            <a v-for="social in siteMeta.socials" :key="social.url" class="socialIcon active:scale-95" :href="social.url" :target="social.target">
              <div class="will-animate">
                <Icon :name="social.icon" size="100px" />
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