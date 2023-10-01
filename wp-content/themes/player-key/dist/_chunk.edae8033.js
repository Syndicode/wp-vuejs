import{H as b}from"./_chunk.93f1ef41.js";import{_ as C,r as h,o as t,c as o,a as l,w as a,b as e,F as m,d as p,e as n,n as f,t as _}from"./main.91e8f9e7.js";const R={name:"RegisterView",components:{Heading:b},methods:{setChosenRole(c){this.chosenRole=c},goTo(){this.$router.push({name:"sign-up-role",params:{role:this.chosenRole.toLowerCase()}})}},data(){return{chosenRole:null,roles:[{title:"Coach",benefits:["Coach or Team Admin verifying athletes for a team or club"]},{title:"Parent",benefits:["Parent verifying individual athlete"]}]}}},k={class:"wrapper"},y={class:"register-roles"},w=e("p",{class:"register-roles__caption"},[n("Please choose your "),e("strong",null,"role"),n(":")],-1),x=["onClick"],V={class:"register-roles__item-role"},T={class:"register-roles__benefits"},H={class:"register-roles__benefit"},L={class:"register-roles__links"},S={class:"register-roles__actions"},B=["disabled"];function N(c,d,P,U,i,r){const u=h("Heading"),v=h("RouterLink");return t(),o("div",k,[l(u,null,{default:a(()=>[n("Sign Up")]),_:1}),e("div",y,[w,(t(!0),o(m,null,p(i.roles,s=>(t(),o("div",{onClick:g=>r.setChosenRole(s.title),class:f(["register-roles__item",{"register-roles__item--active":s.title===i.chosenRole}])},[e("span",V,_(s.title),1),l(u,{level:3,align:"left",class:f("register-roles__item-heading")},{default:a(()=>[n(_(s.title),1)]),_:2},1024),e("ul",T,[(t(!0),o(m,null,p(s.benefits,g=>(t(),o("li",H,_(g),1))),256))])],10,x))),256))]),e("div",L,[l(v,{to:{name:"sign-in"}},{default:a(()=>[n("Already Registered?")]),_:1})]),e("div",S,[e("button",{class:"button button--lime",type:"button",onClick:d[0]||(d[0]=(...s)=>r.goTo&&r.goTo(...s)),disabled:i.chosenRole===null}," Continue ",8,B)])])}const z=C(R,[["render",N]]);export{z as default};
