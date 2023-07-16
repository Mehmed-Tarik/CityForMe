<template>
    <div class="card-container">
        <div v-for="city in cities" :key="city.name">
            <CityCard :city="city" />
        </div>
    </div>
</template>

<script>
import CityCard from './CityCard.vue'
export default {
    name: 'CityCards',
    components: { CityCard },
    props: {
        cities: Array
    }
}
</script>

<style lang="scss" scoped>
.card-container {
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(300px,1fr));
    padding: 20px;
    grid-gap: 40px;
    width: 90%;
    margin: auto;
}
</style>