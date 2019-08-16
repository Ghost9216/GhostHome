<template>
  <div class="wrapper">

    <div class="container">
      <div class="top">
        <div class="topheader">
          <CommHeader></CommHeader>
        </div>
        <div class="topnav">
          <ul>
            <li><router-link to="/home">网站首页</router-link></li>
            <li><router-link to="/home">发布文章</router-link></li>
            <li><router-link to="/home">联系我</router-link></li>
          </ul>
        </div>
      </div>
      <div class="center">
       <div class="left">
         <div class="leftcontent">
           <h1>文章列表</h1>
           <ul v-for="(item,index) in article" @click="changeContent(index)">
             <li>{{item.title}}</li>
           </ul>
         </div>
       </div>
         <div class="right">
           <div class="rightcontent">
             <h1>{{showarticle.title||article[0].title}}</h1>
             <p>{{showarticle.content||article[0].content}}</p>
           </div>
         </div>
      </div>
      <div class="tail">
        <CommFooter></CommFooter>
    </div>
  </div>
    <div class="ad">
    <div class="ad1">
      <img src="../../assets/img/ad2.png" alt="" style="width: 60px">

    </div>
    <div class="ad2">
      <img src="../../assets/img/ad2.png" alt="" style="width: 60px">
    </div>
    </div>
  </div>

</template>

<script>
  import CommHeader from "@/components/CommHeader"
  import  CommFooter from  '@/components/CommFooter'
    export default {
        name: "Published",
      data(){
          return{
            showarticle:[],
             article:[{
               title:'震惊！一天竟然有24个小时',
               content:"在现代生活中，时间的记录单位是通过“时分秒”来记录的，但是在中国古代的事件记录方法非常具有中国特色，那就是十二地支。\n" +
                 "\n" +
                 "中国古代劳动人民把一昼夜划分成十二个时段，每一个时段叫一个时辰。十二时辰既可以指一天，也可以指任何一个时辰。十二时辰相当于24小时，每个时辰等于2小时。\n" +
                 "\n" +
                 "十二时辰是古代中国劳动人民根据一日间太阳出没的自然规律、天色的变化以及自己日常的生产活动、生活习惯而归纳总结、独创于世的。生活之美，被古人融入点点滴滴。"
             },
               {
                 title:'六度关系理论',
                 content:'这个理论是1929年，由匈牙利作家Frigyes Karinthy在短篇故事‘Chains’中首次提出的。1967年，美国社会学家Stanley Milgram设计了一种新的方法来检验这一理论，他将其称之为‘小世界现象’。他随机从中西部挑选出一批志愿者，要求志愿者们将包裹邮寄给马萨诸塞州一个素不相识的人。发件人知道收件人的姓名、职业和大致位置。按照指令，他们先将包裹寄给自己朋友圈中根据名字最有可能认识目标的一个人，那个人再依次类推，下一个人再依次类推，直到包裹最终到达目标收件人手中。尽管参与者预计这一锁链至少会包含上百个中间人，但最终成功送达包裹的锁链中平均只有5-7个中间人，使得‘六度人脉’理论应运而生。\n' +
                   '六度人脉关系理论，以认识朋友的朋友为基础，通过网络扩展自己的人脉。并且无限扩张自己的人脉，在彼此需要的时候，可以随时得到该人脉的帮助。在现实社会实践中，通过六度人脉关系理论所扩展的人脉，在社会的各个领域，各个角落中进行着彼此之间的需求供应。\n' +
                   '简单的说，每一个擦肩而过的陌生人都有可能是你的第六度人脉。'
               },
               {
                 title:"舔狗理论",
                 content:'这个理论是1929年，由匈牙利作家Frigyes Karinthy在短篇故事‘Chains’中首次提出的。1967年，美国社会学家Stanley Milgram设计了一种新的方法来检验这一理论，他将其称之为‘小世界现象’。他随机从中西部挑选出一批志愿者，要求志愿者们将包裹邮寄给马萨诸塞州一个素不相识的人。发件人知道收件人的姓名、职业和大致位置。按照指令，他们先将包裹寄给自己朋友圈中根据名字最有可能认识目标的一个人，那个人再依次类推，下一个人再依次类推，直到包裹最终到达目标收件人手中。尽管参与者预计这一锁链至少会包含上百个中间人，但最终成功送达包裹的锁链中平均只有5-7个中间人，使得‘六度人脉’理论应运而生。\n' +
                   '六度人脉关系理论，以认识朋友的朋友为基础，通过网络扩展自己的人脉。并且无限扩张自己的人脉，在彼此需要的时候，可以随时得到该人脉的帮助。在现实社会实践中，通过六度人脉关系理论所扩展的人脉，在社会的各个领域，各个角落中进行着彼此之间的需求供应。\n' +
                   '简单的说，每一个擦肩而过的陌生人都有可能是你的第六度人脉。'
               }
             ]
          }
      },
      components:{
          'CommHeader': CommHeader,
          'CommFooter': CommFooter
      },
      methods:{
          changeContent(i){
            this.showarticle = this.article[i]
            console.log(i)
          }

      },
      mounted() {

      }
    }
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
    list-style: noe;
  }
  .wrapper{
    width: 100%;
  }
.container{
  min-width: 900px;
  width: 90%;
  background-color: white;
  margin: 0 auto;
}

  .top .topnav{
    margin-left: 30px;
    text-align: left;
    font-size: 1.2em;

  }
  .top .topnav li{
     list-style: none;
     display: inline-block;
     margin-left: 20px;
      overflow: hidden;
     word-break: break-all;

  }
  .top .topnav li a{

    font-family: 华文楷体;
    text-decoration: none;
    font-size: 1.2em;
    color: skyblue;
  }
  .top .topnav li a:hover{
    color: deeppink;
  }

  .center{
    margin: 0 auto;
    margin-bottom: 30px;
    width: 90%;
    text-align: center;
    margin-top: 20px;
    display: flex;

  }

  .center .left{
    padding: 10px;
     height: 500px;
    flex: 1;
    border-right: 1px deeppink dashed;
  }
  .center .left ul li {
    cursor: pointer;
    list-style: none;
    font-family: 华文楷体;
    font-size: 1.2em;
  }

  .center .left ul li:hover {
    cursor: pointer;
   color: deeppink;

  }
  .center .left h1{
    font-family: 华文行楷;

  }
  .center .right{
    margin-left: 10px;
    padding: 10px;
    flex: 6;
  }
  .center .right h1{
    margin-bottom: 20px;
  }
  .center .right p{
    text-align: left;
   text-indent: 2em;
  }
  .ad1{
    position: absolute;
    top: 5%;
    left: 1%;
    /*transform:rotate(deg) ;*/
    animation: move 20s linear infinite ;
  }
  .ad2{
     position: absolute;
    top: 95%;
    left: 95%;
    animation: move2 20s linear infinite ;

  }
@keyframes move {
  0% {
    top: 5%;
    left: 1%;
  }
  50% {
    top: 90%;
    left: 1%;
    transform: rotate(360deg);
    transform: translateY(100%);
  }
  100% {
    top: 5%;
    left: 1%;
    transform: translateY(100%);
  }
}
  @keyframes move2 {
    0%{
      top: 95%;
      left: 95%;
  }
    50%{
      top: 5%;
      left: 95%;
      /*transform: translateY(100%);*/
    }
    100%{
      top: 95%;
      left: 95%;
      /*transform: translateY(100%);*/
    }

}

</style>
