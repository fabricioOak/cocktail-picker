<template>
  <div class="flex flex-col items-center justify-center col-span-1">
    <div class="relative p-5">
      <div
        class="absolute z-10 w-full h-full -mt-5 opacity-30 -ml-5 rounded-full rounded-tr-none"
        :style="{ backgroundColor: this.color }"
      ></div>
      <img
        alt="Cocktail image"
        @click="$emit('click')"
        class="cursor-pointer relative hover:scale-110 scale-100 duration-150 transform h-52 z-20 w-52 rounded-full"
        :src="src"
      />
    </div>
    <div class="mt-3 space-y-2 text-center">
      <div
        @click="$emit('click')"
        class="cursor-pointer space-y-1 text-lg font-medium leading-6"
      >
        <h3>{{ name }}</h3>
      </div>
      <div class="relative flex items-center justify-center space-x-3"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    src: {
      required: true
    },
    name: {
      required: true
    }
  },
  data () {
    return {
      color: this.getRandomlightColor()
    }
  },
  methods: {
    getRandomlightColor () {
      const letters = '0123456789ABCDEF'
      let color = '#'
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
      }
      return color
    }
  }
}
</script>
