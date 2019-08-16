<template>
  <div class="wrapper">
<div class="container1" id="container1">
  <div class="wrapTop">
    <div class="navWrap">
      <ul class="nav clearfloat" >
        <li  class="navItem"><a href="#container1">主页</a></li>
        <li class="navItem"><a href="#container2">关于我</a></li>
        <li class="navItem"><a href="#container3">技能</a></li>
        <li class="navItem"><a href="#container4">地址</a></li>
      </ul>
    </div>
  </div>
 <div class="mainTitle">
   <h1>I'm a programmer</h1>
   <p>致我们无比热爱的代码</p>
 </div>
</div>
    <div class="container2" id="container2">
      <div class="aboutmeContent">
        <ul>
          <li class="aboutmeTitle">
         <h2>about me</h2>
          </li>
          <p>95后的文艺青年，学识渊博、经验丰富，代码风骚、效率恐怖。
            深山苦练20余年，一天只睡3小时，千里之外定位问题，瞬息之间修复上线。
            身体强壮、健步如飞，可连续工作100小时不休息，讨论技术方案9小时不喝水，上至研发cpu芯片、带项目、出方案  弄计划，下至盗账号、黑网站、shell提权挂马、攻击同行、拍片摄影、泡妞把妹纸、开挖掘机 、威胁pm，啥都能干。
            泡面矿泉水已备好，学校不支持已辍学，家人不支持已断绝关系，老婆不支持已离婚，小孩不支持已送孤儿院，备用电源万兆光纤永不断电断网，
            门口已埋地雷无人打扰</p>
        </ul>
      </div>
    </div>
    <div class="container3" id="container3">
      <ul>
        <li><img src="../../assets/aboutus/前端.jpg"  class="imglist" ></li>
        <li><img src="../../assets/aboutus/java.jpg"  class="imglist" ></li>
        <li><img src="../../assets/aboutus/网络安全.jpg"  class="imglist" ></li>
        <li><img src="../../assets/aboutus/网络技术.jpg"  class="imglist" ></li>
        <li><img src="../../assets/aboutus/汇编.jpg"  class="imglist" ></li>
        <li><img src="../../assets/aboutus/移动开发.jpg" class="imglist"  ></li>
    </ul>
      <div class="imginfo">
        <h2>{{imglistTitle||infolist[0].title}}</h2>
         <p>
           {{imglistContent||infolist[0].content}}
         </p>
      </div>
    </div>
    <div class="container4" id="container4">
     <div class="lefarea">
       <div class="righcontent">
         <ul>
           <h4>contact us</h4>
           <li><span>站长：</span><span>ghost</span></li>
           <li><span>星座：</span><span>天秤座</span></li>
           <li><span>邮箱：</span><span>ghost@163.com</span></li>
           <li><span>微博：</span><span>猎剑苍穹</span></li>
           <li><span>职业：</span><span>代码界的一股清流</span></li>

         </ul>
     </div>
      </div>
      <div class="rightarea">
        <p>给我留言</p>
        <textarea rows="8" cols="30" style="font-size: 1.5em">

     </textarea>
        <button>提交</button>
      </div>
    </div>

  </div>

</template>

<script>
    export default {
        name: "AEmain",
      data(){

          return{
            imglistTitle:"",
            imglistContent:"",
            imgList:"",
            infolist:[
              {title:'计算机前端技术', content:'前端开发是创建Web页面或app等前端界面呈现给用户的过程，通过HTML，CSS及JavaScript以及衍生出来的各种技术、框架、解决方案，来实现互联网产品的用户界面交互 [1]  。它从网页制作演变而来，名称上有很明显的时代特征。在互联网的演化进程中，网页制作是Web1.0时代的产物，早期网站主要内容都是静态，以图片和文字为主，用户使用网站的行为也以浏览为主。随着互联网技术的发展和HTML5、CSS3的应用，现代网页更加美观，交互效果显著，功能更加强大。' +
                  '移动互联网带来了大量高性能的移动终端设备以及快速的无线网络，HTML5，node.jS的广泛应用，各类框架类库层出不穷。'},
              {title:"计算机后端技术",content:'后端开发人员通常的工作是从数据库或其他数据源写入、读取和处理数据，因此掌握SQL等技能会非常重要。后端开发的主要技术和技能前端开发人员需要知道一系列用于创建用户界面的工具，而后端开发人员通常使用的是一套完全不同的工具和技能，以便于高效地完成他们的工作。后端开发人员得知道如何使用各种框架和库，如何将它们集成到应用程序中，以及如何构建代码和业务逻辑，用一种使系统更易于维护的方式。因此设计应用程序的基础设施，实现算法和逻辑，以及工作于数据都是属于后端开发工作的。'},
              {title:'计算机网络安全',content:"计算机网络安全是指利用网络管理控制和技术措施，保证在一个网络环境里，数据的保密性、完整性及可使用性受到保护。计算机网络安全包括两个方面，即物理安全和逻辑安全。物理安全指系统设备及相关设施受到物理保护，免于破坏、丢失等。逻辑安全包括信息的完整性、保密性和可用性。计算机网络安全不仅包括组网的硬件、管理控制网络的软件，也包括共享的资源，快捷的网络服务，所以定义网络安全应考虑涵盖计算机网络所涉及的全部内容。参照ISO给出的计算机安全定义，认为计算机网络安全是指：“保护计算机网络系统中的硬件，软件和数据资源，不因偶然或恶意的原因遭到破坏、更改、泄露，使网络系统连续可靠性地正常运行，网络服务正常有序"},
              {title:'计算机网络技术', content:"计算机网络技术是通信技术与计算机技术相结合的产物。计算机网络是按照网络协议，将地球上分散的、独立的计算机相互连接的集合。连接介质可以是电缆、双绞线、光纤、微波、载波或通信卫星。计算机网络具有共享硬件、软件和数据资源的功能，具有对共享数据资源集中处理及管理和维护的能力。"},
              {title: '嵌入式技术',content:'嵌入式系统（Embedded System）是指以应用为中心、以计算机技术为基础，软件硬件可裁剪、适应应用系统对功能、可靠性、成本、体积、功耗严格要求的专用计算机系统。举例来说，大到油田的集散控制系统和工厂流水线，小到家用VCD机或手机，甚至组成普通PC终端设备的键盘、鼠标、硬盘、Modem等均是由嵌入式处理器控制的。'},
              {title:'移动开发技术',content:"随着3G时代的到来，移动环境的软件编程技术已成为程序员必须掌握的技术之一。鉴于国内该类书籍较少，作者结合多年的研究和教学经验编写了本教材。全书共分为12章，包括移动计算的概念和模型、移动Agent技术、移动终端操作系统简介、无线通信技术、移动服务架构MSA、普适计算概述、Android开发平台、Windows Mobile开发平台、Svmbian开发平台、Openmoko开发平台和J2ME开发平台等内容。"}
            ]
          }
      },
      methods:{
      },
      watch:{


      },
      computed:{

      },
      mounted() {
        // this.imglistTitle =   this.infolist[0].title,
        // this.imglistContent =  this.infolist[0].content
        console.log( this.infolist[1].title)
        var imgList= document.getElementsByClassName('imglist')
        var that=this
        // console.log('hello world')
        for ( var i=0; i<imgList.length; i++) {
          // console.log(i)
          (function f(i ) {
            imgList[i].onclick = function () {
              // console.log(i)
                that.imglistTitle=   that.infolist[i].title,
                that.imglistContent =  that.infolist[i].content
            }
          })(i)
        }
      }
    }
</script>

<style scoped>
  .wrapper{
    min-width: 1100px;
  }
  *{
    margin: 0;
    padding: 0;
    /*background-color: #99a9bf;*/
  }
  .clearfloat::after {
    content:" ";
    display:block;
    clear:both;
  }
.container1{
  /*border: 1px solid red;*/
  display: block;
  height: 100vh;
  width: 100%;
  background-image: url("../../assets/aboutus/bg.png");
  background-color: #DDD9e1;
  background-size:  auto 100vh;
  background-repeat: no-repeat;
 background-position: center right;
}
li{
 list-style: none;
}
a{
  text-decoration: none;
  color: black;
  font-weight: bold;
}
  .wrapTop{
    z-index: 3;
    position: absolute;
    /*border: 1px solid red;*/
    height: 100px;
    width: 100%;
    font-size: 1.5em;
  }
  .navWrap{
   height: 200px;
    position: relative;

  }

  .nav{
    position:absolute;
    top: 40%;
    margin-top: -50px;
    display: flex;
    width: 70%;
    justify-content: center;
    /*border: 1px solid yellow;*/
  }
  .navItem{
    float: left;
    /*border: 1px solid red;*/
    margin-left: 100px;
    color: black;

  }
  .mainTitle{
    position: absolute;
    height: 300px;

    /*border: 1px solid red;*/
    margin-top: -100px;
    left: 15%;
    top: 50%;
  }
  .mainTitle h1{
    font-size: 5em;
    font-family: "Courier New", Courier, monospace;
  }
  .mainTitle p{
    margin-top: 10px;
    text-align: center;
    font-size: 3.5em;
    font-family: "Comic Sans MS", cursive, sans-serif;
  }
  .container2{
    display: block;
    height: 100vh;
    width: 100%;
    background-image: url("../../assets/aboutus/bg2.jpg");
    background-size: auto 90vh;
    background-repeat: no-repeat;
    background-position: left bottom;
    background-color: #DEDADB;
    position: relative;
  }
  .aboutmeContent{
    position: absolute;
     top: 50%;
     left: 50%;
     height: 300px;
     width: 600px;
    margin-top: -110px;
    margin-left:-100px;
    /*position: relative;*/
    /*border: 1px skyblue solid;*/
    /*background-color: red;*/


  }
  .aboutmeTitle{
  /*border: 1px solid yellow;*/
    width: 150px;
    border-bottom: 1px solid skyblue;
    margin-bottom: 15px;
  }
  .aboutmeContent h2{
    font-size: 2em;
    font-family: "Comic Sans MS", cursive, sans-serif;
    /*border-bottom: 2px solid skyblue;*/
  }
  .aboutmeContent p{
    /*font-size: em;*/
    font-family: "Comic Sans MS", cursive, sans-serif;
  }
  .container3{
    height: 100vh;
    width: 100%;
    background-image: url("../../assets/aboutus/anime2.png");
    background-size: auto 100vh ;
    background-position: right bottom;
    background-repeat: no-repeat;
    background-color: #DBDBDB;
    perspective: 20000px;
  }

  .container3 ul{
    width: 200px;
    height: 200px;
    transform-style: preserve-3d;
    position: absolute;
    bottom: 300px;
    top: 35%;
    left: 25%;
    transform: rotateX(-10deg) translateX(-100px) rotateY(0deg);
    animation: rot 10s linear 0s infinite normal;
  }

  @keyframes rot {
    0% {
      /* 动画中存在固定不改变的属性，放在前面 */
      transform:rotateX(-10deg) translateX(-100px) rotateY(0deg);
    }
    100% {
      transform:rotateX(-10deg) translateX(-100px) rotateY(-360deg);
    }
  }
  .container3 ul>li{
    list-style: none;
    width: 200px;
    height: 200px;
    box-sizing: border-box;
    border: 2px solid aliceblue;
    background-color: #424242;
    position: absolute;
    top: 0;
    left: 0;
  }
  .container3 ul>li>img{
    width: 196px;
    height: 196px;
  }
  .container3 ul:hover{  /* ul被覆盖，动画暂停*/
    animation-play-state: paused;
  }
  .container3 ul:hover li>img{
    opacity: 0.5;
  }
  .container3 ul>li:hover img{
    opacity: 1;
  }
  .container3 ul>li:nth-child(1){
    transform: rotateY(60deg) translateZ(200px);
  }
  .container3 ul>li:nth-child(2){
    transform: rotateY(120deg) translateZ(200px);
  }
  .container3  ul>li:nth-child(3){
    transform: rotateY(180deg) translateZ(200px);
  }
  .container3 ul>li:nth-child(4){
    transform: rotateY(240deg) translateZ(200px);
  }
  .container3 ul>li:nth-child(5){
    transform: rotateY(300deg) translateZ(200px);
  }
  .container3 ul>li:nth-child(6){
    transform: rotateY(360deg) translateZ(200px);
  }

  @font-face {
    font-family: 'webfont';
    font-display: swap;
    src: url('//at.alicdn.com/t/webfont_1rx8evvs6cei.eot'); /* IE9*/
    src: url('//at.alicdn.com/t/webfont_1rx8evvs6cei.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('//at.alicdn.com/t/webfont_1rx8evvs6cei.woff2') format('woff2'),
    url('//at.alicdn.com/t/webfont_1rx8evvs6cei.woff') format('woff'), /* chrome、firefox */
    url('//at.alicdn.com/t/webfont_1rx8evvs6cei.ttf') format('truetype'), /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
    url('//at.alicdn.com/t/webfont_1rx8evvs6cei.svg#杨任东竹石体-Bold') format('svg'); /* iOS 4.1- */
  }
  @font-face {
    font-family: 'webfont';
    font-display: swap;
    src: url('//at.alicdn.com/t/webfont_ybgoshzbyir.eot'); /* IE9*/
    src: url('//at.alicdn.com/t/webfont_ybgoshzbyir.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('//at.alicdn.com/t/webfont_ybgoshzbyir.woff2') format('woff2'),
    url('//at.alicdn.com/t/webfont_ybgoshzbyir.woff') format('woff'), /* chrome、firefox */
    url('//at.alicdn.com/t/webfont_ybgoshzbyir.ttf') format('truetype'), /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
    url('//at.alicdn.com/t/webfont_ybgoshzbyir.svg#杨任东竹石体-Bold') format('svg'); /* iOS 4.1- */
  }
  @font-face {
    font-family: 'webfont';
    font-display: swap;
    src: url('//at.alicdn.com/t/webfont_y3m02dkqzuf.eot'); /* IE9*/
    src: url('//at.alicdn.com/t/webfont_y3m02dkqzuf.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('//at.alicdn.com/t/webfont_y3m02dkqzuf.woff2') format('woff2'),
    url('//at.alicdn.com/t/webfont_y3m02dkqzuf.woff') format('woff'), /* chrome、firefox */
    url('//at.alicdn.com/t/webfont_y3m02dkqzuf.ttf') format('truetype'), /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
    url('//at.alicdn.com/t/webfont_y3m02dkqzuf.svg#杨任东竹石体-Bold') format('svg'); /* iOS 4.1- */
  }
  .container3 .imginfo{
    position: absolute;
    top: 25%;
    left: 46%;
    /*border:1px solid red;*/
    height: 400px;
    width: 400px;
  }

.container3 h2,
p
{
  font-family: webfont;
}
  .container3 h2{
    font-size: 1.8em;
    margin-bottom: 20px;

  }
  .container3 p{
    font-size: 1.2em;
  }
  .container4{
    position: relative;
    height: 100vh;
    width: 100%;
    background-image: url("../../assets/aboutus/demo3.png");
    background-size: auto 100vh ;
    background-position: center bottom;
    background-repeat: no-repeat;
    background-color: #DBDBDB;
    perspective: 20000px;
  }
.container4 li span,
.container4 li p
{

   font-family: 华文楷体;

}

.container4 .lefarea{
  padding: 20px;
  position: absolute;
   top:35% ;
   left: 10%;
  font-size: 1.2em;
  /*border: 1px solid red;*/

}
  .container4 h4{
    width: 130px;
    font-size: 1.5em;
    color: rgba(0,0,0,0.8);
    font-family: Footlight MT Light;
    border-bottom: 3px solid rgba(0,255,0,1);
    margin-bottom: 10px;
  }
  .container4 .rightarea {
    padding: 10px;
    position: absolute;
    top: 35%;
    right: 10%;
    width: 300px;
    /*border: 1px solid blue;*/
    text-align: center;
  }
  .container4 .rightarea p{
    text-align: left;
    font-size: 1.2em;
    font-family: 华文楷体;
   margin-bottom: 10px;
  }
  .container4 .rightarea button{
    background-color: rgba(0, 255,0,1);
    text-align: left;
    font-size: 1.2em;
    font-family: 华文楷体;
    width: 100px;
    height: 40px;
    text-align: center;
    margin-top: 10px;
  }
</style>
