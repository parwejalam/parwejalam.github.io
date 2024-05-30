import{d as F}from"./chunk-KFZQC3P5.js";var v=[0,4,2,1],L=[8,8,4,2];var z=class{constructor(a){this.pos=0,this.data=new Uint8ClampedArray(a)}getString(a){let s=this.data.slice(this.pos,this.pos+a);return this.pos+=s.length,s.reduce((n,f)=>n+String.fromCharCode(f),"")}nextByte(){return this.data[this.pos++]}nextTwoBytes(){return this.pos+=2,this.data[this.pos-2]+(this.data[this.pos-1]<<8)}readSubBlocks(){let a="",s=0,n=0,f=0;do{s=this.data[this.pos++];for(let o=s;--o>=n;a+=String.fromCharCode(this.data[this.pos++]));}while(s!==f);return a}readSubBlocksBin(){let a=this.data[this.pos],s=0,n=0,f=1;for(let e=0;a!==n;e+=a+f,a=this.data[this.pos+e])s+=a;let o=new Uint8Array(s);a=this.data[this.pos++];for(let e=0;a!==n;a=this.data[this.pos++])for(let r=a;--r>=n;o[e++]=this.data[this.pos++]);return o}skipSubBlocks(){for(let a=1,s=0;this.data[this.pos]!==s;this.pos+=this.data[this.pos]+a);this.pos++}};var u={x:0,y:0},$=0,M=.5,Q=0,O=0,A=0;function P(t,a){let s=[];for(let n=0;n<a;n++)s.push({r:t.data[t.pos],g:t.data[t.pos+1],b:t.data[t.pos+2]}),t.pos+=3;return s}function W(t,a,s,n){switch(t.nextByte()){case 249:{let f=a.frames[s(!1)];t.pos++;let o=t.nextByte();f.GCreserved=(o&224)>>>5,f.disposalMethod=(o&28)>>>2,f.userInputDelayFlag=(o&2)===2;let e=(o&1)===1;f.delayTime=t.nextTwoBytes()*10;let r=t.nextByte();e&&n(r),t.pos++;break}case 255:{t.pos++;let f={identifier:t.getString(8),authenticationCode:t.getString(3),data:t.readSubBlocksBin()};a.applicationExtensions.push(f);break}case 254:{a.comments.push([s(!1),t.readSubBlocks()]);break}case 1:{if(a.globalColorTable.length===0)throw new EvalError("plain text extension without global color table");t.pos++,a.frames[s(!1)].plainTextData={left:t.nextTwoBytes(),top:t.nextTwoBytes(),width:t.nextTwoBytes(),height:t.nextTwoBytes(),charSize:{width:t.nextTwoBytes(),height:t.nextTwoBytes()},foregroundColor:t.nextByte(),backgroundColor:t.nextByte(),text:t.readSubBlocks()};break}default:t.skipSubBlocks();break}}function j(t,a,s,n,f,o){return F(this,null,function*(){let e=a.frames[n(!0)];e.left=t.nextTwoBytes(),e.top=t.nextTwoBytes(),e.width=t.nextTwoBytes(),e.height=t.nextTwoBytes();let r=t.nextByte(),w=(r&128)===128,g=(r&64)===64;e.sortFlag=(r&32)===32,e.reserved=(r&24)>>>3;let c=1<<(r&7)+1;w&&(e.localColorTable=P(t,c));let m=l=>{let{r:h,g:p,b:i}=(w?e.localColorTable:a.globalColorTable)[l];return l!==f(null)?{r:h,g:p,b:i,a:255}:{r:h,g:p,b:i,a:s?~~((h+p+i)/3):0}},B=(()=>{try{return new ImageData(e.width,e.height,{colorSpace:"srgb"})}catch(l){if(l instanceof DOMException&&l.name==="IndexSizeError")return null;throw l}})();if(B==null)throw new EvalError("GIF frame size is to large");let k=t.nextByte(),E=t.readSubBlocksBin(),x=1<<k,D=(l,h)=>{let p=l>>>3,i=l&7;return(E[p]+(E[p+1]<<8)+(E[p+2]<<16)&(1<<h)-1<<i)>>>i};if(g){for(let l=0,h=k+1,p=0,i=[[0]],I=0;I<4;I++){if(v[I]<e.height){let d=0,T=0,C=!1;for(;!C;){let b=l;if(l=D(p,h),p+=h+1,l===x){h=k+1,i.length=x+2;for(let y=0;y<i.length;y++)i[y]=y<x?[y]:[]}else{l>=i.length?i.push(i[b].concat(i[b][0])):b!==x&&i.push(i[b].concat(i[l][0]));for(let y of i[l]){let{r:R,g:G,b:N,a:U}=m(y);B.data.set([R,G,N,U],v[I]*e.width+L[I]*T+d%(e.width*4)),d+=4}i.length===1<<h&&h<12&&h++}d===e.width*4*(T+1)&&(T++,v[I]+L[I]*T>=e.height&&(C=!0))}}o?.(t.pos/(t.data.length-1),n(!1)+1,B,{x:e.left,y:e.top},{width:a.width,height:a.height})}e.image=B,e.bitmap=yield createImageBitmap(B)}else{let l=0,h=k+1,p=0,i=-4,I=!1,d=[[0]];for(;!I;){let T=l;if(l=D(p,h),p+=h,l===x){h=k+1,d.length=x+2;for(let C=0;C<d.length;C++)d[C]=C<x?[C]:[]}else{if(l===x+1){I=!0;break}l>=d.length?d.push(d[T].concat(d[T][0])):T!==x&&d.push(d[T].concat(d[l][0]));for(let C of d[l]){let{r:b,g:y,b:R,a:G}=m(C);B.data.set([b,y,R,G],i+=4)}d.length>=1<<h&&h<12&&h++}}e.image=B,e.bitmap=yield createImageBitmap(B),o?.((t.pos+1)/t.data.length,n(!1)+1,e.image,{x:e.left,y:e.top},{width:a.width,height:a.height})}})}function q(t,a,s,n,f,o){return F(this,null,function*(){switch(t.nextByte()){case 59:return!0;case 44:yield j(t,a,s,n,f,o);break;case 33:W(t,a,n,f);break;default:throw new EvalError("undefined block found")}return!1})}function H(t){for(let a of t.applicationExtensions)if(a.identifier+a.authenticationCode==="NETSCAPE2.0")return a.data[1]+(a.data[2]<<8);return NaN}function J(t,a,s){return F(this,null,function*(){s||(s=!1);let n=yield fetch(t);if(!n.ok&&n.status===404)throw new EvalError("file not found");let f=yield n.arrayBuffer(),o={width:0,height:0,totalTime:0,colorRes:0,pixelAspectRatio:0,frames:[],sortFlag:!1,globalColorTable:[],backgroundImage:new ImageData(1,1,{colorSpace:"srgb"}),comments:[],applicationExtensions:[]},e=new z(new Uint8ClampedArray(f));if(e.getString(6)!=="GIF89a")throw new Error("not a supported GIF file");o.width=e.nextTwoBytes(),o.height=e.nextTwoBytes();let r=e.nextByte(),w=(r&128)===128;o.colorRes=(r&112)>>>4,o.sortFlag=(r&8)===8;let g=1<<(r&7)+1,c=e.nextByte();o.pixelAspectRatio=e.nextByte(),o.pixelAspectRatio!==0&&(o.pixelAspectRatio=(o.pixelAspectRatio+15)/64),w&&(o.globalColorTable=P(e,g));let m=(()=>{try{return new ImageData(o.width,o.height,{colorSpace:"srgb"})}catch(i){if(i instanceof DOMException&&i.name==="IndexSizeError")return null;throw i}})();if(m==null)throw new Error("GIF frame size is to large");let{r:B,g:k,b:E}=o.globalColorTable[c];m.data.set(w?[B,k,E,255]:[0,0,0,0]);for(let i=4;i<m.data.length;i*=2)m.data.copyWithin(i,0,i);o.backgroundImage=m;let x=-1,D=!0,l=-1,h=i=>(i&&(D=!0),x),p=i=>(i!=null&&(l=i),l);try{do D&&(o.frames.push({left:0,top:0,width:0,height:0,disposalMethod:0,image:new ImageData(1,1,{colorSpace:"srgb"}),plainTextData:null,userInputDelayFlag:!1,delayTime:0,sortFlag:!1,localColorTable:[],reserved:0,GCreserved:0}),x++,l=-1,D=!1);while(!(yield q(e,o,s,h,p,a)));o.frames.length--;for(let i of o.frames){if(i.userInputDelayFlag&&i.delayTime===0){o.totalTime=1/0;break}o.totalTime+=i.delayTime}return o}catch(i){throw i instanceof EvalError?new Error(`error while parsing frame ${x} "${i.message}"`):i}})}function _(t){let{context:a,radius:s,particle:n,delta:f}=t,o=n.image;if(!o?.gifData||!o.gif)return;let e=new OffscreenCanvas(o.gifData.width,o.gifData.height),r=e.getContext("2d");if(!r)throw new Error("could not create offscreen canvas context");r.imageSmoothingQuality="low",r.imageSmoothingEnabled=!1,r.clearRect(u.x,u.y,e.width,e.height),n.gifLoopCount===void 0&&(n.gifLoopCount=o.gifLoopCount??A);let w=n.gifFrame??$,g={x:-o.gifData.width*M,y:-o.gifData.height*M},c=o.gifData.frames[w];if(n.gifTime===void 0&&(n.gifTime=Q),!!c.bitmap){switch(a.scale(s/o.gifData.width,s/o.gifData.height),c.disposalMethod){case 4:case 5:case 6:case 7:case 0:r.drawImage(c.bitmap,c.left,c.top),a.drawImage(e,g.x,g.y),r.clearRect(u.x,u.y,e.width,e.height);break;case 1:r.drawImage(c.bitmap,c.left,c.top),a.drawImage(e,g.x,g.y);break;case 2:r.drawImage(c.bitmap,c.left,c.top),a.drawImage(e,g.x,g.y),r.clearRect(u.x,u.y,e.width,e.height),o.gifData.globalColorTable.length?r.putImageData(o.gifData.backgroundImage,g.x,g.y):r.putImageData(o.gifData.frames[O].image,g.x+c.left,g.y+c.top);break;case 3:{let m=r.getImageData(u.x,u.y,e.width,e.height);r.drawImage(c.bitmap,c.left,c.top),a.drawImage(e,g.x,g.y),r.clearRect(u.x,u.y,e.width,e.height),r.putImageData(m,u.x,u.y)}break}if(n.gifTime+=f.value,n.gifTime>c.delayTime){if(n.gifTime-=c.delayTime,++w>=o.gifData.frames.length){if(--n.gifLoopCount<=A)return;w=O,r.clearRect(u.x,u.y,e.width,e.height)}n.gifFrame=w}a.scale(o.gifData.width/s,o.gifData.height/s)}}function V(t){return F(this,null,function*(){if(t.type!=="gif"){let{loadImage:a}=yield import("./chunk-X63IVCBM.js");yield a(t);return}t.loading=!0;try{t.gifData=yield J(t.source),t.gifLoopCount=H(t.gifData)??A,t.gifLoopCount||(t.gifLoopCount=1/0)}catch{t.error=!0}t.loading=!1})}export{H as a,J as b,_ as c,V as d};