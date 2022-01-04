<template>
  <input :checked="bool" @click="toggle" type="checkbox" />
</template>

<script>
import { boolMixin } from "../mixins/boolean";

export default {
  mixins: [boolMixin],
  data() {
    return {};
  },
};
</script>