<script lang="tsx" setup>
  import { IExperience, experienceList } from '../../data/experiences';
  import ExperienceCard from './ExperienceCard.vue';
</script>

<template>
  <section class="experience_section">
    <h1>Experiences</h1>
    <div
      v-for="(_, i) in [, , , , , , , , , , , , , , ,]"
      :style="`left: ${(i * 20) % 100}% ;margin-top: ${i * 300}px`"
      class="ball"
    ></div>
    <div class="list_container">
      <ExperienceCard
        v-for="experience in experienceList as IExperience[]"
        icon="cog"
        :experience="experience"
      ></ExperienceCard>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .ball {
    position: absolute;
    left: 50%;
    background-color: red;
    top: 0;
    width: 100px;
    height: 100px;
    z-index: -20;
    border-radius: 100%;

    @keyframes moveball {
      0% {
        top: 0%;
      }
      50% {
        top: 50%;
      }
      100% {
        top: 0%;
      }
    }
    animation: moveball forwards 10s infinite;
    animation-timing-function: ease-in-out;
    transform: translateY(-1500px);
  }
  .experience_section {
    padding-bottom: 60px;
    text-align: left;
    position: relative;

    .list_container {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      gap: 60px;
      padding: 30px;
    }
  }
</style>
