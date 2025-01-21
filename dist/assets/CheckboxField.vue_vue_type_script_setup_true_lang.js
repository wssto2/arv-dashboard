var j=Object.defineProperty;var I=(i,e,t)=>e in i?j(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var b=(i,e,t)=>I(i,typeof e!="symbol"?e+"":e,t);import{d as B,j as _,o as n,c as d,e as g,g as E,q as x,I as M,r as m,P as A,m as R,z as q,t as w,B as y,w as U,Y as K,b as H,F as z,h as L,n as T,R as V,S as P,G as O,k as W,Z as G,f as J,_ as X,$ as Y}from"./vendor.js";import{c as Z,j as C}from"./index.js";import{u as D}from"./useFetch.js";const Q={class:"media"},ee={class:"media-left media-middle"},te={class:"media-body"},re=B({__name:"Banner",props:{type:{},icon:{}},setup(i){const e=i,t={info:"info",warning:"warning",danger:"danger",success:"success"},l=_(()=>`alpha-${t[e.type]}`),p=_(()=>`text-${t[e.type]}`),c=_(()=>{if(e.icon)return e.icon;switch(e.type){case"info":return"alertTriangle";case"warning":return"alertTriangle";case"danger":return"alertTriangle";case"success":return"alertTriangle"}});return(a,s)=>(n(),d("div",{class:x(["rounded-xl","p-4",l.value])},[g("div",Q,[g("div",ee,[E(Z,{icon:c.value,class:x(p.value)},null,8,["icon","class"])]),g("div",te,[M(a.$slots,"default")])])],2))}}),Me=B({__name:"ResourceForm",props:{processing:{type:Boolean,default:!1},horizontal:{type:Boolean,default:!1},error:{}},emits:["submit"],setup(i,{emit:e}){const t=i,l=m(null),p=e;function c(a){var s,u;l.value&&(a?(s=l.value)==null||s.querySelectorAll(".form-group").forEach(f=>{f.classList.add("processing")}):(u=l.value)==null||u.querySelectorAll(".form-group").forEach(f=>{f.classList.remove("processing")}))}return A(()=>t.processing,a=>{c(a)},{immediate:!0}),(a,s)=>(n(),d("form",{ref_key:"form",ref:l,class:x({"form-horizontal":t.horizontal}),method:"post",onSubmit:s[0]||(s[0]=U(u=>p("submit"),["prevent"]))},[t.error?(n(),R(re,{key:0,type:"warning"},{default:q(()=>[g("strong",null,w(t.error),1)]),_:1})):y("",!0),M(a.$slots,"default")],34))}});function ae(i){return i&&K(i,"endpoint","method")}class oe{constructor(){b(this,"errors",m({}))}add(e,t){this.errors.value[e]||(this.errors.value[e]=[]),this.errors.value[e].push(t)}record(e){this.errors.value=e}clear(e){e&&this.errors.value[e]?delete this.errors.value[e]:this.errors.value={}}has(e){var t;return!!((t=this.errors.value)!=null&&t[e])}first(e){var t,l;return(l=(t=this.errors.value)==null?void 0:t[e])==null?void 0:l[0]}all(){return this.errors.value}}class le{constructor(e){b(this,"processing",m(!1));b(this,"fetching",m(!1));b(this,"creating",m(!1));b(this,"updating",m(!1));b(this,"deleting",m(!1));b(this,"data",m({}));b(this,"originalData",m({}));b(this,"errors",new oe);b(this,"processingError",m(""));this.data.value=e||{},this.originalData.value={...this.data.value}}populate(e){this.data.value={...this.data.value,...e}}reset(){this.data.value={...this.originalData.value},this.errors.clear()}exists(){return!!this.data.value.id}getKey(){return this.data.value.id||null}async fetch(e){var p,c;this.processing.value=!0,this.fetching.value=!0;let t=e;/^(http|https):\/\//.test(t)||(t=C(((p=window==null?void 0:window.DASHBOARD_STATE)==null?void 0:p.api_base_url)||"",e));const l=new URL(t);try{const{data:a}=await D(l.toString()).get().json();for(const s in a.value)Object.prototype.hasOwnProperty.call(a.value,s)&&(this.data.value[s]=a.value[s]);this.errors.clear()}catch(a){((c=a==null?void 0:a.response)==null?void 0:c.status)===422?this.errors.record(a.response.data.errors||{}):console.error(a)}finally{this.processing.value=!1,this.fetching.value=!1}}async submit(...e){var o,r,v;let t={endpoint:"",method:"post"};if(e.length>0){const h=e[0];typeof h=="string"?t.endpoint=h:typeof h=="object"&&ae(h)&&(t=h)}else throw new Error("Invalid arguments");this.errors.clear(),this.processing.value=!0,this.processingError.value="";const{endpoint:l,method:p="post"}=t;let c=l;/^(http|https):\/\//.test(c)||(c=C(((o=window==null?void 0:window.DASHBOARD_STATE)==null?void 0:o.api_base_url)||"",c));const a=new URL(c),{error:s,statusCode:u,data:f,response:k}=await D(a.toString())[p](this.data).json();if(s.value)if(u.value===422){const h=(v=(r=k==null?void 0:k.value)==null?void 0:r.body)==null?void 0:v.getReader();if(!h)throw new Error("Invalid response");const{value:F}=await h.read();if(!F)throw new Error("Invalid response");const $=JSON.parse(new TextDecoder().decode(F));this.errors.record(($==null?void 0:$.errors)||{})}else this.processingError.value=s.value,console.error(s.value);else f.value&&Object.keys(f.value).length>0&&(this.originalData.value={...f.value},this.data.value={...f.value});this.processing.value=!1}}function Re(i){return new le(i)}const se=["for"],ne={key:0,class:"text-danger"},ie=["innerHTML"],ue=["innerHTML"],de={key:0,class:"display-block text-bold"},ce=["innerHTML"],pe=["innerHTML"],fe={key:1,class:"display-block text-italic text-muted"},N=B({__name:"BaseField",props:{name:{},processing:{type:Boolean,default:!1},label:{},description:{},error:{},required:{type:Boolean,default:!1},editable:{type:Boolean,default:!0},addonLeft:{},addonRight:{},value:{type:[String,Number,Boolean,null]},horizontal:{type:Boolean,default:!1},skeletonStyle:{}},setup(i){const e=i;function t(){return"xxxxxxxxxxxx".replace(/[xy]/g,function(u){var f=Math.random()*16|0,k=u=="x"?f:f&3|8;return k.toString(16)})}const l=_(()=>e.name||`field-${t()}`),p=m(e.horizontal),c=m(null),a=_(()=>{if(!p.value)return;let u=["col-md-4"];return e.editable&&u.push("control-label"),e.description||u.push("no-margin-bottom"),u.join(" ")}),s=_(()=>{if(p.value)return"col-md-8"});return H(()=>{var f;const u=(f=c.value)==null?void 0:f.closest("form");u&&u.classList.contains("form-horizontal")&&(p.value=!0)}),(u,f)=>(n(),d("div",{ref_key:"root",ref:c,class:x(["form-group",{processing:e.processing},{"has-error":e.error}])},[e.editable?(n(),d(z,{key:0},[e.label?(n(),d("label",{key:0,for:l.value,class:x(["text-semibold",a.value])},[L(w(e.label)+" ",1),e.required?(n(),d("span",ne,"*")):y("",!0),e.description&&p.value?(n(),d("small",{key:1,class:"text-muted",style:{display:"block","margin-top":"5px","font-weight":"normal"},innerHTML:e.description},null,8,ie)):y("",!0)],10,se)):y("",!0),e.description&&!p.value?(n(),d("small",{key:1,style:{"margin-bottom":"8px",display:"block","margin-top":"-6px"},innerHTML:e.description},null,8,ue)):y("",!0),g("div",{class:x(["field-inner",s.value])},[M(u.$slots,"default"),g("div",{class:"field-skeleton skeleton",style:T(e.skeletonStyle)},null,4)],2)],64)):(n(),d(z,{key:1},[e.label?(n(),d("label",{key:0,class:x(["text-semibold",a.value])},w(e.label),3)):y("",!0),g("div",{class:x(["field-inner",s.value])},[e.value?(n(),d("span",de,[e.addonLeft?(n(),d("span",{key:0,innerHTML:e.addonLeft},null,8,ce)):y("",!0),L(" "+w(e.value)+" ",1),e.addonRight?(n(),d("span",{key:1,innerHTML:e.addonRight},null,8,pe)):y("",!0)])):(n(),d("span",fe,"Bez vrijednosti"))],2)],64))],2))}}),he=["innerHTML"],me=["type","required","disabled","minlength","maxlength","data-minnumber","placeholder","pattern","inputmode"],ge=["innerHTML"],ye={key:0,class:"display-block mt-10",style:{color:"#d84315"}},qe=B({__name:"TextField",props:V({type:{default:"text"},name:{},processing:{type:Boolean,default:!1},label:{},description:{},error:{},required:{type:Boolean,default:!1},editable:{type:Boolean,default:!0},addonLeft:{},addonRight:{},textAlign:{default:"left"},numeric:{type:Boolean,default:!1},email:{type:Boolean,default:!1},decimalPlaces:{default:0},placeholder:{},minLength:{},maxLength:{},minNumber:{},pattern:{},disabled:{type:Boolean,default:!1},horizontal:{type:Boolean,default:!1}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(i,{expose:e}){const t=i,l=P(i,"modelValue"),p=m(null),c=m(!1),a=_(()=>t.numeric&&t.decimalPlaces>0?"decimal":t.numeric?"numeric":t.email?"email":"text");let s=_({get:()=>l.value?t.numeric?c.value?l.value.toString().replace(".",","):l.value.toLocaleString("hr",{minimumFractionDigits:t.decimalPlaces,maximumFractionDigits:t.decimalPlaces}):l.value:null,set:o=>{if(!o){l.value=null;return}if(!t.numeric){l.value=o;return}let r=parseFloat(parseFloat(o.toString().replace(",",".")).toFixed(t.decimalPlaces));if(isNaN(r)){l.value=null;return}l.value=r}});const u=o=>{var v,h;if(!t.numeric)return;let r=["Backspace","Delete","Tab","Escape","Enter","0","1","2","3","4","5","6","7","8","9","ArrowLeft","ArrowRight","Home","End"];t.decimalPlaces>0&&!((v=s.value)!=null&&v.toString().includes(","))&&!((h=s.value)!=null&&h.toString().includes("."))&&r.push(".",","),!((o.ctrlKey||o.metaKey)&&(o.key==="a"||o.key==="A"||o.key==="v"||o.key==="V"||o.key==="c"||o.key==="C"||o.key==="x"||o.key==="X"))&&(r.includes(o.key)||o.ctrlKey||o.preventDefault())};function f(){var o;(o=p.value)==null||o.focus()}const k=`text_field_${Math.random().toString(36).substring(2,9)}`;return e({focus:f}),(o,r)=>{const v=O("icon");return n(),R(N,{name:t.name,processing:t.processing,label:t.label,description:t.description,error:t.error,required:t.required,editable:t.editable,"addon-left":t.addonLeft,"addon-right":t.addonRight,horizontal:t.horizontal,value:l.value},{default:q(()=>[g("div",{class:x([{"input-group":o.addonLeft||o.addonRight}])},[o.addonLeft?(n(),d("span",{key:0,class:"input-group-addon",innerHTML:o.addonLeft},null,8,he)):y("",!0),W(g("input",{ref_key:"inputElement",ref:p,type:t.type||"text",class:x(["form-control",{"text-right":t.numeric},`text-${o.textAlign}`]),name:k,"onUpdate:modelValue":r[0]||(r[0]=h=>X(s)?s.value=h:s=h),required:t.required,disabled:t.disabled,minlength:t.minLength,maxlength:t.maxLength,"data-minnumber":t.minNumber,placeholder:t.placeholder,pattern:t.pattern,inputmode:a.value,onKeydown:u,onFocus:r[1]||(r[1]=h=>c.value=!0),onBlur:r[2]||(r[2]=h=>c.value=!1)},null,42,me),[[G,J(s)]]),o.addonRight?(n(),d("span",{key:1,class:"input-group-addon",innerHTML:o.addonRight},null,8,ge)):y("",!0)],2),t.error?(n(),d("span",ye,[E(v,{icon:"alertTriangle",class:"position-left"}),L(" "+w(t.error),1)])):y("",!0)]),_:1},8,["name","processing","label","description","error","required","editable","addon-left","addon-right","horizontal","value"])}}}),ve={key:0,class:"checkbox-container"},be=["id","required","disabled","checked"],xe=["for"],ke={key:0,class:"text-danger"},_e={class:"text-grey-600 text-regular mt-5 display-block tracking-loose"},we={key:1,class:"checkbox checkbox-left checkbox-switchery switchery-sm no-margin"},Le=["checked"],Be={key:0,class:"text-grey text-regular mt-5 display-block"},S="rgb(100, 189, 99)",Fe=B({__name:"CheckboxField",props:V({name:{},processing:{type:Boolean,default:!1},label:{},description:{},error:{},required:{type:Boolean,default:!1},editable:{type:Boolean,default:!0},disabled:{type:Boolean,default:!1},horizontal:{type:Boolean,default:!1},useSwitch:{type:Boolean,default:!1},size:{default:"small"}},{modelValue:{type:[Boolean,Number],default:!1},modelModifiers:{}}),emits:["update:modelValue"],setup(i){const e=i,t=P(i,"modelValue"),p=m(`checkbox-${"xxxxxxxxxxxx".replace(/[xy]/g,function(r){var v=Math.random()*16|0,h=r=="x"?v:v&3|8;return h.toString(16)})}`);A(()=>t.value,r=>{typeof r!="boolean"&&(t.value=!!r)},{immediate:!0});const c=r=>{t.value=!!r.target.checked},a=m(null),s=_(()=>{let r={boxShadow:"rgb(223, 223, 223) 0px 0px 0px 0px inset",borderColor:"rgb(223, 223, 223)",backgroundColor:"rgb(255, 255, 255)",transition:"border 0.4s, box-shadow 0.4s"};return t.value&&(r.boxShadow=`${S} 0px 0px 0px 10px inset`,r.borderColor=S,r.backgroundColor=S),r});let u=0;a.value&&(u=a.value.offsetWidth-20);const f=_(()=>{let r={left:"0px",transition:"background-color 0.4s, left 0.2s",backgroundColor:"rgb(255, 255, 255)"};return t.value&&(r.left=a.value?`${u}px`:"18px"),r}),k=m(null),o=m(e.horizontal);return Y(()=>{a.value&&(u=a.value.offsetWidth-20)}),H(()=>{var v;a.value&&a.value.offsetWidth>0&&(u=a.value.offsetWidth-20);const r=(v=k.value)==null?void 0:v.closest("form");r&&r.classList.contains("form-horizontal")&&(o.value=!0)}),(r,v)=>(n(),R(N,{name:e.name,processing:e.processing,label:e.horizontal?e.label:"",description:e.horizontal?e.description:"",error:e.error,required:e.required,editable:e.editable,horizontal:e.horizontal,value:t.value},{default:q(()=>[g("div",{ref_key:"root",ref:k},[e.useSwitch?y("",!0):(n(),d("div",ve,[g("input",{type:"checkbox",class:x(["form-checkbox",e.size]),id:p.value,value:1,required:e.required,disabled:e.disabled,checked:t.value===!0,onInput:c},null,42,be),r.label?(n(),d("label",{key:0,for:p.value,class:"text-grey-900 text-semibold no-margin cursor-pointer"},[L(w(r.label)+" ",1),r.required?(n(),d("span",ke,"*")):y("",!0),r.description?(n(),d(z,{key:1},[v[0]||(v[0]=g("br",null,null,-1)),g("small",_e,w(r.description),1)],64)):y("",!0)],8,xe)):y("",!0)])),e.useSwitch?(n(),d("div",we,[g("label",null,[g("input",{class:"form-check-input",type:"checkbox",onInput:c,checked:t.value===!0,style:{display:"none"}},null,40,Le),g("span",{ref_key:"switcherParent",ref:a,class:"switchery switchery-default",style:T(s.value)},[g("small",{style:T(f.value)},null,4)],4),L(" "+w(e.horizontal?"":e.label)+" ",1),!e.horizontal&&e.description?(n(),d("small",Be,w(e.description),1)):y("",!0)])])):y("",!0)],512)]),_:1},8,["name","processing","label","description","error","required","editable","horizontal","value"]))}});export{qe as _,Fe as a,Me as b,N as c,Re as u};
