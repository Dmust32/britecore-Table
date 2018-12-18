const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const massive = require('massive')

require('dotenv').config()

const app = express()
const port = 5050

app.use(bodyParser.json());
app.use(cors());

app.listen(port, () => {
    console.log('Getting dirty on port', port)
})