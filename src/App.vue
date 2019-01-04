<template>
  <div id="app">
    <Table />
  </div>
</template>

<script>
import Table from './components/Table.vue'

export default {
  name: 'app',
  components: {
    Table
  }
}
</script>

<style>
  #app{
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center
  }
</style>
