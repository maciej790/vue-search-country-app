<template>
  <section class="wrapper">
    <SearchForm />
    <div class="wrapper__country" v-if="data && !isError && !isLoading">
      <Country v-for="country in data" :country="country" :key="country.alpha3Code" />
    </div>
    <div class="wrapper__loading" v-if="isLoading">
      <LoadingCircle />
    </div>
    <div class="wrapper__error" v-if="isError">
      <Error />
    </div>
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
    const { results } = useCountry();

    return {
      ...toRefs(results),
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
