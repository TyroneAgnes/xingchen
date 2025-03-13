(()=>{var e={};e.id=3286,e.ids=[3286],e.modules={10846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},44870:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},29294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},63033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},4876:(e,n,i)=>{"use strict";i.r(n),i.d(n,{patchFetch:()=>u,routeModule:()=>l,serverHooks:()=>v,workAsyncStorage:()=>P,workUnitAsyncStorage:()=>h});var c={};i.r(c),i.d(c,{GET:()=>g});var a=i(42706),s=i(28203),o=i(45994),t=i(39187);let m=[{title:"恒生指数",value:16589.44,change:-112.74,changePercent:-.68,isPositive:!1,updateTime:new Date().toISOString()},{title:"恒生科技指数",value:3345.89,change:-42.56,changePercent:-1.26,isPositive:!1,updateTime:new Date().toISOString()},{title:"国企指数",value:5842.31,change:-38.25,changePercent:-.65,isPositive:!1,updateTime:new Date().toISOString()}],r={港股:{科技互联网:[{symbol:"00700",name:"腾讯控股",price:298.4,change:-3.6,changePercent:-1.19,volume:0xbc614e,isPositive:!1},{symbol:"09988",name:"阿里巴巴",price:72.35,change:-1.25,changePercent:-1.7,volume:8765432,isPositive:!1},{symbol:"09618",name:"京东集团",price:94.55,change:1.25,changePercent:1.34,volume:5678901,isPositive:!0},{symbol:"03690",name:"美团-W",price:68.85,change:-.95,changePercent:-1.36,volume:7890123,isPositive:!1}],金融保险:[{symbol:"01398",name:"工商银行",price:3.85,change:.05,changePercent:1.32,volume:0xdfb38d2,isPositive:!0},{symbol:"02318",name:"中国平安",price:43.25,change:-.55,changePercent:-1.26,volume:0xbc614e,isPositive:!1},{symbol:"00939",name:"建设银行",price:4.75,change:.08,changePercent:1.71,volume:0x5e30a78,isPositive:!0},{symbol:"01288",name:"农业银行",price:2.95,change:.03,changePercent:1.03,volume:0x2b90135,isPositive:!0}],医药生物:[{symbol:"02269",name:"药明生物",price:27.85,change:-.45,changePercent:-1.59,volume:6789012,isPositive:!1},{symbol:"03759",name:"康龙化成",price:48.5,change:1.2,changePercent:2.54,volume:3456789,isPositive:!0},{symbol:"01801",name:"药明康德",price:52.35,change:-.85,changePercent:-1.6,volume:4567890,isPositive:!1},{symbol:"00241",name:"阿里健康",price:3.15,change:.05,changePercent:1.61,volume:5678901,isPositive:!0}],新能源:[{symbol:"01211",name:"比亚迪",price:168.9,change:2.3,changePercent:1.38,volume:8901234,isPositive:!0},{symbol:"02594",name:"比亚迪电子",price:23.45,change:-.35,changePercent:-1.47,volume:2345678,isPositive:!1},{symbol:"00175",name:"吉利汽车",price:9.85,change:.15,changePercent:1.55,volume:7890123,isPositive:!0},{symbol:"02015",name:"理想汽车-W",price:98.55,change:-1.45,changePercent:-1.45,volume:3456789,isPositive:!1}],消费零售:[{symbol:"02020",name:"安踏体育",price:85.25,change:1.35,changePercent:1.61,volume:4567890,isPositive:!0},{symbol:"06862",name:"海底捞",price:15.78,change:-.22,changePercent:-1.37,volume:5678901,isPositive:!1},{symbol:"02331",name:"李宁",price:25.45,change:.35,changePercent:1.39,volume:6789012,isPositive:!0},{symbol:"00291",name:"华润啤酒",price:45.85,change:-.65,changePercent:-1.4,volume:7890123,isPositive:!1}],地产建筑:[{symbol:"01109",name:"华润置地",price:12.88,change:.18,changePercent:1.42,volume:8901234,isPositive:!0},{symbol:"00688",name:"中国海外",price:15.76,change:-.24,changePercent:-1.5,volume:9012345,isPositive:!1},{symbol:"03323",name:"中国建材",price:6.89,change:.09,changePercent:1.32,volume:1234567,isPositive:!0},{symbol:"00914",name:"中建控股",price:4.56,change:-.06,changePercent:-1.3,volume:2345678,isPositive:!1}]},美股:{科技巨头:[{symbol:"AAPL",name:"苹果",price:182.52,change:1.87,changePercent:1.04,volume:0x165ec15,isPositive:!0},{symbol:"MSFT",name:"微软",price:404.65,change:5.23,changePercent:1.31,volume:0x20f76d2,isPositive:!0},{symbol:"GOOGL",name:"谷歌A",price:142.75,change:-1.25,changePercent:-.87,volume:0xbc614e,isPositive:!1},{symbol:"META",name:"脸书",price:485.95,change:6.85,changePercent:1.43,volume:9876543,isPositive:!0}],芯片半导体:[{symbol:"NVDA",name:"英伟达",price:875.35,change:15.65,changePercent:1.82,volume:0x2b90135,isPositive:!0},{symbol:"AMD",name:"超微",price:178.45,change:-2.35,changePercent:-1.3,volume:0x165ec15,isPositive:!1},{symbol:"INTC",name:"英特尔",price:42.85,change:.65,changePercent:1.54,volume:0x20f76d2,isPositive:!0},{symbol:"TSM",name:"台积电",price:128.95,change:-1.85,changePercent:-1.42,volume:0xbc614e,isPositive:!1}],新能源车:[{symbol:"TSLA",name:"特斯拉",price:175.45,change:-2.55,changePercent:-1.43,volume:0x3628814,isPositive:!1},{symbol:"NIO",name:"蔚来",price:5.85,change:.15,changePercent:2.63,volume:0x20f76d2,isPositive:!0},{symbol:"XPEV",name:"小鹏",price:9.25,change:-.15,changePercent:-1.6,volume:0x165ec15,isPositive:!1},{symbol:"LI",name:"理想",price:32.85,change:.55,changePercent:1.7,volume:0xbc614e,isPositive:!0}],互联网:[{symbol:"AMZN",name:"亚马逊",price:178.35,change:2.45,changePercent:1.39,volume:0x2b90135,isPositive:!0},{symbol:"BABA",name:"阿里巴巴",price:72.45,change:-1.15,changePercent:-1.56,volume:0x20f76d2,isPositive:!1},{symbol:"PDD",name:"拼多多",price:128.75,change:2.25,changePercent:1.78,volume:0x165ec15,isPositive:!0},{symbol:"JD",name:"京东",price:25.85,change:-.45,changePercent:-1.71,volume:0xbc614e,isPositive:!1}],金融支付:[{symbol:"V",name:"维萨",price:275.85,change:3.45,changePercent:1.27,volume:0x165ec15,isPositive:!0},{symbol:"MA",name:"万事达",price:468.95,change:-5.85,changePercent:-1.23,volume:0xbc614e,isPositive:!1},{symbol:"PYPL",name:"贝宝",price:62.35,change:.85,changePercent:1.38,volume:0x20f76d2,isPositive:!0},{symbol:"SQ",name:"方块",price:75.45,change:-1.15,changePercent:-1.5,volume:0x165ec15,isPositive:!1}],生物医药:[{symbol:"PFE",name:"辉瑞",price:27.85,change:-.35,changePercent:-1.24,volume:0x2b90135,isPositive:!1},{symbol:"MRNA",name:"莫德纳",price:98.75,change:1.45,changePercent:1.49,volume:0x165ec15,isPositive:!0},{symbol:"JNJ",name:"强生",price:158.95,change:2.25,changePercent:1.44,volume:0x20f76d2,isPositive:!0},{symbol:"ABBV",name:"艾伯维",price:168.35,change:-2.45,changePercent:-1.44,volume:0xbc614e,isPositive:!1}]},期货:{贵金属:[{symbol:"AU",name:"黄金",price:2185.5,change:15.5,changePercent:.71,volume:234567,isPositive:!0},{symbol:"AG",name:"白银",price:24.85,change:-.35,changePercent:-1.39,volume:345678,isPositive:!1},{symbol:"PT",name:"铂金",price:928.75,change:8.75,changePercent:.95,volume:123456,isPositive:!0},{symbol:"PD",name:"钯金",price:1045.25,change:-12.75,changePercent:-1.21,volume:234567,isPositive:!1}],能源:[{symbol:"CL",name:"原油",price:82.45,change:1.25,changePercent:1.54,volume:456789,isPositive:!0},{symbol:"NG",name:"天然气",price:2.185,change:-.035,changePercent:-1.58,volume:345678,isPositive:!1},{symbol:"HO",name:"取暖油",price:2.685,change:.045,changePercent:1.71,volume:234567,isPositive:!0},{symbol:"RB",name:"汽油",price:2.485,change:-.035,changePercent:-1.39,volume:345678,isPositive:!1}],基本金属:[{symbol:"HG",name:"铜",price:3.985,change:.055,changePercent:1.4,volume:234567,isPositive:!0},{symbol:"AL",name:"铝",price:2.285,change:-.035,changePercent:-1.51,volume:345678,isPositive:!1},{symbol:"ZN",name:"锌",price:2.485,change:.035,changePercent:1.43,volume:234567,isPositive:!0},{symbol:"NI",name:"镍",price:16.785,change:-.215,changePercent:-1.27,volume:123456,isPositive:!1}],农产品:[{symbol:"S",name:"大豆",price:1185.75,change:15.25,changePercent:1.3,volume:345678,isPositive:!0},{symbol:"C",name:"玉米",price:438.25,change:-5.75,changePercent:-1.29,volume:456789,isPositive:!1},{symbol:"W",name:"小麦",price:585.5,change:7.5,changePercent:1.3,volume:234567,isPositive:!0},{symbol:"CT",name:"棉花",price:85.65,change:-1.35,changePercent:-1.55,volume:345678,isPositive:!1}],软商品:[{symbol:"KC",name:"咖啡",price:185.65,change:2.65,changePercent:1.45,volume:234567,isPositive:!0},{symbol:"SB",name:"白糖",price:22.85,change:-.35,changePercent:-1.51,volume:345678,isPositive:!1},{symbol:"CC",name:"可可",price:4285,change:55,changePercent:1.3,volume:123456,isPositive:!0},{symbol:"P",name:"棕榈油",price:885.75,change:-12.25,changePercent:-1.36,volume:234567,isPositive:!1}],畜牧产品:[{symbol:"LH",name:"生猪",price:85.675,change:1.325,changePercent:1.57,volume:234567,isPositive:!0},{symbol:"EG",name:"鸡蛋",price:1.485,change:-.025,changePercent:-1.66,volume:345678,isPositive:!1},{symbol:"LC",name:"肉牛",price:185.45,change:2.55,changePercent:1.39,volume:234567,isPositive:!0},{symbol:"WL",name:"羊毛",price:485.75,change:-6.25,changePercent:-1.27,volume:123456,isPositive:!1}]},日股:{汽车制造:[{symbol:"7203",name:"丰田",price:3285,change:45,changePercent:1.39,volume:2345678,isPositive:!0},{symbol:"7267",name:"本田",price:1685.5,change:-23.5,changePercent:-1.38,volume:1234567,isPositive:!1},{symbol:"7201",name:"日产",price:585.25,change:7.25,changePercent:1.25,volume:3456789,isPositive:!0},{symbol:"7269",name:"铃木",price:885.75,change:-12.25,changePercent:-1.36,volume:2345678,isPositive:!1}],电子科技:[{symbol:"6758",name:"索尼",price:12850,change:150,changePercent:1.18,volume:1234567,isPositive:!0},{symbol:"6501",name:"日立",price:8785,change:-115,changePercent:-1.29,volume:2345678,isPositive:!1},{symbol:"6752",name:"松下",price:1485.5,change:20.5,changePercent:1.4,volume:3456789,isPositive:!0},{symbol:"6502",name:"东芝",price:4585.25,change:-64.75,changePercent:-1.39,volume:2345678,isPositive:!1}],金融银行:[{symbol:"8306",name:"三菱UFJ",price:1285.5,change:17.5,changePercent:1.38,volume:4567890,isPositive:!0},{symbol:"8316",name:"三井住友",price:5885,change:-82,changePercent:-1.37,volume:3456789,isPositive:!1},{symbol:"8411",name:"瑞穗金融",price:2485.75,change:34.75,changePercent:1.42,volume:2345678,isPositive:!0},{symbol:"8331",name:"千叶银行",price:785.25,change:-10.75,changePercent:-1.35,volume:1234567,isPositive:!1}],通信服务:[{symbol:"9432",name:"NTT",price:485.75,change:6.75,changePercent:1.41,volume:2345678,isPositive:!0},{symbol:"9434",name:"软银",price:6285,change:-88,changePercent:-1.38,volume:3456789,isPositive:!1},{symbol:"9613",name:"NTT数据",price:1885.5,change:26.5,changePercent:1.42,volume:2345678,isPositive:!0},{symbol:"4689",name:"雅虎日本",price:485.25,change:-6.75,changePercent:-1.37,volume:1234567,isPositive:!1}],零售商业:[{symbol:"9983",name:"快递",price:2485.75,change:34.75,changePercent:1.42,volume:2345678,isPositive:!0},{symbol:"8267",name:"永旺",price:3285,change:-46,changePercent:-1.38,volume:3456789,isPositive:!1},{symbol:"3382",name:"七和控股",price:885.5,change:12.5,changePercent:1.43,volume:2345678,isPositive:!0},{symbol:"8905",name:"永旺梦乐城",price:1285.25,change:-17.75,changePercent:-1.36,volume:1234567,isPositive:!1}],工业机械:[{symbol:"7011",name:"三菱重工",price:785.5,change:10.5,changePercent:1.35,volume:2345678,isPositive:!0},{symbol:"6301",name:"小松制作",price:3485,change:-48,changePercent:-1.36,volume:3456789,isPositive:!1},{symbol:"6305",name:"日立建机",price:2885.75,change:40.75,changePercent:1.43,volume:2345678,isPositive:!0},{symbol:"6361",name:"荏原",price:685.25,change:-9.75,changePercent:-1.4,volume:1234567,isPositive:!1}]}};async function g(e){try{let{searchParams:n}=new URL(e.url),i=n.get("market"),c=new Date().toISOString(),a=m.map(e=>({...e,value:e.value*(1+(Math.random()-.5)*.01),change:e.change+(Math.random()-.5)*.5,changePercent:e.changePercent+(Math.random()-.5)*.1,updateTime:c})),s=i?r[i]:{},o=Object.entries(s||{}).reduce((e,[n,a])=>(e[n]=a.map(e=>({...e,market:i||"",updateTime:c})),e),{});return t.NextResponse.json({code:0,data:{indices:a,sectors:o},message:"获取成功"})}catch(e){return console.error("获取市场数据失败:",e),t.NextResponse.json({code:1,message:"服务器错误"},{status:500})}}let l=new a.AppRouteRouteModule({definition:{kind:s.RouteKind.APP_ROUTE,page:"/api/market/route",pathname:"/api/market",filename:"route",bundlePath:"app/api/market/route"},resolvedPagePath:"/Users/suntao/Desktop/星辰H52.0/app/api/market/route.ts",nextConfigOutput:"",userland:c}),{workAsyncStorage:P,workUnitAsyncStorage:h,serverHooks:v}=l;function u(){return(0,o.patchFetch)({workAsyncStorage:P,workUnitAsyncStorage:h})}},96487:()=>{},78335:()=>{}};var n=require("../../../webpack-runtime.js");n.C(e);var i=e=>n(n.s=e),c=n.X(0,[638,5452],()=>i(4876));module.exports=c})();