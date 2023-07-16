<template>
    <div class="filters-container">
        <form @submit.prevent="onSubmit">
            <div class="input-container">
                <div class="inputs-text">
                    <Autocomplete  :key="formKey" labelText='Continent' :options="continents" @selectOption="selectContinent"/>
                    <Autocomplete  :key="formKey" labelText='Country' :options="countries" @selectOption="selectCountry"/>
                </div>
                <div class="inputs-number">
                    <div>
                        <label class="filterLabel" for="to">Population:</label>
                        <input id="to" class="search-input" type="number" v-model="filterData.populationFrom" placeholder="From">
                    </div>
                    <div>
                        <label class="filterLabel" for="from" style="visibility: hidden"></label>
                        <input id="from" class="search-input" type="number" v-model="filterData.populationTo" placeholder="To">
                    </div>
                </div>
            </div>
            <input type="submit" value="Search" class="searchBtn">
        </form>
    </div>
</template>

<script>
import Autocomplete from './Autocomplete.vue';

export default {
    name: 'Filters',
    components: { Autocomplete },
    data() {
        return {
            continents: ['Australia','North America','Europe','Asia','Africa','South America'],
            countries: ['Australia','USA','Spain','Russia','Japan','Nigeria','Brazil','Germany'],
            filterData: {
                continent: '',
                country: '',
                populationFrom: null,
                populationTo: null
            },
            formKey: 0
        }
    },
    methods: {
            selectContinent(option) {
                this.filterData.continent = option
            },
            selectCountry(option) {
                this.filterData.country = option
            },
            onSubmit() {
                this.$emit('filterData', this.filterData)
                // passing increment formKey to Autocomplete component after subbmitting to make sure it re-renders
                this.formKey += 1
                this.resetInputValue();
            },
            resetInputValue() {
                this.filterData.continent = '';
                this.filterData.country = '';
                this.filterData.populationFrom = null;
                this.filterData.populationTo = null;
        }

    },
    watch: {
        // prevents population To to exceed 50 millions
        'filterData.populationTo'(newValue) {
            const maxPopulation = 50000000;
            if (newValue > maxPopulation) {
                this.filterData.populationTo = maxPopulation;
            }
        }

    }
}
</script>

<style lang="scss" >
.filters-container {
    height: fit-content;
    padding: 10px;
    background-color: #fff;
    width: 100%;
    .input-container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        .inputs {
            &-text {
                display: flex;
                flex-direction: row;
            }
            &-number {
                display: flex;
                flex-direction: row;
            }
        }
    }
}
@media (max-width: 1000px) {
    .filters-container {
        .input-container {
                .inputs {
                    &-text {
                        display: flex;
                        flex-direction: column;
                    }
                    &-number {
                        display: flex;
                        flex-direction: column;
                    }
            }
        }
    }
}
@media (max-width: 500px) {
    .filters-container {
        .input-container {
            flex-direction: column;
            align-items: center;
        }
    }
}

.filterLabel {
    font-size: large;
    margin-left: 7px;
}
.options {
    list-style-type: none;
    display: block;
    width: 95%;
    padding: 5px;
    background-color: #ffffff;
    position: absolute;
    width: 250px;
    z-index: 100;
    border-radius: 10px;
    li {
      cursor: pointer;
      padding: 3px 0 3px 10px;
      &:hover {
          background-color: #1c1b2997;
      }
    }
}

.search-input {
    display: block;
    height: 44px;
    border-radius: 25px;
    border: 2px solid #1c1b29;
    padding: 5px 7px;
    font-size: 17px;
    padding-left: 15px;
    margin: 0 5px 0 5px;
    &:focus {
        outline: none !important;
        border: 2px solid #076a8b;
        box-shadow: 0 0 10px #719ECE;
    }
}
.searchBtn {
    height: 42px;
    width: 18%;
    font-size: 17px;
    background-color: #1c1b29;
    border: none;
    border-radius: 20px;
    color: #fff;
    display: block;
    font-weight: 500;
    cursor: pointer;
    margin: 20px auto;
    letter-spacing: 1px;
    min-width: 120px;
}
</style>