import { createRouter, createWebHistory } from 'vue-router'
import Tasks from '../views/Tasks.vue'
import EditTask from '../views/EditTask.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Tasks
    },
    {
      path: '/edit/:id',
      name: 'editTask',
      component: EditTask,
      props: true
    }
  ]
})

export default router
