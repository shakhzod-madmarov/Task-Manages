<!-- eslint-disable vue/multi-word-component-names -->
<script>
import axios from 'axios'

import Task from '../components/Task.vue'
import AddTask from '@/components/AddTask.vue'
import FilterTasks from '@/components/FilterTasks.vue'

export default {
  data() {
    return {
      tasks: [],
      current: 'all'
    }
  },
  components: {
    Task,
    AddTask,
    FilterTasks
  },

  async mounted() {
    let response = await axios.get('http://localhost:3000/tasks')
    this.tasks = response.data
  },

  methods: {
    handleDelete(id) {
      this.tasks = this.tasks.filter((task) => task.id !== id)
    },

    handleToggle(id) {
      let findTask = this.tasks.find((task) => task.id == id)
      findTask.completed = !findTask.completed
    },
    async handleTaskAdd(newTask) {
      this.tasks.push(newTask)
    }
  },

  computed: {
    // eslint-disable-next-line vue/return-in-computed-property
    checkFilter() {
      if (this.current == 'all') {
        return this.tasks
      }
      if (this.current == 'completed') {
        return this.tasks.filter((task) => task.completed == true)
      }
      if (this.current == 'proccess') {
        return this.tasks.filter((task) => task.completed == false)
      }
    }
  }
}
</script>

<template>
  <section class="tasks__section">
    <h1 class="tasks__title">Список задач</h1>
    <FilterTasks @filtered="current = $event" :current="current" />
    <div class="tasks">
      <AddTask @taskAdded="handleTaskAdd" />
      <ul class="tasks__list">
        <li v-for="task in checkFilter" :key="task.id" class="tasks__list--item task__item">
          <Task :task="task" @deleteTask="handleDelete" @toggleCompletedTask="handleToggle" />
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.tasks__section {
  margin-inline: auto;
  max-width: 1100px;
  width: 90%;
  display: block;
}
.tasks__title {
  text-align: center;
  font-size: 35px;
  margin: 50px 0;
}
.tasks {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

.tasks__list {
  display: grid;
  gap: 20px;
  max-width: 500px;
  width: 80%;
  height: 500px;
  margin-inline: auto;
  overflow: scroll;
}

.tasks__list--item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid #114232;
  border-radius: 10px;
  padding: 10px 35px 10px 15px;
  width: 100%;
  height: 80px;
}

@media (max-width: 350px) {
  .tasks__list--item {
    flex-direction: column;
    justify-content: center;
    gap: 10px;
  }
}
</style>
