<template>
  <button @click="clickHandler" class="cool">
    <slot />
  </button>
</template>

<script>
export default {
  name: "CoolButton",
  methods: {
    clickHandler() {
      console.log('clicked')
      this.$emit("click");
    },
  },
};
</script>

<style scoped>
.cool {
  border-radius: 4px;
  background-color: lightgreen;
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 4px 8px;
}
</style>
