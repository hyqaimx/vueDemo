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
        <el-row :gutter="24" type="flex" style="margin-bottom:24px;">
            <el-col :xl="12" :lg="12" :md="12" :xs="24">
                <el-card style="height:100%;">
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
                        <el-table style="width:100%;" border size="small">
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
                <el-card style="height:100%;">
                    <div slot="header" class="flexbox">
                        <div class="flex1">销售额类别占比</div>
                        <el-button-group>
                            <el-button size="small" @click="changeSaleType(1)">全部渠道</el-button>
                            <el-button size="small" @click="changeSaleType(2)">线上</el-button>
                            <el-button size="small" @click="changeSaleType(3)">门店</el-button>
                        </el-button-group>
                    </div>
                    <div>
                        <ve-ring :data="saleTypePrecent" :legend="{type:'scroll',top:'middle',right:'20px',orient:'vertical'}"></ve-ring>
                    </div>
                </el-card>
            </el-col>
        </el-row>
        <el-card>
            <el-tabs>
                <el-tab-pane>
                    <div slot="label">
                        <div class="tabs-title-label">Store1</div>
                        <div class="flexbox">
                            <div class="flex1 tabs-title-detail">
                                <p>转化率</p>
                                <p>70%</p>
                            </div>
                            <div>
                                <option-chart :option="smallRingOption" :width='40' :height='40'></option-chart>
                            </div>
                        </div>
                    </div>
                    <div>
                        <option-chart :option="storeOption"></option-chart>
                    </div>
                </el-tab-pane>
                <el-tab-pane>
                    <div slot="label">
                        <div class="tabs-title-label">Store2</div>
                        <div class="flexbox">
                            <div class="flex1 tabs-title-detail">
                                <p>转化率</p>
                                <p>30%</p>
                            </div>
                            <div>
                                <option-chart :option="smallRingOption" :width='40' :height='40'></option-chart>
                            </div>
                        </div>
                    </div>
                    <div>
                        <option-chart :option="storeOption"></option-chart>
                    </div>
                </el-tab-pane>
            </el-tabs>
        </el-card>
    </div>
</template>

<script>
import numeral from 'numeral';
import { mapState, mapActions } from 'vuex';
import miniChart from 'src/components/miniEcharts/miniLineChart.vue';
import miniBarChart from 'src/components/miniEcharts/miniBarChart.vue';
import optionChart from 'src/components/Echarts/optionChart.vue';

export default {
    data(){
        return {
            homeData:'1',
        }
    },
    computed:{
        ...mapState('home',[
            'totalSaleNum',
            'daySaleNum',
            'visitData',
            'payData',
            'saleTrend',
            'rankData',
            'saleTypePrecent',
            'smallRingOption',
            'storeOption',
        ]),
        transTotalSaleNum(){
            return numeral(this.totalSaleNum).format('0,0');
        },
        transDaySaleNum(){
            return numeral(this.daySaleNum).format('0,0');
        },
    },
    mounted(){
        console.log(this.data);
    },
    methods:{
        ...mapActions('home',[
            'changeSaleType',
        ]),
        tabSwitch(){
            this.$nextTick(_=>{
                this.$refs['visitChart'].echarts.resize();
            })
        }
    },
    components:{
        miniChart,
        miniBarChart,
        optionChart,
    }
}
</script>

<style>
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
.tabs-title-label{
    text-align:center;
    color:#AAA;
    font-size:16px;
}
.tabs-title-detail{
    margin-right: 10px;
    width: 100px;
    text-align: center;
}
.tabs-title-detail p:first-child{
    color: #AAA;
    font-size: 14px;
}
.tabs-title-detail p{
    font-size: 20px;
}
.footer-text{
    font-size: 16px;
    padding-top: 8px;
}
.el-tabs__item{
    height: auto;
}
</style>