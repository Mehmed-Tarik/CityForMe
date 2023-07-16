const express = require("express") 
const bodyParser = require("body-parser") 
const cors = require("cors") 

const app = express() 

app.use(bodyParser.json()) 
app.use(cors()) 

const cities = require('./routes/api/cities')

app.use('/api/cities', cities)

const port = process.env.PORT || 3000

app.listen(port, () => console.log(`Server started on port ${port}`))