module.exports = {
    getTableData: (req, res) => {
        const dbInstance = req.app.get('db')
        dbInstance.getTableData().then(response => {
            res.status(200).send(response)
        }).catch(err => {
            console.log(err)
        })
    },
    updateDesc: (req, res) => {
        const dbInstance = req.app.get('db')
        let {rowId, description} = req.body

        dbInstance.updateRowById([rowId, description]).then(response => {
            res.status(200).send(response)
        })
    },
}