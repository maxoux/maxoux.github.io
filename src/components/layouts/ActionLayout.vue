<script setup lang="ts"></script>

<template>
  <div class="layout">
    <div class="container_text">
      <slot name="top"></slot>
    </div>
    <div class="container_actions">
      <slot name="bottom"></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .layout {
    display: flex;
    flex-direction: column;
    height: calc(100% - 60px);
    margin-top: 60px;
    width: 100%;
    gap: 20px;
  }
  .container_text,
  .container_actions {
    flex-grow: 1;
    position: relative;

    &::before {
      background-color: darkgray;
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0.2;
      border-radius: 3px;
    }
  }
  .container_actions {
  }
</style>
