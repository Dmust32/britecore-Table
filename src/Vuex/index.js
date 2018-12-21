import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'



Vue.use(Vuex)


export default new Vuex.Store({
    state: {
        tableRows: [],
        showModal: false,
        modalData: {},
        column: '',
        sortBy: ''
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
        sortData: ({commit, state}, column, sortBy) => {
            console.log('hitting the action', column, sortBy)
            axios.post('http://localhost:5050/api/sortData', {column, sortBy}).then(res=>{
                commit('SET_TABLE_ROWS', {tableRows: res.data})
            })
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
        }
    },
        
    }
)