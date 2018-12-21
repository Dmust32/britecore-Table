const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const massive = require('massive')
const tableController = require('./controllers/tableDataController')

require('dotenv').config()

const app = express()
const port = 5050

app.use(bodyParser.json());
app.use(cors());

massive(process.env.CONNECTION_STRING).then(db=> {
    app.set('db', db)
}).catch(err => {
    console.error(err);
})

// Endpoints
app.get('/api/get-table-data', tableController.getTableData)
app.put('/api/updateDesc', tableController.updateDesc)
app.post('/api/sortData', tableController.sortData)

app.listen(port, () => {
    console.log('Getting dirty on port', port )
})