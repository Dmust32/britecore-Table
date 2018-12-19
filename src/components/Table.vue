<template>
<div>
    <table>
        <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Date</th>
            <th>Amount</th>
        </tr>
        <tr v-for="(row, index) in tableRows" v-bind:key="index">
            <td>{{row.name}}</td>
            <td>{{row.description}}</td>
            <td>{{row.date}}</td>
            <td>{{row.amount}}</td>
        </tr>
    </table>
</div>
    
</template>

<script>
import {mapState} from 'vuex'

export default {
    computed: {
        ...mapState([
            'tableRows'
        ]),
    },
    methods: {
        
    }
}

</script>


<style scoped>
    .th{
        text-align: left
    }
</style>

