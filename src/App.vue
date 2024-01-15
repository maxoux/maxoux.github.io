<script setup lang="ts">
  import DebugWidget from './components/DebugWidget.vue';
</script>

<template>
  <header class="header">
    <DebugWidget></DebugWidget>
  </header>

  <RouterView></RouterView>

  <p>Footer</p>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
    <p>coucou</p>
    <p>coucou</p>
    <p>coucou</p>
    <p>coucou</p>
    <p>coucou</p>
    <p>coucou</p>
    <p>coucou</p>
    <p>coucou</p>
    <p>coucou</p>
    <p>coucou</p>
    <p>coucou</p>
    <p>coucou</p>
    <p>coucou</p>
    <p>coucou</p>
    <p>coucou</p>
    <p>coucou</p>
    <p>coucou</p>
    <p>coucou</p>
    <p>coucou</p>
    <p>coucou</p>
    <p>coucou</p>
    <p>coucou</p>
    <p>coucou</p>
    <p>coucou</p>
    <p>coucou</p>
  </div>
</template>

<style lang="scss" scoped>
  .header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 10vh;
    backdrop-filter: blur(2px);

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      /* background: linear-gradient(to bottom, black 95%, transparent); */
      background-color: black;
      filter: drop-shadow(0 0 2em black);
      opacity: 0.5;
    }
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
  }
</style>
