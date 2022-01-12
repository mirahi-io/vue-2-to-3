<template>
  <NuxtLayout name="nav">
    <template #nav>
      <NavCart />
    </template>
    <template #default>
      <Item
        v-for="fruit in fruits"
        :key="fruit.name"
        v-bind="fruit"
        :amount="state[fruit.name]"
        @add="addItem(fruit.name)"
        @subtract="subtractItem(fruit.name)"
      />
    </template>
  </NuxtLayout>
</template>

<script lang="ts">
export default {
  layout: false
}
</script>

<script setup lang="ts">
const { data: fruits } = await useFetch('/api/items')

const { state, addItem, subtractItem } = useCart(fruits.value)
</script>