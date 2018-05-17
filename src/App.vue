<template>
  <div id="app">
    <todo-list v-bind:todos="todos"></todo-list>

    <create-todo v-on:create-todo="addTodo"></create-todo>
  </div>
</template>

<script>
  import TodoList from './components/TodoList.vue';
  import CreateTodo from './components/CreateTodo.vue';
  import './assets/css/style.css';

  export default{
    name: 'app',
    components:{
      TodoList,
      CreateTodo,
    },
    data(){
        return{
        todos: [
        {
          item: 'Bananas',
        },
        {
          item: 'Pineapple',
        },
        {
          item: 'Cake',
        }],
      };
    },

    methods:{
      addTodo(item){
        this.todos.push({
          item
        });
      },
    },
  };
</script>
