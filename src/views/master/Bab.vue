<template>
  <div class="p-6 max-w-7xl mx-auto">
    <div class="flex items-center justify-between mb-8">
      <h1 class="text-2xl font-bold text-gray-800">Bab & Topik</h1>
      <el-button type="primary" size="large"><el-icon class="mr-2"><Plus /></el-icon>Tambah Bab</el-button>
    </div>

    <el-card class="box-card shadow-sm border-0" body-class="p-0">
      <el-table v-loading="loading" :data="babList" style="width: 100%" stripe>
        <el-table-column prop="mata_pelajaran.nama" label="Mata Pelajaran" min-width="150" />
        <el-table-column prop="judul" label="Judul Bab" min-width="200" />
        <el-table-column prop="deskripsi" label="Deskripsi" min-width="200" show-overflow-tooltip />
        <el-table-column prop="urutan" label="Urutan" width="100">
          <template #default="{ row }">
            <el-tag size="small" type="info">Ke-{{ row.urutan }}</el-tag>
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

const babList = ref([])
const loading = ref(true)

const fetchData = async () => {
  loading.value = true
  try {
    const response = await axiosInstance.get('/bab')
    babList.value = response.data.data || response.data
  } catch (error) {
    ElMessage.error('Gagal mengambil data bab')
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchData()
})
</script>
