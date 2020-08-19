<template>
<div>
<h1>TicTacToe</h1>
  <div v-if="this.$store.state.winner==0" class="grid">
    <box class="cell" id="11"></box>
    <box class="cell" id="12"></box>
    <box class="cell" id="13"></box>
    
    <box class="cell" id="21"></box>
    <box class="cell" id="22"></box>
    <box class="cell" id="23"></box>

    <box class="cell" id="31"></box>
    <box class="cell" id="32"></box>
    <box class="cell" id="33"></box>
  </div>
  <div v-if="this.$store.state.winner=='PX'" >
    <h1>X has Won!</h1>
  </div>
  <div v-if="this.$store.state.winner=='PO'" >
    <h1>O has Won!</h1>
  </div>


  <button v-on:click="reset">Reset Game</button>

</div>
</template>

<script>
import Box from "./Box"
export default {
    components:{
        Box,
    },
    methods: {
      reset(){
        this.$store.commit("reset");
      }
    }
};
</script>

<style>
.grid {
  display: flex;                       
  flex-wrap: wrap;                     
  justify-content: space-around;
  width: 40%;
  margin-left: 30%;
}
.cell {
  flex: 0 0 32%;                      
  height: 50%;
  width: 20%;
  margin-bottom: 5px;
  background-color: #999;
}

</style>