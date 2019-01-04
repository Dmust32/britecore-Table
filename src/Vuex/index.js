import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import moment from 'moment'


Vue.use(Vuex)


export default new Vuex.Store({
    state: {
        tableRows: [],
        showModal: false,
        modalData: {},
        column: '',
        sortBy: '',
        filteredRows: [],
        filtering: false,
    },
    
    actions: {
        getTableData: (context) => {
            axios.get('http://localhost:5050/api/get-table-data').then(res => {
                context.commit('SET_TABLE_ROWS', res.data)
            })
        },
        updateDesc: ({commit, state}, description) => {
            let row_id = state.modalData.row_id
            axios.put('http://localhost:5050/api/updateDesc', {description, row_id}).then(res=>{
                commit('SET_TABLE_ROWS', {tableRows: res.data})
                commit('HIDE_MODAL')
            })
        },
        sortDataByName: ({commit, state}, sortBy) => {
            axios.post('http://localhost:5050/api/sortData-name', {sortBy}).then(res=>{
                commit('SET_TABLE_ROWS', {tableRows: res.data})
            })
        },
        sortDataByDate: ({commit, state}, sortBy) => {
            axios.post('http://localhost:5050/api/sortData-date', {sortBy}).then(res=>{
                commit('SET_TABLE_ROWS', {tableRows: res.data})
            })
        },
        sortDataByAmount: ({commit, state}, sortBy) => {
            axios.post('http://localhost:5050/api/sortData-amount', {sortBy}).then(res=>{
                commit('SET_TABLE_ROWS', {tableRows: res.data})
            })
        },
        searchFilter: async ({commit, state}, input) => {
            if(input !== ''){
                let filteredRows = await state.tableRows.filter(row => {
                    return row.name.toLowerCase().includes(input.toLowerCase())
                })
                
                if(filteredRows.length === 0){
                    commit('SET_FILTERED_ROWS', {filteredRows: filteredRows, filtering: false})

                }else{
                    commit('SET_FILTERED_ROWS', {filteredRows: filteredRows, filtering: true})
                }
            }else{
                commit('SET_FILTERED_ROWS', {filteredRows: [], filtering: false})
            }
        },
        filterByDate: ({commit, state}, timeFrame) => {
            axios.post('http://localhost:5050/api/filter-by-date', {timeFrame}).then(res=>{
                commit('SET_TABLE_ROWS', {tableRows: res.data})
            })
        },
        toggleMarkImportant: ({commit, state}, data) => {
            console.log('fireball', data)
            // axios.post('http://localhost:5050/api/important', {row_id, bool}).then(res=>{
            //     axios.get('http://localhost:5050/api/get-table-data').then(res=>{
            //         commit('SET_TABLE_ROWS', {tableRows: res.data})
            //     })
            // })
        }
    },
    
    mutations: {
        SET_TABLE_ROWS: (state, data) => {
            if(data.tableRows){
                state.tableRows = data.tableRows
            }else{
                state.tableRows = data
            }
            
        },
        SHOW_MODAL: (state, data) => {
            state.showModal = true
            state.modalData = data
        },
        HIDE_MODAL: (state) => {
            state.showModal = false
            state.modalData = {}
        },
        SET_FILTERED_ROWS: (state, data) => {
            state.filteredRows = data.filteredRows
            state.filtering = data.filtering
        }
    },
        
    }
)