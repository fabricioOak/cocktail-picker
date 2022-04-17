<template>
  <div class="bg-white">
    <main class="px-2 pt-6 bg-white md:px-0">
      <div
        class="container items-center max-w-6xl px-5 mx-auto space-y-0 text-center"
      >
        <h1
          class="text-4xl font-extrabold tracking-tight text-left text-gray-900 sm:text-5xl md:text-6xl md:text-center"
        >
          <span class="font-black m-2 block"
            >Prepare
            <span class="block mt-1 text-pink-500 lg:inline lg:mt-0"
              >Beautiful Cocktails</span
            ></span
          >
        </h1>
        <p
          class="w-full mx-auto text-base text-left text-gray-500 sm:text-lg lg:text-2xl md:max-w-3xl md:text-center"
        >
          We have info about drinks and cocktails from around the world.
        </p>
        <div
          class="relative flex flex-col justify-center md:flex-row md:space-x-4"
        >
          <router-link :to="{ name: 'Home' }">
            <a
              class="hover:scale-110 scale-100 duration-150 transform flex items-center w-full px-6 mt-4 py-3 mb-3 text-lg text-white bg-pink-400 md:mb-0 hover:bg-pink-600 md:w-auto rounded-lg"
            >
              Take a look
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5 ml-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>
          </router-link>
        </div>
      </div>
      <div
        class="container items-center max-w-5xl px-5 mx-auto mt-16 text-center"
      >
        <div class="grid w-full h-full gap-4 sm:grid-cols-3 lg:grid-cols-3">
          <!-- I don't have access to a "get ten ramdon drinks" so I made this -->
          <DrinkThumb
            :src="this.drinksOne.strDrinkThumb"
            :name="this.drinksOne.strDrink"
            @click="getDetails(drinksOne.idDrink)"
          />
          <DrinkThumb
            :src="drinksTwo.strDrinkThumb"
            :name="drinksTwo.strDrink"
            @click="getDetails(drinksTwo.idDrink)"
          />
          <DrinkThumb
            :src="this.drinksThree.strDrinkThumb"
            :name="this.drinksThree.strDrink"
            @click="getDetails(drinksThree.idDrink)"
          />
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      drinksOne: [],
      drinksTwo: [],
      drinksThree: []
    }
  },
  mounted () {
    this.getRandomOne()
    this.getRandomTwo()
    this.getRandomThree()
  },
  methods: {
    getRandomOne () {
      this.loading = true
      this.$store
        .dispatch('getRandomCocktail')
        .then((response) => {
          this.drinksOne = response.data.drinks[0]
          console.log(this.drinksOne.idDrink)
          this.loading = false
        })
        .catch((error) => {
          this.error = error
        })
    },
    getRandomTwo () {
      this.loading = true
      this.$store
        .dispatch('getRandomCocktail')
        .then((response) => {
          this.drinksTwo = response.data.drinks[0]
          this.loading = false
        })
        .catch((error) => {
          this.error = error
        })
    },
    getRandomThree () {
      this.loading = true
      this.$store
        .dispatch('getRandomCocktail')
        .then((response) => {
          this.drinksThree = response.data.drinks[0]
          this.loading = false
        })
        .catch((error) => {
          this.error = error
        })
    },
    getDetails (id) {
      this.$router.push({
        name: 'Cocktail',
        params: { id: id }
      })
    }
  }
}
</script>
