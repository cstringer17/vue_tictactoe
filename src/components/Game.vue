<template>
<div>
<h1>TicTacToe</h1>
  <div class="grid">
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
</div>
</template>

<script>
import Box from "./Box"
export default {
    components:{
        Box,
    }
};
</script>

<style>
.grid {
  display: flex;                       /* establish flex container */
  flex-wrap: wrap;                     /* enable flex items to wrap */
  justify-content: space-around;
  
}
.cell {
  flex: 0 0 32%;                       /* don't grow, don't shrink, width */
  height: 20%;
  width: 20%;
  margin-bottom: 5px;
  background-color: #999;
}

</style>