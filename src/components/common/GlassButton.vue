<script lang="ts" setup>
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  import { TIconId } from '../../utils/icons';

  defineProps<{
    text: string;
    icon?: TIconId;
  }>();

  defineEmits(['onClick']);
</script>

<template>
  <button @onClick="$emit('onClick')">
    {{ text }}
    <FontAwesomeIcon v-if="icon" :icon="icon" />
    <FontAwesomeIcon v-else icon="cog" />
  </button>
</template>

<style lang="scss" scoped>
  button {
    background-color: transparent;
    color: white;
    border: 1px solid white;
    border-radius: 5px;
    padding: 15px 10px;

    svg {
      font-size: 20px;
      margin-left: 5px;
    }
  }
</style>
