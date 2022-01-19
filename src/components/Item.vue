<template>
    <b-row class="mt-2 p-4 col-md-12 item">
        <div class="col-md-11">
          <p>{{todo.todo}}</p>
        </div>
        <div class="col-md-1">
          <b-icon class="close" icon="x-circle" scale="2" variant="danger" v-on:click="remove"></b-icon>
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
.close{
  margin-top: 10px;
  cursor: pointer;
}

</style>