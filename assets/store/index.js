import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state () {
    isLoading:false
  },
  mutations: {
    setLoading(state, payload) {
      state.isLoading = payload
    }
  },
  actions: {
      
  },
  getters: {
      getLoading(state) {
          return state.isLoading
      }
  },
  modules: {
    
  }
})

export default store;