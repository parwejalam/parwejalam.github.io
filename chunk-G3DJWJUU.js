import"./chunk-IVQSTHXJ.js";import{R as u,S as f,aa as y,o as d,q as l}from"./chunk-RV5XFZSS.js";import{d as n}from"./chunk-KFZQC3P5.js";var p=class{constructor(i,e){this.container=e,this._engine=i,this.array=[],this.emitters=[],this.interactivityEmitters={random:{count:1,enable:!1},value:[]};let r=0;e.getEmitter=t=>t===void 0||d(t)?this.array[t??r]:this.array.find(s=>s.name===t),e.addEmitter=(t,s)=>n(this,null,function*(){return this.addEmitter(t,s)}),e.removeEmitter=t=>{let s=e.getEmitter(t);s&&this.removeEmitter(s)},e.playEmitter=t=>{let s=e.getEmitter(t);s&&s.externalPlay()},e.pauseEmitter=t=>{let s=e.getEmitter(t);s&&s.externalPause()}}addEmitter(i,e){return n(this,null,function*(){let{Emitter:r}=yield import("./chunk-2WWUSXPQ.js"),{EmitterInstance:t}=yield import("./chunk-W3JW7OID.js"),s=new r;s.load(i);let a=new t(this._engine,this,this.container,s,e);return yield a.init(),this.array.push(a),a})}handleClickMode(i){let e=this.emitters,r=this.interactivityEmitters;if(i!=="emitter")return;let t;if(r&&l(r.value))if(r.value.length>0&&r.random.enable){t=[];let o=[];for(let m=0;m<r.random.count;m++){let h=u(r.value);if(o.includes(h)&&o.length<r.value.length){m--;continue}o.push(h),t.push(f(r.value,h))}}else t=r.value;else t=r?.value;let s=t??e,a=this.container.interactivity.mouse.clickPosition;y(s,c=>n(this,null,function*(){yield this.addEmitter(c,a)}))}init(){return n(this,null,function*(){if(this.emitters=this.container.actualOptions.emitters,this.interactivityEmitters=this.container.actualOptions.interactivity.modes.emitters,!!this.emitters)if(l(this.emitters))for(let i of this.emitters)yield this.addEmitter(i);else yield this.addEmitter(this.emitters)})}pause(){for(let i of this.array)i.pause()}play(){for(let i of this.array)i.play()}removeEmitter(i){let e=this.array.indexOf(i);e>=0&&this.array.splice(e,1)}resize(){for(let i of this.array)i.resize()}stop(){this.array=[]}update(i){for(let e of this.array)e.update(i)}};export{p as Emitters};