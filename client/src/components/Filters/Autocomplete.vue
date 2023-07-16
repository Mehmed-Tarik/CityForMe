<template>
    <!-- :key="key" prop makes sure component re-renders after the form is submitted -->
    <div :key="key">
        <label class="filterLabel" :for="labelText">{{`${labelText}:`}}</label>
        <input :id="labelText" class="search-input" v-model="inputValue" @input="filterOptions" :placeholder="`Search for ${labelText}`">
            <ul class="options" v-if="filteredOptions.length > 0 && inputValue !== ''">
                <li v-for="option in filteredOptions" :key="option" @click="selectOption(option)">{{ option }}</li>
            </ul>
    </div>
</template>

<script>
export default {
    name: 'FilterInput',
    props: {
        labelText: String,
        options: Array,
        key: Number
    },
    data() {
        return {
            inputValue: '',
            filteredOptions: []
        }
    },
    watch: {
        // After form submits restes input's value
        resetInput(newVal) {
        if (newVal) {
            this.inputValue = '';
            this.filteredOptions = [];
        }
        },
    },
    methods: {
        selectOption(option) {
            this.$emit('selectOption',option)
            this.inputValue = option
            this.filteredOptions = []
        }
    },
    computed: {
        filterOptions() {
            this.filteredOptions = this.options.filter(option => option.toLowerCase().includes(this.inputValue.toLowerCase()));
        }
    }
}
</script>