<template>
  <div>
    <NavBar>
      <slot name="nav" />
    </NavBar>
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
}

.content {
  margin-top: 200px;
}
</style>