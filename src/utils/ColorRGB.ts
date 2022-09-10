import _random from 'lodash/random';

import { ColorTypes, RGB } from '../../types.d';
import { IColorSwatch } from './interface';

export class ColorRGB implements IColorSwatch {
  type: ColorTypes = ColorTypes.rgb;
  red: number;
  green: number;
  blue: number;

  constructor (data?: ColorRGB) {
    this.red = data ? data.red : _random(0, 255);
    this.green = data ? data.green : _random(0, 255);
    this.blue = data ? data.blue : _random(0, 255);;
  }

  getColorSwatch(): RGB {
    return { ...this, type: ColorTypes.rgb };
  }

  getColorAsString(): string {
    return `rgb(${this.red}, ${this.green}, ${this.blue})`;
  }
}
