<template>
  <div class="loading">
    <p class="loading__circle"><i class="fas fa-circle-notch fa-5x"></i></p>
  </div>
</template>
<script>
export default {
  name: 'LoadingCircle',
};
</script>
<style lang="scss" scoped>
@import "../style/_colors.scss";
.loading {
  width: 100%;
  height: 200px;
  position: absolute;
  top: 400px;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  .loading__circle {
    color: $Dark_Gray;
    animation: rotate-center 0.7s ease-in-out infinite both;
  }

  @keyframes rotate-center {
    0% {
      -webkit-transform: rotate(0);
      transform: rotate(0);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
}
</style>
