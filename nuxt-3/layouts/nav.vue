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

<script setup lang="ts">
import NavBar from '~~/components/components/nav/NavBar.vue';
</script>

<style>
.content {
  margin-top: 200px;
}
</style>