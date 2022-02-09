<template>
  <div class="flex w-72 flex-col ombre rounded overflow-hidden cursor-pointer hover:ombre-intense bg-white dark:bg-dark-element"
       @click="detailCountrie">
    <img :src="flag" :alt="'flag ' + nom" class="w-72 h-40">
    <div class="px-6 pt-6 pb-10">
      <h2 class="text-lg font-extrabold">{{ nom }}</h2>
      <div class="flex flex-col gap-y-2">
        <h3 class="text-sm mt-4">
          <span class="font-semibold">Population: </span>
          <span class="font-light">{{ population }}</span>
        </h3>
        <h3 class="text-sm">
          <span class="font-semibold">Region: </span>
          <span class="font-light">{{ region }}</span>
        </h3>
        <h3 class="text-sm">
          <span class="font-semibold">Capital: </span>
          <span class="font-light">{{ capital }}</span>
        </h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "card-countrie",
  props: ['id', 'nom', 'flag', 'population', 'region', 'capital'],
  methods: {
    detailCountrie() {
      this.$router.push({name: "Detail", params: {id: Number(this.id)}})
    }
  }
}
</script>

<style scoped>

</style>