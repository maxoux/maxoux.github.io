<script setup lang="ts"></script>

<template>
  <div class="basic_layout">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
  .basic_layout {
    max-width: 1280px;
    padding: 2rem;
    width: 100%;
  }
</style>
