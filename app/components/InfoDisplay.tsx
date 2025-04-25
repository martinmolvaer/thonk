import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

function InfoDisplay({
  infoDisplay,
  link,
}: {
  infoDisplay: string;
  link: string;
}) {
  return (
    <div className="min-h-[200px]">
      <div className="flex flex-col items-center justify-center mt-8">
        {infoDisplay && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, delay: 1 }}
            className="text-center text-sm font-mono font-semibold"
          >
            <div className="max-w-[75ch] text-neutral-500">{infoDisplay}</div>
          </motion.div>
        )}
      </div>
      <div className="flex  flex-col items-center justify-center mt-8">
        {link && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, delay: 0 }}
            className="text-center text-sm font-mono font-semibold"
          >
            <div className="max-w-[50ch] text-neutral-500">
              <Link
                target="_blank"
                rel="non-refferer"
                href={link}
                className="text-purple-500 underline"
              >
                {link ? 'More info' : ''}
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

export default InfoDisplay;
