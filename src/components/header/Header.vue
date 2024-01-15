<script setup lang="ts">
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  import DebugWidget from './DebugWidget.vue';
</script>

<template>
  <div class="header">
    <div class="left">
      <RouterLink to="/" class="link"> Matthieu Laizé </RouterLink>
    </div>
    <div class="right">
      <RouterLink to="/" class="link">
        <FontAwesomeIcon icon="fas fa-house"></FontAwesomeIcon>
      </RouterLink>
      <RouterLink to="/game" class="link">
        <FontAwesomeIcon icon="fas fa-gamepad"></FontAwesomeIcon>
      </RouterLink>
      <DebugWidget></DebugWidget>
    </div>
  </div>
</template>

<style lang="scss">
  .header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    backdrop-filter: blur(2px);
    display: flex;
    justify-content: space-between;

    .left {
      color: white;
      margin-left: 20px;
    }

    .left,
    .right {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      height: 100%;

      & > * {
        z-index: 15;
        margin-right: 20px;
        font-size: 25px;
        color: white;
        opacity: 0.8;
        transition: all 0.2s;

        &:hover {
          opacity: 1;
        }
      }
    }

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
      z-index: -10;
    }
  }
</style>
