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
    set(v: boolean) {
      this.bool = v;
    }
  },
  // update one when the other changes
  watch: {
    value(newVal: boolean) {
      this.bool = newVal;
    },
    bool(newVal: boolean) {
      this.$emit("click", newVal);
    }
  }
};
