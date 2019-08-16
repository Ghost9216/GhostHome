<template >
<div>
  <h1>Demo7</h1>
  <ul>
    <h1>父组件传来的值：</h1>
    <li>{{person.name}}</li>
    <li>{{person.age}}</li>
    <li>{{person.count}}</li>
  </ul>
<button @click="add"> click me </button>
<button @click="trans">传值给父组件</button>
  <Demo8 v-slot="slotProps">
{{ slotProps.user.lastName}}
  </Demo8>

</div>
</template>

<script>
  import  Demo8 from "@/components/demo/demo8"
    export default {
        name: "demo7",
      data(){
          return{
             title:"我是demo7组件"
          }
      },
      props:{
          person: {
            required: true,
            type: Object,
            default:{
              name:"猎剑",
              age: 20,
              count:10
            }
          }
      },
      mounted() {
          console.log(this.person)
      },
      methods:{
          add(){

            this.person.count++;
            // console.log(this.count)
          },
          trans(){
            console.log(this.title)
            this.$emit('myevent', this.title)
          }

      },
     components:{
          'Demo8':Demo8
     }
    }

</script>

<style scoped>

</style>
