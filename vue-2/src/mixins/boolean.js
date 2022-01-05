export const boolMixin = {
  data() {
    return {
      bool: this.value
    };
  },
  props: {
    value: {
      default: false,
      type: Boolean
    }
  },
  // boolean helpers
  methods: {
    on() {
      this.bool = true;
    },
    off() {
      this.bool = false;
    },
    toggle() {
      this.bool = !this.bool;
    },
    set(v) {
      this.bool = v;
    }
  },
  // update one when the other changes
  watch: {
    value(newVal) {
      this.bool = newVal;
    },
    bool(newVal) {
      this.$emit("click", newVal);
    }
  }
};
