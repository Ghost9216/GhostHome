<template>
<div class="wrapper">
  <div class="container">
    <div class="rheader">
      <CommHeader></CommHeader>
      <div class="navTop ">
        <div id="nav">
          <ul>
            <li> <router-link to="/home">网站首页</router-link></li>
            <li><a href="">站点资源</a>
              <ul>
                <li><a href="#">资源下载</a> </li>
                <li><a href="#">珍贵资料</a> </li>
                <li><a href="#">会员资料</a> </li>
              </ul>
            </li>
            <li><a href="">联系我们</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="rbody">
       <div class="rcontent">
         <ul class=" resourcePool  clearfix">
           <li  v-for="item in resourcePoolList">
             <img :src="item.url" alt="" style="width: 300px">
              <p>{{item.name}}</p>
             <p> <a :href="item.area">点此处下载</a> <span>提取码：{{item.code}}</span></p>
           </li>
         </ul>
         <div class="page">
           <el-pagination

             @size-change="handleSizeChange"
             @current-change="handleCurrentChange"
             :current-page.sync="currentPage"
             :page-size="pageSize"
             layout="prev, pager, next, jumper"
             :total=" resourcePool.length">
             </el-pagination>
         </div>
       </div>
      <div class="ad">
         <div class="adcontent">
           <img src="../../assets/img/Alipay.png" alt="" style="width: 150px" class="alipay">
           <div class="imgshow">
           <img src="../../assets/img/ad2.png" alt="" style="width: 250px">
           <ul>
             <li class="recive"><router-link to="#">收藏</router-link></li>
             <li class="tran"><router-link to="#">转载</router-link></li>
             <li class="money"><router-link to="#" >投币</router-link></li>
           </ul>
           </div>
         </div>
      </div>
    </div>
    <div class="tail">
     <CommFooter></CommFooter>
    </div>
  </div>
</div>
</template>

<script>
  import CommHeader from "@/components/CommHeader"
  import CommFooter from '@/components/CommFooter'
    export default {
        name: "RsHeader",
      data(){
          return{
            pageSize: 6,
           currentPage:1,
            resourcePool:[
              {
                url: require('../../assets/img/1.jpg'),
                name: '云韵',
                area: 'https://pan.baidu.com/s/1T6jS2fXaIKMBc87LORDg7g',
                code:'6Yu7'
              },
              {
                url: require('../../assets/img/2.jpg'),
                name: '云韵',
                area: 'https://pan.baidu.com/s/1T6jS2fXaIKMBc87LORDg7g',
                code:'6Yu7'
              },
              {
                url: require('../../assets/img/云韵.jpeg'),
                name: '云韵',
                area: 'https://pan.baidu.com/s/1T6jS2fXaIKMBc87LORDg7g',
                code:'6Yu7'
              },
              {
                url: require('../../assets/img/3.jpg'),
                name: '云韵',
                area: 'https://pan.baidu.com/s/1T6jS2fXaIKMBc87LORDg7g',
                code:'6Yu7'
              },
              {
                url: require('../../assets/img/4.jpg'),
                name: '云韵',
                area: 'https://pan.baidu.com/s/1T6jS2fXaIKMBc87LORDg7g',
                code:'6Yu7'
              },
              {
                url: require('../../assets/img/5.jpg'),
                name: '云韵',
                area: 'https://pan.baidu.com/s/1T6jS2fXaIKMBc87LORDg7g',
                code:'6Yu7'
              },
              {
                url: require('../../assets/img/1.jpg'),
                name: '云韵',
                area: 'https://pan.baidu.com/s/1T6jS2fXaIKMBc87LORDg7g',
                code:'6Yu7'
              },
              {
                url: require('../../assets/img/1.jpg'),
                name: '云韵',
                area: 'https://pan.baidu.com/s/1T6jS2fXaIKMBc87LORDg7g',
                code:'6Yu7'
              },
              {
                url: require('../../assets/img/云韵.jpeg'),
                name: '云韵',
                area: 'https://pan.baidu.com/s/1T6jS2fXaIKMBc87LORDg7g',
                code:'6Yu7'
              },
              {
                url: require('../../assets/img/1.jpg'),
                name: '云韵',
                area: 'https://pan.baidu.com/s/1T6jS2fXaIKMBc87LORDg7g',
                code:'6Yu7'
              },
              {
                url: require('../../assets/img/4.jpg'),
                name: '云韵',
                area: 'https://pan.baidu.com/s/1T6jS2fXaIKMBc87LORDg7g',
                code:'6Yu7'
              },
              {
                url: require('../../assets/img/1.jpg'),
                name: '云韵',
                area: 'https://pan.baidu.com/s/1T6jS2fXaIKMBc87LORDg7g',
                code:'6Yu7'
              }
            ],

          }
      },
      components:{
          'CommHeader':CommHeader,
          'CommFooter':CommFooter
      },
      methods:{
        handleSizeChange(val) {
          console.log(`每页 ${val} 条`);
          window.scrollTo(0,0)
          this.currentPage = val;

        },
        handleCurrentChange(val) {
          console.log(`当前页: ${val}`);
          window.scrollTo(0,400)
          this.currentPage = val;
        },


      },
      computed:{
        resourcePoolList: function () {
          return this. resourcePool.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize);
        }
      },
     mounted() {
          var resourePool = document.getElementsByClassName('resourcePool')[0]
          var money = document.getElementsByClassName('money')[0]
         var   alipay = document.getElementsByClassName('alipay')[0]
          console.log(money, alipay,resourePool  )
          money.onmouseenter = function () {
             alipay.style.display = 'block'
             alipay.style.marginLeft = "25%"

          }
       resourePool.onmouseleave = function () {
         alipay.style.display = 'none'

       }

     }


    }
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
    text-decoration: none;
  }
  .clearfix:after{
    content: "";
    display: block;
    clear: both;
  }
  .wrapper{
    width: 100%;
  }
.container{
  position: relative;
   width: 90%;
   background-color: white;
   margin: 0 auto;
  box-shadow:-1px 0px 1px deeppink,

  0px -1px 1px sandybrown inset,

  1px 0px 1px green,

  0px 1px 1px skyblue inset;
}
.navTop{
  /*border: 1px solid greenyellow;*/
  width: 100%;
  height: 50px;
}
  #nav{
    width: 500px;
    height: 40px;
    margin-left: 50px;
    /*margin: 0 auto;*/
    font-family: 华文楷体;
    font-size: 1.3em;

  }
 #nav ul{
    background:rgba(193,234,244,0.5);
  }
 #nav ul li{
    float:left; display:block; height: 40px; line-height: 40px; padding: 0 20px; position: relative;
 }
 #nav ul li:hover{
    background-color: skyblue;
  }
 #nav ul li:hover a {
    color: deeppink;
  }
 #nav ul li a{
    color: skyblue;
  }
 #nav ul li ul li{float: none;}
 #nav ul li ul{position: absolute;top:40px;left: 0; display: none;}
 #nav ul li ul li:hover{background: skyblue;}
 #nav ul li:hover ul{display: block;}
 .resourcePool{
   /*border: 1px solid deeppink;*/
   width: 1000px;
   /*margin: 0 auto;*/
   margin-left: 40px;

 }
  .resourcePool li{
       margin-left: 30px;
       margin-top: 30px;
       width: 300px;
       height: 250px;
       list-style: none;
       float: left;
       border-radius: 5px;
       border: 1px solid skyblue;
       /*box-shadow: 0 0 13px skyblue;*/
     }
  .resourcePool li:hover{

    box-shadow: 0 0 13px skyblue;
  }
  .resourcePool li p{
    text-align: center;
   font-family: 华文楷体;
    font-size: 1.2em;
  }
  .resourcePool li a{
    text-align: center;
    font-family: 华文楷体;
    font-size: 1em;
    color: deeppink;
  }
  .resourcePool li span{
    text-align: center;
    font-family: 华文楷体;
    font-size: 1em;
    color: orange;
  }
  .page{
   padding-top: 15px;
    width: 600px;
    /*border: 1px solid red;*/
    margin: 0 auto;
  }
  .rbody{
    margin-bottom: 10px;
    /*position: relative;*/
  }
  .ad{
    text-align: right;
    width: 300px;
    /*border: 1px solid blue;*/
    position: fixed;
     bottom: 0;
     right: 0;
  }
  .ad .imgshow{
    position: relative;

  }

  .ad ul{
    display: none;
    top: 20%;
    left: 5%;
    position: absolute;
    /*border: 1px solid deeppink;*/
    width: 100px;
  }
  .ad li{
    line-height: 1.5em;
    font-size: 1.2em;
    font-family: 华文楷体;
    list-style: none;
    /*float: left;*/

  }
  .ad li a{
    color: #967E7E;
  }
  .ad .alipay{
    display: none;

  }
  .ad li a:hover{
    background-color:#967E7E ;
    color: #FFE5CC;
  }
  .ad:hover ul{
    display: block;
  }
  .ad:hover .alipay{
    text-align: center;
    display: block;
    margin-left: 25%;
  }

</style>
