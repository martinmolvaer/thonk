import React from 'react';

interface ButtonProps {
  name: string;
  onClick?: () => void;
}

function Button({ name, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="group font-mono relative inline-flex size-16 items-center justify-center overflow-hidden rounded-md border border-neutral-300 bg-[#F1F1EC] px-6 text-xs font-bold text-neutral-600 transition-all [box-shadow:0px_5px_1px_#a3a3a3] active:translate-y-[2px] active:shadow-none"
    >
      {name}
    </button>
  );
}

export default Button;
