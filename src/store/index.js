import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count:3,
    todos:[]
  },
  mutations: {
    initTodo(state,todo){
      state.todos.push({
        todo:todo,
        id:state.count+1,
        active:false
      })
      state.count++
    },
    removeTodo(state,todo){
      let index = state.todos.findIndex((item) => item.id === todo.id);
      console.log(index)
      state.todos.splice(index, 1);
    },
    okeyTodo(state,todo){
      let index = state.todos.findIndex((item) => item.id === todo.id)
      console.log(index)
      state.todos[index].active = true
      console.log(state.todos[index])
    }
  },
  actions: {
  },
  modules: {
  }
})
