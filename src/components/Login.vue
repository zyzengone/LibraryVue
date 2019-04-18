<template>
  <div>
    <el-form :model="testAdmin" :rules="rules" ref="loginForm" :v-loading="loading">
      <el-form-item>
        <label>用户名：</label><el-input v-model="testAdmin.account" placeholder="请输入用户名" class="el-input"/>
      </el-form-item>
      <el-form-item>
        <label>密码：</label><el-input v-model="testAdmin.password" placeholder="请输入密码" class="el-input"/>
      </el-form-item>
      <el-form-item>
        <el-button round class="el-button-login" @click="loginSubmit">登陆</el-button>
        <el-button round class="el-button-register" @click.native.prevent="">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
    export default {
        name: "Login",
        data(){
          return{
            url:'login',
            loading:false,
            result:{},
            testAdmin:{
              account:'',
              password:''
            },
            rules:{
              account:[
                {required:true,message:'输入账号', trigger:'blur'},
              ],
              checkPass:[
                {required:true, message:'输入密码', trigger:'blur'},
              ]
            }
          }
        },
      methods:{
          loginSubmit(){
            this.$refs.loginForm.validate((valid)=>{
              if (valid){
                this.loading = true;
                if (this.testAdmin.account==='admin'&&this.testAdmin.password==='123456'){
                  this.loading = false;
                  this.$router.push({ path:'/'})
                }
                const loginInfo = {username: this.testAdmin.account, password: this.testAdmin.password};
                // this.axios.post(this.url,loginInfo).then((response)=>{
                //   this.result = response.data;
                //   if (this.result === 1){
                //     this.loading = false;
                //     this.$router.push({ path:'/'})
                //   }
                //   else {
                //     alert(this.result.message)
                //   }
                // })
              }
            })
          }
      }
    }
</script>

<style scoped>

</style>
