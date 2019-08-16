<template>
<footer>
  <ul>
    <li><a href="mailto:ghostdot@163.com" >联系.投稿.建议 to：ghostdot@163.com</a></li>
    <li><a href="tel:18208891933">  Copyright ©2019-2020 猎剑 All Rights Reserved.·Themes By猎剑</a></li>

  </ul>
</footer>
</template>

<script>
    export default {
        name: "AppFooter"
    }
</script>

<style scoped>
 footer{
   display: flex;
   height: 100px;
   background-color: #F9F9F9;
   justify-content: center;



 }
  footer ul li{
    list-style: none;
    margin-top: 10px;
  }
  footer ul li a{
    text-decoration: none;
    color: #443C3C;
    font-size: 6px;
  }
</style>
