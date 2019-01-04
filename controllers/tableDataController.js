module.exports = {
    getTableData: (req, res) => {
        const dbInstance = req.app.get('db')
        dbInstance.getTableData().then(response => {
            res.status(200).send(response)
        }).catch(err => {
            res.send(err)
            console.log(err)
        })
    },
    updateDesc: (req, res) => {
        const dbInstance = req.app.get('db')
        let {row_id, description} = req.body
        dbInstance.updateRowById([row_id, description]).then(response => {
            dbInstance.getTableData().then(response => {
                res.status(200).send(response)
            }).catch(err => {
                res.send(err)
                console.log(err)
            })
        })
    },
    sortDataByName: (req, res) => {
        const dbInstance = req.app.get('db')
        let {sortBy} = req.body

        if(sortBy === 'ASC'){
            dbInstance.sortNameAsc().then(response => {
                res.status(200).send(response)
            }).catch(err => {
                res.send(err)
                console.log(err)
            })
        } else{
            dbInstance.sortNameDesc().then(response => {
                res.status(200).send(response)
            }).catch(err => {
                res.send(err)
                console.log(err)
            })
        }
    },
    sortDataByDate: (req, res) => {
        const dbInstance = req.app.get('db')
        let {sortBy} = req.body
        
        if(sortBy === 'ASC'){
            dbInstance.sortDateAsc().then(response => {
                res.status(200).send(response)
            }).catch(err => {
                res.send(err)
                console.log(err)
            })
        } else{
            dbInstance.sortDateDesc().then(response => {
                res.status(200).send(response)
            }).catch(err => {
                res.send(err)
                console.log(err)
            })
        }
    },
    sortDataByAmount: (req, res) => {
        const dbInstance = req.app.get('db')
        let {sortBy} = req.body
    
        if(sortBy === 'ASC'){
            dbInstance.sortAmountAsc().then(response => {
                res.status(200).send(response)
            }).catch(err => {
                res.send(err)
                console.log(err)
            })
        } else{
            dbInstance.sortAmountDesc().then(response => {
                res.status(200).send(response)
            }).catch(err => {
                res.send(err)
                console.log(err)
            })
        }
    },
    filterByDate: (req, res) => { 
        const dbInstance = req.app.get('db')
        let {timeFrame} = req.body
        let filterParam = ''
        
        if(timeFrame === 'day'){
            filterParam = '24 hours'
        }else if(timeFrame === 'week'){
            filterParam = '7 days'
        }else{
            filterParam = '30 days'
        }

        console.log('the timeFrame', filterParam)
        dbInstance.filterByDate([filterParam]).then(response => {
            res.status(200).send(response)
            }).catch(err => {
                res.send(err)
                console.log(err)
            })
        
    },
    toggleMarkImportant: (req, res) => {
        const dbInstance = req.app.get('db')
        let {row_id, bool} = req.body
        console.log('that log though', row_id, bool)
        dbInstance.markImportant([row_id, bool]).then(response => {
            res.status(200).send(response)
        }).catch(err => {
            res.send(err)
            console.log(err)
        })
    
    },
    deleteRow: (req, res) => {

    },
    addRow: (req, res) => {

    }       
}