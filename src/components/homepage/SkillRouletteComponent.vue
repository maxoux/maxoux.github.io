<script lang="ts" setup>
  import { ref, watch } from 'vue';
  import { ISkill } from '../../data/skills';

  const props = defineProps<{
    skill: ISkill;
    reverse?: boolean;
  }>();

  const actualSkill = ref<ISkill>(props.skill);

  watch(
    () => props.skill,
    (newValue) => {
      actualSkill.value = newValue;
    },
  );
</script>

<template>
  <div class="container">
    <Transition mode="out-in" :name="reverse ? 'fade-reverse' : 'fade'">
      <div class="skill_show_container" :key="actualSkill.id">
        <img :src="actualSkill.icon" />
        <h3>{{ actualSkill.name }}</h3>
        <ul class="score">
          <FontAwesomeIcon
            :icon="actualSkill.love ? 'heart' : 'star'"
            v-for="(_, index) in [, , , , ,]"
            :class="{ enabled: actualSkill.level > index, love: actualSkill.love }"
          />
        </ul>
      </div>
    </Transition>
  </div>
</template>

<style lang="scss">
  .fade-enter-active {
    animation: fade-in 0.5s;
  }
  .fade-leave-active {
    animation: fade-out 0.5s;
  }
  .fade-reverse-enter-active {
    animation: fade-reverse-in 0.5s;
  }
  .fade-reverse-leave-active {
    animation: fade-reverse-out 0.5s;
  }
  @keyframes fade-in {
    0% {
      transform: translateY(30%);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
  @keyframes fade-out {
    0% {
      transform: translateY(0);
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: translateY(-30%);
    }
  }
  @keyframes fade-reverse-in {
    0% {
      transform: translateY(-30%);
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
  @keyframes fade-reverse-out {
    0% {
      transform: translateY(0);
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: translateY(30%);
    }
  }
  .skill_show_container {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    img {
      aspect-ratio: 1;
      width: 70%;
      max-width: 85px;
      object-fit: contain;
      margin-bottom: 10px;
    }

    .score > * {
      color: grey;
      &.enabled {
        color: yellow;
      }
      &.love {
        color: darkred;
      }
    }
  }
</style>
