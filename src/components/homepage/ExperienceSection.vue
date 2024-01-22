<script lang="ts" setup>
  import { IExperience, experienceList } from '../../data/experience';
  import ExperienceCard from './ExperienceCard.vue';
</script>

<template>
  <section class="experience_section">
    <h1>Some experiences</h1>
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
  .skill_section {
    padding-bottom: 60px;
    text-align: left;

    .list_container {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      gap: 20px;
      padding: 30px;
    }
  }
</style>
