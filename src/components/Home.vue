<template>
    <!--自动将驼峰式命名userTag转换为这种-->
    <el-container style="border: 1px solid #eee" id="home">
      <template>
        <aside-tag/>
        <el-container direction="vertical">
          <header-tag/>
          <el-main class="el-main">
            <transition name="fade">
            <router-view/>
              </transition>
          </el-main>
          <footer-tag/>
        </el-container>
       </template>
    </el-container>
</template>

<script>
  //局部导入组件Users
  import Users from './Users'
  import Aside from './Aside';
  import Footer from './Footer';
  import Header from './Header'

  export default {
    name: 'Home',

    //注册主键
    components: {
      "usersTag": Users,
      "headerTag": Header,
      "footerTag": Footer,
      "asideTag": Aside
    },
    data() {
      return {
        users: []
      }
    },
    computed: {
      isShow() {
        return this.$store.getters.isShow;
      }
    },
    created() {
      // this.$http.get("http://jsonplaceholder.typicode.com/users").then((data) => {
      //   this.users = data.body;
      // })
      this.axios.get("users").then((response) => {
        this.users = response.data.content;
      })
    },
    watch: {
      $route(to, from) { //跳转组件页面后，监听路由参数中对应的当前页面以及上一个页面
        console.log(to);
        if (to.name === '' || to.name === 'hello') { // to.name来获取当前所显示的页面，从而控制该显示或隐藏footerBar组件
          this.$store.dispatch('showFooter') // 利用派发全局state.showFooter的值来控制        }else{
          this.$store.dispatch('hideFooter')
        } else {
          this.$store.dispatch('hideFooter')
        }
      }
    }
  }
</script>

<style>
  .el-main{
    min-height:700px;
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity .3s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
