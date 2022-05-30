<template>
  <div class="bg-primary-100 text-white container md:py-20 py-10 px-4 font-sans">
    <h1 class="text-4xl font-bold">Load Profiles</h1>

    <div class="md:flex mt-5">
      <div class="bg-white rounded-lg text-black w-85 max-w-full md:mr-2 pb-10 md:mb-0 mb-4">
        <h2 class="uppercase text-xs text-primary-300 bg-primary-500 rounded-t-lg font-bold py-4 px-5">Profiles</h2>

        <div v-for="(profile, index) in profiles" :key="index" class="py-4 px-5 border-b hover:bg-primary-400 cursor-pointer" :class="{'bg-primary-400': selectedProfile == profile.name }" @click="selectProfile(profile.name)">
          <h3 class="text-primary-200 text-lg font-bold">{{ profile.name }}</h3>
          <p class="text-lg font-light">{{ profile.value }} MWh</p>
        </div>
      </div>
      <div class="bg-white text-black flex-1 rounded-lg p-5 min-h-85">
        <h2 v-if="selectedProfile" class="text-2xl font-bold text-black mb-4">{{ selectedProfile }}</h2>

        <MyChart v-if="selectedProfile" :key="graphCompKey" :labels="dataLabels" :data-value="dataValues" />
        <div v-else class="flex justify-center items-center text-4xl text-center font-bold h-full">
          <p>Select Profile to display chart</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import profiles from '~/static/load-profiles.json';
import dataset from '~/static/sample-dataset.json';
import helpers from '~/mixins/helpers';

export default {
  name: 'IndexPage',
  mixins: [helpers],
  asyncData ({ params }) {
    return { profiles, dataset };
  },
  data () {
    return {
      selectedProfile: '',
      dataLabels: [],
      dataValues: [],
      graphCompKey: 0
    };
  },
  methods: {
    selectProfile(name) {
      const prevSelected = this.selectedProfile;
      this.selectedProfile = name;

      if(this.dataset.name === name) {
        this.dataLabels = dataset.time_series.x_axis.map(item => {
          return this.NumToTime(item);
        });

        this.dataValues = dataset.time_series.days[0].values;
      } else {
        this.dataLabels = [];
        this.dataValues = [];
      }
      
      if(this.selectedProfile !== prevSelected) {
        this.graphCompKey ++;
      }

    }
  }
};
</script>
