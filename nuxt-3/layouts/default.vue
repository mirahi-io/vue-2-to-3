<template>
  <div>
    <ul class="routes">
      <li>
        <NuxtLink to="/">Home</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/shop">Shop</NuxtLink>
      </li>
    </ul>
    <slot />
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.routes {
  display: block;
  position: fixed;
  top: 60px;
  left: 20px;
  list-style: none;
}
</style>
