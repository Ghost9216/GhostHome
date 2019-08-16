<template>
<div class="wrapper">
  <div class="container">
  <CommHeader></CommHeader>
    <div class="center">
      <h1>文章列表</h1>
      <p>输入关键字搜索文章标题：<input type="text " placeholder="(๑•̀ㅂ•́)و✧搜索文章" v-model = search></p>
 <ul v-for="article in   filteredArticle">
   <router-link to="/home">
   <li v-rainbow>{{ article.title}}</li>
   <li>{{article.content.slice(0,100)+ "....."}}</li>
   </router-link>
 </ul>
    </div>
  <CommFooter></CommFooter>
  </div>
</div>
</template>

<script>
  import CommHeader from "@/components/CommHeader"
  import CommFooter from "@/components/CommFooter"
  import axios from 'axios';
  import  "@/mock/mock"
    export default {
        name: "demo4",
      data(){
          return{
            article:[],
            search:""

          }
      },
      methods:{

      },
      mounted() {
         axios.get('msg').then(
           res =>{
             console.log(res)
             console.log(res.data)
              this.article = res.data
           }
         )
      },
      components:{
           'CommHeader':CommHeader,
           'CommFooter':CommFooter
      },
      directives:{
          rainbow:{
            bind(el){
              el.style.color = "#" + Math.random().toString(16).slice(2,8);
            }
          }
      },
      computed:{
        filteredArticle: function () {
          return this.article.filter((article)=>{
            return article.title.match(this.search)
          })

        }
      }
    }

</script>

<style scoped>
  *{
    text-decoration: none;
    list-style: none;
  }
.container{
  width: 1100px;
  background-color: white;
  margin: 0 auto;
}
.center h1{
  text-align: center;
  font-family: 华文仿宋;
}
.center p{
  text-align: center;
  font-family: 华文宋体;
}
.center input {
  width: 250px;
  border-radius:5px;
 border: 1px solid deeppink;
  outline: none;
  padding: 10px;

}
  .center input:focus {

    border: 1px solid skyblue;


  }
ul{
  /*border: 3px solid yellow;*/
   display: block;
  /*border: 1px solid red;*/
  box-shadow: 0px 0px 3px silver ;
   /*background-color:skyblue;*/
  width: 900px;
  margin: 10px auto;
  font-family: 华文楷体;

}

ul:first-of-type{
  margin-top: 0px;
}
  ul li:first-child {
    font-size: 1.8em;
    list-style: none;
    margin-top: 30px;
  }
  ul li:last-child{
    color: black;
  }


</style>
