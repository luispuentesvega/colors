import type { NextPage } from 'next';
import { useState } from 'react';

import Swatch from '@uiw/react-color-swatch';

import styles from '../styles/Home.module.css';
import { ColorService } from '../src/utils/ColorService';

const SERVER_HOST = 'http://localhost:3000/api';

const Home: NextPage = () => {
  const [colors, setColors] = useState([]);

  const mapColors = () => {

  };


  const fetchColors = async (): Promise<void> => {
    try {
      const response = await fetch(`${SERVER_HOST}/color`, {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        },
      });
      const result = await response.json();

      const mappedColors = result.map((color: any) => new ColorService().getColorAsString(color.type, { ...color }));
      console.log('RES:', mappedColors);
      setColors(mappedColors);
    } catch (e) {
      console.log('ERROR', e);
    }
  };

  const handleChangeColors = () => {
    console.log('Onclick');
    fetchColors();
  };

  return (
    <div className={styles.container}>
      <h1>Color Swatch</h1>
      <Swatch colors={colors} />
      <button onClick={handleChangeColors}>Update Colors</button>
    </div>
  );
};

export default Home;
