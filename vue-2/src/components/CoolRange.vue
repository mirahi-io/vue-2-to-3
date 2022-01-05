<template>
  <div>
    <label>
      Min:
      <input type="number" :value="min" :max="max" @input="updateMinHandler" class="cool" />
    </label>
    <label>
      Max:
      <input type="number" :value="max" :min="min" @input="updateMaxHandler" class="cool" />
    </label>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 10
    },
  },
  methods: {
    updateMinHandler(e) {
      this.$emit("update:min", e.target.value);
    },
    updateMaxHandler(e) {
      this.$emit("update:max", e.target.value);
    },
  },
};
</script>

<style scoped>
.cool {
  border-radius: 4px;
  background-color: lightcyan;
  border: 1px solid rgba(0, 0, 0, 0.2);
  padding: 4px 8px;
  width: 3em;
}
</style>
