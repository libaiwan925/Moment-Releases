"use strict";var Ue=Object.defineProperty;var jt=Object.getOwnPropertyDescriptor;var _t=Object.getOwnPropertyNames;var Wt=Object.prototype.hasOwnProperty;var Ut=(a,n)=>{for(var e in n)Ue(a,e,{get:n[e],enumerable:!0})},Gt=(a,n,e,t)=>{if(n&&typeof n=="object"||typeof n=="function")for(let o of _t(n))!Wt.call(a,o)&&o!==e&&Ue(a,o,{get:()=>n[o],enumerable:!(t=jt(n,o))||t.enumerable});return a};var Vt=a=>Gt(Ue({},"__esModule",{value:!0}),a);var kn={};Ut(kn,{default:()=>_e});module.exports=Vt(kn);var S=require("obsidian");var b=Object.freeze({momentsFolder:"Moment",attachmentsFolder:"Moment/\u9644\u4EF6",maxImagesPerMoment:9,pageSize:30}),at={memoryDiscovery:{}};var it=["\u661F\u671F\u65E5","\u661F\u671F\u4E00","\u661F\u671F\u4E8C","\u661F\u671F\u4E09","\u661F\u671F\u56DB","\u661F\u671F\u4E94","\u661F\u671F\u516D"],rt=["\u5468\u65E5","\u5468\u4E00","\u5468\u4E8C","\u5468\u4E09","\u5468\u56DB","\u5468\u4E94","\u5468\u516D"];function y(a){return a.toString().padStart(2,"0")}function qt(a){let n=a.match(/^(\d{4})-(\d{2})-(\d{2})(?:T(\d{2}):(\d{2})(?::(\d{2})(?:\.(\d+))?)?)?/);if(!n)return null;let e=Number(n[1]),t=Number(n[2]),o=Number(n[3]),i=Number(n[4]??0),r=Number(n[5]??0),s=Number(n[6]??0),m=Number((n[7]??"0").slice(0,3).padEnd(3,"0"));if(t<1||t>12||i<0||i>23||r<0||r>59||s<0||s>59)return null;let c=new Date(Date.UTC(e,t-1,o,12,0,0,0));return c.getUTCFullYear()!==e||c.getUTCMonth()!==t-1||c.getUTCDate()!==o?null:{year:e,month:t,day:o,hour:i,minute:r,second:s,millisecond:m}}function Kt(a){return{year:a.getFullYear(),month:a.getMonth()+1,day:a.getDate(),hour:a.getHours(),minute:a.getMinutes(),second:a.getSeconds(),millisecond:a.getMilliseconds()}}function D(a){return qt(a)??Kt(new Date(a))}function ae(a,n){let e=Date.parse(a),t=Date.parse(n);return Number.isFinite(e)&&Number.isFinite(t)&&e!==t?e-t:a.localeCompare(n)}function I(a){let n=D(a);return`${n.year}-${y(n.month)}-${y(n.day)}`}function T(a){return`${a.getFullYear()}-${y(a.getMonth()+1)}-${y(a.getDate())}`}function Ge(a){let n=D(a);return`${y(n.month)}-${y(n.day)}`}function ie(a){return`${y(a.getMonth()+1)}-${y(a.getDate())}`}function Ve(a){return`${a.getFullYear()}/${y(a.getMonth()+1)}`}function st(a){let n=D(a);return`${n.year}/${y(n.month)}`}function mt(a){return`${a.getFullYear()}-${y(a.getMonth()+1)}-${y(a.getDate())}-${y(a.getHours())}${y(a.getMinutes())}${y(a.getSeconds())}`}function be(a){let n=-a.getTimezoneOffset(),e=n>=0?"+":"-",t=Math.abs(n),o=y(Math.floor(t/60)),i=y(t%60),r=a.getMilliseconds().toString().padStart(3,"0");return`${a.getFullYear()}-${y(a.getMonth()+1)}-${y(a.getDate())}T${y(a.getHours())}:${y(a.getMinutes())}:${y(a.getSeconds())}.${r}${e}${o}:${i}`}function lt(a,n=new Date){let e=D(a),t=new Date(n);t.setDate(n.getDate()-1);let o=`${e.month}\u6708${e.day}\u65E5`;return I(a)===T(n)?`\u4ECA\u5929 \xB7 ${o}`:I(a)===T(t)?`\u6628\u5929 \xB7 ${o}`:e.year===n.getFullYear()?o:`${e.year}\u5E74${o}`}function J(a){let n=D(a);return`${n.year}\u5E74${n.month}\u6708${n.day}\u65E5`}function ue(a){return`${a.getMonth()+1}\u6708${a.getDate()}\u65E5`}function re(a){let n=D(a);return`${y(n.hour)}:${y(n.minute)}`}function qe(a){return it[a.getDay()]??""}function ct(a){return rt[a.getDay()]??""}function dt(a){let n=D(a);return new Date(Date.UTC(n.year,n.month-1,n.day,12,0,0,0)).getUTCDay()}function pt(a){return rt[dt(a)]??""}function Me(a){return`${it[dt(a)]??""} ${re(a)}`}function ht(a){return`${J(a)} ${re(a)}`}function ge(a,n){let e=new Date(a);return e.setDate(e.getDate()+n),e}var De=class{constructor(n,e,t){this.index=n;this.state=e;this.persistState=t}getPublishEcho(n,e=new Date){let t=T(e);if(this.state.lastPublishEchoDateKey===t)return null;let o=this.index.all().filter(m=>m.id!==n.id&&ae(m.createdAt,n.createdAt)<0&&I(m.createdAt)<t),i=n.location?.trim();if(i){let m=o.find(c=>c.location?.trim()===i);if(m)return this.consumeDailyEchoOpportunity(t),{type:"location",momentId:m.id,relationValue:i,text:`\u4E0A\u4E00\u6B21\u5728${i}\u7559\u4E0B Moment\uFF0C\u662F ${ut(m.createdAt,n.createdAt)} \u5929\u524D`}}let r=Xt(n.tags,o);if(!r)return null;let s=o.find(m=>m.tags.includes(r));return s?(this.consumeDailyEchoOpportunity(t),{type:"tag",momentId:s.id,relationValue:r,text:`\u8DDD\u79BB\u4E0A\u4E00\u6B21\u63D0\u5230 #${r}\uFF0C\u5DF2\u7ECF\u8FC7\u53BB ${ut(s.createdAt,n.createdAt)} \u5929`}):null}consumeDailyEchoOpportunity(n){this.state.lastPublishEchoDateKey=n,Promise.resolve(this.persistState()).catch(e=>{console.error("[Moments] Failed to persist publish-echo state",e)})}};function Xt(a,n){let e;return a.forEach((t,o)=>{let i=n.reduce((r,s)=>r+(s.tags.includes(t)?1:0),0);i&&(!e||i<e.count||i===e.count&&o<e.order)&&(e={tag:t,count:i,order:o})}),e?.tag}function ut(a,n){let e=D(a),t=D(n),o=Date.UTC(e.year,e.month-1,e.day),i=Date.UTC(t.year,t.month-1,t.day);return Math.max(1,Math.round((i-o)/864e5))}var w=require("obsidian");function ve(a){return a.toString().padStart(2,"0")}function gt(a=new Date){let n=[a.getFullYear(),ve(a.getMonth()+1),ve(a.getDate()),"-",ve(a.getHours()),ve(a.getMinutes()),ve(a.getSeconds())].join(""),e=Math.random().toString(36).slice(2,6);return`${n}-${e}`}function vt(a){if(!a.startsWith(`---
`))return a;let n=a.indexOf(`
---
`,4);return n===-1?a:a.slice(n+5)}function ft(a){let n=[],e=/!\[\[([^\]|]+)(?:\|[^\]]+)?\]\]/g,t;for(;(t=e.exec(a))!==null;){let o=t[1]?.trim();o&&n.push({path:o})}return n}function wt(a){return a.replace(/!\[\[[^\]]+\]\]/g,"").replace(/\n{3,}/g,`

`).trim()}function Ke(a,n){let e=[],t=a.trim();return t&&e.push(t),n.length&&e.push(n.map(o=>`![[${o.path}]]`).join(`

`)),`${e.join(`

`)}
`}function Z(a){return[...new Set(a.map(n=>n.trim().replace(/^#+/,"")).filter(Boolean))]}var ke=class{constructor(n){this.app=n}async ensureBaseFolders(){await this.ensureFolder(b.momentsFolder),await this.ensureFolder(b.attachmentsFolder)}async listMomentFiles(){return this.app.vault.getMarkdownFiles().filter(n=>this.isInMomentsFolder(n.path))}async read(n){if(!this.isInMomentsFolder(n.path))return null;let e=await this.app.vault.cachedRead(n),t=Jt(this.app,n,e);if(!t)return null;let o=vt(e),i=typeof t.created=="string"?t.created:be(new Date(n.stat.ctime)),r=typeof t.updated=="string"?t.updated:i,s=typeof t.location=="string"&&t.location.trim()?t.location.trim():void 0,m=Array.isArray(t.tags)?t.tags.filter(c=>typeof c=="string"):[];return{id:t.id,createdAt:i,updatedAt:r,content:wt(o),images:ft(o),audio:Qt(t.audio),location:s,tags:m,filePath:n.path}}async create(n){let e=n.createdAt?new Date(n.createdAt):new Date,t=gt(e),o=(0,w.normalizePath)(`${b.momentsFolder}/${Ve(e)}`);await this.ensureFolder(o);let i=this.uniqueMarkdownPath(o,mt(e),t),r=be(e),s=Z(n.tags??[]),m=n.location?.trim()||void 0,c=[],d;try{let l=Ve(e);c=await this.persistImages(n.images??[],l,t),d=n.audio?await this.persistAudio(n.audio,l,t,n.audioDurationMs):void 0;let p=Zt({id:t,createdAt:r,updatedAt:r,location:m,tags:s,audio:d}),h=Ke(n.content,c);return await this.app.vault.create(i,`${p}${h}`),{id:t,createdAt:r,updatedAt:r,content:n.content.trim(),images:c,audio:d,location:m,tags:s,filePath:i}}catch(l){throw await this.cleanupCreatedMomentFile(i),await this.cleanupAttachmentPaths([...c.map(p=>p.path),...d?.path?[d.path]:[]]),l}}async update(n,e,t=new Set){let o=this.app.vault.getAbstractFileByPath(n.filePath);if(!(o instanceof w.TFile))throw new Error("Moment file not found.");let i=e.keptImagePaths?new Set(e.keptImagePaths):null,r=i?n.images.filter(p=>i.has(p.path)):[...n.images],s=await this.app.vault.read(o),m=b.maxImagesPerMoment,c=Math.max(0,m-r.length),d=e.images?.length?await this.persistImages(e.images.slice(0,c),st(n.createdAt),n.id,r.length):[],l={...n,content:e.content!==void 0?e.content.trim():n.content,location:e.location!==void 0?e.location.trim()||void 0:n.location,tags:e.tags!==void 0?Z(e.tags):n.tags,images:[...r,...d],audio:e.removeAudio?void 0:n.audio,updatedAt:be(new Date)};try{await this.app.fileManager.processFrontMatter(o,g=>{g.type="moment",g.id=l.id,g.created=l.createdAt,g.updated=l.updatedAt,l.location?g.location=l.location:delete g.location,g.tags=l.tags,l.audio?g.audio=en(l.audio):delete g.audio});let p=await this.app.vault.read(o),h=p.startsWith(`---
`)?p.indexOf(`
---
`,4):-1,v=h>=0?p.slice(0,h+5):"";await this.app.vault.modify(o,`${v}${Ke(l.content,l.images)}`)}catch(p){throw await this.restoreMomentFile(o,s),await this.cleanupAttachmentPaths(d.map(h=>h.path)),p}if(i){let p=n.images.filter(h=>!i.has(h.path));for(let h of p)await this.trashOwnedAttachment(n,h.path,t)}return e.removeAudio&&n.audio?.path&&await this.trashOwnedAttachment(n,n.audio.path,t),l}async delete(n,e=new Set){let t=this.app.vault.getAbstractFileByPath(n.filePath);t instanceof w.TFile&&await this.app.fileManager.trashFile(t);let o=new Set(n.images.map(i=>i.path));n.audio?.path&&o.add(n.audio.path);for(let i of o)await this.trashOwnedAttachment(n,i,e)}isInMomentsFolder(n){let e=(0,w.normalizePath)(b.momentsFolder);return e?(0,w.normalizePath)(n).startsWith(`${e}/`):!1}isOwnedAttachment(n,e){let t=(0,w.normalizePath)(b.attachmentsFolder),o=(0,w.normalizePath)(e);if(!t||!o.startsWith(`${t}/`))return!1;let i=o.split("/").pop()??"";return i.startsWith(`img-${n.id}-`)||i.startsWith(`audio-${n.id}.`)||i.startsWith(`audio-${n.id}-`)}async trashOwnedAttachment(n,e,t){if(t.has(e)||!this.isOwnedAttachment(n,e))return;let o=this.app.vault.getAbstractFileByPath(e);if(o instanceof w.TFile)try{await this.app.fileManager.trashFile(o)}catch(i){console.warn("[Moments] Failed to trash Moment attachment",e,i)}}async persistImages(n,e,t,o=0){let i=n.slice(0,b.maxImagesPerMoment);if(!i.length)return[];let r=(0,w.normalizePath)(`${b.attachmentsFolder}/${e}`);await this.ensureFolder(r);let s=[],m=null;try{for(let c=0;c<i.length;c+=1){let d=i[c];if(!d)continue;let l=bt(d),p=o+c+1,h=`img-${t}-${String(p).padStart(2,"0")}`,v=this.uniqueAttachmentPath(r,h,l);m=v;let g=await d.arrayBuffer();await this.app.vault.createBinary(v,g),s.push({path:v}),m=null}return s}catch(c){throw await this.cleanupAttachmentPaths([...s.map(d=>d.path),...m?[m]:[]]),c}}async persistAudio(n,e,t,o){let i=(0,w.normalizePath)(`${b.attachmentsFolder}/${e}`);await this.ensureFolder(i);let r=bt(n),s=this.uniqueAttachmentPath(i,`audio-${t}`,r);try{return await this.app.vault.createBinary(s,await n.arrayBuffer()),{path:s,mimeType:n.type||void 0,durationMs:o&&o>0?Math.round(o):void 0}}catch(m){throw await this.cleanupAttachmentPaths([s]),m}}async cleanupCreatedMomentFile(n){let e=this.app.vault.getAbstractFileByPath(n);if(e instanceof w.TFile)try{await this.app.fileManager.trashFile(e)}catch(t){console.error("[Moments] Failed to clean up uncommitted Moment Markdown",n,t)}}async restoreMomentFile(n,e){try{await this.app.vault.modify(n,e)}catch(t){console.error("[Moments] Failed to roll back Moment Markdown after update failure",t)}}async cleanupAttachmentPaths(n){for(let e of n){let t=this.app.vault.getAbstractFileByPath(e);if(t instanceof w.TFile)try{await this.app.fileManager.trashFile(t)}catch(o){console.warn("[Moments] Failed to clean up uncommitted attachment",e,o)}}}uniqueAttachmentPath(n,e,t){let o=(0,w.normalizePath)(`${n}/${e}.${t}`);if(!this.app.vault.getAbstractFileByPath(o))return o;let i=2;for(;;){let r=(0,w.normalizePath)(`${n}/${e}-${i}.${t}`);if(!this.app.vault.getAbstractFileByPath(r))return r;i+=1}}uniqueMarkdownPath(n,e,t){let o=(0,w.normalizePath)(`${n}/${e}.md`);return this.app.vault.getAbstractFileByPath(o)?(0,w.normalizePath)(`${n}/${e}-${t.slice(-4)}.md`):o}async ensureFolder(n){let e=(0,w.normalizePath)(n);if(!e)return;let t=e.split("/"),o="";for(let i of t){o=o?`${o}/${i}`:i;let r=this.app.vault.getAbstractFileByPath(o);if(r instanceof w.TFolder)continue;if(r)throw new Error(`${o} exists and is not a folder.`);let s=await this.app.vault.adapter.stat(o);if(s?.type!=="folder"){if(s)throw new Error(`${o} exists and is not a folder.`);try{await this.app.vault.createFolder(o)}catch(m){if(this.app.vault.getAbstractFileByPath(o)instanceof w.TFolder||(await this.app.vault.adapter.stat(o))?.type==="folder")continue;throw m}}}}};function Jt(a,n,e){let t=a.metadataCache.getFileCache(n)?.frontmatter;if(xt(t))return t;let o=(0,w.getFrontMatterInfo)(e);if(!o.exists||!o.frontmatter.trim())return null;try{let i=(0,w.parseYaml)(o.frontmatter);if(!i||typeof i!="object")return null;let r={...i},s=yt(o.frontmatter,"created"),m=yt(o.frontmatter,"updated");return s!==void 0&&(r.created=s),m!==void 0&&(r.updated=m),xt(r)?r:null}catch(i){return console.warn("[Moments] Failed to parse Moment frontmatter before metadata cache was ready",n.path,i),null}}function xt(a){if(!a||typeof a!="object")return!1;let n=a;return n.type==="moment"&&typeof n.id=="string"&&n.id.trim().length>0}function yt(a,n){let e=`${n}:`,t=a.split(/\r?\n/).find(i=>i.trimStart().startsWith(e));if(!t)return;let o=t.trimStart().slice(e.length).trim();if(o){if(o.startsWith('"')&&o.endsWith('"'))try{let i=JSON.parse(o);return typeof i=="string"?i:o}catch{return o}return o.startsWith("'")&&o.endsWith("'")?o.slice(1,-1).replace(/''/g,"'"):o}}function Zt(a){let n=["---","type: moment",`id: ${a.id}`,`created: ${a.createdAt}`,`updated: ${a.updatedAt}`];if(a.location&&n.push(`location: ${Ee(a.location)}`),a.tags.length){n.push("tags:");for(let e of a.tags)n.push(`  - ${Ee(e)}`)}else n.push("tags: []");return a.audio&&(n.push("audio:"),n.push(`  path: ${Ee(a.audio.path)}`),a.audio.mimeType&&n.push(`  mimeType: ${Ee(a.audio.mimeType)}`),a.audio.durationMs!==void 0&&n.push(`  durationMs: ${Math.round(a.audio.durationMs)}`)),n.push("---",""),`${n.join(`
`)}
`}function Qt(a){if(typeof a=="string"&&a.trim())return{path:a.trim()};if(!a||typeof a!="object")return;let n=a;if(typeof n.path!="string"||!n.path.trim())return;let e=typeof n.mimeType=="string"&&n.mimeType.trim()?n.mimeType.trim():void 0,t=typeof n.durationMs=="number"&&Number.isFinite(n.durationMs)?Math.max(0,Math.round(n.durationMs)):void 0;return{path:n.path.trim(),mimeType:e,durationMs:t}}function en(a){let n={path:a.path};return a.mimeType&&(n.mimeType=a.mimeType),a.durationMs!==void 0&&(n.durationMs=Math.round(a.durationMs)),n}function Ee(a){return JSON.stringify(a)}function bt(a){let n=a.name.split(".").pop()?.toLowerCase();if(n&&/^[a-z0-9]+$/.test(n))return n;let e=a.type.split("/").pop()?.split(";")[0]?.toLowerCase();return e&&/^[a-z0-9]+$/.test(e)?e:"bin"}var kt=require("obsidian");var Te=class{constructor(){this.byId=new Map;this.byPath=new Map;this.byDate=new Map;this.byMonthDay=new Map}replaceAll(n){this.byId.clear(),this.byPath.clear(),this.byDate.clear(),this.byMonthDay.clear();for(let e of n)this.upsert(e)}upsert(n){let e=this.getByPath(n.filePath);e&&e.id!==n.id&&this.remove(e.id);let t=this.byId.get(n.id);t&&this.remove(t.id),this.byId.set(n.id,n),this.byPath.set(n.filePath,n.id),Mt(this.byDate,I(n.createdAt),n),Mt(this.byMonthDay,Ge(n.createdAt),n)}remove(n){let e=this.byId.get(n);e&&(this.byId.delete(n),this.byPath.get(e.filePath)===n&&this.byPath.delete(e.filePath),Dt(this.byDate,I(e.createdAt),n),Dt(this.byMonthDay,Ge(e.createdAt),n))}get(n){return this.byId.get(n)}getByPath(n){let e=this.byPath.get(n);return e?this.byId.get(e):void 0}all(){return[...this.byId.values()].sort(Xe)}forDate(n){return[...this.byDate.get(n)??[]].sort(Xe)}forMonthDay(n){return[...this.byMonthDay.get(n)??[]].sort(Xe)}};function Xe(a,n){return ae(n.createdAt,a.createdAt)}function Mt(a,n,e){let t=a.get(n)??[];t.push(e),a.set(n,t)}function Dt(a,n,e){let t=(a.get(n)??[]).filter(o=>o.id!==e);t.length?a.set(n,t):a.delete(n)}var Et="moments-changed",Se=class{constructor(n){this.repository=n;this.index=new Te;this.events=new kt.Events}async initialize(){await this.repository.ensureBaseFolders(),await this.rebuild()}async rebuild(){let n=await this.repository.listMomentFiles(),e=[];for(let t of n){let o=await this.repository.read(t);o&&e.push(o)}this.index.replaceAll(e),this.emitChanged()}async create(n){let e=await this.repository.create(n);return this.index.upsert(e),this.emitChanged(),e}async update(n,e){let t=this.collectMediaPathsUsedByOtherMoments(n.id),o=await this.repository.update(n,e,t);return this.index.upsert(o),this.emitChanged(),o}async delete(n){let e=this.collectMediaPathsUsedByOtherMoments(n.id);await this.repository.delete(n,e),this.index.remove(n.id),this.emitChanged()}async refreshFile(n){let e=this.index.getByPath(n.path),t=await this.repository.read(n);if(t){this.index.upsert(t),this.emitChanged();return}e&&(this.index.remove(e.id),this.emitChanged())}removeByPath(n){let e=this.index.getByPath(n);e&&(this.index.remove(e.id),this.emitChanged())}onChanged(n){return this.events.on(Et,n)}off(n){this.events.offref(n)}collectMediaPathsUsedByOtherMoments(n){let e=new Set;for(let t of this.index.all())if(t.id!==n){for(let o of t.images)e.add(o.path);t.audio?.path&&e.add(t.audio.path)}return e}emitChanged(){this.events.trigger(Et)}};var Tt=`
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
  -webkit-line-clamp: 3;
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
    grid-template-columns: minmax(0, 1fr);
  }

  .moments-calendar-view .moments-calendar-review-fragment-year-main .moments-calendar-review-fragment-media {
    display: none;
  }

  .moments-calendar-view .moments-calendar-review-fragment-year-main.has-image .moments-calendar-review-fragment-body {
    grid-column: 1;
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
  align-items: start;
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
  align-self: start;
  width: 72px;
  height: 54px;
  margin: 0;
}

.moments-calendar-view .moments-calendar-review-fragment-month-main.has-image .moments-calendar-review-fragment-body {
  grid-column: 2;
  grid-row: 1;
  align-self: start;
}

.moments-calendar-view .moments-calendar-review-fragment-month-main:not(.has-image) .moments-calendar-review-fragment-body {
  grid-column: 1;
  grid-row: 1;
  align-self: start;
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
  -webkit-line-clamp: 2;
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

  .moments-calendar-review-fragment.is-month.has-image.has-text.has-audio .moment-audio-chip {
    display: none;
  }

  .moments-calendar-review-fragment.is-month.has-image.has-text.has-audio .moments-calendar-review-fragment-text {
    -webkit-line-clamp: 3;
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
  align-items: start;
  gap: 10px;
}

.moments-calendar-view .moments-calendar-review-fragment-year-main.has-image {
  grid-template-columns: 80px minmax(0, 1fr);
}

.moments-calendar-view .moments-calendar-review-fragment-year-main .moments-calendar-review-fragment-media {
  grid-column: 1;
  grid-row: 1;
  width: 80px;
  height: 60px;
  margin: 3px 0 0;
}

.moments-calendar-view .moments-calendar-review-fragment-year-main .moments-calendar-review-fragment-body {
  grid-column: 1;
  grid-row: 1;
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

`;var St=`
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

  .moments-memories-view .moments-memories-date-strip {
    grid-template-columns: max(36px, var(--moments-control-xs)) minmax(0, 1fr) max(36px, var(--moments-control-xs));
  }

  .moments-memories-view .moments-memories-date-strip.has-today-action {
    grid-template-columns: max(36px, var(--moments-control-xs)) minmax(0, 1fr) max(36px, var(--moments-control-xs)) auto;
  }

  .moments-memories-view .moments-memories-date-shift {
    width: max(36px, var(--moments-control-xs));
    height: max(36px, var(--moments-control-xs));
    min-height: max(36px, var(--moments-control-xs));
  }

  .moments-memories-view .moments-memories-today-action {
    min-height: max(36px, var(--moments-control-xs));
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

.moments-view .moments-timeline-header-action-arrow {
  display: inline-flex;
  align-items: center;
  color: color-mix(in srgb, var(--moments-accent) 68%, var(--text-muted));
  opacity: 0.82;
  font-size: 12px;
  line-height: 1;
}

.moments-view .moments-timeline-header-action:hover .moments-timeline-header-action-arrow,
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
`;var At="moments-runtime-styles-v1";function Lt(){for(let e of["moments-ui-polish-v1","moments-ui-polish-v2","moments-ui-polish-v3","moments-ui-polish-v4","moments-ui-polish-v5","moments-ui-polish-v6","moments-ui-polish-v7","moments-ui-polish-v8","moments-reference-visual-v1","moments-reference-visual-v2","moments-reference-visual-v3","moments-reference-visual-v4","moments-audio-feature-styles-v1","moments-timeline-navigation-styles-v1","moments-feature-styles-v1","moments-ui-polish-v9",At])document.getElementById(e)?.remove();let a=document.createElement("style");a.id=At,a.textContent=`${St}
${Tt}`,document.head.appendChild(a);let n=new MutationObserver(e=>{for(let t of e)for(let o of Array.from(t.addedNodes))on(o)});return n.observe(document.body,{childList:!0,subtree:!0}),nn(),()=>{n.disconnect(),a.remove()}}var Ae=".moments-view, .moments-ribbon-button",tn="[title], [data-tooltip-position], [aria-label]";function nn(){for(let a of Array.from(document.querySelectorAll(Ae)))Je(a)}function on(a){if(a instanceof HTMLElement){(a.matches(Ae)||a.closest(Ae))&&Je(a);for(let n of Array.from(a.querySelectorAll(Ae)))Je(n)}}function Je(a){Pt(a);for(let n of Array.from(a.querySelectorAll(tn)))Pt(n)}var an=0;function Pt(a){a.removeAttribute("title"),a.removeAttribute("data-tooltip-position");let n=a.getAttribute("aria-label");if(!n)return;let e=`moments-a11y-label-${++an}`,t=document.createElement("span");t.id=e,t.className="moments-visually-hidden",t.textContent=n,rn(a)?a.appendChild(t):a.parentElement?.insertBefore(t,a),a.setAttribute("aria-labelledby",e),a.removeAttribute("aria-label")}function rn(a){return!["INPUT","TEXTAREA","SELECT","IMG","AUDIO"].includes(a.tagName)}var q=require("obsidian");var Pe=class{constructor(n){this.index=n}getMonthReview(n,e){let t=this.index.all().filter(o=>{let i=D(o.createdAt);return i.year===n&&i.month-1===e}).sort(Ct);return{year:n,month:e+1,momentCount:t.length,fragments:sn(t,6),...It(t)}}getYearReview(n){let e=this.index.all().filter(o=>D(o.createdAt).year===n),t=Array.from({length:12},(o,i)=>{let r=e.filter(s=>D(s.createdAt).month-1===i);return{month:i+1,momentCount:r.length,representative:mn(r)}});return{year:n,momentCount:e.length,months:t,...It(e)}}};function sn(a,n){if(a.length<=n)return[...a];if(n<=1)return[a[0]];let e=[],t=new Set;for(let o=0;o<n;o+=1){let i=Math.round(o*(a.length-1)/(n-1));if(t.has(i))continue;t.add(i);let r=a[i];r&&e.push(r)}return e}function mn(a){if(!a.length)return;let n=[...a].sort(Ct);return n[Math.floor((n.length-1)/2)]}function It(a){return{commonTags:Ft(a.flatMap(n=>n.tags)),commonLocations:Ft(a.map(n=>n.location?.trim()).filter(n=>!!n))}}function Ft(a){let n=new Map;for(let e of a){let t=e.trim();t&&n.set(t,(n.get(t)??0)+1)}return[...n.entries()].filter(([,e])=>e>=2).sort((e,t)=>t[1]-e[1]||e[0].localeCompare(t[0])).slice(0,3).map(([e])=>({label:e}))}function Ct(a,n){return ae(a.createdAt,n.createdAt)}var $=require("obsidian");function Le(a,n,e={}){let t=a.createDiv({cls:`moments-audio-control${e.className?` ${e.className}`:""}`}),o=t.createEl("button",{cls:"moments-audio-control-play",attr:{type:"button"}}),i=o.createSpan();(0,$.setIcon)(i,"play"),o.createSpan({cls:"moments-visually-hidden",text:"\u64AD\u653E\u6216\u6682\u505C\u8BED\u97F3"});let r=t.createEl("input",{type:"range",cls:"moments-audio-control-progress",attr:{min:"0",max:"1000",value:"0",step:"1"}}),s=t.createSpan({cls:"moments-audio-control-time"}),m=new Audio(n);m.preload="metadata";let c=e.durationMs&&e.durationMs>0?e.durationMs/1e3:void 0,d=()=>Number.isFinite(m.duration)&&m.duration>0?m.duration:c??0,l=()=>{let p=d(),h=Number.isFinite(m.currentTime)?m.currentTime:0;r.value=p>0?String(Math.min(1e3,Math.round(h/p*1e3))):"0",s.setText(`${Ze(h)} / ${Ze(p)}`),(0,$.setIcon)(i,m.paused?"play":"pause")};return o.addEventListener("click",()=>{m.paused?m.play().catch(p=>{console.error("[Moments] Failed to play audio",p),new $.Notice("\u8BED\u97F3\u64AD\u653E\u5931\u8D25\u3002")}):m.pause()}),r.addEventListener("input",()=>{let p=d();p<=0||(m.currentTime=Number(r.value)/1e3*p,l())}),m.addEventListener("loadedmetadata",l),m.addEventListener("durationchange",l),m.addEventListener("timeupdate",l),m.addEventListener("play",l),m.addEventListener("pause",l),m.addEventListener("ended",l),l(),{destroy:()=>{m.pause(),m.removeAttribute("src"),m.load()}}}function Qe(a){return Ze(Math.max(0,a)/1e3)}function Ze(a){let n=Math.max(0,Math.round(Number.isFinite(a)?a:0)),e=Math.floor(n/60),t=String(n%60).padStart(2,"0");return`${e}:${t}`}var se=class{constructor(n,e){this.app=n;this.logContext=e;this.activeAudio=null}render(n,e){if(!e.audio)return;let t=this.app.vault.getAbstractFileByPath(e.audio.path);if(!(t instanceof $.TFile))return;let o=n.createEl("button",{cls:"moment-audio-chip",attr:{type:"button"}}),i=o.createSpan({cls:"moment-audio-chip-icon"});(0,$.setIcon)(i,"play"),o.createSpan({text:e.audio.durationMs?`\u8BED\u97F3 ${Qe(e.audio.durationMs)}`:"\u8BED\u97F3"});let r=new Audio(this.app.vault.getResourcePath(t));r.preload="metadata";let s=()=>(0,$.setIcon)(i,r.paused?"play":"pause");r.addEventListener("play",s),r.addEventListener("pause",s),r.addEventListener("ended",()=>{s(),this.activeAudio===r&&(this.activeAudio=null)}),o.addEventListener("click",m=>{m.stopPropagation(),r.paused?(this.stop(),this.activeAudio=r,r.play().catch(c=>{this.activeAudio===r&&(this.activeAudio=null),console.error(`[Moments] Failed to play ${this.logContext} audio`,c),new $.Notice("\u8BED\u97F3\u64AD\u653E\u5931\u8D25\u3002"),s()})):(r.pause(),this.activeAudio===r&&(this.activeAudio=null))}),o.addEventListener("keydown",m=>m.stopPropagation())}stop(){this.activeAudio&&(this.activeAudio.pause(),this.activeAudio.currentTime=0,this.activeAudio=null)}};var C=require("obsidian");var $t=require("obsidian"),ln=new Set(["image/jpeg","image/png","image/webp","image/gif"]),cn=new Set(["jpg","jpeg","png","webp","gif"]);function Ie(a,n){if(a<=0)return;let e=document.createElement("input");e.type="file",e.accept="image/*",e.multiple=!0,e.tabIndex=-1,e.style.position="fixed",e.style.left="-10000px",e.style.top="0",e.style.width="1px",e.style.height="1px",e.style.opacity="0",e.style.pointerEvents="none";let t=!1,o=()=>{t||(t=!0,e.remove())};e.addEventListener("change",()=>{let i=Array.from(e.files??[]),r=i.filter(dn);r.length<i.length&&new $t.Notice("\u76EE\u524D\u4EC5\u652F\u6301 JPEG\u3001PNG\u3001WebP\u3001GIF\uFF1BHEIC/HEIF \u8BF7\u5148\u8F6C\u6362\u540E\u518D\u6DFB\u52A0\u3002"),o(),n(r.slice(0,a))},{once:!0}),e.addEventListener("cancel",o,{once:!0}),document.body.appendChild(e);try{e.click()}catch(i){throw o(),i}}function dn(a){if(ln.has(a.type.toLowerCase()))return!0;let n=a.name.split(".").pop()?.toLowerCase();return n?cn.has(n):!1}function Fe(a,n){let e=a.createDiv({cls:"moments-tag-editor"}),t=e.createDiv({cls:"moments-tag-list"}),i=e.createDiv({cls:"moments-tag-entry"}).createEl("input",{type:"text",cls:"moments-tag-input-enter-only",attr:{placeholder:"\u8F93\u5165\u6807\u7B7E\uFF0C\u6309Enter\u7ED3\u675F"}}),r=Z(n),s=()=>{t.empty();for(let c of r){let d=t.createSpan({cls:"moments-tag-chip"});d.createSpan({text:`#${c}`});let l=d.createEl("button",{cls:"moments-tag-remove",attr:{type:"button"}});l.createSpan({text:"\xD7",attr:{"aria-hidden":"true"}}),l.createSpan({cls:"moments-visually-hidden",text:`\u79FB\u9664\u6807\u7B7E ${c}`}),l.addEventListener("click",()=>{r=r.filter(p=>p!==c),s(),i.focus()})}},m=()=>{let c=Z([i.value]);c.length&&(r=Z([...r,...c]),i.value="",s(),i.focus())};return i.addEventListener("keydown",c=>{c.isComposing||c.key!=="Enter"||(c.preventDefault(),m())}),s(),{getTags:()=>[...r],focus:()=>i.focus()}}var me=class{constructor(n){this.service=n;this.selectedFiles=[];this.selectedAudio=null;this.selectedAudioPreviewUrl=null;this.mediaRecorder=null;this.recordingStream=null;this.recordingSessionId=0;this.recordingRequestPending=!1;this.audioPlayers=[]}beforeHostRender(){(this.isRecording()||this.recordingRequestPending)&&this.disposeRecording(),this.disposeAudioPlayers(),this.revokeSelectedAudioPreviewUrl()}dispose(){this.disposeRecording(),this.disposeAudioPlayers(),this.revokeSelectedAudioPreviewUrl()}render(n,e,t={}){let o=n.createDiv({cls:"moments-composer"}),i=o.createDiv({cls:"moments-composer-heading"});i.createSpan({cls:"moments-sparkle",text:"\u2723"}),i.createSpan({text:t.heading??"\u8FD9\u4E00\u523B\uFF0C\u60F3\u8BB0\u5F55\u4EC0\u4E48\uFF1F"});let r=null,s=null;if(t.targetDate){let f=o.createDiv({cls:"moments-composer-backfill-date"});f.createSpan({cls:"moments-composer-backfill-label",text:`${t.targetDate.getFullYear()}\u5E74${t.targetDate.getMonth()+1}\u6708${t.targetDate.getDate()}\u65E5`});let x=new Date,k=f.createDiv({cls:"moments-composer-backfill-time",attr:{"aria-label":"\u8865\u8BB0\u65F6\u95F4"}});r=k.createEl("input",{cls:"moments-composer-backfill-time-part",attr:{type:"text",inputmode:"numeric",maxlength:"2",value:String(x.getHours()).padStart(2,"0"),"aria-label":"\u5C0F\u65F6"}}),k.createSpan({cls:"moments-composer-backfill-time-separator",text:":"}),s=k.createEl("input",{cls:"moments-composer-backfill-time-part",attr:{type:"text",inputmode:"numeric",maxlength:"2",value:String(x.getMinutes()).padStart(2,"0"),"aria-label":"\u5206\u949F"}}),Rt(r,23,()=>s?.focus()),Rt(s,59)}let m=o.createDiv({cls:"moments-composer-body"}),c=m.createEl("textarea",{cls:"moments-composer-textarea",attr:{placeholder:"\u8BB0\u5F55\u6B64\u523B\u7684\u60F3\u6CD5\u3001\u611F\u53D7\u6216\u53D1\u751F\u7684\u4E8B...",rows:"4"}}),d=m.createDiv({cls:"moments-selected-images"}),l=m.createDiv({cls:"moments-selected-audio"}),p=m.createDiv({cls:"moments-composer-meta-panel is-hidden"}),h=p.createDiv({cls:"moments-composer-meta-field is-hidden"}),v=h.createDiv({cls:"moments-composer-meta-label"}),g=v.createSpan();(0,C.setIcon)(g,"map-pin"),v.createSpan({text:"\u5730\u70B9"});let L=h.createEl("input",{type:"text",cls:"moments-inline-input moments-location-input",attr:{placeholder:"\u8F93\u5165\u5730\u70B9"}}),M=p.createDiv({cls:"moments-composer-meta-field is-hidden"}),A=M.createDiv({cls:"moments-composer-meta-label"}),j=A.createSpan();(0,C.setIcon)(j,"tag"),A.createSpan({text:"\u6807\u7B7E"});let R=Fe(M,[]),_=o.createDiv({cls:"moments-composer-actions"}),E=_.createDiv({cls:"moments-composer-tools"}),B=this.createToolButton(E,"image","\u56FE\u7247"),H=this.createToolButton(E,"mic","\u97F3\u9891"),W=this.createToolButton(E,"map-pin","\u5730\u70B9"),N=this.createToolButton(E,"tag","\u6807\u7B7E"),O=_.createDiv({cls:"moments-composer-submit-actions"}).createEl("button",{text:"\u53D1\u5E03",cls:"moments-primary-button",attr:{type:"button"}}),u=()=>{let f=c.value.trim().length>0,x=this.selectedFiles.length>0||this.selectedAudio!==null;O.disabled=this.isRecording()||this.recordingRequestPending||!f&&!x};c.addEventListener("input",u),this.renderSelectedImages(d,u),this.renderSelectedAudio(l,u),u(),B.addEventListener("click",()=>{let f=b.maxImagesPerMoment;Ie(f,x=>{this.selectedFiles=x,this.renderSelectedImages(d,u),u()})}),H.addEventListener("click",async()=>{if(!this.recordingRequestPending){if(this.isRecording()){H.disabled=!0,this.mediaRecorder?.stop();return}await this.startAudioRecording(H,l,u)}}),W.addEventListener("click",()=>{p.removeClass("is-hidden"),h.toggleClass("is-hidden",!h.hasClass("is-hidden")),W.toggleClass("is-active",!h.hasClass("is-hidden")),h.hasClass("is-hidden")||L.focus(),this.syncMetaPanelVisibility(p,h,M)}),N.addEventListener("click",()=>{p.removeClass("is-hidden"),M.toggleClass("is-hidden",!M.hasClass("is-hidden")),N.toggleClass("is-active",!M.hasClass("is-hidden")),M.hasClass("is-hidden")||R.focus(),this.syncMetaPanelVisibility(p,h,M)}),O.addEventListener("click",async()=>{let f=c.value.trim();if(!(!f&&this.selectedFiles.length===0&&!this.selectedAudio)){O.disabled=!0;try{let x=await this.service.create({content:f,location:L.value,tags:R.getTags(),images:this.selectedFiles,audio:this.selectedAudio??void 0,audioDurationMs:this.selectedAudioDurationMs,createdAt:t.targetDate?un(t.targetDate,r?.value,s?.value):void 0});this.clearDraft(),e(x)}catch(x){console.error("[Moments] Failed to create moment",x),new C.Notice("\u53D1\u5E03\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\u3002")}finally{u()}}})}clearDraft(){this.selectedFiles=[],this.selectedAudio=null,this.selectedAudioDurationMs=void 0,this.disposeRecording(),this.disposeAudioPlayers(),this.revokeSelectedAudioPreviewUrl()}createToolButton(n,e,t){let o=n.createEl("button",{cls:"moments-tool-button"}),i=o.createSpan({cls:"moments-tool-icon"});return(0,C.setIcon)(i,e),o.createSpan({cls:"moments-tool-label",text:t}),o}setToolButtonLabel(n,e){n.querySelector(".moments-tool-label")?.setText(e)}async startAudioRecording(n,e,t){if(!navigator.mediaDevices?.getUserMedia||typeof MediaRecorder>"u"){console.error("[Moments] Audio recording is not supported in this environment."),new C.Notice("\u5F53\u524D\u73AF\u5883\u4E0D\u652F\u6301\u5F55\u97F3\u3002");return}this.disposeRecording();let o=++this.recordingSessionId;this.recordingRequestPending=!0,n.disabled=!0,t();try{let i=await navigator.mediaDevices.getUserMedia({audio:!0});if(o!==this.recordingSessionId){this.releaseRecordingStream(i);return}let r=pn(),s=r?new MediaRecorder(i,{mimeType:r}):new MediaRecorder(i),m=[],c=Date.now();this.recordingStream=i,this.mediaRecorder=s,this.recordingRequestPending=!1,s.addEventListener("dataavailable",d=>{d.data.size>0&&m.push(d.data)}),s.addEventListener("stop",()=>{if(o!==this.recordingSessionId){this.releaseRecordingStream(i);return}let d=Math.max(1,Date.now()-c),l=m.find(h=>h.type)?.type,p=s.mimeType||l||r||"audio/webm";if(m.length){let h=new Blob(m,{type:p});this.selectedAudio=hn(h,p),this.selectedAudioDurationMs=d}else new C.Notice("\u672A\u5F55\u5230\u97F3\u9891\uFF0C\u8BF7\u91CD\u8BD5\u3002");this.releaseRecordingStream(i),this.mediaRecorder===s&&(this.mediaRecorder=null),this.recordingStream===i&&(this.recordingStream=null),n.disabled=!1,n.removeClass("is-active"),this.setToolButtonLabel(n,"\u97F3\u9891"),this.renderSelectedAudio(e,t),t()},{once:!0}),s.addEventListener("error",d=>{console.error("[Moments] Audio recording failed",d),new C.Notice("\u5F55\u97F3\u5931\u8D25\uFF0C\u8BF7\u91CD\u8BD5\u3002")}),s.start(),n.disabled=!1,n.addClass("is-active"),this.setToolButtonLabel(n,"\u5F55\u97F3\u4E2D"),t()}catch(i){o===this.recordingSessionId&&(console.error("[Moments] Failed to access microphone",i),new C.Notice("\u65E0\u6CD5\u8BBF\u95EE\u9EA6\u514B\u98CE\uFF0C\u8BF7\u68C0\u67E5\u7CFB\u7EDF\u6743\u9650\u3002"),this.recordingRequestPending=!1,n.disabled=!1,n.removeClass("is-active"),this.setToolButtonLabel(n,"\u97F3\u9891"),t())}}isRecording(){return this.mediaRecorder?.state==="recording"}disposeRecording(){this.recordingSessionId+=1,this.recordingRequestPending=!1;let n=this.mediaRecorder;if(this.mediaRecorder=null,n&&n.state!=="inactive")try{n.stop()}catch{}this.recordingStream&&this.releaseRecordingStream(this.recordingStream),this.recordingStream=null}releaseRecordingStream(n){for(let e of n.getTracks())e.stop()}renderSelectedAudio(n,e){if(n.empty(),this.disposeAudioPlayers(),this.revokeSelectedAudioPreviewUrl(),!this.selectedAudio)return;let t=n.createDiv({cls:"moments-selected-audio-item"}),o=t.createSpan({cls:"moments-selected-audio-icon"});(0,C.setIcon)(o,"mic"),this.selectedAudioPreviewUrl=URL.createObjectURL(this.selectedAudio),this.audioPlayers.push(Le(t,this.selectedAudioPreviewUrl,{className:"moments-selected-audio-player",durationMs:this.selectedAudioDurationMs}));let i=t.createEl("button",{cls:"moments-selected-audio-remove",attr:{type:"button"}});i.createSpan({text:"\xD7",attr:{"aria-hidden":"true"}}),i.createSpan({cls:"moments-visually-hidden",text:"\u79FB\u9664\u5F55\u97F3"}),i.addEventListener("click",()=>{this.selectedAudio=null,this.selectedAudioDurationMs=void 0,this.renderSelectedAudio(n,e),e?.()})}disposeAudioPlayers(){for(let n of this.audioPlayers)n.destroy();this.audioPlayers=[]}revokeSelectedAudioPreviewUrl(){this.selectedAudioPreviewUrl&&(URL.revokeObjectURL(this.selectedAudioPreviewUrl),this.selectedAudioPreviewUrl=null)}renderSelectedImages(n,e){n.empty(),this.selectedFiles.length&&this.selectedFiles.forEach((t,o)=>{let i=n.createDiv({cls:"moments-selected-image"}),r=i.createEl("img",{attr:{alt:t.name}}),s=URL.createObjectURL(t);r.src=s,r.addEventListener("load",()=>URL.revokeObjectURL(s),{once:!0});let m=i.createEl("button",{cls:"moments-selected-image-remove",attr:{type:"button"}});m.createSpan({text:"\xD7",attr:{"aria-hidden":"true"}}),m.createSpan({cls:"moments-visually-hidden",text:`\u79FB\u9664\u56FE\u7247 ${t.name}`}),m.addEventListener("click",()=>{this.selectedFiles.splice(o,1),this.renderSelectedImages(n,e),e?.()})})}syncMetaPanelVisibility(n,e,t){e.hasClass("is-hidden")&&t.hasClass("is-hidden")&&n.addClass("is-hidden")}};function pn(){return typeof MediaRecorder.isTypeSupported!="function"?void 0:["audio/webm;codecs=opus","audio/webm","audio/ogg;codecs=opus","audio/ogg","audio/mp4;codecs=mp4a.40.2","audio/mp4"].find(n=>MediaRecorder.isTypeSupported(n))}function hn(a,n){let e=n.split(";")[0]||"audio/webm",t=e==="audio/ogg"?"ogg":e==="audio/mp4"?"m4a":"webm";return new File([a],`recording-${Date.now()}.${t}`,{type:e})}function Rt(a,n,e){a.addEventListener("input",()=>{let t=a.value.replace(/\D/g,"").slice(0,2);a.value=t,t.length===2&&e?.()}),a.addEventListener("blur",()=>{a.value=et(a.value,n)})}function et(a,n){let e=Number.parseInt(a,10);return Number.isFinite(e)?String(Math.min(n,Math.max(0,e))).padStart(2,"0"):"00"}function un(a,n,e){let t=new Date(a),o=new Date,i=n===void 0?o.getHours():Number.parseInt(et(n,23),10),r=e===void 0?o.getMinutes():Number.parseInt(et(e,59),10);return t.setHours(i,r,0,0),t}var Bt=require("obsidian");function U(a,n,e={}){let t=e.includeLocation??!0,o=e.includeTags??!0,i=t&&!!n.location,r=o?n.tags:[];if(!i&&!r.length)return;let s=a.createDiv({cls:`moment-meta${e.detail?" moment-meta-detail":""}`});i&&n.location&&le(s,n.location),Ce(s,r)}function Ce(a,n){for(let e of n)a.createSpan({cls:"moment-meta-pill moment-tag"}).createSpan({text:`#${e}`})}function le(a,n,e="moment-meta-pill moment-location"){let t=a.createSpan({cls:e}),o=t.createSpan({cls:"moment-meta-icon"});return(0,Bt.setIcon)(o,"map-pin"),t.createSpan({text:n}),t}var $e=require("obsidian");function G(a,n,e="moments-page-back"){let t=a.createEl("button",{cls:e,attr:{type:"button"}}),o=t.createSpan({cls:"moments-page-back-icon"});return(0,$e.setIcon)(o,"arrow-left"),t.createSpan({text:"\u8FD4\u56DE\u9996\u9875"}),t.addEventListener("click",()=>void n()),t}function Re(a,n){for(let e of n){let t=a.vault.getAbstractFileByPath(e.path);if(t instanceof $e.TFile)return{image:e,file:t}}}function Q(a,n){n<=1||a.createSpan({cls:"moments-image-count-badge",text:String(n),attr:{"aria-label":`\u5171 ${n} \u5F20\u56FE\u7247`}})}function V(a,n){a.tabIndex=0,a.setAttribute("role","button"),a.addEventListener("click",()=>void n()),a.addEventListener("keydown",e=>{e.key!=="Enter"&&e.key!==" "||(e.preventDefault(),n())})}function ee(a){return new Date(a.getFullYear(),a.getMonth(),1,12,0,0,0)}function Ht(a,n){return new Date(a.getFullYear(),a.getMonth()+n,1,12,0,0,0)}function fe(a,n){let e=new Date(a.getFullYear(),a.getMonth()+1,0,12,0,0,0).getDate(),t=Math.min(e,Math.max(1,Math.floor(n)));return new Date(a.getFullYear(),a.getMonth(),t,12,0,0,0)}function Nt(a){let n=ee(a),e=new Date(n);return e.setDate(n.getDate()-n.getDay()),Array.from({length:42},(t,o)=>{let i=new Date(e);return i.setDate(e.getDate()+o),{date:i,dateKey:T(i),inCurrentMonth:i.getFullYear()===n.getFullYear()&&i.getMonth()===n.getMonth()}})}function Be(a,n){return a.getFullYear()===n.getFullYear()&&a.getMonth()===n.getMonth()&&a.getDate()===n.getDate()}var de="moments-calendar",gn=["\u65E5","\u4E00","\u4E8C","\u4E09","\u56DB","\u4E94","\u516D"],vn=Array.from({length:12},(a,n)=>`${n+1}\u6708`),ce=class extends q.ItemView{constructor(e,t,o,i){super(e);this.service=t;this.openMoment=o;this.openTimeline=i;this.selectedDay=He();this.monthAnchor=ee(this.selectedDay);this.scale="day";this.monthPickerOpen=!1;this.composingForDay=null;this.review=new Pe(t.index),this.composer=new me(t),this.audioChips=new se(this.app,"Calendar")}getViewType(){return de}getDisplayText(){return"\u65E5\u5386"}getIcon(){return"calendar-days"}showToday(){this.goToToday()}async onOpen(){let e=this.service.onChanged(()=>this.render());this.unsubscribe=()=>this.service.off(e),this.render()}async onClose(){this.unsubscribe?.(),this.audioChips.stop(),this.composer.dispose()}render(){this.audioChips.stop(),this.composer.beforeHostRender();let{contentEl:e}=this;e.empty(),e.addClass("moments-view","moments-calendar-view");let t=e.createDiv({cls:"moments-calendar-shell"}),o=t.createDiv({cls:"moments-page-nav"});G(o,this.openTimeline),t.createDiv({cls:"moments-calendar-page-header"}).createEl("h1",{cls:"moments-calendar-title",text:"\u65E5\u5386"});let r=t.createDiv({cls:"moments-calendar-scale-row"});this.renderScaleSwitch(r);let s=t.createDiv({cls:`moments-calendar-layout is-${this.scale}`});if(this.scale==="year"){this.renderYearPanel(s),this.renderYearReview(s);return}this.renderMonthPanel(s),this.scale==="month"?this.renderMonthReview(s):this.renderSelectedDay(s)}renderScaleSwitch(e){let t=e.createDiv({cls:"moments-calendar-scale-switch"}),o=[{scale:"day",label:"\u65E5"},{scale:"month",label:"\u6708"},{scale:"year",label:"\u5E74"}];for(let i of o)t.createEl("button",{cls:`moments-calendar-scale-option${this.scale===i.scale?" is-active":""}`,text:i.label,attr:{type:"button"}}).addEventListener("click",()=>{this.scale!==i.scale&&this.setScale(i.scale)})}renderMonthPanel(e){let t=e.createDiv({cls:"moments-calendar-month-panel"}),o=t.createDiv({cls:"moments-calendar-toolbar"});this.createIconButton(o,"chevron-left","\u4E0A\u4E2A\u6708").addEventListener("click",()=>this.moveMonth(-1));let r=o.createDiv({cls:"moments-calendar-month-control"}),s=r.createEl("button",{cls:`moments-calendar-month-title${this.monthPickerOpen?" is-open":""}`,attr:{type:"button"}});s.createSpan({text:`${this.monthAnchor.getFullYear()}\u5E74${this.monthAnchor.getMonth()+1}\u6708`});let m=s.createSpan({cls:"moments-calendar-month-title-icon"});(0,q.setIcon)(m,"chevron-down"),s.addEventListener("click",()=>{this.monthPickerOpen=!this.monthPickerOpen,this.render()}),this.monthPickerOpen&&this.renderMonthPicker(r);let c=this.createIconButton(o,"chevron-right","\u4E0B\u4E2A\u6708");c.addClass("moments-calendar-next-month"),c.addEventListener("click",()=>this.moveMonth(1)),o.createEl("button",{cls:"moments-calendar-today",text:"\u4ECA\u5929",attr:{type:"button"}}).addEventListener("click",()=>this.goToToday());let l=t.createDiv({cls:"moments-calendar-weekdays"});for(let g of gn)l.createSpan({text:g});let p=t.createDiv({cls:"moments-calendar-grid"}),h=He();for(let g of Nt(this.monthAnchor)){let L=this.service.index.forDate(g.dateKey),M=["moments-calendar-day",g.inCurrentMonth?"is-current-month":"is-outside-month",this.scale==="day"&&Be(g.date,this.selectedDay)?"is-selected":"",Be(g.date,h)?"is-today":""].filter(Boolean).join(" "),A=p.createEl("button",{cls:M,attr:{type:"button"}});A.createSpan({cls:"moments-calendar-day-number",text:String(g.date.getDate())}),A.createSpan({cls:"moments-visually-hidden",text:`${g.date.getFullYear()}\u5E74${ue(g.date)}\uFF0C${L.length} \u6761\u8BB0\u5F55`}),this.renderDayIndicator(A,L),A.addEventListener("click",()=>this.openDay(g.date))}let v=t.createDiv({cls:"moments-calendar-legend"});this.renderLegendItem(v,1,"1 \u6761\u8BB0\u5F55"),this.renderLegendItem(v,2,"2 \u6761\u8BB0\u5F55"),this.renderLegendItem(v,3,"3+ \u6761\u8BB0\u5F55")}renderMonthPicker(e){let t=e.createDiv({cls:"moments-calendar-month-picker"}),o=this.monthAnchor.getFullYear(),i=t.createDiv({cls:"moments-calendar-month-picker-year"}),r=this.createIconButton(i,"chevron-left","\u4E0A\u4E00\u5E74");r.addClass("moments-calendar-year-step");let s=i.createEl("input",{cls:"moments-calendar-year-input",attr:{type:"number",min:"1900",max:"9999",inputmode:"numeric",value:String(o)}}),m=this.createIconButton(i,"chevron-right","\u4E0B\u4E00\u5E74");m.addClass("moments-calendar-year-step");let c=l=>{o=Math.min(9999,Math.max(1900,l)),s.value=String(o)};r.addEventListener("click",()=>c(o-1)),m.addEventListener("click",()=>c(o+1)),s.addEventListener("input",()=>{let l=Number.parseInt(s.value,10);Number.isFinite(l)&&(o=Math.min(9999,Math.max(1900,l)))}),s.addEventListener("blur",()=>c(o));let d=t.createDiv({cls:"moments-calendar-month-picker-grid"});vn.forEach((l,p)=>{let h=o===this.monthAnchor.getFullYear()&&p===this.monthAnchor.getMonth();d.createEl("button",{cls:`moments-calendar-month-option${h?" is-current":""}`,text:l,attr:{type:"button"}}).addEventListener("click",()=>this.jumpToMonth(o,p))})}renderDayIndicator(e,t){if(!t.length)return;let o=e.createDiv({cls:"moments-calendar-day-indicator"}),i=this.findRepresentativeImage(t);if(i){let s=o.createEl("img",{cls:"moments-calendar-day-image",attr:{alt:i.image.alt??""}});s.src=this.app.vault.getResourcePath(i.file)}let r=o.createSpan({cls:"moments-calendar-day-dots"});for(let s=0;s<Math.min(3,t.length);s+=1)r.createSpan({cls:"moments-calendar-dot"})}renderLegendItem(e,t,o){let i=e.createDiv({cls:"moments-calendar-legend-item"}),r=i.createSpan({cls:"moments-calendar-legend-dots"});for(let s=0;s<t;s+=1)r.createSpan({cls:"moments-calendar-dot"});i.createSpan({text:o})}renderSelectedDay(e){let t=e.createDiv({cls:"moments-calendar-day-panel"}),o=this.service.index.forDate(T(this.selectedDay)),i=t.createDiv({cls:"moments-calendar-day-panel-header"}),r=i.createDiv({cls:"moments-calendar-day-panel-title-row"});if(r.createEl("h2",{text:ue(this.selectedDay)}),o.length&&!this.composingForDay&&r.createEl("button",{cls:"moments-calendar-add-button",text:"\uFF0B \u6DFB\u52A0",attr:{type:"button"}}).addEventListener("click",()=>{this.composingForDay=new Date(this.selectedDay),this.render()}),i.createDiv({cls:"moments-calendar-day-panel-summary",text:o.length?`${qe(this.selectedDay)} \xB7 ${o.length} \u6761\u8BB0\u5F55`:qe(this.selectedDay)}),this.composingForDay&&Be(this.composingForDay,this.selectedDay)){let m=t.createDiv({cls:"moments-calendar-backfill"});this.composer.render(m,()=>{let c=this.composingForDay?new Date(this.composingForDay):new Date(this.selectedDay);this.composingForDay=null,this.selectedDay=c,this.monthAnchor=ee(this.selectedDay),this.render()},{targetDate:this.composingForDay,heading:"\u4F60\u8FD8\u8BB0\u5F97\u90A3\u5929\u53D1\u751F\u4E86\u4EC0\u4E48\uFF1F"});return}if(!o.length){let m=t.createDiv({cls:"moments-calendar-day-empty"});m.createEl("strong",{text:"\u4F60\u8FD8\u8BB0\u5F97\u90A3\u5929\u53D1\u751F\u4E86\u4EC0\u4E48\uFF1F"}),m.createEl("button",{cls:"moments-calendar-empty-add",text:"\uFF0B \u6DFB\u52A0",attr:{type:"button"}}).addEventListener("click",()=>{this.composingForDay=new Date(this.selectedDay),this.render()});return}let s=t.createDiv({cls:"moments-calendar-day-list"});for(let m of o)this.renderSelectedMoment(s,m)}renderMonthReview(e){let t=this.review.getMonthReview(this.monthAnchor.getFullYear(),this.monthAnchor.getMonth()),o=e.createDiv({cls:"moments-calendar-review-panel moments-calendar-month-review"}),i=o.createDiv({cls:"moments-calendar-review-overview"});i.createEl("h2",{text:`${t.year}\u5E74${t.month}\u6708`}),t.fragments.length&&i.createDiv({cls:"moments-calendar-review-count",text:`\u968F\u673A ${t.fragments.length} \u6761\u8BB0\u5F55`});let s=o.createDiv({cls:"moments-calendar-review-fragments is-headingless"}).createDiv({cls:"moments-calendar-month-fragment-grid"});for(let c of t.fragments)this.renderReviewFragment(s,c,"month");let m=o.createDiv({cls:"moments-calendar-review-common"});this.renderReviewCountBlock(m,"tag","\u5E38\u63D0\u5230",t.commonTags,!0),this.renderReviewCountBlock(m,"map-pin","\u5E38\u53BB",t.commonLocations,!1)}renderYearPanel(e){let t=this.monthAnchor.getFullYear(),o=this.review.getYearReview(t),i=e.createDiv({cls:"moments-calendar-year-panel"}),r=i.createDiv({cls:"moments-calendar-year-toolbar"});this.createIconButton(r,"chevron-left","\u4E0A\u4E00\u5E74").addEventListener("click",()=>this.moveYear(-1)),r.createEl("button",{cls:"moments-calendar-year-current",text:String(t),attr:{type:"button"}}),this.createIconButton(r,"chevron-right","\u4E0B\u4E00\u5E74").addEventListener("click",()=>this.moveYear(1));let c=i.createDiv({cls:"moments-calendar-year-grid"}),d=He();for(let l of o.months){let p=t===d.getFullYear()&&l.month===d.getMonth()+1,h=c.createEl("button",{cls:["moments-calendar-year-month",l.momentCount?"has-moments":"",p?"is-current":""].filter(Boolean).join(" "),attr:{type:"button","aria-label":l.momentCount?`${t}\u5E74${l.month}\u6708\uFF0C${l.momentCount} \u6761\u8BB0\u5F55`:`${t}\u5E74${l.month}\u6708\uFF0C\u65E0\u8BB0\u5F55`}}),v=h.createSpan({cls:"moments-calendar-year-month-top"});v.createSpan({cls:"moments-calendar-year-month-name",text:`${l.month}\u6708`}),l.momentCount&&v.createSpan({cls:"moments-calendar-year-month-count",text:`${l.momentCount} \u6761`});let g=l.representative?this.findRepresentativeImage([l.representative]):void 0,L=h.createSpan({cls:"moments-calendar-year-month-media"});if(g){let M=L.createEl("img",{cls:"moments-calendar-year-month-image",attr:{alt:g.image.alt??""}});M.src=this.app.vault.getResourcePath(g.file)}h.addEventListener("click",()=>this.openMonth(t,l.month-1))}}renderYearReview(e){let t=this.review.getYearReview(this.monthAnchor.getFullYear()),o=e.createDiv({cls:"moments-calendar-review-panel moments-calendar-year-review"}),i=o.createDiv({cls:"moments-calendar-review-overview"});i.createEl("h2",{text:`${t.year}\u5E74`});let r=t.months.filter(d=>!!d.representative).length;r&&i.createDiv({cls:"moments-calendar-review-count",text:`\u968F\u673A ${r} \u6761\u8BB0\u5F55`});let m=o.createDiv({cls:"moments-calendar-review-fragments is-headingless"}).createDiv({cls:"moments-calendar-year-fragment-list"});for(let d of t.months)d.representative&&this.renderReviewFragment(m,d.representative,"year");let c=o.createDiv({cls:"moments-calendar-review-common"});this.renderReviewCountBlock(c,"tag","\u5E38\u63D0\u5230",t.commonTags,!0),this.renderReviewCountBlock(c,"map-pin","\u5E38\u53BB",t.commonLocations,!1)}renderReviewFragment(e,t,o){let i=this.findRepresentativeImage([t]),r=e.createEl("button",{cls:["moments-calendar-review-fragment",`is-${o}`,i?"has-image":"",t.content?"has-text":"",t.audio?"has-audio":"",t.tags.length?"has-tags":"",t.location?"has-location":""].filter(Boolean).join(" "),attr:{type:"button"}}),s=D(t.createdAt);if(o==="month"){let l=r.createSpan({cls:"moments-calendar-review-fragment-topline"});l.createSpan({cls:"moments-calendar-review-fragment-date",text:`${s.month}\u6708${s.day}\u65E5`}),t.location&&le(l,t.location,"moments-calendar-moment-location moments-calendar-review-fragment-location")}else r.createSpan({cls:"moments-calendar-review-fragment-date",text:`${s.month}\u6708`}),r.createSpan({cls:"moments-calendar-year-timeline-rail"}).createSpan({cls:"moments-calendar-year-timeline-dot"});let m=o==="year"?r.createSpan({cls:"moments-calendar-review-fragment-year-content"}):r;if(o==="year"){let l=m.createSpan({cls:"moments-calendar-review-fragment-year-location-line"});t.location&&le(l,t.location,"moments-calendar-moment-location moments-calendar-review-fragment-year-location")}let c=o==="year"?m.createSpan({cls:`moments-calendar-review-fragment-year-main${i?" has-image":""}`}):m.createSpan({cls:`moments-calendar-review-fragment-month-main${i?" has-image":""}`});if(i){let l=c.createSpan({cls:"moments-calendar-review-fragment-media"}),p=l.createEl("img",{cls:"moments-calendar-review-fragment-image",attr:{alt:i.image.alt??""}});p.src=this.app.vault.getResourcePath(i.file),Q(l,i.imageCount)}let d=c.createSpan({cls:"moments-calendar-review-fragment-body"});if(t.content&&d.createSpan({cls:"moments-calendar-review-fragment-text",text:t.content}),t.audio&&this.audioChips.render(d,t),t.tags.length){let l=(o==="month"?r:d).createSpan({cls:`moment-meta moments-calendar-review-fragment-tags${o==="month"?" is-month-footer":""}`}),p=o==="month"?t.tags.slice(0,2):t.tags;Ce(l,p),o==="month"&&t.tags.length>p.length&&l.createSpan({cls:"moment-meta-pill moment-tag moments-calendar-review-more-tags",text:`+${t.tags.length-p.length}`,attr:{"aria-label":`\u8FD8\u6709 ${t.tags.length-p.length} \u4E2A\u6807\u7B7E`}})}r.addEventListener("click",()=>void this.openMoment(t.id))}renderReviewCountBlock(e,t,o,i,r){let s=e.createDiv({cls:"moments-calendar-review-common-block"});if(!i.length)return;let m=s.createDiv({cls:"moments-calendar-review-common-heading"}),c=m.createSpan();(0,q.setIcon)(c,t),m.createSpan({text:o});let d=s.createDiv({cls:`moments-calendar-review-common-list${r?" moment-meta":" is-locations"}`});if(r){Ce(d,i.map(l=>l.label));return}for(let l of i)le(d,l.label,"moments-calendar-moment-location moments-calendar-review-common-location")}renderSelectedMoment(e,t){let o=this.findRepresentativeImage([t]),i=e.createDiv({cls:`moments-calendar-moment${o?" has-images":""}`});V(i,()=>this.openMoment(t.id)),i.createSpan({cls:"moments-visually-hidden",text:"\u67E5\u770B\u8BB0\u5F55\u8BE6\u60C5"});let r=i.createDiv({cls:"moments-calendar-moment-topline"});r.createDiv({cls:"moments-calendar-moment-time",text:re(t.createdAt)}),t.location&&le(r,t.location,"moments-calendar-moment-location"),o&&this.renderMomentImage(i,o);let s=i.createDiv({cls:"moments-calendar-moment-body"});t.content&&s.createDiv({cls:"moments-calendar-moment-content",text:t.content}),t.audio&&this.audioChips.render(s,t),U(s,t,{includeLocation:!1})}renderMomentImage(e,t){let o=e.createDiv({cls:"moments-calendar-moment-thumb"}),i=o.createEl("img",{attr:{alt:t.image.alt??""}});i.src=this.app.vault.getResourcePath(t.file),Q(o,t.imageCount)}findRepresentativeImage(e){for(let t of e)for(let o of t.images){let i=this.app.vault.getAbstractFileByPath(o.path);if(i instanceof q.TFile)return{image:o,file:i,imageCount:t.images.length}}}createIconButton(e,t,o){let i=e.createEl("button",{cls:"moments-calendar-icon-button",attr:{type:"button"}}),r=i.createSpan();return(0,q.setIcon)(r,t),i.createSpan({cls:"moments-visually-hidden",text:o}),i}setScale(e){this.scale=e,this.monthPickerOpen=!1,this.composingForDay=null,e==="day"?this.monthAnchor=ee(this.selectedDay):e==="month"&&(this.selectedDay=fe(this.monthAnchor,this.selectedDay.getDate())),this.render()}openDay(e){this.selectedDay=new Date(e),this.monthAnchor=ee(this.selectedDay),this.setScale("day")}openMonth(e,t){this.updateMonthSelection(e,t),this.setScale("month")}updateMonthSelection(e,t){let o=this.selectedDay.getDate();this.monthAnchor=new Date(e,t,1,12,0,0,0),this.selectedDay=fe(this.monthAnchor,o)}moveMonth(e){let t=this.selectedDay.getDate();this.monthAnchor=Ht(this.monthAnchor,e),this.selectedDay=fe(this.monthAnchor,t),this.monthPickerOpen=!1,this.composingForDay=null,this.render()}moveYear(e){let t=this.monthAnchor.getFullYear()+e;this.monthAnchor=new Date(t,this.monthAnchor.getMonth(),1,12,0,0,0),this.selectedDay=fe(this.monthAnchor,this.selectedDay.getDate()),this.monthPickerOpen=!1,this.composingForDay=null,this.render()}jumpToMonth(e,t){this.updateMonthSelection(e,t),this.monthPickerOpen=!1,this.composingForDay=null,this.render()}goToToday(){this.selectedDay=He(),this.monthAnchor=ee(this.selectedDay),this.monthPickerOpen=!1,this.composingForDay=null,this.render()}};function He(){let a=new Date;return new Date(a.getFullYear(),a.getMonth(),a.getDate(),12,0,0,0)}var we=require("obsidian");var he="moments-memories",fn=20,pe=class extends we.ItemView{constructor(e,t,o,i){super(e);this.service=t;this.openMoment=o;this.openTimeline=i;this.selectedDay=Ne(new Date);this.icon="history"}getViewType(){return he}getDisplayText(){return"\u56DE\u5FC6"}getIcon(){return"history"}showToday(){this.selectDay(Ne(new Date))}async onOpen(){let e=this.service.onChanged(()=>this.render());this.unsubscribe=()=>this.service.off(e),this.render()}async onClose(){this.unsubscribe?.()}render(){let{contentEl:e}=this;e.empty(),e.addClass("moments-view","moments-memories-view");let t=e.createDiv({cls:"moments-memories-shell"}),o=t.createDiv({cls:"moments-page-nav"});G(o,this.openTimeline),t.createDiv({cls:"moments-memories-page-header"}).createEl("h1",{cls:"moments-memories-title",text:"\u56DE\u5FC6"}),this.renderDateNavigation(t),this.renderMemories(t)}renderDateNavigation(e){let t=Ne(new Date),o=yn(this.selectedDay,t),i=e.createDiv({cls:`moments-memories-date-strip${o?"":" has-today-action"}`,attr:{"aria-label":"\u56DE\u5FC6\u65E5\u671F"}}),r=i.createEl("button",{cls:"moments-memories-date-shift",attr:{type:"button","aria-label":"\u4E0A\u4E00\u5468"}});(0,we.setIcon)(r.createSpan(),"chevron-left"),r.addEventListener("click",()=>{this.selectDay(ge(this.selectedDay,-7))});let s=i.createDiv({cls:"moments-memories-date-days"}),m=ie(t);for(let d=-3;d<=3;d+=1){let l=ge(this.selectedDay,d),p=this.resolveMemories(l).length>0,h=d===0,v=ie(l)===m,g=s.createEl("button",{cls:["moments-memories-date-day",h?"is-selected":"",v?"is-today":"",p?"has-memories":""].filter(Boolean).join(" "),attr:{type:"button","aria-label":ue(l),"aria-current":h?"date":"false"}});g.createSpan({cls:"moments-memories-date-day-label",text:`${l.getMonth()+1}/${l.getDate()}`}),g.createSpan({cls:"moments-memories-date-day-sub-label",text:v?"\u4ECA\u5929":wn(l)}),g.createSpan({cls:`moments-memories-date-day-dot${p?"":" is-empty"}`,attr:{"aria-hidden":"true"}}),g.addEventListener("click",()=>{this.selectDay(l)})}let c=i.createEl("button",{cls:"moments-memories-date-shift",attr:{type:"button","aria-label":"\u4E0B\u4E00\u5468"}});(0,we.setIcon)(c.createSpan(),"chevron-right"),c.addEventListener("click",()=>{this.selectDay(ge(this.selectedDay,7))}),o||i.createEl("button",{cls:"moments-memories-today-action",text:"\u4ECA\u5929",attr:{type:"button","aria-label":"\u56DE\u5230\u4ECA\u5929"}}).addEventListener("click",()=>{this.selectDay(t)})}selectDay(e){this.selectedDay=Ne(e),this.render(),this.contentEl.querySelector(".moments-memories-list")?.scrollTo({top:0,behavior:"auto"})}renderMemories(e){let t=this.resolveMemories();if(!t.length){let i=e.createDiv({cls:"moments-memories-empty"});i.createEl("strong",{text:"\u56DE\u5FC6\u6B63\u5728\u5F62\u6210"}),i.createSpan({text:"\u7559\u4E0B 20 \u6761\u4EE5\u4E0A\u8BB0\u5F55\uFF0C\u5373\u53EF\u5F00\u542F\u56DE\u5FC6\u3002"});return}let o=e.createDiv({cls:"moments-memories-list"});for(let i of t){let r=o.createDiv({cls:"moments-memory-year-group"});r.createEl("h2",{cls:"moments-memory-year-heading",text:i.label});let s=r.createDiv({cls:"moments-memory-cards"});for(let m of i.moments)this.renderMemoryCard(s,m)}}resolveMemories(e=this.selectedDay){if(this.service.index.all().length<fn)return[];let t=this.resolveYearGroups(e);if(t.length)return t;let o=Ot(e);if(o){let i=this.resolveMonthGroups(o);if(i.length)return i;let r=this.resolveWeekGroups(o);if(r.length)return r;let s=this.resolveRecentGroups(o);if(s.length)return s}return[]}resolveYearGroups(e){let t=new Date().getFullYear(),o=new Map;for(let i of this.service.index.forMonthDay(ie(e))){let r=D(i.createdAt).year;if(r>=t)continue;let s=t-r,m=o.get(s)??[];m.push(i),o.set(s,m)}return[...o.keys()].sort((i,r)=>i-r).map(i=>({label:`${i}\u5E74\u524D`,moments:o.get(i)??[]}))}resolveMonthGroups(e){let t=[],o=T(new Date);for(let i=1;i<=11;i+=1){let r=xn(e,-i);if(T(r)>=o)continue;let s=this.service.index.forDate(T(r));s.length&&t.push({label:`${i}\u4E2A\u6708\u524D`,moments:s})}return t}resolveWeekGroups(e){let t=[],o=T(new Date);for(let i=1;i<=8;i+=1){let r=ge(e,-(i*7));if(T(r)>=o)continue;let s=this.service.index.forDate(T(r));s.length&&t.push({label:`${i}\u5468\u524D`,moments:s})}return t}resolveRecentGroups(e){let t=T(new Date),o=T(e),i=o<t?o:t,r=this.service.index.all().find(s=>I(s.createdAt)<i);return r?[{label:"\u6700\u8FD1",moments:this.service.index.forDate(I(r.createdAt))}]:[]}renderMemoryCard(e,t){let o=Re(this.app,t.images),i=!!o,r=e.createDiv({cls:`moments-memory-card moment-card-clickable${i?"":" is-text-only"}`});if(V(r,()=>this.openMoment(t.id)),o){let l=r.createDiv({cls:"moments-memory-card-media"}),p=l.createEl("img",{cls:"moments-memory-card-image",attr:{alt:o.image.alt??""}});p.src=this.app.vault.getResourcePath(o.file),Q(l,t.images.length)}let s=r.createDiv({cls:"moments-memory-card-body"}),m=[J(t.createdAt),pt(t.createdAt)];s.createDiv({cls:"moments-memory-card-date",text:m.join(" \xB7 ")}),t.content&&s.createEl("p",{cls:"moments-memory-card-content",text:t.content});let d=s.createDiv({cls:"moments-memory-card-footer"}).createDiv();U(d,t)}};function Ot(a){let n=new Date().getFullYear(),e=new Date(n,a.getMonth(),a.getDate(),12,0,0,0);return e.getMonth()!==a.getMonth()||e.getDate()!==a.getDate()?null:e}function wn(a){let n=Ot(a)??a;return ct(n)}function xn(a,n){let e=new Date(a.getFullYear(),a.getMonth()+n,1,12,0,0,0),t=new Date(e.getFullYear(),e.getMonth()+1,0,12,0,0,0).getDate();return new Date(e.getFullYear(),e.getMonth(),Math.min(a.getDate(),t),12,0,0,0)}function Ne(a){return new Date(2e3,a.getMonth(),a.getDate(),12,0,0,0)}function yn(a,n){return ie(a)===ie(n)}var ye=require("obsidian");var K=require("obsidian");var xe=require("obsidian");function Oe(a,n,e,t={}){if(!e.audio)return null;let o=a.vault.getAbstractFileByPath(e.audio.path);if(!(o instanceof xe.TFile))return null;let i=n.createDiv({cls:"moment-detail-audio"}),r=i.createDiv({cls:"moment-detail-audio-heading"}),s=r.createSpan();if((0,xe.setIcon)(s,"mic"),r.createSpan({text:e.audio.durationMs?`\u8BED\u97F3 \xB7 ${Qe(e.audio.durationMs)}`:"\u8BED\u97F3"}),t.onRemove){let m=r.createEl("button",{cls:"moment-edit-audio-remove",attr:{type:"button","aria-label":"\u79FB\u9664\u8BED\u97F3"}}),c=m.createSpan();(0,xe.setIcon)(c,"x"),m.addEventListener("click",t.onRemove)}return Le(i,a.vault.getResourcePath(o),{className:"moment-detail-audio-player",durationMs:e.audio.durationMs})}var ze=class{constructor(n,e){this.app=n;this.service=e;this.audioPlayers=[]}beforeHostRender(){this.disposeAudioPlayers()}dispose(){this.disposeAudioPlayers()}render(n,e,t){let o=n.createDiv({cls:"moments-page-shell moment-detail-shell"}),i=o.createDiv({cls:"moments-page-nav moment-detail-nav"});G(i,t.onBack,"moments-page-back moment-detail-back");let r=o.createEl("article",{cls:"moment-detail"}),s=r.createDiv({cls:"moment-detail-heading"}),m=s.createDiv();m.createEl("h1",{cls:"moment-detail-date",text:J(e.createdAt)}),m.createDiv({cls:"moment-detail-time",text:Me(e.createdAt)});let c=s.createDiv({cls:"moments-action-cluster moment-detail-actions"}),d=c.createEl("button",{cls:"moments-action-cluster-button is-danger moment-detail-delete",attr:{type:"button"}}),l=d.createSpan({cls:"moment-detail-delete-icon"});(0,K.setIcon)(l,"trash-2"),d.createSpan({cls:"moments-visually-hidden",text:"\u5220\u9664 Moment"}),d.addEventListener("click",async()=>{d.disabled=!0;try{await this.service.delete(e),t.onDeleted()}catch(g){console.error("[Moments] Failed to delete moment",g),new K.Notice("\u5220\u9664\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\u3002"),d.disabled=!1}}),c.createEl("button",{cls:"moments-action-cluster-button moment-detail-edit",text:"\u7F16\u8F91"}).addEventListener("click",t.onEdit),e.content&&r.createDiv({cls:"moment-detail-content",text:e.content});let h=Oe(this.app,r,e);h&&this.audioPlayers.push(h),this.renderDetailImages(r,e),U(r,e,{detail:!0});let v=r.createDiv({cls:"moment-detail-timestamps"});this.renderTimestamp(v,"\u521B\u5EFA\u4E8E",e.createdAt),bn(e)&&this.renderTimestamp(v,"\u7F16\u8F91\u4E8E",e.updatedAt)}renderDetailImages(n,e){if(!e.images.length)return;let t=n.createDiv({cls:`moment-detail-carousel${e.images.length===1?" is-single":""}`}),o=t.createDiv({cls:"moment-detail-carousel-viewport",attr:{tabindex:"0",role:"region"}}),i=o.createDiv({cls:"moment-detail-carousel-track"}),r=(u,f=!1)=>{let x=e.images[u];if(!x)return;let k=i.createDiv({cls:"moment-detail-carousel-slide",attr:f?{"aria-hidden":"true"}:{role:"group"}});f||k.createSpan({cls:"moments-visually-hidden",text:`\u7B2C ${u+1} \u5F20\uFF0C\u5171 ${e.images.length} \u5F20`});let P=this.app.vault.getAbstractFileByPath(x.path);if(!(P instanceof K.TFile)){k.createDiv({cls:"moment-detail-carousel-missing",text:"\u56FE\u7247\u6587\u4EF6\u5DF2\u7F3A\u5931"});return}let z=k.createDiv({cls:"moment-detail-carousel-image-frame"}).createEl("img",{cls:"moment-detail-carousel-image",attr:{alt:x.alt??""}});z.src=this.app.vault.getResourcePath(P)};if(e.images.length===1){r(0);return}r(e.images.length-1,!0),e.images.forEach((u,f)=>r(f)),r(0,!0);let s=t.createDiv({cls:"moment-detail-carousel-counter",text:`1 / ${e.images.length}`,attr:{"aria-live":"polite"}}),m=t.createEl("button",{cls:"moment-detail-carousel-nav moment-detail-carousel-prev",attr:{type:"button"}});m.createSpan({cls:"moments-visually-hidden",text:"\u4E0A\u4E00\u5F20\u56FE\u7247"});let c=m.createSpan();(0,K.setIcon)(c,"chevron-left");let d=t.createEl("button",{cls:"moment-detail-carousel-nav moment-detail-carousel-next",attr:{type:"button"}});d.createSpan({cls:"moments-visually-hidden",text:"\u4E0B\u4E00\u5F20\u56FE\u7247"});let l=d.createSpan();(0,K.setIcon)(l,"chevron-right");let p=e.images.length,h=1,v=0,g=0,L=u=>u<=0?p-1:u>=p+1?0:u-1,M=u=>{h=Math.max(0,Math.min(p+1,u));let f=L(h);s.setText(`${f+1} / ${p}`)},A=u=>{let f=Math.max(1,o.clientWidth);o.classList.add("is-jumping"),o.scrollLeft=u*f,M(u),requestAnimationFrame(()=>o.classList.remove("is-jumping"))},j=()=>{h===0?A(p):h===p+1&&A(1)},R=()=>{g&&cancelAnimationFrame(g),g=requestAnimationFrame(()=>{g=0,j()})},_=(u,f="smooth")=>{let x=Math.max(0,Math.min(p+1,u)),k=Math.max(1,o.clientWidth);o.scrollTo({left:x*k,behavior:f}),M(x),(x===0||x===p+1)&&window.setTimeout(R,f==="smooth"?260:0)},E=u=>{_(h+u)};m.addEventListener("click",()=>E(-1)),d.addEventListener("click",()=>E(1)),o.addEventListener("keydown",u=>{u.key==="ArrowLeft"?(u.preventDefault(),E(-1)):u.key==="ArrowRight"&&(u.preventDefault(),E(1))}),o.addEventListener("scroll",()=>{v&&cancelAnimationFrame(v),v=requestAnimationFrame(()=>{v=0;let u=Math.max(1,o.clientWidth),f=Math.max(0,Math.min(p+1,Math.round(o.scrollLeft/u)));M(f);let x=f*u;Math.abs(o.scrollLeft-x)<1.5&&(f===0||f===p+1)&&R()})});let B=null,H=0,W=0,N=!1;o.addEventListener("pointerdown",u=>{u.pointerType!=="mouse"||u.button!==0||(B=u.pointerId,H=u.clientX,W=o.scrollLeft,N=!1)}),o.addEventListener("pointermove",u=>{if(B!==u.pointerId)return;let f=u.clientX-H;!N&&Math.abs(f)>6&&(N=!0,o.classList.add("is-dragging"),o.setPointerCapture(u.pointerId)),N&&(u.preventDefault(),o.scrollLeft=W-f)});let ne=u=>{if(B!==u.pointerId)return;o.hasPointerCapture(u.pointerId)&&o.releasePointerCapture(u.pointerId),o.classList.remove("is-dragging"),B=null;let f=Math.max(1,o.clientWidth),x=Math.max(0,Math.min(p+1,Math.round(o.scrollLeft/f)));_(x)};o.addEventListener("pointerup",ne),o.addEventListener("pointercancel",ne);let O=()=>{if(o.clientWidth<=0){requestAnimationFrame(O);return}A(1)};O()}renderTimestamp(n,e,t){let o=n.createDiv({cls:"moment-detail-timestamp"});o.createSpan({cls:"moment-detail-timestamp-label",text:e}),o.createSpan({cls:"moment-detail-timestamp-value",text:ht(t)})}disposeAudioPlayers(){for(let n of this.audioPlayers)n.destroy();this.audioPlayers=[]}};function bn(a){return a.updatedAt!==a.createdAt}var Y=require("obsidian");var Ye=class{constructor(n,e){this.app=n;this.service=e;this.audioPlayers=[]}beforeHostRender(){this.disposeAudioPlayers()}dispose(){this.disposeAudioPlayers()}render(n,e,t){let o=n.createDiv({cls:"moments-page-shell moment-detail-shell"}),i=o.createDiv({cls:"moments-page-nav moment-detail-nav"});G(i,t.onBack,"moments-page-back moment-detail-back");let r=o.createDiv({cls:"moment-edit"}),s=r.createDiv({cls:"moment-edit-heading"}),m=s.createDiv();m.createEl("h1",{cls:"moment-detail-date",text:J(e.createdAt)}),m.createDiv({cls:"moment-detail-time",text:Me(e.createdAt)});let c=s.createDiv({cls:"moments-action-cluster moment-edit-top-actions"}),d=c.createEl("button",{text:"\u53D6\u6D88",cls:"moments-action-cluster-button"}),l=c.createEl("button",{text:"\u4FDD\u5B58",cls:"moments-action-cluster-button is-primary"}),p=r.createEl("textarea",{cls:"moment-edit-content",attr:{rows:"8",placeholder:"\u8FD9\u4E00\u523B\u53D1\u751F\u4E86\u4EC0\u4E48\uFF1F"}});p.value=e.content;let h=[...e.images],v=[],g=r.createDiv({cls:"moment-edit-image-section"}),L=g.createDiv({cls:"moment-edit-image-header"});L.createEl("strong",{cls:"moment-edit-image-title",text:"\u56FE\u7247"});let M=L.createSpan({cls:"moment-edit-image-count"}),A=g.createDiv({cls:"moment-edit-image-grid"}),j=()=>{A.empty();let k=h.length+v.length;if(M.setText(`${k} / ${b.maxImagesPerMoment}`),h.forEach(P=>{let F=this.app.vault.getAbstractFileByPath(P.path);if(!(F instanceof Y.TFile))return;let z=this.createEditableImageItem(A),oe=z.createEl("img",{cls:"moment-edit-image-thumb",attr:{alt:P.alt??""}});oe.src=this.app.vault.getResourcePath(F),this.createImageRemoveButton(z).addEventListener("click",()=>{h=h.filter(ot=>ot.path!==P.path),j()})}),v.forEach((P,F)=>{let z=this.createEditableImageItem(A),oe=z.createEl("img",{cls:"moment-edit-image-thumb",attr:{alt:P.name}}),We=URL.createObjectURL(P);oe.src=We,oe.addEventListener("load",()=>URL.revokeObjectURL(We),{once:!0}),this.createImageRemoveButton(z).addEventListener("click",()=>{v.splice(F,1),j()})}),k<b.maxImagesPerMoment){let P=A.createEl("button",{cls:"moment-edit-image-add",attr:{type:"button"}}),F=P.createSpan();(0,Y.setIcon)(F,"plus"),P.createSpan({cls:"moments-visually-hidden",text:"\u6DFB\u52A0\u56FE\u7247"}),P.addEventListener("click",()=>{let z=Math.max(0,b.maxImagesPerMoment-h.length-v.length);Ie(z,oe=>{v=[...v,...oe],j()})})}};j();let R=!1,_=r.createDiv({cls:"moment-edit-audio-host"}),E=null;E=Oe(this.app,_,e,{onRemove:()=>{R=!0,E&&(E.destroy(),this.audioPlayers=this.audioPlayers.filter(k=>k!==E),E=null),_.empty()}}),E&&this.audioPlayers.push(E);let B=r.createDiv({cls:"moment-edit-fields"}),H=B.createDiv({cls:"moment-edit-field"}),W=H.createDiv({cls:"moment-edit-field-label"}),N=W.createSpan();(0,Y.setIcon)(N,"map-pin"),W.createSpan({text:"\u5730\u70B9"});let ne=H.createEl("input",{type:"text",attr:{placeholder:"\u8F93\u5165\u5730\u70B9"}});ne.value=e.location??"";let O=B.createDiv({cls:"moment-edit-field"}),u=O.createDiv({cls:"moment-edit-field-label"}),f=u.createSpan();(0,Y.setIcon)(f,"tag"),u.createSpan({text:"\u6807\u7B7E"});let x=Fe(O,e.tags);d.addEventListener("click",t.onCancel),l.addEventListener("click",async()=>{let k=p.value.trim(),P=!!(e.audio&&!R);if(!(!k&&h.length+v.length===0&&!P)){l.disabled=!0;try{await this.service.update(e,{content:k,location:ne.value,tags:x.getTags(),keptImagePaths:h.map(F=>F.path),images:v,removeAudio:R}),t.onSaved()}catch(F){console.error("[Moments] Failed to update moment",F),new Y.Notice("\u4FDD\u5B58\u5931\u8D25\uFF0C\u8BF7\u7A0D\u540E\u91CD\u8BD5\u3002")}finally{l.disabled=!1}}})}createEditableImageItem(n){return n.createDiv({cls:"moment-edit-image-item"})}createImageRemoveButton(n){let e=n.createEl("button",{cls:"moment-edit-image-remove",attr:{type:"button"}}),t=e.createSpan();return(0,Y.setIcon)(t,"x"),e.createSpan({cls:"moments-visually-hidden",text:"\u79FB\u9664\u56FE\u7247"}),e}disposeAudioPlayers(){for(let n of this.audioPlayers)n.destroy();this.audioPlayers=[]}};var nt=require("obsidian");function tt(a){return Number.isFinite(a)?Math.max(1,Math.floor(a)):1}function zt(a,n,e){let t=Math.max(0,Math.floor(n)),o=Math.max(0,Math.floor(a));return Math.min(t,o+tt(e))}var je=class{constructor(n,e){this.app=n;this.service=e;this.visibleMomentLimit=null;this.audioChips=new se(n,"Timeline")}beforeHostRender(){this.audioChips.stop()}dispose(){this.audioChips.stop()}render(n,e){let t=this.service.index.all(),o=tt(b.pageSize);this.visibleMomentLimit=Math.max(o,this.visibleMomentLimit??o);let i=t.slice(0,this.visibleMomentLimit);if(!i.length){n.createDiv({cls:"moments-empty"}).createEl("p",{text:"\u4ECE\u8BB0\u5F55\u8FD9\u4E00\u523B\u5F00\u59CB"});return}let r=new Map;for(let c of i){let d=I(c.createdAt),l=r.get(d)??[];l.push(c),r.set(d,l)}for(let[,c]of r){let d=n.createDiv({cls:"moments-day-section"});d.createDiv({cls:"moments-date-heading"}).createEl("h2",{text:lt(c[0].createdAt)});let p=d.createDiv({cls:"moments-timeline-list"});for(let h of c)this.renderMomentRow(p,h,e.openMoment)}let s=i.length<t.length,m=i.length>o;if(s||m){let c=n.createDiv({cls:"moments-timeline-footer"});if(s){let d=c.createDiv({cls:"moments-load-more"});d.createDiv({cls:"moments-load-more-status",text:`\u5DF2\u663E\u793A ${i.length} / ${t.length} \u6761`});let l=d.createEl("button",{cls:"moments-load-more-button moments-inline-action",attr:{type:"button"}});l.createSpan({text:"\u52A0\u8F7D\u66F4\u591A"});let p=l.createSpan({cls:"moments-load-more-button-icon"});(0,nt.setIcon)(p,"chevron-down"),l.addEventListener("click",()=>{this.visibleMomentLimit=zt(i.length,t.length,o),e.requestRender()})}if(m){let d=c.createEl("button",{cls:"moments-back-to-top",attr:{type:"button"}}),l=d.createSpan();(0,nt.setIcon)(l,"arrow-up"),d.createSpan({cls:"moments-visually-hidden",text:"\u56DE\u5230\u9876\u90E8"}),d.addEventListener("click",e.scrollToTop)}}}renderMomentRow(n,e,t){let o=n.createDiv({cls:"moment-row"});o.createDiv({cls:"moment-row-time",text:re(e.createdAt)}),o.createDiv({cls:"moment-row-rail"}).createSpan({cls:"moment-row-dot"});let r=Re(this.app,e.images),s=!!r,m=["moment-card","moment-card-clickable"];m.push(s?"has-images":"is-text-only"),e.audio&&m.push("has-audio");let c=o.createDiv({cls:m.join(" ")});V(c,()=>t(e.id)),r&&this.renderTimelineImagePreview(c,r.image,r.file,e.images.length);let d=c.createDiv({cls:"moment-card-body"});e.content&&d.createDiv({cls:"moment-content",text:e.content}),this.audioChips.render(d,e),U(d,e)}renderTimelineImagePreview(n,e,t,o){let r=n.createDiv({cls:"moment-card-thumb"}).createDiv({cls:"moment-card-thumb-cell"}),s=r.createEl("img",{attr:{alt:e.alt??""}});s.src=this.app.vault.getResourcePath(t),Q(r,o)}};var X="moments-timeline",Yt=6e3,Mn=450,te=class extends ye.ItemView{constructor(e,t,o,i,r){super(e);this.service=t;this.memoryDiscovery=o;this.openMemories=i;this.openCalendar=r;this.selectedMomentId=null;this.editing=!1;this.publishEcho=null;this.publishEchoExpiresAt=null;this.publishEchoFadeTimer=null;this.publishEchoRemoveTimer=null;this.composer=new me(t),this.home=new je(this.app,t),this.detail=new ze(this.app,t),this.editor=new Ye(this.app,t)}getViewType(){return X}getDisplayText(){return"\u8BB0\u5F55"}getIcon(){return"square-pen"}openMoment(e){this.service.index.get(e)&&(this.selectedMomentId=e,this.editing=!1,this.render())}scrollHomeToTop(){this.contentEl.scrollTo({top:0,behavior:"auto"})}async onOpen(){let e=this.service.onChanged(()=>{this.selectedMomentId&&!this.service.index.get(this.selectedMomentId)&&(this.selectedMomentId=null,this.editing=!1),this.publishEcho&&!this.service.index.get(this.publishEcho.momentId)&&(this.publishEcho=null,this.publishEchoExpiresAt=null),this.render()});this.unsubscribe=()=>this.service.off(e),this.render()}async onClose(){this.unsubscribe?.(),this.clearPublishEchoTimers(),this.composer.dispose(),this.home.dispose(),this.detail.dispose(),this.editor.dispose()}render(){this.clearPublishEchoTimers(),this.composer.beforeHostRender(),this.home.beforeHostRender(),this.detail.beforeHostRender(),this.editor.beforeHostRender();let{contentEl:e}=this;if(e.empty(),e.addClass("moments-view","moments-timeline-view"),this.selectedMomentId){let t=this.service.index.get(this.selectedMomentId);if(t){this.editing?this.editor.render(e,t,{onBack:()=>this.goToTimeline(),onCancel:()=>{this.editing=!1,this.render()},onSaved:()=>{this.editing=!1,this.render()}}):this.detail.render(e,t,{onBack:()=>this.goToTimeline(),onEdit:()=>{this.editing=!0,this.render()},onDeleted:()=>this.goToTimeline()});return}this.selectedMomentId=null,this.editing=!1}this.renderTimelineHome(e)}renderTimelineHome(e){let t=e.createDiv({cls:"moments-page-shell"}),o=t.createDiv({cls:"moments-composer-host"});this.composer.render(o,s=>{this.publishEcho=this.memoryDiscovery.getPublishEcho(s),this.publishEchoExpiresAt=this.publishEcho?Date.now()+Yt:null,this.render()});let i=o.querySelector(".moments-composer"),r=i?.querySelector(".moments-composer-heading");r&&this.renderTimelineNavigation(r),this.renderPublishEcho(i??o),this.home.render(t,{openMoment:s=>this.openMoment(s),requestRender:()=>this.render(),scrollToTop:()=>this.contentEl.scrollTo({top:0,behavior:"smooth"})})}renderTimelineNavigation(e){let t=e.createDiv({cls:"moments-timeline-header-actions",attr:{"aria-label":"\u56DE\u987E\u5165\u53E3"}}),o=t.createEl("button",{cls:"moments-timeline-header-action",attr:{type:"button","aria-label":"\u524D\u5F80\u56DE\u5FC6"}});o.createSpan({cls:"moments-timeline-header-action-arrow",text:"\u2197",attr:{"aria-hidden":"true"}}),o.createSpan({cls:"moments-timeline-header-action-label",text:"\u56DE\u5FC6"}),o.addEventListener("click",()=>void this.openMemories());let i=t.createEl("button",{cls:"moments-timeline-header-action",attr:{type:"button","aria-label":"\u6253\u5F00\u65E5\u5386"}});i.createSpan({cls:"moments-timeline-header-action-arrow",text:"\u2197",attr:{"aria-hidden":"true"}}),i.createSpan({cls:"moments-timeline-header-action-label",text:"\u65E5\u5386"}),i.addEventListener("click",()=>void this.openCalendar())}renderPublishEcho(e){if(!this.publishEcho)return;let t=this.publishEchoExpiresAt??Date.now()+Yt;this.publishEchoExpiresAt=t;let o=t-Date.now();if(o<=0){this.publishEcho=null,this.publishEchoExpiresAt=null;return}let i=this.publishEcho,r=e.createDiv({cls:"moments-publish-echo is-clickable"});V(r,()=>{this.dismissPublishEcho(),this.openMoment(i.momentId)}),r.createSpan({cls:"moments-publish-echo-mark",text:"\u2726"});let s=r.createSpan({cls:"moments-publish-echo-text"});if(i.type==="location"){s.createSpan({text:"\u4E0A\u4E00\u6B21\u5728"});let d=s.createSpan({cls:"moments-publish-echo-location"}),l=d.createSpan({cls:"moments-publish-echo-location-icon"});(0,ye.setIcon)(l,"map-pin"),d.createSpan({text:i.relationValue});let p=`\u4E0A\u4E00\u6B21\u5728${i.relationValue}`;s.createSpan({text:i.text.slice(p.length)})}else s.createSpan({text:i.text});let m=r.createSpan({cls:"moments-publish-echo-arrow",attr:{"aria-hidden":"true"}});(0,ye.setIcon)(m,"arrow-right");let c=Math.max(0,o-Mn);c===0?r.addClass("is-hiding"):this.publishEchoFadeTimer=window.setTimeout(()=>{this.publishEchoFadeTimer=null,r.isConnected&&r.addClass("is-hiding")},c),this.publishEchoRemoveTimer=window.setTimeout(()=>{this.publishEchoRemoveTimer=null,r.isConnected&&r.remove(),this.publishEcho===i&&(this.publishEcho=null,this.publishEchoExpiresAt=null)},o)}dismissPublishEcho(){this.clearPublishEchoTimers(),this.publishEcho=null,this.publishEchoExpiresAt=null}clearPublishEchoTimers(){this.publishEchoFadeTimer!==null&&(window.clearTimeout(this.publishEchoFadeTimer),this.publishEchoFadeTimer=null),this.publishEchoRemoveTimer!==null&&(window.clearTimeout(this.publishEchoRemoveTimer),this.publishEchoRemoveTimer=null)}goToTimeline(){this.selectedMomentId=null,this.editing=!1,this.render()}};var _e=class extends S.Plugin{constructor(){super(...arguments);this.data={memoryDiscovery:{}};this.handleNavigationEntryClick=e=>{let t=e.target;if(!(t instanceof Element))return;let i=t.closest("[data-path]")?.getAttribute("data-path"),r=i?this.resolveNavigationTarget(i):void 0;r&&(e.preventDefault(),e.stopPropagation(),e.stopImmediatePropagation(),this.activateNavigationTarget(r))}}async onload(){await this.loadPluginData(),this.removeUiStyles=Lt();let e=new ke(this.app);this.service=new Se(e),this.memoryDiscovery=new De(this.service.index,this.data.memoryDiscovery,()=>this.persistPluginData()),this.registerView(X,o=>new te(o,this.service,this.memoryDiscovery,()=>this.openTodayMemories(),()=>this.openTodayCalendar())),this.registerView(he,o=>new pe(o,this.service,i=>this.openMoment(i),()=>void this.activateTimeline())),this.registerView(de,o=>new ce(o,this.service,i=>this.openMoment(i),()=>void this.activateTimeline()));let t=this.addRibbonIcon("notebook-pen","Moment",()=>void this.activateTimeline());t.addClass("moments-ribbon-button"),t.removeAttribute("title"),t.removeAttribute("data-tooltip-position"),this.addCommand({id:"open-moments-timeline",name:"Open Moment",callback:()=>void this.activateTimeline()}),this.addCommand({id:"open-moments-memories",name:"Open Moment Memories",callback:()=>void this.activateMemories()}),this.addCommand({id:"open-moments-calendar",name:"Open Moment Calendar",callback:()=>void this.activateCalendar()});try{await this.service.initialize(),await this.ensureNavigationEntries()}catch(o){console.error("[Moments] Failed to initialize Moment",o);let i=o instanceof Error&&o.message?`\uFF1A${o.message}`:"";new S.Notice(`Moment \u521D\u59CB\u5316\u5931\u8D25${i}`,1e4)}document.addEventListener("click",this.handleNavigationEntryClick,!0),this.register(()=>document.removeEventListener("click",this.handleNavigationEntryClick,!0)),this.registerEvent(this.app.workspace.on("file-open",o=>{o instanceof S.TFile&&this.handleNavigationFileFallback(o)})),this.registerEvent(this.app.metadataCache.on("changed",async o=>{o instanceof S.TFile&&await this.service.refreshFile(o)})),this.registerEvent(this.app.vault.on("create",async o=>{o instanceof S.TFile&&await this.service.refreshFile(o)})),this.registerEvent(this.app.vault.on("delete",o=>{this.service.removeByPath(o.path)})),this.registerEvent(this.app.vault.on("rename",async(o,i)=>{this.service.removeByPath(i),o instanceof S.TFile&&await this.service.refreshFile(o)}))}onunload(){this.removeUiStyles?.(),this.app.workspace.detachLeavesOfType(de),this.app.workspace.detachLeavesOfType(he),this.app.workspace.detachLeavesOfType(X)}async activateTimeline(){let{workspace:e}=this.app,t=e.getLeavesOfType(X)[0]??null;return t?(await t.setViewState({type:"empty",active:!1}),await t.setViewState({type:X,active:!0})):(t=e.getLeaf(!0),await t.setViewState({type:X,active:!0})),await e.revealLeaf(t),t.view instanceof te&&t.view.scrollHomeToTop(),t}async activateMemories(){return this.activateSingletonView(he)}async activateCalendar(){return this.activateSingletonView(de)}async openMoment(e){let t=await this.activateTimeline();t.view instanceof te&&t.view.openMoment(e)}async openTodayMemories(){let e=await this.activateMemories();e.view instanceof pe&&e.view.showToday()}async openTodayCalendar(){let e=await this.activateCalendar();e.view instanceof ce&&e.view.showToday()}async loadPluginData(){let e=await this.loadData();this.data={memoryDiscovery:{...at.memoryDiscovery,...e?.memoryDiscovery??{}}}}async persistPluginData(){await this.saveData(this.data)}handleNavigationFileFallback(e){let t=this.resolveNavigationTarget(e.path);if(!t)return;let o=this.app.workspace.getLeaf(!1);window.setTimeout(()=>void this.activateNavigationTargetInLeaf(t,o),0)}async activateNavigationTarget(e){e==="calendar"?await this.activateCalendar():e==="memories"?await this.activateMemories():await this.activateTimeline()}async activateNavigationTargetInLeaf(e,t){let o=e==="calendar"?de:e==="memories"?he:X;await t.setViewState({type:o,active:!0}),await this.app.workspace.revealLeaf(t),e==="calendar"&&t.view instanceof ce||e==="memories"&&t.view instanceof pe?t.view.showToday():e==="timeline"&&t.view instanceof te&&t.view.scrollHomeToTop()}async activateSingletonView(e){let{workspace:t}=this.app,o=t.getLeavesOfType(e)[0]??null;return o||(o=t.getLeaf(!0),await o.setViewState({type:e,active:!0})),await t.revealLeaf(o),o}resolveNavigationTarget(e){let t=(0,S.normalizePath)(e),o=(0,S.normalizePath)(b.momentsFolder);return[{name:"\u8BB0\u5F55",target:"timeline"},{name:"\u65E5\u5386",target:"calendar"},{name:"\u56DE\u5FC6",target:"memories"}].find(r=>(0,S.normalizePath)(`${o}/${r.name}.md`)===t)?.target}async ensureNavigationEntries(){let e=(0,S.normalizePath)(b.momentsFolder),t=[{name:"\u8BB0\u5F55",target:"timeline"},{name:"\u65E5\u5386",target:"calendar"},{name:"\u56DE\u5FC6",target:"memories"}];for(let o of t){let i=(0,S.normalizePath)(`${e}/${o.name}.md`),r=Dn(o.target),s=this.app.vault.getAbstractFileByPath(i);if(s)if(s instanceof S.TFile){let m=await this.app.vault.cachedRead(s);En(m,o.target)&&m!==r&&await this.app.vault.modify(s,r)}else throw new Error(`${i} exists and is not a file.`);else{let m=await this.app.vault.adapter.stat(i);if(m?.type==="folder")throw new Error(`${i} exists and is not a file.`);if(m?.type==="file")continue;try{await this.app.vault.create(i,r)}catch(c){if(this.app.vault.getAbstractFileByPath(i)instanceof S.TFile||(await this.app.vault.adapter.stat(i))?.type==="file")continue;throw c}}}}};function Dn(a){return`<!-- moments-navigation:${a} -->
`}function En(a,n){return a.trim()===`<!-- moments-navigation:${n} -->`}
