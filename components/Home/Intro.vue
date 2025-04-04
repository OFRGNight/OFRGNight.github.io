<script setup lang="ts">
import siteMeta from "~/siteMeta";
</script>

<template>
  <section
    id="intro"
    class="h-screen grid items-center text-white bg-[url('/images/header.webp')] bg-no-repeat bg-cover bg-center">
    <div class="container mx-auto my-0 px-5 py-0">
      <h1 class="will-animate text-5xl mb-5 font-bold">
        {{ siteMeta.slogan }}
      </h1>
      <p class="will-animate tagLine text-2xl mb-5 text-[#ffffffb3]">
        {{ siteMeta.tagLine }}
      </p>
      <br />
      <a
        class="will-animate button text-[1.2rem] text-[white] cursor-pointer font-semibold bg-[#d50024] px-5 py-2.5 rounded-[300px] border-[none] hover:bg-[#b7001e] hover:scale-105 active:bg-[#ef0028] active:scale-95"
        href="#about"
        >SAIBA MAIS</a
      >
    </div>
  </section>
</template>
