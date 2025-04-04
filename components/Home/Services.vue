<template>
  <section id="services" class="px-0 py-[50px]">
    <div class="container mx-auto my-0 px-5 py-0">
      <h2 class="will-animate title text-[2rem]">Serviços mais comuns</h2>
      <br />
      <div
        class="serviceIcons flex justify-center items-center flex-row gap-[50px]">
        <div
          v-for="service in siteMeta.services"
          :key="service.name"
          class="will-animate serviceIcon transition-all duration-[0.3s] ease-[ease] hover:scale-[1.15] focus:scale-[1.15]">
          <Icon
            :name="service.icon"
            size="100px"
            class="text-red-500 max-w-full mb-5" />
          <h3 class="will-animate">{{ service.name }}</h3>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import siteMeta from "~/siteMeta";
</script>
