<template>
<div>
    <h1>Here is my table!!!</h1>
    <div class='toolbar'>
        <input v-on:keyup='searchFilter($event.target.value)' placeholder="Search name..." />
        <!-- <i class="fas fa-trash"></i> -->
        <input type='checkbox' value='day' v-on:select="filterByDate($event.target.value)"/>
        <label for="input" >Last 24 Hours</label>
        <input type='checkbox' value='week' @change="filterByDate($event.target.value)"/>
        <label for="input">Last 7 Days</label>
        <input type='checkbox' value='month' @change="filterByDate($event.target.value)"/>
        <label for="input">Last 30 Days</label>
    </div>
    
    <table>
        <tr>
            <th>
                <i class="fas fa-star"></i>
            </th>
            <th>Name<br/>
                <label for="select">Sort By</label>
                <select @change="sortDataByName($event.target.value)" >  
                    <option selected='selected' disabled=true></option>                                    
                    <option value="ASC">A-Z</option>
                    <option value="DESC">Z-A</option>
                </select>
            </th>
            <th>Description</th>
            <!-- <th></th> -->
            <th>Date<br/>
                <label for="select">Sort By</label>
                <select v-on:change="sortDataByDate($event.target.value)">
                    <option value="DESC">Newest <i class="fas fa-arrow-up"></i></option>
                    <option value="ASC">Oldest<i class="fas fa-arrow-down"></i></option>
                </select>
            </th>
            <th>Amount<br/>
                <label for="select">Sort By</label>
                <select v-on:change="sortDataByAmount($event.target.value)">
                    <option selected='selected' disabled=true></option>                                                        
                    <option value="DESC">Largest <i class="fas fa-arrow-up"></i></option>
                    <option value="ASC">Smallest<i class="fas fa-arrow-down"></i></option>
                </select>
            </th>
        </tr>
        <tr  v-show='!filtering' v-for="(row) in tableRows" v-bind:key="row.row_id">
            <td v-if="row.important" class='star-box'>
                <i class="fas fa-star" @click="toggleMarkImportant(row)"></i> 
            </td>
            <td else="!row.important" class='star-box'>
                <i class="far fa-star" @click="toggleMarkImportant(row.row_id, false)"></i>
            </td>
            <td>{{row.name}}</td>
            <td class='description-box'><p>{{row.description}}</p><button v-on:click='SHOW_MODAL(row)'>Edit Description</button></td>
            <td class='center-data'>{{row.date}}</td>
            <td class='center-data'>{{row.amount}}</td>
            
            <Modal v-if='showModal'/>
        </tr>
        <tr v-show='filtering' v-for="(row) in filteredRows" v-bind:key="row.row_id">
            <td v-if="row.important" class='star-box'>
                <i class="fas fa-star" @click="toggleMarkImportant(row.row_id, true)"></i> 
            </td>
            <td else="!row.important" class='star-box'>
                <i class="far fa-star" @click="toggleMarkImportant(row.row_id, false)"></i>
            </td>
            <td>{{row.name}}</td>
            <td class='description-box'><p>{{row.description}}</p><button v-on:click='SHOW_MODAL(row)'>Edit Description</button></td>
            <td class='center-data'>{{row.date}}</td>
            <td class='center-data'>{{row.amount}}</td>
                
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
            'showModal',
            'filteredRows',
            'filtering'
        ]),
        
    },
    methods: {
        ...mapActions([
            'getTableData',
            'updateDesc',
            'sortDataByName',
            'sortDataByDate',
            'sortDataByAmount',
            'searchFilter',
            'filterByDate',
            'toggleMarkImportant'
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
    table{
        width: 80vw;
        border-collapse: collapse;
    }

    th{
        height: 50px;
        min-width: 200px;
        background-color: #058687;
        color: #FFFFFF;
        padding: 10px
    }

    td{
        min-height: 30px;
        padding: 10px;
    }

    .center-data{
        text-align: center
    }

    .description-box{
        display: flex;
        align-items: center;
        justify-content: space-between
    }
    
    tr:nth-child(even) {background-color: #f2f2f2;}

    table, th {
        border: 1px solid #BDD3DE;
    }

    button{
        border: none;
        border-radius: 5px;
        height: 30px;
        min-width: 150px;
        cursor: pointer;
        color: white;
        background-color: #0BDEBF
    }

    select{
        padding: .25em;
        /* border-bottom: 2px solid currentcolor;  */
        font-weight: bold;
    }

    select:focus, select:active{
        outline: 0;
        border-bottom-color: #0BDEBF;
    }
    
    label{
        font-weight: 100;
        font-size: 12px;
        padding-right: 15px
    }

    .star-box{
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>

