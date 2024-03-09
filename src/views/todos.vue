<template>
  <div class="todos">
    <h1 class="text-center">Todos Manage</h1>
    <form class="todos" @submit.prevent="createTodos">
      <input type="text" class="form-control" v-model="getTodos" />
    </form>
    <ul class="todoList">
      <li v-for="todo in todoList" :key="todo.id">
        <input
          type="checkbox"
          :value="todo.id"
          v-model="todo.learn"
          @click="todo.learn = !todo.learn"
        />
        <p>{{ todo.name }}</p>
        <div class="delete">
          <button @click="deleteTodo(todo.id)">
            <i class="bx bxs-trash-alt"></i>
          </button>
        </div>
      </li>
    </ul>
    <div class="todoFooter">
      <div>
        <p>course {{ todoList.length }}</p>
      </div>
      <div>
        <button class="btn" @click="selectTodo">Get All</button>
        <button class="btn" @click="deleteAll">Delete All</button>
      </div>
      <div>
        <button @click="unSelect" class="btn">unSelect</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const getTodos = ref('')
let todoId = 1

const todoList = ref([])
const createTodos = () => {
  if (getTodos.value != "") {
    const newTodo = {
      id: todoId++,
      name: getTodos.value,
      learn: false
    }

    todoList.value.push(newTodo)
    getTodos.value = ''
  }
  else{
    alert("Mời bạn nhập todo")
  }
}

const deleteTodo = (id) => {
  const index = todoList.value.findIndex((todo) => todo.id === id)
  if (index !== -1 && todoList.value[index].learn === true) {
    todoList.value.splice(index, 1)
  } else {
    alert('bạn Chưa chọn để xóa')
  }
}
const selectTodo = () => {
  todoList.value.forEach((todo) => {
    todo.learn = true
  })
}
const unSelect = () => {
  todoList.value.forEach((todo) => {
    todo.learn = false
  })
}

const deleteAll = () => {
  for (let i = todoList.value.length - 1; i >= 0; i--) {
    if (todoList.value[i].learn == true) {
      todoList.value.splice(i, 1)
    } else {
      alert(`Bạn chưa chọn  ${todoList.value[i].name} để xóa tất cả`)
    }
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
.todoFooter {
  width: 100%;
  background-color: rgb(172, 183, 192);
  display: flex;
  justify-content: space-between;
  height: 50px;
}
.todoFooter p {
  line-height: 50px;
}
.btn {
  border: none;
  background: none;
  font-weight: 550;
  margin: 7px 15px;
}
.btn:hover {
  border: solid 1px #333;
}
</style>
