<template>
  <div class="p-6 max-w-7xl mx-auto">
    <div class="flex items-center justify-between mb-8">
      <h1 class="text-2xl font-bold text-gray-800">Master Kurikulum</h1>
      <el-button type="primary" size="large"><el-icon class="mr-2"><Plus /></el-icon> Tambah Kurikulum</el-button>
    </div>
    
    <el-card class="shadow-sm border-none shadow-[0_2px_10px_rgba(0,0,0,0.02)] rounded-xl">
      <el-table v-loading="loading" :data="kurikulumList" style="width: 100%" stripe>
        <el-table-column prop="id" label="ID" width="80" />
        <el-table-column prop="nama" label="Nama Kurikulum" min-width="200" />
        <el-table-column prop="tahun" label="Tahun Berlaku" min-width="150" />
        <el-table-column prop="is_active" label="Status" width="120">
          <template #default="{ row }">
            <el-tag :type="row.is_active ? 'success' : 'danger'" size="small">
              {{ row.is_active ? 'Aktif' : 'Tidak Aktif' }}
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

const kurikulumList = ref([])
const loading = ref(true)

const fetchData = async () => {
  try {
    loading.value = true
    const response = await axiosInstance.get('/kurikulum')
    kurikulumList.value = response.data.data || response.data
  } catch (error) {
    ElMessage.error('Gagal mengambil data kurikulum')
    console.error(error)
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchData()
})
</script>
