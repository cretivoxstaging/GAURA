import{_ as u}from"./Dfiw6wzu.js";import{C as i,H as t,P as h,Y as g,J as l,I as r,F as m,V as p,o as s}from"./CSrvbBgX.js";const v={data(){return{portfolio:[{client_name:"Langham Residence",cover:"images/PORTFOLIO/1.png",category:"property"},{client_name:"Langham Residence",cover:"images/PORTFOLIO/2.png",category:"property"},{client_name:"Langham Residence",cover:"images/PORTFOLIO/3.png",category:"home"},{client_name:"Langham Residence",cover:"images/PORTFOLIO/4.png",category:"industry"},{client_name:"Langham Residence",cover:"images/PORTFOLIO/2.png",category:"property"},{client_name:"Langham Residence",cover:"images/PORTFOLIO/3.png",category:"home"},{client_name:"Langham Residence",cover:"images/PORTFOLIO/4.png",category:"industry"},{client_name:"Langham Residence",cover:"images/PORTFOLIO/2.png",category:"property"},{client_name:"Langham Residence",cover:"images/PORTFOLIO/3.png",category:"home"},{client_name:"Langham Residence",cover:"images/PORTFOLIO/4.png",category:"industry"},{client_name:"Langham Residence",cover:"images/PORTFOLIO/4.png",category:"no category"}],selectedCategory:"all"}},computed:{filteredPortfolio(){return this.selectedCategory==="all"?this.portfolio:this.portfolio.filter(a=>a.category===this.selectedCategory)},uniqueCategories(){const a=this.portfolio.map(e=>e.category);return[...new Set(a)]},categoryCounts(){const a={};return this.portfolio.forEach(e=>{a[e.category]||(a[e.category]=0),a[e.category]++}),a}},methods:{filterCategory(a){this.selectedCategory=a}}},y={class:"container-xl md:min-h-dvh bg-gaura-second md:pt-[150px] md:px-[31px]"},f={class:"grid md:grid-cols-5 md:gap-20 md:mt-12 items-start"},_={class:"flex flex-col md:mt-0 md:gap-1 sticky top-[10rem]"},O={class:"ms-auto"},x=["onClick"],L={class:"ms-auto"},R={class:"grid md:grid-cols-3 md:gap-[20px] col-span-4 md:ps-10 md:gap-y-28 md:pb-20"},C={class:"relative group"},P=["src"],b={class:"flex items-center md:gap-2 md:mt-4"},F={class:"text-[41px] leading-[90%]"},I={class:"client-name leading-[115%] text-[16px]"};function T(a,e,w,k,d,c){return s(),i("div",null,[t("section",y,[e[4]||(e[4]=h('<div class="grid md:grid-cols-5 md:gap-20" data-v-0050c115><div class="" data-v-0050c115><h1 class="text-[22px] uppercase" data-v-0050c115>Our Portfolio</h1></div><div class="col-span-4 md:ps-10 grid md:grid-cols-2 md:gap-20" data-v-0050c115><h1 class="text-[34px] leading-[120%]" data-v-0050c115> We craft unexpected design that commands attention, to enrich our lived environment and the way people experience the world they live, play and work in. </h1><p class="md:pe-36 text-[14px]" data-v-0050c115> We are interior designers with a strong architectural sensibility, dedicated to enhancing everyday environments and contributing to better quality of life. <br data-v-0050c115><br data-v-0050c115> Since our launch in 2009, Material Creative has focused on creating unexpected design to bring people together and command attention, which has earned us an award winning reputation both nationally and internationally. </p></div></div>',1)),t("div",f,[t("div",_,[t("button",{onClick:e[0]||(e[0]=n=>c.filterCategory("all")),class:g(["category-button flex transition-all duration-300 hover:!font-[600] hover:underline",{"!font-[600]":d.selectedCategory==="all"}])},[e[1]||(e[1]=l("All ")),t("span",O,"("+r(d.portfolio.length)+")",1)],2),(s(!0),i(m,null,p(c.categoryCounts,(n,o)=>(s(),i("button",{class:g([{"!font-[600]":d.selectedCategory===o},"category-button flex transition-all duration-300 hover:!font-[600] hover:underline"]),key:o,onClick:V=>c.filterCategory(o)},[l(r(o)+" ",1),t("span",L,"("+r(n)+")",1)],10,x))),128))]),t("div",R,[(s(!0),i(m,null,p(c.filteredPortfolio,(n,o)=>(s(),i("div",{key:n.client_name,class:"portfolio-item"},[t("div",C,[t("img",{src:n.cover,alt:"Portfolio Image",class:g(["portfolio-image w-full object-cover",o%2===0?"aspect-[9/14]":"aspect-square"])},null,10,P),e[2]||(e[2]=t("div",{class:"absolute inset-0 flex items-center justify-center bg-[#7F3924CC] opacity-0 group-hover:opacity-100 transition-opacity duration-300"},[t("a",{href:"#",class:"text-white text-[17.5px] hover:underline transition-all duration-300 hover:text-[18px]"},"View Project")],-1))]),t("div",b,[t("h1",F,r(o<9?"0"+(o+1):o+1),1),t("h4",I,[l(r(n.client_name.split(" ")[0]),1),e[3]||(e[3]=t("br",null,null,-1)),l(" "+r(n.client_name.split(" ").slice(1).join(" ")),1)])])]))),128))])])])])}const q=u(v,[["render",T],["__scopeId","data-v-0050c115"]]);export{q as default};