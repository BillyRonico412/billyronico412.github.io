<template>
  <div class="container px-4 mx-auto flex flex-col sm:flex-row">

    <div class="bg-white dark:bg-dark-element sm:w-96 w-full flex items-center rounded ombre">
      <i class="fas fa-search text-xl px-6"></i>
      <input type="text" class="dark:bg-dark-element block w-full py-4 focus:outline-none font-semibold"
             placeholder="Search for a country..."
             @change="updateSearch" v-model="search">
    </div>

    <select name="filter"
            class="sm:ml-auto w-44 text-center bg-white dark:bg-dark-element ombre rounded font-semibold py-4 sm:py-0 mt-8 sm:mt-0"
            v-model="region" @change="updateRegion">
      <option value="">Filter by region</option>
      <option>Africa</option>
      <option>Americas</option>
      <option>Asia</option>
      <option>Europe</option>
      <option>Oceania</option>
    </select>

  </div>
</template>

<script>
export default {
  name: "Inputs",
  data() {
    return {
      search: "",
      region: ""
    }
  },
  methods: {
    updateSearch() {
      this.$store.commit('updateSearch', this.search)
    },
    updateRegion() {
      this.$store.commit('updateRegion', this.region)
    }
  }
}
</script>

<style scoped>

</style>