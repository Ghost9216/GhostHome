<template>

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
</template>

<script>
    export default {
        name: "CommHeader",
      data(){
          return{
            searchContent:""
          }
      }
    }
</script>

<style scoped>
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
    background-image: url("../assets/mylogo.jpg");
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
</style>
