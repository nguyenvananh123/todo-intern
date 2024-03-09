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
          @click="checkd"
          
        />
        <p :class="{isText: todo.learn}">{{ todo.name }}</p>

   
        <p v-if="todo.learn"> complete </p>
        <p v-else> {{ todo.job }} </p>

        <div class="delete">
          <button @click="deleteTodo(todo.id)">
            <i class="bx bxs-trash-alt"></i>
          </button>
        </div>
      </li>
    </ul>
    <div class="todoFooter">
      <div>
        <p class="course" >Course {{selectedTodos}}</p>
        <p>{{todoList.length}}</p>
        <p></p>
      </div>
      <div>
        <button class="btn_" @click="selectTodo">Get All</button>
        <button class="btn_" @click="deleteAll">Delete All</button>
      </div>
      <div>
        <button @click="unSelect" class="btn_">unSelect</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref,computed  } from 'vue'

const getTodos = ref('')
let todoId = 1
const todoList = ref([])



console.log(todoList);
const selectedTodos = computed(() => {
  if(todoList.value.length > 0){
    return todoList.value.filter((todo) => todo.learn).length;
  }
  else{
    return todoList.value.length
  }
});

const checkd = ()=>{
  if(selectedTodos >0){
    selectedTodos.value = todoList.value.filter((todo) => todo.learn).length;
  } 
}
const job = todoList.value - selectedTodos


const createTodos = () => {
  if (todoList.value.length < 10) {
    if (getTodos.value != '') {
      const newTodo = {
        id: todoId++,
        name: getTodos.value,
        learn: false,
        job:"unfinished"
      }

      todoList.value.push(newTodo)
      getTodos.value = ''
    } else {
      alert('Mời bạn nhập công việc')
    }
  }
  else{
    alert("qua tai")
  }
}

const deleteTodo = (id) => {
  const index = todoList.value.findIndex((todo) => todo.id === id)
  if (index !== todoList.value.id && todoList.value[index].learn === true) {
    todoList.value.splice(index, 1)
    todoList.value.length
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
.course {
  font-weight: 550;
  font-size: 1rem;
  padding: 0 15px;
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
  background-color: rgb(213, 215, 217);
  display: flex;
  justify-content: space-between;
  height: 50px;
}
.todoFooter p {
  line-height: 50px;
}
.btn_ {
  border: none;
  background: none;
  font-weight: 550;
  margin: 7px 15px;
  padding: 6px;
}
.btn_:hover{
  box-shadow: 0 0 3px 1px rgba(31 01 20);
}

.isText{
  text-decoration: line-through;
}
</style>
