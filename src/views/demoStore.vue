<template>
  <h1>Made By Getters</h1>
  <router-link to="/Create"> create </router-link>
  <ul>
    <li v-for="movie in moviesStore.getMovies" :key="movie.id">
      {{ movie.name }}
      <button @click="deleteMovie(movie.id)">Delete</button>
    </li>
  </ul>
</template>

<script setup>
import useMoviesStore from '@/Stores/store'
import { onMounted } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'

const moviesStore = useMoviesStore()

const deleteMovie = (id) => {
  ElMessageBox.confirm('proxy will permanently delete the file. Continue?', 'Warning', {
    confirmButtonText: 'OK',
    cancelButtonText: 'Cancel',
    type: 'warning'
  })

    .then(() => {
      moviesStore.deleteMovies(id)
      ElMessage({
        type: 'success',
        message: 'Delete completed'
      })
      moviesStore.fetchMovies()
    })

    .catch(() => {
      ElMessage({
        type: 'info',
        message: 'Delete canceled'
      })
    })
}

onMounted(() => {
  moviesStore.fetchMovies()
})
</script>
