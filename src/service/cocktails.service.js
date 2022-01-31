import ApiService from './api.service'
import Cocktails from '../utils/cocktails.endpoint'

const CocktailsService = {
  wait (ms) {
    return new Promise((resolve) => setTimeout(resolve, ms))
  },
  async searchCocktail (name) {
    return await ApiService.get(Cocktails.searchCocktail(name))
  },
  async searchByLetter (letter) {
    return await ApiService.get(Cocktails.searchCocktail(letter))
  },
  async getRandomCocktail () {
    return await ApiService.get(Cocktails.getRandomCocktail)
  }
}

export default CocktailsService
