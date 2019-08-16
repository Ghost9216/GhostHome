<template>
  <div class="wrapper">
  <div class="container">
    <div class="headerNav"><CommHeader></CommHeader></div>
    <div class="content">
    <div class="navContent">
      <ul class="tools clearfix">
        <li><router-link to="/home">网站首页</router-link></li>
        <li><router-link to="/demo4">查看文章</router-link></li>
        <li><router-link to="/home">联系我们</router-link></li>
      </ul>
    </div>
     <div class="editContent">
       <div class="acticelTitle">
         <input type="text" placeholder="请输入文章标题" v-model="title" >
         <button @click="submit"> 发布文章</button>
       </div>
    <mavon-editor :ishljs = "true" style=" min-height: 600px ; min-width: 300px "
      v-model="content"
      ref=md
      @change="change"

    />
     </div>
    </div>
    <CommFooter></CommFooter>
  </div>
  </div>
  </template>

<script>
  import CommHeader from  '@/components/CommHeader'
  import { mavonEditor } from 'mavon-editor'
  import 'mavon-editor/dist/css/index.css'
  import CommFooter from '@/components/CommFooter'
    export default {
        name: "Markdown",
      data(){
          return{
            title:"",
            content:'', // 输入的markdown
            html:'',    // 及时转的html
          }
      },
      components:{
        'mavonEditor':mavonEditor,
        'CommHeader': CommHeader,
        "CommFooter": CommFooter
      },
      methods: {
        // 所有操作都会被解析重新渲染
        change(value, render) {
          // render 为 markdown 解析后的结果[html]
          this.html = render;
        },
        // 提交
        submit() {
          console.log(this.content);
          console.log(this.html);
          console.log(this.title)
        }
      }

    }
</script>

<style scoped>
.wrapper{
  width: 100%;
  margin: 0;

}
  .container{
    width: 90%;
    background-color: white;
    margin: 0 auto;
    margin-bottom: 0;
  }
  .content{
    min-height: 600px;
    margin-bottom: 30px;

  }
  .clearfix::after{
    content: "";
    display: block;
    clear: both;
  }
.content .navContent ul{
  height: 40px;
}
.content .navContent li{
  float: left;
  list-style: none;
  color: skyblue;
  font-family: 华文楷体;
  font-size: 1.5em;
  line-height: 40px;
  margin-left: 20px;
}
.content .navContent li a{
  text-decoration: none;
  color: skyblue;
}
.content .navContent li a:hover{
  text-decoration: none;
  color: deeppink;
}
  .editContent{
    width: 90%;
    margin: 0 auto;

  }
.editContent .acticelTitle{
  height: 4em;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1em;

}
.editContent .acticelTitle input{
  flex: 3;
  height:2.5em;
  border-radius: 0.5em;
  border: 1px solid skyblue;
  font-size: 1em;
  font-weight: bold;
}
.editContent .acticelTitle input:focus{
   border: 1px solid deepskyblue;
  outline: none;

}
.editContent .acticelTitle button{
  outline: none;
  margin: 0 30px;
  flex: 1;
  height:3.5em;
  border-radius: 0.8em;
  background-color: skyblue;
  border: 1px solid skyblue;
  font-family: 华文楷体;
  font-weight: bold;
}
.editContent .acticelTitle button:hover{
  background-color: deepskyblue;
  color: deeppink;
}



</style>
