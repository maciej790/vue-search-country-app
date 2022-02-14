<template>
  <section class="country">
    <router-link
      :to="{ name: 'Detail', params: { country_code: country.cca3 } }"
      class="country__link"
    >
      <img class="country__img" :src="country.flags.png" />
      <div class="country__data">
        <h2 class="country__data__name">{{ country.name.common }}</h2>
        <p class="country__title">
          Population: <span class="country__result">{{ country.population }}</span>
        </p>
        <p class="country__title">
          Region: <span class="country__result">{{ country.region }}</span>
        </p>
        <p v-if="country.capital" class="country__title">
          Capital:
          <span class="country__result">{{ country.capital[0] }}</span>
        </p>
        <p v-else class="country__title">
          Capital:
          <span class="country__result">None</span>
        </p>
      </div>
    </router-link>
  </section>
</template>
<script>
export default {
  name: 'CountryItem',

  props: {
    country: {
      type: Object,
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../style/_colors.scss";
.country {
  width: 75%;
  height: 400px;
  background: $White;
  box-shadow: 0px 0px 24px -20px rgba(66, 68, 90, 1);
  border-radius: 7px;

  .country__link {
    text-decoration: none;
    color: $Very_Dark_Blue;
  }

  .country__img {
    height: 200px;
    width: 100%;
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
  }

  .country__data {
    font-size: 17px;
    padding: 20px 0 0 20px;
    .country__data__name {
      margin: 0 0 20px 0;
    }
    .country__title {
      font-weight: bold;

      .country__result {
        color: $Dark_Gray;
        line-height: 170%;
      }
    }
  }
}
</style>
