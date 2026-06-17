import axios from 'axios'
import { useAuthStore } from '../stores/auth'

const instance = axios.create({
  baseURL: 'http://localhost:8000/api', // Central API
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
})

instance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      const authStore = useAuthStore()
      authStore.token = null
      authStore.user = null
      localStorage.removeItem('token')
      window.location.href = '/login'
    }
    return Promise.reject(error)
  }
)

export default instance
