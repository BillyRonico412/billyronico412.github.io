import {createStore} from "vuex";
import axios from "axios";

const store = createStore({
    state: {
        search: "",
        region: "",
        countries: []
    },
    getters: {
        allCountries(state) {
            return state.countries
                .filter(countrie => new RegExp(state.search, 'i').test(countrie.name))
                .filter(countrie => state.region === "" || countrie.region === state.region)
        },
        countrie(state) {
            return id => {
                const countrie = state.countries.find(value => value.id === id)
                if (countrie && countrie.borders)
                    countrie.bordersCountries = state.countries
                        .map(value => {
                            return {alpha3Code: value.alpha3Code, id: value.id, name: value.name}
                        })
                        .filter(value => countrie.borders.includes(value.alpha3Code))
                return countrie
            }
        },
    },
    mutations: {
        addCountries(state, countries) {
            state.countries = countries
        },
        updateSearch(state, search) {
            state.search = search
        },
        updateRegion(state, region) {
            state.region = region
        }
    },
    actions: {
        addCountries({commit, state}) {
            axios.get("https://restcountries.com/v2/all")
                .then(res => res.data)
                .then(countries => {
                    console.log(countries)
                    commit('addCountries', countries.map((countrie, index) => {
                        countrie.id = index
                        return countrie
                    }))
                })
        },
    }
})

export default store