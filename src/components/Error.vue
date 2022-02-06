<template>
  <div class="error">
    <p class="error__message">No results awalible!</p>
    <i class="fas fa-sad-tear fa-5x"></i>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
@import "../style/_colors.scss";
.error {
  text-align: center;
  margin: 100px 0 0 0;
  color: $Dark_Gray;
  font-size: 20px;
  font-weight: bold;

  i {
    color: $Very_Dark_Blue;
    margin: 20px 0 0 0;
  }
}
</style>
