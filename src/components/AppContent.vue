<template>
  <div class="wrapper">
    <div class="titleInfo">
      <h2>主站内容</h2>
    </div>
    <div class="personInfoWrapper">
     <div class="personInfo" v-for="person in personList" >
       <el-card class="box-card">
         <div slot="header" class="clearfix">
           <span>{{person.name}}</span>
<!--           <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>-->
         </div>
         <div class="person1">
           <ul>
             <li><span class="plabel">出生地：</span> <span class="plabe2">{{person.area}}</span> </li>
             <li><span class="plabel">星座：</span>  <span class="plabe2">{{person.constellation}}</span> </li>
             <li><span class="plabel">台词：</span> <span class="plabe2">{{person.area}}</span> </li>
             <li><span class="plabel">介绍：</span>  <span class="plabe2">{{person.detail}}</span> </li>
            <li>  <span class="plabel">难度:</span>
             <el-rate

               v-model="person.value"
               disabled
               >
             </el-rate>
            </li>
           </ul>
           <div class="showImg">
           <img :src="person.url" :alt="person.name" :title="person.name">
           </div>
         </div>
       </el-card>

     </div>
    </div>
    <div class="pageWrapper">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :page-size=" pageSize"
        layout="prev, pager, next, jumper"
        :total="20">
      </el-pagination>

    </div>
  </div>
</template>

<script>
    export default {
      name: "AppContent",
      props: {},

      data() {
        return {
          value: 3.7,
          PersonData: [{
            url: require('../assets/img/云韵.jpeg'),
            name: '云韵',
            area: '斗破苍穹',
            constellation: '白羊座',
            detail: 'balabalbalbal',
            value: 3.8
          },
            {
              url: require('../assets/img/少司命.jpeg'),
              name: "少司命",
              area: '秦时明月',
              constellation: '射手座',
              detail: 'balabalbalbal',
              value: 4.8
            },
            {
              url: require('../assets/img/焰火姬.jpeg'),
              name: '焰火姬',
              area: '秦时明月',
              constellation: '天蝎座',
              detail: 'balabalbalbal',
              value: 2.8
            },
            {
              url: require('../assets/img/红莲.jpeg'),
              name: '红莲',
              area: '秦时明月',
              constellation: '摩羯座',
              detail: 'balabalbalbal',
              value: 1.8
            },
            {
              url: require('../assets/img/云韵.jpeg'),
              name: '云韵',
              area: '斗破苍穹',
              constellation: '白羊座',
              detail: 'balabalbalbal',
              value: 3.8
            },
            {
              url: require('../assets/img/少司命.jpeg'),
              name: "少司命",
              area: '秦时明月',
              constellation: '射手座',
              detail: 'balabalbalbal',
              value: 4.8
            },
            {
              url: require('../assets/img/焰火姬.jpeg'),
              name: '焰火姬',
              area: '秦时明月',
              constellation: '天蝎座',
              detail: 'balabalbalbal',
              value: 2.8
            },
            {
              url: require('../assets/img/红莲.jpeg'),
              name: '红莲',
              area: '秦时明月',
              constellation: '摩羯座',
              detail: 'balabalbalbal',
              value: 1.8
            },
          ],
          totalPage: [],
          pageSize: 5,
          currentPage: 1
        }
      },
      methods: {
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

        computed: {
          personList: function () {
            return this.PersonData.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize);
          }
      }
    }

</script>

<style scoped>
.wrapper{

  width: 1190px;
  margin: 0 auto;
  background-color: white;
}
.titleInfo{
  /*height: 50px;*/
  font-size: 16px;
  border-bottom: 1px solid silver;
  width: 1100px;
  margin: 0 auto;


}
.titleInfo h2{
  margin-left: -10px;
  border-left: 5px solid skyblue;
  padding: 10px;
  padding-bottom: 10px;
  font-weight: normal;
   display: block;
  /*border: 1px silver dashed;*/
  margin-top: 20px;
  }
.personInfo{
  margin-top: 30px;
}
.el-card{
  width: 1100px;
  margin: 10px auto;
}
 ul li{
    list-style: none;
   margin-top: 10px;
  }
  .person1 ul{
    float: left;
    display: inline-block;
    width: 600px;

  }

  .person1 img{
    width: 300px;
    margin: 20px;
    border: 2px dashed lightgrey;
    /*transform: rotate(2deg);*/
  }
.person1 img:hover{
  width: 300px;
  box-shadow:0 0 12px skyblue;
  /*transform: rotate(2deg)*/

}
  .clearfix{
    color: lightskyblue;
    font-weight: bold;
  }
  .plabel{

    font-weight: bolder;
  }
.el-rate{
  display: inline-block;
}
.pageWrapper{
  height: 30px;
}
.el-pagination{
  display: flex;
  flex: 1;
  justify-content: center;
}

</style>
