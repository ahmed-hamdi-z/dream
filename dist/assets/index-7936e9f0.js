import{r,j as t}from"./index-fb221bf4.js";import{B as u,C as f,D as h,m as x,E as m}from"./index-ca0155d8.js";function p(e){const n=u(()=>h(e)),{isStatic:s}=r.useContext(f);if(s){const[,o]=r.useState(e);r.useEffect(()=>n.on("change",o),[])}return n}const c=["/images/bann1.jpeg","/images/bann2.jpeg","/images/bann3.jpeg"],b=1e3,j=b*10,g=50,d={type:"spring",mass:3,stiffness:400,damping:50},C=()=>{const[e,n]=r.useState(0),s=p(0);r.useEffect(()=>{const a=setInterval(()=>{s.get()===0&&n(l=>l===c.length-1?0:l+1)},j);return()=>clearInterval(a)},[]);const o=()=>{const a=s.get();a<=-g&&e<c.length-1?n(i=>i+1):a>=g&&e>0&&n(i=>i-1)};return t.jsx("div",{className:"relative overflow-hidden bg-black ",children:t.jsx(x.div,{drag:"x",dragConstraints:{left:0,right:0},style:{x:s},animate:{translateX:`-${e*100}%`},transition:d,onDragEnd:o,className:"flex cursor-grab items-center active:cursor-grabbing",children:t.jsx(v,{imgIndex:e})})})},v=({imgIndex:e})=>t.jsx(t.Fragment,{children:c.map((n,s)=>t.jsx(x.div,{style:{backgroundImage:`url(${n})`,backgroundSize:"cover",backgroundPosition:"center"},animate:{scale:1},transition:d,className:"aspect-video w-full h-screen shrink-0 rounded-xl object-cover",children:t.jsxs("div",{className:"w-full flex flex-col rtl:items-end justify-center md:mt-64 mt-96 ml-3 md:ml-10 rtl:ml-[-10px] ",children:[t.jsx("h3",{className:"text-white font-monotype mx-2 mb-2",children:m("Creating Unforgettable Experiences")}),t.jsx("h1",{className:"text-white text-5xl md:text-6xl md:w-5/12  rtl:text-right",children:m("To be the premier event planning service, inspiring lasting memories.")})]})},s))});export{C as default};