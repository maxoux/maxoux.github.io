<script setup lang="ts"></script>

<template>
  <div class="layout">
    <div class="container_text">
      <div class="content">
        <slot name="top"></slot>
      </div>
    </div>
    <div class="container_actions">
      <div class="content">
        <slot name="bottom"></slot>
      </div>
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
    position: relative;
    overflow: hidden;
    flex: 1;
    width: 100%;

    & > * {
    }

    &::after {
      background-color: darkgray;
      content: '';
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0.2;
      border-radius: 3px;
    }
  }

  .container_text {
    flex-grow: 20;
  }

  .container_actions {
    flex-grow: 15;
  }

  .content {
    overflow: auto;
    height: 100%;
  }
</style>
