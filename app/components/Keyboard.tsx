import React from 'react';
import { motion } from 'framer-motion';

function Keyboard({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-wrap items-center justify-center p-2 sm:p-4 bg-[#999999] rounded-3xl shadow-xl border-10 border-[#F4F7FE]">
      <motion.div
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.1,
              when: 'beforeChildren',
            },
          },
        }}
        className="grid sm:grid-cols-4 grid-cols-2  space-x-1 space-y-3"
      >
        {children}
      </motion.div>
    </div>
  );
}

export default Keyboard;
