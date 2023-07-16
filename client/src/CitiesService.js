import axios from 'axios'

const url = 'http://localhost:3000/api/cities/'

class CitiesService {
    // retrieve all cities
    static async getCities() {
        const response = await axios.get(url)
        return response.data
    }
    // retrieve cities based on user input
    static async getFilteredCities(continent,country,populationFrom,populationTo) {
        if(continent === '') continent = 'none'
        if(country === '') country = 'none'
        if(populationFrom === '') populationFrom = null
        if(populationTo === '') populationTo = null

        const response = await axios.get(`${url}/filters/${continent}/${country}/${populationFrom}/${populationTo}`)
        return response.data
    }
}

export default CitiesService