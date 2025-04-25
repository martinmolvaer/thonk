'use client';
import Button from './components/Button';
import Link from 'next/link';
import Nav from './components/Nav';
import Keyboard from './components/Keyboard';
import { motion } from 'framer-motion';
import { useState } from 'react';
import InfoDisplay from './components/InfoDisplay';

const switches = [
  {
    id: 1,
    name: 'Cardboard',
    color: '#AD8762',
    sound: '/cardboard.mp3',
    brand: 'Flurples',
    info: 'A keyboard made from double sided tape on a piece of cardboard. Cherry browns w/ boba u4t stems',
    link: 'https://www.youtube.com/watch?v=sVInBOLSqoM',
  },
  {
    id: 2,
    name: 'Cream',
    color: '#FFFFFD',
    sound: '/creams.mp3',
    brand: 'NovelKeys',
    info: 'NovelKeys Cream switches are smooth linear switches with a full POM housing and self-lubricating stem. They offer a buttery feel and deep sound, even stock, with a 55g actuation and 70g bottom-out force.',
    link: 'https://novelkeys.xyz/products/novelkeys-cream-switches',
  },
  {
    id: 3,
    name: 'Crystal Purple',
    color: '#EB8BF9',
    sound: '/crystalpurple.mp3',
    brand: 'Everglide',
    info: 'Everglide Crystal Violet switches are tactile with a smooth 45g start and 55g bump, offering a soft, cushioned feel and a gentle, quiet sound.',
    link: 'https://www.everglide.com/products/everglide-crystal-purple-switches',
  },
  {
    id: 4,
    name: 'Japanese Black',
    color: '#000',
    sound: '/japaneseblack.mp3',
    brand: 'Cerry MX',
    info: 'The Japanese Black switch is a linear switch that is known for its smoothness and consistency. ',
    link: 'https://www.cherry.de/en-gb/product/mx2a-black',
  },
  {
    id: 5,
    name: 'Milky Yellow',
    color: '#FFFFC5',
    sound: '/milkyyellow.mp3',
    brand: 'Gateron',
    info: 'The Gateron Milky Pro (KS-3 Pro) switches are popular linear switches known for their smooth feel, reduced stem wobble, and improved sound, thanks to retooled molds and a milky housing.',
    link: 'https://www.gateron.com/products/gateron-milky-yellow-linear-switch-set?VariantsId=10684',
  },
  {
    id: 6,
    name: 'Oreo',
    color: '#8B4513',
    sound: '/oreo.mp3',
    brand: 'Everglide',
    info: 'With a crisp and responsive tactile bump at the top and a cushy feeling when bottoming out, the Everglide Oreo mechanical switches are a joy to type on.',
    link: 'https://www.everglide.com/products/everglide-oreo-switches',
  },
  {
    id: 7,
    name: 'Holy Pandas',
    color: '#8B4513',
    sound: '/holypandas.mp3',
    brand: 'Invyr',
    info: 'Holy Panda switches are known for their distinct sound and satisfying tactile feel — a sharp, snappy bump with a deep, “thocky” sound. The combination of Halo stems and Invyr Panda housings creates a responsive, premium typing experience that’s both punchy and smooth.',
    link: 'https://www.invyr.com/products/holy-panda-switches',
  },
  {
    id: 8,
    name: 'Baby Kangaroo 2.0',
    color: '#B3D6BB',
    sound: '/babykangaroo2.mp3',
    brand: 'Gateron',
    info: 'The Baby Kangaroo 2.0 is a tactile switch with upgraded pins and light guide, keeping its clear top, milky nylon base, and bright green POM stem for a crisp, satisfying feel.',
    link: 'https://www.gateron.com/products/gateron-baby-kangaroo-20-tactile-switch-set?VariantsId=10684',
  },
];

export default function Home() {
  const [infoDisplay, setInfoDisplay] = useState(
    'Click a switch to hear the sound!'
  );
  const [link, setLink] = useState('');
  const playSound = (sound: string, info: string, link: string) => {
    const audio = new Audio(sound);
    audio.volume = 0.25;
    audio.play();
    setInfoDisplay(info);
    setLink(link);
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
                onClick={() =>
                  playSound(
                    switchItem.sound,
                    switchItem.info ?? '',
                    switchItem.link ?? ''
                  )
                }
              />
            </motion.div>
          ))}
        </Keyboard>
        {/* More info  */}
      </motion.div>
      <InfoDisplay infoDisplay={infoDisplay} link={link} />
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
