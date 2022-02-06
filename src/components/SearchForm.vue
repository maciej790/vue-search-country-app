<template>
  <form class="search">
      <div class="search__loupe">
          <i class="fas fa-search"></i>
      </div>
    <input type="text" placeholder="Search for a Country..." class="search__input" />
    <select class="search__select">
      <option value="">Filter by Region</option>
      <option value="Africa">Africa</option>
      <option value="America">America</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  </form>
</template>
<script>
export default {
  name: 'SearchForm',
};
</script>
<style lang="scss" scoped>
@import "../style/_colors.scss";

.search {
  width: 90%;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  .search__loupe{
      width: 50px;
      height: 50px;
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      color: $Dark_Gray;
  }

  .search__input {
    width: 100%;
    text-align: center;
    height: 50px;
    border: none;
    outline: none;
    box-shadow: 0px 0px 32px -18px rgba(66, 68, 90, 1);
    border-radius: 5px;
    color: $Dark_Gray;
    font-size: 20px;

    &::placeholder {
      text-align: left;
      padding: 0 0 0 60px;
      font-size: 15px;
    }
  }

  .search__select {
    width: 50%;
    height: 50px;
    color: $Very_Dark_Blue;
    font-size: 18px;
    border: none;
    outline: none;
    border-radius: 5px;
    box-shadow: 0px 0px 32px -18px rgba(66, 68, 90, 1);

    option {
      margin: 20px 0 0 0;
      font-size: 16px;
    }
  }
}
</style>
