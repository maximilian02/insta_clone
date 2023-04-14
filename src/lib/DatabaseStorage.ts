interface User {
  username: string;
  password?: string;
  loggedIn: boolean,
}

interface DataBase {
  users: User[];
  session?: User | {}
}

const init = localStorage.getItem('store')
if (!init) {
  localStorage.setItem('store', JSON.stringify({ users: [] }))
}

const get = (item: string) => {
  const itemData = localStorage.getItem(item)
  return itemData ? JSON.parse(itemData) : null
}

const set = (item: string, data: DataBase) => localStorage.setItem(item, JSON.stringify(data))

const createUserHandler = (username: string, password: string) => {
  let result = false
  const store = get('store')
  const usernameAlreadyTaken = store.users.filter((user: User) => user.username === username).length > 0

  if (!usernameAlreadyTaken) {
    const newUserList: User[] = [...store.users, { username, password, loggedIn: false }]
    set('store', { users: newUserList })
    result = true
  }
  return result
}

const loginHandler = (username: string, password: string) => {
  let result = false
  const store = get('store')

  for (let user of store.users) {
    if (user.username === username && user.password === password) {
      user.loggedIn = true
      set('store', { users: [...store.users], session: { username: user.username, loggedIn: true } })
      result = true
    }
  }

  return result
}

const logOutHandler = () => {
  const store = get('store')
  set('store', { users: [...store.users], session: {} })
}

const isSessionActive = () => {
  let result = false
  const { session } = get('store')
  if (session && session.loggedIn) result = true
  return result
}

const getSessionData = () => {
  const { session } = get('store')
  return session
}

export default {
  getSessionData,
  isSessionActive,
  createUserHandler,
  loginHandler,
  logOutHandler
}
