<template>
  <div v-if="visible" class="background">
    <div class="center">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    visible: {
      default: true,
      type: Boolean,
    },
  },
};
</script>

<style scoped>
.background {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
}

.center {
  background-color: white;
  border-radius: 4px;
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.5);
}
</style>