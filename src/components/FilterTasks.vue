<script>
export default {
  props: ['current'],
  data() {
    return {}
  },

  methods: {
    filtered(by) {
      this.$emit('filtered', by)
    }
  }
}
</script>

<template>
  <nav class="nav">
    <ul class="nav__list">
      <li class="nav__list--item nav__item">
        <button
          class="nav__item--btn"
          :class="{ active: current == 'all' }"
          @click="filtered('all')"
        >
          Посмотреть все
        </button>
      </li>
      <li class="nav__list--item nav__item">
        <button
          class="nav__item--btn"
          :class="{ active: current == 'completed' }"
          @click="filtered('completed')"
        >
          Завершенные
        </button>
      </li>
      <li class="nav__list--item nav__item">
        <button
          class="nav__item--btn"
          :class="{ active: current == 'proccess' }"
          @click="filtered('proccess')"
        >
          В процессе
        </button>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.nav {
  display: grid;
  place-items: center;
  margin: 0 0 40px;
}
.nav__list {
  max-width: 700px;
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav__item--btn {
  background: transparent;
  padding: 5px 10px;
  border: 2px solid #114232;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.5s ease;
}

.nav__item--btn:hover {
  background-color: #114232;
  color: white;
}

.active {
  background-color: #114232;
  color: white;
}

@media (max-width: 550px) {
  .nav__list {
    flex-direction: column;
    gap: 20px;
  }

  .nav__item,
  .nav__item--btn {
    width: 100%;
  }
}
</style>
