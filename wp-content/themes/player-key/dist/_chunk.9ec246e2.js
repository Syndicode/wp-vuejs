import{_ as o,E as c,r as i,o as r,c as _,b as s,a as d,w as l,n as p,e as h,t as g}from"./main.91e8f9e7.js";import{H as m}from"./_chunk.93f1ef41.js";const u={name:"PageView",components:{Heading:m},data(){return{title:"",content:""}},watch:{$route(){this.fetchData()}},methods:{async fetchData(){await c.getPageBy("slug",this.$route.params.slug).then(e=>{if(e&&e.data.length){const t=e.data[0];this.title=t.title.rendered,this.content=t.content.rendered}})}},mounted(){this.fetchData()}},f={class:"article"},w={class:"wrapper article__wrapper"},v=["innerHTML"];function x(e,t,H,V,a,y){const n=i("Heading");return r(),_("article",f,[s("div",w,[d(n,{class:p("article__heading")},{default:l(()=>[h(g(a.title),1)]),_:1}),s("div",{innerHTML:a.content,class:"article__content"},null,8,v)])])}const P=o(u,[["render",x],["__scopeId","data-v-8b782907"]]);export{P as default};
