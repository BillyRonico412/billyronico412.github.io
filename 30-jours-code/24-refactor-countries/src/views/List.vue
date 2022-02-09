<template>
  <div>
    <Inputs class="mt-8"/>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-12 justify-items-center container mx-auto mt-16">
      <CardCountrie v-for="(countrie, index) in countries"
                    :key="'countrie' + index"
                    :id="countrie.id"
                    :nom="countrie.name"
                    :flag="countrie.flags.png"
                    :population="countrie.population"
                    :region="countrie.region"
                    :capital="countrie.capital"/>
    </div>
  </div>
</template>

<script>
import Inputs from "../components/Inputs.vue";
import CardCountrie from "../components/CardCountrie.vue";

export default {
  name: "List",
  components: {
    Inputs, CardCountrie
  },
  computed: {
    countries() {
      return this.$store.getters.allCountries;
    }
  }
}
</script>

<style scoped>

</style>