const express = require("express") 
const { getCities } = require('../../controllers/getCities')
const { findCities } = require('../../controllers/findCities')

const router = express.Router()

// return all cities
router.get('/', getCities)
// return filtered cities based on user inputs
router.get('/filters/:continent/:country/:populationFrom/:populationTo', findCities);

module.exports = router