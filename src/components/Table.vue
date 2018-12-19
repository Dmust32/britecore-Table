<template>
<div>
    <h1>Here is my table!!!</h1>
    
    <table>
        <tr>
            <th>The Id</th>
            <th>Name</th>
            <th>Description</th>
            <th>Date</th>
            <th>Amount</th>
        </tr>
        <tr v-for="(row) in tableRows" v-bind:key="row.rowId">
            <td>{{row.rowId}}</td>
            <td>{{row.name}}</td>
            <td>{{row.description}}</td>
            <td>{{row.date}}</td>
            <td>{{row.amount}}</td>
            <button v-on:click='TOGGLE_SHOW_MODAL'>Edit Description</button>
            <Modal v-bind:row='row'/>
        </tr>
    </table>
</div>
    
</template>

<script>
import {mapState, mapActions, mapMutations} from 'vuex'
import Modal from './Modal'

export default {
    components: {
        Modal,
    },
    computed: {
        ...mapState([
            'tableRows'
        ]),
        
    },
    methods: {
        ...mapActions([
            'getTableData',
            'updateDesc'
        ]),
        ...mapMutations([
            'TOGGLE_SHOW_MODAL'
        ])
    },
    mounted() {
        this.getTableData()
    }
}

</script>


<style scoped>
    .th{
        text-align: left
    }
</style>

