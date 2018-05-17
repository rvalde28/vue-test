<template>
  <div class= 'ui basic content centered aligned segment outer'>
    <button class=' plus-button ui basic button icon plus-button' v-on:click="openForm" v-show="!isCreating">
      <i class= 'plus icon'></i>
    </button>

    <div class='ui centered card' v-show="isCreating">
      <div class='content'>

        <div class = 'ui form'>
          <div class = 'field'>
            <label>Item</label>
            <input style="width:90%" v-model="item" type='text'  defaultValue="">
          </div>
        </div>

        <div class='io two button attached buttons'>
          <button class='ui basics blue button' v-on:click="sendForm()">
            Create
          </button>
          <button class='ui basic red button' v-on:click="closeForm()">
            Cancel
          </button>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        item: '',
        isCreating: false,
      };
    },

    methods: {
      openForm(){
        this.isCreating = true;
      },
      closeForm(){
        this.isCreating = false;
      },
      sendForm(){
        if(this.item.length > 0){
          const item = this.item;

          this.$emit('create-todo',item);

          this.newTodoText = '';
        }
        this.isCreating = false;
      },
    },
  };
</script>
