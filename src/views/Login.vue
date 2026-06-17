<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 relative overflow-hidden">
    <!-- Decorative background elements -->
    <div class="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
      <div class="absolute -top-[10%] -left-[10%] w-96 h-96 bg-white opacity-10 rounded-full blur-3xl"></div>
      <div class="absolute top-[20%] right-[10%] w-[30rem] h-[30rem] bg-indigo-300 opacity-20 rounded-full blur-3xl"></div>
      <div class="absolute -bottom-[10%] left-[20%] w-[40rem] h-[40rem] bg-pink-300 opacity-20 rounded-full blur-3xl"></div>
    </div>

    <div class="bg-white/90 backdrop-blur-xl p-10 rounded-3xl shadow-2xl w-full max-w-md z-10 border border-white/50 transition-all duration-300 hover:shadow-indigo-500/20">
      <div class="text-center mb-8">
        <div class="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-indigo-600 text-white mb-4 shadow-lg shadow-indigo-500/30">
          <el-icon :size="32"><Monitor /></el-icon>
        </div>
        <h2 class="text-3xl font-extrabold text-gray-900 tracking-tight">e-Sekolah Pintar</h2>
        <p class="text-gray-500 mt-2 text-sm font-medium">Masuk ke Portal Super Admin</p>
      </div>
      
      <el-form :model="form" @submit.prevent="handleLogin" label-position="top">
        <el-form-item>
          <el-input 
            v-model="form.email" 
            placeholder="Email Admin Pusat" 
            size="large"
            :prefix-icon="User"
            class="!rounded-xl"
          />
        </el-form-item>
        <el-form-item class="mt-6">
          <el-input 
            v-model="form.password" 
            type="password" 
            placeholder="Kata Sandi" 
            size="large"
            show-password
            :prefix-icon="Lock"
            class="!rounded-xl"
          />
        </el-form-item>
        
        <div class="flex items-center justify-between mt-4 mb-8">
          <el-checkbox v-model="form.remember" label="Ingat saya" class="!text-gray-600" />
          <a href="#" class="text-sm text-indigo-600 hover:text-indigo-800 font-semibold transition-colors">Lupa sandi?</a>
        </div>

        <el-button 
          native-type="submit" 
          type="primary" 
          size="large" 
          class="w-full !rounded-xl !h-12 !text-base !font-bold !bg-indigo-600 hover:!bg-indigo-700 !border-none shadow-lg shadow-indigo-600/30 transition-all duration-200"
          :loading="loading"
        >
          Masuk Sekarang
        </el-button>
      </el-form>
      
      <div class="mt-8 text-center">
        <p class="text-xs text-gray-400">&copy; {{ new Date().getFullYear() }} e-Sekolah Pintar. All rights reserved.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'
import { Monitor, User, Lock } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'

const router = useRouter()
const authStore = useAuthStore()

const loading = ref(false)
const form = reactive({
  email: '',
  password: '',
  remember: false
})

const handleLogin = async () => {
  if (!form.email || !form.password) {
    ElMessage.warning('Email dan password wajib diisi')
    return
  }
  
  loading.value = true
  try {
    await authStore.login(form.email, form.password)
    ElMessage.success('Login berhasil')
    router.push('/')
  } catch (error) {
    ElMessage.error(error.response?.data?.message || 'Login gagal. Periksa kembali kredensial Anda.')
  } finally {
    loading.value = false
  }
}
</script>

<style>
/* Custom overrides for Element Plus inputs to make them more modern */
.el-input__wrapper {
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05) !important;
  border-radius: 0.75rem !important;
  padding: 0.5rem 1rem !important;
  transition: all 0.2s ease !important;
}
.el-input__wrapper.is-focus {
  box-shadow: 0 0 0 2px rgba(79, 70, 229, 0.2) !important;
}
</style>
