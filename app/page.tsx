'use client';
import Button from './components/Button';
import Link from 'next/link';
import Nav from './components/Nav';
import Keyboard from './components/Keyboard';
import { motion } from 'framer-motion';
import { useState } from 'react';
import InfoDisplay from './components/InfoDisplay';
import { Switch } from './types/switchtype';
import { switches } from './switches';

export default function Home() {
  const [currentSwitch, setCurrentSwitch] = useState<Switch | null>(null);
  const playSound = (switchItem: Switch) => {
    const audio = new Audio(switchItem.sound);
    audio.volume = 0.25;
    audio.play();
    setCurrentSwitch(switchItem);
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-[#d0d0d0] p-12 sm:p-24">
      <Nav />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        <Keyboard>
          {switches.map((switchItem) => (
            <motion.div
              key={switchItem.id}
              variants={{
                hidden: { x: 20, opacity: 0 },
                show: { x: 0, opacity: 1 },
              }}
            >
              <Button
                id={switchItem.id}
                name={switchItem.name}
                color={switchItem.color}
                keyToPress={`#${switchItem.id}`}
                brand={switchItem.brand}
                onClick={() => playSound(switchItem)}
              />
            </motion.div>
          ))}
        </Keyboard>
      </motion.div>
      <InfoDisplay currentSwitch={currentSwitch} />
      <Link
        target="_blank"
        rel="non-refferer"
        href={'http://molvaer.no'}
        className="absolute bottom-2 right-2 font-mono text-xs"
      >
        made by mart
      </Link>
    </main>
  );
}
