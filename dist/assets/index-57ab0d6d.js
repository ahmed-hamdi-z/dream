import{r,j as e}from"./index-fb221bf4.js";import{H as o}from"./index-b3908a31.js";import{e as m}from"./index-f0f53c8f.js";import{u as x,F as d,M as h,T as u}from"./index-ca0155d8.js";import{I as f,W as b}from"./index-ad657d05.js";const y=()=>{const{t:s}=x(),[a,t]=r.useState(null),l=r.useRef(null),i=c=>{c.preventDefault(),l.current&&m.sendForm("service_6jh3ses","template_hmkmn1u",l.current,"tyd3ZtB0OE8aPSBSo").then(()=>{t("تم تسجيل ردكم بنجاح"),l.current},n=>{t(`FAILED... ${n.text}`)})};return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"overflow-hidden bg-gray-50",children:[e.jsx("div",{className:"w-full",children:e.jsx(o,{image:"/images/bann2.jpeg",mainText:s("Reach out"),subText:s("Contact")})}),e.jsxs("div",{className:"flex flex-col md:flex-row bg-white  overflow-hidden p-6",children:[e.jsxs("div",{className:"md:w-1/2 p-6",children:[e.jsx("h2",{className:"text-4xl font-bold mb-2 text-[#835782]",children:s("Get In Touch")}),e.jsx("p",{className:"mb-4 text-[#212529] opacity-60",children:s("Get in touch with us")}),e.jsxs("div",{className:"mb-4",children:[e.jsxs("div",{className:"flex flex-col items-start",children:[e.jsx("p",{className:"text-[#495057] text-lg  ",children:s("Phone")}),e.jsxs("div",{className:"flex flex-row m-3 ",children:[e.jsx(d,{className:"w-6 h-6 text-[#6C757D]"}),e.jsx("p",{className:"text-lg mt-[-5px] mx-2 text-[#6C757D]",children:"0509130845"})]})]}),e.jsxs("div",{className:"flex flex-col items-start",children:[e.jsxs("p",{className:"text-[#495057] text-lg  ",children:[" ",s("Email")," "]}),e.jsxs("div",{className:"flex flex-row m-3 ",children:[e.jsx(h,{className:"w-6 h-6 text-[#6C757D]"}),e.jsx("p",{className:"text-lg mt-[-3px] mx-2 text-[#6C757D] ",children:"info@dream.sa.com"})]})]}),e.jsxs("div",{className:"flex flex-col items-start",children:[e.jsxs("p",{className:"text-[#495057] text-lg  ",children:[" ",s("Office address")," "]}),e.jsxs("div",{className:"flex flex-row m-3 ",children:[e.jsx(u,{className:"w-6 h-6 text-[#6C757D]"}),e.jsx("p",{className:"text-lg mt-[-5px] mx-2 text-[#6C757D]",children:s("Al olaya District - Musaad Al-Anqari")})]})]})]})]}),e.jsxs("div",{className:"md:w-1/2 p-6 bg-[#F8F9FA]",children:[e.jsxs("form",{className:"space-y-4",ref:l,onSubmit:i,children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{htmlFor:"firstName",className:"mb-1 text-[#835782]",children:s("First name")}),e.jsx("input",{type:"text",id:"firstName",name:"first_name",className:"p-2 border border-gray-300 rounded",placeholder:s("First name")})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{htmlFor:"lastName",className:"mb-1 text-[#835782]",children:s("Phone")}),e.jsx("input",{type:"tel",id:"phone",name:"phone",className:"p-2 border border-gray-300 rounded placeholder:rtl:text-right",placeholder:s("Phone"),required:!0})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{htmlFor:"email",className:"mb-1 text-[#835782]",children:s("Email")}),e.jsx("input",{type:"email",id:"email",name:"user_email",className:"p-2 border border-gray-300 rounded",placeholder:s("Email"),required:!0})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("label",{htmlFor:"message",className:"mb-1 text-[#835782]",children:s("Message")}),e.jsx("textarea",{id:"message",name:"message",className:"p-2 border border-gray-300 rounded",placeholder:s("Message")})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-y-4 mt-3  ",children:[e.jsxs("div",{className:"flex gap-2 justify-center items-center",children:[e.jsx("input",{id:"bordered-checkbox-1",type:"checkbox",value:s("Weddings"),name:"select",className:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  outline-[#764095] focus:outline-[#764095]"}),e.jsx("label",{className:"w-full  text-sm font-medium text-[#835782] ",children:s("Weddings")})]}),e.jsxs("div",{className:"flex gap-2 justify-center items-center",children:[e.jsx("input",{id:"bordered-checkbox-1",type:"checkbox",value:s("Special occasions"),name:"select",className:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  outline-[#764095] focus:outline-[#764095]"}),e.jsx("label",{className:"w-full  text-sm font-medium text-[#835782] ",children:s("Special occasions")})]}),e.jsxs("div",{className:"flex gap-2 justify-center items-center",children:[e.jsx("input",{id:"bordered-checkbox-1",type:"checkbox",value:s("Talk to Customer Service"),name:"select",className:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  outline-[#764095] focus:outline-[#764095]"}),e.jsx("label",{className:"w-full text-sm font-medium text-[#835782] ",children:s("Talk to Customer Service")})]}),e.jsxs("div",{className:"flex gap-2 justify-center items-center",children:[e.jsx("input",{id:"bordered-checkbox-1",type:"checkbox",value:s("Baby welcome celebration"),name:"select",className:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300  outline-[#764095] focus:outline-[#764095]"}),e.jsx("label",{className:"w-full  text-sm font-medium text-[#835782] ",children:s("Baby welcome celebration")})]})]}),e.jsx("button",{type:"submit",className:"px-4 py-2 text-white bg-[#835782] font-semibold rounded ",children:s("Send Email")})]}),a&&e.jsx("div",{className:"fixed inset-0 flex items-center justify-center z-50",children:e.jsxs("div",{className:"relative bg-gradient-to-br from-[#764095] via-purple-500 to-pink-500 bg-black bg-opacity-50 text-white p-6 rounded-2xl shadow-2xl w-96 h-40 flex flex-col items-center justify-center transform transition-transform duration-300",children:[e.jsx("button",{onClick:()=>t(null),className:"absolute top-4 right-4 text-white hover:text-gray-300 transition-colors duration-200","aria-label":"Close",children:e.jsx(f,{size:24})}),e.jsx("p",{className:"text-xl font-bold mb-4",children:a}),e.jsx("button",{onClick:()=>t(null),className:"bg-white text-[#764095] px-6 py-2 rounded-full font-semibold hover:bg-[#764095] hover:text-white transition-colors duration-200 ease-in-out shadow-md",children:s("Close")})]})})]})]})]}),e.jsx(b,{})]})};export{y as default};
