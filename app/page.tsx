'use client';
import useSound from 'use-sound';
import Button from './components/Button';

export default function Home() {
  const [playFlurples] = useSound('/flurples.mp3', {
    volume: 0.5,
  });
  const [playCreams] = useSound('/creams.mp3', {
    volume: 0.5,
  });
  const [cystalPurple] = useSound('/crystalpurple.mp3', {
    volume: 0.5,
  });
  const [japaneseBlack] = useSound('/japaneseblack.mp3', {
    volume: 0.5,
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-24">
      <p className="absolute top-4 left-4 font-mono">clackers</p>
      <div className="flex gap-4 items-center justify-center">
        <Button name="Flurple" onClick={playFlurples} />
        <Button name="Creams" onClick={playCreams} />
        <Button name="Crystal Purple" onClick={cystalPurple} />
        <Button name="Japanese Black" onClick={japaneseBlack} />
      </div>
    </div>
  );
}
