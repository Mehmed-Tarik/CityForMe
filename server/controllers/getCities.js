const path = require('path')
const { promisify } = require('util')
const fs = require("fs")
const readFileAsync = promisify(fs.readFile)

// function for returning all cities 
async function getCities(req, res) {
    try {
    const parentDir = path.join(__dirname, '..','/models');
    const data = await readFileAsync(path.join(parentDir, 'cities.json'), 'utf8');
    const cities = JSON.parse(data);

    res.status(200).send(cities)

    } catch (error) {
      console.log(error)
      res.status(500).send('Internal Server Error');
    }
}


module.exports = { getCities } 