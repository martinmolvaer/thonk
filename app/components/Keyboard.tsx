import React from 'react';

function Keyboard({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-1 flex-wrap items-center justify-center p-4 pb-6 bg-[#999999] rounded-3xl shadow-xl border-10 border-[#F4F7FE]">
      {children}
    </div>
  );
}

export default Keyboard;
