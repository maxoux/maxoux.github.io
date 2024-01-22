<script lang="ts" setup>
  import { onMounted, onUnmounted, ref, defineProps, computed } from 'vue';
  import { ISkill, ICategory } from '../../data/skills.ts';
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
  import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

  let timerInterval: NodeJS.Timeout | null = null;
  const skillIndex = ref<number>(0);
  const hover = ref<boolean>(false);

  const props = defineProps<{
    icon?: IconDefinition | string | [string, string];
    category: ICategory;
    skills: ISkill[];
  }>();

  onMounted(() => {
    timerInterval = setInterval(() => {
      if (!hover.value) skillIndex.value = (skillIndex.value + 1) % props.skills.length;
    }, 5000);
  });

  onUnmounted(() => {
    if (!timerInterval) return;
    clearInterval(timerInterval);
    timerInterval = null;
  });

  // Preload all images at startup
  const skillImages = computed(() =>
    props.skills.map((skill) => (new Image().src = skill.icon)),
  );
</script>

<template>
  <div class="card" @mouseenter="hover = true" @mouseleave="hover = false">
    <div class="category_icon">
      <FontAwesomeIcon :icon="icon || 'house'"></FontAwesomeIcon>
    </div>
    <h2>{{ category.name }}</h2>
    <div class="description">
      {{ category.description }}
    </div>
    <Transition mode="out-in" name="fade">
      <div class="skill_show_container" :key="skillIndex">
        <img :src="skillImages[skillIndex]" />
        <h3>{{ skills[skillIndex].name }}</h3>
        <ul class="score">
          <FontAwesomeIcon
            icon="star"
            v-for="(_, index) in [, , , , ,]"
            :class="{ enabled: skills[skillIndex].level > index }"
          />
        </ul>
      </div>
    </Transition>
  </div>
</template>

<style lang="scss" scoped>
  $bgColor: rgba(155, 155, 155);
  $iconSize: 20px;
  $iconContainerSize: calc($iconSize + 20px);

  .fade-enter-active {
    animation: fade-in 0.5s;
  }
  .fade-leave-active {
    animation: fade-out 0.5s;
  }
  @keyframes fade-in {
    0% {
      transform: translateX(30%);
      opacity: 0;
    }
    100% {
      transform: translateX(0);
      opacity: 1;
    }
  }
  @keyframes fade-out {
    0% {
      transform: translateX(0);
      opacity: 1;
    }
    100% {
      opacity: 0;
      transform: translateX(-30%);
    }
  }

  .card {
    position: relative;
    aspect-ratio: 1.6;
    width: 80%;
    padding: 20px 30px 15px;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: $iconContainerSize;
    z-index: 1;
    gap: 20px;
    transition: all 0.3s;

    .category_icon {
      position: absolute;
      background-color: $bgColor;
      height: $iconContainerSize;
      width: 60px;
      border-top-left-radius: $iconSize;
      border-top-right-radius: $iconSize;
      top: -30px;
      left: 0%;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: -10;
    }

    h2 {
      position: absolute;
      margin-bottom: 15px;
      top: 15px;
    }

    .description {
      margin-top: 45px;
      flex-grow: 6;
      width: 60%;
    }

    .skill_show_container {
      flex-grow: 4;
      width: 40%;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;

      img {
        aspect-ratio: 1;
        width: 70%;
        object-fit: contain;
        margin-bottom: 10px;
      }

      .score > * {
        color: grey;
        &.enabled {
          color: yellow;
        }
      }
    }

    &:nth-child(2n) {
      flex-direction: row-reverse;
      text-align: right;
    }

    &:before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      width: 100%;
      /* border-radius: 10px; */
      z-index: -1;
      transition: all 0.3s;

      /* From https://css.glass */
      background: rgba(155, 155, 155, 0.6);
      border-radius: 16px;
      border-top-left-radius: 0;
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(5.9px);
      -webkit-backdrop-filter: blur(5.9px);
      border: 1px solid rgba(155, 155, 155, 1);
    }

    &:hover {
      transform: translateY(-3px);
    }
  }
</style>
