import"./chunk-IVQSTHXJ.js";import{aa as b,ba as a,o}from"./chunk-RV5XFZSS.js";import{d as i}from"./chunk-KFZQC3P5.js";var n=0,c=class{constructor(r){this.container=r,this.array=[],this.absorbers=[],this.interactivityAbsorbers=[],r.getAbsorber=s=>s===void 0||o(s)?this.array[s??n]:this.array.find(t=>t.name===s),r.addAbsorber=(s,t)=>i(this,null,function*(){return this.addAbsorber(s,t)})}addAbsorber(r,s){return i(this,null,function*(){let{AbsorberInstance:t}=yield import("./chunk-TA7WXDJD.js"),e=new t(this,this.container,r,s);return this.array.push(e),e})}draw(r){for(let s of this.array)s.draw(r)}handleClickMode(r){let s=this.absorbers,t=this.interactivityAbsorbers;if(r==="absorber"){let e=a(t),h=e??a(s),d=this.container.interactivity.mouse.clickPosition;this.addAbsorber(h,d)}}init(){return i(this,null,function*(){this.absorbers=this.container.actualOptions.absorbers,this.interactivityAbsorbers=this.container.actualOptions.interactivity.modes.absorbers;let r=b(this.absorbers,s=>i(this,null,function*(){yield this.addAbsorber(s)}));r instanceof Array?yield Promise.all(r):yield r})}particleUpdate(r){for(let s of this.array)if(s.attract(r),r.destroyed)break}removeAbsorber(r){let s=this.array.indexOf(r);s>=n&&this.array.splice(s,1)}resize(){for(let r of this.array)r.resize()}stop(){this.array=[]}};export{c as Absorbers};