<template>
  <div class="p-6 max-w-7xl mx-auto">
    <div class="flex items-center justify-between mb-8">
      <h1 class="text-2xl font-bold text-gray-800">Konten Belajar (LMS)</h1>
      <el-button type="primary" size="large"><el-icon class="mr-2"><Plus /></el-icon>Tambah Konten</el-button>
    </div>

    <el-card class="box-card shadow-sm border-0" body-class="p-0">
      <el-table v-loading="loading" :data="kontenList" style="width: 100%" stripe>
        <el-table-column prop="sub_bab.bab.mata_pelajaran.nama" label="Pelajaran" min-width="150" show-overflow-tooltip />
        <el-table-column prop="sub_bab.judul" label="Topik (Sub Bab)" min-width="150" show-overflow-tooltip />
        <el-table-column prop="judul" label="Judul Konten" min-width="200" show-overflow-tooltip />
        <el-table-column prop="tipe" label="Tipe" width="120">
          <template #default="{ row }">
            <el-tag size="small" :type="row.tipe === 'video' ? 'primary' : row.tipe === 'kuis' ? 'warning' : 'success'">
              {{ row.tipe }}
            </el-tag>
          </template>
        </el-table-column>
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

const kontenList = ref([])
const loading = ref(true)

const fetchData = async () => {
  loading.value = true
  try {
    const response = await axiosInstance.get('/konten')
    kontenList.value = response.data.data || response.data
  } catch (error) {
    ElMessage.error('Gagal mengambil data konten')
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchData()
})
</script>
