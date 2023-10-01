import{H as b}from"./_chunk.93f1ef41.js";import{F as V}from"./_chunk.a688dd4c.js";import{E as F}from"./_chunk.3293e5cc.js";import{M as y}from"./_chunk.6bec55d4.js";import{_ as k,r as a,o as m,c as p,a as i,w as l,n as L,g as _,h as d,b as r,e as n,i as v}from"./main.91e8f9e7.js";const x={name:"LoginView",components:{MessageList:y,ErrorList:F,Heading:b,FormItemText:V},data(){return{form:{email:"",password:""},isFormValid:!1}},computed:{errors(){return this.$store.state.authentication.validationErrors},messages(){return this.$store.state.authentication.messages}},watch:{form:{handler(){this.isFormValid=this.isRequiredFieldsFiled()},deep:!0}},methods:{isRequiredFieldsFiled(){return this.form.email!==""&&this.form.password!==""},async formSubmit(){this.$store.dispatch("login",this.form).then(f=>{this.$store.state.authentication.athleteToken?this.$router.push({name:"board-entity",params:{entity:"athletes"}}):this.$router.push({name:"board"})})}}},E={class:"wrapper wrapper--form"},S={class:"form__fieldset"},q={class:"form__links"},M={class:"form__actions"},N=["disabled"],T={key:0,class:"form__actions-note"},B=r("sup",null,"(*)",-1);function C(f,e,H,I,s,t){const h=a("Heading"),g=a("ErrorList"),w=a("MessageList"),u=a("FormItemText"),c=a("RouterLink");return m(),p("div",E,[i(h,{level:1,class:L("form-holder__heading")},{default:l(()=>[n("Sign in")]),_:1}),t.errors.length?(m(),_(g,{key:0,errors:t.errors},null,8,["errors"])):d("",!0),t.messages.length?(m(),_(w,{key:1,messages:t.messages,type:"success"},null,8,["messages"])):d("",!0),r("form",{class:"form",onSubmit:e[2]||(e[2]=v((...o)=>t.formSubmit&&t.formSubmit(...o),["prevent"]))},[r("div",S,[i(u,{name:"email",label:"Email","input-type":"email","is-required":!0,modelValue:s.form.email,"onUpdate:modelValue":e[0]||(e[0]=o=>s.form.email=o)},null,8,["modelValue"]),i(u,{name:"password",label:"Password","input-type":"password","is-required":!0,modelValue:s.form.password,"onUpdate:modelValue":e[1]||(e[1]=o=>s.form.password=o)},null,8,["modelValue"])]),r("div",q,[i(c,{to:{name:"sign-up"}},{default:l(()=>[n("Not registered?")]),_:1}),i(c,{to:{name:"password-reset"}},{default:l(()=>[n("Lost your password?")]),_:1})]),r("div",M,[r("button",{type:"submit",class:"button button--lime",disabled:!s.isFormValid},"Submit",8,N),s.isFormValid?d("",!0):(m(),p("span",T,[n("Please fill in all required "),B,n(" fields")]))])],32)])}const A=k(x,[["render",C]]);export{A as default};
