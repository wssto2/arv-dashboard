import{d as h,r as v,o as i,c as r,k as d,v as p,e as s,q as n,t as _,w as f,B as m,I as g,a0 as w}from"./vendor.js";const B={class:"panel panel-white"},k={class:"panel-heading"},y={key:0,class:"heading-elements"},b={class:"icons-list"},D=h({__name:"Panel",props:{title:{},withoutPadding:{type:Boolean},collapsable:{type:Boolean,default:!0},collapsed:{type:Boolean,default:!1}},setup(a,{expose:l}){const e=a,t=v(e.collapsed),o=()=>{t.value=!t.value};return l({toggle:o,expand:()=>{t.value=!1},collapse:()=>{t.value=!0}}),(u,c)=>(i(),r("div",B,[d(s("div",k,[s("h6",{class:n(["panel-title",{"cursor-pointer":e.collapsable}]),onClick:c[0]||(c[0]=x=>o())},_(e.title),3),e.collapsable?(i(),r("div",y,[s("ul",b,[s("li",null,[s("a",{"data-action":"collapse",onClick:f(o,["prevent"]),class:n({"rotate-180":!t.value})},null,2)])])])):m("",!0)],512),[[p,e.title&&e.title.length>0]]),d(s("div",{class:n(["panel-body",{"no-padding":e.withoutPadding}])},[g(u.$slots,"default")],2),[[p,!t.value]])]))}}),F=w({options:{async beforeFetch({options:a}){var e;const l=(e=window==null?void 0:window.DASHBOARD_STATE)==null?void 0:e.api_token;return l?(a.headers=a.headers||{},a.headers.Authorization=`Bearer ${l}`,{options:a}):{options:a}}},fetchOptions:{mode:"cors"}});export{D as _,F as u};
