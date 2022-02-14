<template>
  <section class="detail">
    <button class="detail__goBack">
      <router-link :to="'/'" class="detail__link"> Go back </router-link>
    </button>
    <DetailData :data="data" @handleClick="searchByBorder" />
  </section>
</template>
<script>
import { toRefs } from 'vue';
import useCountry from '../composables/useCountry';
import DetailData from '../components/DetailData.vue';

export default {
  name: 'Detail',

  components: {
    DetailData,
  },

  props: {
    country_code: {
      type: String,
      required: true,
    },
  },

  setup(props) {
    const { getData, results } = useCountry();
    getData(`https://restcountries.com/v3.1/alpha/${props.country_code}`);

    const searchByBorder = (border) => {
      getData(`https://restcountries.com/v3.1/alpha/${border}`);
    };

    return {
      ...toRefs(results),
      searchByBorder,
    };
  },
};
</script>
<style lang="scss" scoped>
@import "../style/_colors.scss";
.detail {
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 30px 0 30px;

  .detail__goBack {
    width: 120px;
    height: 40px;
    background: $White;
    border: none;
    margin: 50px 0 50px 0;
    box-shadow: 0px 0px 16px -8px rgba(66, 68, 90, 1);
    display: flex;
    align-items: center;
    justify-content: space-around;

    .detail__link {
      text-decoration: none;
      color: $Very_Dark_Blue;
      font-size: 16px;
    }
  }
}
</style>
