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
        let {row_id, description} = req.body
        console.log(req.body)
        dbInstance.updateRowById([row_id, description]).then(response => {
            dbInstance.getTableData().then(response => {
                res.status(200).send(response)
            })
        })
    },
}