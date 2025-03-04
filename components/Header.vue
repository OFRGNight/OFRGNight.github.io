<template>
  <header id="top">
    <a class="logo hover:text-red-500" href="/">{{ siteMeta.siteName }}</a>
    <label id="menuLabel" for="menu"><Icon name="mdi:menu" size="50px" /></label>
    <input type="checkbox" id="menu">
    <nav class="nav">
        <a class="will-animate" href="/#about">SOBRE</a>
        <a class="will-animate" href="/#services">SERVIÇOS</a>
        <a class="will-animate" href="/#location">ONDE ESTAMOS</a>
        <a class="will-animate" href="/#team">EQUIPE</a>
        <a class="will-animate" href="/#socials">CONTATO</a>
    </nav>
  </header>
</template>
<script setup lang="ts">
import siteMeta from '../siteMeta';
</script>