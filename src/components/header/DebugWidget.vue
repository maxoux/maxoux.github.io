<script setup lang="ts">
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

  // import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

  import { ref } from 'vue';

  //   defineProps<{ msg: string }>();

  //   const count = ref(0);

  const debugOpened = ref<boolean>(false);

  function toggleOpen(force?: boolean) {
    if (force !== undefined) return (debugOpened.value = force);
    return (debugOpened.value = !debugOpened.value);
  }
</script>

<template>
  <div class="container button">
    <a class="icon" @click="toggleOpen()">
      <FontAwesomeIcon icon="fas fa-gear"></FontAwesomeIcon>
    </a>
    <div class="modal" :class="{ opened: debugOpened }">
      <div>Debug mode</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .icon {
    color: inherit;
    transition: all 0.2s;
    &:hover {
      color: #747bff;
      cursor: pointer;
    }
  }
  .modal {
    position: absolute;
    top: 60px;
    left: 100vw;
    width: calc(100vw - 100px);
    height: calc(100vh - 60px);
    background-color: #a8a8a8;
    opacity: 0.9;
    text-align: left;
    transition: transform 0.3s;
    max-width: 450px;

    &.opened {
      transform: translateX(-100%);
    }
  }
</style>
