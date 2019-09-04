<template>
    <div>
        <div class="product-title">
            <img src="https://cn.vuejs.org/images/logo.png" class='product-logo' />
            VUE-VUEX-VUERouter
        </div>
        <div class="menu-contain">
            <el-menu class="el-menu-demo" mode="horizontal" default-active="home" router>
                <template v-for="item in routerData">
                    <template v-if="item.page">
                        <el-menu-item :key="item.key" :index="item.path">{{item.menuName}}</el-menu-item>
                    </template>
                    <template v-else>
                        <el-submenu :key="item.key" :index="item.key">
                            <template slot="title">{{item.menuName}}</template>
                            <template v-for="citem in item.children">
                                <el-menu-item :key="citem.key" :index="citem.path">{{citem.menuName}}</el-menu-item>
                            </template>
                        </el-submenu>
                    </template>
                </template>
            </el-menu>
        </div>
    </div>
</template>

<script>
import routerMenu from 'utils/router_menu';

export default {
    data(){
        return {
            data:'',
            routerData:[],
        }
    },
    props:['routes'],
    mounted(){
        const that=this;
        that.routerData=[...routerMenu];
    }
}
</script>

<style scoped>
.product-title{
    display: block;
    float: left;
    width: 400px;
    height: 60px;
    line-height: 60px;
    text-align: left;
    font-size: 25px;
    font-weight: 600;
}
.menu-contain{
    padding-left: 400px;
}
.product-logo{
    display: inline-block;
    width: 40px;
    height: 40px;
    vertical-align: middle;
    margin-right: 10px;
}
</style>