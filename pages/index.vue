<template>
  <div class="bg-primary-100 text-white container md:py-20 py-10 px-4 font-sans">
    <h1 class="text-4xl font-bold">Load Profiles</h1>

    <div class="flex mt-5">
      <div class="bg-white rounded-lg text-black w-85 mr-2 pb-10">
        <h2 class="uppercase text-xs text-primary-300 bg-primary-500 rounded-t-lg font-bold py-4 px-5">Profiles</h2>

        <div v-for="(profile, index) in profiles" :key="index" class="py-4 px-5 border-b hover:bg-primary-400 cursor-pointer">
          <h3 class="text-primary-200 text-lg font-bold">{{ profile.name }}</h3>
          <p class="text-lg font-light">{{ profile.value }} MWh</p>
        </div>
      </div>
      <div class="bg-white text-black flex-1 rounded-lg p-5">
        Test {{ authors }}
      </div>
    </div>
  </div>
</template>

<script>
import profiles from '~/static/load-profiles.json';

export default {
  name: 'IndexPage',
  asyncData ({ params }) {
    return { profiles };
  }
};
</script>
