<script lang="ts" setup>
  import { groupBy } from 'lodash';
  import SkillCard from './SkillCard.vue';
  import { skillList, CategoryList, ICategory } from '../../data/skills';

  const skillByGroup = groupBy(
    skillList.sort((a, b) => b.level - a.level),
    (skill) => skill.category,
  );
</script>

<template>
  <section class="skill_section">
    <h1>Skills</h1>
    <div class="list_container">
      <SkillCard
        v-for="category in CategoryList as ICategory[]"
        :icon="category.icon || 'cog'"
        :category="category"
        :skills="skillByGroup[category.id]"
      ></SkillCard>
      <!-- <span v-for="skill in skillList">
        <p>{{ skill.id }}</p>
        <img style="height: 88px; width: 88px" :src="skill.icon" />
      </span> -->
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
