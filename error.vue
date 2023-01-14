<template>
<div class="container">
<h1>OOps, página não encontrada</h1>
<br>
<p><NuxtLink href="/">Clique aqui</NuxtLink> para voltar ao início.</p>
</div>
</template>
<style scoped>
body {
  background-image: url('/images/default.webp');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.container {
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
text-align: center;
flex-direction: column;
background: rgba(0, 0, 0, 0.8);
color: #b5b5b5;
& a {
  color: #007bff;
  text-decoration: none;
  padding: 0;

  &:hover {
    text-decoration: underline;
  }
}
}
</style>