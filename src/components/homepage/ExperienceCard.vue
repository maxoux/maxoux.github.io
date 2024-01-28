<script lang="tsx" setup>
  import { IExperience } from '../../data/experiences';
  import { ref } from 'vue';
  import GlassButton from '../common/GlassButton.vue';
  import { TIconId } from '../../utils/icons';

  const hover = ref<boolean>(false);

  const missionType = {
    freelance: 'Freelance',
    stage: 'Stage',
    intern: 'Interne',
  };

  defineProps<{
    icon?: TIconId;
    experience: IExperience;
  }>();
</script>

<template>
  <div class="card" @mouseenter="hover = true" @mouseleave="hover = false">
    <div class="mission_type" :class="`mission_${experience.missionType}`">
      <span>{{ missionType[experience.missionType] }}</span>
    </div>
    <h2 class="company">{{ experience.company || '[NDA]' }}</h2>
    <p class="description">
      {{ experience.description }}
    </p>
    <ul class="bullet_list">
      <li class="bullet_point" v-for="bullet in experience.bulletPoints">
        {{ bullet }}
      </li>
    </ul>
    <ul class="skill_list"></ul>
    <GlassButton class="add_filter" square icon="cart-plus"></GlassButton>
  </div>
</template>

<style lang="scss" scoped>
  $bgColor: rgba(155, 155, 155);
  $iconSize: 20px;
  $iconContainerSize: calc($iconSize + 20px);

  $missionTypeIntern: rgb(0, 0, 90);
  $missionTypeFreelance: rgb(100, 20, 30);
  $missionTypeStage: rgb(0, 56, 0);

  $companyBackground: rgba(92, 101, 122, 0.471);

  .fade-enter-active {
    animation: fade-in 0.5s;
  }
  .fade-leave-active {
    animation: fade-out 0.5s;
  }

  .card {
    position: relative;
    aspect-ratio: 1.6;
    width: 100%;
    padding: 0px 30px 30px;
    z-index: 1;
    transition: all 0.3s;

    .mission_type {
      position: absolute;
      right: 0;
      top: 0;
      height: 200px;
      width: 200px;
      font-weight: 600;
      font-size: 1.4rem;
      display: flex;
      justify-content: center;
      overflow: hidden;
      z-index: 10;

      span {
        position: relative;
        margin-top: 20px;
        transform: rotate(45deg);
        &::before {
          z-index: -2;
          position: absolute;
          content: '';
          width: 400%;
          height: 3rem;
          left: 0;
          top: 0;
          transform: translate(-50%, -15%);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.4);
        }
        &::after {
          z-index: -1;
          position: absolute;
          content: '';
          width: 400%;
          height: 2.5rem;
          left: 0;
          top: 0;
          transform: translate(-50%, -7.5%);
          border: 1px white dashed;
        }
      }

      &.mission_intern > span::before {
        background-color: $missionTypeIntern;
      }
      &.mission_freelance > span::before {
        background-color: $missionTypeFreelance;
      }
      &.mission_stage > span::before {
        background-color: $missionTypeStage;
      }
    }

    .company {
      padding: 20px 30px 10px;
      margin: 0 -30px 30px;
      background: $companyBackground;
      border: 1px solid rgba(155, 155, 155, 1);
      border-radius: 8px 8px 0 0;

      backdrop-filter: blur(5.9px);
      -webkit-backdrop-filter: blur(5.9px);
      border: 1px solid rgba(95, 91, 91, 0.644);
    }

    .description {
      margin-top: 0px;
    }

    .bullet_list {
      max-width: 80%;
    }

    .add_filter {
      position: absolute;
      bottom: 30px;
      right: 30px;
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
      background: rgba(59, 57, 57, 0.68);
      border-radius: 16px;
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
      backdrop-filter: blur(8.1px);
      -webkit-backdrop-filter: blur(8.1px);
      border: 1px solid rgba(143, 135, 135, 0.644);
    }

    &:hover {
      transform: translateY(-3px);
    }
  }
</style>
../../data/experiences
