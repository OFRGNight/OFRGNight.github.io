<script setup lang="ts">
import siteMeta from '~/siteMeta';

</script>

<template>
  <section id="about">
  <div class="container">
    <h2 class="will-animate title">Sobre</h2>
    <br>
    <p class="will-animate" >{{ siteMeta.about }}</p>
    <br>
    <a class="will-animate button active:scale-95" href="#socials">FALE CONOSCO</a>
  </div>
</section>
</template>