<template>
  <div v-bind:class="visible" id="box" v-on:click="changeState">
    <h1>{{ getState() }}</h1>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data(){
    return{
      visible: "nosee"
    }
  },
  methods: {
    getState() {
      for (
        let index = 0;
        index < this.$store.state.boardState.length;
        index++
      ) {
        const element = this.$store.state.boardState[index];
        if (element.name == this.id) {
          switch (element.state) {
            case "X":
              this.visible = "see";
              return "x";
            case "O":
              this.visible = "see";
              return "O";
            case "0":
              return " ";
            default:
              this.visible = "nosee";
              return "E";
          }
        }
      }
    },
    changeState() {
      this.$store.commit("changePlayer", this.id);
      this.$store.commit("checkWin");
    },
  },
};
</script>

<style>
.see{
  color:white;
}
.nosee{
  color: #999;
}

</style>

      
    