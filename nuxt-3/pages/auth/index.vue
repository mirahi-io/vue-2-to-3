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
    <CoolButton @click="logUserIn">Log in</CoolButton>
  </div>
</template>

<script setup lang="ts">
const { push } = useRouter()

const form = reactive({
  name: '',
  password: ''
})

const updateForm = (name: string, e: Event) => {
  const val = (e.target as HTMLInputElement).value
  form[name] = val
}

const { login, user } = useAuth()

const logUserIn = () => {
  login(form.name, form.password)

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