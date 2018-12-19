import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'



Vue.use(Vuex)


export default new Vuex.Store({
    state: {
        tableRows: [{
            name: "Jake Higgs",
            description: 'Awesome as usual',
            date: '07-06-1990',
            amount: 210.00
        }]
    },
    
    actions: {
        getTableData: ({ commit }) => {
            axios.get('/api/get-table-data').then(res => {
                commit('setTableRows', {tableRows: res.data})
            })
        },
        updateDesc: (commit, {description, id}) => {
            axios.put('/api/updateDesc', {description, id}).then(res=>{
                commit('setTableRows', {tableRows: res.data})
            })
        }
    },
    
    mutations: {
        setTableRows: (state, {data}) => {
            state.tableRows = data
        }
    }
})