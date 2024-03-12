import { createRouter, createWebHistory } from 'vue-router'
// import todos from '@/views/todos.vue'
import Movies from '@/views/Movies.vue'
import demoStore from '@/views/demoStore.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // {
    //   path: '/',
    //   name: 'todos',
    //   component: todos
    // },

    {
      path: '/',
      name: 'movies',
      component: Movies
    },
    // {
    //   path: '/',
    //   name: 'demoStore',
    //   component: demoStore
    // },
    {
      path: '/Create',
      name: 'create',
      component: () => import('../views/FormCreate.vue')
    },

  ]
})

export default router
