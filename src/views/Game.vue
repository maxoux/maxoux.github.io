<script setup lang="ts">
  import ActionLayout from '../components/layouts/ActionLayout.vue';
</script>

<template>
  <ActionLayout>
    <template v-slot:top>
      <div class="top">
        <h1>Page Game</h1>
      </div>
    </template>
    <template v-slot:bottom>
      <div class="bottom">
        <h1>Mes action</h1>
        <h1>Mes action</h1>
        <h1>Mes action</h1>
        <h1>Mes action</h1>
        <h1>Mes action</h1>
        <h1>Mes action</h1>
        <h1>Mes action</h1>
        <h1>Mes action</h1>
        <h1>Mes action</h1>
        <h1>Mes action</h1>
      </div>
    </template>
  </ActionLayout>
</template>

<style scoped>
  .bottom {
    flex-grow: 2;
  }
</style>
