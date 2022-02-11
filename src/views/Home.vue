<template>
  <section class="wrapper">
    <SearchForm @searchByInput="searchByInput" @searchBySelect="searchBySelect" />
    <div class="wrapper__country" v-if="data && !isError && !isLoading">
      <Country v-for="country in data" :country="country" :key="country.alpha3Code" />
    </div>
    <LoadingCircle v-if="isLoading" />
    <Error v-else-if="isError" />
  </section>
</template>

<script>
import { toRefs } from 'vue';
import SearchForm from '../components/SearchForm.vue';
import useCountry from '../composables/useCountry';
import Country from '../components/Country.vue';
import LoadingCircle from '../components/LoadingCircle.vue';
import Error from '../components/Error.vue';

export default {
  name: 'Home',
  components: {
    SearchForm,
    Country,
    LoadingCircle,
    Error,
  },

  setup() {
    const { results, getData } = useCountry();

    getData('https://restcountries.com/v3.1/all');

    const searchByInput = (param) => {
      if (param) {
        getData(`https://restcountries.com/v3.1/name/${param}`);
      }
    };

    const searchBySelect = (param) => {
      if (param) {
        getData(`https://restcountries.com/v3.1/region/${param}`);
      }
    };

    return {
      ...toRefs(results),
      searchByInput,
      searchBySelect,
    };
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px 0 0 0;

  .wrapper__country {
    width: 100%;
    margin: 50px 0 0 0;
    display: grid;
    grid-auto-columns: 1fr;
    grid-template-columns: 1fr;
    gap: 53px 0px;
    justify-items: center;
  }
}
</style>
