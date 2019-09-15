<template>
    <v-chart :options="option" :autoresize='true' :style="{width:computedWidth,height:computedHeight}"></v-chart>
</template>

<script>
import Vue from 'vue'
import ECharts from 'vue-echarts'
import 'echarts';
export default {
    data(){
        return {
            data:'',
        }
    },
    computed:{
        computedWidth(){
            if(this.width){
                return this.width+'px';
            }else{
                return '100%';
            }
        },
        computedHeight(){
            if(this.height){
                return this.height+'px';
            }else{
                return '400px';
            }
        }
    },
    props:['option','width','height'],
    components:{
        'v-chart':ECharts,
    }
}
</script>

<style>
.echarts {
  width: 100%;
  height: 100%;
}
</style>