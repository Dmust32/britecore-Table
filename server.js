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

// Sort Endpoints
app.post('/api/sortData-name', tableController.sortDataByName)
app.post('/api/sortData-date', tableController.sortDataByDate)
app.post('/api/sortData-amount', tableController.sortDataByAmount)

// Crud
app.post('/api/newRow', tableController.addRow)
app.get('/api/get-table-data', tableController.getTableData)
app.put('/api/updateDesc', tableController.updateDesc)
app.delete('/api/deleteRow', tableController.deleteRow)

// Filter
app.post('/api/filter-by-date', tableController.filterByDate)

// MISC
app.post('/api/important', tableController.toggleMarkImportant)

app.listen(port, () => {
    console.log('Getting dirty on port', port )
})