<template>
  <header class="header">
    <h2>Where in the World?</h2>
    <button class="header__button">
      <i class="far fa-moon"></i>
      Dark Mode
    </button>
  </header>
</template>
<script>
export default {
  name: 'Header',
};
</script>
<style lang="scss" scoped>
@import "../style/_colors.scss";
.header {
  width: 100%;
  height: 80px;
  background: $White;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px 0 20px;
  color: $Very_Dark_Blue;
  box-shadow: 0px 0px 24px -20px rgba(66, 68, 90, 1);

  .header__button {
    color: $Very_Dark_Blue;
    background: none;
    outline: none;
    border: none;
    height: 50px;
    font-size: 17px;
  }
}
</style>
