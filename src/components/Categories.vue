<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="3" v-for="(category,index) in categories" :key="index" class="col">
        <el-card :body-style="{ padding: '0px' }" class="card" shadow="hover">
          <div style="padding: 14px;">
            <span>{{category.name}}</span>
            <div class="bottom clearfix">
              <el-button type="text" class="button" @click="listDetail(category)">详情</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
    export default {
        name: "Pictures",
        data(){
          return{
            categories:[],
          }
        },
        mounted() {
          // this.axios.get("http://jsonplaceholder.typicode.com/posts").then((response)=>{
          //   this.categories = response.data;
          // })
          this.axios.get("categories").then((response)=>{
            this.categories = response.data.content;
          })
        },
        methods:{
          listDetail(category){
            this.$router.push({
              path:'/category',
              name:'book',
              params:{
                id:category.id
              }
            })
          }
        }
    }
</script>

<style scoped>
  .col{
    margin-bottom: 10px;
  }
  .card{
    height: 180px;
    width: 160px;
  }
</style>
