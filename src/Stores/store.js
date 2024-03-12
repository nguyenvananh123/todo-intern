import { defineStore } from 'pinia';
import axios from 'axios';

const api = 'http://localhost:3000/movies';

  const useMoviesStore = defineStore('movies', {
  state: () => ({
    movies: [],
  }),
  getters: {
    getMovies(state){
        return state.movies
      }
  },
  actions: {
    async fetchMovies() {
        const data = await axios.get(api);
        this.movies = data.data
    },
    
    async deleteMovies(id){
            const del = await axios.delete(`${api}/${id}`)
            
    },
    async createMovie(){
      const create = await axios.post(api ,this.movies.values)
    }

  },

});
export default useMoviesStore