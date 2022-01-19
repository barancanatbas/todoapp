<template>
  <b-container class="mt-5">
    <h1 class="title"> <span>#</span> Todo</h1>
    <b-row class="mt-5">
      <b-col class="col-md-11">
        <b-input-group >
          <b-form-input v-model="todo"></b-form-input>
        </b-input-group>
      </b-col>
      <b-col class="col-md-1">
        <b-button class="add" v-on:click="Add()">Add</b-button>
      </b-col>
    </b-row>
    <b-row class="col-md-10 mt-5 mx-auto">
      <item v-for="todo in todos" v-bind:key="todo.id" :todo="todo"></item>
    </b-row>
      
  </b-container>
</template>

<script>
import item from "@/components/Item.vue"
import { mapState } from "vuex";
import store from "@/store/index"

export default {
  name: 'Home',
  data(){
    return {
      todo:""
    }
  },
  components:{
    item
  },
  computed: mapState({
    todos(state){
      return state.todos
    }
  }),
  methods:{
    Add(){
      store.commit("initTodo",this.todo)
      this.todo = ""
    }
  }
}
</script>

<style scoped>
.title span{
  visibility: hidden;
}
.title:hover span{
  visibility: visible;
  color: rgb(62, 62, 129);
}
.add{
  background-color: rgb(62, 62, 129);
}
</style>
