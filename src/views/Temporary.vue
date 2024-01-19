<script setup lang="ts">
  import { ref } from 'vue';
  import BasicLayout from '../components/layouts/BasicLayout.vue';

  const location = ref(window.location.href);
</script>

<template>
  <BasicLayout>
    <h1>Temporary page</h1>

    <div class="content">
      <p>Location: {{ location }}</p>
    </div>
  </BasicLayout>
</template>

<style lang="scss" scoped>
  .content {
    text-align: left;
  }
</style>
