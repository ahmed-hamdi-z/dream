// Dependencies
import { FC } from "react";

const Loading:FC = ()=>{
  return (
    
<div className="flex-col gap-4 w-full flex items-center justify-center mt-64">
  <div
    className="w-20 h-20 border-4 border-transparent text-[#835782] text-4xl animate-spin flex items-center justify-center border-t-blue-400 rounded-full"
  >
    <div
      className="w-16 h-16 border-4 border-transparent text-[#495057] text-2xl animate-spin flex items-center justify-center border-t-red-400 rounded-full"
    ></div>
  </div>
</div>

  );
}

export default Loading;