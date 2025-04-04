<template>
  <section id="socials" class="bg-[#222222] text-[#f4f4f4] px-0 py-[50px]">
    <div class="container mx-auto my-0 px-5 py-0">
      <h2 class="will-animate title text-[2rem]">Nossas redes</h2>
      <br />
      <div
        class="socialIcons flex justify-center flex-row text-center gap-[50px]">
        <a
          v-for="social in siteMeta.socials"
          :key="social.url"
          class="socialIcon transition-all duration-[0.3s] ease-[ease] hover:scale-[1.15] focus:scale-[1.15] active:scale-95 no-underline text-inherit p-[15px]"
          :href="social.url"
          :target="social.target">
          <div class="will-animate">
            <Icon :name="social.icon" size="100px" class="max-w-full" />
            <p class="will-animate">{{ social.name }}</p>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import siteMeta from "~/siteMeta";
</script>
