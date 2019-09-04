<template>
    <el-breadcrumb separator="/" class="breadMenu">
        <template v-for="item in breadMenu">
            <el-breadcrumb-item :key='item'>{{item}}</el-breadcrumb-item>
        </template>
    </el-breadcrumb>
</template>
<script>
export default {
    props:['currentUrl'],
    computed:{
        breadMenu(){
            const arr=this.currentUrl.split('/');
            arr.shift();
            return arr;
        }
    },
    mounted(){
        
    }
}
</script>

<style scoped>
    .breadMenu{
        padding-bottom: 20px;
    }
</style>