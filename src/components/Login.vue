<template>
    <div class="wrapper">
      <div class="login">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="登录" name="first">

            <el-form :model="ruleFrom1" status-icon :rules="rules1" ref="ruleFrom1" label-width="100px" class="demo-ruleForm">
              <el-form-item label="用户名" prop="username">
                <el-input type="username" v-model="ruleFrom1.username" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item label="密码" prop="password">
                <el-input type="password" v-model="ruleFrom1.password" auto-complete="off"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="submitForm('ruleFrom1')">提交</el-button>
                <el-button @click="resetForm('ruleFrom1')">重置</el-button>
              </el-form-item>
            </el-form>

          </el-tab-pane>
          <el-tab-pane label="注册" name="second">
            <Register></Register>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
</template>

<script>
  import Register from  "@/components/register"
  export default {
    data(){
      var validateUsename = (rule, value, callback) => {
        if (!value) {
          callback(new Error('请输入用户名'));
        }
        else  if(value.length<6){
          callback(new Error('用户名不得小于六个字符'));
        }else{
          callback();
        }


      };
      var validatePassword = (rule, value, callback) => {
        if (!value) {
          callback(new Error('请输入用密码'));
        }
        else if(value.length<6){
          callback(new Error('密码格式不正确'));
        }else{
          callback();
        }

      };

      return{
        name: 'login',
        activeName: 'first',
        ruleFrom1: {
          username: "",
          password:""

        },
        rules1: {
          username: [{validator: validateUsename, trigger: 'blur'}],
          password: [{validator: validatePassword, trigger: 'blur'}],
        },

      }

    },
    methods: {

      handleClick(tab, event) {
        // console.log(tab, event);
      },

      submitForm(formName) {
        localStorage ["tanken"]  = false;
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // alert('submit!');
            // window.location="./home";
            // console.log(this.$router)
            console.log(sessionStorage)

             localStorage ["tanken"]  = true;
            this.$router.push('./home')
          } else {
            localStorage ["tanken"]  = false;
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    },
    components:{
      "Register":Register
    }

  }
</script>

<style scoped>
body{
  position: relative;

}
  .wrapper{
    position: absolute;
    width: 600px;
    height: 600px;
    top: 50%;
    left: 50%;
    margin-top: -300px;
    margin-left: -300px;
    /*border: 1px solid black;*/
    /*background-color: rgba();*/

  }
</style>
