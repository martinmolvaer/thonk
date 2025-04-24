'use client';
import Button from './components/Button';
import Link from 'next/link';
import Nav from './components/Nav';
import Keyboard from './components/Keyboard';

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
    <main className="flex flex-col items-center justify-center min-h-screen bg-[#d0d0d0] p-12 sm:p-24">
      <Nav />
      <Keyboard>
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
      </Keyboard>
      <Link
        target="_blank"
        rel="non-refferer"
        href={'http://molvaer.no'}
        className="absolute bottom-2 right-2 font-mono uppercase font-sm font-bold"
      >
        Made by Mart
      </Link>
    </main>
  );
}
