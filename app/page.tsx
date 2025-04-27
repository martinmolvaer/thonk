'use client';
import Button from './components/Button';
import Link from 'next/link';
import Nav from './components/Nav';
import Keyboard from './components/Keyboard';
import { motion } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';
import InfoDisplay from './components/InfoDisplay';
import { Switch } from './types/switchtype';
import { switches } from './switches';
import { keyboardThemes } from './themes';

export default function Home() {
  const [currentSwitch, setCurrentSwitch] = useState<Switch | null>(null);
  const [keyboardTheme, setKeyboardTheme] = useState<string>('light');

  // handle keyboard theme change
  const handleKeyboardThemeChange = (theme: string) => {
    setKeyboardTheme(theme);
    console.log('Keyboard theme changed to:', theme);
    // play click sound
    const clickAudio = new Audio('/mouse-click-153941.mp3');
    clickAudio.volume = 0.04;
    clickAudio.play();
  };

  // save and load keyboard theme from local storage
  useEffect(() => {
    const savedTheme = localStorage.getItem('keyboardTheme');
    if (savedTheme) {
      setKeyboardTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('keyboardTheme', keyboardTheme);
  }, [keyboardTheme]);

  // preload audio files
  const audioMap = useMemo(() => {
    if (typeof window === 'undefined') return {};

    const map: Record<string, HTMLAudioElement> = {};
    switches.forEach((sw) => {
      const audio = new Audio(sw.sound);
      audio.volume = 0.25;
      map[sw.id] = audio;
    });
    return map;
  }, []);

  const playSound = (switchItem: Switch) => {
    const audio = audioMap[switchItem.id];
    if (!audio) return;
    audio.currentTime = 0;
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
                theme={
                  keyboardThemes.find((t) => t.name === keyboardTheme) ||
                  keyboardThemes[0]
                }
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
      <div className="absolute top-2 right-2 flex gap-2">
        {keyboardThemes.map((theme) => (
          <button
            key={theme.name}
            onClick={() => handleKeyboardThemeChange(theme.name)}
            className={`w-4 h-4 rounded-full border border-neutral-500 ${
              keyboardTheme === theme.name ? 'bg-neutral-300' : ''
            }`}
            style={{ backgroundColor: theme.mainColor }}
          ></button>
        ))}
      </div>
    </main>
  );
}
