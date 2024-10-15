import{o,C as n,x as S,q as $,u as O,Q as D,R as W,H as t,I as d,U as z,F as x,V as y,l as G,W as N,X as h,Y as H,d as V,c as v,f as w,w as Y,Z as U,_ as F,$ as R,j as Q}from"./CSrvbBgX.js";import{_ as E,A as X,p as Z}from"./Dfiw6wzu.js";import{H as I,s as J,a as K}from"./Cotsi3tW.js";const ee={data(){return{images:["/images/HERO-SLIDER/1.png","/images/HERO-SLIDER/2.png","/images/HERO-SLIDER/3.png"],texts:I}},mounted(){X.init()}},te={class:"relative"},ae=["src"],se={class:"absolute top-0 z-10 flex items-end md:p-[30px] w-full h-full"},oe={class:"text-[12.5vw] text-white font-[300]","data-aos":"fade-up","data-aos-duration":"1000"};function ne(e,i,m,p,a,f){const l=N,s=z;return o(),n("div",te,[S(s,{class:"h-dvh",modules:["SwiperAutoplay"in e?e.SwiperAutoplay:O(D),"SwiperEffectCreative"in e?e.SwiperEffectCreative:O(W)],speed:750,"slides-per-view":1,loop:!0,effect:"creative","allow-touch-move":!1,autoplay:{delay:4e3},"creative-effect":{prev:{shadow:!1,translate:["-20%",0,-1]},next:{translate:["100%",0,0]}}},{default:$(()=>[(o(!0),n(x,null,y(a.images,u=>(o(),G(l,{key:u},{default:$(()=>[t("img",{src:u,class:"h-full w-full object-cover",alt:""},null,8,ae)]),_:2},1024))),128))]),_:1},8,["modules"]),t("div",se,[t("h1",oe,d(a.texts.S1_TITLE),1)])])}const M=E(ee,[["render",ne]]),ie={data(){return{currentIndex:0,images:["images/S2-SLIDER.png","https://via.placeholder.com/500x500","https://via.placeholder.com/500x500"]}},methods:{nextSlide(){this.currentIndex=(this.currentIndex+1)%this.images.length},goToSlide(e){this.currentIndex=e}},mounted(){this.interval=J(this.nextSlide,5e3)},beforeDestroy(){clearInterval(this.interval)}},le={class:"slider relative w-full h-full overflow-hidden"},de=["src"],re={class:"indicators flex justify-center h-full items-end pb-10 relative z-2"},ce=["onClick"];function pe(e,i,m,p,a,f){return o(),n("div",le,[(o(!0),n(x,null,y(a.images,(l,s)=>(o(),n("div",{class:"slides absolute inset-0 transition-opacity duration-1000",key:s,style:h({opacity:a.currentIndex===s?1:0})},[t("img",{src:l,class:"w-full h-full object-cover object-center",alt:""},null,8,de)],4))),128)),t("div",re,[(o(!0),n(x,null,y(a.images,(l,s)=>(o(),n("span",{key:s,class:H(["dot w-2 h-2 mx-1 rounded-full cursor-pointer",{"bg-white":a.currentIndex===s,"bg-gray-300":a.currentIndex!==s}]),onClick:u=>f.goToSlide(s)},null,10,ce))),128))])])}const P=E(ie,[["render",pe],["__scopeId","data-v-2959204d"]]),ue=V({__name:"Marquee",props:{style:{default:()=>()=>({})},class:{default:""},autoFill:{type:Boolean,default:!1},play:{type:Boolean,default:!0},pauseOnHover:{type:Boolean,default:!1},pauseOnClick:{type:Boolean,default:!1},direction:{default:"left"},speed:{default:50},delay:{default:0},loop:{default:0},gradient:{type:Boolean,default:!1},gradientColor:{default:"white"},gradientWidth:{default:200}},emits:["finish","cycleComplete"],setup(e,{emit:i}){const m=i,p=v(),a=v(),f=v(0),l=v(0),s=v(1),u=v(!1),r=v(),C=w(()=>e.autoFill?l.value*s.value/e.speed:l<f?f.value/e.speed:l.value/e.speed),j=w(()=>({...e.style,"--pause-on-hover":!e.play||e.pauseOnHover?"paused":"running","--pause-on-click":!e.play||e.pauseOnHover&&!e.pauseOnClick||e.pauseOnClick?"paused":"running","--width":e.direction==="up"||e.direction==="down"?"100vh":"100%","--transform":e.direction==="up"?"rotate(-90deg)":e.direction==="down"?"rotate(90deg)":"none"})),q=w(()=>({"--gradient-color":e.gradientColor,"--gradient-width":typeof e.gradientWidth=="number"?`${e.gradientWidth}px`:e.gradientWidth})),L=w(()=>({"--play":e.play?"running":"paused","--direction":e.direction==="left"?"normal":"reverse","--duration":`${C.value}s`,"--delay":`${e.delay}s`,"--iteration-count":e.loop?`${e.loop}`:"infinite","--min-width":e.autoFill?"auto":"100%"})),k=w(()=>({"--transform":e.direction==="up"?"rotate(90deg)":e.direction==="down"?"rotate(-90deg)":"none"})),T=()=>{if(a.value&&p.value){const c=p.value.getBoundingClientRect(),g=a.value.getBoundingClientRect();let _=c.width,b=g.width;(e.direction==="up"||e.direction==="down")&&(_=c.height,b=g.height),e.autoFill&&_&&b?s.value=b<_?Math.ceil(_/b):1:s.value=1,f.value=_,l.value=b}},A=c=>[...Array(Number.isFinite(c)&&c>=0?c:0)];return Y([()=>e.autoFill,()=>e.direction,u,p],()=>{u.value&&(T(),a.value&&p.value&&(r.value&&r.value.disconnect(),r.value=new ResizeObserver(()=>T()),r.value.observe(p.value),r.value.observe(a.value)))}),U(()=>{u.value=!0}),(c,g)=>u.value?(o(),n("div",{key:0,ref_key:"containerRef",ref:p,class:H(["vfm-marquee-container",e.class]),style:h(j.value)},[c.gradient?(o(),n("div",{key:0,style:h(q.value),class:"vfm-overlay"},null,4)):F("",!0),t("div",{class:"vfm-marquee",style:h(L.value),onAnimationiteration:g[0]||(g[0]=_=>m("cycleComplete")),onAnimationend:g[1]||(g[1]=_=>m("finish"))},[t("div",{style:h(k.value),class:"vfm-parent",ref_key:"marqueeRef",ref:a},[R(c.$slots,"default")],4),(o(!0),n(x,null,y(A(s.value-1),_=>(o(),n("div",{style:h(k.value),class:"vfm-parent"},[R(c.$slots,"default")],4))),256))],36),t("div",{class:"vfm-marquee",style:h(L.value)},[(o(!0),n(x,null,y(A(s.value),_=>(o(),n("div",{style:h(k.value),class:"vfm-parent"},[R(c.$slots,"default")],4))),256))],4)],6)):F("",!0)}}),me={name:"NuxtMarquee",emits:["finish","cycleComplete"],props:["style","class","autoFill","play","pauseOnHover","pauseOnClick","direction","speed","delay","loop","gradient","gradientColor","gradientWidth"],setup(e,{slots:i,emit:m}){return()=>Q(ue,{...e,onCycleComplete:()=>m("cycleComplete"),onFinish:()=>m("finish")},i)}},_e={components:{},data(){return{client:[{image:"/images/client.png"},{image:"/images/client.png"},{image:"/images/client.png"},{image:"/images/client.png"},{image:"/images/client.png"},{image:"/images/client.png"}]}}},fe=["src"];function he(e,i,m,p,a,f){const l=me;return o(),n("div",null,[S(l,{"gradient-color":"#D8C8AC",class:"!flex"},{default:$(()=>[(o(!0),n(x,null,y(a.client,s=>(o(),n("img",{src:s.image,key:s.id,class:"w-full h-[80px] md:mx-[40px]",alt:""},null,8,fe))),128))]),_:1})])}const B=E(_e,[["render",he]]),ge=Z("/images/S4-IMAGE.png"),ve={components:{HeroSlider:K,IntroductionSlider:P,Client:B,Test:M},data(){return{texts:I,portfolioItems:[{id:1,title:"Langham Residence",image:"images/PORTFOLIO/1.png"},{id:2,title:"Langham Residence",image:"images/PORTFOLIO/2.png"},{id:3,title:"Langham Residence",image:"images/PORTFOLIO/3.png"},{id:4,title:"Langham Residence",image:"images/PORTFOLIO/4.png"}]}}},xe={class:"container-xl"},ye={class:"container-xl"},be={class:"h-dvh flex"},we={class:"w-[45%] bg-gaura px-[40px] pt-[175px] pb-[92px] flex flex-col"},Se={class:"text-[34px] mb-auto font-[300] uppercase","data-aos":"fade-right","data-aos-anchor-placement":"top-bottom","data-aos-duration":"1000"},Ce={class:"text-[32px] pe-[80px] leading-[42px] font-[300]","data-aos":"fade-right","data-aos-anchor-placement":"top-bottom","data-aos-duration":"1000"},Oe={class:"w-[55%] bg-gaura"},Ie={id:"section2",class:"container-xl"},Ee={class:"h-auto bg-gaura-second"},ke={class:"flex justify-between px-[36px] md:mb-[58px] md:pt-[195px]"},Re={class:"text-[34px] uppercase leading-[34px]","data-aos":"fade-down","data-aos-anchor-placement":"top-bottom","data-aos-duration":"1000"},$e={class:"group w-[20%]"},Le={class:"text-[14px] md:mb-14","data-aos":"fade-down","data-aos-anchor-placement":"top-bottom","data-aos-duration":"1000"},Te={class:"portfolio md:gap-[21px] grid grid-cols-4 px-[36px]"},Ae=["data-aos","data-aos-delay"],Fe={class:"relative group"},He=["src"],Me={class:"flex items-center relative z-10 cursor-pointer"},Pe={class:"text-[41px] md:me-2"},Be={class:"hover:font-[700] transtion-all duration-300"},je={class:"text-[16px] leading-[110%]"},qe={class:"text-[16px] leading-[100%]"},De={id:"section3",class:"container-xl bg-gaura-second"},We={class:"h-auto"},ze={class:"flex justify-between px-[36px] pt-[195px] md:mb-[58px]"},Ge={class:"text-[34px] leading-[34px] uppercase text-black","data-aos":"fade-right","data-aos-anchor-placement":"top-bottom","data-aos-duration":"1000"},Ne={class:"group w-[20%]"},Ve={class:"text-[14px] md:mb-14 text-black","data-aos":"fade-left","data-aos-anchor-placement":"top-bottom","data-aos-duration":"1000"},Ye={class:"group px-[36px] md:pt-[154px]"},Ue={class:"border-b-[1px] border-black flex justify-between md:pb-[100px]"},Qe={class:"text-[25px] text-black","data-aos":"fade-right"},Xe={class:"group w-[40%]","data-aos":"fade-left"},Ze={class:"text-[32px] font-[300] text-black"},Je={class:"group md:py-[74px]","data-aos":"fade-up"},Ke={class:"text-center text-[22px] text-black uppercase md:mb-[40px]"};function et(e,i,m,p,a,f){const l=M,s=P,u=B;return o(),n("div",null,[t("section",null,[t("div",xe,[S(l)])]),t("section",ye,[t("div",be,[t("div",we,[t("h1",Se,d(("HOME_PAGE"in e?e.HOME_PAGE:O(I)).S2_TITLE),1),t("p",Ce,d(("HOME_PAGE"in e?e.HOME_PAGE:O(I)).S2_COPY),1),i[0]||(i[0]=t("button",{class:"btn-white md:max-w-[94.8px] md:mt-[44px]","data-aos":"fade-right","data-aos-anchor-placement":"top-bottom","data-aos-duration":"1000"},"Read More",-1))]),t("div",Oe,[S(s,{"data-aos":"fade-left","data-aos-anchor-placement":"top-bottom","data-aos-duration":"1000"})])])]),t("section",Ie,[t("div",Ee,[t("div",ke,[t("h1",Re,d(a.texts.S3_TITLE),1),t("div",$e,[t("p",Le,d(a.texts.S3_COPY),1),i[1]||(i[1]=t("button",{class:"btn-primary","data-aos":"fade-left","data-aos-anchor-placement":"top-bottom","data-aos-duration":"1000"},"Read More",-1))])]),t("div",Te,[(o(!0),n(x,null,y(a.portfolioItems,(r,C)=>(o(),n("div",{key:r.id,class:"relative group","data-aos":C%2===0?"fade-up":"fade-down","data-aos-duration":"1000","data-aos-delay":C*100},[t("div",Fe,[t("img",{class:"w-full md:mb-3",src:r.image,alt:""},null,8,He),i[2]||(i[2]=t("div",{class:"absolute inset-0 flex items-center justify-center bg-[#7F3924CC] opacity-0 group-hover:opacity-100 transition-opacity duration-300"},[t("a",{href:"#",class:"text-white text-[17.5px] hover:underline transition-all duration-300 hover:text-[18px]"},"View Portfolio")],-1))]),t("div",Me,[t("h5",Pe,d(r.id.toString().padStart(2,"0")),1),t("div",Be,[t("p",je,d(r.title.split(" ")[0]),1),t("p",qe,d(r.title.split(" ")[1]),1)])])],8,Ae))),128))])])]),t("section",De,[t("div",We,[t("div",ze,[t("h1",Ge,d(a.texts.S4_TITLE),1),t("div",Ne,[t("p",Ve,d(a.texts.S4_COPY),1),i[3]||(i[3]=t("button",{class:"btn-black","data-aos":"fade-up","data-aos-anchor-placement":"top-bottom","data-aos-duration":"1000"}," Read More ",-1))])]),i[4]||(i[4]=t("img",{src:ge,class:"w-full","data-aos":"fade-up","data-aos-anchor-placement":"top-bottom","data-aos-duration":"1000",alt:""},null,-1))]),t("div",Ye,[t("div",Ue,[t("h1",Qe,d(a.texts.S5_TITLE),1),t("div",Xe,[t("p",Ze,d(a.texts.S5_COPY),1)])]),t("div",Je,[t("h1",Ke,d(a.texts.S6_TITLE),1),S(u)])])])])}const ot=E(ve,[["render",et]]);export{ot as default};