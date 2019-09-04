<template>
    <ve-line 
        :data="chartData" 
        :height="height+'px'" 
        :settings='visitChartSettings' 
        :legend-visible='false' 
        :grid='grid' 
        :xAxis='xAxisConfig' 
        :yAxis='yAxisConfig'>
        
    </ve-line>
</template>

<script>
import VeLine from 'v-charts/lib/line.common';
export default {
    data(){
        return {
            data:'1',
            visitChartSettings:{
                area:true,
            },
            xAxisConfig:{
                type:"category",
                show:false,
            },
            yAxisConfig:{
                show:false,
            }
        }
    },
    computed:{
        grid(){
            const height=(this.height+14)+'px';
            return {
                x:-50,
                x2:-30,
                y:0,
                height:height,
            }
        }
    },
    props:['chartData','height'],
    components:{
        VeLine,
    }
}
</script>

<style scoped>

</style>