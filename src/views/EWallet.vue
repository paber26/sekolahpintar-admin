<template>
  <div class="p-6 max-w-7xl mx-auto">
    <div class="flex items-center justify-between mb-8">
      <h1 class="text-2xl font-bold text-gray-800">Pembayaran (E-Wallet)</h1>
    </div>
    <div class="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center justify-center min-h-[400px]">
      <el-icon :size="60" class="text-blue-200 mb-4"><Wallet /></el-icon>
      <h2 class="text-xl font-bold text-gray-700">Modul Pembayaran</h2>
      <p class="text-gray-500 mt-2 text-center max-w-md">Fitur pengelolaan dompet digital dan riwayat transaksi tenant sekolah akan tersedia di sini.</p>
    </div>
  </div>
</template>

<script setup>
import { Wallet } from '@element-plus/icons-vue'
</script>
