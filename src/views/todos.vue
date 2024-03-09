<template>
  <div>
    <h1 class="text-center">Todos Manage</h1>
    <form class="todos" @submit.prevent="createTodos">
      <input type="text" class="form-control" v-model="getTodos" />
    </form>
    <ul class="todoList">
      <li v-for="todo in todoList" :key="todo.id">
        <input type="checkbox" :value="todo.id" @click=" todo.learn = !todo.learn" />
        <p>{{ todo.name }}</p>
        <div class="delete">
          <button @click="deleteTodo(todo.id)">
            <i class="bx bxs-trash-alt"></i>
          </button>
        </div>
      </li>
    </ul>
    <div class="todoFooter">
      <p>course {{ todoList.length }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const getTodos = ref('')
let todoId = 1

const todoList = ref([])
const createTodos = () => {
  const newTodo = {
    id: todoId++,
    name: getTodos.value,
    learn: false
  }

  todoList.value.push(newTodo)
  getTodos.value = ''
}


const deleteTodo = (id) => {
  const index = todoList.value.findIndex((todo) => todo.id === id)
  if (index !== -1 &&  todoList.value[index].learn === true) {
        todoList.value.splice(index, 1)
  }
  else{
    alert("bạn Chưa chọn để xóa")
  }
}
</script>

<style>
.todos,
.todoList {
  width: 650px;
  margin: 15px auto;
}
.text-center {
  color: red;
  font-style: italic;
  font-family: sans-serif;
  font-weight: 550;
}

.todoList li {
  margin: 0 15px;
  list-style: none;
  display: flex;
  background-color: aliceblue;
  padding: 15px;
}
.todoList li p {
  margin: 0 15px;
}
.todoList li button {
  border: none;
  background: none;
  position: absolute;
  right: 0;
}
.todoList input {
  width: 21px;
}
.delete {
  width: 100%;
  position: relative;
}
</style>
