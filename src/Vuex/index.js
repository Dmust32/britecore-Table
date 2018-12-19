import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'



Vue.use(Vuex)


export default new Vuex.Store({
    state: {
        tableRows: [],
        showModal: false
    },
    
    actions: {
        getTableData: (context) => {
            axios.get('http://localhost:5050/api/get-table-data').then(res => {
                context.commit('SET_TABLE_ROWS', res.data)
            })
        },
        updateDesc: (commit, {description, id}) => {
            axios.put('/api/updateDesc', {description, id}).then(res=>{
                commit('setTableRows', {tableRows: res.data})
            })
        }
    },
    
    mutations: {
        SET_TABLE_ROWS: (state, data) => {
            state.tableRows = data
        },
        TOGGLE_SHOW_MODAL: (state) => {
            if(state.showModal){
                state.showModal = false
            }else{
                state.showModal = true
            }
        }
    }
})