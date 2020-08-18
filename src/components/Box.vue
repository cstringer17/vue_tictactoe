<template>
  <div id="box" v-on:click="changeState">
    <h1>{{ getState() }}</h1>
  </div>
</template>

<script>
export default {
  props: ["id"],
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
              return "x";
            case "O":
              return "O";
            case "0":
              return " ";
            default:
              return " ";
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
</style>

      
    