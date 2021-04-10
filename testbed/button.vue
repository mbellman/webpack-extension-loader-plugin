<template>
  <button class="button">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'Button'
};
</script>

<style lang="scss" scoped>
.button {
  background-color: rgb(51, 49, 199);
  border: 0;
  color: white;
  padding: 10px 20px;
}
</style>