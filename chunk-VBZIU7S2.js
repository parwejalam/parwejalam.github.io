import{a}from"./chunk-RSN6LNOB.js";import{a as i}from"./chunk-IVQSTHXJ.js";import{y as n}from"./chunk-RV5XFZSS.js";import"./chunk-KFZQC3P5.js";var m="remove",s=class extends i{constructor(e){super(e),this.handleClickMode=r=>{let t=this.container,o=t.actualOptions;if(!o.interactivity.modes.remove||r!==m)return;let c=n(o.interactivity.modes.remove.quantity);t.particles.removeQuantity(c)}}clear(){}init(){}interact(){}isEnabled(){return!0}loadModeOptions(e,...r){e.remove||(e.remove=new a);for(let t of r)e.remove.load(t?.remove)}reset(){}};export{s as Remover};