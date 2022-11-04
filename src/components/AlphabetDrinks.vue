<template>
  <div id="letter-search" class="w-full px-8">
    <h3 class="text-2xl font-bold text-center">Browse Drinks<br /></h3>
    <br />
    <div class="text-center">
      <span v-for="letter in letters" :key="letter">
        <a @click="warpToLettersSearch(letter)" class="text-pink-400 font-bold cursor-pointer hover:text-pink-700 duration-150" >{{letter}}</a> /
      </span>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    letters: null
  }),
  created () {
    this.getAlphabetLetters()
  },
  methods: {
    getAlphabetLetters () {
      this.letters = []
      for (let i = 65; i < 91; i++) {
        this.letters.push(String.fromCharCode(i))
      }
    },
    warpToLettersSearch (letter) {
      this.$router.push({ name: 'LetterSearch', params: { letter } })
    }
  }
}
</script>
