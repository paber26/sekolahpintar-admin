<template>
  <div class="p-6 max-w-7xl mx-auto">
    <div class="flex items-center justify-between mb-8">
      <h1 class="text-2xl font-bold text-gray-800">Bank Materi</h1>
      <el-button type="primary" size="large"><el-icon class="mr-2"><Plus /></el-icon> Tambah Materi</el-button>
    </div>
    
    <el-card class="shadow-sm border-none shadow-[0_2px_10px_rgba(0,0,0,0.02)] rounded-xl">
      <el-table v-loading="loading" :data="materiList" style="width: 100%" stripe>
        <el-table-column prop="id" label="ID" width="80" />
        <el-table-column prop="kurikulum.nama" label="Kurikulum" min-width="150" />
        <el-table-column prop="tingkat" label="Tingkat" width="100" />
        <el-table-column prop="mata_pelajaran" label="Mata Pelajaran" min-width="180" />
        <el-table-column prop="judul" label="Judul Materi" min-width="250" />
        <el-table-column prop="tipe" label="Tipe" width="100">
          <template #default="{ row }">
            <el-tag :type="row.tipe === 'video' ? 'danger' : row.tipe === 'pdf' ? 'warning' : 'info'" size="small">
              {{ row.tipe.toUpperCase() }}
            </el-tag>
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
import axiosInstance from '../../api/axios'
import { ElMessage } from 'element-plus'

const materiList = ref([])
const loading = ref(true)

const fetchData = async () => {
  try {
    loading.value = true
    const response = await axiosInstance.get('/materi')
    materiList.value = response.data.data || response.data
  } catch (error) {
    ElMessage.error('Gagal mengambil data materi')
    console.error(error)
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchData()
})
</script>
