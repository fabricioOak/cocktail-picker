<template>
  <div>
    <Header />
    <main>
      <div
        class="mt-10 flex flex-col justify-center h-3/4 max-h-full items-center md:flex-row py-8"
      >
        <div class="flex flex-col items-center col-span-1">
          <div class="relative p-5">
            <div
              class="absolute z-10 w-full h-full -mt-5 -ml-5 rounded-full rounded-tr-none bg-pink-200"
            ></div>
            <img
              :src="this.drinks.strDrinkThumb"
              class="relative hover:scale-100 scale-90 duration-150 transform h-56 z-20 w-h-56 lg:h-96 lg:w-96 rounded-full"
            />
          </div>
        </div>
        <div
          class="flex flex-col items-center justify-center w-full h-full py-6 pl-10 mb-6 md:mb-0 md:w-1/2"
        >
          <div
            class="flex flex-col items-start justify-center h-full space-y-3 transform md:py-16 md:px-16 md:space-y-5"
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
            <h1 class="text-4xl font-bold leading-none lg:text-5xl xl:text-6xl">
              <a href="#_">{{ this.drinks.strDrink }}</a>
            </h1>
            <p class="pt-2 text-sm font-medium">
              Category:
              <a href="#_" class="mr-1 underline">
                {{ this.drinks.strAlcoholic }}</a
              >
              | <span class="mx-1">Main ingredient</span> :
              <span class="font-bold mx-1 text-base text-pink-600">{{
                this.drinks.strIngredient1
              }}</span>
            </p>
            <div>
              <button
                class="border-2 py-2 px-4 rounded-full bg-pink-500 text-white transition-all duration-150 ease-in hover:bg-pink-600"
              >
                Try this one
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
    <AlphabetDrinks class="fixed bottom-0 mb-10" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      drinks: [],
      search: 'margarita',
      error: ''
    }
  },
  mounted () {
    this.searchDrinks()
  },
  methods: {
    searchDrinks () {
      this.$store
        .dispatch('getRandomCocktail')
        .then((response) => {
          this.drinks = response.data.drinks[0]
          console.log(this.drinks)
        })
        .catch((error) => {
          this.error = error
        })
    }
  }
}
</script>
