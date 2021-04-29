<template>
  <v-container v-if='!loading'>
    <DataTitle :text="title" :dataDate="dataData"/>
    <data-box :stats='stats'></data-box>

    <country-select v-on:get-country='getCountryData()' :countries="countries"></country-select>
  </v-container>
  <main class="d-flex flex-column align-center justify-center" v-else>
    <div class="mt-10 mb-6  grey--text">
      <span class="display-2">Fetching data</span>
    </div>
    <img :src="loadingImage"  alt="Covid Loading">
  </main>
</template>

<script>
import CountrySelect from '../components/CountrySelect.vue';
import DataBox from '../components/DataBox.vue';
import DataTitle from '../components/DataTitle.vue';


export default {
  name: 'Home',
  components: {DataTitle, DataBox, CountrySelect},
  data(){
    return{
      loading: true,
      title: 'Global',
      dataData: '',
      stats: {},
      countries: [],
      loadingImage: require('../assets/loadingGif/Coronavirus.gif')
    }
  },
  methods:{
   async fetchCovidData() {
      const res = await fetch('https://api.covid19api.com/summary');
      const data = await res.json();
      return data;
      // console.log(data.Countries);
    },
    getCountryData(country) {
      // console.log(country.Country);
      this.title = country.CountryCode

    },
  },
  async created(){
    const data = await this.fetchCovidData();
    this.dataData = data.Date.ist;
    this.stats = data.Global;
    this.countries = data.Countries;
    this.loading = false;
  }
}
</script>
