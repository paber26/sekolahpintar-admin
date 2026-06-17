<template>
  <div class="p-6 max-w-7xl mx-auto">
    <div class="flex items-center justify-between mb-8">
      <div>
        <h1 class="text-2xl font-bold text-gray-800">Manajemen Tenant Sekolah</h1>
        <p class="mt-2 text-gray-500 text-sm">Kelola data tenant sekolah dan langganan di sini.</p>
      </div>
      <el-button type="primary" size="large"><el-icon class="mr-2"><Plus /></el-icon> Tambah Sekolah</el-button>
    </div>
    
    <el-card class="shadow-sm border-none shadow-[0_2px_10px_rgba(0,0,0,0.02)] rounded-xl">
      <el-table v-loading="loading" :data="sekolahList" style="width: 100%" stripe>
        <el-table-column prop="id" label="ID" width="80" />
        <el-table-column prop="nama_sekolah" label="Nama Sekolah" min-width="200">
          <template #default="{ row }">
            <div class="font-semibold text-gray-800">{{ row.nama_sekolah }}</div>
            <div class="text-xs text-gray-400">{{ row.domain_tenant }}</div>
          </template>
        </el-table-column>
        <el-table-column prop="status_langganan" label="Status Berlangganan" width="160">
          <template #default="{ row }">
            <el-tag :type="row.status_langganan === 'aktif' ? 'success' : row.status_langganan === 'trial' ? 'warning' : 'danger'" size="small">
              {{ row.status_langganan.toUpperCase() }}
            </el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="batas_langganan" label="Berlaku Hingga" width="160">
          <template #default="{ row }">
            {{ new Date(row.batas_langganan).toLocaleDateString('id-ID') }}
          </template>
        </el-table-column>
        <el-table-column label="Aksi" width="150" fixed="right">
          <template #default>
            <el-button size="small" type="primary" plain>Edit</el-button>
            <el-button size="small" type="danger" plain>Hapus</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Plus } from '@element-plus/icons-vue'
import axiosInstance from '../api/axios'
import { ElMessage } from 'element-plus'

const sekolahList = ref([])
const loading = ref(true)

const fetchData = async () => {
  try {
    loading.value = true
    const response = await axiosInstance.get('/sekolah')
    sekolahList.value = response.data.data || response.data
  } catch (error) {
    ElMessage.error('Gagal mengambil data sekolah')
    console.error(error)
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchData()
})
</script>
