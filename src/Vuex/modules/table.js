import axios from 'axios'

const state = {
    tableRows: []
}

const actions = {
    getTableData: ({ commit }) => {
        axios.get('/api/get-table-data').then(res => {
            commit('setTableRows', {tableRows: res.data})
        })
    }
}

const mutations = {
    setTableRows: (state, {data}) => {
        state.tableRows = data
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations
}