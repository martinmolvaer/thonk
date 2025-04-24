'use client';
import useSound from 'use-sound';
import Button from './components/Button';
import { useEffect } from 'react';
import Link from 'next/link';

const switches = [
  {
    id: 1,
    name: 'Flurples Cardboard',
    color: '#AD8762',
    sound: '/cardboard.mp3',
  },
  {
    id: 2,
    name: 'NK Creams',
    color: '#FFFFFD',
    sound: '/creams.mp3',
  },
  {
    id: 3,
    name: 'Crystal Purple',
    color: '#A7A2E5',
    sound: '/crystalpurple.mp3',
  },
  {
    id: 4,
    name: 'Japanese Black',
    color: '#000',
    sound: '/japaneseblack.mp3',
  },
  {
    id: 5,
    name: 'Milky Yellow',
    color: '#FFFFC5',
    sound: '/milkyyellow.mp3',
  },
];

export default function Home() {
  const playSound = (sound: string) => {
    const audio = new Audio(sound);
    audio.volume = 0.5;
    audio.play();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#d0d0d0] p-12 sm:p-24">
      <p className="absolute top-4 left-4 font-mono">clackers</p>
      <div className="flex gap-1 flex-wrap items-center justify-center p-4 bg-[#999999] rounded-3xl shadow-xl border-10 border-[#F4F7FE]">
        {switches.map((switchItem) => (
          <Button
            key={switchItem.id}
            id={switchItem.id}
            name={switchItem.name}
            color={switchItem.color}
            keyToPress={`#${switchItem.id}`}
            onClick={() => playSound(switchItem.sound)}
          />
        ))}
      </div>
      <Link
        target="_blank"
        rel="non-refferer"
        href={'http://molvaer.no'}
        className="absolute bottom-2 right-2 font-mono uppercase font-sm font-bold"
      >
        Made by Mart
      </Link>
    </div>
  );
}
