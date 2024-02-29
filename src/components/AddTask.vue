<script>
import axios from 'axios'

export default {
  data() {
    return {
      title: '',
      url: `http://localhost:3000/tasks`
    }
  },

  emits: ['taskAdded'],

  methods: {
    async addTask() {
      const newTask = {
        title: this.title,
        completed: false
      }

      await axios.post(this.url, newTask)
      this.$emit('taskAdded', newTask)
      this.title = ''
    }
  }
}
</script>

<template>
  <form class="tasks__form form" @submit="addTask">
    <label for="title" class="form__label">Заголовок:</label>
    <input
      type="text"
      name="title"
      id="title"
      class="form__input"
      placeholder="Пожалуйста, напишите задачу"
      v-model="title"
      required
    />
    <button type="submit" class="form__btn--add">Добавить</button>
  </form>
</template>

<style scoped>
.form {
  display: grid;
  gap: 20px;
  max-width: 400px;
  width: 70%;
  margin-inline: auto;
  margin-bottom: 20px;
}

.form__label {
  font-size: 25px;
}

.form__input {
  border-bottom: 2px solid black;
  font-size: 20px;
  padding: 10px;
}

.form__btn--add {
  font-size: 15px;
  padding: 10px;
  background: #114232;
  color: white;
  text-transform: uppercase;
  cursor: pointer;
}

@media (max-width: 400px) {
  .form__input {
    font-size: 15px;
    width: 100%;
  }
}
</style>
