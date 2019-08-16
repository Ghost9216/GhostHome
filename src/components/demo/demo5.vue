<template>
  <div class="wrapper">
    <div class="container">
     <header>
       <nav class="lognav">
        <p class="logo"><img src="../../assets/mylogo.jpg" alt=""></p>
         <p class="search">
         <input type="text"><i class="el-icon-search galss"></i>
         </p>
       </nav>
      <nav class="linknav">
        <ul>
        <li><router-link to="/home">网站首页</router-link></li>
        <li><router-link to="/home">资源下载</router-link></li>
        <li><router-link to="/home">趣味文章</router-link></li>
        <li><router-link to="/home">联系我们</router-link></li>
        </ul>
      </nav>

     </header>
      <article>
      <section class="tansk-section">
         <h2>任务列表</h2>
         <p><input type="text" placeholder="添加任务" v-model="newToDo" @keyup.enter="addNewToDo" class="addlist"></p>
         <li class="tansk">你当前有 <span>{{toDoList.length}}</span> 个任务</li>
          <h3>所有任务</h3>
        <ul class="todo-list" v-for="(item,index ) in toDoList">
           <li id="check" @dblclick="handledbclick(index,item)" v-bind:class="{publicDisappear:item.test}"><input type="checkbox"  v-model="item.checked"> <label for="check">{{item.title }}</label> <button @click="deleteDoTo(index)">X</button></li>
           <li  class="edit" v-bind:class="{publicDisappear:!(item.test)}"><input type="text" v-model="editToDo" @keyup.enter="updateToDo(index)"  ></li>
        </ul>
      </section>

       <section class="tip-section">
         <div class="tips">
           <h1>操作说明</h1>
            <ul>
              <li><P>1.在输入框中输入任务后按回车添加到任务队列</P></li>
              <li><p>2.在任务队列勾选表示已完成任务</p></li>
              <li> <p>3.在队列中点击删除即可删除任务</p></li>
               <li><p>4.双击任务框即可使用编辑</p></li>
            </ul>
         </div>
       </section>
      </article>
      <footer>
        <ul>
          <li>联系地址：XX省XX市XX地XX人</li>
          <li>版权所有</li>
        </ul>
      </footer>
    </div>
  </div>
</template>

<script>

    export default {

        name: "demo5",
      data(){
          return{
            editToDo:'',
            newToDo:"",
            toDoList:[
              {
                 title:"吃饭",
                 checked:true,
                 test:false,
              },
              {
                title:'睡觉',
                checked: false,
                test:false,
              },
              {
                title:'写bug',
                checked:true,
                test:false,
              }
            ]

          }
      },
      methods:{
          addNewToDo(){
             this.toDoList.push({
               title: this.newToDo,
               checked:false,
               test:false
             })
            this.newToDo=""
          },
        deleteDoTo(index){
            console.log(index)
        this.toDoList.splice(index,1)
        },
        updateToDo(index){
           this.toDoList[index].title = this.editToDo;
          this.toDoList[index].test = !(this.toDoList[index].test);
        },
        handledbclick(index,item){
            this.editToDo = item.title

          this.toDoList[index].test = !(this.toDoList[index].test);

        }

      },
      computed:{

      },
      watch:{

      },

      mounted() {
          alert("此网页为响应式布局网页，已经适配phone、pc、pad")
        console.log('~   *\n' +
          '             * _ooOoo_\n' +
          '             * o8888888o\n' +
          '             * 88" . "88\n' +
          '             * (| -_- |)\n' +
          '             *  O\\ = /O\n' +
          '             * ___/`---\'\\____\n' +
          '             * .   \' \\\\| |// `.\n' +
          '             * / \\\\||| : |||// \\\n' +
          '             * / _||||| -:- |||||- \\\n' +
          '             * | | \\\\\\ - /// | |\n' +
          '             * | \\_| \'\'\\---/\'\' | |\n' +
          '             * \\ .-\\__ `-` ___/-. /\n' +
          '             * ___`. .\' /--.--\\ `. . __\n' +
          '             * ."" \'< `.___\\_<|>_/___.\' >\'"".\n' +
          '             * | | : `- \\`.;`\\ _ /`;.`/ - ` : | |\n' +
          '             * \\ \\ `-. \\_ __\\ /__ _/ .-` / /\n' +
          '             * ======`-.____`-.___\\_____/___.-`____.-\'======\n' +
          '             * `=---=\'\n' +
          '             *          .............................................\n' +
          '             *           佛曰：bug泛滥，我已瘫痪！\n' +
          '             *')

      }
    }
</script>

<style scoped>
  *{
    list-style: none;
  }
  .publicDisappear{
   display: none ;
  }
  @media screen and (max-width: 600px){
  .container{
    background-color: white;
  }
    .lognav {
      width: 95%;
      margin: 0 auto;
    }
    .lognav .logo{
      margin: 0 auto;
      width: 250px;
      /*border: 1px solid red;*/
    }
    .lognav .logo img{
      width: 250px;

    }
    .lognav .search{
      margin: 1.5em auto;
      align-items: center;
      display: flex;
      border: 1px solid silver;
      border-radius: 5px;
      height: 35px;
      width: 250px;
      padding: 0 0 0 13px;
    }
    .lognav .search input{
      flex: 8;
      margin: 0 ;
      padding: 0 0 1px 0;
      outline: none;
      height: 30px;

      /*width: 80%;*/

      border: none;

    }
    .lognav .search .galss{
      flex: 2;
      display: inline-block;
      /*border: 1px solid red;*/
      /*height: ;*/
      height: 100%;
      /*width: 10%;*/
      background-color: skyblue;

    }
    .el-icon-search{
      /*font-size: 1.3em;*/
      text-align: center;
      line-height: 30px;
    }
    .linknav{
      display: none;
    }
    article{
    /*border: 10px solid skyblue;*/
      border-top: 5px solid deepskyblue;
    }
    article .tansk-section{
      width: 95%;
      margin: 0 auto;
    }
    article .tansk-section h2{
      font-family: 华文楷体;
      color: deeppink;
    }
    article .tansk-section p input{
     height: 30px;
      border: 1px solid deeppink;
      width: 100%;
      border-radius: 10px;
      outline: none;
    }
    article .tansk-section  label{
      font-family: 华文楷体;
      font-size: 1.3em;
      font-weight: bold;
    }

    article .tansk-section p input:focus{
      border-color:skyblue;
    }
    article .tansk-section .tansk{
      font-family: 华文楷体;
    }
    article .tansk-section .tansk span{
    color: red;
    }
    article .tansk-section h3{
      font-family: 华文楷体;
      color: deeppink;
    }
    article .tansk-section .todo-list{
      height: 50px;
      margin: 0;
      padding: 0;
      width: 100%;

      border: 1px solid silver;
    }
    article .tansk-section .todo-list #check{
      height: 50px;
      display: flex;
      justify-content: space-around;
      align-items: center;

    }
    article .tansk-section .todo-list input[type="checkbox"]{
      /*margin: 0;*/
      /*padding: 0;*/
      height: 25px;
      width: 25px;

    }
    article .tansk-section .todo-list input:checked + label{
     text-decoration: line-through;
      color: silver;

    }
    article .tansk-section .todo-list button{
      color: red;
      height: 30px;
      width: 30px;
      background-color: transparent;
      border-radius: 50%;
      border: 1px solid silver;
    }
    article .tip-section h1 {
       color: green;
      font-family: 华文楷体;
    }
    article .tip-section ul li{
    font-family: 华文楷体;
    }
    footer{
      display:flex;
      justify-content: center;
      align-items: center;
      font-family: 华文楷体;
      margin-top: 20px;
      /*height: 60px;*/
      height: 100px;
      background-color: #E8FCFF;
    }


  }
  @media screen and (min-width: 600px)and (max-width: 1100px){
    .wrapper{
      width: 100%;

    }
    .container{
      width: 100%;
      background-color: white;

    }
    .lognav{
      display: flex;
      align-items: center;
      justify-content: space-around;

    }
    .lognav .search{
      align-items: center;
      display: flex;
      border: 1px solid silver;
      border-radius: 5px;
      height: 35px;
       width: 250px;
      padding: 0 0 0 13px;
    }
    .lognav .search input{
      flex: 8;
      margin: 0 ;
      padding: 0 0 1px 0;
      outline: none;
      height: 30px;

      /*width: 80%;*/

      border: none;

    }
    .lognav .search .galss{
      flex: 2;
      display: inline-block;
      /*border: 1px solid red;*/
      /*height: ;*/
      height: 100%;
      /*width: 10%;*/
      background-color: skyblue;

    }
    .el-icon-search{
      /*font-size: 1.3em;*/
      text-align: center;
      line-height: 30px;
    }
    .linknav ul li{
      list-style: none;
      display: inline-block;
      margin-left: 5%;
    }
    .linknav ul li a{
      text-decoration: none;
      font-family: 华文楷体;
      font-size: 1.5em;
    }
    article{

      width: 100%;
      border-top: 4px solid  green;

    }
    .tansk-section{
      width: 80%;
      margin: 0 auto;

    }
    .tip-section{
      user-select: none;
      width: 80%;
      margin: 0 auto;
      color: silver;

      padding: 30px;
      /*margin-right: 20px;*/
    }
    .tip-section .tips{
     margin-top: 10px;
      padding-top: 15px;
      height: 80%;
      border-top: 1px dashed silver;
    }
    section {
      margin-left: 100px;
      width: 600px;

    }

    section h2 {
      color: deeppink;
      font-family: 华文楷体;
    }

    section .addlist {
      width: 300px;
      /*height: 30px;*/
      border-radius: 5px;
      outline: none;
      border: 1px solid deeppink;
      font-family: 华文楷体;
      padding: 10px;
    }

    section .addlist:focus {
      border: 1px solid skyblue;
    }

    section .tansk {
      font-family: 华文楷体;
      font-size: 1.2em;
    }
    section .tansk span{
      color: red;
    }
    section h3{
      font-size: 1.5em;
      color: deeppink;
      font-family: 华文楷体;

    }
    section .todo-list{
      margin: 0 ;
      border: 1px solid silver ;
      position: relative;
      height: 50px;

    }
    section .todo-list .edit{


    }
    section .todo-list .edit input{

      outline: none;
      border: 1px solid silver;
      width: 400px;
      height: 30px;

    }
    section .todo-list #check{

      width: 400px;
      height: 30px;
      display: flex;
      justify-content: space-between;
      font-size: 1.2em;
      font-family: 华文楷体;

    }
    section .todo-list #check button{
      border-radius: 50%;
      border: 1px solid silver;
      color: red;
      background-color: transparent;

    }
    section .todo-list #check label{

    }
    input[type='checkbox']{
      width: 20px;
      height: 20px;


    }
    input:checked + label {
      text-decoration: line-through;
      color: silver;
    }
    section .todo-list li{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    footer{
      margin-top: 30px;
      font-size: 0.8em;
      height: 50px;
      background-color: #C0F4F9;
      display: flex;
      justify-content: center;
      color: deeppink;
    }


  }
  @media screen  and (min-width:1100px) {
    .wrapper {
      width: 100%;

    }

    .container {
      width: 90%;
      background-color: white;
      margin: 0 auto;
    }

    .lognav {
      display: flex;
      align-items: center;
      justify-content: space-around;

    }

    .lognav .search {
      align-items: center;
      display: flex;
      border: 1px solid silver;
      border-radius: 5px;
      height: 35px;
      width: 20%;
      padding: 0 0 0 13px;
    }

    .lognav .search input {
      flex: 8;
      margin: 0;
      padding: 0 0 1px 0;
      outline: none;
      height: 30px;

      /*width: 80%;*/

      border: none;

    }

    .lognav .search .galss {
      flex: 2;
      display: inline-block;
      /*border: 1px solid red;*/
      /*height: ;*/
      height: 100%;
      /*width: 10%;*/
      background-color: skyblue;

    }

    .el-icon-search {
      /*font-size: 1.3em;*/
      text-align: center;
      line-height: 30px;
    }

    .linknav ul li {
      list-style: none;
      display: inline-block;
      margin-left: 5%;
    }

    .linknav ul li a {
      text-decoration: none;
      font-family: 华文楷体;
      font-size: 1.5em;
    }

    article{

      width: 100%;
      border-top: 4px solid  red;
      border-image: linear-gradient(red, green, orange) 10 10;
      display: flex;
      justify-content: space-around;
    }
    .tansk-section{

    }
    .tip-section{
      user-select: none;
      color: silver;
      margin-left: 80px;
       padding: 30px;
      /*margin-right: 20px;*/
    }
    .tip-section .tips{
      padding: 30px;
      height: 80%;
      border-left: 1px dashed silver;
    }
    section {
     margin-left: 100px;
      width: 600px;

    }

    section h2 {
      color: deeppink;
      font-family: 华文楷体;
    }

    section .addlist {
      width: 300px;
      /*height: 30px;*/
      border-radius: 5px;
      outline: none;
      border: 1px solid deeppink;
      font-family: 华文楷体;
      padding: 10px;
    }

    section .addlist:focus {
      border: 1px solid skyblue;
    }

    section .tansk {
      font-family: 华文楷体;
      font-size: 1.2em;
    }
    section .tansk span{
      color: red;
    }
    section h3{
      font-size: 1.5em;
      color: deeppink;
      font-family: 华文楷体;

    }
    section .todo-list{
      margin: 0 ;
      border: 1px solid silver ;
      position: relative;
      height: 50px;

    }
    section .todo-list .edit{


    }
    section .todo-list .edit input{

      outline: none;
      border: 1px solid silver;
      width: 400px;
      height: 30px;

    }
    section .todo-list #check{

      width: 400px;
      height: 30px;
      display: flex;
      justify-content: space-between;
      font-size: 1.2em;
      font-family: 华文楷体;

    }
    section .todo-list #check button{
      border-radius: 50%;
      border: 1px solid silver;
       color: red;
       background-color: transparent;

    }
    section .todo-list #check label{

    }
   input[type='checkbox']{
     width: 20px;
     height: 20px;


    }
   input:checked + label {
     text-decoration: line-through;
     color: silver;
   }
    section .todo-list li{
      position: absolute;
      top: 50%;
      left: 50%;
    transform: translate(-50%, -50%);
    }
    footer{
      margin-top: 30px;
    font-size: 0.8em;
      height: 50px;
      background-color: #C0F4F9;
      display: flex;
      justify-content: center;
      color: deeppink;
    }

  }




</style>
