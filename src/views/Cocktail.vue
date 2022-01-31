<template>
  <div>
    <Header @search-drink="searchCocktail" v-model="search" />
    <main>
      <h1 class="text-center text-2xl sm:text-4xl font-black mt-10">
        {{ this.drinks.strDrink }}
      </h1>
      <div
        class="flex flex-col justify-center h-3/4 max-h-full items-center md:flex-col py-8"
      >
        <div
          class="bg-pink-500 flex items-center pl-2 pr-3 py-1.5 leading-none rounded-full text-xs font-medium uppercase text-white"
        >
          <svg
            class="w-3.5 h-3.5 mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
            ></path>
          </svg>
          <span>{{ this.drinks.strCategory }}</span>
        </div>
        <div class="mt-10 flex flex-row items-center col-span-1">
          <div class="relative p-5">
            <div
              class="absolute z-10 w-full h-full -mt-5 -ml-5 rounded-full rounded-tr-none bg-pink-200"
            ></div>
            <img
              :src="this.drinks.strDrinkThumb"
              class="relative cursor-pointer hover:scale-100 scale-90 duration-150 transform h-56 z-20 w-56 lg:h-96 lg:w-96 rounded-full"
            />
          </div>
        </div>
        <div
          class="flex flex-row items-center justify-center w-full h-full py-6 pl-10 mb-6 md:mb-0 md:w-1/2"
        >
          <div
            class="flex flex-row items-start justify-center h-full space-y-3 transform md:py-16 md:px-16 md:space-y-5"
          >
            <div class="w-full">
              <span class="text-2xl font-bold text-center mr-3"
                >Ingredients</span
              >
              <span class="text-2xl font-bold text-center ml-3">Measure</span>
              <div class="flex flex-col justify-between items-center">
                <div>
                  <span>{{ this.drinks.strIngredient1 }}</span>
                  <span>{{ this.drinks.strIngredient2 }}</span>
                  <span>{{ this.drinks.strIngredient3 }}</span>
                  <span>{{ this.drinks.strIngredient4 }}</span>
                  <span>{{ this.drinks.strIngredient5 }}</span>
                  <span>{{ this.drinks.strIngredient6 }}</span>
                  <span>{{ this.drinks.strIngredient7 }}</span>
                  <span>{{ this.drinks.strIngredient8 }}</span>
                </div>
                <div>
                  <span>{{ this.drinks.strMeasure1 }}</span>
                  <span>{{ this.drinks.strMeasure2 }}</span>
                  <span>{{ this.drinks.strMeasure3 }}</span>
                  <span>{{ this.drinks.strMeasure4 }}</span>
                  <span>{{ this.drinks.strMeasure5 }}</span>
                  <span>{{ this.drinks.strMeasure6 }}</span>
                  <span>{{ this.drinks.strMeasure8 }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <AlphabetDrinks class="relative bottom-0 mb-10" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      drinks: [],
      loading: false,
      search: ''
    }
  },
  mounted () {
    this.getCocktailDetails()
  },
  methods: {
    getCocktailDetails () {
      this.$store
        .dispatch('getCocktailDetails', {
          id: this.$route.params.id
        })
        .then((response) => {
          this.drinks = response.data.drinks[0]
          console.log(this.drinks)
        })
        .catch((error) => {
          this.error = error
        })
    },
    getCocktail () {
      this.$store
        .dispatch('searchCocktail', {
          name: this.$route.params.search
        })
        .then((response) => {
          this.drinks = response.data.drinks
          console.log(this.drinks)
        })
        .catch((error) => {
          this.error = error
        })
    },
    searchCocktail () {
      this.$router.push({ name: 'Search', params: { search: this.search } })
      this.getCocktail()
    }
  }
}
</script>
