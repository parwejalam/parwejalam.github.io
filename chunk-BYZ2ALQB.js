import"./chunk-IVQSTHXJ.js";import{y as o}from"./chunk-RV5XFZSS.js";import"./chunk-KFZQC3P5.js";var s={x:0,y:0};function d(r){let{context:t,particle:e,radius:a}=r,n=e.sides,l=e.starInset??2;t.moveTo(s.x,s.y-a);for(let i=0;i<n;i++)t.rotate(Math.PI/n),t.lineTo(s.x,s.y-a*l),t.rotate(Math.PI/n),t.lineTo(s.x,s.y-a)}var u=2,f=5,c=class{draw(t){d(t)}getSidesCount(t){let e=t.shapeData;return Math.round(o(e?.sides??f))}particleInit(t,e){let a=e.shapeData;e.starInset=o(a?.inset??u)}};export{c as StarDrawer};