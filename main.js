"use strict";var tt=Object.defineProperty;var vn=Object.getOwnPropertyDescriptor;var fn=Object.getOwnPropertyNames;var wn=Object.prototype.hasOwnProperty;var xn=(i,n)=>{for(var e in n)tt(i,e,{get:n[e],enumerable:!0})},yn=(i,n,e,t)=>{if(n&&typeof n=="object"||typeof n=="function")for(let o of fn(n))!wn.call(i,o)&&o!==e&&tt(i,o,{get:()=>n[o],enumerable:!(t=vn(n,o))||t.enumerable});return i};var bn=i=>yn(tt({},"__esModule",{value:!0}),i);var ro={};xn(ro,{default:()=>Qe});module.exports=bn(ro);var T=require("obsidian");var P=require("obsidian");var M=Object.freeze({momentsFolder:"Moment",attachmentsFolder:"Moment/\u9644\u4EF6",maxImagesPerMoment:9,pageSize:30}),vt={memoryDiscovery:{}};var ot=".moments-test-data.json",yt=new Map([["\u8BB0\u5F55.md","<!-- moments-navigation:timeline -->"],["\u65E5\u5386.md","<!-- moments-navigation:calendar -->"],["\u56DE\u5FC6.md","<!-- moments-navigation:memories -->"]]);async function bt(i){let n=(0,P.normalizePath)(M.momentsFolder);await Le(i,n);let e=i.vault.getAbstractFileByPath(n);if(!(e instanceof P.TFolder))throw new Error(`${n} \u4E0D\u662F\u6587\u4EF6\u5939\u3002`);if(!await Mn(i,n)){let h=await Dn(i,e);if(h.length>0){let y=h.slice(0,5).join("\u3001");throw new Error(`\u68C0\u6D4B\u5230\u975E\u6D4B\u8BD5 Moment \u6570\u636E\uFF08${y}${h.length>5?"\u2026":""}\uFF09\uFF0C\u4E3A\u907F\u514D\u8986\u76D6\u5DF2\u53D6\u6D88\u3002\u8BF7\u5728\u7A7A\u6D4B\u8BD5 Vault \u4E2D\u8FD0\u884C\u3002`)}}await Mt(i,e);let o=(0,P.normalizePath)(`${n}/${ot}`);await i.vault.adapter.exists(o)&&await i.vault.adapter.remove(o),await kn(i,n);let a=new Date,r=k(a,{hour:20,minute:40}),s=await xe(i,r,"flow-11-edit-a",1600,900,"\u5168\u6D41\u7A0B A"),m=await xe(i,r,"flow-11-edit-b",900,1400,"\u5168\u6D41\u7A0B B"),l=await xe(i,r,"flow-11-edit-c",1200,1200,"\u5168\u6D41\u7A0B C"),d=await xe(i,r,"flow-11-cover",1400,1e3,"\u5168\u6D41\u7A0B\u5C01\u9762"),c=[];for(let h=0;h<9;h+=1)c.push(await xe(i,r,`flow-11-gallery-${h+1}`,h%3===0?1600:h%3===1?900:1200,h%3===0?900:h%3===1?1400:1200,`\u4E5D\u56FE ${h+1}`));let p=await ft(i,r,"flow-11-audio",2.2,440),u=await ft(i,k(a,{days:-5}),"flow-11-audio-only",1.4,550),f=[{id:"flow-11-edit-target",created:r,content:"\u3010\u5168\u6D41\u7A0B\xB7\u7F16\u8F91\u76EE\u6807\u3011\u8BF7\u5728\u672C\u8F6E\u6D4B\u8BD5\u4E2D\u7F16\u8F91\u8FD9\u6761\uFF1A\u6539\u6B63\u6587\u3001\u5730\u70B9\u3001\u6807\u7B7E\uFF0C\u5220\u9664\u4E00\u5F20\u65E7\u56FE\u5E76\u65B0\u589E\u4E00\u5F20\u56FE\u7247\uFF0C\u7136\u540E\u4FDD\u5B58\u5E76\u91CD\u542F\u786E\u8BA4\u6301\u4E45\u5316\u3002",location:"\u7F16\u8F91\u524D\u5730\u70B9",tags:["\u5168\u6D41\u7A0B","\u7F16\u8F91\u76EE\u6807"],images:[s,m,l],extraFrontmatter:{weather:"sunny",mood:"baseline",rating:5}},{id:"flow-11-audio-image",created:k(a,{hour:18,minute:20}),content:"\u3010\u5168\u6D41\u7A0B\xB7\u97F3\u9891\u3011\u9759\u6001\u97F3\u9891 + \u56FE\u7247 + \u5730\u70B9\uFF0C\u7528\u6765\u5148\u786E\u8BA4\u73B0\u6709\u97F3\u9891\u64AD\u653E\uFF0C\u518D\u4E0E\u624B\u52A8\u5F55\u97F3\u53D1\u5E03\u505A\u5BF9\u7167\u3002",location:"\u5F55\u97F3\u6D4B\u8BD5\u5730",tags:["\u5168\u6D41\u7A0B","\u97F3\u9891"],images:[d],audio:{path:p,mimeType:"audio/wav",durationMs:2200}},{id:"flow-11-today-text",created:k(a,{hour:12,minute:5}),content:"\u3010\u5168\u6D41\u7A0B\xB7\u4ECA\u65E5\u6587\u5B57\u3011\u4ECA\u5929\u7684\u4E00\u6761\u7EAF\u6587\u5B57\u8BB0\u5F55\uFF0C\u7528\u6765\u68C0\u67E5\u540C\u65E5\u5012\u5E8F\u3001\u8BE6\u60C5\u8FD4\u56DE\u548C\u91CD\u542F\u6062\u590D\u3002",tags:["\u5168\u6D41\u7A0B","\u4ECA\u65E5"]},{id:"flow-11-image-only",created:k(a,{days:-1,hour:17,minute:30}),content:"",images:[d],tags:["\u5168\u6D41\u7A0B","\u4EC5\u56FE\u7247"]},{id:"flow-11-delete-target",created:k(a,{days:-2,hour:21,minute:10}),content:"\u3010\u5168\u6D41\u7A0B\xB7\u5220\u9664\u76EE\u6807\u3011\u5B8C\u6210\u5176\u5B83\u6B65\u9AA4\u540E\u5220\u9664\u8FD9\u6761\uFF0C\u786E\u8BA4\u8FD4\u56DE\u9996\u9875\u3001\u7D22\u5F15\u5373\u65F6\u51CF\u5C11\uFF0C\u91CD\u542F\u540E\u4E0D\u4F1A\u590D\u6D3B\u3002",tags:["\u5168\u6D41\u7A0B","\u5220\u9664\u76EE\u6807"]},{id:"flow-11-carousel-two",created:k(a,{days:-3,hour:16,minute:15}),content:"\u3010\u5168\u6D41\u7A0B\xB7\u4E24\u56FE\u8F6E\u64AD\u3011\u8BE6\u60C5\u4E2D\u9A8C\u8BC1 A \u2192 B \u2192 A \u4E0E\u53CD\u5411\u9996\u5C3E\u5FAA\u73AF\u3002",location:"\u8F6E\u64AD\u6D4B\u8BD5\u5730",tags:["\u5168\u6D41\u7A0B","\u4E24\u56FE"],images:[s,m]},{id:"flow-11-gallery-nine",created:k(a,{days:-4,hour:14,minute:30}),content:"\u3010\u5168\u6D41\u7A0B\xB7\u4E5D\u56FE\u4E0A\u9650\u3011\u9A8C\u8BC1 9 \u5F20\u56FE\u7247\u6570\u91CF\u89D2\u6807\u3001\u8BE6\u60C5\u8F6E\u64AD\u3001\u7F16\u8F91\u8BA1\u6570\u4E0E\u9996\u5C3E\u5FAA\u73AF\u3002",tags:["\u5168\u6D41\u7A0B","\u4E5D\u56FE"],images:c},{id:"flow-11-audio-only",created:k(a,{days:-5,hour:19,minute:0}),content:"",tags:["\u5168\u6D41\u7A0B","\u4EC5\u97F3\u9891"],audio:{path:u,mimeType:"audio/wav",durationMs:1400}},{id:"flow-11-edited-state",created:k(a,{days:-6,hour:9,minute:10}),updated:k(a,{days:-4,hour:17,minute:20}),content:"\u3010\u5168\u6D41\u7A0B\xB7\u5DF2\u7F16\u8F91\u3011\u8BE6\u60C5\u9875\u5E94\u540C\u65F6\u663E\u793A\u521B\u5EFA\u65F6\u95F4\u548C\u7F16\u8F91\u65F6\u95F4\u3002",tags:["\u5168\u6D41\u7A0B","\u5DF2\u7F16\u8F91"]},{id:"flow-11-echo-location-new",created:k(a,{days:-7,hour:18,minute:20}),content:"\u6700\u8FD1\u4E00\u6B21\u201C\u5168\u6D41\u7A0B\u6D4B\u8BD5\u5730\u201D\u7684\u5386\u53F2\u8BB0\u5F55\u3002\u624B\u52A8\u53D1\u5E03\u540C\u5730\u70B9\u65F6\uFF0C\u53D1\u5E03\u56DE\u58F0\u5E94\u4F18\u5148\u547D\u4E2D\u8FD9\u4E00\u6761\u3002",location:"\u5168\u6D41\u7A0B\u6D4B\u8BD5\u5730",tags:["\u56DE\u58F0\u51C6\u5907"]},{id:"flow-11-special-text",created:k(a,{days:-8,hour:13,minute:35}),content:`\u7279\u6B8A\u5B57\u7B26\uFF1A#\u4E95\u53F7 : \u5192\u53F7 "\u53CC\u5F15\u53F7" '\u5355\u5F15\u53F7' [[wiki-like]] / slash / emoji \u2615\uFE0F\u{1F33F}\u3002\u8FD9\u4E9B\u90FD\u5E94\u6309\u666E\u901A\u5185\u5BB9\u663E\u793A\u3002`,location:"\u5730\u70B9: A/B #1",tags:["\u7279\u6B8A\u5B57\u7B26","emoji\u{1F33F}","A/B"]},{id:"flow-11-missing-image",created:k(a,{days:-9,hour:11,minute:25}),content:"\u3010\u5168\u6D41\u7A0B\xB7\u7F3A\u56FE\u3011\u5F15\u7528\u7684\u56FE\u7247\u6587\u4EF6\u6545\u610F\u4E0D\u5B58\u5728\uFF0CTimeline / Detail / Calendar \u4E0D\u80FD\u5D29\u6E83\u3002",tags:["\u5168\u6D41\u7A0B","\u7F3A\u56FE"],images:["Moment/\u9644\u4EF6/2099/01/flow-11-intentionally-missing.svg"]},{id:"flow-11-echo-tag-new",created:k(a,{days:-10,hour:10,minute:10}),content:"\u6700\u8FD1\u4E00\u6B21 #\u5168\u6D41\u7A0B\u56DE\u58F0 \u7684\u5386\u53F2\u8BB0\u5F55\u3002\u624B\u52A8\u53D1\u5E03\u76F8\u540C\u6807\u7B7E\u65F6\uFF0C\u5E94\u4F18\u5148\u547D\u4E2D\u8FD9\u4E00\u6761\u3002",tags:["\u5168\u6D41\u7A0B\u56DE\u58F0"]},{id:"flow-11-missing-audio",created:k(a,{days:-12,hour:20,minute:10}),content:"\u3010\u5168\u6D41\u7A0B\xB7\u7F3A\u97F3\u9891\u3011\u97F3\u9891\u6587\u4EF6\u6545\u610F\u4E0D\u5B58\u5728\uFF0C\u6B63\u6587\u3001\u5730\u70B9\u3001\u6807\u7B7E\u4ECD\u5E94\u6B63\u5E38\u663E\u793A\u3002",location:"\u7F3A\u5931\u9644\u4EF6\u6D4B\u8BD5\u5730",tags:["\u5168\u6D41\u7A0B","\u7F3A\u97F3\u9891"],audio:{path:"Moment/\u9644\u4EF6/2099/01/flow-11-intentionally-missing.wav",mimeType:"audio/wav",durationMs:900}},{id:"flow-11-shared-image-a",created:k(a,{days:-14,hour:15,minute:20}),content:"\u3010\u5168\u6D41\u7A0B\xB7\u5171\u4EAB\u9644\u4EF6 A\u3011\u4E0E\u53E6\u4E00\u6761\u8BB0\u5F55\u5171\u7528\u540C\u4E00\u5F20\u6D4B\u8BD5\u56FE\u7247\u3002",tags:["\u5168\u6D41\u7A0B","\u5171\u4EAB\u9644\u4EF6"],images:[d]},{id:"flow-11-shared-image-b",created:k(a,{days:-15,hour:10,minute:30}),content:"\u3010\u5168\u6D41\u7A0B\xB7\u5171\u4EAB\u9644\u4EF6 B\u3011\u5220\u9664 A \u540E\uFF0C\u8FD9\u6761\u8BB0\u5F55\u91CC\u7684\u5171\u4EAB\u56FE\u7247\u4ECD\u5FC5\u987B\u5B58\u5728\u3002",tags:["\u5168\u6D41\u7A0B","\u5171\u4EAB\u9644\u4EF6"],images:[d]},{id:"flow-11-long-content",created:k(a,{days:-20,hour:16,minute:0}),content:"\u3010\u5168\u6D41\u7A0B\xB7\u957F\u6B63\u6587\u3011"+"\u666E\u901A\u751F\u6D3B\u8BB0\u5F55\u4E5F\u53EF\u80FD\u5199\u5F97\u6BD4\u8F83\u957F\uFF1B\u8FD9\u4E00\u6BB5\u7528\u6765\u786E\u8BA4 Timeline\u3001Detail\u3001\u7F16\u8F91\u9875\u548C\u7A84\u7A97\u53E3\u90FD\u4E0D\u4F1A\u6A2A\u5411\u6EA2\u51FA\u3002".repeat(10),location:"\u8FD9\u662F\u4E00\u4E2A\u7A0D\u957F\u7684\u5730\u70B9\u540D\u79F0 \xB7 \u7528\u6765\u786E\u8BA4\u5E03\u5C40\u81EA\u7136\u6362\u884C",tags:["\u5168\u6D41\u7A0B","\u957F\u6587\u672C","\u4E2D\u6587"]},{id:"flow-11-multilingual",created:k(a,{days:-30,hour:9,minute:40}),content:"\u4E2D\u82F1\u65E5\u6DF7\u6392\uFF1AMorning walk / \u671D\u306E\u6563\u6B69 / \u4ECA\u5929\u98CE\u5F88\u597D \u2615\uFE0F\u{1F33F}\u3002\u666E\u901A [[wiki-like]] \u6587\u672C\u4E0D\u5E94\u88AB\u5F53\u4F5C\u56FE\u7247\u3002",location:"Tokyo \u6771\u4EAC",tags:["\u591A\u8BED\u8A00","emoji\u{1F33F}"]},{id:"flow-11-last-month-same-day",created:xt(a,-1,11,20),content:"\u3010\u5168\u6D41\u7A0B\xB7\u7A00\u758F\u6708\u4EFD\u3011\u4E0A\u4E2A\u6708\u7684\u4E00\u6761\u8BB0\u5F55\u3002\u8BE5\u6708\u603B\u91CF\u4FDD\u6301\u4E0D\u8D85\u8FC7 6\uFF0C\u7528\u6765\u9A8C\u8BC1\u6708\u56DE\u987E\u5E94\u5168\u91CF\u5C55\u793A\u800C\u4E0D\u662F\u62BD\u6837\u3002",location:"\u4E0A\u6708\u5730\u70B9",tags:["\u5386\u53F2","\u6708\u56DE\u987E"]},{id:"flow-11-echo-location-old",created:k(a,{days:-120,hour:18,minute:0}),content:"\u66F4\u65E9\u7684\u540C\u5730\u70B9\u56DE\u58F0\u5019\u9009\uFF0C\u4E0D\u5E94\u8986\u76D6\u6700\u8FD1\u4E00\u6B21\u5730\u70B9\u5386\u53F2\u3002",location:"\u5168\u6D41\u7A0B\u6D4B\u8BD5\u5730",tags:["\u56DE\u58F0\u51C6\u5907"]},{id:"flow-11-echo-tag-old",created:k(a,{days:-180,hour:8,minute:0}),content:"\u66F4\u65E9\u7684\u540C\u6807\u7B7E\u56DE\u58F0\u5019\u9009\uFF0C\u4E0D\u5E94\u8986\u76D6\u6700\u8FD1\u4E00\u6B21\u6807\u7B7E\u5386\u53F2\u3002",tags:["\u5168\u6D41\u7A0B\u56DE\u58F0"]},{id:"flow-11-last-year-today",created:wt(a,1,10,15),content:"\u53BB\u5E74\u4ECA\u5929\u7684\u8BB0\u5F55\u3002\u8FDB\u5165\u56DE\u5FC6\u9875\u9009\u62E9\u4ECA\u5929\uFF0C\u5E94\u4F18\u5148\u51FA\u73B0\u5F80\u5E74\u540C\u65E5\u3002",location:"\u53BB\u5E74\u5730\u70B9",tags:["\u53BB\u5E74\u4ECA\u5929","\u56DE\u5FC6"],images:[d]},{id:"flow-11-two-years-today",created:wt(a,2,15,30),content:"\u4E24\u5E74\u524D\u4ECA\u5929\u7684\u8BB0\u5F55\uFF0C\u7528\u6765\u786E\u8BA4 Memories \u591A\u4E2A\u5E74\u4EFD\u5206\u7EC4\u3002",tags:["\u4E24\u5E74\u524D","\u56DE\u5FC6"]}];for(let h=0;h<8;h+=1)f.push({id:`flow-11-current-month-${String(h+1).padStart(2,"0")}`,created:k(a,{hour:7+h,minute:h*7%60}),content:`\u3010\u5168\u6D41\u7A0B\xB7\u5F53\u524D\u6708\u6837\u672C ${h+1}\u3011\u7528\u4E8E\u9A8C\u8BC1\u6708\u89C6\u56FE\u8D85\u8FC7 6 \u6761\u65F6\u968F\u673A\u5C55\u793A 6 \u6761\uFF0C\u5E76\u53EF\u70B9\u51FB\u53F3\u4E0A\u89D2\u201C\u6362\u4E00\u6362\u201D\u3002`,location:h%3===0?"\u5F53\u524D\u6708\u5730\u70B9":void 0,tags:h%2===0?["\u5F53\u524D\u6708","\u6362\u4E00\u6362"]:["\u5F53\u524D\u6708"],images:h===2?[l]:[]});for(let h=2;h<=13;h+=1){let y=xt(a,-h,12+h%5,h*7%60);f.push({id:`flow-11-month-${String(h).padStart(2,"0")}`,created:y,content:`\u3010\u5168\u6D41\u7A0B\xB7\u8DE8\u6708\u6837\u672C\u3011${h} \u4E2A\u6708\u524D\u7684\u4E00\u6761\u666E\u901A\u8BB0\u5F55\u3002\u7528\u4E8E Timeline\u3001Memories\u3001Calendar \u6708/\u5E74\u89C6\u56FE\u5386\u53F2\u5206\u5E03\u3002`,location:h%4===0?"\u5386\u53F2\u5730\u70B9":void 0,tags:h%3===0?["\u5386\u53F2\u586B\u5145","\u5168\u6D41\u7A0B"]:["\u5168\u6D41\u7A0B"],images:h%5===0?[d]:[]})}for(let h=0;h<36;h+=1){let y=75+h*5;f.push({id:`flow-11-pagination-${String(h+1).padStart(2,"0")}`,created:k(a,{days:-y,hour:7+h%12,minute:h*11%60}),content:`\u3010\u5168\u6D41\u7A0B\xB7\u5206\u9875\u6837\u672C ${h+1}\u3011\u7EFC\u5408\u6570\u636E\u96C6\u4E2D\u7684\u5386\u53F2\u8BB0\u5F55\uFF0C\u7528\u6765\u540C\u65F6\u8986\u76D6\u5206\u9875\u3001\u65E5\u671F\u5206\u7EC4\u3001\u6708\u4EFD\u7EDF\u8BA1\u548C\u5E74\u5EA6\u5206\u5E03\u3002`,location:h%8===0?"\u5206\u9875\u5386\u53F2\u5730\u70B9":void 0,tags:h%5===0?["\u5206\u9875","\u5386\u53F2","\u5168\u6D41\u7A0B"]:["\u5206\u9875","\u5168\u6D41\u7A0B"],images:h%12===0?[s]:[]})}for(let h=0;h<f.length;h+=1)await Tn(i,n,f[h]),(h+1)%15===0&&await Sn();let v=`${a.getFullYear()}-${I(a.getMonth()+1)}-${I(a.getDate())}`;return await i.vault.adapter.write(o,JSON.stringify({managedBy:"moments-test-data",number:"11",slug:"11-comprehensive-regression",title:"\u7EFC\u5408\u5168\u89C6\u56FE\u4E0E\u7528\u6237\u64CD\u4F5C\u56DE\u5F52",generatedAt:nt(a),generatedForLocalDate:v,moments:f.length},null,2)+`
`),{moments:f.length,generatedForLocalDate:v}}async function Mn(i,n){let e=(0,P.normalizePath)(`${n}/${ot}`);if(!await i.vault.adapter.exists(e))return!1;try{return JSON.parse(await i.vault.adapter.read(e)).managedBy==="moments-test-data"}catch{return!1}}async function Dn(i,n){let e=[],t=async o=>{for(let a of o.children){if(a instanceof P.TFolder){await t(a);continue}if(!(a instanceof P.TFile)||a.name===".DS_Store"||a.name===ot)continue;let r=a.path.slice(n.path.length+1),s=yt.get(r);s&&(await i.vault.cachedRead(a)).trim()===s||e.push(r)}};return await t(n),e}async function Mt(i,n){for(let e of[...n.children])e instanceof P.TFolder?(await Mt(i,e),await i.vault.delete(e,!0)):await i.vault.delete(e,!0)}async function kn(i,n){for(let[e,t]of yt)await it(i,(0,P.normalizePath)(`${n}/${e}`),`${t}
`)}async function xe(i,n,e,t,o,a){let r=(0,P.normalizePath)(`Moment/\u9644\u4EF6/${n.getFullYear()}/${I(n.getMonth()+1)}/${e}.svg`),s=a.replace(/[<>&]/g,""),m=`<svg xmlns="http://www.w3.org/2000/svg" width="${t}" height="${o}" viewBox="0 0 ${t} ${o}">
  <rect width="100%" height="100%" fill="#f6eee5"/>
  <rect x="6%" y="8%" width="88%" height="84%" rx="28" fill="none" stroke="#c69b76" stroke-width="8"/>
  <line x1="50%" y1="0" x2="50%" y2="100%" stroke="#c69b76" stroke-width="3" stroke-dasharray="14 10"/>
  <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#c69b76" stroke-width="3" stroke-dasharray="14 10"/>
  <circle cx="50%" cy="50%" r="62" fill="#ead7c5"/>
  <text x="50%" y="49%" text-anchor="middle" dominant-baseline="middle" font-size="42" font-family="sans-serif" fill="#8e6548">${s}</text>
  <text x="50%" y="58%" text-anchor="middle" font-size="22" font-family="sans-serif" fill="#8e6548">${t} \xD7 ${o}</text>
</svg>
`;return await it(i,r,m),r}async function ft(i,n,e,t,o){let a=(0,P.normalizePath)(`Moment/\u9644\u4EF6/${n.getFullYear()}/${I(n.getMonth()+1)}/${e}.wav`);return await Le(i,Dt(a)),await i.vault.createBinary(a,En(t,o)),a}function En(i,n){let t=Math.max(1,Math.round(8e3*i)),o=t*2,a=new ArrayBuffer(44+o),r=new DataView(a);Ie(r,0,"RIFF"),r.setUint32(4,36+o,!0),Ie(r,8,"WAVE"),Ie(r,12,"fmt "),r.setUint32(16,16,!0),r.setUint16(20,1,!0),r.setUint16(22,1,!0),r.setUint32(24,8e3,!0),r.setUint32(28,8e3*2,!0),r.setUint16(32,2,!0),r.setUint16(34,16,!0),Ie(r,36,"data"),r.setUint32(40,o,!0);for(let s=0;s<t;s+=1){let m=Math.min(1,s/300,(t-s)/300),l=Math.round(Math.sin(2*Math.PI*n*s/8e3)*.18*32767*Math.max(0,m));r.setInt16(44+s*2,l,!0)}return a}function Ie(i,n,e){for(let t=0;t<e.length;t+=1)i.setUint8(n+t,e.charCodeAt(t))}async function Tn(i,n,e){let t=e.created,o=e.updated??t,a=(0,P.normalizePath)(`${n}/${t.getFullYear()}/${I(t.getMonth()+1)}`);await Le(i,a);let r=`${t.getFullYear()}-${I(t.getMonth()+1)}-${I(t.getDate())}-${I(t.getHours())}${I(t.getMinutes())}${I(t.getSeconds())}-${e.id}.md`,s=["---","type: moment",`id: ${e.id}`,`created: ${nt(t)}`,`updated: ${nt(o)}`];if(e.location&&s.push(`location: ${ye(e.location)}`),e.tags?.length){s.push("tags:");for(let l of e.tags)s.push(`  - ${ye(l)}`)}else s.push("tags: []");e.audio&&(s.push("audio:"),s.push(`  path: ${ye(e.audio.path)}`),s.push(`  mimeType: ${ye(e.audio.mimeType??"audio/wav")}`),e.audio.durationMs&&s.push(`  durationMs: ${Math.round(e.audio.durationMs)}`));for(let[l,d]of Object.entries(e.extraFrontmatter??{}))s.push(`${l}: ${typeof d=="string"?ye(d):JSON.stringify(d)}`);s.push("---","");let m=[];e.content&&m.push(e.content.trim()),e.images?.length&&m.push(e.images.map(l=>`![[${l}]]`).join(`

`)),await it(i,(0,P.normalizePath)(`${a}/${r}`),`${s.join(`
`)}
${m.join(`

`)}
`)}async function it(i,n,e){await Le(i,Dt(n));let t=i.vault.getAbstractFileByPath(n);if(t instanceof P.TFile){await i.vault.modify(t,e);return}if(t)throw new Error(`${n} \u5DF2\u5B58\u5728\u4E14\u4E0D\u662F\u6587\u4EF6\u3002`);await i.vault.create(n,e)}async function Le(i,n){let e=(0,P.normalizePath)(n);if(!e)return;let t="";for(let o of e.split("/")){t=t?`${t}/${o}`:o;let a=i.vault.getAbstractFileByPath(t);if(!(a instanceof P.TFolder)){if(a)throw new Error(`${t} \u5DF2\u5B58\u5728\u4E14\u4E0D\u662F\u6587\u4EF6\u5939\u3002`);await i.vault.createFolder(t)}}}function Dt(i){let n=i.lastIndexOf("/");return n>=0?i.slice(0,n):""}function k(i,{days:n=0,months:e=0,years:t=0,hour:o=12,minute:a=0,second:r=0}={}){let s=new Date(i);return s.setHours(o,a,r,0),t&&s.setFullYear(s.getFullYear()+t),e&&s.setMonth(s.getMonth()+e),n&&s.setDate(s.getDate()+n),s}function wt(i,n,e=12,t=0){return new Date(i.getFullYear()-n,i.getMonth(),i.getDate(),e,t,0,0)}function xt(i,n,e=12,t=0){let o=new Date(i.getFullYear(),i.getMonth()+n,1,e,t,0,0),a=new Date(o.getFullYear(),o.getMonth()+1,0,e,t,0,0).getDate();return new Date(o.getFullYear(),o.getMonth(),Math.min(i.getDate(),a),e,t,0,0)}function nt(i){let n=-i.getTimezoneOffset(),e=n>=0?"+":"-",t=Math.abs(n);return`${i.getFullYear()}-${I(i.getMonth()+1)}-${I(i.getDate())}T${I(i.getHours())}:${I(i.getMinutes())}:${I(i.getSeconds())}${e}${I(Math.floor(t/60))}:${I(t%60)}`}function ye(i){return JSON.stringify(i)}function I(i){return String(i).padStart(2,"0")}function Sn(){return new Promise(i=>window.setTimeout(i,0))}var kt=["\u661F\u671F\u65E5","\u661F\u671F\u4E00","\u661F\u671F\u4E8C","\u661F\u671F\u4E09","\u661F\u671F\u56DB","\u661F\u671F\u4E94","\u661F\u671F\u516D"],Et=["\u5468\u65E5","\u5468\u4E00","\u5468\u4E8C","\u5468\u4E09","\u5468\u56DB","\u5468\u4E94","\u5468\u516D"];function E(i){return i.toString().padStart(2,"0")}function An(i){let n=i.match(/^(\d{4})-(\d{2})-(\d{2})(?:T(\d{2}):(\d{2})(?::(\d{2})(?:\.(\d+))?)?)?/);if(!n)return null;let e=Number(n[1]),t=Number(n[2]),o=Number(n[3]),a=Number(n[4]??0),r=Number(n[5]??0),s=Number(n[6]??0),m=Number((n[7]??"0").slice(0,3).padEnd(3,"0"));if(t<1||t>12||a<0||a>23||r<0||r>59||s<0||s>59)return null;let l=new Date(Date.UTC(e,t-1,o,12,0,0,0));return l.getUTCFullYear()!==e||l.getUTCMonth()!==t-1||l.getUTCDate()!==o?null:{year:e,month:t,day:o,hour:a,minute:r,second:s,millisecond:m}}function Pn(i){return{year:i.getFullYear(),month:i.getMonth()+1,day:i.getDate(),hour:i.getHours(),minute:i.getMinutes(),second:i.getSeconds(),millisecond:i.getMilliseconds()}}function S(i){return An(i)??Pn(new Date(i))}function q(i,n){let e=Date.parse(i),t=Date.parse(n);return Number.isFinite(e)&&Number.isFinite(t)&&e!==t?e-t:i.localeCompare(n)}function B(i){let n=S(i);return`${n.year}-${E(n.month)}-${E(n.day)}`}function L(i){return`${i.getFullYear()}-${E(i.getMonth()+1)}-${E(i.getDate())}`}function at(i){let n=S(i);return`${E(n.month)}-${E(n.day)}`}function ce(i){return`${E(i.getMonth()+1)}-${E(i.getDate())}`}function rt(i){return`${i.getFullYear()}/${E(i.getMonth()+1)}`}function Tt(i){let n=S(i);return`${n.year}/${E(n.month)}`}function St(i){return`${i.getFullYear()}-${E(i.getMonth()+1)}-${E(i.getDate())}-${E(i.getHours())}${E(i.getMinutes())}${E(i.getSeconds())}`}function Fe(i){let n=-i.getTimezoneOffset(),e=n>=0?"+":"-",t=Math.abs(n),o=E(Math.floor(t/60)),a=E(t%60),r=i.getMilliseconds().toString().padStart(3,"0");return`${i.getFullYear()}-${E(i.getMonth()+1)}-${E(i.getDate())}T${E(i.getHours())}:${E(i.getMinutes())}:${E(i.getSeconds())}.${r}${e}${o}:${a}`}function At(i,n=new Date){let e=S(i),t=new Date(n);t.setDate(n.getDate()-1);let o=`${e.month}\u6708${e.day}\u65E5`;return B(i)===L(n)?`\u4ECA\u5929 \xB7 ${o}`:B(i)===L(t)?`\u6628\u5929 \xB7 ${o}`:e.year===n.getFullYear()?o:`${e.year}\u5E74${o}`}function te(i){let n=S(i);return`${n.year}\u5E74${n.month}\u6708${n.day}\u65E5`}function be(i){return`${i.getMonth()+1}\u6708${i.getDate()}\u65E5`}function de(i){let n=S(i);return`${E(n.hour)}:${E(n.minute)}`}function st(i){return kt[i.getDay()]??""}function Pt(i){return Et[i.getDay()]??""}function It(i){let n=S(i);return new Date(Date.UTC(n.year,n.month-1,n.day,12,0,0,0)).getUTCDay()}function Lt(i){return Et[It(i)]??""}function Ce(i){return`${kt[It(i)]??""} ${de(i)}`}function Ft(i){return`${te(i)} ${de(i)}`}function Me(i,n){let e=new Date(i);return e.setDate(e.getDate()+n),e}var $e=class{constructor(n,e,t){this.index=n;this.state=e;this.persistState=t}getPublishEcho(n,e=new Date){let t=L(e);if(this.state.lastPublishEchoDateKey===t)return null;let o=this.index.all().filter(m=>m.id!==n.id&&q(m.createdAt,n.createdAt)<0&&B(m.createdAt)<t),a=n.location?.trim();if(a){let m=o.find(l=>l.location?.trim()===a);if(m)return this.consumeDailyEchoOpportunity(t),{type:"location",momentId:m.id,relationValue:a,text:`\u4E0A\u4E00\u6B21\u5728${a}\u7559\u4E0B Moment\uFF0C\u662F ${Ct(m.createdAt,n.createdAt)} \u5929\u524D`}}let r=In(n.tags,o);if(!r)return null;let s=o.find(m=>m.tags.includes(r));return s?(this.consumeDailyEchoOpportunity(t),{type:"tag",momentId:s.id,relationValue:r,text:`\u8DDD\u79BB\u4E0A\u4E00\u6B21\u63D0\u5230 #${r}\uFF0C\u5DF2\u7ECF\u8FC7\u53BB ${Ct(s.createdAt,n.createdAt)} \u5929`}):null}consumeDailyEchoOpportunity(n){this.state.lastPublishEchoDateKey=n,Promise.resolve(this.persistState()).catch(e=>{console.error("[Moments] Failed to persist publish-echo state",e)})}};function In(i,n){let e;return i.forEach((t,o)=>{let a=n.reduce((r,s)=>r+(s.tags.includes(t)?1:0),0);a&&(!e||a<e.count||a===e.count&&o<e.order)&&(e={tag:t,count:a,order:o})}),e?.tag}function Ct(i,n){let e=S(i),t=S(n),o=Date.UTC(e.year,e.month-1,e.day),a=Date.UTC(t.year,t.month-1,t.day);return Math.max(1,Math.round((a-o)/864e5))}var x=require("obsidian");function De(i){return i.toString().padStart(2,"0")}function $t(i=new Date){let n=[i.getFullYear(),De(i.getMonth()+1),De(i.getDate()),"-",De(i.getHours()),De(i.getMinutes()),De(i.getSeconds())].join(""),e=Math.random().toString(36).slice(2,6);return`${n}-${e}`}function Rt(i){if(!i.startsWith(`---
`))return i;let n=i.indexOf(`
---
`,4);return n===-1?i:i.slice(n+5)}function Bt(i){let n=[],e=/!\[\[([^\]|]+)(?:\|[^\]]+)?\]\]/g,t;for(;(t=e.exec(i))!==null;){let o=t[1]?.trim();o&&n.push({path:o})}return n}function zt(i){return i.replace(/!\[\[[^\]]+\]\]/g,"").replace(/\n{3,}/g,`

`).trim()}function mt(i,n){let e=[],t=i.trim();return t&&e.push(t),n.length&&e.push(n.map(o=>`![[${o.path}]]`).join(`

`)),`${e.join(`

`)}
`}function ne(i){return[...new Set(i.map(n=>n.trim().replace(/^#+/,"")).filter(Boolean))]}var Be=class{constructor(n){this.app=n}async ensureBaseFolders(){await this.ensureFolder(M.momentsFolder),await this.ensureFolder(M.attachmentsFolder)}async listMomentFiles(){let n=(0,x.normalizePath)(M.momentsFolder),e=this.app.vault.getAbstractFileByPath(n);if(e instanceof x.TFolder){let t=[],o=a=>{for(let r of a.children)r instanceof x.TFolder?o(r):r instanceof x.TFile&&r.extension==="md"&&t.push(r)};return o(e),t}return this.app.vault.getMarkdownFiles().filter(t=>this.isInMomentsFolder(t.path))}async read(n){if(!this.isInMomentsFolder(n.path))return null;let e=await this.app.vault.cachedRead(n),t=Ln(this.app,n,e);if(!t)return null;let o=Rt(e),a=typeof t.created=="string"?t.created:Fe(new Date(n.stat.ctime)),r=typeof t.updated=="string"?t.updated:a,s=typeof t.location=="string"&&t.location.trim()?t.location.trim():void 0,m=Array.isArray(t.tags)?t.tags.filter(l=>typeof l=="string"):[];return{id:t.id,createdAt:a,updatedAt:r,content:zt(o),images:Bt(o),audio:Cn(t.audio),location:s,tags:m,filePath:n.path}}async create(n){let e=n.createdAt?new Date(n.createdAt):new Date,t=$t(e),o=(0,x.normalizePath)(`${M.momentsFolder}/${rt(e)}`);await this.ensureFolder(o);let a=this.uniqueMarkdownPath(o,St(e),t),r=Fe(e),s=ne(n.tags??[]),m=n.location?.trim()||void 0,l=[],d;try{let c=rt(e);l=await this.persistImages(n.images??[],c,t),d=n.audio?await this.persistAudio(n.audio,c,t,n.audioDurationMs):void 0;let p=Fn({id:t,createdAt:r,updatedAt:r,location:m,tags:s,audio:d}),u=mt(n.content,l);return await this.app.vault.create(a,`${p}${u}`),{id:t,createdAt:r,updatedAt:r,content:n.content.trim(),images:l,audio:d,location:m,tags:s,filePath:a}}catch(c){throw await this.cleanupCreatedMomentFile(a),await this.cleanupAttachmentPaths([...l.map(p=>p.path),...d?.path?[d.path]:[]]),c}}async update(n,e,t=new Set){let o=this.app.vault.getAbstractFileByPath(n.filePath);if(!(o instanceof x.TFile))throw new Error("Moment file not found.");let a=e.keptImagePaths?new Set(e.keptImagePaths):null,r=a?n.images.filter(p=>a.has(p.path)):[...n.images],s=await this.app.vault.read(o),m=M.maxImagesPerMoment,l=Math.max(0,m-r.length),d=e.images?.length?await this.persistImages(e.images.slice(0,l),Tt(n.createdAt),n.id,r.length):[],c={...n,content:e.content!==void 0?e.content.trim():n.content,location:e.location!==void 0?e.location.trim()||void 0:n.location,tags:e.tags!==void 0?ne(e.tags):n.tags,images:[...r,...d],audio:e.removeAudio?void 0:n.audio,updatedAt:Fe(new Date)};try{await this.app.fileManager.processFrontMatter(o,v=>{v.type="moment",v.id=c.id,v.created=c.createdAt,v.updated=c.updatedAt,c.location?v.location=c.location:delete v.location,v.tags=c.tags,c.audio?v.audio=$n(c.audio):delete v.audio});let p=await this.app.vault.read(o),u=p.startsWith(`---
`)?p.indexOf(`
---
`,4):-1,f=u>=0?p.slice(0,u+5):"";await this.app.vault.modify(o,`${f}${mt(c.content,c.images)}`)}catch(p){throw await this.restoreMomentFile(o,s),await this.cleanupAttachmentPaths(d.map(u=>u.path)),p}if(a){let p=n.images.filter(u=>!a.has(u.path));for(let u of p)await this.trashOwnedAttachment(n,u.path,t)}return e.removeAudio&&n.audio?.path&&await this.trashOwnedAttachment(n,n.audio.path,t),c}async delete(n,e=new Set){let t=this.app.vault.getAbstractFileByPath(n.filePath);t instanceof x.TFile&&await this.app.fileManager.trashFile(t);let o=new Set(n.images.map(a=>a.path));n.audio?.path&&o.add(n.audio.path);for(let a of o)await this.trashOwnedAttachment(n,a,e)}isInMomentsFolder(n){let e=(0,x.normalizePath)(M.momentsFolder);return e?(0,x.normalizePath)(n).startsWith(`${e}/`):!1}isOwnedAttachment(n,e){let t=(0,x.normalizePath)(M.attachmentsFolder),o=(0,x.normalizePath)(e);if(!t||!o.startsWith(`${t}/`))return!1;let a=o.split("/").pop()??"";return a.startsWith(`img-${n.id}-`)||a.startsWith(`audio-${n.id}.`)||a.startsWith(`audio-${n.id}-`)}async trashOwnedAttachment(n,e,t){if(t.has(e)||!this.isOwnedAttachment(n,e))return;let o=this.app.vault.getAbstractFileByPath(e);if(o instanceof x.TFile)try{await this.app.fileManager.trashFile(o)}catch(a){console.warn("[Moments] Failed to trash Moment attachment",e,a)}}async persistImages(n,e,t,o=0){let a=n.slice(0,M.maxImagesPerMoment);if(!a.length)return[];let r=(0,x.normalizePath)(`${M.attachmentsFolder}/${e}`);await this.ensureFolder(r);let s=[],m=null;try{for(let l=0;l<a.length;l+=1){let d=a[l];if(!d)continue;let c=Ot(d),p=o+l+1,u=`img-${t}-${String(p).padStart(2,"0")}`,f=this.uniqueAttachmentPath(r,u,c);m=f;let v=await d.arrayBuffer();await this.app.vault.createBinary(f,v),s.push({path:f}),m=null}return s}catch(l){throw await this.cleanupAttachmentPaths([...s.map(d=>d.path),...m?[m]:[]]),l}}async persistAudio(n,e,t,o){let a=(0,x.normalizePath)(`${M.attachmentsFolder}/${e}`);await this.ensureFolder(a);let r=Ot(n),s=this.uniqueAttachmentPath(a,`audio-${t}`,r);try{return await this.app.vault.createBinary(s,await n.arrayBuffer()),{path:s,mimeType:n.type||void 0,durationMs:o&&o>0?Math.round(o):void 0}}catch(m){throw await this.cleanupAttachmentPaths([s]),m}}async cleanupCreatedMomentFile(n){let e=this.app.vault.getAbstractFileByPath(n);if(e instanceof x.TFile)try{await this.app.fileManager.trashFile(e)}catch(t){console.error("[Moments] Failed to clean up uncommitted Moment Markdown",n,t)}}async restoreMomentFile(n,e){try{await this.app.vault.modify(n,e)}catch(t){console.error("[Moments] Failed to roll back Moment Markdown after update failure",t)}}async cleanupAttachmentPaths(n){for(let e of n){let t=this.app.vault.getAbstractFileByPath(e);if(t instanceof x.TFile)try{await this.app.fileManager.trashFile(t)}catch(o){console.warn("[Moments] Failed to clean up uncommitted attachment",e,o)}}}uniqueAttachmentPath(n,e,t){let o=(0,x.normalizePath)(`${n}/${e}.${t}`);if(!this.app.vault.getAbstractFileByPath(o))return o;let a=2;for(;;){let r=(0,x.normalizePath)(`${n}/${e}-${a}.${t}`);if(!this.app.vault.getAbstractFileByPath(r))return r;a+=1}}uniqueMarkdownPath(n,e,t){let o=(0,x.normalizePath)(`${n}/${e}.md`);return this.app.vault.getAbstractFileByPath(o)?(0,x.normalizePath)(`${n}/${e}-${t.slice(-4)}.md`):o}async ensureFolder(n){let e=(0,x.normalizePath)(n);if(!e)return;let t=e.split("/"),o="";for(let a of t){o=o?`${o}/${a}`:a;let r=this.app.vault.getAbstractFileByPath(o);if(r instanceof x.TFolder)continue;if(r)throw new Error(`${o} exists and is not a folder.`);let s=await this.app.vault.adapter.stat(o);if(s?.type!=="folder"){if(s)throw new Error(`${o} exists and is not a folder.`);try{await this.app.vault.createFolder(o)}catch(m){if(this.app.vault.getAbstractFileByPath(o)instanceof x.TFolder||(await this.app.vault.adapter.stat(o))?.type==="folder")continue;throw m}}}}};function Ln(i,n,e){let t=i.metadataCache.getFileCache(n)?.frontmatter;if(Ht(t))return t;let o=(0,x.getFrontMatterInfo)(e);if(!o.exists||!o.frontmatter.trim())return null;try{let a=(0,x.parseYaml)(o.frontmatter);if(!a||typeof a!="object")return null;let r={...a},s=Nt(o.frontmatter,"created"),m=Nt(o.frontmatter,"updated");return s!==void 0&&(r.created=s),m!==void 0&&(r.updated=m),Ht(r)?r:null}catch(a){return console.warn("[Moments] Failed to parse Moment frontmatter before metadata cache was ready",n.path,a),null}}function Ht(i){if(!i||typeof i!="object")return!1;let n=i;return n.type==="moment"&&typeof n.id=="string"&&n.id.trim().length>0}function Nt(i,n){let e=`${n}:`,t=i.split(/\r?\n/).find(a=>a.trimStart().startsWith(e));if(!t)return;let o=t.trimStart().slice(e.length).trim();if(o){if(o.startsWith('"')&&o.endsWith('"'))try{let a=JSON.parse(o);return typeof a=="string"?a:o}catch{return o}return o.startsWith("'")&&o.endsWith("'")?o.slice(1,-1).replace(/''/g,"'"):o}}function Fn(i){let n=["---","type: moment",`id: ${i.id}`,`created: ${i.createdAt}`,`updated: ${i.updatedAt}`];if(i.location&&n.push(`location: ${Re(i.location)}`),i.tags.length){n.push("tags:");for(let e of i.tags)n.push(`  - ${Re(e)}`)}else n.push("tags: []");return i.audio&&(n.push("audio:"),n.push(`  path: ${Re(i.audio.path)}`),i.audio.mimeType&&n.push(`  mimeType: ${Re(i.audio.mimeType)}`),i.audio.durationMs!==void 0&&n.push(`  durationMs: ${Math.round(i.audio.durationMs)}`)),n.push("---",""),`${n.join(`
`)}
`}function Cn(i){if(typeof i=="string"&&i.trim())return{path:i.trim()};if(!i||typeof i!="object")return;let n=i;if(typeof n.path!="string"||!n.path.trim())return;let e=typeof n.mimeType=="string"&&n.mimeType.trim()?n.mimeType.trim():void 0,t=typeof n.durationMs=="number"&&Number.isFinite(n.durationMs)?Math.max(0,Math.round(n.durationMs)):void 0;return{path:n.path.trim(),mimeType:e,durationMs:t}}function $n(i){let n={path:i.path};return i.mimeType&&(n.mimeType=i.mimeType),i.durationMs!==void 0&&(n.durationMs=Math.round(i.durationMs)),n}function Re(i){return JSON.stringify(i)}function Ot(i){let n=i.name.split(".").pop()?.toLowerCase();if(n&&/^[a-z0-9]+$/.test(n))return n;let e=i.type.split("/").pop()?.split(";")[0]?.toLowerCase();return e&&/^[a-z0-9]+$/.test(e)?e:"bin"}var Ut=require("obsidian");var ze=class{constructor(){this.byId=new Map;this.byPath=new Map;this.byDate=new Map;this.byMonthDay=new Map}replaceAll(n){this.byId.clear(),this.byPath.clear(),this.byDate.clear(),this.byMonthDay.clear();for(let e of n)this.upsert(e)}upsert(n){let e=this.getByPath(n.filePath);e&&e.id!==n.id&&this.remove(e.id);let t=this.byId.get(n.id);t&&this.remove(t.id),this.byId.set(n.id,n),this.byPath.set(n.filePath,n.id),_t(this.byDate,B(n.createdAt),n),_t(this.byMonthDay,at(n.createdAt),n)}remove(n){let e=this.byId.get(n);e&&(this.byId.delete(n),this.byPath.get(e.filePath)===n&&this.byPath.delete(e.filePath),Yt(this.byDate,B(e.createdAt),n),Yt(this.byMonthDay,at(e.createdAt),n))}get(n){return this.byId.get(n)}getByPath(n){let e=this.byPath.get(n);return e?this.byId.get(e):void 0}all(){return[...this.byId.values()].sort(lt)}forDate(n){return[...this.byDate.get(n)??[]].sort(lt)}forMonthDay(n){return[...this.byMonthDay.get(n)??[]].sort(lt)}};function lt(i,n){return q(n.createdAt,i.createdAt)}function _t(i,n,e){let t=i.get(n)??[];t.push(e),i.set(n,t)}function Yt(i,n,e){let t=(i.get(n)??[]).filter(o=>o.id!==e);t.length?i.set(n,t):i.delete(n)}var jt="moments-changed",Rn=20,Wt=8e3,He=class{constructor(n){this.repository=n;this.index=new ze;this.events=new Ut.Events;this.initialized=!1;this.indexing=!1}get isInitialized(){return this.initialized}get isIndexing(){return this.indexing}async initialize(){if(this.initialized)return;await this.repository.ensureBaseFolders();let n=await this.repository.listMomentFiles();n.sort((e,t)=>t.stat.ctime-e.stat.ctime),this.index.replaceAll([]),this.initialized=!0,this.indexing=n.length>0,this.emitChanged(),n.length&&this.rebuild(n).catch(e=>{console.error("[Moments] Background index rebuild failed",e)}).finally(()=>{this.indexing=!1,this.emitChanged()})}async rebuild(n){let e=!1,t=!1;for(let o=0;o<n.length;o+=1){let a=n[o];if(a){try{let r=await this.readMomentWithTimeout(a);r&&!this.index.getByPath(a.path)&&(this.index.upsert(r),e=!0,t||(this.emitChanged(),e=!1,t=!0))}catch(r){console.warn("[Moments] Skipping unreadable Moment during index rebuild",a.path,r)}(o+1)%Rn===0&&(e&&(this.emitChanged(),e=!1),await Bn())}}e&&this.emitChanged()}async create(n){let e=await this.repository.create(n);return this.index.upsert(e),this.emitChanged(),e}async update(n,e){let t=this.collectMediaPathsUsedByOtherMoments(n.id),o=await this.repository.update(n,e,t);return this.index.upsert(o),this.emitChanged(),o}async delete(n){let e=this.collectMediaPathsUsedByOtherMoments(n.id);await this.repository.delete(n,e),this.index.remove(n.id),this.emitChanged()}async refreshFile(n){let e=this.index.getByPath(n.path),t;try{t=await this.readMomentWithTimeout(n)}catch(o){console.warn("[Moments] Failed to refresh Moment file",n.path,o);return}if(t){this.index.upsert(t),this.emitChanged();return}e&&(this.index.remove(e.id),this.emitChanged())}removeByPath(n){let e=this.index.getByPath(n);e&&(this.index.remove(e.id),this.emitChanged())}onChanged(n){return this.events.on(jt,n)}off(n){this.events.offref(n)}async readMomentWithTimeout(n){let e;try{return await Promise.race([this.repository.read(n),new Promise((t,o)=>{e=setTimeout(()=>{o(new Error(`Timed out after ${Wt}ms while reading ${n.path}`))},Wt)})])}finally{e!==void 0&&clearTimeout(e)}}collectMediaPathsUsedByOtherMoments(n){let e=new Set;for(let t of this.index.all())if(t.id!==n){for(let o of t.images)e.add(o.path);t.audio?.path&&e.add(t.audio.path)}return e}emitChanged(){this.events.trigger(jt)}};function Bn(){return new Promise(i=>setTimeout(i,0))}var Vt=`
/* Calendar / month browsing. Page shell and H1 typography live in styles.css. */
.moments-calendar-view .moments-calendar-layout {
  --moments-calendar-panel-height: 670px;
  display: grid;
  grid-template-columns: minmax(0, 1.38fr) minmax(360px, 1fr);
  gap: 16px;
  align-items: stretch;
}

.moments-calendar-view .moments-calendar-month-panel,
.moments-calendar-view .moments-calendar-day-panel {
  min-width: 0;
  height: var(--moments-calendar-panel-height);
  box-sizing: border-box;
  border: 1px solid var(--moments-line);
  border-radius: 14px;
  background: var(--moments-surface-card);
}

.moments-calendar-view .moments-calendar-month-panel {
  padding: 14px 14px 12px;
}

.moments-calendar-view .moments-calendar-toolbar {
  display: grid;
  grid-template-columns: 34px auto 34px minmax(0, 1fr);
  align-items: center;
  gap: 8px;
  min-height: var(--moments-control-lg);
  padding: 0 4px 10px;
}

.moments-calendar-view .moments-calendar-month-control {
  position: relative;
  justify-self: start;
}

.moments-calendar-view .moments-calendar-month-title {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  min-height: var(--moments-control-sm);
  margin: 0;
  padding: 3px 7px;
  border: 0;
  border-radius: 7px;
  background: transparent;
  color: var(--text-normal);
  box-shadow: none;
  font-family: var(--moments-ui-font);
  font-size: 1.28rem;
  font-weight: 600;
  text-align: center;
}

.moments-calendar-view .moments-calendar-month-title:hover,
.moments-calendar-view .moments-calendar-month-title:focus-visible,
.moments-calendar-view .moments-calendar-month-title.is-open {
  background: var(--moments-control-surface-hover);
  outline: none;
}

.moments-calendar-view .moments-calendar-month-title-icon {
  display: inline-flex;
  color: var(--text-muted);
  transition: transform 120ms ease;
}

.moments-calendar-view .moments-calendar-month-title.is-open .moments-calendar-month-title-icon {
  transform: rotate(180deg);
}

.moments-calendar-view .moments-calendar-month-title-icon svg {
  width: 14px;
  height: 14px;
}

.moments-calendar-view .moments-calendar-icon-button,
.moments-calendar-view .moments-calendar-today {
  min-height: var(--moments-control-sm);
  padding: 5px 10px;
  border: 1px solid var(--moments-border-soft);
  border-radius: 8px;
  background: transparent;
  color: var(--text-muted);
  box-shadow: none;
}

.moments-calendar-view .moments-calendar-icon-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--moments-control-sm);
  padding: 0;
}

.moments-calendar-view .moments-calendar-icon-button:hover,
.moments-calendar-view .moments-calendar-icon-button:focus-visible,
.moments-calendar-view .moments-calendar-today:hover,
.moments-calendar-view .moments-calendar-today:focus-visible {
  border-color: var(--moments-line);
  background: var(--moments-control-surface-hover);
  color: var(--text-normal);
  outline: none;
}

.moments-calendar-view .moments-calendar-icon-button svg {
  width: 15px;
  height: 15px;
}

.moments-calendar-view .moments-calendar-next-month {
  justify-self: start;
}

.moments-calendar-view .moments-calendar-today {
  justify-self: end;
}

.moments-calendar-view .moments-calendar-month-picker {
  position: absolute;
  z-index: 30;
  top: calc(100% + 7px);
  left: 50%;
  width: 248px;
  padding: 12px;
  transform: translateX(-50%);
  border: 1px solid var(--moments-line);
  border-radius: 11px;
  background: var(--moments-surface-card);
  box-shadow: var(--moments-shadow-popover);
}

.moments-calendar-view .moments-calendar-month-picker-year {
  display: grid;
  grid-template-columns: 32px minmax(0, 1fr) 32px;
  align-items: center;
  gap: 8px;
  margin-bottom: 10px;
}

.moments-calendar-view .moments-calendar-year-step {
  width: var(--moments-control-xs);
  min-height: var(--moments-control-xs);
}

.moments-calendar-view .moments-calendar-year-input {
  width: 100%;
  min-width: 0;
  height: 32px;
  padding: 4px 8px;
  border: 1px solid var(--moments-border-soft);
  border-radius: 7px;
  background: var(--moments-surface-input);
  color: var(--text-normal);
  box-shadow: none;
  font-size: var(--font-ui-small);
  font-variant-numeric: tabular-nums;
  text-align: center;
}

.moments-calendar-view .moments-calendar-year-input:focus {
  border-color: color-mix(in srgb, var(--moments-accent) 48%, var(--background-modifier-border));
  box-shadow: none;
  outline: none;
}

.moments-calendar-view .moments-calendar-month-picker-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 6px;
}

.moments-calendar-view .moments-calendar-month-option {
  min-height: var(--moments-control-xs);
  padding: 4px 5px;
  border: 1px solid transparent;
  border-radius: 7px;
  background: transparent;
  color: var(--text-normal);
  box-shadow: none;
  font-size: var(--font-ui-smaller);
}

.moments-calendar-view .moments-calendar-month-option:hover,
.moments-calendar-view .moments-calendar-month-option:focus-visible {
  background: var(--moments-control-surface-hover);
  outline: none;
}

.moments-calendar-view .moments-calendar-month-option.is-current {
  border-color: color-mix(in srgb, var(--moments-accent) 42%, var(--moments-line));
  color: var(--moments-accent);
  font-weight: 600;
}

.moments-calendar-view .moments-calendar-weekdays {
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  padding: 0 0 7px;
  color: var(--text-muted);
  font-size: var(--font-ui-smaller);
  text-align: center;
}

.moments-calendar-view .moments-calendar-grid {
  position: relative;
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  overflow: hidden;
  border: 0;
  border-radius: 10px;
}

.moments-calendar-view .moments-calendar-grid::after {
  content: '';
  position: absolute;
  z-index: 5;
  inset: 0;
  border: 1px solid var(--moments-line);
  border-radius: 10px;
  pointer-events: none;
}

.moments-calendar-view .moments-calendar-day {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 4px;
  min-width: 0;
  min-height: 82px;
  padding: 7px 7px 5px;
  overflow: hidden;
  border: 0;
  border-right: 1px solid var(--moments-grid-line);
  border-bottom: 1px solid var(--moments-grid-line);
  border-radius: 0;
  background: var(--moments-surface-card);
  color: var(--text-normal);
  box-shadow: none;
}

.moments-calendar-view .moments-calendar-day:nth-child(7n) {
  border-right: 0;
}

.moments-calendar-view .moments-calendar-day:nth-last-child(-n + 7) {
  border-bottom: 0;
}

.moments-calendar-view .moments-calendar-day:hover,
.moments-calendar-view .moments-calendar-day:focus-visible {
  background: var(--moments-control-surface-hover);
  outline: none;
}

.moments-calendar-view .moments-calendar-day.is-outside-month {
  color: var(--text-faint);
  background: var(--moments-surface-card);
}

.moments-calendar-view .moments-calendar-day.is-outside-month .moments-calendar-day-indicator {
  opacity: 0.42;
}

.moments-calendar-view .moments-calendar-day.is-selected {
  z-index: 1;
  background: color-mix(in srgb, var(--moments-accent-soft) 42%, var(--background-primary));
}

.moments-calendar-view .moments-calendar-day-number {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  font-size: var(--font-ui-small);
  font-variant-numeric: tabular-nums;
  line-height: 1;
}

.moments-calendar-view .moments-calendar-day.is-today .moments-calendar-day-number {
  color: var(--moments-accent);
  font-weight: 600;
}

.moments-calendar-view .moments-calendar-day.is-today:not(.is-selected) .moments-calendar-day-number {
  background: var(--moments-accent-soft);
}

.moments-calendar-view .moments-calendar-day.is-selected .moments-calendar-day-number {
  background: var(--moments-accent-fill);
  color: #fff;
  font-weight: 600;
}

.moments-calendar-view .moments-calendar-day-indicator {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  gap: 3px;
  min-height: 35px;
  margin-top: auto;
}

.moments-calendar-view .moments-calendar-day-image {
  display: block;
  width: 36px;
  height: 27px;
  border-radius: 5px;
  background: var(--moments-media-surface);
  object-fit: cover;
}

.moments-calendar-view .moments-calendar-day-dots,
.moments-calendar-view .moments-calendar-legend-dots {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
}

.moments-calendar-view .moments-calendar-day-dots {
  min-height: 5px;
}

.moments-calendar-view .moments-calendar-dot {
  display: inline-block;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--moments-accent);
}

.moments-calendar-view .moments-calendar-legend {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 18px;
  margin-top: 12px;
  padding: 10px 12px 2px;
  color: var(--text-muted);
  font-size: var(--font-ui-smaller);
}

.moments-calendar-view .moments-calendar-legend-item {
  display: inline-flex;
  align-items: center;
  gap: 7px;
}

.moments-calendar-view .moments-calendar-day-panel {
  display: flex;
  flex-direction: column;
  min-height: 0;
  padding: 20px 14px 16px;
  overflow: hidden;
}

.moments-calendar-view .moments-calendar-day-panel-header {
  flex: 0 0 auto;
  padding: 0 2px 16px;
}

.moments-calendar-view .moments-calendar-day-panel-header h2 {
  margin: 0;
  color: var(--text-normal);
  font-family: var(--moments-ui-font);
  font-size: 1.36rem;
  font-weight: 600;
}

.moments-calendar-view .moments-calendar-day-panel-summary {
  margin-top: 5px;
  color: var(--text-muted);
  font-size: var(--font-ui-small);
}

.moments-calendar-view .moments-calendar-day-list {
  display: grid;
  flex: 1 1 auto;
  min-height: 0;
  align-content: start;
  gap: 10px;
  overflow-y: auto;
  overscroll-behavior: contain;
  padding-right: 4px;
  scrollbar-gutter: stable;
  scrollbar-width: thin;
}

.moments-calendar-view .moments-calendar-day-empty {
  display: flex;
  flex: 1 1 auto;
  min-height: 0;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  padding: 24px;
  color: var(--text-muted);
  font-size: 0.92rem;
  text-align: center;
}

.moments-calendar-view .moments-calendar-moment {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  grid-template-rows: auto auto;
  row-gap: 9px;
  min-width: 0;
  padding: 12px;
  border: 1px solid var(--moments-card-line);
  border-radius: 11px;
  background: var(--moments-surface-card);
  color: var(--text-normal);
  box-shadow: none;
  cursor: pointer;
}

.moments-calendar-view .moments-calendar-moment.has-images {
  grid-template-columns: 92px minmax(0, 1fr);
  column-gap: 12px;
}

.moments-calendar-view .moments-calendar-moment:hover,
.moments-calendar-view .moments-calendar-moment:focus-visible {
  border-color: color-mix(in srgb, var(--moments-accent) 24%, var(--moments-card-line));
  background: var(--moments-control-surface-hover);
  outline: none;
}

.moments-calendar-view .moments-calendar-moment-topline {
  grid-column: 1 / -1;
  grid-row: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  min-width: 0;
}

.moments-calendar-view .moments-calendar-moment.has-images .moments-calendar-moment-topline {
  display: grid;
  grid-template-columns: 92px minmax(0, 1fr);
  column-gap: 12px;
}

.moments-calendar-view .moments-calendar-moment-time {
  min-width: 0;
  color: var(--text-muted);
  font-size: var(--font-ui-smaller);
  font-variant-numeric: tabular-nums;
}

.moments-calendar-view .moments-calendar-moment-location {
  display: inline-flex;
  align-items: center;
  justify-content: flex-end;
  gap: 4px;
  min-width: 0;
  max-width: 70%;
  margin-left: auto;
  overflow: hidden;
  color: var(--text-muted);
  font-size: var(--font-ui-smaller);
  line-height: 1.35;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.moments-calendar-view .moments-calendar-moment.has-images .moments-calendar-moment-location {
  justify-self: end;
  justify-content: flex-end;
  margin-left: 0;
}

.moments-calendar-view .moments-calendar-moment-location .moment-meta-icon {
  flex: 0 0 auto;
}

.moments-calendar-view .moments-calendar-moment-location .moment-meta-icon svg {
  width: 13px;
  height: 13px;
  color: var(--moments-accent);
  stroke-width: 1.8;
}

.moments-calendar-view .moments-calendar-moment-thumb {
  position: relative;
  grid-column: 1;
  grid-row: 2;
  align-self: start;
  width: 92px;
  height: 69px;
  margin-top: 4px;
  overflow: hidden;
  border-radius: 8px;
  background: var(--moments-media-surface);
  box-shadow: inset 0 0 0 1px var(--moments-media-border);
}

.moments-calendar-view .moments-calendar-moment-thumb img {
  display: block;
  width: 100%;
  height: 100%;
  border-radius: inherit;
  object-fit: cover;
}

.moments-calendar-view .moments-calendar-moment-body {
  grid-column: 1;
  grid-row: 2;
  align-self: start;
  min-width: 0;
  text-align: left;
}

.moments-calendar-view .moments-calendar-moment.has-images .moments-calendar-moment-body {
  grid-column: 2;
}

.moments-calendar-view .moments-calendar-moment-content {
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  color: var(--text-normal);
  font-size: 0.9rem;
  line-height: 1.55;
  white-space: pre-wrap;
}

.moments-calendar-view .moments-calendar-moment .moment-meta {
  gap: 5px;
  margin-top: 8px;
}

.moments-calendar-view .moments-calendar-moment .moment-meta-pill {
  min-height: 22px;
  padding: 2px 7px;
  font-size: var(--font-ui-smaller);
}

@media (max-width: 900px) {
.moments-calendar-view .moments-calendar-layout {
    grid-template-columns: 1fr;
  }

  .moments-calendar-view .moments-calendar-month-panel,
  .moments-calendar-view .moments-calendar-day-panel {
    height: auto;
  }

  .moments-calendar-view .moments-calendar-day-list {
    overflow-y: visible;
    padding-right: 0;
    scrollbar-gutter: auto;
  }

.moments-calendar-view .moments-calendar-year-panel,
  .moments-calendar-view .moments-calendar-review-panel {
    height: auto;
  }

  .moments-calendar-view .moments-calendar-review-panel {
    grid-template-rows: auto auto auto;
    overflow: visible;
  }

  .moments-calendar-view .moments-calendar-month-fragment-grid,
  .moments-calendar-view .moments-calendar-year-grid {
    height: auto;
    grid-template-rows: none;
  }

  .moments-calendar-view .moments-calendar-month-fragment-grid {
    grid-template-rows: none;
    grid-auto-rows: minmax(112px, auto);
  }

  .moments-calendar-view .moments-calendar-year-grid {
    grid-auto-rows: minmax(92px, auto);
  }
}

@media (max-width: 620px) {
.moments-calendar-view .moments-calendar-toolbar {
    grid-template-columns: auto 1fr auto;
    gap: 7px;
  }

  .moments-calendar-view .moments-calendar-today {
    display: none;
  }

  .moments-calendar-view .moments-calendar-month-picker {
    width: min(224px, calc(100vw - 44px));
    max-width: calc(100vw - 44px);
  }

  .moments-calendar-view .moments-calendar-day {
    min-height: 70px;
    padding: 6px 3px 4px;
  }

  .moments-calendar-view .moments-calendar-day-indicator {
    min-height: 30px;
  }

  .moments-calendar-view .moments-calendar-day-image {
    width: 32px;
    height: 24px;
  }

  .moments-calendar-view .moments-calendar-legend {
    gap: 12px;
    padding-left: 4px;
    padding-right: 4px;
  }

.moments-calendar-view .moments-calendar-page-header {
    gap: 14px;
  }

  .moments-calendar-view .moments-calendar-scale-row {
    margin-bottom: 20px;
  }

  .moments-calendar-view .moments-calendar-scale-switch {
    width: auto;
  }

  .moments-calendar-view .moments-calendar-month-fragment-grid {
    grid-template-columns: 1fr;
  }

  .moments-calendar-view .moments-calendar-review-common-block {
    grid-template-columns: 64px minmax(0, 1fr);
  }

  .moments-calendar-view .moments-calendar-backfill .moments-composer-submit-actions {
    justify-content: flex-end;
  }

  .moments-calendar-view .moments-calendar-year-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-template-rows: none;
  }

  .moments-calendar-view .moments-calendar-review-fragment.is-year {
    grid-template-columns: 34px 18px minmax(0, 1fr);
  }

  .moments-calendar-view .moments-calendar-review-fragment-year-main.has-image {
    grid-template-columns: 72px minmax(0, 1fr);
    gap: 9px;
  }

  .moments-calendar-view .moments-calendar-review-fragment-year-main .moments-calendar-review-fragment-media {
    display: block;
    width: 72px;
    height: 54px;
  }

  .moments-calendar-view .moments-calendar-review-fragment-year-main.has-image .moments-calendar-review-fragment-body {
    grid-column: 2;
  }
}

/* v0.2 Calendar scale switch and fixed review surfaces. */
.moments-calendar-view .moments-calendar-page-header {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 20px;
}

.moments-calendar-view .moments-calendar-scale-row {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0 0 24px;
}

.moments-calendar-view .moments-calendar-scale-switch {
  display: inline-grid;
  grid-template-columns: repeat(3, 52px);
  align-items: center;
  padding: 3px;
  border: 1px solid var(--moments-line);
  border-radius: 9px;
  background: color-mix(in srgb, var(--background-secondary) 72%, var(--background-primary));
}

.moments-calendar-view .moments-calendar-scale-option {
  min-height: 31px;
  padding: 4px 10px;
  border: 0;
  border-radius: 7px;
  background: transparent;
  color: var(--text-muted);
  box-shadow: none;
  font-size: var(--font-ui-small);
}

.moments-calendar-view .moments-calendar-scale-option:hover,
.moments-calendar-view .moments-calendar-scale-option:focus-visible {
  background: var(--moments-control-surface-hover);
  color: var(--text-normal);
  outline: none;
}

.moments-calendar-view .moments-calendar-scale-option.is-active {
  background: var(--moments-accent-fill);
  color: #fff;
  font-weight: 600;
}

.moments-calendar-view .moments-calendar-year-panel {
  display: flex;
  min-width: 0;
  height: var(--moments-calendar-panel-height);
  box-sizing: border-box;
  flex-direction: column;
  padding: 14px;
  border: 1px solid var(--moments-line);
  border-radius: 14px;
  background: var(--moments-surface-card);
}

.moments-calendar-view .moments-calendar-review-panel {
  display: grid;
  min-width: 0;
  height: var(--moments-calendar-panel-height);
  box-sizing: border-box;
  grid-template-rows: 66px minmax(0, 1fr) 68px;
  gap: 0;
  padding: 14px;
  overflow: hidden;
  border: 1px solid var(--moments-line);
  border-radius: 14px;
  background: var(--moments-surface-card);
}

.moments-calendar-view .moments-calendar-year-review {
  padding-left: 14px;
  padding-right: 14px;
}

.moments-calendar-view .moments-calendar-review-overview {
  min-width: 0;
  min-height: 0;
  padding: 6px 2px 8px;
  border: 0;
  border-radius: 0;
  background: transparent;
}

.moments-calendar-view .moments-calendar-review-overview h2 {
  margin: 0;
  color: var(--text-normal);
  font-family: var(--moments-ui-font);
  font-size: 1.36rem;
  font-weight: 600;
}

.moments-calendar-view .moments-calendar-review-count {
  margin-top: 5px;
  color: var(--text-muted);
  font-size: var(--font-ui-small);
}

.moments-calendar-view .moments-calendar-review-fragments {
  min-height: 0;
  padding: 0;
  overflow: hidden;
}

.moments-calendar-view .moments-calendar-review-fragments.is-headingless {
  padding: 6px 0 4px;
}

.moments-calendar-view .moments-calendar-year-review .moments-calendar-review-fragments {
  padding: 6px 0 4px;
  border: 0;
  border-radius: 0;
  background: transparent;
}

.moments-calendar-view .moments-calendar-review-fragments h3 {
  margin: 0 0 12px;
  color: var(--text-normal);
  font-size: 1rem;
  font-weight: 600;
}

.moments-calendar-view .moments-calendar-month-fragment-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-template-rows: repeat(3, minmax(0, 1fr));
  gap: 12px;
  height: 100%;
}

.moments-calendar-view .moments-calendar-review-fragment {
  position: relative;
  min-width: 0;
  min-height: 0;
  padding: 10px;
  overflow: hidden;
  border: 1px solid var(--moments-card-line);
  border-radius: 10px;
  background: var(--moments-surface-card);
  color: var(--text-normal);
  box-shadow: none;
  text-align: left;
}

.moments-calendar-view .moments-calendar-review-fragment:hover,
.moments-calendar-view .moments-calendar-review-fragment:focus-visible {
  border-color: color-mix(in srgb, var(--moments-accent) 24%, var(--moments-card-line));
  background: var(--moments-control-surface-hover);
  outline: none;
}

.moments-calendar-view .moments-calendar-review-fragment.is-month {
  container-type: inline-size;
  display: flex;
  width: 100%;
  height: 100%;
  min-height: 0;
  align-self: stretch;
  justify-self: stretch;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  box-sizing: border-box;
  padding: 12px;
}

.moments-calendar-view .moments-calendar-review-fragment-topline {
  display: flex;
  flex: 0 0 auto;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  min-width: 0;
  margin-bottom: 8px;
}

.moments-calendar-view .moments-calendar-review-fragment-date {
  display: block;
  min-width: 0;
  color: var(--text-muted);
  font-size: var(--font-ui-smaller);
  font-weight: 600;
  white-space: nowrap;
}

.moments-calendar-view .moments-calendar-review-fragment-location {
  max-width: 70%;
}

.moments-calendar-view .moments-calendar-review-fragment-month-main {
  display: grid;
  flex: 1 1 auto;
  grid-template-columns: minmax(0, 1fr);
  align-items: center;
  align-content: center;
  gap: 0;
  min-width: 0;
  min-height: 0;
}

.moments-calendar-view .moments-calendar-review-fragment-month-main.has-image {
  grid-template-columns: 72px minmax(0, 1fr);
  column-gap: 10px;
}

.moments-calendar-view .moments-calendar-review-fragment-media {
  position: relative;
  display: block;
  width: 72px;
  height: 54px;
  overflow: hidden;
  border-radius: 7px;
}

.moments-calendar-view .moments-calendar-review-fragment-image {
  display: block;
  width: 100%;
  height: 100%;
  border-radius: inherit;
  object-fit: cover;
}

.moments-calendar-view .moments-calendar-review-fragment-month-main .moments-calendar-review-fragment-media {
  grid-column: 1;
  grid-row: 1;
  align-self: center;
  width: 72px;
  height: 54px;
  margin: 0;
}

.moments-calendar-view .moments-calendar-review-fragment-month-main.has-image .moments-calendar-review-fragment-body {
  grid-column: 2;
  grid-row: 1;
  align-self: center;
}

.moments-calendar-view .moments-calendar-review-fragment-month-main:not(.has-image) .moments-calendar-review-fragment-body {
  grid-column: 1;
  grid-row: 1;
  align-self: center;
}

.moments-calendar-view .moments-calendar-review-fragment.is-month .moments-calendar-review-fragment-tags.is-month-footer {
  display: flex;
  flex: 0 0 30px;
  width: 100%;
  min-height: 30px;
  max-height: none;
  margin-top: auto;
  padding-top: 7px;
  padding-bottom: 1px;
  gap: 5px;
  flex-wrap: nowrap;
  overflow: visible;
  box-sizing: border-box;
}

.moments-calendar-view .moments-calendar-review-fragment-body {
  display: flex;
  min-width: 0;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  align-self: start;
  margin: 0;
  padding: 0;
}

.moments-calendar-view .moments-calendar-review-fragment-text {
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  color: var(--text-normal);
  font-size: 0.86rem;
  line-height: 1.48;
  white-space: pre-wrap;
}

.moments-calendar-view .moments-calendar-review-fragment.is-month.has-audio .moments-calendar-review-fragment-text {
  -webkit-line-clamp: 3;
}

.moments-calendar-view .moments-calendar-review-fragment.is-month .moment-audio-chip,
.moments-calendar-view .moments-calendar-review-fragment.is-year .moment-audio-chip {
  max-width: 100%;
  min-width: 0;
  box-sizing: border-box;
  margin-top: 6px;
  white-space: nowrap;
}

.moments-calendar-view .moments-calendar-review-fragment.is-month .moment-audio-chip > span:last-child {
  min-width: 0;
}

@container (max-width: 190px) {
  .moments-calendar-review-fragment-month-main.has-image {
    grid-template-columns: 56px minmax(0, 1fr);
    column-gap: 8px;
  }

  .moments-calendar-review-fragment-month-main .moments-calendar-review-fragment-media {
    width: 56px;
    height: 42px;
  }

  .moment-audio-chip {
    gap: 4px;
    padding: 2px 6px;
    font-size: var(--font-ui-smaller);
  }
}

@container (max-width: 165px) {
  .moments-calendar-review-fragment-month-main.has-image {
    grid-template-columns: 48px minmax(0, 1fr);
    column-gap: 6px;
  }

  .moments-calendar-review-fragment-month-main .moments-calendar-review-fragment-media {
    display: block;
    width: 48px;
    height: 36px;
  }

}

.moments-calendar-view .moments-calendar-review-fragment .moment-meta {
  display: flex;
  width: 100%;
  min-width: 0;
  max-height: 22px;
  margin-top: 8px;
  gap: 5px;
  flex-wrap: nowrap;
  overflow: hidden;
}

.moments-calendar-view .moments-calendar-review-fragment.is-month .moment-meta.is-month-footer {
  min-height: 30px;
  max-height: none;
  margin-top: auto;
  overflow: visible;
}

.moments-calendar-view .moments-calendar-review-fragment .moment-meta-pill {
  min-width: 0;
  min-height: 22px;
  max-width: 52%;
  flex: 0 1 auto;
  padding: 2px 7px;
  overflow: hidden;
  font-size: var(--font-ui-smaller);
  text-overflow: ellipsis;
  white-space: nowrap;
}

.moments-calendar-view .moments-calendar-review-fragment.is-month .moments-calendar-review-fragment-tags .moment-meta-pill {
  max-width: calc(50% - 3px);
}

.moments-calendar-view .moments-calendar-review-more-tags {
  flex: 0 0 auto;
  max-width: none;
}

.moments-calendar-view .moments-calendar-review-fragment .moment-meta-pill > span:last-child {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.moments-calendar-view .moments-calendar-review-common {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  grid-template-rows: repeat(2, minmax(26px, auto));
  align-self: end;
  gap: 2px;
  min-height: 60px;
  padding: 6px 0 0;
  border-top: 0;
}

.moments-calendar-view .moments-calendar-review-common-block {
  display: grid;
  grid-template-columns: 66px minmax(0, 1fr);
  align-items: center;
  gap: 8px;
  min-width: 0;
  padding: 0 4px;
  border: 0;
  border-radius: 0;
  background: transparent;
}

.moments-calendar-view .moments-calendar-review-common-block + .moments-calendar-review-common-block {
  border-left: 0;
}

.moments-calendar-view .moments-calendar-review-common-heading {
  display: flex;
  align-items: center;
  gap: 5px;
  min-height: 20px;
  color: var(--text-normal);
  font-size: var(--font-ui-smaller);
  font-weight: 600;
}

.moments-calendar-view .moments-calendar-review-common-heading svg {
  width: 13px;
  height: 13px;
  color: var(--moments-accent);
}

.moments-calendar-view .moments-calendar-review-common-list {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  gap: 7px;
  min-width: 0;
  margin-top: 0;
  padding-bottom: 0;
  overflow-x: auto;
  overflow-y: hidden;
  scrollbar-width: none;
}

.moments-calendar-view .moments-calendar-review-common-list.moment-meta {
  margin-top: 0;
}

.moments-calendar-view .moments-calendar-review-common-list.moment-meta .moment-meta-pill {
  min-height: 20px;
  max-width: none;
  flex: 0 0 auto;
  padding: 1px 7px;
  font-size: var(--font-ui-smaller);
}

.moments-calendar-view .moments-calendar-review-common-list.is-locations {
  gap: 14px;
}

.moments-calendar-view .moments-calendar-review-common-location {
  max-width: none;
  flex: 0 0 auto;
  margin-left: 0;
  overflow: visible;
}

.moments-calendar-view .moments-calendar-review-common-location > span:last-child {
  overflow: visible;
  text-overflow: clip;
}

.moments-calendar-view .moments-calendar-review-common-list::-webkit-scrollbar {
  display: none;
}

.moments-calendar-view .moments-calendar-day-panel .moment-meta {
  display: flex;
  width: 100%;
  min-width: 0;
  max-height: 22px;
  gap: 4px;
  flex-wrap: nowrap;
  overflow: hidden;
}

.moments-calendar-view .moments-calendar-day-panel .moment-meta-pill {
  min-width: 0;
  max-width: 52%;
  flex: 0 1 auto;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.moments-calendar-view .moments-calendar-day-panel .moment-meta-pill > span:last-child,
.moments-calendar-view .moments-calendar-moment-location > span:last-child {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.moments-calendar-view .moments-calendar-day-panel-title-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.moments-calendar-view .moments-calendar-add-button,
.moments-calendar-view .moments-calendar-empty-add {
  min-height: 30px;
  padding: 4px 6px;
  border: 0;
  border-radius: 6px;
  background: transparent;
  color: var(--moments-accent);
  box-shadow: none;
  font-size: var(--font-ui-small);
  font-weight: 500;
}

.moments-calendar-view .moments-calendar-add-button:hover,
.moments-calendar-view .moments-calendar-add-button:focus-visible,
.moments-calendar-view .moments-calendar-empty-add:hover,
.moments-calendar-view .moments-calendar-empty-add:focus-visible {
  background: var(--moments-control-surface-hover);
  outline: none;
}

.moments-calendar-view .moments-calendar-day-empty strong {
  color: var(--text-normal);
  font-weight: 600;
}

.moments-calendar-view .moments-calendar-backfill {
  flex: 1 1 auto;
  min-height: 0;
  overflow-y: auto;
  padding: 0 2px 2px;
}

.moments-calendar-view .moments-calendar-backfill .moments-composer {
  margin: 0;
  padding: 0 2px 2px;
  border: 0;
  background: transparent;
  box-shadow: none;
}

.moments-calendar-view .moments-calendar-backfill .moments-composer-body {
  overflow: visible;
  border: 0;
  background: transparent;
}

.moments-calendar-view .moments-calendar-backfill .moments-composer-heading {
  margin: 0 0 12px;
  font-size: 1rem;
}

.moments-calendar-view .moments-calendar-backfill .moments-composer-backfill-date {
  gap: 10px;
  margin: 0 0 12px;
  padding: 0;
}

.moments-calendar-view .moments-calendar-backfill .moments-composer-backfill-time {
  width: auto;
  min-height: 30px;
  padding: 1px 6px;
  border-color: color-mix(in srgb, var(--moments-line) 78%, transparent);
  background: color-mix(in srgb, var(--background-secondary) 44%, var(--background-primary));
}

.moments-calendar-view .moments-calendar-backfill .moments-composer-backfill-time-part {
  width: 23px;
  min-width: 23px;
  height: 26px;
  min-height: 26px;
}

.moments-calendar-view .moments-calendar-backfill .moments-composer-textarea {
  min-height: 132px;
  max-height: 220px;
  padding: 13px 14px;
  border: 1px solid color-mix(in srgb, var(--moments-line) 82%, transparent);
  border-radius: 10px;
  background: color-mix(in srgb, var(--background-secondary) 52%, var(--background-primary));
  box-shadow: none;
}

.moments-calendar-view .moments-calendar-backfill .moments-composer-actions {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  gap: 8px;
  margin-top: 12px;
}

.moments-calendar-view .moments-calendar-backfill .moments-composer-tools {
  display: flex;
  min-width: 0;
  flex: 1 1 260px;
  flex-wrap: wrap;
  gap: 6px;
}

.moments-calendar-view .moments-calendar-backfill .moments-tool-button {
  min-height: var(--moments-control-sm);
  padding: 5px 8px;
  gap: 5px;
  border-radius: 8px;
  font-size: var(--font-ui-smaller);
}

.moments-calendar-view .moments-calendar-backfill .moments-composer-submit-actions {
  width: auto;
  flex: 0 0 auto;
  gap: 8px;
  margin-left: auto;
  justify-content: flex-end;
}

.moments-calendar-view .moments-calendar-backfill .moments-primary-button {
  min-height: var(--moments-control-sm);
  padding: 5px 13px;
  border-radius: 8px;
  font-size: var(--font-ui-small);
}

.moments-calendar-view .moments-calendar-backfill .moments-primary-button {
  min-width: 82px;
}

.moments-calendar-view .moments-calendar-year-toolbar {
  display: grid;
  grid-template-columns: 34px auto 34px minmax(0, 1fr);
  align-items: center;
  gap: 8px;
  min-height: var(--moments-control-lg);
  padding: 0 4px 6px;
}

.moments-calendar-view .moments-calendar-year-toolbar > .moments-calendar-icon-button:first-child {
  grid-column: 1;
  grid-row: 1;
}

.moments-calendar-view .moments-calendar-year-toolbar > .moments-calendar-year-current {
  grid-column: 2;
  grid-row: 1;
}

.moments-calendar-view .moments-calendar-year-toolbar > .moments-calendar-icon-button:last-child {
  grid-column: 3;
  grid-row: 1;
}

.moments-calendar-view .moments-calendar-year-current {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: var(--moments-control-sm);
  margin: 0;
  padding: 3px 7px;
  border: 0;
  border-radius: 7px;
  background: transparent;
  color: var(--text-normal);
  box-shadow: none;
  font-family: var(--moments-ui-font);
  font-size: 1.28rem;
  font-weight: 600;
  line-height: normal;
  text-align: center;
  justify-self: start;
  pointer-events: none;
}

.moments-calendar-view .moments-calendar-year-grid {
  display: grid;
  min-height: 0;
  flex: 1 1 auto;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-template-rows: repeat(4, minmax(0, 1fr));
  gap: 10px;
  height: auto;
}

.moments-calendar-view .moments-calendar-year-month {
  display: grid;
  width: 100%;
  height: 100%;
  min-width: 0;
  min-height: 0;
  align-self: stretch;
  justify-self: stretch;
  box-sizing: border-box;
  grid-template-rows: auto minmax(0, 1fr);
  gap: 7px;
  padding: 10px 12px;
  overflow: hidden;
  border: 1px solid color-mix(in srgb, var(--moments-line) 54%, transparent);
  border-radius: 9px;
  background: var(--moments-surface-card);
  color: var(--text-normal);
  box-shadow: none;
  text-align: left;
}

.moments-calendar-view .moments-calendar-year-month.has-moments {
  background: color-mix(in srgb, var(--moments-accent-soft) 10%, var(--background-primary));
}

.moments-calendar-view .moments-calendar-year-month.is-current {
  border-color: color-mix(in srgb, var(--moments-accent) 44%, var(--moments-line));
  background: color-mix(in srgb, var(--moments-accent-soft) 32%, var(--background-primary));
}

.moments-calendar-view .moments-calendar-year-month.is-current .moments-calendar-year-month-name {
  color: var(--moments-accent);
}

.moments-calendar-view .moments-calendar-year-month:hover,
.moments-calendar-view .moments-calendar-year-month:focus-visible {
  border-color: color-mix(in srgb, var(--moments-accent) 26%, var(--moments-line));
  background: var(--moments-control-surface-hover);
  outline: none;
}

.moments-calendar-view .moments-calendar-year-month-top {
  display: flex;
  width: 100%;
  min-width: 0;
  grid-row: 1;
  align-items: baseline;
  justify-content: space-between;
  gap: 8px;
  justify-self: stretch;
}

.moments-calendar-view .moments-calendar-year-month-name {
  font-family: var(--moments-ui-font);
  font-size: 1.06rem;
  font-weight: 600;
}

.moments-calendar-view .moments-calendar-year-month-count {
  flex: 0 0 auto;
  margin-left: auto;
  color: var(--text-muted);
  font-size: var(--font-ui-smaller);
  white-space: nowrap;
}

.moments-calendar-view .moments-calendar-year-month-media {
  display: flex;
  min-width: 0;
  min-height: 0;
  grid-row: 2;
  align-items: flex-end;
  justify-content: center;
  overflow: hidden;
}

.moments-calendar-view .moments-calendar-year-month-image {
  display: block;
  width: min(108px, 100%);
  max-height: 100%;
  aspect-ratio: 4 / 3;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
  background: var(--background-secondary);
}

.moments-calendar-view .moments-calendar-year-fragment-list {
  display: flex;
  height: 100%;
  min-height: 0;
  margin-left: -4px;
  flex-direction: column;
  gap: 12px;
  overflow-y: auto;
  overscroll-behavior: contain;
  padding: 6px 10px 10px 0;
  scrollbar-gutter: stable;
  scrollbar-width: thin;
}

.moments-calendar-view .moments-calendar-review-fragment.is-year {
  appearance: none;
  display: grid;
  width: 100%;
  height: auto;
  box-sizing: border-box;
  grid-template-columns: 42px 18px minmax(0, 1fr);
  align-items: stretch;
  gap: 10px;
  min-height: 0;
  flex: 0 0 auto;
  padding: 4px 2px 8px;
  border: 0;
  border-block: 0;
  border-radius: 0;
  background: transparent;
  background-image: none;
  box-shadow: none;
}

.moments-calendar-view .moments-calendar-review-fragment.is-year + .moments-calendar-review-fragment.is-year {
  border-top: 0;
}

.moments-calendar-view .moments-calendar-review-fragment.is-year::before,
.moments-calendar-view .moments-calendar-review-fragment.is-year::after {
  display: none;
  content: none;
}

.moments-calendar-view .moments-calendar-year-timeline-rail {
  position: relative;
  display: flex;
  grid-column: 2;
  grid-row: 1;
  align-self: stretch;
  justify-content: center;
}

.moments-calendar-view .moments-calendar-year-timeline-rail::after {
  content: '';
  position: absolute;
  top: 24px;
  bottom: -20px;
  width: 1px;
  background: var(--moments-line);
}

.moments-calendar-view .moments-calendar-review-fragment.is-year:last-child .moments-calendar-year-timeline-rail::after {
  bottom: 4px;
}

.moments-calendar-view .moments-calendar-year-timeline-dot {
  position: relative;
  z-index: 1;
  width: 7px;
  height: 7px;
  margin-top: 8px;
  border-radius: 50%;
  background: var(--moments-accent);
  box-shadow: 0 0 0 5px var(--background-primary);
}

.moments-calendar-view .moments-calendar-review-fragment.is-year:hover,
.moments-calendar-view .moments-calendar-review-fragment.is-year:focus-visible {
  background: var(--moments-control-surface-hover);
}

.moments-calendar-view .moments-calendar-review-fragment.is-year .moments-calendar-review-fragment-date {
  grid-column: 1;
  grid-row: 1;
  align-self: start;
  margin: 1px 0 0;
  line-height: 20px;
  text-align: right;
}

.moments-calendar-view .moments-calendar-review-fragment-year-content {
  display: flex;
  grid-column: 3;
  grid-row: 1;
  min-width: 0;
  flex-direction: column;
  gap: 4px;
}

.moments-calendar-view .moments-calendar-review-fragment-year-location-line {
  display: flex;
  width: 100%;
  min-width: 0;
  height: 20px;
  min-height: 20px;
  align-items: center;
  justify-content: flex-end;
  margin: 0;
}

.moments-calendar-view .moments-calendar-review-fragment-year-location {
  max-width: calc(100% - 2px);
}

.moments-calendar-view .moments-calendar-review-fragment-year-main {
  display: grid;
  min-width: 0;
  grid-template-columns: minmax(0, 1fr);
  align-items: center;
  gap: 10px;
}

.moments-calendar-view .moments-calendar-review-fragment-year-main.has-image {
  grid-template-columns: 80px minmax(0, 1fr);
}

.moments-calendar-view .moments-calendar-review-fragment-year-main .moments-calendar-review-fragment-media {
  grid-column: 1;
  grid-row: 1;
  align-self: center;
  width: 80px;
  height: 60px;
  margin: 0;
}

.moments-calendar-view .moments-calendar-review-fragment-year-main .moments-calendar-review-fragment-body {
  grid-column: 1;
  grid-row: 1;
  align-self: center;
  min-width: 0;
  margin: 0;
  padding: 0;
}

.moments-calendar-view .moments-calendar-review-fragment-year-main.has-image .moments-calendar-review-fragment-body {
  grid-column: 2;
}






@media (max-width: 420px) {
  .moments-calendar-view .moments-calendar-month-panel { padding: 12px 10px 10px; }
  .moments-calendar-view .moments-calendar-toolbar { gap: 5px; padding-left: 0; padding-right: 0; }
  .moments-calendar-view .moments-calendar-month-title { font-size: 1.12rem; }
  .moments-calendar-view .moments-calendar-day { min-height: 64px; padding: 5px 2px 4px; }
  .moments-calendar-view .moments-calendar-day-number { width: 23px; height: 23px; }
  .moments-calendar-view .moments-calendar-day-image { width: 28px; height: 21px; }
  .moments-calendar-view .moments-calendar-moment.has-images,
  .moments-calendar-view .moments-calendar-moment.has-images .moments-calendar-moment-topline {
    grid-template-columns: 76px minmax(0, 1fr);
  }
  .moments-calendar-view .moments-calendar-moment-thumb { width: 76px; height: 57px; }
}

.theme-dark .moments-calendar-view .moments-calendar-year-month {
  border-color: color-mix(in srgb, var(--moments-accent) 26%, var(--background-primary));
}

/* Calendar metadata uses the same shared token contract as every other Moments page. */
.moments-calendar-view .moment-meta-pill {
  border: 0;
  border-radius: 999px;
  background: var(--moments-meta-surface);
  color: var(--moments-meta-text);
  box-shadow: none;
  padding-left: 7px;
  padding-right: 7px;
}

.moments-calendar-view .moment-tag,
.moments-calendar-view .moment-location,
.moments-calendar-view .moments-calendar-review-fragment-location {
  color: var(--moments-meta-text);
}


@media (hover: none) and (pointer: coarse) {
  .moments-calendar-view .moments-calendar-month-title:hover:not(.is-open):not(:focus-visible),
  .moments-calendar-view .moments-calendar-icon-button:hover:not(:focus-visible),
  .moments-calendar-view .moments-calendar-today:hover:not(:focus-visible),
  .moments-calendar-view .moments-calendar-month-option:hover:not(.is-current):not(:focus-visible),
  .moments-calendar-view .moments-calendar-add-button:hover:not(:focus-visible),
  .moments-calendar-view .moments-calendar-empty-add:hover:not(:focus-visible) {
    background: transparent;
  }

  .moments-calendar-view .moments-calendar-day:hover:not(.is-selected):not(:focus-visible) {
    background: var(--moments-surface-card);
  }

  .moments-calendar-view .moments-calendar-scale-option:hover:not(.is-active):not(:focus-visible) {
    background: transparent;
    color: var(--text-muted);
  }

  .moments-calendar-view .moments-calendar-moment:hover:not(:focus-visible),
  .moments-calendar-view .moments-calendar-review-fragment:hover:not(:focus-visible) {
    border-color: var(--moments-card-line);
    background: var(--moments-surface-card);
  }

  .moments-calendar-view .moments-calendar-review-fragment.is-year:hover:not(:focus-visible) {
    background: transparent;
  }

  .moments-calendar-view .moments-calendar-year-month:hover:not(:focus-visible):not(.is-current) {
    border-color: color-mix(in srgb, var(--moments-line) 54%, transparent);
    background: var(--moments-surface-card);
  }

  .moments-calendar-view .moments-calendar-year-month.has-moments:hover:not(:focus-visible):not(.is-current) {
    background: color-mix(in srgb, var(--moments-accent-soft) 10%, var(--background-primary));
  }
}

/* Calendar keeps its compact button geometry; Publish colors/states match Timeline exactly. */
.moments-calendar-view .moments-calendar-backfill .moments-primary-button {
  border-color: var(--moments-accent-fill) !important;
  background: var(--moments-accent-fill) !important;
  color: #fff !important;
  box-shadow: 0 2px 6px color-mix(in srgb, var(--moments-accent-fill) 20%, transparent) !important;
}

.moments-calendar-view .moments-calendar-backfill .moments-primary-button:hover:not(:disabled) {
  border-color: var(--moments-accent-fill-hover) !important;
  background: var(--moments-accent-fill-hover) !important;
  color: #fff !important;
}

.moments-calendar-view .moments-calendar-backfill .moments-primary-button:disabled {
  border-color: var(--moments-disabled-surface) !important;
  background: var(--moments-disabled-surface) !important;
  color: var(--moments-disabled-text) !important;
  box-shadow: none !important;
  opacity: 1 !important;
}

`;var Gt=`
/* Interaction refinements shared by desktop and mobile. */
/* Composer, Calendar backfill and inline Edit all open at exactly five text lines.
   Each surface keeps its own typography/padding, so the physical height can differ
   slightly while the visible line count stays consistent across platforms. */
.moments-view .moments-composer-textarea {
  box-sizing: border-box;
  height: calc(8.25em + 32px);
  min-height: calc(8.25em + 32px);
}

.moments-calendar-view .moments-calendar-backfill .moments-composer-textarea {
  box-sizing: border-box;
  height: calc(8.25em + 28px);
  min-height: calc(8.25em + 28px);
}

.moments-view .moment-edit-content,
.moments-timeline-view.moments-editor-open .moment-edit-content {
  box-sizing: border-box;
  height: calc(8.75em + 30px);
  min-height: calc(8.75em + 30px);
}

/* Day-view media and content share one centered visual row. */
.moments-calendar-view .moments-calendar-moment-thumb,
.moments-calendar-view .moments-calendar-moment-body {
  align-self: center;
}

.moments-calendar-view .moments-calendar-moment-thumb {
  margin-top: 0;
}

/* Give Calendar audio chips enough trailing room for the duration text.
   Use view-specific selectors so compact mobile/review rules do not squeeze it back. */
.moments-calendar-view .moments-calendar-day-panel .moment-audio-chip,
.moments-calendar-view .moments-calendar-review-fragment.is-month .moment-audio-chip,
.moments-calendar-view .moments-calendar-review-fragment.is-year .moment-audio-chip {
  padding-left: 10px;
  padding-right: 14px;
}

/* Month labels and counts use one consistent centered cluster in the year grid.
   The current month differs only by highlight state, never by label alignment. */
.moments-calendar-view .moments-calendar-year-month-top {
  justify-content: center;
  gap: 8px;
}

.moments-calendar-view .moments-calendar-year-month-count {
  margin-left: 0;
}

.moments-calendar-view .moments-calendar-review-title-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  min-width: 0;
}

.moments-calendar-view .moments-calendar-review-title-row h2 {
  min-width: 0;
}

.moments-calendar-view .moments-calendar-shuffle-button {
  display: inline-flex;
  flex: 0 0 auto;
  align-items: center;
  justify-content: center;
  gap: 5px;
}

.moments-calendar-view .moments-calendar-shuffle-icon {
  display: inline-flex;
  width: 14px;
  height: 14px;
  align-items: center;
  justify-content: center;
}

/* Present the randomize action as a refresh-style icon on every platform. */
.moments-calendar-view .moments-calendar-shuffle-icon svg {
  display: none;
}

.moments-calendar-view .moments-calendar-shuffle-icon::before {
  content: '';
  display: block;
  width: 14px;
  height: 14px;
  background: currentColor;
  -webkit-mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21 12a9 9 0 0 0-15.27-6.36L3 8'/%3E%3Cpath d='M3 3v5h5'/%3E%3Cpath d='M3 12a9 9 0 0 0 15.27 6.36L21 16'/%3E%3Cpath d='M16 16h5v5'/%3E%3C/g%3E%3C/svg%3E") center / contain no-repeat;
  mask: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='none' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21 12a9 9 0 0 0-15.27-6.36L3 8'/%3E%3Cpath d='M3 3v5h5'/%3E%3Cpath d='M3 12a9 9 0 0 0 15.27 6.36L21 16'/%3E%3Cpath d='M16 16h5v5'/%3E%3C/g%3E%3C/svg%3E") center / contain no-repeat;
}

/* Keep the review copy stable instead of exposing internal totals. */
.moments-calendar-view .moments-calendar-month-review .moments-calendar-review-count,
.moments-calendar-view .moments-calendar-year-review .moments-calendar-review-count {
  font-size: 0;
}

.moments-calendar-view .moments-calendar-month-review .moments-calendar-review-count::after {
  content: '\u968F\u673A6\u6761\u8BB0\u5F55';
  font-size: var(--font-ui-smaller);
}

.moments-calendar-view .moments-calendar-year-review .moments-calendar-review-count::after {
  content: '\u6BCF\u6708\u968F\u673A1\u6761';
  font-size: var(--font-ui-smaller);
}
`;var Kt=`
/* Feature-specific presentation layered after the static visual system. */
/* The tab already carries the workspace view name; hide Obsidian's duplicate
   centered view-header title and let each page own its visible heading. */
.workspace-leaf-content[data-type="moments-timeline"] .view-header-title,
.workspace-leaf-content[data-type="moments-memories"] .view-header-title,
.workspace-leaf-content[data-type="moments-calendar"] .view-header-title {
  display: none;
}

/* Shared custom audio control: no native overflow/download/speed menu. */
.moments-view .moments-selected-audio:empty { display: none; }

/* While microphone permission is being requested, keep the label as \u201C\u97F3\u9891\u201D
   and replace the mic glyph with a small spinner so the click has immediate feedback. */
.moments-view .moments-tool-button:disabled:not(.is-active) {
  opacity: 1;
  cursor: wait;
}

.moments-view .moments-tool-button:disabled:not(.is-active) .moments-tool-icon {
  width: 16px;
  height: 16px;
  flex: 0 0 16px;
  box-sizing: border-box;
  border: 2px solid color-mix(in srgb, var(--moments-accent) 24%, transparent);
  border-top-color: var(--moments-accent);
  border-radius: 50%;
  animation: moments-tool-spinner 0.72s linear infinite;
}

.moments-view .moments-tool-button:disabled:not(.is-active) .moments-tool-icon svg {
  display: none;
}

@keyframes moments-tool-spinner {
  to { transform: rotate(360deg); }
}

.moments-view .moments-selected-audio {
  padding: 10px 2px 0;
}

.moments-view .moments-selected-audio-item {
  display: flex;
  align-items: center;
  gap: 9px;
  min-height: 42px;
  padding: 7px 9px;
  border: 1px solid var(--moments-line);
  border-radius: 10px;
  background: var(--moments-warm-surface);
}

.moments-view .moments-selected-audio-icon {
  display: inline-flex;
  flex: 0 0 auto;
  color: var(--moments-accent);
}

.moments-view .moments-selected-audio-icon svg {
  width: 17px;
  height: 17px;
}

.moments-view .moments-selected-audio-remove {
  flex: 0 0 auto;
  width: 24px;
  height: 24px;
  min-height: 24px;
  padding: 0;
  border: 0;
  border-radius: 0;
  background: transparent;
  color: var(--text-faint);
  box-shadow: none;
  font-size: 17px;
  line-height: 1;
}

.moments-view .moments-selected-audio-remove:hover,
.moments-view .moments-selected-audio-remove:focus-visible {
  background: transparent;
  color: var(--text-muted);
  outline: none;
}

.moments-view .moments-audio-control {
  display: flex;
  align-items: center;
  gap: 9px;
  min-width: 0;
}

.moments-view .moments-selected-audio-player {
  flex: 1 1 260px;
  min-width: 180px;
}

.moments-view .moments-audio-control-play {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
  width: 28px;
  height: 28px;
  min-height: 28px;
  padding: 0;
  border: 0;
  border-radius: 50%;
  background: transparent;
  color: var(--text-normal);
  box-shadow: none;
}

.moments-view .moments-audio-control-play:hover,
.moments-view .moments-audio-control-play:focus-visible {
  background: var(--moments-accent-soft);
  outline: none;
}

.moments-view .moments-audio-control-play svg {
  width: 15px;
  height: 15px;
}

.moments-view .moments-audio-control-progress {
  flex: 1 1 auto;
  min-width: 90px;
  height: 4px;
  margin: 0;
  accent-color: var(--moments-accent);
}

.moments-view .moments-audio-control-time {
  flex: 0 0 auto;
  min-width: 72px;
  color: var(--text-muted);
  font-size: var(--font-ui-smaller);
  font-variant-numeric: tabular-nums;
  text-align: right;
}

.moments-view .moment-audio-chip {
  display: inline-flex;
  align-items: center;
  align-self: flex-start;
  gap: 6px;
  min-height: 27px;
  margin-top: 7px;
  padding: 3px 9px;
  border: 0;
  border-radius: 999px;
  background: var(--moments-meta-surface);
  color: var(--moments-meta-text);
  box-shadow: none;
  font-size: var(--font-ui-small);
  line-height: 1.35;
}

.moments-view .moment-audio-chip:hover,
.moments-view .moment-audio-chip:focus-visible {
  background: var(--moments-control-surface-hover);
  color: var(--text-normal);
  outline: none;
}

.moments-view .moment-audio-chip-icon,
.moments-view .moment-audio-chip-icon svg {
  width: 14px;
  height: 14px;
}

.moments-view .moment-detail-audio {
  width: min(430px, 100%);
  margin-top: 16px;
  padding: 10px 12px;
  border: 1px solid var(--moments-line);
  border-radius: 11px;
  background: var(--moments-warm-surface);
}

.moments-view .moment-detail-audio-heading {
  display: flex;
  align-items: center;
  gap: 7px;
  margin-bottom: 7px;
  color: var(--text-muted);
  font-size: var(--font-ui-small);
}

.moments-view .moment-detail-audio-heading svg {
  width: 15px;
  height: 15px;
  color: var(--moments-accent);
}

.moments-view .moment-detail-audio-player {
  width: 100%;
}

/* Lightweight text action currently used by Timeline pagination. */
.moments-view .moments-inline-action {
  appearance: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  min-height: 28px;
  padding: 4px 2px;
  border: 0;
  border-radius: 0;
  background: transparent;
  color: var(--text-muted);
  box-shadow: none;
  font-size: var(--font-ui-small);
  font-weight: 500;
  line-height: 1.35;
  white-space: nowrap;
}

.moments-view .moments-inline-action:hover,
.moments-view .moments-inline-action:focus-visible {
  border: 0;
  background: transparent;
  color: var(--moments-accent-hover);
  box-shadow: none;
  outline: none;
}

/* Long Timeline navigation. The transformed leaf becomes the containing block for
   the fixed button, so it floats in the Timeline pane instead of over Obsidian's
   right sidebar. */
.workspace-leaf-content[data-type="moments-timeline"] {
  transform: translateZ(0);
}

.moments-view .moments-timeline-footer {
  position: relative;
  min-height: 76px;
}

.moments-view .moments-timeline-footer .moments-load-more {
  padding-right: 54px;
  padding-left: 54px;
}

.moments-view .moments-back-to-top {
  position: fixed;
  z-index: 20;
  right: 18px;
  bottom: 18px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  min-height: var(--moments-control-md);
  padding: 0;
  border: 1px solid var(--moments-border-soft);
  border-radius: 50%;
  background: var(--moments-control-surface);
  color: var(--text-muted);
  box-shadow: 0 2px 8px rgba(50, 38, 28, 0.06);
}

.moments-view .moments-back-to-top:hover,
.moments-view .moments-back-to-top:focus-visible {
  border-color: var(--moments-line);
  background: var(--moments-control-surface-hover);
  color: var(--text-normal);
  outline: none;
}

.moments-view .moments-back-to-top svg {
  width: 17px;
  height: 17px;
}

/* Cross-page return action: a quiet page-level jump back to the Timeline home. */
.moments-view .moments-page-nav {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  min-height: 28px;
  margin-bottom: 14px;
}

.moments-view .moments-page-back {
  appearance: none;
  display: inline-flex;
  flex: 0 0 auto;
  align-items: center;
  gap: 5px;
  min-height: 28px;
  margin: 0;
  padding: 2px 0;
  border: 0;
  border-radius: 0;
  background: transparent;
  color: var(--text-muted);
  box-shadow: none;
  font-size: var(--font-ui-small);
  font-weight: 500;
  line-height: 1.35;
  white-space: nowrap;
}

.moments-view .moments-page-back:hover {
  border: 0;
  background: transparent;
  color: var(--moments-accent);
  box-shadow: none;
}

.moments-view .moments-page-back:focus-visible {
  border: 0;
  background: transparent;
  color: var(--moments-accent);
  box-shadow: none;
  outline: 1px solid color-mix(in srgb, var(--moments-accent) 45%, transparent);
  outline-offset: 3px;
}

.moments-view .moments-page-back-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 0;
}

.moments-view .moments-page-back-icon,
.moments-view .moments-page-back-icon svg {
  width: 14px;
  height: 14px;
}

.moments-view .moments-page-back-icon svg {
  display: block;
  transform: translateY(0.5px);
}

/* Memories / On this day. */
.moments-memories-view .moments-memories-shell {
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 0;
  box-sizing: border-box;
  overflow: hidden;
}

.moments-memories-view .moments-memories-page-header {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 24px;
}

.moments-memories-view .moments-memories-title {
  flex: 1 1 auto;
  min-width: 0;
}

.moments-memories-view .moments-memories-date-strip {
  display: grid;
  grid-template-columns: 34px minmax(0, 1fr) 34px;
  align-items: center;
  gap: 12px;
  margin-bottom: 28px;
}

.moments-memories-view .moments-memories-date-strip.has-today-action {
  grid-template-columns: 34px minmax(0, 1fr) 34px auto;
}

.moments-memories-view .moments-memories-date-days {
  display: grid;
  grid-template-columns: repeat(7, minmax(0, 1fr));
  align-items: stretch;
  gap: 8px;
  min-width: 0;
}

.moments-memories-view .moments-memories-date-shift {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  min-height: var(--moments-control-sm);
  padding: 0;
  border: 1px solid color-mix(in srgb, var(--moments-line) 72%, transparent);
  border-radius: 50%;
  background: transparent;
  color: var(--text-muted);
  box-shadow: none;
}

.moments-memories-view .moments-memories-date-shift:hover,
.moments-memories-view .moments-memories-date-shift:focus-visible {
  border-color: color-mix(in srgb, var(--moments-accent) 24%, var(--moments-line));
  background: var(--moments-control-surface-hover);
  color: var(--text-normal);
  outline: none;
}

.moments-memories-view .moments-memories-date-shift svg {
  width: 14px;
  height: 14px;
}

.moments-memories-view .moments-memories-date-day {
  appearance: none;
  position: relative;
  display: flex;
  min-width: 0;
  min-height: 64px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2px;
  padding: 4px 3px 11px;
  border: 0;
  border-radius: 10px;
  background: transparent;
  color: var(--text-muted);
  box-shadow: none;
}

.moments-memories-view .moments-memories-date-day:hover,
.moments-memories-view .moments-memories-date-day:focus-visible {
  background: var(--moments-control-surface-hover);
  color: var(--text-normal);
  outline: none;
}

.moments-memories-view .moments-memories-date-day.is-selected {
  background: var(--moments-selected-surface);
  color: var(--moments-accent);
  font-weight: 600;
}

.moments-memories-view .moments-memories-date-day.is-today:not(.is-selected) {
  color: color-mix(in srgb, var(--moments-accent) 72%, var(--text-muted));
}

.moments-memories-view .moments-memories-date-day.is-today:not(.is-selected)
.moments-memories-date-day-sub-label {
  color: color-mix(in srgb, var(--moments-accent) 68%, var(--text-faint));
  font-weight: 500;
}

.moments-memories-view .moments-memories-date-day-label {
  overflow: hidden;
  font-size: var(--font-ui-small);
  font-variant-numeric: tabular-nums;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.moments-memories-view .moments-memories-date-day-sub-label {
  overflow: hidden;
  color: var(--text-faint);
  font-size: var(--font-ui-smaller);
  font-weight: 400;
  line-height: 1.15;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.moments-memories-view .moments-memories-date-day.is-selected .moments-memories-date-day-sub-label {
  color: color-mix(in srgb, var(--moments-accent) 82%, var(--text-muted));
  font-weight: 600;
}

.moments-memories-view .moments-memories-date-day-dot {
  position: absolute;
  left: 50%;
  bottom: 6px;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: var(--moments-accent);
  transform: translateX(-50%);
}

.moments-memories-view .moments-memories-date-day-dot.is-empty {
  visibility: hidden;
}

.moments-memories-view .moments-memories-today-action {
  appearance: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: var(--moments-control-sm);
  padding: 0 8px;
  border: 0;
  border-radius: 7px;
  background: transparent;
  color: var(--text-muted);
  box-shadow: none;
  font-size: var(--font-ui-small);
  font-weight: 500;
  line-height: 1;
  white-space: nowrap;
}

.moments-memories-view .moments-memories-today-action:hover,
.moments-memories-view .moments-memories-today-action:focus-visible {
  background: var(--moments-accent-soft);
  color: var(--moments-accent);
  outline: none;
}

.moments-memories-view .moments-memories-list {
  position: relative;
  display: grid;
  flex: 1 1 auto;
  min-height: 0;
  align-content: start;
  gap: 26px;
  overflow-y: auto;
  overflow-x: hidden;
  overscroll-behavior: contain;
  scrollbar-gutter: stable;
  scrollbar-width: thin;
  padding-right: 8px;
  padding-bottom: 8px;
}

.moments-memories-view .moments-memory-year-group {
  position: relative;
  padding-left: 26px;
}

.moments-memories-view .moments-memory-year-group::before {
  content: '';
  position: absolute;
  left: 6px;
  top: 13px;
  bottom: -32px;
  width: 1px;
  background: var(--moments-line);
}

.moments-memories-view .moments-memory-year-group:last-child::before {
  bottom: 8px;
}

.moments-memories-view .moments-memory-year-heading {
  position: relative;
  margin: 0 0 13px;
  font-size: 1.08rem;
  font-weight: 600;
}

.moments-memories-view .moments-memory-year-heading::before {
  content: '';
  position: absolute;
  left: -20px;
  top: 50%;
  width: 6px;
  height: 6px;
  border: 0;
  border-radius: 50%;
  background: var(--moments-accent);
  box-shadow: 0 0 0 4px var(--moments-accent-soft);
  transform: translate(-50%, -50%);
}

.moments-memories-view .moments-memory-cards {
  display: grid;
  gap: 14px;
}

.moments-memories-view .moments-memory-card {
  display: grid;
  grid-template-columns: 208px minmax(0, 1fr);
  width: 100%;
  min-width: 0;
  height: 156px;
  overflow: hidden;
  border: 1px solid var(--moments-card-line, var(--moments-line));
  border-radius: 10px;
  background: var(--moments-surface-card);
  background-clip: padding-box;
  isolation: isolate;
}

.moments-memories-view .moments-memory-card.is-text-only {
  grid-template-columns: 1fr;
  height: auto;
  min-height: 124px;
}

.moments-memories-view .moments-memory-card-media {
  position: relative;
  width: 208px;
  height: 156px;
  overflow: hidden;
  border-radius: 9px;
}

.moments-memories-view .moments-memory-card-image {
  display: block;
  width: 100%;
  height: 100%;
  min-height: 0;
  max-height: none;
  border-radius: 0;
  object-fit: cover;
}

.moments-memories-view .moments-memory-card-body {
  display: flex;
  flex-direction: column;
  min-width: 0;
  padding: 14px 16px 12px;
  overflow: hidden;
  border-radius: 0 9px 9px 0;
}

.moments-memories-view .moments-memory-card.is-text-only .moments-memory-card-body {
  border-radius: 9px;
}

.moments-memories-view .moments-memory-card-date {
  margin-bottom: 8px;
  color: var(--text-muted);
  font-size: var(--font-ui-small);
  line-height: 1.45;
}

.moments-memories-view .moments-memory-card-content {
  display: -webkit-box;
  overflow: hidden;
  margin: 0;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  color: var(--text-normal);
  font-size: 0.96rem;
  line-height: 1.6;
  white-space: pre-wrap;
}

.moments-memories-view .moments-memory-card.is-text-only .moments-memory-card-content {
  -webkit-line-clamp: 4;
}

.moments-memories-view .moments-memory-card .moment-meta {
  margin-top: 0;
}

.moments-memories-view .moments-memory-card-footer {
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 14px;
  margin-top: auto;
  padding-top: 10px;
}

.moments-memories-view .moments-memories-empty {
  flex: 1 1 auto;
  min-height: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px 20px;
  text-align: center;
  color: var(--text-muted);
}

.moments-memories-view .moments-memories-empty strong {
  display: block;
  margin-bottom: 7px;
  color: var(--text-normal);
  font-size: 1rem;
  font-weight: 600;
}


@media (max-width: 760px) {
  .moments-memories-view .moments-memories-page-header {
    gap: 14px;
    margin-bottom: 22px;
  }

  .moments-memories-view .moments-memories-date-strip {
    grid-template-columns: var(--moments-control-xs) minmax(0, 1fr) var(--moments-control-xs);
    gap: 6px;
    margin-bottom: 24px;
  }

  .moments-memories-view .moments-memories-date-strip.has-today-action {
    grid-template-columns: var(--moments-control-xs) minmax(0, 1fr) var(--moments-control-xs) auto;
  }

  .moments-memories-view .moments-memories-date-days {
    gap: 3px;
  }

  .moments-memories-view .moments-memories-date-shift {
    width: var(--moments-control-xs);
    height: var(--moments-control-xs);
    min-height: var(--moments-control-xs);
  }

  .moments-memories-view .moments-memories-today-action {
    min-height: var(--moments-control-xs);
    padding-right: 5px;
    padding-left: 5px;
    font-size: var(--font-ui-smaller);
  }

  .moments-memories-view .moments-memories-date-day {
    min-height: 48px;
    padding-right: 1px;
    padding-left: 1px;
  }

  .moments-memories-view .moments-memories-date-day-dot {
    bottom: 6px;
  }

  .moments-memories-view .moments-memories-date-day-label {
    font-size: var(--font-ui-smaller);
  }

  .moments-memories-view .moments-memory-card {
    grid-template-columns: 1fr;
    height: auto;
    min-height: 0;
  }

  .moments-memories-view .moments-memory-card-media {
    width: 100%;
    height: auto;
    border-radius: 9px;
    aspect-ratio: 4 / 3;
  }

  .moments-memories-view .moments-memory-card-image {
    width: 100%;
    height: 100%;
    max-height: none;
    aspect-ratio: auto;
  }
}

@media (max-width: 580px) {
  .moments-memories-view .moments-memories-page-header {
    flex-wrap: wrap;
    row-gap: 10px;
  }

  .moments-memories-view .moments-memories-date-strip,
  .moments-memories-view .moments-memories-date-strip.has-today-action {
    grid-template-columns: max(36px, var(--moments-control-xs)) minmax(0, 1fr) max(36px, var(--moments-control-xs));
    column-gap: 6px;
    row-gap: 4px;
  }

  .moments-memories-view .moments-memories-date-strip > .moments-memories-date-shift:first-child {
    grid-column: 1;
    grid-row: 1;
  }

  .moments-memories-view .moments-memories-date-days {
    grid-column: 2;
    grid-row: 1;
    gap: 2px;
    overflow: hidden;
  }

  .moments-memories-view .moments-memories-date-days + .moments-memories-date-shift {
    grid-column: 3;
    grid-row: 1;
  }

  .moments-memories-view .moments-memories-date-shift {
    width: max(36px, var(--moments-control-xs));
    height: max(36px, var(--moments-control-xs));
    min-height: max(36px, var(--moments-control-xs));
  }

  .moments-memories-view .moments-memories-date-day {
    width: 100%;
    max-width: 100%;
    min-width: 0;
    overflow: hidden;
    padding-right: 0;
    padding-left: 0;
  }

  .moments-memories-view .moments-memories-date-day-label,
  .moments-memories-view .moments-memories-date-day-sub-label {
    display: block;
    width: 100%;
    max-width: 100%;
    overflow: hidden;
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .moments-memories-view .moments-memories-date-day-label {
    font-size: 0.72rem;
    letter-spacing: -0.02em;
  }

  .moments-memories-view .moments-memories-date-day-sub-label {
    font-size: 0.68rem;
  }

  .moments-memories-view .moments-memories-today-action {
    grid-column: 2 / 4;
    grid-row: 2;
    justify-self: end;
    min-height: 30px;
    padding-right: 2px;
    padding-left: 8px;
  }

  .moments-view .moment-card-thumb {
    width: 100%;
    height: auto;
    max-height: none;
    aspect-ratio: 4 / 3;
  }
}

/* Homepage review actions live inside the Composer heading. */
.moments-view .moments-timeline-header-actions {
  display: inline-flex;
  flex: 0 0 auto;
  align-items: center;
  justify-content: flex-end;
  gap: 14px;
  margin-left: auto;
}

.moments-view .moments-timeline-header-action {
  appearance: none;
  display: inline-flex;
  align-items: center;
  gap: 3px;
  min-height: 28px;
  padding: 2px 0;
  border: 0;
  border-radius: 0;
  background: transparent;
  color: var(--text-muted);
  box-shadow: none;
  font-size: var(--font-ui-small);
  font-weight: 500;
  line-height: 1.35;
  white-space: nowrap;
  cursor: pointer;
}

.moments-view .moments-timeline-header-action:hover,
.moments-view .moments-timeline-header-action:focus-visible {
  border: 0;
  background: transparent;
  color: var(--moments-accent);
  box-shadow: none;
}

.moments-view .moments-timeline-header-action:focus-visible {
  outline: 1px solid color-mix(in srgb, var(--moments-accent) 45%, transparent);
  outline-offset: 3px;
}

.moments-view .moments-timeline-header-action-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: color-mix(in srgb, var(--moments-accent) 68%, var(--text-muted));
  line-height: 0;
}

.moments-view .moments-timeline-header-action-icon,
.moments-view .moments-timeline-header-action-icon svg {
  width: 14px;
  height: 14px;
}

.moments-view .moments-timeline-header-action-icon svg {
  display: block;
  transform: translateY(0.5px);
}

.moments-view .moments-timeline-header-action-arrow {
  display: inline-flex;
  align-items: center;
  color: color-mix(in srgb, var(--moments-accent) 68%, var(--text-muted));
  opacity: 0.82;
  font-size: 12px;
  line-height: 1;
}

.moments-view .moments-timeline-header-divider {
  flex: 0 0 1px;
  width: 1px;
  height: 15px;
  background: color-mix(in srgb, var(--text-muted) 22%, transparent);
}

.moments-view .moments-timeline-header-action:hover .moments-timeline-header-action-icon,
.moments-view .moments-timeline-header-action:hover .moments-timeline-header-action-arrow,
.moments-view .moments-timeline-header-action:focus-visible .moments-timeline-header-action-icon,
.moments-view .moments-timeline-header-action:focus-visible .moments-timeline-header-action-arrow {
  color: var(--moments-accent);
}

@media (max-width: 560px) {
  .moments-view .moments-timeline-header-actions {
    gap: 12px;
  }

  .moments-view .moments-timeline-header-action {
    min-height: 36px;
    padding: 4px 0;
  }

  .moments-view .moments-timeline-header-action-icon,
  .moments-view .moments-timeline-header-divider {
    display: none;
  }

  .moments-view .moments-timeline-header-action-arrow {
    order: 1;
  }

  .moments-view .moments-timeline-header-action-label {
    order: 2;
    font-size: 0;
  }

  .moments-view .moments-timeline-header-action-label::after {
    content: attr(data-mobile-label);
    font-size: var(--font-ui-small);
  }
}

/* v0.2: publish feedback is a compact footer row inside the Composer card. */
.moments-view .moments-publish-echo {
  display: flex;
  align-items: center;
  gap: 7px;
  min-height: 30px;
  margin: 10px 0 -2px;
  padding: 4px 2px 0;
  border: 0;
  color: color-mix(in srgb, var(--moments-accent-hover) 58%, var(--text-normal));
  font-size: var(--font-ui-small);
  font-weight: 500;
  opacity: 1;
  transform: translateY(0);
  transition: color 120ms ease, opacity 450ms ease, transform 450ms ease;
}

.moments-view .moments-publish-echo.is-clickable {
  cursor: pointer;
}

.moments-view .moments-publish-echo.is-hiding {
  opacity: 0;
  transform: translateY(-2px);
  pointer-events: none;
}

.moments-view .moments-publish-echo-mark {
  flex: 0 0 auto;
  color: var(--moments-accent-hover);
}

.moments-view .moments-publish-echo-text {
  --moments-publish-echo-text-color: color-mix(
    in srgb,
    var(--moments-accent-hover) 58%,
    var(--text-normal)
  );
  display: inline-flex;
  min-width: 0;
  align-items: center;
  gap: 2px;
  flex-wrap: wrap;
  background:
    linear-gradient(
      105deg,
      var(--moments-publish-echo-text-color) 0%,
      var(--moments-publish-echo-text-color) 42%,
      #d9a44f 47%,
      #fff0b8 50%,
      #d9a44f 53%,
      var(--moments-publish-echo-text-color) 58%,
      var(--moments-publish-echo-text-color) 100%
    );
  background-size: 260% 100%;
  background-position: 130% 0;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: moments-publish-echo-shimmer 1200ms ease-out 180ms 1 both;
}

@keyframes moments-publish-echo-shimmer {
  from { background-position: 130% 0; }
  to { background-position: -30% 0; }
}

@keyframes moments-publish-echo-arrow-glint {
  0%, 38% {
    color: color-mix(in srgb, var(--moments-accent-hover) 58%, var(--text-normal));
  }
  50% {
    color: #fff0b8;
  }
  62%, 100% {
    color: color-mix(in srgb, var(--moments-accent-hover) 58%, var(--text-normal));
  }
}

.moments-view .moments-publish-echo-location {
  display: inline-flex;
  align-items: center;
  gap: 3px;
}

.moments-view .moments-publish-echo-location-icon {
  display: inline-flex;
  color: var(--moments-accent);
}

.moments-view .moments-publish-echo-location-icon svg {
  width: 13px;
  height: 13px;
}

.moments-view .moments-publish-echo-arrow {
  display: inline-flex;
  flex: 0 0 auto;
  color: color-mix(in srgb, var(--moments-accent-hover) 58%, var(--text-normal));
  animation: moments-publish-echo-arrow-glint 1200ms ease-out 180ms 1 both;
}

.moments-view .moments-publish-echo-arrow,
.moments-view .moments-publish-echo-arrow svg {
  width: 13px;
  height: 13px;
}

.moments-view .moments-composer-submit-actions {
  display: inline-flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
  margin-left: auto;
}

.moments-view .moments-composer-backfill-date {
  display: flex;
  align-items: center;
  gap: 12px;
  margin: 2px 0 13px;
  padding: 0 2px;
  color: var(--text-muted);
  font-size: var(--font-ui-small);
}

.moments-view .moments-composer-backfill-label {
  color: var(--text-normal);
  font-weight: 600;
}

.moments-view .moments-composer-backfill-time {
  display: inline-flex;
  align-items: center;
  width: auto;
  min-height: var(--moments-control-xs);
  padding: 2px 7px;
  border: 1px solid var(--moments-line);
  border-radius: 7px;
  background: var(--background-primary);
  color: var(--text-normal);
  box-shadow: none;
  font-size: var(--font-ui-small);
  font-variant-numeric: tabular-nums;
}

.moments-view .moments-composer-backfill-time-part {
  width: 24px;
  min-width: 24px;
  height: 26px;
  min-height: 26px;
  padding: 0;
  border: 0;
  border-radius: 4px;
  background: transparent;
  color: var(--text-normal);
  box-shadow: none;
  font: inherit;
  font-variant-numeric: tabular-nums;
  text-align: center;
}

.moments-view .moments-composer-backfill-time-part:focus {
  background: var(--moments-accent-soft);
  outline: none;
}

.moments-view .moments-composer-backfill-time-separator {
  color: var(--text-muted);
  line-height: 1;
}

@media (max-width: 580px) {
  .moments-view .moments-composer-actions {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    align-items: stretch;
    gap: 8px;
  }

  .moments-view .moments-composer-tools,
  .moments-view .moments-composer-submit-actions {
    display: contents;
  }

  .moments-view .moments-composer-tools .moments-tool-button,
  .moments-view .moments-composer-submit-actions .moments-primary-button {
    width: 100%;
    min-width: 0;
    padding-right: 8px;
    padding-left: 8px;
  }

  .moments-view .moments-composer-tools .moments-tool-button:nth-child(1) {
    grid-column: 1;
    grid-row: 1;
  }

  .moments-view .moments-composer-tools .moments-tool-button:nth-child(2) {
    grid-column: 2;
    grid-row: 1;
  }

  .moments-view .moments-composer-submit-actions .moments-primary-button {
    grid-column: 3;
    grid-row: 1;
  }

  .moments-view .moments-composer-tools .moments-tool-button:nth-child(3) {
    grid-column: 1;
    grid-row: 2;
  }

  .moments-view .moments-composer-tools .moments-tool-button:nth-child(4) {
    grid-column: 2;
    grid-row: 2;
  }
}

@media (hover: none) and (pointer: coarse) {
  .moments-view .moments-page-back:hover:not(:focus-visible),
  .moments-view .moments-inline-action:hover:not(:focus-visible),
  .moments-view .moments-back-to-top:hover:not(:focus-visible),
  .moments-view .moments-timeline-header-action:hover:not(:focus-visible),
  .moments-memories-view .moments-memories-date-shift:hover:not(:focus-visible),
  .moments-memories-view .moments-memories-today-action:hover:not(:focus-visible) {
    background: transparent;
    color: var(--text-muted);
  }

  .moments-memories-view .moments-memories-date-day:hover:not(.is-selected):not(:focus-visible) {
    background: transparent;
    color: var(--text-muted);
  }

  .moments-memories-view
  .moments-memories-date-day.is-today:hover:not(.is-selected):not(:focus-visible) {
    color: color-mix(in srgb, var(--moments-accent) 72%, var(--text-muted));
  }

  .moments-view
  .moments-timeline-header-action:hover:not(:focus-visible)
  .moments-timeline-header-action-icon,
  .moments-view
  .moments-timeline-header-action:hover:not(:focus-visible)
  .moments-timeline-header-action-arrow {
    color: color-mix(in srgb, var(--moments-accent) 68%, var(--text-muted));
  }
}

@media (prefers-reduced-motion: reduce) {
  .moments-view .moments-publish-echo-text {
    animation: none;
    background: none;
    color: var(--moments-publish-echo-text-color);
  }

  .moments-view .moments-publish-echo-arrow {
    animation: none;
  }
}
`;var qt=`
/* Phone-specific Calendar review layout. Kept separate so month/year review
   density can evolve without touching the broader mobile visual system. */

/* Month/year review are summary surfaces. If text + image + audio all coexist,
   keep text and image as the summary on every platform; audio remains in Detail. */
.moments-calendar-view .moments-calendar-review-fragment.is-month.has-image.has-text.has-audio .moment-audio-chip,
.moments-calendar-view .moments-calendar-review-fragment.is-year.has-image.has-text.has-audio .moment-audio-chip {
  display: none;
}

@media (max-width: 720px) {
  /* Day view intentionally keeps at most two tags on phone. */
  .moments-calendar-view .moments-calendar-day-panel .moment-meta {
    max-height: 22px;
    flex-wrap: nowrap;
    overflow: hidden;
  }

  .moments-calendar-view .moments-calendar-day-panel .moment-meta > .moment-meta-pill:nth-child(n + 3) {
    display: none;
  }

  .moments-calendar-view .moments-calendar-day-panel .moment-meta-pill {
    max-width: calc(50% - 2px);
    flex: 0 1 auto;
  }

  .moments-calendar-view .moments-calendar-month-fragment-grid {
    grid-template-columns: 1fr !important;
    grid-template-rows: none !important;
    grid-auto-rows: minmax(118px, auto);
    gap: 10px;
  }

  .moments-calendar-view .moments-calendar-review-fragment.is-month {
    min-height: 118px;
    padding: 11px 12px;
  }

  .moments-calendar-view .moments-calendar-review-fragment-month-main.has-image {
    grid-template-columns: 84px minmax(0, 1fr);
    column-gap: 12px;
  }

  .moments-calendar-view .moments-calendar-review-fragment-month-main .moments-calendar-review-fragment-media {
    width: 84px;
    height: 63px;
    align-self: center;
  }

  .moments-calendar-view .moments-calendar-review-fragment.is-month .moments-calendar-review-fragment-text,
  .moments-calendar-view .moments-calendar-review-fragment.is-year .moments-calendar-review-fragment-text {
    -webkit-line-clamp: 4;
  }

  /* Audio is secondary metadata on phone rather than a large pill CTA. */
  .moments-calendar-view .moments-calendar-review-fragment.is-month .moment-audio-chip,
  .moments-calendar-view .moments-calendar-review-fragment.is-year .moment-audio-chip {
    width: auto;
    max-width: 100%;
    min-height: 24px;
    height: 24px;
    margin-top: 5px;
    padding: 1px 7px;
    gap: 4px;
    border: 1px solid color-mix(in srgb, var(--moments-accent) 30%, var(--moments-border-soft));
    border-radius: 7px;
    background: transparent;
    color: var(--text-muted);
    box-shadow: none;
    font-size: var(--font-ui-smaller);
    font-weight: 400;
    line-height: 1;
  }

  .moments-calendar-view .moments-calendar-review-fragment.is-month .moment-audio-chip:hover,
  .moments-calendar-view .moments-calendar-review-fragment.is-month .moment-audio-chip:focus-visible,
  .moments-calendar-view .moments-calendar-review-fragment.is-year .moment-audio-chip:hover,
  .moments-calendar-view .moments-calendar-review-fragment.is-year .moment-audio-chip:focus-visible {
    background: color-mix(in srgb, var(--moments-accent-soft) 32%, transparent);
  }

  .moments-calendar-view .moments-calendar-review-fragment.is-month .moment-audio-chip-icon,
  .moments-calendar-view .moments-calendar-review-fragment.is-month .moment-audio-chip-icon svg,
  .moments-calendar-view .moments-calendar-review-fragment.is-year .moment-audio-chip-icon,
  .moments-calendar-view .moments-calendar-review-fragment.is-year .moment-audio-chip-icon svg {
    width: 12px;
    height: 12px;
  }
}

/* Keep the year timeline on narrow phones, but reclaim enough width for text. */
@media (max-width: 430px) {
  .moments-calendar-view .moments-calendar-review-fragment.is-year {
    grid-template-columns: 30px 14px minmax(0, 1fr);
    gap: 6px;
  }

  .moments-calendar-view .moments-calendar-review-fragment-year-main.has-image {
    grid-template-columns: 64px minmax(0, 1fr);
    gap: 8px;
  }

  .moments-calendar-view .moments-calendar-review-fragment-year-main .moments-calendar-review-fragment-media {
    width: 64px;
    height: 48px;
  }

  .moments-calendar-view .moments-calendar-review-fragment.is-year .moments-calendar-review-fragment-text {
    -webkit-line-clamp: 3;
  }
}
`;var Xt=`
/* Mobile interaction fixes kept separate from the frozen visual system. */

/* Inline editor: match Detail's single-row date/action alignment. */
.moments-view .moment-edit-heading {
  align-items: center;
  flex-wrap: nowrap;
}

.moments-view .moment-edit-heading > div:first-child {
  display: flex;
  min-width: 0;
  align-items: baseline;
  flex-wrap: nowrap;
  gap: 7px;
  white-space: nowrap;
}

.moments-view .moment-edit-top-actions {
  align-self: center;
  flex: 0 0 auto;
  margin-left: auto;
  white-space: nowrap;
}

/* Mobile editor uses Obsidian's native scroll surface. No visualViewport height
   math, host scroll pinning, or nested keyboard-owned scroller. */

.moments-view .moments-back-to-top-label {
  display: none;
}

.moments-view .moments-selected-image-add {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 66px;
  width: 66px;
  height: 66px;
  min-height: 66px;
  padding: 0;
  border: 1px dashed color-mix(in srgb, var(--moments-accent) 28%, var(--moments-border-soft));
  border-radius: 8px;
  background: transparent;
  color: var(--text-muted);
  box-shadow: none;
}

.moments-view .moments-selected-image-add:hover,
.moments-view .moments-selected-image-add:focus-visible {
  border-color: color-mix(in srgb, var(--moments-accent) 52%, var(--moments-border-soft));
  background: var(--moments-accent-soft);
  color: var(--moments-accent-hover);
  outline: none;
}

.moments-view .moments-selected-image-add svg {
  width: 17px;
  height: 17px;
}

@media (max-width: 580px) {
  .moments-view .moment-edit-heading {
    align-items: center;
    gap: 8px;
  }

  .moments-view .moment-edit-heading > div:first-child {
    flex: 1 1 auto;
    min-width: 0;
  }

  .moments-view .moment-edit-top-actions {
    align-self: baseline;
    width: auto;
    margin: 0 0 0 auto;
  }

  /* Detail/Edit text actions use the same typography and baseline as weekday/time. */
  .moments-view .moment-detail-heading,
  .moments-view .moment-edit-heading {
    align-items: baseline;
  }

  .moments-view .moment-detail-actions,
  .moments-view .moment-edit-top-actions {
    align-self: baseline;
    gap: 0;
  }

  .moments-view .moment-detail-actions .moments-action-cluster-button,
  .moments-view .moment-edit-top-actions .moments-action-cluster-button {
    height: 30px;
    min-height: 30px;
    padding: 2px 5px;
    color: var(--text-muted);
    font-size: var(--font-ui-small);
    font-weight: 500;
    line-height: 1.35;
  }

  .moments-view .moment-detail-delete {
    width: 30px;
    min-width: 30px;
    padding: 0;
    margin-right: -2px;
  }

  .moments-view .moment-detail-edit {
    min-width: 0;
    padding-right: 4px;
    padding-left: 4px;
  }

  /* Inline Edit stays in normal document flow on phones. The Timeline
     ItemView.contentEl remains the only vertical scroller; mobile does not
     create an edit-only scroll surface. */
  .moments-timeline-view .moment-edit-content {
    resize: none;
  }

  /* Keep Timeline actions clear of Obsidian's floating mobile toolbar. */
  .moments-timeline-view {
    --moments-page-bottom: calc(150px + env(safe-area-inset-bottom, 0px));
  }

  /* Calendar pages also need room below month/year/day content on mobile. */
  .moments-calendar-view {
    --moments-page-bottom: calc(140px + env(safe-area-inset-bottom, 0px));
  }

  .moments-timeline-view .moments-timeline-footer {
    min-height: 158px;
  }

  .moments-timeline-view .moments-load-more {
    padding-bottom: 76px;
  }

  .moments-timeline-view .moments-back-to-top {
    right: 12px;
    bottom: calc(96px + env(safe-area-inset-bottom, 0px));
    width: auto;
    height: 32px;
    min-height: 32px;
    gap: 5px;
    padding: 0 10px;
    border: 1px solid color-mix(in srgb, var(--moments-accent) 52%, var(--moments-border-soft));
    border-radius: 999px;
    background: transparent;
    color: var(--moments-accent-hover);
    box-shadow: none;
    font-size: var(--font-ui-smaller);
    font-weight: 600;
    line-height: 1;
    backdrop-filter: none;
  }

  .moments-timeline-view .moments-back-to-top > span:first-child {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    line-height: 0;
  }

  .moments-timeline-view .moments-back-to-top svg {
    display: block;
    width: 13px;
    height: 13px;
  }

  .moments-timeline-view .moments-back-to-top-label {
    display: inline-flex;
    align-items: center;
    line-height: 1;
  }

  /* Keep the remove hit target comfortable while the visible dark control stays small. */
  .moments-view .moment-edit-image-remove {
    top: 0;
    right: 0;
    width: 36px;
    height: 36px;
    min-height: 36px;
    padding: 0;
    border: 0;
    background: transparent;
    box-shadow: none;
  }

  .moments-view .moment-edit-image-remove > span:first-child {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background: rgba(20, 20, 20, 0.62);
    color: #fff;
  }

  .moments-view .moment-edit-image-remove svg {
    width: 12px;
    height: 12px;
  }

  /* Composer/backfill selected-image remove uses a separate class from edit mode. */
  .moments-view .moments-selected-image-remove {
    top: 0;
    right: 0;
    width: 34px;
    height: 34px;
    min-height: 34px;
    padding: 0;
    border: 0;
    border-radius: 0;
    background: transparent;
    color: inherit;
    box-shadow: none;
    opacity: 1;
  }

  .moments-view .moments-selected-image-remove > span:first-child {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: rgba(20, 20, 20, 0.56);
    color: #fff;
    font-size: 13px;
    line-height: 1;
  }

  /* Seven-day Memories strip: ordinary days read as text; only selection gets a surface. */
  .moments-memories-view .moments-memories-date-days {
    gap: 1px;
  }

  .moments-memories-view .moments-memories-date-day {
    min-height: 50px;
    gap: 1px;
    padding: 4px 0 9px;
    border-radius: 9px;
    background: transparent;
  }

  .moments-memories-view .moments-memories-date-day:not(.is-selected) {
    background: transparent;
    font-weight: 400;
  }

  .moments-memories-view .moments-memories-date-day.is-selected {
    background: var(--moments-selected-surface);
  }

  /* Match the Calendar mobile ghost chevrons the user approved. */
  .moments-memories-view .moments-memories-date-shift {
    width: 32px;
    height: 32px;
    min-height: 32px;
    padding: 0;
    border: 0;
    border-radius: 8px;
    background: transparent;
    color: var(--text-muted);
    box-shadow: none;
  }

  .moments-memories-view .moments-memories-date-shift svg {
    width: 13px;
    height: 13px;
  }

  .moments-view .moments-loading p,
  .moments-memories-view .moments-memories-loading strong {
    color: var(--text-muted);
  }

  /* Mobile Composer is a balanced 2x2 tool grid plus one full-height primary CTA. */
  .moments-timeline-view .moments-composer-actions {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-template-rows: repeat(2, minmax(44px, auto));
    align-items: stretch;
    gap: 8px;
  }

  .moments-timeline-view .moments-composer-tools,
  .moments-timeline-view .moments-composer-submit-actions {
    display: contents;
  }

  .moments-timeline-view .moments-composer-tools .moments-tool-button:nth-child(1) {
    grid-column: 1;
    grid-row: 1;
  }

  .moments-timeline-view .moments-composer-tools .moments-tool-button:nth-child(2) {
    grid-column: 2;
    grid-row: 1;
  }

  .moments-timeline-view .moments-composer-tools .moments-tool-button:nth-child(3) {
    grid-column: 1;
    grid-row: 2;
  }

  .moments-timeline-view .moments-composer-tools .moments-tool-button:nth-child(4) {
    grid-column: 2;
    grid-row: 2;
  }

  .moments-timeline-view .moments-composer-submit-actions .moments-primary-button {
    grid-column: 3;
    grid-row: 1 / span 2;
    align-self: stretch;
    width: 100%;
    height: 100%;
    min-width: 0;
    min-height: 0;
    padding-right: 8px;
    padding-left: 8px;
  }

  /* Calendar navigation stays visually subordinate to the date/year label. */
  .moments-calendar-view .moments-calendar-toolbar,
  .moments-calendar-view .moments-calendar-year-toolbar {
    grid-template-columns: 32px auto 32px minmax(0, 1fr);
    gap: 6px;
  }

  .moments-calendar-view .moments-calendar-toolbar > .moments-calendar-icon-button,
  .moments-calendar-view .moments-calendar-year-toolbar > .moments-calendar-icon-button {
    width: 32px;
    height: 32px;
    min-height: 32px;
    padding: 0;
    border: 0;
    border-radius: 8px;
    background: transparent;
    color: var(--text-muted);
    box-shadow: none;
  }

  .moments-calendar-view .moments-calendar-toolbar > .moments-calendar-icon-button svg,
  .moments-calendar-view .moments-calendar-year-toolbar > .moments-calendar-icon-button svg {
    width: 13px;
    height: 13px;
  }

  /* Calendar month picker: one coordinated year control instead of three separate boxes. */
  .moments-calendar-view .moments-calendar-month-picker {
    width: min(268px, calc(100vw - 42px));
    padding: 10px;
    border-radius: 12px;
  }

  .moments-calendar-view .moments-calendar-month-picker-year {
    grid-template-columns: 32px minmax(0, 1fr) 32px;
    gap: 2px;
    margin-bottom: 10px;
    padding: 3px;
    border: 1px solid color-mix(in srgb, var(--moments-line) 72%, transparent);
    border-radius: 10px;
    background: color-mix(in srgb, var(--moments-warm-surface) 56%, var(--background-primary));
  }

  .moments-calendar-view .moments-calendar-year-step {
    width: 32px;
    height: 32px;
    min-height: 32px;
    padding: 0;
    border: 0;
    border-radius: 8px;
    background: transparent;
    color: var(--text-muted);
    box-shadow: none;
  }

  .moments-calendar-view .moments-calendar-year-step:hover,
  .moments-calendar-view .moments-calendar-year-step:focus-visible {
    border: 0;
    background: var(--moments-control-surface-hover);
    color: var(--text-normal);
  }

  .moments-calendar-view .moments-calendar-year-input {
    height: 32px;
    padding: 0 6px;
    border: 0;
    border-radius: 7px;
    background: transparent;
    box-shadow: none;
    font-size: 0.96rem;
    font-weight: 600;
    line-height: 32px;
  }

  .moments-calendar-view .moments-calendar-year-input:focus {
    border: 0;
    background: color-mix(in srgb, var(--moments-accent-soft) 60%, transparent);
    box-shadow: none;
  }

  .moments-calendar-view .moments-calendar-month-picker-grid {
    gap: 4px;
  }

  .moments-calendar-view .moments-calendar-month-option {
    min-height: 36px;
    border-radius: 8px;
  }
}


/* Shared compact audio chip across Timeline, Calendar and Memories on desktop and mobile. */
.moments-view .moment-audio-chip {
  width: auto;
  max-width: 100%;
  min-width: 0;
  min-height: 24px;
  height: 24px;
  margin-top: 5px;
  padding: 1px 7px;
  gap: 4px;
  border: 1px solid color-mix(in srgb, var(--moments-accent) 30%, var(--moments-border-soft));
  border-radius: 7px;
  background: transparent;
  color: var(--text-muted);
  box-shadow: none;
  font-size: var(--font-ui-smaller);
  font-weight: 400;
  line-height: 1;
  white-space: nowrap;
}

.moments-view .moment-audio-chip:hover,
.moments-view .moment-audio-chip:focus-visible {
  border-color: color-mix(in srgb, var(--moments-accent) 46%, var(--moments-border-soft));
  background: var(--moments-control-surface-hover);
  color: var(--text-normal);
  outline: none;
}

.moments-view .moment-audio-chip-icon,
.moments-view .moment-audio-chip-icon svg {
  width: 12px;
  height: 12px;
  flex: 0 0 12px;
}

/* On phones, Day / Month / Year all participate in one page-level scroll.
   Panels and review lists grow naturally instead of clipping or owning a nested scroller. */
@media (max-width: 720px) {
  .moments-calendar-view .moments-calendar-layout {
    align-items: start;
  }

  .moments-calendar-view .moments-calendar-month-panel,
  .moments-calendar-view .moments-calendar-day-panel,
  .moments-calendar-view .moments-calendar-year-panel,
  .moments-calendar-view .moments-calendar-review-panel {
    height: auto !important;
    max-height: none !important;
    overflow: visible !important;
  }

  .moments-calendar-view .moments-calendar-review-panel {
    grid-template-rows: auto auto auto !important;
  }

  .moments-calendar-view .moments-calendar-day-list,
  .moments-calendar-view .moments-calendar-review-fragments,
  .moments-calendar-view .moments-calendar-year-fragment-list,
  .moments-calendar-view .moments-calendar-backfill {
    height: auto !important;
    max-height: none !important;
    overflow: visible !important;
    scrollbar-gutter: auto;
  }

  .moments-calendar-view .moments-calendar-month-fragment-grid {
    height: auto !important;
    grid-template-columns: 1fr !important;
    grid-template-rows: none !important;
    grid-auto-rows: auto !important;
    gap: 10px;
  }

  .moments-calendar-view .moments-calendar-review-fragment.is-month {
    height: auto !important;
    min-height: 118px;
    padding: 11px 12px;
  }

  .moments-calendar-view .moments-calendar-review-fragment-month-main.has-image {
    grid-template-columns: 84px minmax(0, 1fr);
    column-gap: 12px;
  }

  .moments-calendar-view .moments-calendar-review-fragment-month-main .moments-calendar-review-fragment-media {
    width: 84px;
    height: 63px;
    align-self: center;
  }

  .moments-calendar-view .moments-calendar-year-grid {
    height: auto !important;
    grid-template-rows: none !important;
    grid-auto-rows: minmax(92px, auto);
  }

  .moments-calendar-view .moments-calendar-year-month {
    height: auto !important;
  }

  .moments-calendar-view .moments-calendar-review-fragment.is-month .moments-calendar-review-fragment-text,
  .moments-calendar-view .moments-calendar-review-fragment.is-year .moments-calendar-review-fragment-text {
    -webkit-line-clamp: 4;
  }
}

@media (hover: none) and (pointer: coarse) {
  .moments-view .moment-edit-image-remove:hover:not(:focus-visible),
  .moments-view .moments-selected-image-remove:hover:not(:focus-visible),
  .moments-memories-view .moments-memories-date-shift:hover:not(:focus-visible) {
    background: transparent;
  }

  .moments-memories-view .moments-memories-date-day:not(.is-selected):hover:not(:focus-visible) {
    background: transparent;
    color: var(--text-muted);
  }

  .moments-calendar-view .moments-calendar-toolbar > .moments-calendar-icon-button:hover:not(:focus-visible),
  .moments-calendar-view .moments-calendar-year-toolbar > .moments-calendar-icon-button:hover:not(:focus-visible),
  .moments-calendar-view .moments-calendar-year-step:hover:not(:focus-visible) {
    background: transparent;
    color: var(--text-muted);
  }
}
`;var Jt=`
/* Cross-platform responsive fixes that should stay independent from the frozen visual system. */

/* Image preview cells and the add-image cell must occupy the same square track. */
.moments-view .moments-selected-image,
.moments-view .moments-selected-image-add {
  flex: 0 0 66px;
  width: 66px;
  min-width: 66px;
  height: 66px;
  min-height: 66px;
  box-sizing: border-box;
  aspect-ratio: 1 / 1;
}

.moments-view .moment-edit-image-item,
.moments-view .moment-edit-image-add {
  width: 100%;
  max-width: none;
  min-width: 0;
  height: auto;
  box-sizing: border-box;
  aspect-ratio: 1 / 1;
  justify-self: stretch;
  align-self: stretch;
}

/* Detail, Memories and Calendar keep their page-level Back/Home action.
   Edit mode already has Cancel/Save, so it does not spend a separate row on navigation. */
.moments-view .moment-edit-shell > .moments-page-nav {
  display: none !important;
  min-height: 0 !important;
  height: 0 !important;
  margin: 0 !important;
  padding: 0 !important;
  overflow: hidden !important;
}

/* Keep Back / Return Home close to the top of the Moment page. The host mobile
   header already supplies generous breathing room, so the page itself should not
   add a second large top gap. */
.moments-view .moment-detail-shell,
.moments-memories-view .moments-memories-shell,
.moments-calendar-view .moments-calendar-shell {
  padding-top: 6px;
}

.moments-view .moments-page-nav {
  min-height: 24px;
  margin-bottom: 8px;
}

/* Edit/Save are the primary textual actions. Cancel/Delete stay quiet until hover. */
.moments-view .moment-detail-edit,
.moments-view .moment-edit-top-actions .moments-action-cluster-button.is-primary {
  color: var(--moments-accent) !important;
  font-weight: 600;
}

.moments-view .moment-detail-edit:hover,
.moments-view .moment-detail-edit:focus-visible,
.moments-view .moment-edit-top-actions .moments-action-cluster-button.is-primary:hover,
.moments-view .moment-edit-top-actions .moments-action-cluster-button.is-primary:focus-visible {
  color: var(--moments-accent-hover) !important;
}

.moments-view .moment-edit-top-actions .moments-action-cluster-button:not(.is-primary),
.moments-view .moment-detail-delete {
  color: var(--text-muted);
}

/* Audio preview/player: every control shares one 28px alignment box. This avoids
   Android WebView baseline differences between the mic, play/pause glyph and time. */
.moments-view .moments-selected-audio-item {
  display: grid;
  grid-template-columns: 28px minmax(0, 1fr) 28px;
  align-items: center;
  column-gap: 8px;
}

.moments-view .moments-selected-audio-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 28px;
  height: 28px;
  line-height: 0;
}

.moments-view .moments-selected-audio-icon svg {
  display: block;
  width: 16px;
  height: 16px;
}

.moments-view .moments-audio-control,
.moments-view .moments-selected-audio-player {
  width: 100%;
  min-width: 0;
  max-width: 100%;
}

.moments-view .moments-audio-control {
  display: grid;
  grid-template-columns: 28px minmax(0, 1fr) auto;
  align-items: center;
  gap: 8px;
}

.moments-view .moments-selected-audio-player {
  flex: none;
}

.moments-view .moments-audio-control-play {
  width: 28px;
  height: 28px;
  min-height: 28px;
  line-height: 0;
}

.moments-view .moments-audio-control-play > span:first-child,
.moments-view .moments-audio-control-play svg {
  display: block;
}

.moments-view .moments-audio-control-progress {
  width: 100%;
  min-width: 0;
  height: 4px;
  margin: 0;
  padding: 0;
  align-self: center;
}

.moments-view .moments-audio-control-time {
  min-width: 72px;
  height: 28px;
  line-height: 28px;
  white-space: nowrap;
  align-self: center;
}

.moments-view .moments-selected-audio-remove {
  display: inline-flex;
  grid-column: 3;
  align-items: center;
  justify-content: center;
  justify-self: end;
  align-self: center;
  width: 28px;
  min-width: 28px;
  height: 28px;
  min-height: 28px;
  line-height: 1;
}

@media (max-width: 580px) {
  /* Android WebView reserves real layout height for its horizontal scrollbar.
     Let the 66px preview row own exactly 66px and hide the native scrollbar while
     preserving swipe-to-scroll, so thumbnails/add-cell are never clipped. */
  .moments-view .moments-selected-images {
    height: 66px;
    min-height: 66px;
    padding: 0 14px;
    box-sizing: border-box;
    align-items: flex-start;
    scrollbar-width: none;
  }

  .moments-view .moments-selected-images::-webkit-scrollbar {
    display: none;
    width: 0;
    height: 0;
  }

  /* Keep the Timeline title and its Memories/Calendar shortcuts on one row.
     The title yields first; the shortcut group never wraps. */
  .moments-timeline-view .moments-composer-heading {
    min-width: 0;
    flex-wrap: nowrap;
    gap: 6px;
  }

  .moments-timeline-view .moments-composer-heading > .moments-sparkle {
    flex: 0 0 auto;
  }

  .moments-timeline-view .moments-composer-heading > span:not(.moments-sparkle) {
    min-width: 0;
    flex: 1 1 auto;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .moments-timeline-view .moments-timeline-header-actions {
    flex: 0 0 auto;
    margin-left: auto;
    gap: 8px;
    white-space: nowrap;
  }

  .moments-timeline-view .moments-timeline-header-action {
    flex: 0 0 auto;
  }

  /* Detail/Edit header on phones: date + actions share row one; weekday/time gets
     a dedicated second row. Inline nowrap styles are intentionally overridden. */
  .moments-view .moment-detail-heading,
  .moments-view .moment-edit-heading {
    display: grid !important;
    grid-template-columns: minmax(0, 1fr) auto;
    grid-template-rows: auto auto;
    align-items: baseline !important;
    column-gap: 8px;
    row-gap: 2px;
    flex-wrap: initial !important;
  }

  .moments-view .moment-detail-heading > div:first-child,
  .moments-view .moment-edit-heading > div:first-child {
    display: contents !important;
    white-space: normal !important;
  }

  .moments-view .moment-detail-heading .moment-detail-date,
  .moments-view .moment-edit-heading .moment-detail-date {
    grid-column: 1;
    grid-row: 1;
    min-width: 0;
    margin: 0;
    white-space: nowrap;
  }

  .moments-view .moment-detail-heading .moment-detail-time,
  .moments-view .moment-edit-heading .moment-detail-time {
    grid-column: 1;
    grid-row: 2;
    min-width: 0;
    margin: 0;
    white-space: nowrap;
  }

  .moments-view .moment-detail-time::before {
    content: none !important;
    display: none !important;
  }

  .moments-view .moment-detail-actions,
  .moments-view .moment-edit-top-actions {
    grid-column: 2;
    grid-row: 1;
    align-self: baseline !important;
    justify-self: end;
    width: auto;
    margin: 0 !important;
    white-space: nowrap;
  }

  /* Android can reserve a little more width for the time label. Keep the player
     fluid while the time and remove controls own fixed, non-overlapping columns. */
  .moments-view .moments-selected-audio-item {
    column-gap: 6px;
  }

  .moments-view .moments-audio-control {
    gap: 6px;
  }

  .moments-view .moments-audio-control-time {
    min-width: 62px;
  }
}
`;var Zt=`
/* 1.0.12: place the Memories Today action beside the title and tighten the
   vertical rhythm now that the action no longer occupies the date strip. */
.moments-memories-view .moments-memories-page-header {
  align-items: flex-end;
  margin-bottom: 14px;
}

.moments-memories-view .moments-memories-today-action {
  flex: 0 0 auto;
  align-self: flex-end;
  margin-left: auto;
  margin-bottom: 1px;
}

.moments-memories-view .moments-memories-date-strip {
  margin-bottom: 20px;
}

@media (max-width: 580px) {
  /* Android WebView no longer shows the native scrollbar, so give the image row
     its own breathing room instead of letting it visually touch the textarea. */
  .moments-view .moments-selected-images {
    margin-top: 10px;
    margin-bottom: 8px;
  }

  .moments-memories-view .moments-memories-page-header {
    margin-bottom: 10px;
  }

  .moments-memories-view .moments-memories-date-strip {
    margin-bottom: 16px;
  }

  /* 1.0.13: Timeline home no longer has a standalone page title above the
     composer. Cancel the old page-top reserve so moving Memories/Calendar into
     the composer heading also moves the whole home surface upward. */
  .moments-timeline-view:not(.moments-editor-open)
    > .moments-page-shell
    > .moments-composer-host:first-child {
    margin-top: calc(0px - var(--moments-page-top));
  }
}
`;var Qt=`
/* 1.0.23: Inline Edit returns to the browser-native single-scroller model.
   Timeline ItemView.contentEl is the only vertical scroll container; the
   edit shell/body stay in normal flow and never lock or own keyboard scroll. */
.moments-view.moments-timeline-view,
.moments-memories-view,
.moments-calendar-view {
  height: 100%;
  min-height: 0;
  overflow-x: hidden !important;
  overflow-y: auto !important;
}

.moments-memories-view .moments-memories-shell {
  display: block;
  height: auto;
  min-height: 100%;
  overflow: visible;
}

.moments-memories-view .moments-memories-list {
  display: grid;
  overflow: visible;
  overscroll-behavior: auto;
  scrollbar-gutter: auto;
  padding-right: 0;
}

/* Detail and Inline Edit now use the same page-level scrolling contract:
   normal document flow inside the Timeline contentEl. Browser focus reveal
   is allowed to scroll that one surface naturally on iOS/Android. */
.moments-timeline-view.moments-editor-open {
  position: static;
  height: 100%;
  min-height: 0;
  overflow-x: hidden !important;
  overflow-y: auto !important;
  overscroll-behavior: auto;
}

.moments-timeline-view.moments-editor-open .moment-edit-shell {
  position: static;
  inset: auto;
  display: block;
  width: min(var(--moments-page-width), calc(100% - (var(--moments-page-gutter) * 2)));
  height: auto;
  min-height: 100%;
  margin: 0 auto;
  padding: var(--moments-page-top) 0 var(--moments-page-bottom);
  box-sizing: border-box;
  overflow: visible;
}

.moments-timeline-view.moments-editor-open .moment-edit-scroll {
  display: block;
  min-height: 0;
  padding-bottom: 0;
  overflow: visible;
}

.moments-timeline-view.moments-editor-open .moment-edit-heading {
  position: static;
  z-index: auto;
  margin-top: 0;
  background: var(--background-primary);
}

.moments-timeline-view.moments-editor-open .moment-edit-body {
  display: block;
  min-height: 0;
  overflow: visible;
}

.moments-timeline-view.moments-editor-open .moment-edit-content {
  height: 128px;
  min-height: 128px;
}

/* Keep the floating Timeline \u201Cback to top\u201D control visually identical on
   desktop and mobile. Position still adapts on phones so it clears Obsidian's
   bottom toolbar, but the pill, label and icon treatment are shared. */
.moments-timeline-view .moments-back-to-top {
  width: auto;
  height: 32px;
  min-height: 32px;
  gap: 5px;
  padding: 0 10px;
  border: 1px solid color-mix(in srgb, var(--moments-accent) 52%, var(--moments-border-soft));
  border-radius: 999px;
  background: transparent;
  color: var(--moments-accent-hover);
  box-shadow: none;
  font-size: var(--font-ui-smaller);
  font-weight: 600;
  line-height: 1;
  backdrop-filter: none;
}

.moments-timeline-view .moments-back-to-top > span:first-child,
.moments-timeline-view .moments-back-to-top-label {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
}

.moments-timeline-view .moments-back-to-top svg {
  display: block;
  width: 13px;
  height: 13px;
}

@media (max-width: 580px) {
  .moments-view.moments-timeline-view,
  .moments-memories-view,
  .moments-calendar-view {
    --moments-page-top: 6px;
  }

  /* 16px prevents WebView text-field zoom. Keyboard focus reveal is native
     and may scroll the single contentEl surface as needed. */
  .moments-timeline-view.moments-editor-open .moment-edit input,
  .moments-timeline-view.moments-editor-open .moment-edit textarea {
    font-size: 16px;
    scroll-margin-top: 0;
  }
}
`;var en="moments-runtime-styles-v1",zn=`
/* Back-to-top uses one icon-only visual on every platform. Mobile keeps only
   its higher bottom offset so the control clears Obsidian's floating toolbar. */
.moments-view.moments-timeline-view .moments-back-to-top {
  width: 40px;
  min-width: 40px;
  height: 40px;
  min-height: 40px;
  gap: 0;
  padding: 0;
  border: 1px solid var(--moments-border-soft);
  border-radius: 50%;
  background: var(--moments-control-surface);
  color: var(--text-muted);
  box-shadow: 0 2px 8px rgba(50, 38, 28, 0.06);
  font-size: inherit;
  font-weight: inherit;
}

.moments-view.moments-timeline-view .moments-back-to-top:hover,
.moments-view.moments-timeline-view .moments-back-to-top:focus-visible {
  border-color: var(--moments-line);
  background: var(--moments-control-surface-hover);
  color: var(--text-normal);
}

.moments-view.moments-timeline-view .moments-back-to-top-label {
  display: none !important;
}

.moments-view.moments-timeline-view .moments-back-to-top svg {
  width: 17px;
  height: 17px;
}

@media (max-width: 580px) {
  .moments-view.moments-timeline-view .moments-back-to-top {
    right: 12px;
    bottom: calc(96px + env(safe-area-inset-bottom, 0px));
  }
}
`;function on(){for(let n of["moments-ui-polish-v1","moments-ui-polish-v2","moments-ui-polish-v3","moments-ui-polish-v4","moments-ui-polish-v5","moments-ui-polish-v6","moments-ui-polish-v7","moments-ui-polish-v8","moments-reference-visual-v1","moments-reference-visual-v2","moments-reference-visual-v3","moments-reference-visual-v4","moments-audio-feature-styles-v1","moments-timeline-navigation-styles-v1","moments-feature-styles-v1","moments-ui-polish-v9",en])document.getElementById(n)?.remove();let i=document.createElement("style");return i.id=en,i.textContent=`${Kt}
${Vt}
${Xt}
${qt}
${Jt}
${Zt}
${Qt}
${Gt}
${zn}`,document.head.appendChild(i),()=>i.remove()}function Ne(i){tn(i);let n=new MutationObserver(e=>{for(let t of e)for(let o of Array.from(t.addedNodes))o instanceof HTMLElement&&tn(o)});return n.observe(i,{childList:!0,subtree:!0}),()=>n.disconnect()}var Hn="[title], [data-tooltip-position], [aria-label]";function tn(i){nn(i);for(let n of Array.from(i.querySelectorAll(Hn)))nn(n)}var Nn=0;function nn(i){i.removeAttribute("title"),i.removeAttribute("data-tooltip-position");let n=i.getAttribute("aria-label");if(!n)return;let e=`moments-a11y-label-${++Nn}`,t=document.createElement("span");t.id=e,t.className="moments-visually-hidden",t.textContent=n,On(i)?i.appendChild(t):i.parentElement?.insertBefore(t,i),i.setAttribute("aria-labelledby",e),i.removeAttribute("aria-label")}function On(i){return!["INPUT","TEXTAREA","SELECT","IMG","AUDIO"].includes(i.tagName)}var W=require("obsidian");var Oe=class{constructor(n){this.index=n}getMonthReview(n,e){let t=this.index.all().filter(o=>{let a=S(o.createdAt);return a.year===n&&a.month-1===e}).sort(sn);return{year:n,month:e+1,momentCount:t.length,fragments:_n(t,6),...an(t)}}getYearReview(n){let e=this.index.all().filter(o=>S(o.createdAt).year===n),t=Array.from({length:12},(o,a)=>{let r=e.filter(s=>S(s.createdAt).month-1===a);return{month:a+1,momentCount:r.length,representative:Yn(r)}});return{year:n,momentCount:e.length,months:t,...an(e)}}};function _n(i,n){if(i.length<=n)return[...i];if(n<=1)return[i[0]];let e=[],t=new Set;for(let o=0;o<n;o+=1){let a=Math.round(o*(i.length-1)/(n-1));if(t.has(a))continue;t.add(a);let r=i[a];r&&e.push(r)}return e}function Yn(i){if(!i.length)return;let n=[...i].sort(sn);return n[Math.floor((n.length-1)/2)]}function an(i){return{commonTags:rn(i.flatMap(n=>n.tags)),commonLocations:rn(i.map(n=>n.location?.trim()).filter(n=>!!n))}}function rn(i){let n=new Map;for(let e of i){let t=e.trim();t&&n.set(t,(n.get(t)??0)+1)}return[...n.entries()].filter(([,e])=>e>=2).sort((e,t)=>t[1]-e[1]||e[0].localeCompare(t[0])).slice(0,3).map(([e])=>({label:e}))}function sn(i,n){return q(i.createdAt,n.createdAt)}var Y=require("obsidian");function _e(i,n,e={}){let t=i.createDiv({cls:`moments-audio-control${e.className?` ${e.className}`:""}`}),o=t.createEl("button",{cls:"moments-audio-control-play",attr:{type:"button"}}),a=o.createSpan();(0,Y.setIcon)(a,"play"),o.createSpan({cls:"moments-visually-hidden",text:"\u64AD\u653E\u6216\u6682\u505C\u8BED\u97F3"});let r=t.createEl("input",{type:"range",cls:"moments-audio-control-progress",attr:{min:"0",max:"1000",value:"0",step:"1"}}),s=t.createSpan({cls:"moments-audio-control-time"}),m=new Audio(n);m.preload="metadata";let l=e.durationMs&&e.durationMs>0?e.durationMs/1e3:void 0,d=()=>Number.isFinite(m.duration)&&m.duration>0?m.duration:l??0,c=()=>{let p=d(),u=Number.isFinite(m.currentTime)?m.currentTime:0;r.value=p>0?String(Math.min(1e3,Math.round(u/p*1e3))):"0",s.setText(`${ct(u)} / ${ct(p)}`),(0,Y.setIcon)(a,m.paused?"play":"pause")};return o.addEventListener("click",()=>{m.paused?m.play().catch(p=>{console.error("[Moments] Failed to play audio",p),new Y.Notice("\u8BED\u97F3\u64AD\u653E\u5931\u8D25\u3002")}):m.pause()}),r.addEventListener("input",()=>{let p=d();p<=0||(m.currentTime=Number(r.value)/1e3*p,c())}),m.addEventListener("loadedmetadata",c),m.addEventListener("durationchange",c),m.addEventListener("timeupdate",c),m.addEventListener("play",c),m.addEventListener("pause",c),m.addEventListener("ended",c),c(),{destroy:()=>{m.pause(),m.removeAttribute("src"),m.load()}}}function ke(i){return ct(Math.max(0,i)/1e3)}function ct(i){let n=Math.max(0,Math.round(Number.isFinite(i)?i:0)),e=Math.floor(n/60),t=String(n%60).padStart(2,"0");return`${e}:${t}`}var pe=class{constructor(n,e){this.app=n;this.logContext=e;this.activeAudio=null}render(n,e){if(!e.audio)return;let t=this.app.vault.getAbstractFileByPath(e.audio.path);if(!(t instanceof Y.TFile))return;let o=e.audio.durationMs,a=n.createEl("button",{cls:"moment-audio-chip",attr:{type:"button"}}),r=a.createSpan({cls:"moment-audio-chip-icon"});(0,Y.setIcon)(r,"play");let s=a.createSpan({text:o?ke(o):""}),m=new Audio(this.app.vault.getResourcePath(t));m.preload="metadata";let l=()=>(0,Y.setIcon)(r,m.paused?"play":"pause"),d=()=>{if(Number.isFinite(m.duration)&&m.duration>0){s.setText(ke(m.duration*1e3));return}s.setText(o?ke(o):"")};m.addEventListener("loadedmetadata",d),m.addEventListener("durationchange",d),m.addEventListener("play",l),m.addEventListener("pause",l),m.addEventListener("ended",()=>{l(),this.activeAudio===m&&(this.activeAudio=null)}),d(),a.addEventListener("click",c=>{c.stopPropagation(),m.paused?(this.stop(),this.activeAudio=m,m.play().catch(p=>{this.activeAudio===m&&(this.activeAudio=null),console.error(`[Moments] Failed to play ${this.logContext} audio`,p),new Y.Notice("\u8BED\u97F3\u64AD\u653E\u5931\u8D25\u3002"),l()})):(m.pause(),this.activeAudio===m&&(this.activeAudio=null))}),a.addEventListener("keydown",c=>c.stopPropagation())}stop(){this.activeAudio&&(this.activeAudio.pause(),this.activeAudio.currentTime=0,this.activeAudio=null)}};var z=require("obsidian");var mn=require("obsidian"),jn=new Set(["image/jpeg","image/png","image/webp","image/gif"]),Wn=new Set(["jpg","jpeg","png","webp","gif"]);function Ye(i,n){if(i<=0)return;let e=document.createElement("input");e.type="file",e.accept="image/*",e.multiple=!0,e.tabIndex=-1,e.style.position="fixed",e.style.left="-10000px",e.style.top="0",e.style.width="1px",e.style.height="1px",e.style.opacity="0",e.style.pointerEvents="none";let t=!1,o=()=>{t||(t=!0,e.remove())};e.addEventListener("change",()=>{let a=Array.from(e.files??[]),r=a.filter(Un);r.length<a.length&&new mn.Notice("\u76EE\u524D\u4EC5\u652F\u6301 JPEG\u3001PNG\u3001WebP\u3001GIF\uFF1BHEIC/HEIF \u8BF7\u5148\u8F6C\u6362\u540E\u518D\u6DFB\u52A0\u3002"),o(),n(r.slice(0,i))},{once:!0}),e.addEventListener("cancel",o,{once:!0}),document.body.appendChild(e);try{e.click()}catch(a){throw o(),a}}function Un(i){if(jn.has(i.type.toLowerCase()))return!0;let n=i.name.split(".").pop()?.toLowerCase();return n?Wn.has(n):!1}function je(i,n){let e=i.createDiv({cls:"moments-tag-editor"}),t=e.createDiv({cls:"moments-tag-list"}),a=e.createDiv({cls:"moments-tag-entry"}).createEl("input",{type:"text",cls:"moments-tag-input-enter-only",attr:{placeholder:"\u8F93\u5165\u6807\u7B7E\uFF0C\u6309Enter\u7ED3\u675F"}}),r=ne(n),s=()=>{t.empty();for(let l of r){let d=t.createSpan({cls:"moments-tag-chip"});d.createSpan({text:`#${l}`});let c=d.createEl("button",{cls:"moments-tag-remove",attr:{type:"button"}});c.createSpan({text:"\xD7",attr:{"aria-hidden":"true"}}),c.createSpan({cls:"moments-visually-hidden",text:`\u79FB\u9664\u6807\u7B7E ${l}`}),c.addEventListener("click",()=>{r=r.filter(p=>p!==l),s(),a.focus()})}},m=()=>{let l=ne([a.value]);l.length&&(r=ne([...r,...l]),a.value="",s(),a.focus())};return a.addEventListener("keydown",l=>{l.isComposing||l.key!=="Enter"||(l.preventDefault(),m())}),s(),{getTags:()=>[...r],focus:()=>a.focus()}}var he=class{constructor(n){this.service=n;this.selectedFiles=[];this.selectedAudio=null;this.selectedAudioPreviewUrl=null;this.mediaRecorder=null;this.recordingStream=null;this.recordingSessionId=0;this.recordingRequestPending=!1;this.audioPlayers=[]}beforeHostRender(){(this.isRecording()||this.recordingRequestPending)&&this.disposeRecording(),this.disposeAudioPlayers(),this.revokeSelectedAudioPreviewUrl()}dispose(){this.disposeRecording(),this.disposeAudioPlayers(),this.revokeSelectedAudioPreviewUrl()}render(n,e,t={}){let o=n.createDiv({cls:"moments-composer"}),a=o.createDiv({cls:"moments-composer-heading"});a.createSpan({cls:"moments-sparkle",text:"\u2723"}),a.createSpan({text:t.heading??"\u8FD9\u4E00\u523B\uFF0C\u60F3\u8BB0\u5F55\u4EC0\u4E48\uFF1F"});let r=null,s=null;if(t.targetDate){let w=o.createDiv({cls:"moments-composer-backfill-date"});w.createSpan({cls:"moments-composer-backfill-label",text:`${t.targetDate.getFullYear()}\u5E74${t.targetDate.getMonth()+1}\u6708${t.targetDate.getDate()}\u65E5`});let D=new Date,N=w.createDiv({cls:"moments-composer-backfill-time",attr:{"aria-label":"\u8865\u8BB0\u65F6\u95F4"}});r=N.createEl("input",{cls:"moments-composer-backfill-time-part",attr:{type:"text",inputmode:"numeric",maxlength:"2",value:String(D.getHours()).padStart(2,"0"),"aria-label":"\u5C0F\u65F6"}}),N.createSpan({cls:"moments-composer-backfill-time-separator",text:":"}),s=N.createEl("input",{cls:"moments-composer-backfill-time-part",attr:{type:"text",inputmode:"numeric",maxlength:"2",value:String(D.getMinutes()).padStart(2,"0"),"aria-label":"\u5206\u949F"}}),ln(r,23,()=>s?.focus()),ln(s,59)}let m=o.createDiv({cls:"moments-composer-body"}),l=m.createEl("textarea",{cls:"moments-composer-textarea",attr:{placeholder:"\u8BB0\u5F55\u6B64\u523B\u7684\u60F3\u6CD5\u3001\u611F\u53D7\u6216\u53D1\u751F\u7684\u4E8B...",rows:"5"}}),d=m.createDiv({cls:"moments-selected-images"}),c=m.createDiv({cls:"moments-selected-audio"}),p=m.createDiv({cls:"moments-composer-meta-panel is-hidden"}),u=p.createDiv({cls:"moments-composer-meta-field is-hidden"}),f=u.createDiv({cls:"moments-composer-meta-label"}),v=f.createSpan();(0,z.setIcon)(v,"map-pin"),f.createSpan({text:"\u5730\u70B9"});let h=u.createEl("input",{type:"text",cls:"moments-inline-input moments-location-input",attr:{placeholder:"\u8F93\u5165\u5730\u70B9"}}),y=p.createDiv({cls:"moments-composer-meta-field is-hidden"}),b=y.createDiv({cls:"moments-composer-meta-label"}),j=b.createSpan();(0,z.setIcon)(j,"tag"),b.createSpan({text:"\u6807\u7B7E"});let R=je(y,[]),F=o.createDiv({cls:"moments-composer-actions"}),C=F.createDiv({cls:"moments-composer-tools"}),H=this.createToolButton(C,"image","\u56FE\u7247"),A=this.createToolButton(C,"mic","\u97F3\u9891"),V=this.createToolButton(C,"map-pin","\u5730\u70B9"),O=this.createToolButton(C,"tag","\u6807\u7B7E"),G=F.createDiv({cls:"moments-composer-submit-actions"}).createEl("button",{text:"\u53D1\u5E03",cls:"moments-primary-button",attr:{type:"button"}}),g=()=>{let w=l.value.trim().length>0,D=this.selectedFiles.length>0||this.selectedAudio!==null;G.disabled=this.isRecording()||this.recordingRequestPending||!w&&!D};l.addEventListener("input",g),this.renderSelectedImages(d,g),this.renderSelectedAudio(c,g),g(),H.addEventListener("click",()=>{this.appendSelectedImages(d,g)}),A.addEventListener("click",async()=>{if(!this.recordingRequestPending){if(this.isRecording()){A.disabled=!0,this.mediaRecorder?.stop();return}await this.startAudioRecording(A,c,g)}}),V.addEventListener("click",()=>{p.removeClass("is-hidden"),u.toggleClass("is-hidden",!u.hasClass("is-hidden")),V.toggleClass("is-active",!u.hasClass("is-hidden")),u.hasClass("is-hidden")||h.focus(),this.syncMetaPanelVisibility(p,u,y)}),O.addEventListener("click",()=>{p.removeClass("is-hidden"),y.toggleClass("is-hidden",!y.hasClass("is-hidden")),O.toggleClass("is-active",!y.hasClass("is-hidden")),y.hasClass("is-hidden")||R.focus(),this.syncMetaPanelVisibility(p,u,y)}),G.addEventListener("click",async()=>{let w=l.value.trim();if(!(!w&&this.selectedFiles.length===0&&!this.selectedAudio)){G.disabled=!0;try{let D=await this.service.create({content:w,location:h.value,tags:R.getTags(),images:this.selectedFiles,audio:this.selectedAudio??void 0,audioDurationMs:this.selectedAudioDurationMs,createdAt:t.targetDate?Kn(t.targetDate,r?.value,s?.value):void 0});this.clearDraft(),e(D)}catch(D){console.error("[Moments] Failed to create moment",D),new z.Notice("\u53D1\u5E03\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\u3002")}finally{g()}}})}clearDraft(){this.selectedFiles=[],this.selectedAudio=null,this.selectedAudioDurationMs=void 0,this.disposeRecording(),this.disposeAudioPlayers(),this.revokeSelectedAudioPreviewUrl()}createToolButton(n,e,t){let o=n.createEl("button",{cls:"moments-tool-button"}),a=o.createSpan({cls:"moments-tool-icon"});return(0,z.setIcon)(a,e),o.createSpan({cls:"moments-tool-label",text:t}),o}setToolButtonLabel(n,e){n.querySelector(".moments-tool-label")?.setText(e)}async startAudioRecording(n,e,t){if(!navigator.mediaDevices?.getUserMedia||typeof MediaRecorder>"u"){console.error("[Moments] Audio recording is not supported in this environment."),new z.Notice("\u5F53\u524D\u73AF\u5883\u4E0D\u652F\u6301\u5F55\u97F3\u3002");return}this.disposeRecording();let o=++this.recordingSessionId;this.recordingRequestPending=!0,n.disabled=!0,t();try{let a=await navigator.mediaDevices.getUserMedia({audio:!0});if(o!==this.recordingSessionId){this.releaseRecordingStream(a);return}let r=Vn(),s=r?new MediaRecorder(a,{mimeType:r}):new MediaRecorder(a),m=[],l=Date.now();this.recordingStream=a,this.mediaRecorder=s,this.recordingRequestPending=!1,s.addEventListener("dataavailable",d=>{d.data.size>0&&m.push(d.data)}),s.addEventListener("stop",()=>{if(o!==this.recordingSessionId){this.releaseRecordingStream(a);return}let d=Math.max(1,Date.now()-l),c=m.find(u=>u.type)?.type,p=s.mimeType||c||r||"audio/webm";if(m.length){let u=new Blob(m,{type:p});this.selectedAudio=Gn(u,p),this.selectedAudioDurationMs=d}else new z.Notice("\u672A\u5F55\u5230\u97F3\u9891\uFF0C\u8BF7\u91CD\u8BD5\u3002");this.releaseRecordingStream(a),this.mediaRecorder===s&&(this.mediaRecorder=null),this.recordingStream===a&&(this.recordingStream=null),n.disabled=!1,n.removeClass("is-active"),this.setToolButtonLabel(n,"\u97F3\u9891"),this.renderSelectedAudio(e,t),t()},{once:!0}),s.addEventListener("error",d=>{console.error("[Moments] Audio recording failed",d),new z.Notice("\u5F55\u97F3\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5\u3002")}),s.start(),n.disabled=!1,n.addClass("is-active"),this.setToolButtonLabel(n,"\u5F55\u97F3\u4E2D"),t()}catch(a){o===this.recordingSessionId&&(console.error("[Moments] Failed to access microphone",a),new z.Notice("\u65E0\u6CD5\u8BBF\u95EE\u9EA6\u514B\u98CE\uFF0C\u8BF7\u68C0\u67E5\u7CFB\u7EDF\u6743\u9650\u3002"),this.recordingRequestPending=!1,n.disabled=!1,n.removeClass("is-active"),this.setToolButtonLabel(n,"\u97F3\u9891"),t())}}isRecording(){return this.mediaRecorder?.state==="recording"}disposeRecording(){this.recordingSessionId+=1,this.recordingRequestPending=!1;let n=this.mediaRecorder;if(this.mediaRecorder=null,n&&n.state!=="inactive")try{n.stop()}catch{}this.recordingStream&&this.releaseRecordingStream(this.recordingStream),this.recordingStream=null}releaseRecordingStream(n){for(let e of n.getTracks())e.stop()}renderSelectedAudio(n,e){if(n.empty(),this.disposeAudioPlayers(),this.revokeSelectedAudioPreviewUrl(),!this.selectedAudio)return;let t=n.createDiv({cls:"moments-selected-audio-item"}),o=t.createSpan({cls:"moments-selected-audio-icon"});(0,z.setIcon)(o,"mic"),this.selectedAudioPreviewUrl=URL.createObjectURL(this.selectedAudio),this.audioPlayers.push(_e(t,this.selectedAudioPreviewUrl,{className:"moments-selected-audio-player",durationMs:this.selectedAudioDurationMs}));let a=t.createEl("button",{cls:"moments-selected-audio-remove",attr:{type:"button"}});a.createSpan({text:"\xD7",attr:{"aria-hidden":"true"}}),a.createSpan({cls:"moments-visually-hidden",text:"\u79FB\u9664\u5F55\u97F3"}),a.addEventListener("click",()=>{this.selectedAudio=null,this.selectedAudioDurationMs=void 0,this.renderSelectedAudio(n,e),e?.()})}disposeAudioPlayers(){for(let n of this.audioPlayers)n.destroy();this.audioPlayers=[]}revokeSelectedAudioPreviewUrl(){this.selectedAudioPreviewUrl&&(URL.revokeObjectURL(this.selectedAudioPreviewUrl),this.selectedAudioPreviewUrl=null)}appendSelectedImages(n,e){let t=M.maxImagesPerMoment,o=Math.max(0,t-this.selectedFiles.length);o<=0||Ye(o,a=>{a.length&&(this.selectedFiles=[...this.selectedFiles,...a].slice(0,t),this.renderSelectedImages(n,e),e?.())})}renderSelectedImages(n,e){if(n.empty(),!!this.selectedFiles.length&&(this.selectedFiles.forEach((t,o)=>{let a=n.createDiv({cls:"moments-selected-image"}),r=a.createEl("img",{attr:{alt:t.name}}),s=URL.createObjectURL(t);r.src=s,r.addEventListener("load",()=>URL.revokeObjectURL(s),{once:!0});let m=a.createEl("button",{cls:"moments-selected-image-remove",attr:{type:"button"}});m.createSpan({text:"\xD7",attr:{"aria-hidden":"true"}}),m.createSpan({cls:"moments-visually-hidden",text:`\u79FB\u9664\u56FE\u7247 ${t.name}`}),m.addEventListener("click",()=>{this.selectedFiles.splice(o,1),this.renderSelectedImages(n,e),e?.()})}),this.selectedFiles.length<M.maxImagesPerMoment)){let t=n.createEl("button",{cls:"moments-selected-image-add",attr:{type:"button"}}),o=t.createSpan();(0,z.setIcon)(o,"plus"),t.createSpan({cls:"moments-visually-hidden",text:"\u7EE7\u7EED\u6DFB\u52A0\u56FE\u7247"}),t.addEventListener("click",()=>{this.appendSelectedImages(n,e)})}}syncMetaPanelVisibility(n,e,t){e.hasClass("is-hidden")&&t.hasClass("is-hidden")&&n.addClass("is-hidden")}};function Vn(){return typeof MediaRecorder.isTypeSupported!="function"?void 0:["audio/webm;codecs=opus","audio/webm","audio/ogg;codecs=opus","audio/ogg","audio/mp4;codecs=mp4a.40.2","audio/mp4"].find(n=>MediaRecorder.isTypeSupported(n))}function Gn(i,n){let e=n.split(";")[0]||"audio/webm",t=e==="audio/ogg"?"ogg":e==="audio/mp4"?"m4a":"webm";return new File([i],`recording-${Date.now()}.${t}`,{type:e})}function ln(i,n,e){i.addEventListener("input",()=>{let t=i.value.replace(/\D/g,"").slice(0,2);i.value=t,t.length===2&&e?.()}),i.addEventListener("blur",()=>{i.value=dt(i.value,n)})}function dt(i,n){let e=Number.parseInt(i,10);return Number.isFinite(e)?String(Math.min(n,Math.max(0,e))).padStart(2,"0"):"00"}function Kn(i,n,e){let t=new Date(i),o=new Date,a=n===void 0?o.getHours():Number.parseInt(dt(n,23),10),r=e===void 0?o.getMinutes():Number.parseInt(dt(e,59),10);return t.setHours(a,r,0,0),t}var cn=require("obsidian");function X(i,n,e={}){let t=e.includeLocation??!0,o=e.includeTags??!0,a=t&&!!n.location,r=o?n.tags:[];if(!a&&!r.length)return;let s=i.createDiv({cls:`moment-meta${e.detail?" moment-meta-detail":""}`});a&&n.location&&ue(s,n.location),pt(s,r)}function pt(i,n){for(let e of n)i.createSpan({cls:"moment-meta-pill moment-tag"}).createSpan({text:`#${e}`})}function ue(i,n,e="moment-meta-pill moment-location"){let t=i.createSpan({cls:e}),o=t.createSpan({cls:"moment-meta-icon"});return(0,cn.setIcon)(o,"map-pin"),t.createSpan({text:n}),t}var We=require("obsidian");function J(i,n,e="moments-page-back",t="\u8FD4\u56DE\u9996\u9875"){let o=i.createEl("button",{cls:e,attr:{type:"button"}}),a=o.createSpan({cls:"moments-page-back-icon"});return(0,We.setIcon)(a,"arrow-left"),o.createSpan({text:t}),o.addEventListener("click",()=>void n()),o}function Ue(i,n){for(let e of n){let t=i.vault.getAbstractFileByPath(e.path);if(t instanceof We.TFile)return{image:e,file:t}}}function oe(i,n){n<=1||i.createSpan({cls:"moments-image-count-badge",text:String(n),attr:{"aria-label":`\u5171 ${n} \u5F20\u56FE\u7247`}})}function Z(i,n){i.tabIndex=0,i.setAttribute("role","button"),i.addEventListener("click",()=>void n()),i.addEventListener("keydown",e=>{e.key!=="Enter"&&e.key!==" "||(e.preventDefault(),n())})}function ie(i){return new Date(i.getFullYear(),i.getMonth(),1,12,0,0,0)}function dn(i,n){return new Date(i.getFullYear(),i.getMonth()+n,1,12,0,0,0)}function Ee(i,n){let e=new Date(i.getFullYear(),i.getMonth()+1,0,12,0,0,0).getDate(),t=Math.min(e,Math.max(1,Math.floor(n)));return new Date(i.getFullYear(),i.getMonth(),t,12,0,0,0)}function pn(i){let n=ie(i),e=new Date(n);return e.setDate(n.getDate()-n.getDay()),Array.from({length:42},(t,o)=>{let a=new Date(e);return a.setDate(e.getDate()+o),{date:a,dateKey:L(a),inCurrentMonth:a.getFullYear()===n.getFullYear()&&a.getMonth()===n.getMonth()}})}function Ve(i,n){return i.getFullYear()===n.getFullYear()&&i.getMonth()===n.getMonth()&&i.getDate()===n.getDate()}var ve="moments-calendar",qn=["\u65E5","\u4E00","\u4E8C","\u4E09","\u56DB","\u4E94","\u516D"],Xn=Array.from({length:12},(i,n)=>`${n+1}\u6708`),Ge=6,ge=class extends W.ItemView{constructor(e,t,o,a){super(e);this.service=t;this.openMoment=o;this.openTimeline=a;this.selectedDay=Ke();this.monthAnchor=ie(this.selectedDay);this.scale="day";this.monthPickerOpen=!1;this.composingForDay=null;this.monthReviewSelections=new Map;this.yearReviewSelections=new Map;this.review=new Oe(t.index),this.composer=new he(t),this.audioChips=new pe(this.app,"Calendar")}getViewType(){return ve}getDisplayText(){return"\u65E5\u5386"}getIcon(){return"calendar-days"}showToday(){this.goToToday()}async onOpen(){let e=this.service.onChanged(()=>this.render());this.unsubscribe=()=>this.service.off(e),this.render()}async onClose(){this.unsubscribe?.(),this.audioChips.stop(),this.composer.dispose()}render(){this.audioChips.stop(),this.composer.beforeHostRender();let{contentEl:e}=this;e.empty(),e.addClass("moments-view","moments-calendar-view");let t=e.createDiv({cls:"moments-calendar-shell"}),o=t.createDiv({cls:"moments-page-nav"});J(o,this.openTimeline),t.createDiv({cls:"moments-calendar-page-header"}).createEl("h1",{cls:"moments-calendar-title",text:"\u65E5\u5386"});let r=t.createDiv({cls:"moments-calendar-scale-row"});this.renderScaleSwitch(r);let s=t.createDiv({cls:`moments-calendar-layout is-${this.scale}`});if(this.scale==="year"){this.renderYearPanel(s),this.renderYearReview(s);return}this.renderMonthPanel(s),this.scale==="month"?this.renderMonthReview(s):this.renderSelectedDay(s)}renderScaleSwitch(e){let t=e.createDiv({cls:"moments-calendar-scale-switch"}),o=[{scale:"day",label:"\u65E5"},{scale:"month",label:"\u6708"},{scale:"year",label:"\u5E74"}];for(let a of o)t.createEl("button",{cls:`moments-calendar-scale-option${this.scale===a.scale?" is-active":""}`,text:a.label,attr:{type:"button"}}).addEventListener("click",()=>{this.scale!==a.scale&&this.setScale(a.scale)})}renderMonthPanel(e){let t=e.createDiv({cls:"moments-calendar-month-panel"}),o=t.createDiv({cls:"moments-calendar-toolbar"});this.createIconButton(o,"chevron-left","\u4E0A\u4E2A\u6708").addEventListener("click",()=>this.moveMonth(-1));let r=o.createDiv({cls:"moments-calendar-month-control"}),s=r.createEl("button",{cls:`moments-calendar-month-title${this.monthPickerOpen?" is-open":""}`,attr:{type:"button"}});s.createSpan({text:`${this.monthAnchor.getFullYear()}\u5E74${this.monthAnchor.getMonth()+1}\u6708`});let m=s.createSpan({cls:"moments-calendar-month-title-icon"});(0,W.setIcon)(m,"chevron-down"),s.addEventListener("click",()=>{this.monthPickerOpen=!this.monthPickerOpen,this.render()}),this.monthPickerOpen&&this.renderMonthPicker(r);let l=this.createIconButton(o,"chevron-right","\u4E0B\u4E2A\u6708");l.addClass("moments-calendar-next-month"),l.addEventListener("click",()=>this.moveMonth(1)),o.createEl("button",{cls:"moments-calendar-today",text:"\u4ECA\u5929",attr:{type:"button"}}).addEventListener("click",()=>this.goToToday());let c=t.createDiv({cls:"moments-calendar-weekdays"});for(let b of qn)c.createSpan({text:b});let p=this.monthAnchor.getFullYear(),u=this.monthAnchor.getMonth(),f=this.scale==="month"?this.getMonthReviewSelection(p,u,this.getMonthMoments(p,u)):void 0,v=t.createDiv({cls:"moments-calendar-grid"}),h=Ke();for(let b of pn(this.monthAnchor)){let j=this.service.index.forDate(b.dateKey),R=["moments-calendar-day",b.inCurrentMonth?"is-current-month":"is-outside-month",this.scale==="day"&&Ve(b.date,this.selectedDay)?"is-selected":"",Ve(b.date,h)?"is-today":""].filter(Boolean).join(" "),F=v.createEl("button",{cls:R,attr:{type:"button"}});F.createSpan({cls:"moments-calendar-day-number",text:String(b.date.getDate())}),F.createSpan({cls:"moments-visually-hidden",text:`${b.date.getFullYear()}\u5E74${be(b.date)}\uFF0C${j.length} \u6761\u8BB0\u5F55`});let C=f&&b.inCurrentMonth?f.filter(H=>{let A=S(H.createdAt);return A.year===b.date.getFullYear()&&A.month===b.date.getMonth()+1&&A.day===b.date.getDate()}):j;this.renderDayIndicator(F,j,C),F.addEventListener("click",()=>this.openDay(b.date))}let y=t.createDiv({cls:"moments-calendar-legend"});this.renderLegendItem(y,1,"1 \u6761\u8BB0\u5F55"),this.renderLegendItem(y,2,"2 \u6761\u8BB0\u5F55"),this.renderLegendItem(y,3,"3+ \u6761\u8BB0\u5F55")}renderMonthPicker(e){let t=e.createDiv({cls:"moments-calendar-month-picker"}),o=this.monthAnchor.getFullYear(),a=t.createDiv({cls:"moments-calendar-month-picker-year"}),r=this.createIconButton(a,"chevron-left","\u4E0A\u4E00\u5E74");r.addClass("moments-calendar-year-step");let s=a.createEl("input",{cls:"moments-calendar-year-input",attr:{type:"number",min:"1900",max:"9999",inputmode:"numeric",value:String(o)}}),m=this.createIconButton(a,"chevron-right","\u4E0B\u4E00\u5E74");m.addClass("moments-calendar-year-step");let l=c=>{o=Math.min(9999,Math.max(1900,c)),s.value=String(o)};r.addEventListener("click",()=>l(o-1)),m.addEventListener("click",()=>l(o+1)),s.addEventListener("input",()=>{let c=Number.parseInt(s.value,10);Number.isFinite(c)&&(o=Math.min(9999,Math.max(1900,c)))}),s.addEventListener("blur",()=>l(o));let d=t.createDiv({cls:"moments-calendar-month-picker-grid"});Xn.forEach((c,p)=>{let u=o===this.monthAnchor.getFullYear()&&p===this.monthAnchor.getMonth();d.createEl("button",{cls:`moments-calendar-month-option${u?" is-current":""}`,text:c,attr:{type:"button"}}).addEventListener("click",()=>this.jumpToMonth(o,p))})}renderDayIndicator(e,t,o=t){if(!t.length)return;let a=e.createDiv({cls:"moments-calendar-day-indicator"}),r=this.findRepresentativeImage(o);if(r){let m=a.createEl("img",{cls:"moments-calendar-day-image",attr:{alt:r.image.alt??""}});m.src=this.app.vault.getResourcePath(r.file)}let s=a.createSpan({cls:"moments-calendar-day-dots"});for(let m=0;m<Math.min(3,t.length);m+=1)s.createSpan({cls:"moments-calendar-dot"})}renderLegendItem(e,t,o){let a=e.createDiv({cls:"moments-calendar-legend-item"}),r=a.createSpan({cls:"moments-calendar-legend-dots"});for(let s=0;s<t;s+=1)r.createSpan({cls:"moments-calendar-dot"});a.createSpan({text:o})}renderSelectedDay(e){let t=e.createDiv({cls:"moments-calendar-day-panel"}),o=this.service.index.forDate(L(this.selectedDay)),a=t.createDiv({cls:"moments-calendar-day-panel-header"}),r=a.createDiv({cls:"moments-calendar-day-panel-title-row"});if(r.createEl("h2",{text:be(this.selectedDay)}),o.length&&!this.composingForDay&&r.createEl("button",{cls:"moments-calendar-add-button",text:"\uFF0B \u6DFB\u52A0",attr:{type:"button"}}).addEventListener("click",()=>{this.composingForDay=new Date(this.selectedDay),this.render()}),a.createDiv({cls:"moments-calendar-day-panel-summary",text:o.length?`${st(this.selectedDay)} \xB7 ${o.length} \u6761\u8BB0\u5F55`:st(this.selectedDay)}),this.composingForDay&&Ve(this.composingForDay,this.selectedDay)){let m=t.createDiv({cls:"moments-calendar-backfill"});this.composer.render(m,()=>{let l=this.composingForDay?new Date(this.composingForDay):new Date(this.selectedDay);this.composingForDay=null,this.selectedDay=l,this.monthAnchor=ie(this.selectedDay),this.render()},{targetDate:this.composingForDay,heading:"\u4F60\u8FD8\u8BB0\u5F97\u90A3\u5929\u53D1\u751F\u4E86\u4EC0\u4E48\uFF1F"});return}if(!o.length){let m=t.createDiv({cls:"moments-calendar-day-empty"});m.createEl("strong",{text:"\u4F60\u8FD8\u8BB0\u5F97\u90A3\u5929\u53D1\u751F\u4E86\u4EC0\u4E48\uFF1F"}),m.createEl("button",{cls:"moments-calendar-empty-add",text:"\uFF0B \u6DFB\u52A0",attr:{type:"button"}}).addEventListener("click",()=>{this.composingForDay=new Date(this.selectedDay),this.render()});return}let s=t.createDiv({cls:"moments-calendar-day-list"});for(let m of o)this.renderSelectedMoment(s,m)}renderMonthReview(e){let t=this.monthAnchor.getFullYear(),o=this.monthAnchor.getMonth(),a=this.review.getMonthReview(t,o),r=this.getMonthMoments(t,o),s=this.getMonthReviewSelection(t,o,r),m=e.createDiv({cls:"moments-calendar-review-panel moments-calendar-month-review"}),l=m.createDiv({cls:"moments-calendar-review-overview"}),d=l.createDiv({cls:"moments-calendar-review-title-row"});d.createEl("h2",{text:`${a.year}\u5E74${a.month}\u6708`}),r.length&&this.renderShuffleButton(d,()=>{this.monthReviewSelections.delete(this.monthSelectionKey(t,o)),this.render()}),r.length&&l.createDiv({cls:"moments-calendar-review-count",text:r.length<=Ge?`\u5168\u90E8 ${r.length} \u6761\u8BB0\u5F55`:`\u968F\u673A ${s.length} / ${r.length} \u6761\u8BB0\u5F55`});let p=m.createDiv({cls:"moments-calendar-review-fragments is-headingless"}).createDiv({cls:"moments-calendar-month-fragment-grid"});for(let f of s)this.renderReviewFragment(p,f,"month");let u=m.createDiv({cls:"moments-calendar-review-common"});this.renderReviewCountBlock(u,"tag","\u5E38\u63D0\u5230",a.commonTags,!0),this.renderReviewCountBlock(u,"map-pin","\u5E38\u53BB",a.commonLocations,!1)}renderYearPanel(e){let t=this.monthAnchor.getFullYear(),o=this.review.getYearReview(t),a=e.createDiv({cls:"moments-calendar-year-panel"}),r=a.createDiv({cls:"moments-calendar-year-toolbar"});this.createIconButton(r,"chevron-left","\u4E0A\u4E00\u5E74").addEventListener("click",()=>this.moveYear(-1)),r.createEl("button",{cls:"moments-calendar-year-current",text:String(t),attr:{type:"button"}}),this.createIconButton(r,"chevron-right","\u4E0B\u4E00\u5E74").addEventListener("click",()=>this.moveYear(1));let l=a.createDiv({cls:"moments-calendar-year-grid"}),d=Ke();for(let c of o.months){let p=t===d.getFullYear()&&c.month===d.getMonth()+1,u=l.createEl("button",{cls:["moments-calendar-year-month",c.momentCount?"has-moments":"",p?"is-current":""].filter(Boolean).join(" "),attr:{type:"button","aria-label":c.momentCount?`${t}\u5E74${c.month}\u6708\uFF0C${c.momentCount} \u6761\u8BB0\u5F55`:`${t}\u5E74${c.month}\u6708\uFF0C\u65E0\u8BB0\u5F55`}}),f=u.createSpan({cls:"moments-calendar-year-month-top"});f.createSpan({cls:"moments-calendar-year-month-name",text:`${c.month}\u6708`}),c.momentCount&&f.createSpan({cls:"moments-calendar-year-month-count",text:`${c.momentCount} \u6761`});let v=this.getYearReviewRepresentative(t,c.month-1),h=v?this.findRepresentativeImage([v]):void 0,y=u.createSpan({cls:"moments-calendar-year-month-media"});if(h){let b=y.createEl("img",{cls:"moments-calendar-year-month-image",attr:{alt:h.image.alt??""}});b.src=this.app.vault.getResourcePath(h.file)}u.addEventListener("click",()=>this.openMonth(t,c.month-1))}}renderYearReview(e){let t=this.monthAnchor.getFullYear(),o=this.review.getYearReview(t),a=o.months.map(p=>this.getYearReviewRepresentative(t,p.month-1)).filter(p=>!!p),r=e.createDiv({cls:"moments-calendar-review-panel moments-calendar-year-review"}),s=r.createDiv({cls:"moments-calendar-review-overview"}),m=s.createDiv({cls:"moments-calendar-review-title-row"});m.createEl("h2",{text:`${o.year}\u5E74`}),a.length&&(this.renderShuffleButton(m,()=>{for(let p=0;p<12;p+=1)this.yearReviewSelections.delete(this.monthSelectionKey(t,p));this.render()}),s.createDiv({cls:"moments-calendar-review-count",text:`\u6BCF\u6708\u968F\u673A 1 \u6761 \xB7 \u5171 ${a.length} \u6761`}));let d=r.createDiv({cls:"moments-calendar-review-fragments is-headingless"}).createDiv({cls:"moments-calendar-year-fragment-list"});for(let p of a)this.renderReviewFragment(d,p,"year");let c=r.createDiv({cls:"moments-calendar-review-common"});this.renderReviewCountBlock(c,"tag","\u5E38\u63D0\u5230",o.commonTags,!0),this.renderReviewCountBlock(c,"map-pin","\u5E38\u53BB",o.commonLocations,!1)}renderReviewFragment(e,t,o){let a=this.findRepresentativeImage([t]),r=e.createEl("button",{cls:["moments-calendar-review-fragment",`is-${o}`,a?"has-image":"",t.content?"has-text":"",t.audio?"has-audio":"",t.location?"has-location":""].filter(Boolean).join(" "),attr:{type:"button"}}),s=S(t.createdAt);if(o==="month"){let c=r.createSpan({cls:"moments-calendar-review-fragment-topline"});c.createSpan({cls:"moments-calendar-review-fragment-date",text:`${s.month}\u6708${s.day}\u65E5`}),t.location&&ue(c,t.location,"moments-calendar-moment-location moments-calendar-review-fragment-location")}else r.createSpan({cls:"moments-calendar-review-fragment-date",text:`${s.month}\u6708`}),r.createSpan({cls:"moments-calendar-year-timeline-rail"}).createSpan({cls:"moments-calendar-year-timeline-dot"});let m=o==="year"?r.createSpan({cls:"moments-calendar-review-fragment-year-content"}):r;if(o==="year"){let c=m.createSpan({cls:"moments-calendar-review-fragment-year-location-line"});t.location&&ue(c,t.location,"moments-calendar-moment-location moments-calendar-review-fragment-year-location")}let l=o==="year"?m.createSpan({cls:`moments-calendar-review-fragment-year-main${a?" has-image":""}`}):m.createSpan({cls:`moments-calendar-review-fragment-month-main${a?" has-image":""}`});if(a){let c=l.createSpan({cls:"moments-calendar-review-fragment-media"}),p=c.createEl("img",{cls:"moments-calendar-review-fragment-image",attr:{alt:a.image.alt??""}});p.src=this.app.vault.getResourcePath(a.file),oe(c,a.imageCount)}let d=l.createSpan({cls:"moments-calendar-review-fragment-body"});t.content&&d.createSpan({cls:"moments-calendar-review-fragment-text",text:t.content}),t.audio&&this.audioChips.render(d,t),r.addEventListener("click",()=>void this.openMoment(t.id))}renderReviewCountBlock(e,t,o,a,r){let s=e.createDiv({cls:"moments-calendar-review-common-block"});if(!a.length)return;let m=s.createDiv({cls:"moments-calendar-review-common-heading"}),l=m.createSpan();(0,W.setIcon)(l,t),m.createSpan({text:o});let d=s.createDiv({cls:`moments-calendar-review-common-list${r?" moment-meta":" is-locations"}`});if(r){pt(d,a.map(c=>c.label));return}for(let c of a)ue(d,c.label,"moments-calendar-moment-location moments-calendar-review-common-location")}renderSelectedMoment(e,t){let o=this.findRepresentativeImage([t]),a=e.createDiv({cls:`moments-calendar-moment${o?" has-images":""}`});Z(a,()=>this.openMoment(t.id)),a.createSpan({cls:"moments-visually-hidden",text:"\u67E5\u770B\u8BB0\u5F55\u8BE6\u60C5"});let r=a.createDiv({cls:"moments-calendar-moment-topline"});r.createDiv({cls:"moments-calendar-moment-time",text:de(t.createdAt)}),t.location&&ue(r,t.location,"moments-calendar-moment-location"),o&&this.renderMomentImage(a,o);let s=a.createDiv({cls:"moments-calendar-moment-body"});t.content&&s.createDiv({cls:"moments-calendar-moment-content",text:t.content}),t.audio&&this.audioChips.render(s,t),X(s,t,{includeLocation:!1})}renderMomentImage(e,t){let o=e.createDiv({cls:"moments-calendar-moment-thumb"}),a=o.createEl("img",{attr:{alt:t.image.alt??""}});a.src=this.app.vault.getResourcePath(t.file),oe(o,t.imageCount)}findRepresentativeImage(e){for(let t of e)for(let o of t.images){let a=this.app.vault.getAbstractFileByPath(o.path);if(a instanceof W.TFile)return{image:o,file:a,imageCount:t.images.length}}}getMonthMoments(e,t){return this.service.index.all().filter(o=>{let a=S(o.createdAt);return a.year===e&&a.month-1===t}).sort((o,a)=>q(o.createdAt,a.createdAt))}getMonthReviewSelection(e,t,o){if(o.length<=Ge)return[...o];let a=this.monthSelectionKey(e,t),r=this.selectionSignature(o),s=this.monthReviewSelections.get(a);if(s?.signature===r)return this.resolveCachedSelection(o,s.ids);let m=this.randomSample(o,Ge);return this.monthReviewSelections.set(a,{signature:r,ids:m.map(l=>l.id)}),m}getYearReviewRepresentative(e,t){let o=this.getMonthMoments(e,t);if(!o.length)return;if(o.length===1)return o[0];let a=this.monthSelectionKey(e,t),r=this.selectionSignature(o),s=this.yearReviewSelections.get(a);if(s?.signature===r)return o.find(l=>l.id===s.ids[0])??o[0];let m=o[Math.floor(Math.random()*o.length)]??o[0];if(m)return this.yearReviewSelections.set(a,{signature:r,ids:[m.id]}),m}randomSample(e,t){let o=[...e];for(let r=o.length-1;r>0;r-=1){let s=Math.floor(Math.random()*(r+1)),m=o[r],l=o[s];!m||!l||(o[r]=l,o[s]=m)}let a=new Set(o.slice(0,t).map(r=>r.id));return e.filter(r=>a.has(r.id))}resolveCachedSelection(e,t){let o=new Set(t),a=e.filter(r=>o.has(r.id));return a.length===t.length?a:this.randomSample(e,Ge)}selectionSignature(e){return e.map(t=>`${t.id}:${t.updatedAt}:${t.filePath}`).join("|")}monthSelectionKey(e,t){return`${e}-${t}`}renderShuffleButton(e,t){let o=e.createEl("button",{cls:"moments-calendar-add-button moments-calendar-shuffle-button",attr:{type:"button","aria-label":"\u6362\u4E00\u6362"}}),a=o.createSpan({cls:"moments-calendar-shuffle-icon"});(0,W.setIcon)(a,"shuffle"),o.createSpan({text:"\u6362\u4E00\u6362"}),o.addEventListener("click",r=>{r.stopPropagation(),t()})}createIconButton(e,t,o){let a=e.createEl("button",{cls:"moments-calendar-icon-button",attr:{type:"button"}}),r=a.createSpan();return(0,W.setIcon)(r,t),a.createSpan({cls:"moments-visually-hidden",text:o}),a}setScale(e){this.scale=e,this.monthPickerOpen=!1,this.composingForDay=null,e==="day"?this.monthAnchor=ie(this.selectedDay):e==="month"&&(this.selectedDay=Ee(this.monthAnchor,this.selectedDay.getDate())),this.render()}openDay(e){this.selectedDay=new Date(e),this.monthAnchor=ie(this.selectedDay),this.setScale("day")}openMonth(e,t){this.updateMonthSelection(e,t),this.setScale("month")}updateMonthSelection(e,t){let o=this.selectedDay.getDate();this.monthAnchor=new Date(e,t,1,12,0,0,0),this.selectedDay=Ee(this.monthAnchor,o)}moveMonth(e){let t=this.selectedDay.getDate();this.monthAnchor=dn(this.monthAnchor,e),this.selectedDay=Ee(this.monthAnchor,t),this.monthPickerOpen=!1,this.composingForDay=null,this.render()}moveYear(e){let t=this.monthAnchor.getFullYear()+e;this.monthAnchor=new Date(t,this.monthAnchor.getMonth(),1,12,0,0,0),this.selectedDay=Ee(this.monthAnchor,this.selectedDay.getDate()),this.monthPickerOpen=!1,this.composingForDay=null,this.render()}jumpToMonth(e,t){this.updateMonthSelection(e,t),this.monthPickerOpen=!1,this.composingForDay=null,this.render()}goToToday(){this.selectedDay=Ke(),this.monthAnchor=ie(this.selectedDay),this.monthPickerOpen=!1,this.composingForDay=null,this.render()}};function Ke(){let i=new Date;return new Date(i.getFullYear(),i.getMonth(),i.getDate(),12,0,0,0)}var Se=require("obsidian");var we="moments-memories",Jn=20,fe=class extends Se.ItemView{constructor(e,t,o,a){super(e);this.service=t;this.openMoment=o;this.openTimeline=a;this.selectedDay=Te(new Date);this.icon="history"}getViewType(){return we}getDisplayText(){return"\u56DE\u5FC6"}getIcon(){return"history"}showToday(){this.selectDay(Te(new Date))}async onOpen(){let e=this.service.onChanged(()=>this.render());this.unsubscribe=()=>this.service.off(e),this.render()}async onClose(){this.unsubscribe?.()}render(){let{contentEl:e}=this;e.empty(),e.addClass("moments-view","moments-memories-view");let t=e.createDiv({cls:"moments-memories-shell"}),o=t.createDiv({cls:"moments-page-nav"});J(o,this.openTimeline);let a=t.createDiv({cls:"moments-memories-page-header"});a.createEl("h1",{cls:"moments-memories-title",text:"\u56DE\u5FC6"}),this.renderTodayAction(a),this.renderDateNavigation(t),this.renderMemories(t)}renderTodayAction(e){let t=Te(new Date),o=eo(this.selectedDay,t),a=e.createEl("button",{cls:"moments-memories-today-action",text:"\u2197 \u4ECA\u5929",attr:{type:"button","aria-label":"\u56DE\u5230\u4ECA\u5929"}});if(o){a.style.visibility="hidden",a.style.pointerEvents="none",a.tabIndex=-1,a.setAttribute("aria-hidden","true");return}a.addEventListener("click",()=>this.selectDay(t))}renderDateNavigation(e){let t=e.createDiv({cls:"moments-memories-date-strip",attr:{"aria-label":"\u56DE\u5FC6\u65E5\u671F"}}),o=t.createEl("button",{cls:"moments-memories-date-shift",attr:{type:"button","aria-label":"\u4E0A\u4E00\u5468"}});(0,Se.setIcon)(o.createSpan(),"chevron-left"),o.addEventListener("click",()=>this.selectDay(Me(this.selectedDay,-7)));let a=t.createDiv({cls:"moments-memories-date-days"}),r=ce(Te(new Date));for(let m=-3;m<=3;m+=1){let l=Me(this.selectedDay,m),d=this.service.isInitialized&&this.resolveMemories(l).length>0,c=m===0,p=ce(l)===r,u=a.createEl("button",{cls:["moments-memories-date-day",c?"is-selected":"",p?"is-today":"",d?"has-memories":""].filter(Boolean).join(" "),attr:{type:"button","aria-label":be(l),"aria-current":c?"date":"false"}});u.createSpan({cls:"moments-memories-date-day-label",text:`${l.getMonth()+1}/${l.getDate()}`}),u.createSpan({cls:"moments-memories-date-day-sub-label",text:p?"\u4ECA\u5929":Zn(l)}),u.createSpan({cls:`moments-memories-date-day-dot${d?"":" is-empty"}`,attr:{"aria-hidden":"true"}}),u.addEventListener("click",()=>this.selectDay(l))}let s=t.createEl("button",{cls:"moments-memories-date-shift",attr:{type:"button","aria-label":"\u4E0B\u4E00\u5468"}});(0,Se.setIcon)(s.createSpan(),"chevron-right"),s.addEventListener("click",()=>this.selectDay(Me(this.selectedDay,7)))}selectDay(e){this.selectedDay=Te(e),this.render(),this.contentEl.scrollTo({top:0,behavior:"auto"})}renderMemories(e){if(!this.service.isInitialized){let a=e.createDiv({cls:"moments-memories-empty moments-memories-loading"});a.createEl("strong",{text:"\u6B63\u5728\u8F7D\u5165\u8BB0\u5F55\u2026"}),a.createSpan({text:"\u6B63\u5728\u6574\u7406\u4F60\u7684\u56DE\u5FC6\u3002"});return}let t=this.resolveMemories();if(!t.length){let a=e.createDiv({cls:"moments-memories-empty"});a.createEl("strong",{text:"\u56DE\u5FC6\u6B63\u5728\u5F62\u6210"}),a.createSpan({text:"\u7559\u4E0B 20 \u6761\u4EE5\u4E0A\u8BB0\u5F55\uFF0C\u5373\u53EF\u5F00\u542F\u56DE\u5FC6\u3002"});return}let o=e.createDiv({cls:"moments-memories-list"});for(let a of t){let r=o.createDiv({cls:"moments-memory-year-group"});r.createEl("h2",{cls:"moments-memory-year-heading",text:a.label});let s=r.createDiv({cls:"moments-memory-cards"});for(let m of a.moments)this.renderMemoryCard(s,m)}}resolveMemories(e=this.selectedDay){if(this.service.index.all().length<Jn)return[];let t=this.resolveYearGroups(e);if(t.length)return t;let o=hn(e);if(o){let a=this.resolveMonthGroups(o);if(a.length)return a;let r=this.resolveWeekGroups(o);if(r.length)return r;let s=this.resolveRecentGroups(o);if(s.length)return s}return[]}resolveYearGroups(e){let t=new Date().getFullYear(),o=new Map;for(let a of this.service.index.forMonthDay(ce(e))){let r=S(a.createdAt).year;if(r>=t)continue;let s=t-r,m=o.get(s)??[];m.push(a),o.set(s,m)}return[...o.keys()].sort((a,r)=>a-r).map(a=>({label:`${a}\u5E74\u524D`,moments:o.get(a)??[]}))}resolveMonthGroups(e){let t=[],o=L(new Date);for(let a=1;a<=11;a+=1){let r=Qn(e,-a);if(L(r)>=o)continue;let s=this.service.index.forDate(L(r));s.length&&t.push({label:`${a}\u4E2A\u6708\u524D`,moments:s})}return t}resolveWeekGroups(e){let t=[],o=L(new Date);for(let a=1;a<=8;a+=1){let r=Me(e,-(a*7));if(L(r)>=o)continue;let s=this.service.index.forDate(L(r));s.length&&t.push({label:`${a}\u5468\u524D`,moments:s})}return t}resolveRecentGroups(e){let t=L(new Date),o=L(e),a=o<t?o:t,r=this.service.index.all().find(s=>B(s.createdAt)<a);return r?[{label:"\u6700\u8FD1",moments:this.service.index.forDate(B(r.createdAt))}]:[]}renderMemoryCard(e,t){let o=Ue(this.app,t.images),a=!!o,r=e.createDiv({cls:`moments-memory-card moment-card-clickable${a?"":" is-text-only"}`});if(Z(r,()=>this.openMoment(t.id)),o){let d=r.createDiv({cls:"moments-memory-card-media"}),c=d.createEl("img",{cls:"moments-memory-card-image",attr:{alt:o.image.alt??""}});c.src=this.app.vault.getResourcePath(o.file),oe(d,t.images.length)}let s=r.createDiv({cls:"moments-memory-card-body"});s.createDiv({cls:"moments-memory-card-date",text:[te(t.createdAt),Lt(t.createdAt)].join(" \xB7 ")}),t.content&&s.createEl("p",{cls:"moments-memory-card-content",text:t.content});let l=s.createDiv({cls:"moments-memory-card-footer"}).createDiv();X(l,t)}};function hn(i){let n=new Date().getFullYear(),e=new Date(n,i.getMonth(),i.getDate(),12,0,0,0);return e.getMonth()===i.getMonth()&&e.getDate()===i.getDate()?e:null}function Zn(i){return Pt(hn(i)??i)}function Qn(i,n){let e=new Date(i.getFullYear(),i.getMonth()+n,1,12,0,0,0),t=new Date(e.getFullYear(),e.getMonth()+1,0,12,0,0,0).getDate();return new Date(e.getFullYear(),e.getMonth(),Math.min(i.getDate(),t),12,0,0,0)}function Te(i){return new Date(2e3,i.getMonth(),i.getDate(),12,0,0,0)}function eo(i,n){return ce(i)===ce(n)}var ae=require("obsidian");var Q=require("obsidian");var Ae=require("obsidian");function qe(i,n,e,t={}){if(!e.audio)return null;let o=i.vault.getAbstractFileByPath(e.audio.path);if(!(o instanceof Ae.TFile))return null;let a=n.createDiv({cls:"moment-detail-audio"}),r=a.createDiv({cls:"moment-detail-audio-heading"}),s=r.createSpan();if((0,Ae.setIcon)(s,"mic"),r.createSpan({text:e.audio.durationMs?`\u8BED\u97F3 \xB7 ${ke(e.audio.durationMs)}`:"\u8BED\u97F3"}),t.onRemove){let m=r.createEl("button",{cls:"moment-edit-audio-remove",attr:{type:"button","aria-label":"\u79FB\u9664\u8BED\u97F3"}}),l=m.createSpan();(0,Ae.setIcon)(l,"x"),m.addEventListener("click",t.onRemove)}return _e(a,i.vault.getResourcePath(o),{className:"moment-detail-audio-player",durationMs:e.audio.durationMs})}var Xe=class{constructor(n,e){this.app=n;this.service=e;this.audioPlayers=[]}beforeHostRender(){this.disposeAudioPlayers()}dispose(){this.disposeAudioPlayers()}render(n,e,t){let o=n.createDiv({cls:"moments-page-shell moment-detail-shell"}),a=o.createDiv({cls:"moments-page-nav moment-detail-nav"});J(a,t.onBack,"moments-page-back moment-detail-back","\u8FD4\u56DE");let r=o.createEl("article",{cls:"moment-detail"}),s=r.createDiv({cls:"moment-detail-heading"});s.style.alignItems="baseline",s.style.flexWrap="nowrap";let m=s.createDiv();m.style.display="flex",m.style.alignItems="baseline",m.style.flexWrap="nowrap",m.style.minWidth="0",m.style.whiteSpace="nowrap",m.style.gap="7px",m.createEl("h1",{cls:"moment-detail-date",text:te(e.createdAt)});let l=m.createDiv({cls:"moment-detail-time",text:Ce(e.createdAt)});l.style.fontSize="var(--font-ui-small)",l.style.fontWeight="500";let d=s.createDiv({cls:"moments-action-cluster moment-detail-actions"});d.style.alignSelf="baseline",d.style.whiteSpace="nowrap";let c=d.createEl("button",{cls:"moments-action-cluster-button is-danger moment-detail-delete",attr:{type:"button"}}),p=c.createSpan({cls:"moment-detail-delete-icon"});(0,Q.setIcon)(p,"trash-2"),c.createSpan({cls:"moments-visually-hidden",text:"\u5220\u9664 Moment"}),c.addEventListener("click",async()=>{c.disabled=!0;try{await this.service.delete(e),t.onDeleted()}catch(h){console.error("[Moments] Failed to delete moment",h),new Q.Notice("\u5220\u9664\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\u3002"),c.disabled=!1}}),d.createEl("button",{cls:"moments-action-cluster-button moment-detail-edit",text:"\u7F16\u8F91"}).addEventListener("click",t.onEdit),e.content&&r.createDiv({cls:"moment-detail-content",text:e.content});let f=qe(this.app,r,e);f&&this.audioPlayers.push(f),this.renderDetailImages(r,e),X(r,e,{detail:!0});let v=r.createDiv({cls:"moment-detail-timestamps"});this.renderTimestamp(v,"\u521B\u5EFA\u4E8E",e.createdAt),to(e)&&this.renderTimestamp(v,"\u7F16\u8F91\u4E8E",e.updatedAt)}renderDetailImages(n,e){if(!e.images.length)return;let t=n.createDiv({cls:`moment-detail-carousel${e.images.length===1?" is-single":""}`}),o=t.createDiv({cls:"moment-detail-carousel-viewport",attr:{tabindex:"0",role:"region"}}),a=o.createDiv({cls:"moment-detail-carousel-track"}),r=(g,w=!1)=>{let D=e.images[g];if(!D)return;let N=a.createDiv({cls:"moment-detail-carousel-slide",attr:w?{"aria-hidden":"true"}:{role:"group"}});w||N.createSpan({cls:"moments-visually-hidden",text:`\u7B2C ${g+1} \u5F20\uFF0C\u5171 ${e.images.length} \u5F20`});let Pe=this.app.vault.getAbstractFileByPath(D.path);if(!(Pe instanceof Q.TFile)){N.createDiv({cls:"moment-detail-carousel-missing",text:"\u56FE\u7247\u6587\u4EF6\u5DF2\u7F3A\u5931"});return}let $=N.createDiv({cls:"moment-detail-carousel-image-frame"}).createEl("img",{cls:"moment-detail-carousel-image",attr:{alt:D.alt??""}});$.src=this.app.vault.getResourcePath(Pe)};if(e.images.length===1){r(0);return}r(e.images.length-1,!0),e.images.forEach((g,w)=>r(w)),r(0,!0);let s=t.createDiv({cls:"moment-detail-carousel-counter",text:`1 / ${e.images.length}`,attr:{"aria-live":"polite"}}),m=t.createEl("button",{cls:"moment-detail-carousel-nav moment-detail-carousel-prev",attr:{type:"button"}});m.createSpan({cls:"moments-visually-hidden",text:"\u4E0A\u4E00\u5F20\u56FE\u7247"});let l=m.createSpan();(0,Q.setIcon)(l,"chevron-left");let d=t.createEl("button",{cls:"moment-detail-carousel-nav moment-detail-carousel-next",attr:{type:"button"}});d.createSpan({cls:"moments-visually-hidden",text:"\u4E0B\u4E00\u5F20\u56FE\u7247"});let c=d.createSpan();(0,Q.setIcon)(c,"chevron-right");let p=e.images.length,u=1,f=0,v=0,h=g=>g<=0?p-1:g>=p+1?0:g-1,y=g=>{u=Math.max(0,Math.min(p+1,g));let w=h(u);s.setText(`${w+1} / ${p}`)},b=g=>{let w=Math.max(1,o.clientWidth);o.classList.add("is-jumping"),o.scrollLeft=g*w,y(g),requestAnimationFrame(()=>o.classList.remove("is-jumping"))},j=()=>{u===0?b(p):u===p+1&&b(1)},R=()=>{v&&cancelAnimationFrame(v),v=requestAnimationFrame(()=>{v=0,j()})},F=(g,w="smooth")=>{let D=Math.max(0,Math.min(p+1,g)),N=Math.max(1,o.clientWidth);o.scrollTo({left:D*N,behavior:w}),y(D),(D===0||D===p+1)&&window.setTimeout(R,w==="smooth"?260:0)},C=g=>{F(u+g)};m.addEventListener("click",()=>C(-1)),d.addEventListener("click",()=>C(1)),o.addEventListener("keydown",g=>{g.key==="ArrowLeft"?(g.preventDefault(),C(-1)):g.key==="ArrowRight"&&(g.preventDefault(),C(1))}),o.addEventListener("scroll",()=>{f&&cancelAnimationFrame(f),f=requestAnimationFrame(()=>{f=0;let g=Math.max(1,o.clientWidth),w=Math.max(0,Math.min(p+1,Math.round(o.scrollLeft/g)));y(w);let D=w*g;Math.abs(o.scrollLeft-D)<1.5&&(w===0||w===p+1)&&R()})});let H=null,A=0,V=0,O=!1;o.addEventListener("pointerdown",g=>{g.pointerType!=="mouse"||g.button!==0||(H=g.pointerId,A=g.clientX,V=o.scrollLeft,O=!1)}),o.addEventListener("pointermove",g=>{if(H!==g.pointerId)return;let w=g.clientX-A;!O&&Math.abs(w)>6&&(O=!0,o.classList.add("is-dragging"),o.setPointerCapture(g.pointerId)),O&&(g.preventDefault(),o.scrollLeft=V-w)});let me=g=>{if(H!==g.pointerId)return;o.hasPointerCapture(g.pointerId)&&o.releasePointerCapture(g.pointerId),o.classList.remove("is-dragging"),H=null;let w=Math.max(1,o.clientWidth),D=Math.max(0,Math.min(p+1,Math.round(o.scrollLeft/w)));F(D)};o.addEventListener("pointerup",me),o.addEventListener("pointercancel",me);let G=()=>{if(o.clientWidth<=0){requestAnimationFrame(G);return}b(1)};G()}renderTimestamp(n,e,t){let o=n.createDiv({cls:"moment-detail-timestamp"});o.createSpan({cls:"moment-detail-timestamp-label",text:e}),o.createSpan({cls:"moment-detail-timestamp-value",text:Ft(t)})}disposeAudioPlayers(){for(let n of this.audioPlayers)n.destroy();this.audioPlayers=[]}};function to(i){return i.updatedAt!==i.createdAt}var U=require("obsidian");var Je=class{constructor(n,e){this.app=n;this.service=e;this.audioPlayers=[]}beforeHostRender(){this.editorHost?.removeClass("moments-editor-open"),this.editorHost=void 0,this.disposeAudioPlayers()}dispose(){this.editorHost?.removeClass("moments-editor-open"),this.editorHost=void 0,this.disposeAudioPlayers()}render(n,e,t){this.editorHost=n,n.addClass("moments-editor-open"),n.scrollTop=0;let o=n.createDiv({cls:"moments-page-shell moment-detail-shell moment-edit-shell"}),a=o.createDiv({cls:"moments-page-nav moment-detail-nav"});J(a,t.onBack,"moments-page-back moment-detail-back");let r=o.createDiv({cls:"moment-edit moment-edit-scroll"}),s=r.createDiv({cls:"moment-edit-heading"});s.style.alignItems="baseline",s.style.flexWrap="nowrap";let m=s.createDiv();m.style.display="flex",m.style.alignItems="baseline",m.style.flexWrap="nowrap",m.style.minWidth="0",m.style.whiteSpace="nowrap",m.style.gap="7px",m.createEl("h1",{cls:"moment-detail-date",text:te(e.createdAt)});let l=m.createDiv({cls:"moment-detail-time",text:Ce(e.createdAt)});l.style.fontSize="var(--font-ui-small)",l.style.fontWeight="500";let d=s.createDiv({cls:"moments-action-cluster moment-edit-top-actions"});d.style.alignSelf="baseline",d.style.whiteSpace="nowrap";let c=d.createEl("button",{text:"\u53D6\u6D88",cls:"moments-action-cluster-button",attr:{type:"button"}}),p=d.createEl("button",{text:"\u4FDD\u5B58",cls:"moments-action-cluster-button is-primary",attr:{type:"button"}}),u=r.createDiv({cls:"moment-edit-body"}),f=u.createEl("textarea",{cls:"moment-edit-content",attr:{rows:"5",placeholder:"\u8FD9\u4E00\u523B\u53D1\u751F\u4E86\u4EC0\u4E48\uFF1F"}});f.value=e.content;let v=[...e.images],h=[],y=u.createDiv({cls:"moment-edit-image-section"}),b=y.createDiv({cls:"moment-edit-image-header"});b.createEl("strong",{cls:"moment-edit-image-title",text:"\u56FE\u7247"});let j=b.createSpan({cls:"moment-edit-image-count"}),R=y.createDiv({cls:"moment-edit-image-grid"}),F=()=>{R.empty();let K=v.length+h.length;if(j.setText(`${K} / ${M.maxImagesPerMoment}`),v.forEach($=>{let _=this.app.vault.getAbstractFileByPath($.path);if(!(_ instanceof U.TFile))return;let ee=this.createEditableImageItem(R),le=ee.createEl("img",{cls:"moment-edit-image-thumb",attr:{alt:$.alt??""}});le.src=this.app.vault.getResourcePath(_),this.createImageRemoveButton(ee).addEventListener("click",()=>{v=v.filter(gt=>gt.path!==$.path),F()})}),h.forEach(($,_)=>{let ee=this.createEditableImageItem(R),le=ee.createEl("img",{cls:"moment-edit-image-thumb",attr:{alt:$.name}}),et=URL.createObjectURL($);le.src=et,le.addEventListener("load",()=>URL.revokeObjectURL(et),{once:!0}),this.createImageRemoveButton(ee).addEventListener("click",()=>{h.splice(_,1),F()})}),K<M.maxImagesPerMoment){let $=R.createEl("button",{cls:"moment-edit-image-add",attr:{type:"button"}}),_=$.createSpan();(0,U.setIcon)(_,"plus"),$.createSpan({cls:"moments-visually-hidden",text:"\u6DFB\u52A0\u56FE\u7247"}),$.addEventListener("click",()=>{let ee=Math.max(0,M.maxImagesPerMoment-v.length-h.length);Ye(ee,le=>{h=[...h,...le],F()})})}};F();let C=!1,H=u.createDiv({cls:"moment-edit-audio-host"}),A=null;A=qe(this.app,H,e,{onRemove:()=>{C=!0,A&&(A.destroy(),this.audioPlayers=this.audioPlayers.filter(K=>K!==A),A=null),H.empty()}}),A&&this.audioPlayers.push(A);let V=u.createDiv({cls:"moment-edit-fields"}),O=V.createDiv({cls:"moment-edit-field"}),me=O.createDiv({cls:"moment-edit-field-label"}),G=me.createSpan();(0,U.setIcon)(G,"map-pin"),me.createSpan({text:"\u5730\u70B9"});let g=O.createEl("input",{type:"text",attr:{placeholder:"\u8F93\u5165\u5730\u70B9"}});g.value=e.location??"";let w=V.createDiv({cls:"moment-edit-field"}),D=w.createDiv({cls:"moment-edit-field-label"}),N=D.createSpan();(0,U.setIcon)(N,"tag"),D.createSpan({text:"\u6807\u7B7E"});let Pe=je(w,e.tags);c.addEventListener("click",t.onCancel),p.addEventListener("click",async()=>{let K=f.value.trim(),$=!!(e.audio&&!C);if(!(!K&&v.length+h.length===0&&!$)){p.disabled=!0;try{await this.service.update(e,{content:K,location:g.value,tags:Pe.getTags(),keptImagePaths:v.map(_=>_.path),images:h,removeAudio:C}),t.onSaved()}catch(_){console.error("[Moments] Failed to update moment",_),new U.Notice("\u4FDD\u5B58\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\u3002")}finally{p.disabled=!1}}})}createEditableImageItem(n){return n.createDiv({cls:"moment-edit-image-item"})}createImageRemoveButton(n){let e=n.createEl("button",{cls:"moment-edit-image-remove",attr:{type:"button"}}),t=e.createSpan();return(0,U.setIcon)(t,"x"),e.createSpan({cls:"moments-visually-hidden",text:"\u79FB\u9664\u56FE\u7247"}),e}disposeAudioPlayers(){for(let n of this.audioPlayers)n.destroy();this.audioPlayers=[]}};var ut=require("obsidian");function ht(i){return Number.isFinite(i)?Math.max(1,Math.floor(i)):1}function un(i,n,e){let t=Math.max(0,Math.floor(n)),o=Math.max(0,Math.floor(i));return Math.min(t,o+ht(e))}var Ze=class{constructor(n,e){this.app=n;this.service=e;this.visibleMomentLimit=null;this.audioChips=new pe(n,"Timeline")}beforeHostRender(){this.audioChips.stop()}resetPagination(){this.visibleMomentLimit=null}dispose(){this.audioChips.stop()}render(n,e){let t=this.service.index.all(),o=ht(M.pageSize);this.visibleMomentLimit=Math.max(o,this.visibleMomentLimit??o);let a=t.slice(0,this.visibleMomentLimit);if(!a.length){let l=!this.service.isInitialized||this.service.isIndexing;n.createDiv({cls:`moments-empty${l?" moments-loading":""}`}).createEl("p",{text:l?"\u6B63\u5728\u8F7D\u5165\u8BB0\u5F55\u2026":"\u4ECE\u8BB0\u5F55\u8FD9\u4E00\u523B\u5F00\u59CB"});return}let r=new Map;for(let l of a){let d=B(l.createdAt),c=r.get(d)??[];c.push(l),r.set(d,c)}for(let[,l]of r){let d=n.createDiv({cls:"moments-day-section"});d.createDiv({cls:"moments-date-heading"}).createEl("h2",{text:At(l[0].createdAt)});let p=d.createDiv({cls:"moments-timeline-list"});for(let u of l)this.renderMomentRow(p,u,e.openMoment)}let s=a.length<t.length,m=a.length>o;if(s||m){let l=n.createDiv({cls:"moments-timeline-footer"});if(s){let d=l.createDiv({cls:"moments-load-more"});d.createDiv({cls:"moments-load-more-status",text:`\u5DF2\u663E\u793A ${a.length} / ${t.length} \u6761`});let c=d.createEl("button",{cls:"moments-load-more-button moments-inline-action",attr:{type:"button"}});c.createSpan({text:"\u52A0\u8F7D\u66F4\u591A"});let p=c.createSpan({cls:"moments-load-more-button-icon"});(0,ut.setIcon)(p,"chevron-down"),c.addEventListener("click",()=>{this.visibleMomentLimit=un(a.length,t.length,o),e.requestRender()})}if(m){let d=l.createEl("button",{cls:"moments-back-to-top",attr:{type:"button"}}),c=d.createSpan();(0,ut.setIcon)(c,"arrow-up"),d.createSpan({cls:"moments-back-to-top-label",text:"\u9876\u90E8"}),d.addEventListener("click",e.scrollToTop)}}}renderMomentRow(n,e,t){let o=n.createDiv({cls:"moment-row"});o.createDiv({cls:"moment-row-time",text:de(e.createdAt)}),o.createDiv({cls:"moment-row-rail"}).createSpan({cls:"moment-row-dot"});let r=Ue(this.app,e.images),s=!!r,m=["moment-card","moment-card-clickable"];m.push(s?"has-images":"is-text-only"),e.audio&&m.push("has-audio");let l=o.createDiv({cls:m.join(" ")});Z(l,()=>t(e.id)),r&&this.renderTimelineImagePreview(l,r.image,r.file,e.images.length);let d=l.createDiv({cls:"moment-card-body"});e.content&&d.createDiv({cls:"moment-content",text:e.content}),this.audioChips.render(d,e),X(d,e)}renderTimelineImagePreview(n,e,t,o){let r=n.createDiv({cls:"moment-card-thumb"}).createDiv({cls:"moment-card-thumb-cell"}),s=r.createEl("img",{attr:{alt:e.alt??""}});s.src=this.app.vault.getResourcePath(t),oe(r,o)}};var se="moments-timeline",gn=6e3,no=450,re=class extends ae.ItemView{constructor(e,t,o,a,r){super(e);this.service=t;this.memoryDiscovery=o;this.openMemories=a;this.openCalendar=r;this.selectedMomentId=null;this.detailOrigin="timeline";this.editing=!1;this.publishEcho=null;this.publishEchoExpiresAt=null;this.publishEchoFadeTimer=null;this.publishEchoRemoveTimer=null;this.composer=new he(t),this.home=new Ze(this.app,t),this.detail=new Xe(this.app,t),this.editor=new Je(this.app,t)}getViewType(){return se}getDisplayText(){return"\u8BB0\u5F55"}getIcon(){return"square-pen"}openMoment(e,t="timeline"){this.service.index.get(e)&&(this.selectedMomentId=e,this.detailOrigin=t,this.editing=!1,this.render())}showHome(){this.selectedMomentId=null,this.detailOrigin="timeline",this.editing=!1,this.dismissPublishEcho(),this.home.resetPagination(),this.render(),this.scrollHomeToTop()}scrollHomeToTop(){this.contentEl.scrollTo({top:0,behavior:"auto"})}async onOpen(){let e=this.service.onChanged(()=>{this.selectedMomentId&&!this.service.index.get(this.selectedMomentId)&&(this.selectedMomentId=null,this.editing=!1),this.publishEcho&&!this.service.index.get(this.publishEcho.momentId)&&(this.publishEcho=null,this.publishEchoExpiresAt=null),this.render()});this.unsubscribe=()=>this.service.off(e),this.render()}async onClose(){this.unsubscribe?.(),this.clearPublishEchoTimers(),this.composer.dispose(),this.home.dispose(),this.detail.dispose(),this.editor.dispose()}render(){this.clearPublishEchoTimers(),this.composer.beforeHostRender(),this.home.beforeHostRender(),this.detail.beforeHostRender(),this.editor.beforeHostRender();let{contentEl:e}=this;if(e.empty(),e.addClass("moments-view","moments-timeline-view"),this.selectedMomentId){let t=this.service.index.get(this.selectedMomentId);if(t){this.editing?this.editor.render(e,t,{onBack:()=>void this.returnFromMoment(),onCancel:()=>{this.editing=!1,this.render()},onSaved:()=>{this.editing=!1,this.render()}}):this.detail.render(e,t,{onBack:()=>void this.returnFromMoment(),onEdit:()=>{this.editing=!0,this.render()},onDeleted:()=>void this.returnFromMoment()});return}this.selectedMomentId=null,this.editing=!1}this.renderTimelineHome(e)}renderTimelineHome(e){let t=e.createDiv({cls:"moments-page-shell"}),o=t.createDiv({cls:"moments-composer-host"});this.composer.render(o,s=>{this.publishEcho=this.memoryDiscovery.getPublishEcho(s),this.publishEchoExpiresAt=this.publishEcho?Date.now()+gn:null,this.render()});let a=o.querySelector(".moments-composer"),r=a?.querySelector(".moments-composer-heading");r&&this.renderTimelineNavigation(r),this.renderPublishEcho(a??o),this.home.render(t,{openMoment:s=>this.openMoment(s),requestRender:()=>this.render(),scrollToTop:()=>this.contentEl.scrollTo({top:0,behavior:"smooth"})})}renderTimelineNavigation(e){let t=e.createDiv({cls:"moments-timeline-header-actions",attr:{"aria-label":"\u56DE\u987E\u5165\u53E3"}}),o=t.createEl("button",{cls:"moments-timeline-header-action",attr:{type:"button","aria-label":"\u524D\u5F80\u56DE\u5FC6"}}),a=o.createSpan({cls:"moments-timeline-header-action-icon"});(0,ae.setIcon)(a,"history"),o.createSpan({cls:"moments-timeline-header-action-label",text:"\u524D\u5F80\u56DE\u5FC6",attr:{"data-mobile-label":"\u56DE\u5FC6"}}),o.createSpan({cls:"moments-timeline-header-action-arrow",text:"\u2197",attr:{"aria-hidden":"true"}}),o.addEventListener("click",()=>void this.openMemories()),t.createDiv({cls:"moments-timeline-header-divider",attr:{"aria-hidden":"true"}});let r=t.createEl("button",{cls:"moments-timeline-header-action",attr:{type:"button","aria-label":"\u6253\u5F00\u65E5\u5386"}}),s=r.createSpan({cls:"moments-timeline-header-action-icon"});(0,ae.setIcon)(s,"calendar-days"),r.createSpan({cls:"moments-timeline-header-action-label",text:"\u6253\u5F00\u65E5\u5386",attr:{"data-mobile-label":"\u65E5\u5386"}}),r.createSpan({cls:"moments-timeline-header-action-arrow",text:"\u2197",attr:{"aria-hidden":"true"}}),r.addEventListener("click",()=>void this.openCalendar())}renderPublishEcho(e){if(!this.publishEcho)return;let t=this.publishEchoExpiresAt??Date.now()+gn;this.publishEchoExpiresAt=t;let o=t-Date.now();if(o<=0){this.publishEcho=null,this.publishEchoExpiresAt=null;return}let a=this.publishEcho,r=e.createDiv({cls:"moments-publish-echo is-clickable"});Z(r,()=>{this.dismissPublishEcho(),this.openMoment(a.momentId)}),r.createSpan({cls:"moments-publish-echo-mark",text:"\u2726"});let s=r.createSpan({cls:"moments-publish-echo-text"});if(a.type==="location"){s.createSpan({text:"\u4E0A\u4E00\u6B21\u5728"});let d=s.createSpan({cls:"moments-publish-echo-location"}),c=d.createSpan({cls:"moments-publish-echo-location-icon"});(0,ae.setIcon)(c,"map-pin"),d.createSpan({text:a.relationValue});let p=`\u4E0A\u4E00\u6B21\u5728${a.relationValue}`;s.createSpan({text:a.text.slice(p.length)})}else s.createSpan({text:a.text});let m=r.createSpan({cls:"moments-publish-echo-arrow",attr:{"aria-hidden":"true"}});(0,ae.setIcon)(m,"arrow-right");let l=Math.max(0,o-no);l===0?r.addClass("is-hiding"):this.publishEchoFadeTimer=window.setTimeout(()=>{this.publishEchoFadeTimer=null,r.isConnected&&r.addClass("is-hiding")},l),this.publishEchoRemoveTimer=window.setTimeout(()=>{this.publishEchoRemoveTimer=null,r.isConnected&&r.remove(),this.publishEcho===a&&(this.publishEcho=null,this.publishEchoExpiresAt=null)},o)}dismissPublishEcho(){this.clearPublishEchoTimers(),this.publishEcho=null,this.publishEchoExpiresAt=null}clearPublishEchoTimers(){this.publishEchoFadeTimer!==null&&(window.clearTimeout(this.publishEchoFadeTimer),this.publishEchoFadeTimer=null),this.publishEchoRemoveTimer!==null&&(window.clearTimeout(this.publishEchoRemoveTimer),this.publishEchoRemoveTimer=null)}async returnFromMoment(){let e=this.detailOrigin;this.selectedMomentId=null,this.detailOrigin="timeline",this.editing=!1;let t=e==="memories"?"moments-memories":e==="calendar"?"moments-calendar":null;if(t){let o=this.app.workspace.getLeavesOfType(t)[0];if(o){await this.app.workspace.revealLeaf(o);return}}this.render()}goToTimeline(){this.selectedMomentId=null,this.editing=!1,this.render()}};var oo=2500,Qe=class extends T.Plugin{constructor(){super(...arguments);this.data={memoryDiscovery:{}};this.passiveInitializationTimer=null;this.runtimeReady=!1;this.workspaceReady=!1;this.handleNavigationEntryClick=e=>{let t=e.target;if(!(t instanceof Element))return;let a=t.closest("[data-path]")?.getAttribute("data-path"),r=a?this.resolveNavigationTarget(a):void 0;r&&(e.preventDefault(),e.stopPropagation(),e.stopImmediatePropagation(),this.activateNavigationTarget(r))}}async onload(){await this.loadPluginData(),this.removeUiStyles=on(),this.app.workspace.onLayoutReady(()=>{this.workspaceReady=!0});let e=new Be(this.app);this.service=new He(e),this.memoryDiscovery=new $e(this.service.index,this.data.memoryDiscovery,()=>this.persistPluginData()),this.registerView(se,o=>{let a=new re(o,this.service,this.memoryDiscovery,()=>this.openTodayMemories(),()=>this.openTodayCalendar());return a.register(Ne(a.contentEl)),this.schedulePassiveRuntimeInitialization(),a}),this.registerView(we,o=>{let a=new fe(o,this.service,r=>this.openMoment(r,"memories"),()=>void this.activateTimeline());return a.register(Ne(a.contentEl)),this.schedulePassiveRuntimeInitialization(),a}),this.registerView(ve,o=>{let a=new ge(o,this.service,r=>this.openMoment(r,"calendar"),()=>void this.activateTimeline());return a.register(Ne(a.contentEl)),this.schedulePassiveRuntimeInitialization(),a});let t=this.addRibbonIcon("notebook-pen","Moment",()=>void this.activateTimeline());t.addClass("moments-ribbon-button"),t.removeAttribute("title"),t.removeAttribute("data-tooltip-position"),this.addCommand({id:"open-moments-timeline",name:"Open Moment",callback:()=>void this.activateTimeline()}),this.addCommand({id:"open-moments-memories",name:"Open Moment Memories",callback:()=>void this.activateMemories()}),this.addCommand({id:"open-moments-calendar",name:"Open Moment Calendar",callback:()=>void this.activateCalendar()}),this.isBetaBuild()&&this.addCommand({id:"import-beta-test-data-11",name:"Beta\uFF1A\u5BFC\u5165\u7EFC\u5408\u6D4B\u8BD5\u96C6 11",callback:()=>void this.runBetaTestDataImport()}),document.addEventListener("click",this.handleNavigationEntryClick,!0),this.register(()=>document.removeEventListener("click",this.handleNavigationEntryClick,!0)),this.registerEvent(this.app.workspace.on("file-open",o=>{!this.workspaceReady||!(o instanceof T.TFile)||this.handleNavigationFileFallback(o)})),this.registerEvent(this.app.metadataCache.on("changed",async o=>{!this.runtimeReady||!this.isMomentMarkdownFile(o)||await this.service.refreshFile(o)})),this.registerEvent(this.app.vault.on("create",async o=>{!this.runtimeReady||!(o instanceof T.TFile)||!this.isMomentMarkdownFile(o)||await this.service.refreshFile(o)})),this.registerEvent(this.app.vault.on("delete",o=>{!this.runtimeReady||!this.isMomentPath(o.path)||this.service.removeByPath(o.path)})),this.registerEvent(this.app.vault.on("rename",async(o,a)=>{this.runtimeReady&&(this.isMomentPath(a)&&this.service.removeByPath(a),o instanceof T.TFile&&this.isMomentMarkdownFile(o)&&await this.service.refreshFile(o))}))}onunload(){this.cancelPassiveRuntimeInitialization(),this.removeUiStyles?.(),this.app.workspace.detachLeavesOfType(ve),this.app.workspace.detachLeavesOfType(we),this.app.workspace.detachLeavesOfType(se)}async activateTimeline(){this.startRuntimeInitializationNow();let{workspace:e}=this.app,t=e.getLeavesOfType(se)[0]??null,o=t!==null;return t||(t=e.getLeaf(!0),await t.setViewState({type:se,active:!0})),await e.revealLeaf(t),t.view instanceof re&&(o?t.view.showHome():t.view.scrollHomeToTop()),t}async activateMemories(){return this.startRuntimeInitializationNow(),this.activateSingletonView(we)}async activateCalendar(){return this.startRuntimeInitializationNow(),this.activateSingletonView(ve)}async openMoment(e,t="timeline"){let o=await this.activateTimeline();o.view instanceof re&&o.view.openMoment(e,t)}async openTodayMemories(){let e=await this.activateMemories();e.view instanceof fe&&e.view.showToday()}async openTodayCalendar(){let e=await this.activateCalendar();e.view instanceof ge&&e.view.showToday()}isBetaBuild(){return/-beta(?:\.|$)/i.test(this.manifest.version)}async runBetaTestDataImport(){try{if(await this.ensureRuntimeInitialized(),!this.runtimeReady)throw new Error("Moment \u521D\u59CB\u5316\u5C1A\u672A\u5B8C\u6210\u3002");new T.Notice("\u6B63\u5728\u5BFC\u5165 Moment \u7EFC\u5408\u6D4B\u8BD5\u96C6 11\u2026",3e3);let e=await bt(this.app);new T.Notice(`\u5DF2\u5BFC\u5165\u7EFC\u5408\u6D4B\u8BD5\u96C6 11\uFF1A${e.moments} \u6761\uFF08${e.generatedForLocalDate}\uFF09`,8e3),await this.activateTimeline()}catch(e){console.error("[Moments] Failed to import beta test data 11",e);let t=e instanceof Error&&e.message?`\uFF1A${e.message}`:"";new T.Notice(`\u6D4B\u8BD5\u96C6 11 \u5BFC\u5165\u5931\u8D25${t}`,12e3)}}startRuntimeInitializationNow(){this.cancelPassiveRuntimeInitialization(),this.ensureRuntimeInitialized()}schedulePassiveRuntimeInitialization(){this.runtimeReady||this.initializationPromise||this.passiveInitializationTimer!==null||this.app.workspace.onLayoutReady(()=>{this.workspaceReady=!0,!(this.runtimeReady||this.initializationPromise||this.passiveInitializationTimer!==null)&&(this.passiveInitializationTimer=window.setTimeout(()=>{this.passiveInitializationTimer=null,this.ensureRuntimeInitialized()},oo))})}cancelPassiveRuntimeInitialization(){this.passiveInitializationTimer!==null&&(window.clearTimeout(this.passiveInitializationTimer),this.passiveInitializationTimer=null)}ensureRuntimeInitialized(){return this.runtimeReady?Promise.resolve():this.initializationPromise?this.initializationPromise:(this.initializationPromise=(async()=>{try{await this.waitForLayoutReady(),await this.service.initialize(),this.runtimeReady=!0,this.ensureNavigationEntries().catch(e=>{console.error("[Moments] Failed to ensure navigation entries",e)})}catch(e){console.error("[Moments] Failed to initialize Moment",e);let t=e instanceof Error&&e.message?`\uFF1A${e.message}`:"";new T.Notice(`Moment \u521D\u59CB\u5316\u5931\u8D25${t}`,1e4)}finally{this.runtimeReady||(this.initializationPromise=void 0)}})(),this.initializationPromise)}waitForLayoutReady(){return new Promise(e=>{this.app.workspace.onLayoutReady(e)})}isMomentPath(e){let t=(0,T.normalizePath)(M.momentsFolder),o=(0,T.normalizePath)(e);return!!t&&o.startsWith(`${t}/`)}isMomentMarkdownFile(e){return e.extension==="md"&&this.isMomentPath(e.path)}async loadPluginData(){let e=await this.loadData();this.data={memoryDiscovery:{...vt.memoryDiscovery,...e?.memoryDiscovery??{}}}}async persistPluginData(){await this.saveData(this.data)}handleNavigationFileFallback(e){let t=this.resolveNavigationTarget(e.path);if(!t)return;let o=this.app.workspace.getLeaf(!1);window.setTimeout(()=>void this.activateNavigationTargetInLeaf(t,o),0)}async activateNavigationTarget(e){e==="calendar"?await this.activateCalendar():e==="memories"?await this.activateMemories():await this.activateTimeline()}async activateNavigationTargetInLeaf(e,t){this.startRuntimeInitializationNow();let o=e==="calendar"?ve:e==="memories"?we:se;await t.setViewState({type:o,active:!0}),await this.app.workspace.revealLeaf(t),e==="calendar"&&t.view instanceof ge||e==="memories"&&t.view instanceof fe?t.view.showToday():e==="timeline"&&t.view instanceof re&&t.view.scrollHomeToTop()}async activateSingletonView(e){let{workspace:t}=this.app,o=t.getLeavesOfType(e)[0]??null;return o||(o=t.getLeaf(!0),await o.setViewState({type:e,active:!0})),await t.revealLeaf(o),o}resolveNavigationTarget(e){let t=(0,T.normalizePath)(e),o=(0,T.normalizePath)(M.momentsFolder);return[{name:"\u8BB0\u5F55",target:"timeline"},{name:"\u65E5\u5386",target:"calendar"},{name:"\u56DE\u5FC6",target:"memories"}].find(r=>(0,T.normalizePath)(`${o}/${r.name}.md`)===t)?.target}async ensureNavigationEntries(){let e=(0,T.normalizePath)(M.momentsFolder),t=[{name:"\u8BB0\u5F55",target:"timeline"},{name:"\u65E5\u5386",target:"calendar"},{name:"\u56DE\u5FC6",target:"memories"}];for(let o of t){let a=(0,T.normalizePath)(`${e}/${o.name}.md`),r=io(o.target),s=this.app.vault.getAbstractFileByPath(a);if(s)if(s instanceof T.TFile){let m=await this.app.vault.cachedRead(s);ao(m,o.target)&&m!==r&&await this.app.vault.modify(s,r)}else throw new Error(`${a} exists and is not a file.`);else{let m=await this.app.vault.adapter.stat(a);if(m?.type==="folder")throw new Error(`${a} exists and is not a file.`);if(m?.type==="file")continue;try{await this.app.vault.create(a,r)}catch(l){if(this.app.vault.getAbstractFileByPath(a)instanceof T.TFile||(await this.app.vault.adapter.stat(a))?.type==="file")continue;throw l}}}}};function io(i){return`<!-- moments-navigation:${i} -->
`}function ao(i,n){return i.trim()===`<!-- moments-navigation:${n} -->`}
