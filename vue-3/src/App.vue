<script setup>
import { RouterView, RouterLink } from 'vue-router'
</script>

<template>
  <ul class="routes">
    <li>
      <RouterLink to="/">Home</RouterLink>
    </li>
    <li>
      <RouterLink to="/shop">Shop</RouterLink>
    </li>
  </ul>
  <RouterView />
</template>

<style>
* {
  margin: 0;
  padding: 0;
}

#app {
  font-family: system-ui, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.routes {
  display: block;
  position: fixed;
  top: 60px;
  left: 20px;
  list-style: none;
}
</style>
