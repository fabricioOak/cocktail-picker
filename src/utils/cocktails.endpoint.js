import BaseEndpoint from './base.endpoint'

const Cocktails = {
  searchCocktail: (name) => BaseEndpoint.URL + '/search.php?s=' + name,
  searchByLetter: (letter) => BaseEndpoint.URL + '/search.php?f=' + letter,
  getRandomCocktail: BaseEndpoint.URL + '/random.php'
}

export default Cocktails
