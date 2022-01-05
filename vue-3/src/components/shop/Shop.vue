<template>
  <Navbar />
  <Item />
</template>

<script setup lang="ts">
import { provide, ref } from 'vue'
import Navbar from "./Navbar.vue";
import Item from "./Item.vue";
import { CART, CART_KEY } from './constants';

const amount = ref(0)

const set = (v: number) => amount.value = v

provide<CART>(CART_KEY, { amount, set })
</script>