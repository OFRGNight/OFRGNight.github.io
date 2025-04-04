<script setup lang="ts">
import siteMeta from "~/siteMeta";
</script>

<template>
  <section id="location" class="bg-[#222222] text-white px-0 py-[50px]">
    <div class="container mx-auto my-0 px-5 py-0">
      <h2 class="will-animate title text-[2rem]">Onde estamos</h2>
      <br />
      <iframe
        class="will-animate"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.4124692989412!2d-46.393026724889076!3d-23.553625161307675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce6511f7fd3483%3A0x2abeaf5d4fd0fdbf!2sOficina%20RogerNight!5e0!3m2!1spt-BR!2sbr!4v1714504794760!5m2!1spt-BR!2sbr"
        width="100%"
        height="400px"
        allowfullscreen="true"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"></iframe>
      <br />
      <br />
      <p class="will-animate">{{ siteMeta.address }}</p>
    </div>
  </section>
</template>
