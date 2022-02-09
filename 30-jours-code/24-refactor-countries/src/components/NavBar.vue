<template>
  <div class="ombre bg-white dark:bg-dark-element fixed w-full top-0">
    <header class="container flex justify-between items-center px-4 py-4 mx-auto">
      <h1 class="font-extrabold">
        Where in the world ?
      </h1>
      <button class="flex justify-center items-center" id="btn-dark" @click="switchDark">
        <i class="fas fa-moon"></i>
        <span class="inline-block w-24 font-semibold text-sm">Dark Mode</span>
      </button>
    </header>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      darkMode: false
    }
  },
  methods: {
    switchDark() {
      this.darkMode = !this.darkMode
      if (this.darkMode)
        document.querySelector("html").classList.add('dark')
      else document.querySelector("html").classList.remove('dark')
    }
  }
}
</script>

<style scoped>

</style>