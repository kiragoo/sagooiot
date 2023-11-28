import"./echarts.1701184304695.js";import"./wordCloud.1701184304695.js";import{_ as I,g as b}from"./index.1701184304695.js";import{L as D,a2 as g,ab as k,a as f,b as s,_ as a,T as l,ai as p,o as r,Z as e,X as _,S as h,Y as d,F as A,a8 as w,aB as S,aC as R}from"./vue.1701184304695.js";const L=D({name:"monitor",components:{},setup(){const u=g({myCharts:[],sysInfo:{}});function i(){const t=new EventSource(b("/base-api/subscribe/redisinfo"));t.addEventListener("stats",F),t.addEventListener("clients",y),t.addEventListener("cpu",E),t.addEventListener("server",v),t.addEventListener("memory",B),t.addEventListener("keyspace",c)}i();function c(t){const n=JSON.parse(t.data);console.log(Object.keys(n)),u.sysInfo.keyspaceList=Object.keys(n),u.sysInfo.keyspace=n,console.log(n)}function B(t){const n=JSON.parse(t.data);u.sysInfo.memory=n}function v(t){const n=JSON.parse(t.data);u.sysInfo.server=n}function E(t){const n=JSON.parse(t.data);u.sysInfo.cpu=n}function F(t){const n=JSON.parse(t.data);u.sysInfo.stats=n}function y(t){const n=JSON.parse(t.data);u.sysInfo.clients=n}return{...k(u)}},unmounted(){},data(){return{}},methods:{memorySizeFormat(u){u=parseFloat(u);let i=0,c="Bytes";for(;u>1024&&c!="TB";)u=u/1024,i++,i==1?c="KB":i==2?c="MB":i==3?c="GB":i==4&&(c="TB");return u.toFixed(2)+" "+c},lengthToFixed2(u){return u=parseFloat(u),u.toFixed(2)},timeFormat(u){if(!u)return"-";u=parseFloat(u);let i=0,c="\u79D2";for(;u>60&&c!="\u5C0F\u65F6"&&c!="\u5929"||u>24&&c=="\u5C0F\u65F6";)c=="\u5C0F\u65F6"?u=u/24:u=u/60,i++,i==1?c="\u5206":i==2?c="\u5C0F\u65F6":i==3&&(c="\u5929");return u.toFixed(2)+" "+c}}}),o=u=>(S("data-v-431a1650"),u=u(),R(),u),N={class:"system-cache-container"},T={class:"flex-row gap-3"},O=o(()=>s("div",{class:"card-header"},[s("span",null,"\u5BA2\u6237\u7AEF\u4FE1\u606F")],-1)),P={cellspacing:"0",style:{height:"230px",width:"100%"}},U={key:0},M=o(()=>s("td",null,[s("div",{class:"cell-card"},"\u5F53\u524D\u5BA2\u6237\u7AEF\u8FDE\u63A5\u6570: ")],-1)),J={class:"cell-card"},z=o(()=>s("td",null,[s("div",{class:"cell-card"},"\u8F93\u51FA\u7F13\u51B2\u533A\u4E2D\u961F\u5217\u5BF9\u8C61\u4E2A\u6570\u7684\u6700\u5927\u503C: ")],-1)),V={class:"cell-card"},$=o(()=>s("td",null,[s("div",{class:"cell-card"},"\u8F93\u5165\u7F13\u51B2\u533A\u4E2D\u5360\u7528\u7684\u6700\u5927\u5BB9\u91CF:")],-1)),j={class:"cell-card"},K=o(()=>s("td",null,[s("div",{class:"cell-card"},"\u7B49\u5F85\u963B\u585E\u547D\u4EE4\u7684\u5BA2\u6237\u7AEF\u6570\u91CF:")],-1)),G={class:"cell-card"},W=o(()=>s("div",{class:"card-header"},[s("span",null,"CPU \u4FE1\u606F")],-1)),X={cellspacing:"0",style:{height:"230px",width:"100%"}},Y={key:0},Z=o(()=>s("td",null,[s("div",{class:"cell-card",title:"Redis\u4E3B\u8FDB\u7A0B\u5728\u5185\u6838\u6001\u6240\u5360\u7528\u7684CPU\u65F6\u949F\u603B\u548C"},"\u4E3B\u8FDB\u7A0B\u5185\u6838\u6001\u5360\u7528CPU\u65F6\u949F: ")],-1)),q={class:"cell-card"},H=o(()=>s("td",null,[s("div",{class:"cell-card",title:"Redis\u4E3B\u8FDB\u7A0B\u5728\u7528\u6237\u6001\u6240\u5360\u7528\u7684CPU\u65F6\u949F\u603B\u548C"},"\u4E3B\u8FDB\u7A0B\u7528\u6237\u6001\u5360\u7528CPU\u65F6\u949F: ")],-1)),Q={class:"cell-card"},x=o(()=>s("td",null,[s("div",{class:"cell-card",title:"Redis\u5B50\u8FDB\u7A0B\u5728\u5185\u6838\u6001\u6240\u5360\u7528\u7684CPU\u65F6\u949F\u603B\u548C"},"\u5B50\u8FDB\u7A0B\u5185\u6838\u6001\u5360\u7528CPU\u65F6\u949F:")],-1)),ss={class:"cell-card"},us=o(()=>s("td",null,[s("div",{class:"cell-card",title:"Redis\u5B50\u8FDB\u7A0B\u5728\u7528\u6237\u6001\u6240\u5360\u7528\u7684CPU\u65F6\u949F\u603B\u548C"},"\u5B50\u8FDB\u7A0B\u7528\u6237\u6001\u5360\u7528CPU\u65F6\u949F:")],-1)),es={class:"cell-card"},ls={class:"flex-row gap-3"},ts=o(()=>s("div",{class:"card-header"},[s("span",null,"\u670D\u52A1\u4FE1\u606F")],-1)),as={cellspacing:"0",style:{height:"300px",width:"100%"}},os={key:0},ds=o(()=>s("td",null,[s("div",{class:"cell-card"},"Redis\u670D\u52A1\u7248\u672C: ")],-1)),ns={class:"cell-card"},cs=o(()=>s("td",null,[s("div",{class:"cell-card"},"\u8FD0\u884C\u6A21\u5F0F: ")],-1)),is={class:"cell-card"},rs=o(()=>s("td",null,[s("div",{class:"cell-card"},"Redis\u6240\u5728\u673A\u5668\u7684\u64CD\u4F5C\u7CFB\u7EDF:")],-1)),_s={class:"cell-card"},Fs=o(()=>s("td",null,[s("div",{class:"cell-card"},"\u67B6\u6784:")],-1)),ys={class:"cell-card"},fs=o(()=>s("td",null,[s("div",{class:"cell-card"},"Redis\u6240\u4F7F\u7528\u7684\u4E8B\u4EF6\u5904\u7406\u673A\u5236:")],-1)),hs={class:"cell-card"},ms=o(()=>s("td",null,[s("div",{class:"cell-card"},"\u81EARedis\u670D\u52A1\u542F\u52A8\u4EE5\u6765\uFF0C\u8FD0\u884C\u7684\u79D2\u6570:")],-1)),ps={class:"cell-card"},Bs=o(()=>s("td",null,[s("div",{class:"cell-card"},"\u81EARedis\u670D\u52A1\u542F\u52A8\u4EE5\u6765\uFF0C\u8FD0\u884C\u7684\u5929\u6570:")],-1)),vs={class:"cell-card"},Es=o(()=>s("td",null,[s("div",{class:"cell-card"},"serverCron\u6BCF\u79D2\u8FD0\u884C\u6B21\u6570:")],-1)),Cs={class:"cell-card"},Is=o(()=>s("div",{class:"card-header"},[s("span",null,"\u5185\u5B58\u4FE1\u606F")],-1)),bs={key:0,cellspacing:"0",style:{height:"300px",width:"100%"}},Ds=o(()=>s("td",null,[s("div",{class:"cell-card"},"Redis\u5206\u914D\u5668\u5206\u914D\u7684\u5185\u5B58\u603B\u91CF: ")],-1)),gs={class:"cell-card"},ks=o(()=>s("td",null,[s("div",{class:"cell-card"},"\u4EE5\u53EF\u8BFB\u7684\u683C\u5F0F\u8FD4\u56DEused_memory: ")],-1)),As={class:"cell-card"},ws=o(()=>s("td",null,[s("div",{class:"cell-card"},"\u4ECE\u64CD\u4F5C\u7CFB\u7EDF\u7684\u89D2\u5EA6\uFF0CRedis\u8FDB\u7A0B\u5360\u7528\u7684\u7269\u7406\u5185\u5B58\u603B\u91CF:")],-1)),Ss={class:"cell-card"},Rs=o(()=>s("td",null,[s("div",{class:"cell-card"},"\u5185\u5B58\u4F7F\u7528\u7684\u6700\u5927\u503C:")],-1)),Ls={class:"cell-card"},Ns=o(()=>s("td",null,[s("div",{class:"cell-card"},"\u4EE5\u53EF\u8BFB\u7684\u683C\u5F0F\u8FD4\u56DEused_memory_peak:")],-1)),Ts={class:"cell-card"},Os=o(()=>s("td",null,[s("div",{class:"cell-card"},"Lua\u5F15\u64CE\u6240\u6D88\u8017\u7684\u5185\u5B58\u5927\u5C0F:")],-1)),Ps={class:"cell-card"},Us=o(()=>s("td",null,[s("div",{class:"cell-card"},"\u5185\u5B58\u788E\u7247\u7387:")],-1)),Ms={class:"cell-card"},Js=o(()=>s("td",null,[s("div",{class:"cell-card"},"Redis\u6240\u4F7F\u7528\u7684\u5185\u5B58\u5206\u914D\u5668:")],-1)),zs={class:"cell-card"},Vs={class:"flex-row gap-3"},$s=o(()=>s("div",{class:"card-header"},[s("span",null,"\u57FA\u7840\u7EDF\u8BA1\u4FE1\u606F")],-1)),js={class:"flex-row"},Ks={class:"flex-row gap-3"},Gs=o(()=>s("div",{class:"card-header"},[s("span",null,"info Keyspace\u7EDF\u8BA1\u4FE1\u606F")],-1)),Ws={key:0,style:{},class:"flex-column"};function Xs(u,i,c,B,v,E){const F=p("el-card"),y=p("el-col"),t=p("el-form-item"),n=p("el-form");return r(),f("div",N,[s("div",T,[a(y,{span:12,class:"marg-b-15"},{default:l(()=>[a(F,{class:"box-card-height",style:{height:"auto"}},{header:l(()=>[O]),default:l(()=>[s("table",P,[u.sysInfo.clients?(r(),f("tbody",U,[s("tr",null,[M,s("td",null,[s("div",J,e(u.sysInfo.clients.connected_clients),1)])]),s("tr",null,[z,s("td",null,[s("div",V,e(u.sysInfo.clients.client_recent_max_output_buffer),1)])]),s("tr",null,[$,s("td",null,[s("div",j,e(u.memorySizeFormat(u.sysInfo.clients.client_recent_max_input_buffer)),1)])]),s("tr",null,[K,s("td",null,[s("div",G,e(u.sysInfo.clients.blocked_clients),1)])])])):_("",!0)])]),_:1})]),_:1}),a(y,{span:12,class:"marg-b-15"},{default:l(()=>[a(F,{class:"box-card-height",style:{height:"auto"}},{header:l(()=>[W]),default:l(()=>[s("table",X,[u.sysInfo.cpu?(r(),f("tbody",Y,[s("tr",null,[Z,s("td",null,[s("div",q,e(u.lengthToFixed2(u.sysInfo.cpu.used_cpu_sys)),1)])]),s("tr",null,[H,s("td",null,[s("div",Q,e(u.lengthToFixed2(u.sysInfo.cpu.used_cpu_user)),1)])]),s("tr",null,[x,s("td",null,[s("div",ss,e(u.lengthToFixed2(u.sysInfo.cpu.used_cpu_sys_children)),1)])]),s("tr",null,[us,s("td",null,[s("div",es,e(u.lengthToFixed2(u.sysInfo.cpu.used_cpu_user_children)),1)])])])):_("",!0)])]),_:1})]),_:1})]),s("div",ls,[a(y,{span:12,class:"marg-b-15"},{default:l(()=>[a(F,{class:"box-card-height",style:{height:"auto"}},{header:l(()=>[ts]),default:l(()=>[s("table",as,[u.sysInfo.clients?(r(),f("tbody",os,[s("tr",null,[ds,s("td",null,[s("div",ns,e(u.sysInfo.server.redis_version),1)])]),s("tr",null,[cs,s("td",null,[s("div",is,e(u.sysInfo.server.redis_mode),1)])]),s("tr",null,[rs,s("td",null,[s("div",_s,e(u.sysInfo.server.os),1)])]),s("tr",null,[Fs,s("td",null,[s("div",ys,e(u.sysInfo.server.arch_bits),1)])]),s("tr",null,[fs,s("td",null,[s("div",hs,e(u.sysInfo.server.multiplexing_api),1)])]),s("tr",null,[ms,s("td",null,[s("div",ps,e(u.sysInfo.server.uptime_in_seconds),1)])]),s("tr",null,[Bs,s("td",null,[s("div",vs,e(u.sysInfo.server.uptime_in_days),1)])]),s("tr",null,[Es,s("td",null,[s("div",Cs,e(u.sysInfo.server.hz),1)])])])):_("",!0)])]),_:1})]),_:1}),a(y,{span:12,class:"marg-b-15"},{default:l(()=>[a(F,{class:"box-card-height",style:{height:"auto"}},{header:l(()=>[Is]),default:l(()=>[u.sysInfo.memory?(r(),f("table",bs,[s("tbody",null,[s("tr",null,[Ds,s("td",null,[s("div",gs,e(u.memorySizeFormat(u.sysInfo.memory.used_memory))+" - "+e(u.lengthToFixed2(u.sysInfo.memory.used_memory/u.sysInfo.memory.maxmemory))+"% ",1)])]),s("tr",null,[ks,s("td",null,[s("div",As,e(u.memorySizeFormat(u.sysInfo.memory.used_memory_human)),1)])]),s("tr",null,[ws,s("td",null,[s("div",Ss,e(u.memorySizeFormat(u.sysInfo.memory.used_memory_rss)),1)])]),s("tr",null,[Rs,s("td",null,[s("div",Ls,e(u.memorySizeFormat(u.sysInfo.memory.used_memory_peak)),1)])]),s("tr",null,[Ns,s("td",null,[s("div",Ts,e(u.memorySizeFormat(u.sysInfo.memory.used_memory_peak_human)),1)])]),s("tr",null,[Os,s("td",null,[s("div",Ps,e(u.memorySizeFormat(u.sysInfo.memory.used_memory_lua)),1)])]),s("tr",null,[Us,s("td",null,[s("div",Ms,e(u.sysInfo.memory.mem_fragmentation_ratio),1)])]),s("tr",null,[Js,s("td",null,[s("div",zs,e(u.sysInfo.memory.mem_allocator),1)])])])])):_("",!0)]),_:1})]),_:1})]),s("div",Vs,[a(y,{xs:24,sm:24,md:24,class:"marg-b-15"},{default:l(()=>[a(F,{class:"box-card-height",style:{height:"auto"}},{header:l(()=>[$s]),default:l(()=>[s("div",js,[u.sysInfo.stats?(r(),h(n,{key:0,"label-position":"right","label-width":"160px",class:"flex1",style:{"max-width":"460px"}},{default:l(()=>[a(t,{label:"\u8FDE\u63A5\u8FC7\u7684\u5BA2\u6237\u7AEF\u603B\u6570"},{default:l(()=>[d(e(u.sysInfo.stats.total_connections_received),1)]),_:1}),a(t,{label:"\u6267\u884C\u8FC7\u7684\u547D\u4EE4\u603B\u6570"},{default:l(()=>[d(e(u.sysInfo.stats.total_commands_processed),1)]),_:1}),a(t,{label:"\u6BCF\u79D2\u5904\u7406\u547D\u4EE4\u6761\u6570"},{default:l(()=>[d(e(u.sysInfo.stats.instantaneous_ops_per_sec),1)]),_:1}),a(t,{label:"\u62D2\u7EDD\u7684\u8FDE\u63A5\u4E2A\u6570"},{default:l(()=>[d(e(u.sysInfo.stats.rejected_connections),1)]),_:1}),a(t,{label:"key\u6570\u91CF"},{default:l(()=>[d(e(u.sysInfo.stats.evicted_keys),1)]),_:1})]),_:1})):_("",!0),u.sysInfo.stats?(r(),h(n,{key:1,"label-position":"right","label-width":"160px",class:"flex1",style:{"max-width":"460px"}},{default:l(()=>[a(t,{label:"\u7F51\u7EDC\u603B\u5165\u6D41\u91CF"},{default:l(()=>[d(e(u.memorySizeFormat(u.sysInfo.stats.total_net_input_bytes)),1)]),_:1}),a(t,{label:"\u7F51\u7EDC\u603B\u51FA\u6D41\u91CF"},{default:l(()=>[d(e(u.memorySizeFormat(u.sysInfo.stats.total_net_output_bytes)),1)]),_:1}),a(t,{label:"\u6BCF\u79D2\u8F93\u5165\u91CF"},{default:l(()=>[d(e(u.sysInfo.stats.instantaneous_input_kbps)+" kb/s",1)]),_:1}),a(t,{label:"\u6BCF\u79D2\u8F93\u51FA\u91CF"},{default:l(()=>[d(e(u.sysInfo.stats.instantaneous_output_kbps)+" kb/s",1)]),_:1}),a(t,{label:"\u6700\u8FD1fork\u6D88\u8017\u65F6\u95F4"},{default:l(()=>[d(e(u.sysInfo.stats.evicted_keys)+" \u03BCs",1)]),_:1})]),_:1})):_("",!0),u.sysInfo.stats?(r(),h(n,{key:2,"label-position":"right","label-width":"160px",class:"flex1",style:{"max-width":"460px"}},{default:l(()=>[a(t,{label:"\u4E3B\u4ECE\u5B8C\u5168\u540C\u6B65\u6210\u529F\u6B21\u6570"},{default:l(()=>[d(e(u.sysInfo.stats.sync_full),1)]),_:1}),a(t,{label:"\u4E3B\u4ECE\u90E8\u5206\u540C\u6B65\u6210\u529F\u6B21\u6570"},{default:l(()=>[d(e(u.sysInfo.stats.sync_partial_ok),1)]),_:1}),a(t,{label:"\u4E3B\u4ECE\u90E8\u5206\u540C\u6B65\u5931\u8D25\u6B21\u6570"},{default:l(()=>[d(e(u.sysInfo.stats.sync_partial_err),1)]),_:1}),a(t,{label:"\u6B63migrate\u7684Redis\u4E2A\u6570"},{default:l(()=>[d(e(u.sysInfo.stats.migrate_cached_sockets)+" \u03BCs",1)]),_:1}),a(t,{label:"\u8FC7\u671F\u7684key\u6570\u91CF"},{default:l(()=>[d(e(u.sysInfo.stats.expired_keys),1)]),_:1})]),_:1})):_("",!0),u.sysInfo.stats?(r(),h(n,{key:3,"label-position":"right","label-width":"160px",class:"flex1",style:{"max-width":"460px"}},{default:l(()=>[a(t,{label:"\u5F53\u524D\u4F7F\u7528\u4E2D\u7684\u9891\u9053\u6570\u91CF"},{default:l(()=>[d(e(u.sysInfo.stats.pubsub_channels),1)]),_:1}),a(t,{label:"\u5F53\u524D\u4F7F\u7528\u4E2D\u7684\u6A21\u5F0F\u6570\u91CF"},{default:l(()=>[d(e(u.sysInfo.stats.pubsub_patterns),1)]),_:1}),a(t,{label:"\u4E0D\u547D\u4E2D\u6B21\u6570"},{default:l(()=>[d(e(u.sysInfo.stats.keyspace_misses),1)]),_:1}),a(t,{label:"\u547D\u4E2D\u6B21\u6570"},{default:l(()=>[d(e(u.sysInfo.stats.keyspace_hits),1)]),_:1})]),_:1})):_("",!0)])]),_:1})]),_:1})]),s("div",Ks,[a(y,{xs:24,sm:24,md:24,class:"marg-b-15"},{default:l(()=>[a(F,{class:"box-card-height",style:{height:"auto"}},{header:l(()=>[Gs]),default:l(()=>[u.sysInfo.keyspaceList&&u.sysInfo.keyspace?(r(),f("div",Ws,[(r(!0),f(A,null,w(u.sysInfo.keyspaceList,(m,C)=>(r(),h(n,{style:{display:"flex",width:"100%"},key:C,"label-position":"right","label-width":"160px"},{default:l(()=>[a(t,{class:"flex1",label:"key\u540D\u79F0"},{default:l(()=>[d(e(m),1)]),_:2},1024),a(t,{class:"flex1",label:"\u5F53\u524D\u6570\u636E\u5E93key\u603B\u6570"},{default:l(()=>[d(e(u.sysInfo.keyspace[m].keys),1)]),_:2},1024),a(t,{class:"flex1",label:"\u5E26\u6709\u8FC7\u671F\u65F6\u95F4\u7684key\u603B\u6570"},{default:l(()=>[d(e(u.sysInfo.keyspace[m].expires),1)]),_:2},1024),a(t,{class:"flex1",label:"\u5E73\u5747\u5B58\u6D3B\u65F6\u95F4"},{default:l(()=>[d(e(u.timeFormat(u.sysInfo.keyspace[m].avg_ttl/1e3)),1)]),_:2},1024)]),_:2},1024))),128))])):_("",!0)]),_:1})]),_:1})])])}var Qs=I(L,[["render",Xs],["__scopeId","data-v-431a1650"]]);export{Qs as default};