<template>
<div>
    <h1>Here is my table!!!</h1>
    
    <table>
        <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Date</th>
            <th>Amount</th>
        </tr>
        <tr v-for="(row) in tableRows" v-bind:key="row.rowId">
            <td>{{row.name}}</td>
            <td>{{row.description}}</td>
            <td>{{row.date}}</td>
            <td>{{row.amount}}</td>
            <button v-on:click='SHOW_MODAL(row)'>Edit Description</button>
            <Modal v-if='showModal'/>
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
            'tableRows',
            'showModal'
        ]),
        
    },
    methods: {
        ...mapActions([
            'getTableData',
            'updateDesc'
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
    .th{
        text-align: left
    }
</style>

