<template>
<header>
<div class="warpper">
  <div class="logo">
<!--    <div class="logoImg">-->
<!--      <img src="../assets/剑.jpg" alt="">-->
      <a href="#" class="logoImg">GhostHome</a>
<!--    </div>-->
    <div class="logoSeach">
      <div class="seachContent">
      <el-input
        placeholder="请输入内容"
        prefix-icon="el-icon-search"
        v-model=" searchContent">
      </el-input>
      <el-button>搜索</el-button>
      </div>
    </div>
    </div>
  <div class="nav">
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
    <el-menu-item index="1">主页</el-menu-item>
    <el-submenu index="2">
      <template slot="title"> 教程</template>
      <el-menu-item index="2-1"> <router-link to="/course">web前端教程</router-link></el-menu-item>
      <el-menu-item index="2-2"><router-link to="/demo4">技术文章</router-link> </el-menu-item>
      <el-menu-item index="2-3"><router-link to="/demo/demo1">路由嵌套test</router-link></el-menu-item>
      <el-submenu index="2-4">
        <template slot="title">选项4</template>
        <el-menu-item index="2-4-1">选项1</el-menu-item>
        <el-menu-item index="2-4-2">选项2</el-menu-item>
        <el-menu-item index="2-4-3">选项3</el-menu-item>
      </el-submenu>
    </el-submenu>
    <el-menu-item index="3"><router-link to="/rmain">资源</router-link></el-menu-item>
    <el-menu-item index="4"> <router-link to="/aboutme">联系我</router-link> </el-menu-item>
    <el-menu-item index="5"> <router-link to="/Markdown">我要发文</router-link> </el-menu-item>
    <el-menu-item index="6"> <router-link to="/demo5">杂事记录</router-link> </el-menu-item>

  </el-menu>
    </div>
    </div>
  <div class="topShowWrap">
  <div class="topShow">
  <div class="horelamp">
    <el-carousel height="300px" >
      <el-carousel-item v-for="(img,index) in imgList" :key="index">
        <div class="content">
          <img :src="img.url" alt="">
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
    <div class="horelist">
      <el-collapse v-model="activeName" accordion>
        <el-collapse-item title="二次元" name="1">
          <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
          <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
        </el-collapse-item>
        <el-collapse-item title="资源" name="2">
          <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
          <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
        </el-collapse-item>
        <el-collapse-item title="教程" name="3">
          <div>简化流程：设计简洁直观的操作流程；</div>
          <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
          <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
        </el-collapse-item>
        <el-collapse-item title="联系我们" name="4">
          <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
          <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</div>
</header>
</template>

<script>
  export default {
    name:"appheader",
    data(){
      return{
        activeIndex:'1',
        activeName:'1',
        imgList: [
          {url:require('../assets/img/1.jpg') },
          {url:require('../assets/img/2.jpg') },
          {url:require('../assets/img/3.jpg') },
          {url:require('../assets/img/4.jpg') },
          {url:require('../assets/img/5.jpg') },
        ],
        searchContent:''
      }
    },
 methods:{
   handleSelect(key, keyPath) {
     console.log(key, keyPath);
   }
 }
  }
</script>

<style scoped>
 .logo{

   display:flex;
   /*position: fixed;*/
   width: 1190px;
   height: 150px;
   /*border: 1px solid black;*/
   justify-content: center;
    align-items: center;
   background-color: white;
 }
  .logoImg{
    /*border: 1px solid red;*/
    text-indent: -9999px;
    background-image: url("../assets/mylogo.jpg");
    /*background-size: cover;*/
    background-position: 20px center;
    background-repeat: no-repeat;
    /*flex: 1;*/
    /*border: 1px solid blue;*/
    display: inline-block;
    box-sizing: border-box;
    width:500px;
    height: 150px;
    margin: 45px;
    margin-left: -30px;

  }

  .logoSeach{
    /*border: 1px solid red;*/
    position: relative;
    display: flex;
    /*border: 1px solid red;*/
    display: inline-block;
    box-sizing: border-box;
    width: 500px;
    height: 150px;
    justify-content: center;
    align-items: center;
    margin-left: -60px;
  }
  .seachContent{


    /*border: 1px solid blue;*/
    width: 408px;
    height: 44px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -20px;
    margin-left: -204px;

  }
 .el-button{
   /*border: 1px solid red;*/
   width: 100px ;
  }
 .el-input{
   /*border: 1px solid yellow;*/
   width: 300px;
 }
  .warpper{
    margin: 0 ;
    width: 1190px;
    background-color: white;
    border: 0;
  }
.nav{
  margin:0 30px;
  /*border: 1px solid blue;*/
}


  .topShowWrap{
    margin: 10px 0;
    height: 350px;
    position: relative;
  }
.topShow{
  height: 350px;

}
.horelamp {
  width: 530px;
  height: 350px;
  display: inline-block;
  margin: 10px 40px 0px 25px ;

}
.horelist{
  height: 350px;
  width: 530px;
  margin: 10px 40px 0px 20px;
  display: inline-block;
}
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
 .router-link{
  text-decoration: none;
 }
a{
  text-decoration: none;
}
</style>
