import _random from 'lodash/random';

import { ColorTypes, HSL } from '../../types.d';
import { IColorSwatch } from './interface';

export class ColorHSL implements IColorSwatch {
  type: ColorTypes = ColorTypes.hsl;
  hue: number;
  saturation: string;
  lightness: string;

  constructor (data?: ColorHSL) {
    this.hue = data ? data.hue : _random(0, 360);
    this.saturation = data ? data.saturation : `${_random(0, 100)}%`;
    this.lightness = data ? data.lightness : `${_random(0, 100)}%`;
  }

  getColorSwatch(): HSL {
    return { ...this, type: ColorTypes.hsl };
  }

  getColorAsString(): string {
    return `hsl(${this.hue}, ${this.saturation}, ${this.lightness})`;
  }
}
