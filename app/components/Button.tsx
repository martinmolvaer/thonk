import React from 'react';

interface ButtonProps {
  name: string;
  color?: string;
  id: number;
  keyToPress: string;
  onClick: () => void;
}

function Button({ name, onClick, color, keyToPress, id }: ButtonProps) {
  return (
    <div
      id={String(id)}
      onClick={onClick}
      className="group font-mono select-none  relative flex flex-col jus size-22 items-center justify-center overflow-hidden rounded-md border border-neutral-300 bg-[#F4F7FE] px-6 p-2 text-xs font-semibold text-neutral-600 transition-all [box-shadow:0px_8px_1px_#D9D9E6] active:translate-y-[4px] active:shadow-none"
    >
      <div
        className="absolute left-2 top-2 rounded-full size-3 mb-2 border border-neutral-300 transition-all group-hover:scale-110 group-active:scale-120"
        style={{ backgroundColor: color }}
      ></div>
      <p className="text-neutral-400 absolute right-2 top-2 ">{keyToPress}</p>
      <p className="text-center mt-2">{name}</p>
    </div>
  );
}

export default Button;
