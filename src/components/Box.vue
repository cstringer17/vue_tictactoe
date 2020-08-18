<template>
  <div id="box" v-on:click="changeState">
    <h1>{{id}}</h1>
    <h2>current Value: {{getState()}}</h2>
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
          return element.state;
        }
      }
    },
    changeState() {
      this.$store.commit("changePlayer", this.id);
    },
  },
};
</script>

<style>
</style>