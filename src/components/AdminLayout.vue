<template>
  <el-container class="h-screen bg-[#f3f4f7] font-sans">
    <!-- Sidebar -->
    <el-aside :width="isCollapse ? '70px' : '260px'" class="bg-[#21263c] transition-all duration-300 z-20 flex flex-col overflow-hidden">
      <!-- Logo -->
      <div class="h-[70px] flex items-center px-5 font-bold text-2xl text-white">
        <div class="flex items-center gap-2 cursor-pointer">
          <div class="w-8 h-8 rounded-lg bg-blue-500 flex items-center justify-center text-white">
            <el-icon><Connection /></el-icon>
          </div>
          <span v-if="!isCollapse" class="tracking-wider">OSEN</span>
        </div>
        <div v-if="!isCollapse" class="ml-auto text-gray-400 cursor-pointer hover:text-white" @click="isCollapse = true">
          <el-icon :size="18"><Fold /></el-icon>
        </div>
      </div>
      
      <div class="flex-1 overflow-y-auto hide-scrollbar pb-10">
        <div class="py-3 px-5 text-[11px] font-bold text-gray-500 tracking-widest mt-2">DASH</div>

        <el-menu
          :default-active="activeMenu"
          class="!border-none !bg-transparent px-3"
          text-color="#94a3b8"
          active-text-color="#ffffff"
          :collapse="isCollapse"
          :collapse-transition="false"
          router
        >
          <el-menu-item index="/">
            <el-icon><Odometer /></el-icon>
            <template #title>
              <span class="font-medium">Dashboard</span>
              <el-badge :value="5" type="success" class="ml-auto absolute right-4 top-1/2 -translate-y-1/2" />
            </template>
          </el-menu-item>
          
          <el-menu-item index="/sekolah">
            <el-icon><OfficeBuilding /></el-icon>
            <template #title><span class="font-medium">Tenant Sekolah</span></template>
          </el-menu-item>
          
          <el-menu-item index="/ewallet">
            <el-icon><Wallet /></el-icon>
            <template #title>
              <span class="font-medium">Pembayaran</span>
              <el-icon class="ml-auto absolute right-4 top-1/2 -translate-y-1/2 text-red-500"><Warning /></el-icon>
            </template>
          </el-menu-item>

          <div class="py-3 px-2 mt-4 text-[11px] font-bold text-gray-500 tracking-widest">APPS & PAGES</div>
          
          <el-sub-menu index="master">
            <template #title>
              <el-icon><Notebook /></el-icon>
              <span>Master Data</span>
            </template>
            <el-menu-item index="/master/mata-pelajaran">Mata Pelajaran</el-menu-item>
            <el-menu-item index="/master/bab">Bab & Topik</el-menu-item>
            <el-menu-item index="/master/konten">Konten Belajar</el-menu-item>
            <el-menu-item index="/master/soal">Bank Soal</el-menu-item>
          </el-sub-menu>

          <el-menu-item index="/pengaturan">
            <el-icon><Setting /></el-icon>
            <template #title><span class="font-medium">Pengaturan</span></template>
          </el-menu-item>
        </el-menu>
      </div>
    </el-aside>

    <el-container class="flex flex-col overflow-hidden">
      <!-- Topbar -->
      <el-header class="h-[70px] bg-white border-b border-gray-100 flex items-center justify-between px-6 z-10 sticky top-0 shadow-[0_2px_10px_rgba(0,0,0,0.01)]">
        <div class="flex items-center flex-1 gap-4">
          <button v-if="isCollapse" @click="isCollapse = false" class="text-gray-400 hover:text-blue-600 focus:outline-none transition-colors w-8 h-8 flex items-center justify-center rounded-md">
            <el-icon :size="20"><Expand /></el-icon>
          </button>
          
          <div class="relative w-80 flex items-center">
            <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <el-icon class="text-gray-400"><Search /></el-icon>
            </div>
            <input type="text" class="block w-full pl-10 pr-12 py-2 border-none bg-[#f3f4f7] rounded-lg text-sm text-gray-700 focus:ring-0 focus:outline-none transition-colors" placeholder="Search something...">
            <div class="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <span class="text-gray-400 text-xs font-mono bg-white px-1.5 py-0.5 rounded border border-gray-200">⌘K</span>
            </div>
          </div>

          <el-dropdown trigger="click" class="ml-4 hidden md:block">
            <span class="el-dropdown-link flex items-center gap-1 text-sm font-medium text-gray-600 cursor-pointer hover:text-blue-600 transition-colors">
              Pages <el-icon><ArrowDown /></el-icon>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>Dashboard</el-dropdown-item>
                <el-dropdown-item>Settings</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
        
        <div class="flex items-center gap-5 text-gray-500">
          <div class="hidden sm:flex items-center gap-5">
            <img src="https://flagcdn.com/w20/us.png" alt="US" class="w-5 h-auto rounded-sm cursor-pointer opacity-80 hover:opacity-100 transition-opacity">
            <el-icon class="cursor-pointer hover:text-blue-600 transition-colors text-lg"><Bell /></el-icon>
            <el-icon class="cursor-pointer hover:text-blue-600 transition-colors text-lg"><Grid /></el-icon>
            <el-icon class="cursor-pointer hover:text-blue-600 transition-colors text-lg"><Setting /></el-icon>
            <el-icon class="cursor-pointer hover:text-blue-600 transition-colors text-lg"><Moon /></el-icon>
          </div>
          
          <el-dropdown trigger="click">
            <div class="flex items-center gap-3 cursor-pointer pl-4 border-l border-gray-100 h-10">
              <div class="text-right hidden md:block">
                <p class="text-[13px] font-bold text-gray-700 leading-none mb-1">{{ authStore.user?.name || 'Dhanoo K.' }}</p>
                <p class="text-[11px] text-gray-400 leading-none">Premium</p>
              </div>
              <el-avatar :size="36" src="https://i.pravatar.cc/150?img=11" class="border-2 border-white shadow-sm"></el-avatar>
            </div>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item icon="User">Profile</el-dropdown-item>
                <el-dropdown-item icon="Setting">Settings</el-dropdown-item>
                <el-dropdown-item divided icon="SwitchButton" @click="handleLogout">Logout</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </el-header>

      <!-- Main Content -->
      <el-main class="bg-[#f3f4f7] p-0 overflow-y-auto">
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
import { Connection, Odometer, OfficeBuilding, Wallet, Warning, Collection, Setting, Fold, Expand, Search, ArrowDown, Moon, Bell, Grid, User, SwitchButton } from '@element-plus/icons-vue'
import { ElMessageBox } from 'element-plus'

const route = useRoute()
const router = useRouter()
const authStore = useAuthStore()

const isCollapse = ref(false)

const activeMenu = computed(() => route.path)

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

<style>
/* Sidebar Customization Osen Theme */
.el-menu-item, .el-sub-menu__title {
  height: 42px !important;
  line-height: 42px !important;
  border-radius: 8px;
  margin-bottom: 4px;
}
.el-menu-item.is-active {
  background-color: rgba(59, 130, 246, 0.15) !important;
  color: #3b82f6 !important;
}
.el-menu-item:hover, .el-sub-menu__title:hover {
  color: #ffffff !important;
  background-color: rgba(255, 255, 255, 0.05) !important;
}
/* Submenu background overrides */
.el-menu--collapse .el-sub-menu__title, .el-menu--inline {
  background-color: transparent !important;
}

/* Hide scrollbar */
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}
.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

/* Page transitions */
.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all 0.2s;
}
.fade-transform-enter-from {
  opacity: 0;
  transform: translateY(10px);
}
.fade-transform-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
