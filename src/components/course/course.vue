<template>
<div class="wrapper">
  <div class="container">

  <div class="topnav">
    <div class="logo">
      <a href="http://localhost:8080/home" class="logoa">ghosthome</a>
    </div>
    <div class="search">
      <el-input
        placeholder="请输入内容"
        prefix-icon="el-icon-search"
        v-model=" searchContent">
      </el-input>
      <el-button>搜索</el-button>
    </div>
  </div>
    <div class="center">
      <div class="centerbox">
      <h1>web 前端教程</h1>
      </div>
    </div>
    <div class="textpart">
      <div class="article">
      <ul v-for="art in article">
        <li class="titleshow"><span class="icon iconfont icon-erciyuankong"></span><a :href="art.url" target="frame"> {{art.title}}</a> </li>
        <li class="demoshow"> <span class="icon iconfont icon-dengpao"></span><a :href="art.url" target="frame"> demo展示</a></li>
      </ul>      </div>

      <div class="show">
        <iframe src="" frameborder="0" name="frame"></iframe>
      </div>
    </div>
    <div class="tail">
      <p>copy@right:2019猎剑</p>
    </div>
  </div>

</div>
</template>

<script>
    export default {
        name: "course",
      data(){
          return {
            searchContent : "",
            article: [
              {
                 title:"CSS中的透明度设置",
                 content:"珍贵内容，经典教程",
                  url:"https://blog.csdn.net/weixin_42393089/article/details/95739993"
            },
              {
                title:"CSS中的居中",
                content:"珍贵内容，经典教程",
                url:"https://blog.csdn.net/weixin_42393089/article/details/94991435"
              },
              {
                title:"git的使用",
                content:"珍贵内容，经典教程",
                url:"https://blog.csdn.net/weixin_42393089/article/details/94991435"
              },
              {
                title:"world",
                content:"珍贵内容，经典教程",
                url:"https://blog.csdn.net/weixin_42393089/article/details/94991435"
              }
            ]
          }
      }
    }
</script>

<style scoped>
  @import "//at.alicdn.com/t/font_1334719_hnbtn2cq6bk.css";
html{
  background-color: lightgoldenrodyellow;
}

.wrapper{

  width: 100%;
  background-color: lightgoldenrodyellow;
}
  .container{
    width: 90%;
    background-color: white;
    margin: 0 auto;
    min-width: 800px;
  }
  .topnav{
    height: 150px;
    justify-content: space-between;
    display: flex;
  }
  .topnav .logo {
    /*text-indent: -1999px;*/
    height: 150px;
    width: 550px;

  }
  .topnav .logo .logoa{
    text-indent: -9999px;
    display: block;
    /*border: 1px solid red;*/
    height: 150px;
    width: 550px;
    background-image: url("../../assets/mylogo.jpg");
    background-repeat: no-repeat;
    background-position: center center;
  }

  .topnav .search{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 130px;
    /*border: 1px solid red;*/

  }
  .topnav .el-input{
    width: 300px;

  }
  .topnav button{
  margin-left: 5px;
  }
  .center {
     color: #42b983;
      font-size: 16px;
      font-weight: bold;

    padding: 20px ;

  }
  .center h1{
    display: block;
    font-size: 1.5em;
    color: skyblue;
    border-left:5px  deeppink solid;
     padding: 10px;
    font-family: 华文楷体;
  }
  .center .centerbox{
    border-bottom: 1px solid deeppink;
  }
  .textpart{
    /*border: 1px solid blue;*/
    display: flex;

  }
  .textpart .article{
    /*border: 1px solid red;*/
    flex: 1;
  }
.textpart .article ul{
  font-size: 10px;
}
.textpart .article li{
  margin: 0;
  padding: 0;
  font-size: 16px;
  text-decoration: none;
  list-style: none;
}

.textpart .article li a::selection{
    color: gold;
  background-color: orangered;
}
.textpart .article li a{
   text-decoration: none;
   color: deepskyblue;
}
.textpart .article li a:hover{
  color: deeppink;
  font-size: 1.2em;
  text-shadow: 1px 1px 2px deeppink;
}
  .textpart .article .titleshow{
    color: skyblue;
  }
  .textpart .article .demoshow{
    color: greenyellow;
  }
  .textpart .article .demoshow a{
    color: green;
  }

  .textpart .show{
    flex: 2;
    /*border: 1px skyblue solid;*/
  }
  .textpart iframe{
    width: 100%;
    height: 500px;
  }
  .tail{
    background-color:  #F9F9F9;
    color: deeppink;
    height: 80px;

    text-align: center;
  }
.tail{
line-height: 80px;
}




</style>
