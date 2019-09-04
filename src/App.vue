<template>
  <div id="app">
    <el-container>
      <!-- <el-aside>aside</el-aside> -->
      <el-container>
        <el-header class="mine-header">
          <global-header :routes='routes'></global-header>
        </el-header>
        <el-main class="mine-main">
          <mine-breadcrumb :currentUrl='currentUrl'></mine-breadcrumb>
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </el-main>
        <el-footer class="mine-footer">footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import globalHeader from 'src/components/globalHeader';
import mineBreadcrumb from 'src/components/mineBreadcrumb';
import routes from '../vue_router/routes';

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      routes,
      currentUrl:'',
    }
  },
  watch:{
    '$route'(){
      this.currentUrl=this.$route.path;
    }
  },
  computed:{
    name(){
      return this.$store.state.name;
    },
  },
  mounted(){
    this.currentUrl=this.$route.path;
    // console.log('router',this.$router.options.routes);
  },
  components:{
    globalHeader,
    mineBreadcrumb,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.mine-header{
  box-shadow: 0px 0px 3px #DDD;
}
.mine-main{
  background: #F0F2F5;
}
.mine-footer{
  background: #F0F2F5;
}
</style>
