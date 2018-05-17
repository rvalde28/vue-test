<template>
  <div>
    <div>
      <todo v-on:delete-todo="deleteTodo(todo)" v-for="todo in todos" v-bind:todo="todo"></todo>
    </div>
  </div>
</template>

<script>

  import Todo from './Todo';

  export default{
    props:['todos'],
    components: {
      Todo,
    },
    methods:{
      deleteTodo(todo){
        const todoIndex = this.todos.indexOf(todo);
        console.log(todoIndex,todo);
        this.todos.splice(todoIndex, 1);
      },
    },
  };
</script>
