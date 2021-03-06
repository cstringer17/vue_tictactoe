import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //counter variables
    counter: 0,
    additionX: 0,
    additionO: 0,
    //Game Winner 1=PX, 2=PO, 3=Draw and 0=NoWinnerYet
    winner: 0,
    PX: true,
    PO: false,
    //Board State 0=Empty, 1=X and 2=O
    boardState: [
      {
        name: 11,
        state: 0,
        magic: 8
      },
      {
        name: 12,
        state: 0,
        magic: 1,
      },
      {
        name: 13,
        state: 0,
        magic: 6,
      },

      {
        name: 21,
        state: 0,
        magic: 3,
      },
      {
        name: 22,
        state: 0,
        magic: 5,
      },
      {
        name: 23,
        state: 0,
        magic: 7,
      },

      {
        name: 31,
        state: 0,
        magic: 4,
      },
      {
        name: 32,
        state: 0,
        magic: 9
      },
      {
        name: 33,
        state: 0,
        magic: 2,
      },
    ],
  },
  mutations: {
    checkWin(state) {
      //horizontal
      state.boardState.forEach(element => {
        state.counter++;
        if (element.state == "X") {
          state.additionX += element.magic;
        } else if (element.state == "O") {
          state.additionO += element.magic;
        }

        if (state.counter == 3) {
          if (state.additionX == 15) {
            state.winner = "PX"
            console.log("X Wins");
          } else if (state.additionO == 15) {
            state.winner = "PO"
            console.log("O Wins");
          }
          state.additionO = 0;
          state.additionX = 0;
          state.counter = 0;
        }

      });
      state.additionO = 0;
      state.additionX = 0;
      state.counter = 0;
      //vertical
      for (let index = 0; index < 3; index++) {
        for (let subIndex = 0; subIndex < 3; subIndex++) {
          if (state.boardState[(3 * subIndex + index)].state == "X") {
            state.additionX += state.boardState[(3 * subIndex + index)].magic;
          } else if (state.boardState[(3 * subIndex + index)].state == "O") {
            state.additionO += state.boardState[(3 * subIndex + index)].magic;
          }
          if (state.additionX == 15) {
            state.winner = "PX"
            console.log("X Wins");
          } else if (state.additionO == 15) {
            state.winner = "PO"
            console.log("O Wins");
          }

        }
        state.additionO = 0;
        state.additionX = 0;
      }

      //diagonal
      for (let index = 1; index < 4; index++) {
        state.boardState.forEach(element => {
          if(element.name == (index*11)){
          if (element.state == "X") {
            state.additionX += element.magic;
          } else if (element.state == "O") {
            state.additionO += element.magic;
          }
          if (state.additionX == 15) {
            state.winner = "PX"
            console.log("X Wins");
          } else if (state.additionO == 15) {
            state.winner = "PO"
            console.log("O Wins");
          }
        }
        });
      }
      state.additionO = 0;
      state.additionX = 0;

      //opisite diagonal
      for (let index = 3; index >= 1; index--) {
        state.boardState.forEach(element => {
          if(element.name == 13 || element.name == 22 || element.name ==31){
          if (element.state == "X") {
            state.additionX += element.magic;
            console.log(state.additionX);
          } else if (element.state == "O") {
            state.additionO += element.magic;
          }
          if (state.additionX == 15) {
            state.winner = "PX"
            console.log("X Wins");
          } else if (state.additionO == 15) {
            state.winner = "PO"
            console.log("O Wins");
          }
        }
        });
      }
     
      state.additionO = 0;
      state.additionX = 0;




    },
    changePlayer(state, id) {
      for (let index = 0; index < state.boardState.length; index++) {
        const element = state.boardState[index];
        if (element.name == id) {
          if (state.PX && state.boardState[index].state == 0) {
            state.boardState[index].state = "X";
            state.PX = false;
            state.PY = true;
          } else if (state.PY && state.boardState[index].state == 0) {
            state.boardState[index].state = "O";
            state.PX = true;
            state.PY = false;
          }
        }
      }
    },
    reset(state){
      for (let index = 0; index < state.boardState.length; index++) {
        state.boardState[index].state = 0;

      }
      state.winner = 0;
    },
  },
  actions: {
  },
  modules: {
  }
})
