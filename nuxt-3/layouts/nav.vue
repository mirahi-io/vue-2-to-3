<template>
  <div>
    <NavBar>
      <slot name="nav" />
      <div class="user" v-if="user.name" @click="logout">{{ user.name }} 🏃🏻</div>
    </NavBar>
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
const { user, logout } = useAuth()
const { push } = useRouter()

// redirect to login page when no user is logged in
watch(user, (newUser) => {
  if (!newUser.name) {
    push('/auth')
  }
}, {
  immediate: true
})
</script>

<style scoped>
:global(*) {
  margin: 0;
  padding: 0;
}

.content {
  margin-top: 200px;
}

.user {
  display: inline-block;
  border: 1px solid rgba(0, 0, 0, 0.15);
  padding: 4px 8px;
  height: 30px;
  border-radius: 4px;
  margin: 0px 8px;
  position: relative;
}
</style>