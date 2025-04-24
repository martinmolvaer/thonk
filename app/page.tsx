'use client';
import Button from './components/Button';
import Link from 'next/link';
import Nav from './components/Nav';
import Keyboard from './components/Keyboard';
import { motion } from 'framer-motion';

const switches = [
  {
    id: 1,
    name: 'Cardboard',
    color: '#AD8762',
    sound: '/cardboard.mp3',
    brand: 'Flurples',
  },
  {
    id: 2,
    name: 'Cream',
    color: '#FFFFFD',
    sound: '/creams.mp3',
    brand: 'NovelKeys',
  },
  {
    id: 3,
    name: 'Crystal Purple',
    color: '#EB8BF9',
    sound: '/crystalpurple.mp3',
    brand: 'Everglide',
  },
  {
    id: 4,
    name: 'Japanese Black',
    color: '#000',
    sound: '/japaneseblack.mp3',
    brand: 'Cerry MX',
  },
  {
    id: 5,
    name: 'Milky Yellow',
    color: '#FFFFC5',
    sound: '/milkyyellow.mp3',
    brand: 'Gateron',
  },
  {
    id: 6,
    name: 'Oreo',
    color: '#8B4513',
    sound: '/oreo.mp3',
    brand: 'Everglide',
  },
  {
    id: 7,
    name: 'Holy Pandas',
    color: '#8B4513',
    sound: '/holypandas.mp3',
    brand: 'Invyr',
  },
  {
    id: 8,
    name: 'Baby Kangaroo 2.0',
    color: '#B3D6BB',
    sound: '/babykangaroo2.mp3',
    brand: 'Gateron',
  },
];

export default function Home() {
  const playSound = (sound: string) => {
    const audio = new Audio(sound);
    audio.volume = 0.25;
    audio.play();
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
            className="grid grid-cols-4 gap-4"
          >
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
                  onClick={() => playSound(switchItem.sound)}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* {switches.map((switchItem) => (
            <Button
              key={switchItem.id}
              id={switchItem.id}
              name={switchItem.name}
              color={switchItem.color}
              keyToPress={`#${switchItem.id}`}
              onClick={() => playSound(switchItem.sound)}
            />
          ))} */}
        </Keyboard>
      </motion.div>
      <Link
        target="_blank"
        rel="non-refferer"
        href={'http://molvaer.no'}
        className="absolute bottom-2 right-2 font-mono uppercase font-xs font-semibold"
      >
        Made by Mart
      </Link>
    </main>
  );
}
