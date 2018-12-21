<template>
<div>
    <h1>Here is my table!!!</h1>
    <div class='sort toolbar'>
        

    </div>
    
    <table>
        <tr>
            <th>Name 
                <label for="select">Sort By</label>
                <select v-on:change="sortData('Name',this)">
                    <option value="ACS">A-Z</option>
                    <option value="DESC">Z-A</option>
                </select>
            </th>
            <th>Description</th>
            <th></th>
            <th>Date
                <label for="select">Sort By</label>
                <select v-on:change="sortData('Date',this)">
                    <option value="ACS">Newest <i class="fas fa-arrow-up"></i></option>
                    <option value="DESC">Oldest<i class="fas fa-arrow-down"></i></option>
                </select>
            </th>
            <th>Amount
                <label for="select">Sort By</label>
                <select v-on:change="sortData('Amount',this)">
                    <option value="ACS">Largest <i class="fas fa-arrow-up"></i></option>
                    <option value="DESC">Smallest<i class="fas fa-arrow-down"></i></option>
                </select>
            </th>
        </tr>
        <tr v-for="(row) in tableRows" v-bind:key="row.rowId">
            <td>{{row.name}}</td>
            <td>{{row.description}}</td>
            <button v-on:click='SHOW_MODAL(row)'>Edit Description</button>
            <td>{{row.date}}</td>
            <td>{{row.amount}}</td>
            
            <Modal v-if='showModal'/>
        </tr>
    </table>
</div>
    
</template>

<script>
import {mapState, mapActions, mapMutations} from 'vuex'
import Modal from './Modal'
import moment from 'moment'

export default {
    components: {
        Modal,
    },
    computed: {
        ...mapState([
            'tableRows',
            'showModal'
        ]),
        
    },
    methods: {
        ...mapActions([
            'getTableData',
            'updateDesc',
            'sortData'
        ]),
        ...mapMutations([
            'SHOW_MODAL'
        ])
    },
    mounted() {
        this.getTableData()
    }
}

</script>


<style scoped>

</style>

