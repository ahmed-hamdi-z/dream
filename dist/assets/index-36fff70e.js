import{d as l,j as e,L as c}from"./index-1dd3677f.js";import{a}from"./data-8234174d.js";import{c as i}from"./index-3819d810.js";const p=()=>{const{t:s}=i(),r=l().pathname==="/portfolio";return e.jsxs("div",{className:"flex flex-col items-center justify-center w-full mb-10",children:[e.jsxs("div",{className:"flex flex-col items-center justify-center md:p-5 p-3",children:[e.jsx("p",{className:"text-lg text-center text-[#495057] font-monotype",children:s("Explore our Projects")}),e.jsx("hr",{className:"w-5 border-2 border-black pb-4"}),e.jsx("h1",{className:"text-2xl font-bold mb-4 text-[#495057]",children:s("Explore")})]}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 flex-col-reverse",children:a.map((t,o)=>e.jsx("div",{className:"p-2 rounded-lg shadow-md flex flex-col-reverse items-center justify-center mb-2",children:e.jsx("img",{src:t.image,alt:t.title,className:"w-96 h-[460px] object-cover rounded-xl"})},o))}),e.jsx("div",{className:"flex items-center gap-3 mt-3",children:r?e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{className:"rounded-lg border-2 px-3 py-1 text-white bg-[#835782]",children:"1"}),e.jsx("button",{className:"rounded-lg border-2 px-3 py-1 text-[#835782] bg-[#fff]",children:"2"})]}):e.jsx(c,{to:"/portfolio",className:"rounded-lg border-2 px-4 py-2 text-white bg-[#835782]",children:s("Explore our Projects")})})]})};export{p as default};
