import{j as e}from"./index-1dd3677f.js";import{e as a}from"./data-8234174d.js";import{c as n,a as s}from"./index-3819d810.js";const m=()=>{const{t}=n(),r={hidden:{opacity:0},visible:{opacity:1,transition:{staggerChildren:.3}}},l={hidden:{opacity:0,y:-50},visible:{opacity:1,y:0}};return e.jsx("div",{className:"bg-serbg bg-cover bg-center bg-no-repeat overflow-hidden rtl:text-right",id:"services",children:e.jsxs("div",{className:"flex flex-col items-center justify-center ",children:[e.jsxs("div",{className:"flex p-10",children:[e.jsxs(s.div,{initial:{opacity:0,x:-100},whileInView:{opacity:1,x:0},transition:{duration:1},viewport:{once:!0},children:[e.jsx("h3",{className:"text-lg text-white font-monotype px-4 md:w-auto w-64",children:t("services")}),e.jsx("hr",{className:"w-5 ml-8  border-2 border-white "}),e.jsxs("div",{className:"flex md:flex-row flex-col w-full ",children:[e.jsx("h1",{className:"md:text-4xl text-3xl  font-bold  text-white ",children:t("From Vision to Reality")}),e.jsx("p",{className:"text-[12px] text-justify text-white tracking-tight md:mt-2 mt-4 ",children:t("services disc")})]})]}),e.jsx(s.div,{initial:{opacity:0,x:100},whileInView:{opacity:1,x:0},transition:{duration:1},viewport:{once:!0}})]}),e.jsx(s.div,{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 flex-col-reverse z-50 mb-10",initial:"hidden",whileInView:"visible",viewport:{once:!0},variants:r,children:a.map((i,o)=>e.jsxs(s.div,{className:"p-2 rounded-lg flex flex-col-reverse items-center justify-center",variants:l,children:[e.jsx("div",{className:"md:mx-8 mx-2.5 rounded-2xl mt-[-40px] hover:bg-[#835782] group-hover:bg-[linear-gradient(45deg,#835782,#D296CC)]  group bg-white ",children:e.jsxs("div",{className:" group-hover:bg-[linear-gradient(45deg,#835782,#D296CC)] p-3 bg-white rounded-2xl",children:[e.jsx("h2",{className:"text-xl font-semibold group-hover:text-white ",children:t(i.title)}),e.jsx("p",{className:"text-[#495057] group-hover:text-white w-full tracking-wider mt-2 text-base md:text-sm lg:text-sm transition-all duration-300 ease-in-out",children:t(i.description)})]})}),e.jsx("img",{src:i.image,alt:i.title,className:"w-96 h-96 object-cover rounded-xl border-[10px] border-white group-hover:text-white"})]},o))})]})})};export{m as default};
