<template>
  <div class="bullet-block">


    <div class="bullet">
              {{ todo.item }}
    </div>


    <span class = 'right floated trash icon' v-on:click="deleteTodo(todo)">
      <i class = 'trash icon'></i>
    </span>

    <div class="content" v-show="isEditing">
      <div class='ui form'>
        <div class='field'>
          <label>Item</label>
          <input type='text' v-model='todo.title'>
        </div>

        <div class="ui two button attached buttons">
          <button class='ui basic blue button' v-on:click="hideForm">
            Close X
          </button>
        </div>
      </div>
    </div>



  </div>
</template>

<script>
  export default{
    props:['todo'],
    data() {
      return {
        isEditing: false,
      };
    },
    methods: {
      showForm(){
        this.isEditing = true;
      },
      hideForm(){
        this.isEditing = false;
      },
      deleteTodo(todo){
        this.$emit('delete-todo');
      }
    },
  };
</script>
