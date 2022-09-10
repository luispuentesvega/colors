import type { NextPage } from 'next';
import ColorSwatch from '../src/components/ColorSwatch';

const Home: NextPage = () => {
  return (
    <div className="flex flex-row min-h-screen justify-center items-center bg-slate-100">
      <ColorSwatch />
    </div>
  );
};

export default Home;
