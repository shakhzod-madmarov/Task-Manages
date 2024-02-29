<!-- eslint-disable vue/multi-word-component-names -->
<script>
import axios from 'axios'

export default {
  props: ['task'],
  data() {
    return {
      url: `http://localhost:3000/tasks/${this.task.id}`
    }
  },
  emits: ['deleteTask', 'toggleCompletedTask'],

  methods: {
    async deleteTask() {
      await axios.delete(this.url)
      this.$emit('deleteTask', this.task.id)
    },
    async toggleCompletedTask() {
      await axios.patch(this.url, {
        completed: !this.task.completed
      })
      this.$emit('toggleCompletedTask', this.task.id)
    }
  }
}
</script>

<template>
  <div class="task__item--info task-info">
    <h2 class="task-info--title">{{ task.title }}</h2>
  </div>
  <ul class="task-icons__list">
    <li class="task-icons__item">
      <button class="task-icons__btn">
        <i class="fa done" :class="{ completedDone: task.completed }" @click="toggleCompletedTask"
          >&#xf00c;</i
        >
      </button>
    </li>
    <li class="task-icons__item">
      <button class="task-icons__btn">
        <i class="fa delete" @click="deleteTask">&#xf187;</i>
      </button>
    </li>
    <li class="task-icons__item">
      <button class="task-icons__btn">
        <router-link :to="{ name: 'editTask', params: { id: task.id } }">
          <i class="fa edit" @click="editTask">&#xf040;</i>
        </router-link>
      </button>
    </li>
  </ul>
</template>

<style scoped>
.task-info {
  display: flex;
}

.task-info--title {
  font-size: 25px;
}

.task-icons__list {
  display: flex;
  justify-content: space-between;
  gap: 15px;
}

.task-icons__btn {
  background-color: transparent;
  cursor: pointer;
}

.delete,
.edit {
  position: relative;
  font-size: 20px;
}

.done {
  font-size: 15px;
  color: white;
  padding: 2px;
  background-color: #7d0a0a;
  border: 2px solid #7d0a0a;
  border-radius: 50%;
  position: relative;
}

.done:hover::after,
.delete:hover:after,
.edit:hover::after {
  position: absolute;
  background-color: black;
  color: white;
  padding: 5px;
  border-radius: 5px;
  font-size: 14px;
  top: -120%;
  left: 50%;
  transform: translateX(-50%);
}

.done:hover::after {
  content: 'Завершить';
}

.delete:hover::after {
  content: 'Удалить';
}

.edit:hover::after {
  content: 'Редактировать';
}

.completedDone {
  color: white;
  padding: 2px;
  background-color: #114232;
  border: 2px solid #114232;
  border-radius: 50%;
}

@media (max-width: 450px) {
  .task-info--title {
    font-size: 18px;
  }

  .delete,
  .edit,
  .done {
    font-size: 14px;
    padding: 0;
  }
}
</style>
