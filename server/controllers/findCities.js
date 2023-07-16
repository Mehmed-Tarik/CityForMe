const path = require('path')
const { promisify } = require('util')
const fs = require("fs")
const readFileAsync = promisify(fs.readFile)

//function for returning filtered cities based on user inputs
async function findCities(req,res) {
    try {
        const country = req.params.country;
        const continent = req.params.continent;
        const populationFrom = req.params.populationFrom;
        const populationTo = req.params.populationTo;

        const parentDir = path.join(__dirname, '..','/models');
        const data = await readFileAsync(path.join(parentDir, 'cities.json'), 'utf8');
        const cities = JSON.parse(data);
        
        let citiesArray = cities.cities

        // Filter by continent
        if (continent !== 'none') {
            citiesArray = citiesArray.filter(city => city.continent === continent);
        }

        // Filter by country
        if (country !== 'none') {
            citiesArray = citiesArray.filter(city => city.country === country);
        }
      
        // Filter by population
        if (populationFrom !== 'null' && populationTo !== 'null') {
            citiesArray = citiesArray.filter(city => parseInt(city.population) >= parseInt(populationFrom) && parseInt(city.population) <= parseInt(populationTo));
        }
        if (populationFrom !== 'null' && populationTo === 'null') {
            citiesArray = citiesArray.filter(city => parseInt(city.population) >= parseInt(populationFrom));
        }
        if (populationFrom === 'null' && populationTo !== 'null') {
            citiesArray = citiesArray.filter(city => parseInt(city.population) <= parseInt(populationTo));
        }

        res.status(200).send(citiesArray);

    } catch (error) {
        console.log(error);
        res.status(500).send('Internal Server Error');
    }
}

module.exports = { findCities }