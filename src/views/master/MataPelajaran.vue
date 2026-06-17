<template>
  <div class="p-6 max-w-7xl mx-auto">
    <div class="flex items-center justify-between mb-8">
      <h1 class="text-2xl font-bold text-gray-800">Mata Pelajaran</h1>
      <el-button type="primary" size="large"><el-icon class="mr-2"><Plus /></el-icon>Tambah Mata Pelajaran</el-button>
    </div>

    <el-card class="box-card shadow-sm border-0" body-class="p-0">
      <el-table v-loading="loading" :data="mataPelajaranList" style="width: 100%" stripe>
        <el-table-column prop="id" label="ID" width="80" />
        <el-table-column prop="nama" label="Mata Pelajaran" min-width="200" />
        <el-table-column prop="kurikulum.nama" label="Kurikulum" min-width="200" />
        <el-table-column prop="tingkat" label="Tingkat" width="120" />
        <el-table-column prop="is_active" label="Status" width="120">
          <template #default="{ row }">
            <el-tag :type="row.is_active ? 'success' : 'danger'" size="small">
              {{ row.is_active ? 'Aktif' : 'Nonaktif' }}
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
import { ElMessage } from 'element-plus'
import axiosInstance from '@/api/axios'

const mataPelajaranList = ref([])
const loading = ref(true)

const fetchData = async () => {
  loading.value = true
  try {
    const response = await axiosInstance.get('/mata-pelajaran')
    mataPelajaranList.value = response.data.data || response.data
  } catch (error) {
    ElMessage.error('Gagal mengambil data mata pelajaran')
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchData()
})
</script>
