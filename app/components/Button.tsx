import React from 'react';

interface ButtonProps {
  name: string;
  color?: string;
  brand?: string;
  id: number;
  keyToPress?: string;
  onClick: () => void;
  info?: string;
  theme?: {
    name: string;
    mainColor: string;
    shadowColor: string;
    textColor: string;
    borderColor: string;
  };
}

function Button({ name, onClick, color, id, brand, theme }: ButtonProps) {
  return (
    <div
      id={String(id)}
      onClick={onClick}
      style={{
        backgroundColor: theme?.mainColor || '#F4F7FE',
        color: theme?.textColor || '#4B5563',
        borderColor: theme?.borderColor || '#D1D5DB',
        boxShadow: `0px 8px 1px ${theme?.shadowColor || '#D9D9E6'}`,
      }}
      className="group font-mono select-none relative flex flex-col size-19 sm:size-22 items-center justify-center overflow-hidden rounded-md border px-4 p-2 text-xs font-semibold transition-all active:translate-y-[4px] active:shadow-none"
    >
      <div
        className="absolute left-1 top-1 rounded-full size-3 mb-2 border transition-all group-hover:scale-110 group-active:scale-120"
        style={{
          backgroundColor: color,
          borderColor: theme?.borderColor || '#D1D5DB',
        }}
      ></div>
      <p className="mt-1 text-[8px] text-center">{brand}</p>
      <p className="text-center text-xs">{name}</p>
    </div>
  );
}

export default Button;
