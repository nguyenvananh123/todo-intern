import { createRouter, createWebHistory } from 'vue-router'
import todos from '@/views/todos.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'todos',
      component: todos
    },

  ]
})

export default router
