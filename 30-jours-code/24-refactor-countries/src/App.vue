<template>
  <NavBar/>
  <router-view class="mt-24"/>
</template>

<script>
import NavBar from "./components/NavBar.vue";

export default {
  components: {
    NavBar,
  },
  created() {
    this.$store.dispatch("addCountries")
  },
  data() {
    return {
      charge: false
    }
  }
}
</script>
