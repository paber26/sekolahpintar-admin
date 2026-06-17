import { defineStore } from 'pinia'
import axiosInstance from '../api/axios'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    token: localStorage.getItem('token') || null,
  }),
  getters: {
    isAuthenticated: (state) => !!state.token,
  },
  actions: {
    async login(email, password) {
      const response = await axiosInstance.post('/admin/login', { email, password })
      this.token = response.data.token
      this.user = response.data.user
      localStorage.setItem('token', this.token)
    },
    async logout() {
      try {
        await axiosInstance.post('/admin/logout')
      } catch (error) {
        console.error(error)
      } finally {
        this.token = null
        this.user = null
        localStorage.removeItem('token')
      }
    },
    async fetchUser() {
      if (!this.token) return
      try {
        const response = await axiosInstance.get('/admin/me')
        this.user = response.data
      } catch (error) {
        this.token = null
        this.user = null
        localStorage.removeItem('token')
      }
    }
  }
})
