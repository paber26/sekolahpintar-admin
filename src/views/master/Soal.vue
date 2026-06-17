<template>
  <div class="p-6 max-w-7xl mx-auto">
    <div class="flex items-center justify-between mb-8">
      <h1 class="text-2xl font-bold text-gray-800">Bank Soal</h1>
      <el-button type="primary" size="large"><el-icon class="mr-2"><Plus /></el-icon> Tambah Soal</el-button>
    </div>
    
    <el-card class="shadow-sm border-none shadow-[0_2px_10px_rgba(0,0,0,0.02)] rounded-xl">
      <el-table v-loading="loading" :data="soalList" style="width: 100%" stripe>
        <el-table-column prop="id" label="ID" width="80" />
        <el-table-column prop="konten.judul" label="Konten Kuis" min-width="200" show-overflow-tooltip />
        <el-table-column prop="pertanyaan" label="Pertanyaan" min-width="300" show-overflow-tooltip>
          <template #default="{ row }">
            <span v-html="row.pertanyaan.substring(0, 50) + (row.pertanyaan.length > 50 ? '...' : '')"></span>
          </template>
        </el-table-column>
        <el-table-column prop="bobot" label="Bobot Nilai" width="120">
          <template #default="{ row }">
            <el-tag size="small" type="info">{{ row.bobot }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="jawaban_benar" label="Kunci Jawaban" width="150">
          <template #default="{ row }">
            <el-tag size="small" type="success">Pilihan {{ row.jawaban_benar }}</el-tag>
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

const soalList = ref([])
const loading = ref(true)

const fetchData = async () => {
  try {
    loading.value = true
    const response = await axiosInstance.get('/soal')
    soalList.value = response.data.data || response.data
  } catch (error) {
    ElMessage.error('Gagal mengambil data soal')
    console.error(error)
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchData()
})
</script>
