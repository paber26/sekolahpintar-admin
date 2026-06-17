<template>
  <el-container class="h-screen bg-gray-50">
    <!-- Sidebar -->
    <el-aside :width="isCollapse ? '64px' : '260px'" class="bg-indigo-900 transition-all duration-300 shadow-xl z-20 flex flex-col">
      <div class="h-16 flex items-center justify-center bg-indigo-950 text-white font-bold text-xl border-b border-indigo-800">
        <el-icon v-if="isCollapse" :size="24"><Monitor /></el-icon>
        <span v-else class="truncate px-4 tracking-tight">e-Sekolah Pintar</span>
      </div>
      
      <el-menu
        :default-active="activeMenu"
        class="!border-none !bg-transparent flex-1 select-none py-4"
        text-color="#c7d2fe"
        active-text-color="#ffffff"
        :collapse="isCollapse"
        :collapse-transition="false"
        router
      >
        <el-menu-item index="/">
          <el-icon><DataLine /></el-icon>
          <template #title>Dashboard</template>
        </el-menu-item>
        
        <el-menu-item index="/sekolah">
          <el-icon><School /></el-icon>
          <template #title>Data Sekolah (Tenant)</template>
        </el-menu-item>
        
        <el-sub-menu index="master">
          <template #title>
            <el-icon><Files /></el-icon>
            <span>Master Data</span>
          </template>
          <el-menu-item index="/master/kurikulum">Kurikulum</el-menu-item>
          <el-menu-item index="/master/materi">Bank Materi</el-menu-item>
          <el-menu-item index="/master/soal">Bank Soal</el-menu-item>
        </el-sub-menu>
        
        <el-menu-item index="/pengaturan">
          <el-icon><Setting /></el-icon>
          <template #title>Pengaturan</template>
        </el-menu-item>
      </el-menu>
      
      <!-- User Profile in Sidebar Bottom -->
      <div class="p-4 border-t border-indigo-800 bg-indigo-950/50 flex items-center justify-center cursor-pointer hover:bg-indigo-800 transition-colors" @click="handleLogout">
        <el-avatar :size="32" class="bg-indigo-500 text-white font-bold" v-if="authStore.user">{{ authStore.user.name?.charAt(0) || 'A' }}</el-avatar>
        <div v-if="!isCollapse" class="ml-3 flex-1 overflow-hidden">
          <p class="text-sm font-semibold text-white truncate">{{ authStore.user?.name || 'Super Admin' }}</p>
          <p class="text-xs text-indigo-300 truncate">Keluar sistem</p>
        </div>
        <el-icon v-if="!isCollapse" class="text-indigo-300"><SwitchButton /></el-icon>
      </div>
    </el-aside>

    <el-container class="flex flex-col overflow-hidden">
      <!-- Topbar -->
      <el-header class="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 z-10 shadow-sm">
        <div class="flex items-center">
          <button @click="isCollapse = !isCollapse" class="text-gray-500 hover:text-indigo-600 focus:outline-none transition-colors w-8 h-8 flex items-center justify-center rounded-md hover:bg-indigo-50">
            <el-icon :size="20"><Fold v-if="!isCollapse" /><Expand v-else /></el-icon>
          </button>
          
          <el-breadcrumb separator="/" class="ml-6">
            <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
            <el-breadcrumb-item>{{ currentRouteName }}</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        
        <div class="flex items-center gap-4">
          <el-badge :value="3" class="cursor-pointer">
            <el-icon :size="20" class="text-gray-500 hover:text-indigo-600 transition-colors"><Bell /></el-icon>
          </el-badge>
        </div>
      </el-header>

      <!-- Main Content -->
      <el-main class="bg-gray-50 p-6 overflow-y-auto">
        <router-view v-slot="{ Component }">
          <transition name="fade-transform" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'
import { Monitor, DataLine, School, Files, Setting, Fold, Expand, Bell, SwitchButton } from '@element-plus/icons-vue'
import { ElMessageBox } from 'element-plus'

const route = useRoute()
const router = useRouter()
const authStore = useAuthStore()

const isCollapse = ref(false)

const activeMenu = computed(() => route.path)
const currentRouteName = computed(() => route.name || 'Dashboard')

const handleLogout = () => {
  ElMessageBox.confirm('Apakah Anda yakin ingin keluar?', 'Konfirmasi', {
    confirmButtonText: 'Ya, Keluar',
    cancelButtonText: 'Batal',
    type: 'warning'
  }).then(async () => {
    await authStore.logout()
    router.push('/login')
  }).catch(() => {})
}
</script>

<style scoped>
.el-menu-item.is-active {
  background-color: rgba(99, 102, 241, 0.2) !important;
  border-right: 3px solid #818cf8;
}
.el-menu-item:hover, .el-sub-menu__title:hover {
  background-color: rgba(99, 102, 241, 0.1) !important;
}

/* Page transitions */
.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all 0.3s;
}
.fade-transform-enter-from {
  opacity: 0;
  transform: translateX(-10px);
}
.fade-transform-leave-to {
  opacity: 0;
  transform: translateX(10px);
}
</style>
