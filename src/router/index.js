import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '../stores/auth'

const routes = [
  {
    path: '/',
    component: () => import('../components/AdminLayout.vue'),
    meta: { requiresAuth: true },
    children: [
      {
        path: '',
        name: 'Dashboard',
        component: () => import('../views/Dashboard.vue')
      },
      {
        path: 'sekolah',
        name: 'Sekolah',
        component: () => import('../views/Sekolah.vue')
      },
      {
        path: 'ewallet',
        name: 'EWallet',
        component: () => import('../views/EWallet.vue')
      },
      {
        path: 'master/mata-pelajaran',
        name: 'MataPelajaran',
        component: () => import('../views/master/MataPelajaran.vue')
      },
      {
        path: 'master/bab',
        name: 'Bab',
        component: () => import('../views/master/Bab.vue')
      },
      {
        path: 'master/konten',
        name: 'Konten',
        component: () => import('../views/master/Konten.vue')
      },
      {
        path: 'master/soal',
        name: 'Soal',
        component: () => import('../views/master/Soal.vue')
      },
      {
        path: 'pengaturan',
        name: 'Pengaturan',
        component: () => import('../views/Pengaturan.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
    meta: { guestOnly: true }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// Route Guard
router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore()
  
  // Try to fetch user if token exists but user doesn't
  if (authStore.token && !authStore.user) {
    await authStore.fetchUser()
  }

  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    next('/login')
  } else if (to.meta.guestOnly && authStore.isAuthenticated) {
    next('/')
  } else {
    next()
  }
})

export default router


