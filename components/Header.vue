<template>
  <header id="top" class="grid grid-cols-[1fr_auto] p-2.5 items-center">
    <a
      class="logo hover:text-red-500 font-bold uppercase text-center max-w-[210px] p-1"
      href="/"
      >{{ siteMeta.siteName }}</a
    >
    <label id="menuLabel" class="hidden cursor-pointer font-bold" for="menu"
      ><Icon name="mdi:menu" size="50px"
    /></label>
    <input type="checkbox" id="menu" class="hidden" />
    <nav class="nav transition-all grid-cols-1 p-0">
      <a
        class="will-animate no-underline text-inherit transition-all p-[15px] hover:text-red-500 focus:text-red-500"
        href="/#about"
        >SOBRE</a
      >
      <a
        class="will-animate no-underline text-inherit transition-all p-[15px] hover:text-red-500 focus:text-red-500"
        href="/#services"
        >SERVIÇOS</a
      >
      <a
        class="will-animate no-underline text-inherit transition-all p-[15px] hover:text-red-500 focus:text-red-500"
        href="/#location"
        >ONDE ESTAMOS</a
      >
      <a
        class="will-animate no-underline text-inherit transition-all p-[15px] hover:text-red-500 focus:text-red-500"
        href="/#team"
        >EQUIPE</a
      >
      <a
        class="will-animate no-underline text-inherit transition-all p-[15px] hover:text-red-500 focus:text-red-500"
        href="/#socials"
        >CONTATO</a
      >
    </nav>
  </header>
</template>
<script setup lang="ts">
import siteMeta from "../siteMeta";
</script>

<style scoped>
@media screen and (max-width: 864px) {
  header {
    grid-template-areas: "logo" "nav" !important;
    text-wrap: nowrap !important;
  }
  header .nav {
    grid: auto / 1fr;
    height: 0;
    overflow: hidden;
    grid-column: span 2;
  }
  header #menuLabel {
    display: block;
  }
  #menu:checked + nav {
    height: auto;
  }
}
</style>
