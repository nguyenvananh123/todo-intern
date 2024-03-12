<template>
  <form class="screen" @submit.prevent="createMovies()">
    <div class="container">
      <div class="row"><h1 class="title">Now,Create new movie...</h1></div>
      <div class="form-group">
        <div class="form-item col">
          <label>What is the full name of the movie?</label>
          <input type="text" />
        </div>
        <br />
        <div class="form-item col">
          <label>Who are the actors?</label>

          <input type="text" style="width: 750px" />
        </div>
      </div>
      <div class="row">
        <div class="col-7">
          <div class="section" style="width: 750px">
            <p>Please fill in movie information so users can watch your movie</p>
            <div class="form-group">
              <div class="form-item col">
                <label>Episode number of the series</label>

                <input id="name" type="text" />
              </div>
              <div class="form-item col">
                <label>Who is the director of the movie?</label>

                <input type="text" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />

      <div class="col-4">
        <div class="section right">
          <p>
            Tell us what you need help with, the purpose of this project and problems wr’re solving.
          </p>
          <div class="form-item">
            <label for="about">What is the description of the movie?</label>
            <textarea />
          </div>
        </div>
      </div>
    </div>

    <div class="action">
      <div class="container">
        <div class="progress">
          <div class="progress-inner">
            <div class="progress-mask"></div>
          </div>
        </div>
        <button type="submit" class="btn btn-submit">Submit</button>
      </div>
    </div>
  </form>
</template>
<script setup>
import '@/assets/css/Create.css'
import useMoviesStore from '@/Stores/store'
import { onMounted } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
const moviesStore = useMoviesStore()
const moviesInit = ref({
  name: ''
})
const createMovies = () => {}

onMounted(() => {
  moviesStore.fetchMovies()
})
</script>
