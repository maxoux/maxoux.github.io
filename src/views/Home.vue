<script setup lang="ts">
  import BasicLayout from '../components/layouts/BasicLayout.vue';
  import ExtendedLayout from '../components/layouts/ExtendedLayout.vue';
  import DescriptionSection from '../components/homepage/DescriptionSection.vue';
  import SkillSection from '../components/homepage/SkillSection.vue';
  import ExperienceSection from '../components/homepage/ExperienceSection.vue';

  const links = [
    { path: '/about', title: 'Presentation' },
    { path: '/skill', title: 'My skills' },
    { path: '/experience', title: 'My experiences' },
    { path: '/game', title: 'Go to an adventure' },
  ];
</script>

<template>
  <div class="page">
    <ExtendedLayout>
      <h1 class="hello">Hello;World</h1>
      <div class="interactive_home">
        <ul>
          <li v-for="link in links" class="link">
            <RouterLink :to="link.path">{{ link.title }}</RouterLink>
          </li>
        </ul>
      </div>
    </ExtendedLayout>
    <BasicLayout>
      <DescriptionSection></DescriptionSection>
    </BasicLayout>
    <ExtendedLayout>
      <SkillSection></SkillSection>
    </ExtendedLayout>
    <BasicLayout>
      <section class="sector basic sector_3">
        <ExperienceSection></ExperienceSection>
      </section>
    </BasicLayout>
  </div>
</template>

<style lang="scss">
  .page {
    margin-top: 90px;

    h1 {
      padding-bottom: 10px;
      margin-bottom: 30px;
      border-bottom: 2px solid white;
      text-align: center;
      max-width: 1280px;
    }
  }
  .hello {
    max-width: 80%;
    margin: 10px auto 30px;
  }
  .interactive_home {
    text-align: left;
    font-size: 20px;
    font-weight: 600;
    height: 500px;
    background-color: #141414;
    padding: 30px 30px;
    .link {
      margin-bottom: 8px;
    }
  }

  section {
    min-height: 500px;
  }

  .basic_layout {
    text-align: left;
  }

  .extended_layout {
    background-color: #343434 !important;

    h1 {
      padding: 15px 0 0 15px;
      border: unset;
      text-align: left;
    }
  }
</style>
