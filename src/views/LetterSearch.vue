<template>
  <div>
    <Header @search-drink="searchCocktail" v-model="search" />
    <div
      v-if="!loading"
      class="w-full px-5 py-6 mx-auto space-y-5 sm:py-8 md:py-12 sm:space-y-8 md:space-y-16 max-w-7xl"
    >
    <div class="font-medium text-4xl">
      <h1 class="text-center text-2xl sm:text-4xl font-black mt-10">
        Cocktails with letter {{ $route.params.letter }}
      </h1>
    </div>
      <div class="grid grid-cols-12 pb-10 sm:px-5 gap-x-8 gap-y-16">
        <div
          v-for="drink in drinks"
          :key="drink.idDrink"
          class="flex flex-col items-start col-span-12 space-y-3 sm:col-span-6 xl:col-span-4"
        >
          <div class="flex flex-col items-center col-span-1">
            <div class="relative p-5">
              <div
                class="absolute z-10 w-full h-full -mt-5 -ml-5 rounded-full rounded-tr-none bg-purple-200"
              ></div>
              <img
                alt="Cocktail image"
                loading="lazy"
                @click="getDetails(drink.idDrink)"
                :src="drink.strDrinkThumb"
                class="relative cursor-pointer hover:scale-100 scale-90 duration-150 transform h-32 z-20 w-32 lg:h-56 lg:w-56 rounded-full"
              />
            </div>
          </div>
          <div
            class="bg-purple-500 flex items-center px-3 py-1.5 leading-none rounded-full text-xs font-medium uppercase text-white"
          >
            <span>{{ drink.strCategory }}</span>
          </div>
          <h2 class="text-lg font-bold sm:text-xl md:text-2xl">
            <a class="cursor-pointer" @click="getDetails(drink.idDrink)">{{
              drink.strDrink
            }}</a>
          </h2>
          <p class="pt-2 text-sm font-medium">
            Category:
            <a href="#_" class="mr-1 font-bold"> {{ drink.strAlcoholic }}</a>
            | <span class="mx-1">Main ingredient</span> :
            <span class="font-bold mx-1 text-base text-pink-600">{{
              drink.strIngredient1
            }}</span>
          </p>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="h-96 w-screen flex items-center justify-center text-center">
        <div
          class="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      drinks: null,
      loading: false,
      search: ''
    }
  },
  created () {
    this.getDrinkByLetter()
  },
  methods: {
    getDrinkByLetter () {
      this.loading = true
      const routeParam = this.$route.params.letter
      this.$store
        .dispatch('searchByUniqueLetter', routeParam)
        .then(response => {
          if (response.data === '') {
          } else {
            this.drinks = response.data.drinks
          }
          this.loading = false
        })
        .catch(error => {
          console.log(error)
          this.loading = false
        })
    },
    searchCocktail () {
      this.$router.push({ name: 'Search', params: { search: this.search } })
    }
  }
}
</script>
