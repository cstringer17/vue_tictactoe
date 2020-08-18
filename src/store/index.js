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
          } else if (state.additionO == 15) {
            state.winner = "PO"
          }
          state.counter = 0;
        }

      });
    }
  },
  actions: {
  },
  modules: {
  }
})