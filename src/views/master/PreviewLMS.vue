<template>
  <div class="p-6 max-w-7xl mx-auto">
    <div class="flex items-center justify-between mb-8">
      <div>
        <h1 class="text-2xl font-bold text-gray-800">Preview Pohon LMS</h1>
        <p class="text-gray-500 mt-1">Simulasi tampilan materi yang akan dilihat oleh guru di sekolah.</p>
      </div>
    </div>

    <el-card class="box-card shadow-sm border-0">
      <div v-loading="loading">
        <el-empty v-if="!loading && treeData.length === 0" description="Belum ada data mata pelajaran" />
        
        <el-tree
          v-else
          :data="treeData"
          :props="defaultProps"
          default-expand-all
          class="preview-tree"
        >
          <template #default="{ node, data }">
            <span class="custom-tree-node flex items-center gap-2">
              <el-icon v-if="data.type === 'pelajaran'" class="text-blue-500"><Reading /></el-icon>
              <el-icon v-else-if="data.type === 'bab'" class="text-indigo-500"><Folder /></el-icon>
              <el-icon v-else-if="data.type === 'sub_bab'" class="text-green-500"><Document /></el-icon>
              <el-icon v-else-if="data.type === 'konten_video'" class="text-red-500"><VideoPlay /></el-icon>
              <el-icon v-else-if="data.type === 'konten_kuis'" class="text-orange-500"><List /></el-icon>
              <el-icon v-else-if="data.type === 'konten_teks'" class="text-gray-500"><Tickets /></el-icon>
              <el-icon v-else-if="data.type === 'soal'" class="text-purple-500"><EditPen /></el-icon>
              
              <span class="font-medium" :class="{'text-lg': data.type === 'pelajaran'}">{{ node.label }}</span>
              
              <el-tag v-if="data.info" size="small" type="info" class="ml-2">{{ data.info }}</el-tag>
            </span>
          </template>
        </el-tree>
      </div>
    </el-card>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Reading, Folder, Document, VideoPlay, List, Tickets, EditPen } from '@element-plus/icons-vue'
import { ElMessage } from 'element-plus'
import axiosInstance from '@/api/axios'

const treeData = ref([])
const loading = ref(true)

const defaultProps = {
  children: 'children',
  label: 'label',
}

const formatTreeData = (rawData) => {
  return rawData.map(pelajaran => {
    return {
      id: `pelajaran-${pelajaran.id}`,
      label: pelajaran.nama,
      type: 'pelajaran',
      children: (pelajaran.babs || []).map(bab => {
        return {
          id: `bab-${bab.id}`,
          label: `Bab: ${bab.judul}`,
          type: 'bab',
          children: (bab.sub_babs || []).map(subBab => {
            return {
              id: `subbab-${subBab.id}`,
              label: `Topik: ${subBab.judul}`,
              type: 'sub_bab',
              children: (subBab.kontens || []).map(konten => {
                let iconType = 'konten_teks'
                if (konten.tipe === 'video') iconType = 'konten_video'
                if (konten.tipe === 'kuis') iconType = 'konten_kuis'
                
                return {
                  id: `konten-${konten.id}`,
                  label: konten.judul,
                  type: iconType,
                  info: konten.tipe,
                  children: konten.tipe === 'kuis' ? (konten.soals || []).map((soal, idx) => ({
                    id: `soal-${soal.id}`,
                    label: `Soal ${idx + 1}: ${soal.pertanyaan.substring(0, 30)}...`,
                    type: 'soal'
                  })) : []
                }
              })
            }
          })
        }
      })
    }
  })
}

const fetchData = async () => {
  loading.value = true
  try {
    const response = await axiosInstance.get('/preview-lms')
    const rawData = response.data.data || response.data
    treeData.value = formatTreeData(rawData)
  } catch (error) {
    ElMessage.error('Gagal mengambil data preview LMS')
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchData()
})
</script>

<style scoped>
.preview-tree {
  padding: 1rem;
  background: transparent;
}
.custom-tree-node {
  font-size: 14px;
}
</style>
