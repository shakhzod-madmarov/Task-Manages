<script>
import axios from 'axios'

export default {
  props: ['id'],
  data() {
    return {
      title: ''
    }
  },

  async mounted() {
    let { data } = await axios.get(`http://localhost:3000/tasks/${this.id}`)
    this.title = data.title
  },

  methods: {
    async handleEdit() {
      await axios.patch(`http://localhost:3000/tasks/${this.id}`, {
        title: this.title
      })
      this.$router.push('/')
    }
  }
}
</script>

<template>
  <section class="edit-task edit">
    <h1>Редактировать задачу</h1>
    <form class="edit__form" @submit.prevent="handleEdit">
      <label for="edit-title" class="edit-form__label">Заголовок:</label>
      <input
        type="text"
        name="title"
        id="edit-title"
        class="edit-form__input"
        placeholder="Пожалуйста, напишите задание на редактирование"
        v-model="title"
        required
      />
      <button type="submit" class="edit-form__btn--add">Редактировать</button>
    </form>
  </section>
</template>

<style scoped>
.edit {
  display: grid;
  place-items: center;
  gap: 20px;
}

.edit h1 {
  font-size: 35px;
  text-align: center;
  margin: 50px 0;
}
.edit__form {
  display: grid;
  gap: 20px;
  max-width: 400px;
  width: 70%;
  margin-inline: auto;
}

.edit-form__label {
  font-size: 25px;
}

.edit-form__input {
  border-bottom: 2px solid black;
  font-size: 20px;
  padding: 10px;
}

.edit-form__btn--add {
  padding: 10px;
  background: #114232;
  color: white;
  text-transform: uppercase;
  cursor: pointer;
}
</style>
