<script lang="ts" setup>
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  import { TIconId } from '../../utils/icons';

  type ButtonProps =
    | {
        text: string;
        icon?: TIconId;
        square?: never;
      }
    | {
        text?: never;
        icon: TIconId;
        square: true;
      };

  defineProps<ButtonProps>();

  defineEmits(['onClick']);
</script>

<template>
  <button @onClick="$emit('onClick')" :class="{ square, button: true }">
    {{ text }}
    <FontAwesomeIcon v-if="icon" :icon="icon" />
    <FontAwesomeIcon v-else icon="cog" />
  </button>
</template>

<style lang="scss" scoped>
  button {
    color: white;
    padding: 15px 10px;

    background: rgba(255, 255, 255, 0.04);
    border-radius: 5px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(1px);
    -webkit-backdrop-filter: blur(1px);
    border: 1px solid rgba(255, 255, 255, 0.53);
    transition: all 0.2s;

    &:hover {
      background: rgba(179, 180, 218, 0.29);
      border: 1px solid rgb(186, 188, 228);
      color: rgba(179, 180, 218, 1);
    }

    &:active {
      transition: color 0.1s;
      color: white;
    }

    &.square {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 64px;
      aspect-ratio: 1;

      svg {
        margin: 0;
        font-size: 25px;
      }
    }

    svg {
      font-size: 20px;
      margin-left: 5px;
    }
  }
</style>
