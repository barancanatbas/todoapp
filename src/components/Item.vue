<template>
    <b-row class="mt-2 p-4 col-md-12 item" v-bind:class="{ active: todo.active }">
        <div class="col-md-10">
          <p>{{todo.todo}}</p>
        </div>
        <div class="col-md-1" v-if="!todo.active">
          <b-icon class="okey icon" icon="check" scale="2" variant="success" v-on:click="okey"></b-icon>
        </div>
        <div class="col-md-1" v-if="!todo.active">
          <b-icon class="close icon" icon="x-circle" scale="2" variant="danger" v-on:click="remove"></b-icon>
        </div>
        
    </b-row>
</template>

<script>
import store from "@/store/index"
export default {
  name: 'HelloWorld',
  props:["todo"],
  methods:{
    remove(){
      store.commit("removeTodo",this.todo)
    },
    okey(){
      store.commit("okeyTodo",this.todo)
    }
  }
}
</script>

<style scoped>
p{
  padding-top: 5px;
  color: black;
}
.item{
  border: 1px solid grey !important;
}

.icon{
  margin-top: 10px;
  cursor: pointer;
  display: none;
}

.item:hover .icon{
  display: inline;
}

.active{
  background: rgb(171, 216, 171);
}

</style>