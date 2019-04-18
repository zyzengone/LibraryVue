<template>
    <el-footer height="100px" class="footer">
      <p>{{title}}</p>
      <p>{{copyright}}</p>
    </el-footer>
</template>

<script>
    export default {
        name: "Footer",
        data(){
          return{
            copyright:"Copytight 2019 by Zeng",
            title: "demo"
          }
        }
    }
</script>

<style scoped>
  .footer{
    background: #66BAB7;
    text-align: center;
  }
</style>
