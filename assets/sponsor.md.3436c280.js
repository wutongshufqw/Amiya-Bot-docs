import{_ as p,o as t,c as e,V as u,F as l,R as f,n as g,C as a,t as i,G as _,J as m,a as r}from"./chunks/framework.4465fd78.js";import{a as y}from"./chunks/index.ca03c6e9.js";const q="/assets/5a4a07cc67f556288d3df2e9029fc14.f485e307.jpg";const b={name:"specialThanks"},k={class:"user-list"},x=u('<div class="user" data-v-6c6a5107><img class="avatar" src="https://q1.qlogo.cn/g?b=qq&amp;nk=1391939232&amp;s=640" alt="" data-v-6c6a5107><div class="user-name" data-v-6c6a5107><span class="name" style="color:#f44336;font-size:18px;" data-v-6c6a5107>幕后大佬</span><span class="desc" data-v-6c6a5107>顶级的存在！支撑兔兔的所有！</span></div></div><div class="user" data-v-6c6a5107><img class="avatar" src="https://q1.qlogo.cn/g?b=qq&amp;nk=3061243068&amp;s=640" alt="" data-v-6c6a5107><div class="user-name" data-v-6c6a5107><span class="name" data-v-6c6a5107>Initial heart</span><span class="desc" data-v-6c6a5107>社区风纪委员、Logo 贡献者</span></div></div><div class="user" data-v-6c6a5107><img class="avatar" src="https://q1.qlogo.cn/g?b=qq&amp;nk=457586001&amp;s=640" alt="" data-v-6c6a5107><div class="user-name" data-v-6c6a5107><span class="name" data-v-6c6a5107>hsyhhssyy</span><span class="desc" data-v-6c6a5107>插件作者、兔兔 AI 维护人</span></div></div><div class="user" data-v-6c6a5107><img class="avatar" src="https://q1.qlogo.cn/g?b=qq&amp;nk=2300652404&amp;s=640" alt="" data-v-6c6a5107><div class="user-name" data-v-6c6a5107><span class="name" data-v-6c6a5107>天基</span><span class="desc" data-v-6c6a5107>插件作者、插件服务器贡献者</span></div></div><div class="user" data-v-6c6a5107><img class="avatar" src="https://q1.qlogo.cn/g?b=qq&amp;nk=1961411984&amp;s=640" alt="" data-v-6c6a5107><div class="user-name" data-v-6c6a5107><span class="name" data-v-6c6a5107>.Tdp</span><span class="desc" data-v-6c6a5107>插件作者、百度图像识别接口贡献者</span></div></div>',5),A=[x];function B(c,o,s,v,d,h){return t(),e("div",k,A)}const N=p(b,[["render",B],["__scopeId","data-v-6c6a5107"]]);const T={name:"chargeThanks",props:{displayUserName:Boolean,min:{type:Number,default:0},max:{type:Number,default:1/0}},methods:{get_sponsors:function(){y.get("https://server.amiyabot.com:10001/get_sponsors").then(c=>{this.data=JSON.parse(c.data),this.data.sort((o,s)=>s.all_sum_amount-o.all_sum_amount)})}},data(){return{data:[]}},mounted(){this.get_sponsors()}},$={class:"user-list"},V=["src","alt"],I={key:0,class:"user-name"},P={class:"name"},S={class:"amount"};function C(c,o,s,v,d,h){return t(),e("div",$,[(t(!0),e(l,null,f(d.data,n=>(t(),e(l,null,[n.all_sum_amount>=s.min&&n.all_sum_amount<s.max?(t(),e("div",{key:0,class:g(["user",{small:!s.displayUserName}])},[a("img",{class:"avatar",src:n.user.avatar,alt:n.user.name},null,8,V),s.displayUserName?(t(),e("div",I,[a("span",P,i(n.user.name),1),a("span",S,"￥"+i(n.all_sum_amount),1)])):_("",!0)],2)):_("",!0)],64))),256))])}const U=p(T,[["render",C],["__scopeId","data-v-78401fcf"]]),D=u('<h1 id="赞助" tabindex="-1">赞助 <a class="header-anchor" href="#赞助" aria-label="Permalink to &quot;赞助&quot;">​</a></h1><p>AmiyaBot 一路走来离不开大家的默默支持，如果你喜欢并支持我们，可以为我们打赏一瓶快乐水。我相信快乐是可以互相传递的，你的快乐水带给我们快乐的同时，想必 AmiyaBot 也给你带去了快乐吧。</p><p>但同时我们希望你量力而为，你对 AmiyaBot 的认可就已经是最大的支持了。如果可以的话，恳请你在 <a href="https://github.com/AmiyaBot/Amiya-Bot" target="_blank" rel="noreferrer">Github</a> 为 AmiyaBot 点上一颗小小的️ ⭐ star。</p><h2 id="特别鸣谢" tabindex="-1">特别鸣谢 <a class="header-anchor" href="#特别鸣谢" aria-label="Permalink to &quot;特别鸣谢&quot;">​</a></h2><p>感谢各位对 AmiyaBot 社区做出的贡献，是大家共同塑造了 AmiyaBot 社区的繁荣。期待未来我们能携手创造更多可能！🌹</p>',5),J=a("h2",{id:"充电鸣谢",tabindex:"-1"},[r("充电鸣谢 "),a("a",{class:"header-anchor",href:"#充电鸣谢","aria-label":'Permalink to "充电鸣谢"'},"​")],-1),O=a("p",null,"你们的鼎力支持让我们感到创作 AmiyaBot 项目是值得的。感谢有你，让 AmiyaBot 秉承初衷。❤️",-1),j=a("p",null,[r("打赏请前往"),a("a",{href:"https://afdian.com/a/amiyabot",target:"_blank",rel:"noreferrer"},"爱发电主页"),r("。")],-1),z=a("img",{style:{width:"400px"},src:q,alt:"image"},null,-1),L=JSON.parse('{"title":"赞助","description":"","frontmatter":{"aside":false},"headers":[],"relativePath":"sponsor.md","filePath":"sponsor.md","lastUpdated":1723865901000}'),E={name:"sponsor.md"},R=Object.assign(E,{setup(c){return(o,s)=>(t(),e("div",null,[D,m(N),J,O,m(U,{min:0,displayUserName:!0}),j,z]))}});export{L as __pageData,R as default};