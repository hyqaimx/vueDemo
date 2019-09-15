export default {
    namespaced:true,
    state: {
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
            ],
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
        ],
        saleTypePrecent:{
            columns: ['类型', '数量'],
            rows: [
                { '类型': '家用电器', '数量': 1393 },
                { '类型': '食用就睡', '数量': 3530 },
                { '类型': '个护健康', '数量': 2923 },
                { '类型': '服饰箱包', '数量': 1723 },
                { '类型': '母婴产品', '数量': 3792 },
                { '类型': '其他', '数量': 4593 }
            ]
        },
        smallRingOption:{
            tooltip: { show:false },
            series: [
                {
                    type:'pie',
                    radius: ['50%', '90%'],
                    avoidLabelOverlap: false,
                    hoverAnimation:false,
                    label: {
                        normal: {
                            show: false,
                            position: 'center'
                        }
                    },
                    itemStyle:{
                        borderWidth:1,
                        borderColor:'#FFF',
                    },
                    emphasis:{
                        itemStyle:{
                            borderWidth:1,
                            borderColor:'#FFF',
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        }
                    },
                    data:[
                        {value:335, name:'直接访问',itemStyle:{color:'#DDD'}},
                        {value:310, name:'邮件营销',itemStyle:{color:'#1890ff'}},
                    ]
                }
            ]
        },
        storeOption:{
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                itemWidth:15,
                itemHeight:2,
                icon:'rect',
                data:['邮件营销','联盟广告']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '15%',
                containLabel: true
            },
            dataZoom: [
                {
                    show: true,
                }
            ],
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['周一','周二','周三','周四','周五','周六','周日']
            },
            yAxis: {
                type: 'value',
                axisLine:{
                    show:false,
                },
                axisTick:{
                    show:false,
                },
                splitLine:{
                    lineStyle:{
                        color:'#E5E5E5',
                        type:'dashed'
                    }
                }
            },
            series: [
                {
                    name:'邮件营销',
                    type:'line',
                    stack: '总量',
                    data:[120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name:'联盟广告',
                    type:'line',
                    stack: '总量',
                    data:[220, 182, 191, 234, 290, 330, 310]
                },
            ]
        },
    },
    actions: { 
        changeSaleType({state,commit},payload){
            const {saleTypePrecent}=state;
            if(payload===1){
                const numArr=[2222,4522,1234,5432,2875,1569];
                saleTypePrecent.rows.forEach((item,index)=>{
                    item['数量']=numArr[index];
                })
            }
            if(payload===2){
                const numArr=[222,1522,3234,2432,1875,3569];
                saleTypePrecent.rows.forEach((item,index)=>{
                    item['数量']=numArr[index];
                })
            }
            if(payload===3){
                const numArr=[3222,2522,3234,1432,3875,2569];
                saleTypePrecent.rows.forEach((item,index)=>{
                    item['数量']=numArr[index];
                })
            }
            commit('updateSaleTypePrecent',saleTypePrecent);
        }    
    },
    mutations: {
        updateSaleTypePrecent(state,payload){
            state.saleTypePrecent=payload;
        },
    },
    getters: { 
        resultData(state){
            return state.data+1;
        }
    }
}