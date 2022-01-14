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

export default () => {
  const user = useCookie<User>('user')

  const login = (name: string, pwd: string) => {
    const userFound = users.find(user => user.name === name)

    if (!userFound) return
    if (userFound.password !== pwd) return

    user.value = {
      name
    }
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
  }
}