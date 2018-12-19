<template>
    <div v-if='showModal' class='modal'>
        <div class='modal-container'>
            <h1>Im the modal bitch.</h1>
            <p>{{row}}</p>
            <button v-on:click='TOGGLE_SHOW_MODAL'>Close Modal</button>
        </div>
    </div>   
</template>

<script>
import {mapState, mapActions, mapMutations} from 'vuex'

export default {
    props:[
        'row'
    ],
    computed: {
        ...mapState([
            'showModal'
        ])
    },
    methods: {
        ...mapMutations([
            'TOGGLE_SHOW_MODAL'
        ])
    },
}
</script>

<style scoped>
    .modal{
         z-index: 1000;
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .modal-container{
        /* display: flex; */

        position: absolute;
        height: 600px;
        width: 800px;
        background-Color: #F2F3F5;

        border-radius: 10px;
    }
</style>


