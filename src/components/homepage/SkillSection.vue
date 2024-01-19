<script lang="ts" setup>
  import { onMounted, onUnmounted, ref } from 'vue';
  import { skillList, CategoryList, ISkill, TCategoryID } from '../../data/skills.ts';
  import { groupBy } from 'lodash';

  let timerInterval: NodeJS.Timeout | null = null;

  const skillByGroup = groupBy(skillList, (skill) => skill.category);
  const indexPerLanguage = ref<{ [key in TCategoryID]: number }>({
    backend: 0,
    frontend: 0,
    'ci/cd': 0,
    js: 0,
    devops: 0,
    software: 0,
    hobby: 0,
  });

  onMounted(() => {
    timerInterval = setInterval(() => {
      const keys = Object.typedKeys(indexPerLanguage.value);
      const indexes = indexPerLanguage.value;

      keys.forEach((key) => {
        const oldIndex = indexes[key];

        if (skillByGroup[key].length > oldIndex + 1) indexPerLanguage.value[key]++;
        else indexPerLanguage.value[key] = 0;
      });
    }, 3000);
  });

  onUnmounted(() => {
    if (!timerInterval) return;
    clearInterval(timerInterval);
    timerInterval = null;
  });
</script>

<template>
  <section class="skill_section">
    <h1>Skills</h1>
    <div class="list_container">
      <div v-for="category in CategoryList" class="card">
        <h2>{{ category.name }}</h2>
        <div class="description">
          {{ category.description }}
        </div>
        <div class="skill_show_container">
          <img src="/vite.svg?url" />
          <h3>{{ skillByGroup[category.id][indexPerLanguage[category.id]].name }}</h3>
        </div>
      </div>
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

    .card {
      position: relative;
      aspect-ratio: 1.6;
      width: 80%;
      padding: 20px 30px 15px;
      z-index: 1;
      display: flex;
      align-items: center;
      justify-content: space-between;

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
        opacity: 0.3;
        background-color: white;
        border-radius: 10px;
        z-index: -1;
      }
    }
  }
</style>
