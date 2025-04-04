<template>
  <section id="team" class="px-0 py-[50px]">
    <div class="container mx-auto my-0 px-5 py-0">
      <h2 class="will-animate title text-[2rem]">Conheça nossa equipe</h2>
      <br />
      <div class="teamMembers flex flex-row justify-center gap-[50px]">
        <div
          v-for="member in siteMeta.team"
          :key="member.name"
          class="will-animate memberCard transition-all duration-[0.3s] ease-[ease] hover:scale-[1.15] focus:scale-[1.15]">
          <img
            class="will-animate avatar mx-auto object-cover aspect-[1] max-w-full shadow-[0.25rem_0.25rem_0.5rem_rgba(0,0,0,0.233)] mb-5 rounded-[100vw] border-[5px] border-solid border-white"
            :src="member.image"
            :alt="member.name" />
          <h3 class="will-animate name text-[#333333]">{{ member.name }}</h3>
          <p class="will-animate role text-[#777777]">{{ member.role }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import siteMeta from "~/siteMeta";
</script>
