<template>
    <div class='modal'>
        <div class='modal-container'>
            <p>{{modalData}}</p>
            <input type='text' v-model='newDescription'>
            <button v-on:click='updateDesc(newDescription)'>Save and Close</button>
            <button v-on:click='HIDE_MODAL'>Cancel</button>
        </div>
    </div>   
</template>

<script>
import {mapState, mapActions, mapMutations} from 'vuex'

export default {
    data: () => {
        return{
            newDescription: ''
        }
    },
    computed: {
        ...mapState([
            'showModal',
            'modalData'
        ])
    },
    methods: {
        ...mapActions([
            'updateDesc'
        ]),
        ...mapMutations([
            'HIDE_MODAL'
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
        background-color: rgba(0,0,0, .02);
        transition: opacity .5s ease;
    }

    .modal-container{
        /* display: flex; */
        position: absolute;
        height: 400px;
        width: 600px;
        background-Color: #F2F3F5;
        transition: all .2s ease;
        border-radius: 10px;
    }

</style>


