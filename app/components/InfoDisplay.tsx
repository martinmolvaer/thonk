import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Switch as SwitchType } from '../types/switchtype';

function InfoDisplay({ currentSwitch }: { currentSwitch: SwitchType | null }) {
  return (
    <div className="min-h-[200px]">
      <div className="flex flex-col items-center justify-center mt-8">
        {currentSwitch?.info && (
          <motion.div
            key={`info-${currentSwitch?.id}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, delay: 0.1 }}
            className="text-center text-sm font-mono semibold"
          >
            <div className="flex justify-center items-center">
              <div className="flex gap-1 items-center mb-1 text-black">
                <p className="font-mono text-md">
                  {currentSwitch.brand ? currentSwitch.brand : ''}
                </p>
                <div
                  style={{ backgroundColor: currentSwitch.color }}
                  className={`size-3 border rounded-full border-neutral-300`}
                ></div>
                <p className="font-mono text-md font-semibold">
                  {currentSwitch.name ? currentSwitch.name : ''}
                </p>
              </div>
            </div>
            <div className="max-w-[55ch] text-neutral-500">
              {currentSwitch.info}
            </div>
          </motion.div>
        )}
        {currentSwitch === null && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, delay: 1 }}
            className="font-mono text-sm font-semubld text-neutral-500"
          >
            Select a switch to view details
          </motion.div>
        )}
      </div>
      <div className="flex flex-col items-center justify-center mt-8">
        {currentSwitch?.link && (
          <motion.div
            key={`link-${currentSwitch?.id}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-center text-sm font-mono font-semibold"
          >
            <div className="max-w-[50ch] text-neutral-500">
              <Link
                target="_blank"
                rel="non-refferer"
                href={currentSwitch.link}
                className="text-orange-500 font-bold underline"
              >
                {currentSwitch?.link ? 'More info' : ''}
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default InfoDisplay;
