<script setup lang="ts">
import siteMeta from "~/siteMeta";
</script>

<template>
  <section id="about" class="bg-[#d50024] text-white px-0 py-[50px]">
    <div class="container mx-auto my-0 px-5 py-0">
      <h2 class="will-animate title text-[2rem]">Sobre</h2>
      <br />
      <p class="will-animate">{{ siteMeta.about }}</p>
      <br />
      <a
        class="will-animate button bg-[#f4f4f4] text-black font-semibold hover:bg-[#d2d2d2] active:bg-white text-[1.2rem] cursor-pointer px-5 py-2.5 rounded-[300px] border-[none] hover:scale-105 active:scale-95"
        href="#socials"
        >FALE CONOSCO</a
      >
    </div>
  </section>
</template>
