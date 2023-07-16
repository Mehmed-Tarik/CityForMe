<template>
  <div class="home">
    <h2><i>{{landingMsg}}</i></h2>
    <Filters @filterData="filterData" />
    <CityCards :cities="cities" />
  </div>
</template>

<script>
import CitiesService from '@/CitiesService'
import CityCards from '@/components/CityCards/CityCards.vue'
import Filters from '@/components/Filters/Filters.vue'

export default {
  name: 'HomeView',
  components: {
    CityCards, Filters
  },
  data() {
    return {
      landingMsg: 'Find your Dream City',
      cities: [],
      error: '',
    }
  },
  async created() {
    // retrieve all cities as soon as component mounts
    try {
      this.cities = await CitiesService.getCities()
      this.cities = [...this.cities.cities]
    } catch(err) {
      this.error = err.message
    }
  },
  methods: {
    // retrieve filtered cities when user submits a form
    async filterData(filterData) {
      try {
        this.cities = await CitiesService.getFilteredCities(filterData.continent,filterData.country,filterData.populationFrom,filterData.populationTo)
        this.cities = [...this.cities.cities]
      } catch(err) {
        this.error = err.message
      }
    } 
  }
}
</script>

<style lang="scss" scoped>
.home {
  h2 {
    text-align: center;
    margin-bottom: 20px;
    letter-spacing: 0.4px;
    margin: 15px 0 10px 0;
    font-size: 28px;
    color: #1c1b29;
  }
}
</style>
