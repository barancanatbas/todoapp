<template>
  <b-container class="mt-5">
    <h1 class="title"> <span>#</span> Todo</h1>
    <b-row class="mt-5">
      <b-col class="col-md-11">
        <b-input-group >
          <b-form-input></b-form-input>
        </b-input-group>
      </b-col>
      <b-col class="col-md-1">
        <b-button variant="info">Add</b-button>
      </b-col>
    </b-row>
    <b-row class="col-md-10 mt-5 mx-auto">
      <item></item>
      <item></item>
    </b-row>
      
  </b-container>
</template>

<script>
import item from "@/components/Item.vue"
export default {
  name: 'Home',
  components:{
    item
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
</style>
