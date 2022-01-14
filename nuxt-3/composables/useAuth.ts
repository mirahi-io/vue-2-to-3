interface User {
  name: string
  password?: string
}

const users: User[] = [
  {
    name: 'Anthony',
    password: '1234',
  },
  {
    name: 'Jean',
    password: 'AZERTY'
  }
]

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

export default () => {
  const user = useCookie<User>('user')
  const loading = ref(false)

  const login = async (name: string, pwd: string) => {
    const userFound = users.find(user => user.name === name)
    loading.value = true

    await sleep(1000)

    loading.value = false
    if (!userFound) return
    if (userFound.password !== pwd) return

    user.value = {
      name
    }

    return Promise.resolve()
  }

  const logout = () => {
    user.value = {
      name: ''
    }
  }

  return {
    user,
    login,
    logout,
    loading
  }
}