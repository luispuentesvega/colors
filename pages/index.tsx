import type { NextPage } from 'next';
import { useState, useEffect } from 'react';

import Swatch from '@uiw/react-color-swatch';

import { ColorService } from '../src/utils/ColorService';
import { hsvaToHex, getContrastingColor, } from '@uiw/color-convert';

const SERVER_HOST = 'http://localhost:3000/api';

function Point(props: { color?: string; checked?: boolean; }) {
  if (!props.checked) return null;
  return (
    <div
      style={{
        height: 5,
        width: 5,
        borderRadius: '50%',
        backgroundColor: getContrastingColor(props.color!),
      }}
    />
  );
}


const Home: NextPage = () => {
  const [colors, setColors] = useState([]);

  useEffect(() => {
    fetchColors();
  }, []);

  const fetchColors = async (): Promise<void> => {
    try {
      const response = await fetch(`${SERVER_HOST}/color`);
      const result = await response.json();

      const mappedColors = result.map((color: any) => new ColorService().getColorAsString(color.type, { ...color }));
      console.log('RES:', mappedColors);
      setColors(mappedColors);
    } catch (e) {
      console.log('ERROR', e);
    }
  };

  const handleChangeColors = () => {
    fetchColors();
  };

  return (
    <div className="flex flex-row min-h-screen justify-center items-center bg-slate-100">
      <div className="bg-orange-300 px-8 py-8 rounded-lg">
        <h1 className="text-3xl font-bold text-violet-500 mb-10">Color Swatch</h1>
        <Swatch colors={colors}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }} className="mb-2 text-center" />
        <button onClick={handleChangeColors} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-hidden focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full mt-10">Refresh</button>
      </div>
    </div>
  );
};

export default Home;
