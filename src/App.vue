<template>
  <div id="app">
    <router-view></router-view>
    <TabBar/>
<header/>
  </div>
</template>

<script>
import TabBar from "common/tabBar"
import header from "components/header"
import http from "utils/http.js"
export default {
    name:"App",
    components:{
      TabBar,
      header,
      
    },
    created(){
      http("get","/api/movieOnInfoList?cityId=10").then((data)=>{
        console.log(data);
      })
    }
   
}
</script>
<style lang="scss">

</style>
