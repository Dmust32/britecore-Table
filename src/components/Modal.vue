<template>
    <div class='modal'>
        <div class='modal-container'>
            <h1>Im the modal bitch.</h1>
            <p>{{modalData}}</p>
            <input :placeholder=modalData.description v-model='newDescription'/>
            <button v-on:click='updateDesc(newDescription)'>Close Modal</button>
        </div>
    </div>   
</template>

<script>
import {mapState, mapActions} from 'vuex'

export default {
    data: () => {
        return{
            newDescription: ''
        }
    },
    props:[
        'row'
    ],
    computed: {
        ...mapState([
            'showModal',
            'modalData'
        ])
    },
    methods: {
        ...mapActions([
            'updateDesc'
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
        transition: opacity .3s ease;
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


