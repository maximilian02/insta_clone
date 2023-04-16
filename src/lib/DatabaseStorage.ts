import { PostType } from '../components/Post'
import posts from '../lib/mockPosts'

interface User {
  username: string;
  password?: string;
  loggedIn: boolean,
}

interface DataBase {
  users?: User[];
  session?: User | {}
  posts?: PostType[]
}

const init = localStorage.getItem('store')
const DUMMY_POSTS: PostType[] = [...posts]
const sortedPosts = [...DUMMY_POSTS].sort((a, b) => Date.parse(b.uploadDate) - Date.parse(a.uploadDate))


if (!init) {
  localStorage.setItem('store', JSON.stringify({ users: [] }))
  localStorage.setItem('posts', JSON.stringify({ posts: sortedPosts }))
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

  if (store && store.users) {
    for (let user of store.users) {
      if (user.username === username && user.password === password) {
        user.loggedIn = true
        set('store', { users: [...store.users], session: { username: user.username, loggedIn: true } })
        result = true
      }
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

const getPosts = () => {
  const { posts } = get('posts')
  return [...posts]
}

const createPost = () => {
  const { posts } = get('posts')
  const dateNow = new Date()
  const resultPosts = [
    ...posts,
    {
      likedBy: [],
      uploadDate: dateNow.toISOString(),
      description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
      id: 222
    }
  ]

  set('posts', { posts: [...resultPosts] })
}

export default {
  createPost,
  createUserHandler,
  getSessionData,
  getPosts,
  isSessionActive,
  loginHandler,
  logOutHandler
}
