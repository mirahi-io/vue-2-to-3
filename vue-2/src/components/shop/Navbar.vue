<template>
  <div class="bar">
    <NavCart />
  </div>
</template>

<script>
import NavCart from "./NavCart";

export default {
  components: {
    NavCart,
  },
};
</script>

<style scoped>
.bar {
  width: 100%;
  height: 50px;
  top: 0px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  position: fixed;
  box-shadow: 1px 3px 6px lightgrey;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
}
</style>