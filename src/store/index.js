import Vue from 'vue'
import Vuex from 'vuex'
import CocktailsService from '../service/cocktails.service'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: false
  },
  mutations: {
    SET_LOADING (state, isLoading) {
      state.loading = isLoading
    }
  },
  actions: {
    setLoading ({ commit }, isLoading) {
      commit('SET_LOADING', isLoading)
    },
    searchCocktail ({ commit }, { name }) {
      return new Promise((resolve, reject) => {
        commit('SET_LOADING', true)
        CocktailsService.searchCocktail(name)
          .then((response) => {
            commit('SET_LOADING', false)
            resolve(response)
          })
          .catch((error) => {
            commit('SET_LOADING', false)
            reject(error)
          })
      })
    },
    searchByLetter ({ commit }, { letter }) {
      return new Promise((resolve, reject) => {
        commit('SET_LOADING', true)
        CocktailsService.searchByLetter(letter)
          .then((response) => {
            commit('SET_LOADING', false)
            resolve(response)
          })
          .catch((error) => {
            commit('SET_LOADING', false)
            reject(error)
          })
      })
    },
    getRandomCocktail ({ commit }) {
      return new Promise((resolve, reject) => {
        commit('SET_LOADING', true)
        CocktailsService.getRandomCocktail()
          .then((response) => {
            commit('SET_LOADING', false)
            resolve(response)
          })
          .catch((error) => {
            commit('SET_LOADING', false)
            reject(error)
          })
      })
    },
    getCocktailDetails ({ commit }, { id }) {
      return new Promise((resolve, reject) => {
        commit('SET_LOADING', true)
        CocktailsService.getCocktailDetails(id)
          .then((response) => {
            commit('SET_LOADING', false)
            resolve(response)
          })
          .catch((error) => {
            commit('SET_LOADING', false)
            reject(error)
          })
      })
    }
  }
})
