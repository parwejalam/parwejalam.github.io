import"./chunk-IVQSTHXJ.js";import{D as i,p as o}from"./chunk-RV5XFZSS.js";import"./chunk-KFZQC3P5.js";var g=Math.PI*2,x=0,r={x:0,y:0};function m(t){let{context:a,particle:n,radius:c}=t;n.circleRange||(n.circleRange={min:x,max:g});let e=n.circleRange;a.arc(r.x,r.y,c,e.min,e.max,!1)}var d=12,p=360,l=0,s=class{draw(a){m(a)}getSidesCount(){return d}particleInit(a,n){let c=n.shapeData,e=c?.angle??{max:p,min:l};n.circleRange=o(e)?{min:i(e.min),max:i(e.max)}:{min:l,max:i(e)}}};export{s as CircleDrawer};