<template>
    <div>
        <el-row :gutter="24">
            <el-col :xl='6' :lg='6' :md='12' :sm='24' :xs='24'>
                <el-card style="margin-bottom:24px;">
                    <div class="body-header">
                        <span>销售总额</span>
                        <el-tooltip content="提示信息" placement="top" effect="dark"><i class="el-icon-warning-outline" style="float:right;" /></el-tooltip>
                    </div>
                    <div class="body-main">
                        <div class="main-text">￥{{transTotalSaleNum}}</div>
                        <div class="main-other">
                            <p style="font-size:14px;padding:10px 0">
                                <span>周同比 12%</span>
                                <span class="el-icon-caret-top" style="margin-right:10px; color:green;"></span>
                                <span>日同比 11%</span>
                                <span class="el-icon-caret-bottom" style="margin-right:10px;color:red"></span>
                            </p>
                        </div>
                    </div>
                    <div class="body-footer">
                        <div class="footer-text">日销售额:￥{{transDaySaleNum}}</div>
                    </div>
                </el-card>
            </el-col>
            <el-col :xl='6' :lg='6' :md='12' :sm='24' :xs='24'>
                <el-card style="margin-bottom:24px;">
                    <div class="body-header">
                        <span>访问量</span>
                        <el-tooltip content="提示信息" placement="top" effect="dark"><i class="el-icon-warning-outline" style="float:right;" /></el-tooltip>
                    </div>
                    <div class="body-main">
                        <div class="main-text">{{transTotalSaleNum}}</div>
                        <div class="main-other">
                            <mini-chart :height="46" :chartData='visitData'></mini-chart>
                        </div>
                    </div>
                    <div class="body-footer">
                        <div class="footer-text">日访问量:{{transDaySaleNum}}</div>
                    </div>
                </el-card>
            </el-col>
            <el-col :xl='6' :lg='6' :md='12' :sm='24' :xs='24'>
                <el-card style="margin-bottom:24px;">
                    <div class="body-header">
                        <span>支付笔数</span>
                        <el-tooltip content="提示信息" placement="top" effect="dark"><i class="el-icon-warning-outline" style="float:right;" /></el-tooltip>
                    </div>
                    <div class="body-main">
                        <div class="main-text">{{transTotalSaleNum}}</div>
                        <div class="main-other">
                            <mini-bar-chart :chartData='payData' :height='46'></mini-bar-chart>
                        </div>
                    </div>
                    <div class="body-footer">
                        <div class="footer-text">转化率: 60%</div>
                    </div>
                </el-card>
            </el-col>
            <el-col :xl='6' :lg='6' :md='12' :sm='24' :xs='24'>
                <el-card style="margin-bottom:24px;">
                    <div class="body-header">
                        <span>运营活动效果</span>
                        <el-tooltip content="提示信息" placement="top" effect="dark"><i class="el-icon-warning-outline" style="float:right;" /></el-tooltip>
                    </div>
                    <div class="body-main">
                        <div class="main-text">70 %</div>
                        <div class="main-other">
                            <el-progress :text-inside="true" :stroke-width="26" :percentage="70"></el-progress>
                        </div>
                    </div>
                    <div class="body-footer">
                        <div class="footer-text">
                            <span>周同比 12%</span>
                            <span class="el-icon-caret-top" style="margin-right:10px; color:green;"></span>
                            <span>日同比 11%</span>
                            <span class="el-icon-caret-bottom" style="margin-right:10px;color:red"></span>
                        </div>
                    </div>
                </el-card>
            </el-col>
        </el-row>
        <el-card style="margin-bottom:24px;">
            <el-tabs value="first" @tab-click="tabSwitch">
                <el-tab-pane label="销售额" name="first">
                    <el-row :gutter="48">
                        <el-col :xl="18" :lg="18" :md="12" :xs="24">
                            <h5>销售趋势</h5>
                            <ve-histogram :data='saleTrend' :legend-visible="false"></ve-histogram>
                        </el-col>
                        <el-col :xl="6" :lg="6" :md="12" :xs="24">
                            <h5>门店销售额排名</h5>
                            <div style="margin-top:50px;">
                                <template v-for="item in rankData">
                                    <p :key="item.id" class="flexbox rankList">
                                        <el-badge :type="item.rank>3?'info':'error'" :value="item.rank"></el-badge>
                                        <span style="padding-left:20px;">{{item.name}}</span>
                                        <span class="flex1" style="text-align:right;">{{item.num}}</span>
                                    </p>
                                </template>
                            </div>
                        </el-col>
                    </el-row>
                </el-tab-pane>
                <el-tab-pane label="访问量" name="second">
                    <el-row :gutter="48">
                        <el-col :xl="18" :lg="18" :md="12" :xs="24">
                            <h5>访问量趋势</h5>
                            <ve-histogram :data='saleTrend' ref='visitChart' :legend-visible="false"></ve-histogram>
                        </el-col>
                        <el-col :xl="6" :lg="6" :md="12" :xs="24">
                            <h5>门店访问量排名</h5>
                            <div style="margin-top:50px;">
                                <template v-for="item in rankData">
                                    <p :key="item.id" class="flexbox rankList">
                                        <el-badge :type="item.rank>3?'info':'error'" :value="item.rank"></el-badge>
                                        <span style="padding-left:20px;">{{item.name}}</span>
                                        <span class="flex1" style="text-align:right;">{{item.num}}</span>
                                    </p>
                                </template>
                            </div>
                        </el-col>
                    </el-row>
                </el-tab-pane>
            </el-tabs>
        </el-card>
        <el-row :gutter="24">
            <el-col :xl="12" :lg="12" :md="12" :xs="24">
                <el-card>
                    <div slot="header" class="flexbox">
                        <div class="flex1">线上热门搜索</div>
                        <el-button size="small" type="text">...</el-button>
                    </div>
                    <el-row :gutter="24">
                        <el-col :xl="12" :lg="12" :md="24" :xs="24">
                            <p style="margin-bottom:20px;">搜索用户数 <el-tooltip content="提示信息" placement="top" effect="dark"><i class="el-icon-warning-outline"></i></el-tooltip></p>
                            <p style="line-height:24px;margin-bottom:20px;">
                                <span style="font-size:20px;padding-right:20px;">123,4</span>
                                <span>123,4 <i class="el-icon-caret-top" style="color:green;"></i></span>
                            </p>
                            <mini-chart :height="46" :chartData='visitData'></mini-chart>
                        </el-col>
                        <el-col :xl="12" :lg="12" :md="24" :xs="24">
                            <p style="margin-bottom:20px;">人均搜索次数 <el-tooltip content="提示信息" placement="top" effect="dark"><i class="el-icon-warning-outline"></i></el-tooltip></p>
                            <p style="line-height:24px;margin-bottom:20px;">
                                <span style="font-size:20px;padding-right:20px;">2.7</span>
                                <span>26.2 <i class="el-icon-caret-bottom" style="color:red;"></i></span>
                            </p>
                            <mini-chart :height="46" :chartData='visitData'></mini-chart>
                        </el-col>
                        <el-table style="width:100%;">
                            <el-table-column prop="rank" label="排名" width="100"></el-table-column>
                            <el-table-column prop="keyWord" label="搜索关键词"></el-table-column>
                            <el-table-column prop="userNum" label="用户数"></el-table-column>
                            <el-table-column prop="upPercent" label="周涨幅"></el-table-column>
                        </el-table>
                        <el-pagination small layout="prev, pager, next" :total="50" style="float:right;margin-top:20px;"></el-pagination>
                    </el-row>
                </el-card>
            </el-col>
            <el-col :xl="12" :lg="12" :md="12" :xs="24">
                <el-card>
                    <div slot="header" class="flexbox">
                        <div class="flex1">销售额类别占比</div>
                        <el-button-group>
                            <el-button size="small">全部渠道</el-button>
                            <el-button size="small">线上</el-button>
                            <el-button size="small">门店</el-button>
                        </el-button-group>
                    </div>
                    <div>111</div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import numeral from 'numeral';
import VeHistogram from 'v-charts/lib/histogram.common';
import miniChart from 'src/components/miniEcharts/miniLineChart.vue';
import miniBarChart from 'src/components/miniEcharts/miniBarChart.vue';

export default {
    data(){
        return {
            data:'Welcome! this is home page',
            totalSaleNum:2034,
            daySaleNum:386,
            visitData:{
                columns:['日期','访问用户'],
                rows:[
                    {'日期':'1/1','访问用户':8},
                    {'日期':'1/2','访问用户':3},
                    {'日期':'1/3','访问用户':9},
                    {'日期':'1/4','访问用户':6},
                    {'日期':'1/5','访问用户':7},
                    {'日期':'1/6','访问用户':1},
                    {'日期':'1/7','访问用户':9},
                ]
            },
            payData:{
                columns:['日期','支付笔数'],
                rows:[
                    {'日期':'2/2','支付笔数':80},
                    {'日期':'2/3','支付笔数':30},
                    {'日期':'2/4','支付笔数':90},
                    {'日期':'2/5','支付笔数':60},
                    {'日期':'2/6','支付笔数':70},
                    {'日期':'2/7','支付笔数':10},
                    {'日期':'2/8','支付笔数':90},
                    {'日期':'2/9','支付笔数':60},
                ]
            },
            saleTrend:{
                columns:['月份','支付笔数'],
                rows:[
                    {'月份':'1月','支付笔数':80},
                    {'月份':'2月','支付笔数':30},
                    {'月份':'3月','支付笔数':90},
                    {'月份':'4月','支付笔数':60},
                    {'月份':'5月','支付笔数':70},
                    {'月份':'6月','支付笔数':10},
                    {'月份':'7月','支付笔数':90},
                    {'月份':'8月','支付笔数':60},
                    {'月份':'9月','支付笔数':60},
                    {'月份':'10月','支付笔数':60},
                    {'月份':'11月','支付笔数':60},
                    {'月份':'12月','支付笔数':60},
                ]
            },
            rankData:[
                {id:'1',name:'工专路 1 号店',rank:1,num:323234},
                {id:'2',name:'工专路 2 号店',rank:2,num:323234},
                {id:'3',name:'工专路 3 号店',rank:3,num:323234},
                {id:'4',name:'工专路 4 号店',rank:4,num:323234},
                {id:'5',name:'工专路 5 号店',rank:5,num:323234},
                {id:'6',name:'工专路 6 号店',rank:6,num:323234},
                {id:'7',name:'工专路 7 号店',rank:7,num:323234},
                {id:'8',name:'工专路 8 号店',rank:8,num:323234},
            ]
        }
    },
    computed:{
        transTotalSaleNum(){
            return numeral(this.totalSaleNum).format('0,0');
        },
        transDaySaleNum(){
            return numeral(this.daySaleNum).format('0,0');
        }
    },
    mounted(){
        // console.log(this.$route);
    },
    methods:{
        tabSwitch(){
            this.$nextTick(_=>{
                this.$refs['visitChart'].echarts.resize();
            })
        }
    },
    components:{
        miniChart,
        miniBarChart,
        VeHistogram
    }
}
</script>

<style scoped>
.body-main{
    padding:10px 0;
}
.main-text{
    font-size: 30px;
    font-weight: 300;
    padding: 10px 0;
    color: #333;
}
.main-other{
    height: 48px;
    border-bottom: 1px solid #DDD;
    position: relative;
}
.main-other > p{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
}
.flexbox{
    display: flex;
    align-items: center;
}
.flex1{
    flex: 1;
}
.rankList{
    margin-bottom: 20px;
    line-height: 20px;
    padding-right: 20px;
}
.footer-text{
    font-size: 16px;
    padding-top: 8px;
}
</style>