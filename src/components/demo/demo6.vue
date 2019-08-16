<template>
  <div>
    <h1>Demo6</h1>
    <Demo7 :person="person" v-on:myevent="myevent"></Demo7>
    {{value}}


  </div>

</template>

<script>
  import Demo7 from "@/components/demo/demo7"
    export default {
        name: "demo6",
      data(){
           return {
             value:'',
             person:{
               name:'ghost',
               age:18,
               count:0
             }
           }
      },
      components:{
          "Demo7":Demo7
      },
      methods:{
          myevent(val) {
            console.log(val)
            this.value = val
          }
      }
    }
</script>

<style scoped>

</style>
