<template>
  <div class="login_contrainer">
    <el-row>
      <el-col :span="14"></el-col>
      <el-col :span="10" class="form_father">
        <div class="login_form">
          <h1>Hello</h1>
          <h2>欢迎来到硅谷甄选</h2>
          <el-form class="el_form" :model="login_label" :rules="rules" ref="ruleFormRef">
            <el-form-item prop="username">
              <el-input prefix-icon="User" v-model="login_label.username"></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input type="password" prefix-icon="Lock" show-password v-model="login_label.password"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" class="el_button" @click="handlerLogin">登录</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts" setup>
import { FormRules } from 'element-plus'
import { ref,reactive } from 'vue'
import userObj  from '../../store/modules/user'
import { useRoute } from 'vue-router';
import router from '../../router';

let $route = useRoute()

interface LoginRule {
  username:string,
  password:string,
}
let user = userObj();

let ruleFormRef = ref()

const rules = reactive<FormRules<LoginRule>>({
  username:[
    {
       required: true, message: '请输入用户名', trigger: 'blur'
    }
  ],
  password:[
    { required: true, message: '请输入账户密码', trigger: 'blur'}
  ]
})

let login_label = ref<LoginRule>({
  username:'',
  password:'',
})

let handlerLogin = () =>{
  ruleFormRef.value.validate(async(vaild:boolean) =>{ 
    // 代表用户将输入信息
    if(vaild){
      await user.userLogin(login_label.value)

      let query:any = $route.query.redirect
      router.push(query ? query : '/')

    }
  })
}




</script>

<style scoped lang="scss">
.login_contrainer {
  width: 100%;
  height: 100vh;
  background-image: url('../../assets/images/background.jpg');
  background-repeat: no-repeat;
  background-size: cover;

  .form_father {
    display: flex;
    align-items: center;
    height: 100vh;
    .login_form {
      width: 500px;
      height: 350px;
      background-color: rgb(64, 85, 197, 0.8);
      border-radius: 10px;
      box-sizing: border-box;
      color: white;
      line-height: 50px;
      padding: 30px;

      h1 {
        font-size: 30px;
      }

      h2 {
        font-size: 20px;
      }
      .el_button{
        width: 100%;
      }
    }
  }

}
</style>