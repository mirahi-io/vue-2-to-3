<template>
  <div class="container">
    <ul class="routes">
      <li>
        <RouterLink to="/">Home</RouterLink>
      </li>
      <li>
        <RouterLink to="/shop">Shop</RouterLink>
      </li>
    </ul>
    <RouterView />
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

.container {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

body {
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
