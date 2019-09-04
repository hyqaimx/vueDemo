<template>
    <ve-histogram 
        :data="chartData"
        :legend-visible="false"
        :height="height+'px'"
        :xAxis="xAxisConfig"
        :yAxis="yAxisConfig"
        :grid="grid"
        :tooltip="tooltipConfig"
    >
    </ve-histogram>
</template>

<script>
import VeHistogram from 'v-charts/lib/histogram.common';
export default {
    data(){
        return {
            data:'1',
            chartSettings:{
                dimension: ['日期']
            },
            xAxisConfig:{
                type:"category",
                show:false,
            },
            yAxisConfig:{
                show:false,
            },
            tooltipConfig:{
                show:true,
                formatter:function(params){
                    return params.seriesName+':'+params.value;
                }
            }
        }
    },
    computed:{
        grid(){
            const height=(this.height+14)+'px';
            return {
                x:-20,
                x2:0,
                y:-20,
                height:height,
            }
        }
    },
    props:['chartData','height'],
    components:{
        VeHistogram,
    }
}
</script>

<style scoped>

</style>