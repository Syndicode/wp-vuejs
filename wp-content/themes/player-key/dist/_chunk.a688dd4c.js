import{_ as n,o as t,c as a,b as s,e as u,t as o,h as l,n as m}from"./main.91e8f9e7.js";const c={name:"FormItemText",emits:["update:modelValue"],props:{inputType:{type:String,required:!0},label:{type:String,required:!0},name:{type:String,required:!0},isRequired:{type:Boolean,default:!1},placeholder:{type:String,default:""},modelValue:{type:String},cssModifier:{type:String},isDisabled:{type:Boolean},note:{type:String}}},_={class:"form__label"},y={key:0},p=["type","name","value","placeholder","required","disabled"],f={key:0,class:"form-item-text__note"};function x(r,i,e,b,g,h){return["text","email","password","date"].includes(e.inputType)?(t(),a("label",{key:0,class:m(["form-item-text",e.cssModifier?`form-item-text--${e.cssModifier} `:""])},[s("span",_,[u(o(e.label)+" ",1),e.isRequired?(t(),a("sup",y,"*")):l("",!0)]),s("input",{type:e.inputType,name:e.label.replace(" ","-").toLowerCase(),value:e.modelValue,placeholder:e.placeholder,required:e.isRequired,disabled:e.isDisabled,onInput:i[0]||(i[0]=d=>r.$emit("update:modelValue",d.target.value)),class:"form-item-text__field"},null,40,p),e.note!==""?(t(),a("span",f,o(e.note),1)):l("",!0)],2)):l("",!0)}const S=n(c,[["render",x],["__scopeId","data-v-525559da"]]);export{S as F};
