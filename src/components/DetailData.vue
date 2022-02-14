<template>
  <section class="detail__info" v-if="data">
    <img :src="data[0].flags.png" />
    <h2 class="detail__name">{{ data[0].name.common }}</h2>
    <article class="detail__data">
      <p class="detail__title">
        Official Name:
        <span class="detail__result">{{ data[0].name.official }}</span>
      </p>
      <p class="detail__title">
        Population:
        <span class="detail__result">{{ data[0].population }}</span>
      </p>
      <p class="detail__title">
        Region: <span class="detail__result">{{ data[0].region }}</span>
      </p>
      <p class="detail__title">
        Sub Region: <span class="detail__result">{{ data[0].subregion }}</span>
      </p>
      <p class="detail__title">
        Capital: <span class="detail__result">{{ data[0].capital[0] }}</span>
      </p>
    </article>
    <article class="detail__data">
      <p class="detail__title">
        Top Level Domain: <span class="detail__result">{{ data[0].tld[0] }}</span>
      </p>
      <p class="detail__title">
        Currencies:
        <span class="detail__result" v-for="(currency, index) in data[0].currencies" :key="index">{{
          currency.name
        }}</span>
      </p>
      <p class="detail__title">
        Languages:
        <span class="detail__result" v-for="(language, index) in data[0].languages" :key="index">{{
          `${language} `
        }}</span>
      </p>
    </article>
    <article class="detail__borders">
      <h3>Border Countries:</h3>
      <div class="borders__buttons" v-if="data[0].borders">
        <button
          class="border__button"
          @click="$emit('handleClick', border)"
          v-for="(border, index) in data[0].borders"
          :key="index"
        >
          {{ border }}
        </button>
      </div>
      <h2 class="detail__message" v-else>No borders!</h2>
    </article>
  </section>
</template>
<script>
export default {
  name: 'DetailInfo',

  emits: ['handleClick'],

  props: {
    data: {
      type: Array,
      required: true,
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../style/_colors.scss";

.title {
  color: $Very_Dark_Blue;
  font-weight: bold;
  font-size: 17px;
}

.result {
  color: $Dark_Gray;
}

.detail__info {
  width: 100%;
  display: flex;
  flex-direction: column;

  .detail__name {
    margin: 50px 0 50px 0;
    font-size: 28px;
    color: $Very_Dark_Blue;
  }

  .detail__data {
    line-height: 230%;
    margin: 0 0 50px 0;
    .detail__title {
      @extend .title;
    }
    .detail__result {
      @extend .result;
    }
  }

  .detail__borders {
    .borders__buttons {
      display: flex;
      flex-wrap: wrap;
      padding: 30px 0 30px 0;

      .border__button {
        width: 30%;
        height: 40px;
        background: $White;
        border: none;
        box-shadow: 0px 0px 16px -8px rgba(66, 68, 90, 1);
        margin: 10px 10px 0 0;
      }
    }
  }

  .detail__message {
    margin: 20px 0 0 0;
    padding: 0 0 30px 0;
  }
}
</style>
