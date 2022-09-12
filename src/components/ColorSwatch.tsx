import { useState, useEffect } from 'react';

import Swatch from '@uiw/react-color-swatch';

import { ColorService } from '../utils/factory/ColorService';

const ColorSwatch: React.FC = () => {
  const [colors, setColors] = useState([]);

  useEffect(() => {
    fetchColors();
  }, []);

  const fetchColors = async (): Promise<void> => {
    try {
      const response = await fetch(`api/color`);
      const result = await response.json();
      const mappedColors = result.map((color: any) => new ColorService().getColorAsString(color.type, { ...color }));
      setColors(mappedColors);
    } catch (e) {
      console.log('ERROR', e);
    }
  };

  const handleChangeColors = () => {
    fetchColors();
  };

  return (
    <div className="bg-orange-300 px-8 py-8 rounded-lg">
      <h1 className="text-3xl font-bold text-violet-500 mb-10">Color Swatch</h1>
      <Swatch colors={colors}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }} />
      <button onClick={handleChangeColors} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-hidden focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-full mt-10">Refresh</button>
    </div>
  );
};

export default ColorSwatch;
