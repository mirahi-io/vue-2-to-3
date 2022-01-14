<template>
  <div class="centered">
    <label>
      Username:
      <input name="name" :value="form.name" @input="updateForm('name', $event)" />
    </label>
    <label>
      Password:
      <input
        type="password"
        :value="form.password"
        @input="updateForm('password', $event)"
      />
    </label>
    <CoolButton :disabled="loading" @click="logUserIn">Log in</CoolButton>
    {{ loading ? 'loading...' : '' }}
  </div>
</template>

<script setup lang="ts">
const { push } = useRouter()
const { login, user, loading } = useAuth()

const form = reactive({
  name: '',
  password: ''
})

const updateForm = (name: string, e: Event) => {
  const val = (e.target as HTMLInputElement).value
  form[name] = val
}

const logUserIn = async () => {
  await login(form.name, form.password)

  form.name = '';
  form.password = '';
}

watch(user, (newUser) => {
  if (newUser.name) {
    push('/shop')
  }
})
</script>

<style>
.centered {
  margin-top: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
</style>