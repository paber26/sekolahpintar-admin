<template>
  <div class="p-6 max-w-7xl mx-auto">
    <div class="flex items-center justify-between mb-8">
      <h1 class="text-2xl font-bold text-gray-800">Pengaturan Sistem</h1>
    </div>
    <div class="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center justify-center min-h-[400px]">
      <el-icon :size="60" class="text-blue-200 mb-4"><Setting /></el-icon>
      <h2 class="text-xl font-bold text-gray-700">Modul Pengaturan</h2>
      <p class="text-gray-500 mt-2 text-center max-w-md">Konfigurasi dasar aplikasi dan environment akan tersedia di halaman ini.</p>
    </div>
  </div>
</template>

<script setup>
import { Setting } from '@element-plus/icons-vue'
</script>
