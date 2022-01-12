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
.content {
  margin-top: 200px;
}
</style>