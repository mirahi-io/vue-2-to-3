<template>
  <Navbar />
  <Item />
</template>

<script setup lang="ts">
import Navbar from "./Navbar.vue";
import Item from "./Item.vue";
import { provideStore } from '../../composables/useItemStore';

provideStore()
</script>