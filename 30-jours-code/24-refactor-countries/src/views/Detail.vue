<template>
  <div class="container px-4 pb-20 mx-auto">
    <button class="ombre px-8 py-2 rounded bg-white dark:bg-dark-element" @click="$router.push({name: 'List'})">
      <i class="fas fa-arrow-left"></i>
      Back
    </button>

    <div v-if="countrie" class="md:flex md:justify-between md:items-center w-full mt-8">

      <img :src="countrie.flags.png" :alt="'flag ' + countrie.name" class="md:w-1/3 mt-8 lg:mt-0 w-full ombre">

      <div class="md:w-1/2 ml-auto">

        <h2 class="font-extrabold text-2xl mt-8">{{ countrie.name }}</h2>

        <div class="lg:flex lg:gap-x-16">

          <div class="mt-6 text-sm flex flex-col gap-y-4">
            <div>
              <span>Native Name: </span>
              <span class="font-light">{{ countrie.nativeName }}</span>
            </div>
            <div>
              <span>Population: </span>
              <span class="font-light">{{ countrie.population }}</span>
            </div>
            <div>
              <span>Region: </span>
              <span class="font-light">{{ countrie.region }}</span>
            </div>
            <div>
              <span>Sub Region: </span>
              <span class="font-light">{{ countrie.subregion }}</span>
            </div>
            <div>
              <span>Capital: </span>
              <span class="font-light">{{ countrie.capital }}</span>
            </div>
          </div>

          <div class="mt-8 lg:mt-6 text-sm flex flex-col gap-y-4">
            <div>
              <span>Top Level Domain: </span>
              <span class="font-light">{{ topLevelDomains() }}</span>
            </div>
            <div>
              <span>Currencies: </span>
              <span class="font-light">{{ currencies() }}</span>
            </div>
            <div>
              <span>Languages: </span>
              <span class="font-light">{{ languages() }}</span>
            </div>

          </div>

        </div>


        <div>
          <h3 class="font-extrabold text-md mt-8">Border Countries</h3>
          <div class="flex flex-wrap gap-x-6 gap-y-4 mt-6">
            <button v-if="countrie.bordersCountries" v-for="border in countrie.bordersCountries"
                    class="shadow px-4 py-1.5 bg-white dark:bg-dark-element rounded"
                    @click="changeCountrie(border.id)">
              {{ border.name }}
            </button>
          </div>
        </div>
      </div>


    </div>


  </div>
</template>

<script>
export default {
  name: "Detail",
  computed: {
    countrie() {
      if (this.id)
        return this.$store.getters.countrie(Number(this.id))
    }
  },
  methods: {
    topLevelDomains() {
      return this.countrie.topLevelDomain.reduce((previousValue, currentValue) => previousValue + " - " + currentValue)
    },
    currencies() {
      return this.countrie
          .currencies.map(currencie => currencie.name)
          .reduce((previousValue, currentValue) => previousValue + " - " + currentValue)
    },
    languages() {
      return this.countrie
          .languages.map(language => language.name)
          .reduce((previousValue, currentValue) => previousValue + " - " + currentValue)
    },
    changeCountrie(id) {
      this.$router.push({name: "Detail", params: {id}})
    }
  },
  props: ["id"]
}
</script>

<style scoped>

</style>