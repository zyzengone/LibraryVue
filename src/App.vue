<template>

  <transition name="fade" mode="out-in">
    <router-view/>
  </transition>
</template>

<script>


  export default {
    name: 'App',

    data(){
      return{

      }
    },
    components:{

    }
  }

</script>

<style>
#app {
  color: #2c3e50;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>
