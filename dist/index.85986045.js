const e=(e,t)=>{let n;t.innerHTML="",n=`<p style="color:white; text-align:center;">${e}</p>`,t.insertAdjacentHTML("afterbegin",n)},t=async(t=null)=>{e("Loading...🚀",t);try{const e=await fetch("https://calm-inlet-18337.herokuapp.com/");if(!e.ok)throw new Error("Couldn't fetch blogs'");return{success:!0,data:await e.json()}}catch(e){return{success:!1,message:e.message}}},n=new IntersectionObserver(((e,t)=>{const[n]=e;n.isIntersecting&&(n.target.classList.remove("section--hidden"),t.unobserve(n.target))}),{root:null,threshold:.1}),s=new IntersectionObserver(((e,t)=>{e.forEach((e=>{e.isIntersecting&&(e.target.src=e.target.dataset.src,t.unobserve(e.target))}))}),{threshold:.5}),o=async(n=null)=>{let s,o="";const a=await t(n);if(!a.success)return void e(`${a.message}  🚩`,n);const{data:i}=a.data.results;let l;n.classList.contains("c-news")?(l=r(i,"news"),s=["#ff9343","#72ccca","#ff6865"]):n.classList.contains("c-jobs")&&(l=r(i,"jobs"),s=["#282828","#ff6865","#72ccca"]),l.forEach(((e,t)=>{t>s.length-1&&(t=0),o+=`\n        <div class="news__item" style="background-color: ${s[t]};">\n          <div style="font-size: 1.6rem; font-weight: bold; display: inline-block; white-space: nowrap;\n          overflow: hidden;\n          text-overflow: ellipsis; ${"#282828"===s[t]?"color: white":""}">${e.name}</div>\n          <a href="https://news.wearecohere.org${e.permalink}"><img style="height: 20rem; width: 100%;"\n          src="../images/load-icon.png"\n          data-src="${e.image}" referrerpolicy="no-referrer"></a>\n        </div>\n        `})),n.innerHTML="",n.insertAdjacentHTML("afterbegin",o),c()},r=(e,t)=>e.filter((e=>e.category.includes(t))).slice(0,3),c=()=>{document.querySelectorAll("img[data-src]").forEach((e=>{s.observe(e)}))},a=document.querySelectorAll(".news__blog"),i=document.querySelectorAll("img[data-src]"),l=document.querySelectorAll(".section");i.forEach((e=>{s.observe(e)})),l.forEach((function(e){n.observe(e)})),a&&a.forEach((e=>{o(e)}));!function(){const e=document.querySelectorAll(".slide"),t=document.querySelector(".slider__btn--left"),n=document.querySelector(".slider__btn--right"),s=document.querySelector(".dots");let o=0;const r=e.length,c=function(e){document.querySelectorAll(".dots__dot").forEach((e=>e.classList.remove("dots__dot--active"))),document.querySelector(`.dots__dot[data-slide="${e}"]`).classList.add("dots__dot--active")},a=function(t){e.forEach(((e,n)=>e.style.transform=`translateX(${100*(n-t)}%)`))},i=function(){o===r-1?o=0:o++,a(o),c(o)},l=function(){0===o?o=r-1:o--,a(o),c(o)};a(0),e.forEach((function(e,t){s.insertAdjacentHTML("beforeend",`<button class="dots__dot" data-slide="${t}"></button>`)})),c(0),n.addEventListener("click",i),t.addEventListener("click",l),document.addEventListener("keydown",(function(e){"ArrowLeft"===e.key&&l(),"ArrowRight"===e.key&&i()})),s.addEventListener("click",(function(e){if(e.target.classList.contains("dots__dot")){const{slide:t}=e.target.dataset;a(t),c(t)}}))}();
//# sourceMappingURL=index.85986045.js.map