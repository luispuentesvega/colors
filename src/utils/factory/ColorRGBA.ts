import _random from 'lodash/random';

import { ColorTypes, RGBA } from '../../../types.d';
import { IColorSwatch } from './ColorInterface';

export class ColorRGBA implements IColorSwatch {
  type: ColorTypes = ColorTypes.rgba;
  red: number;
  green: number;
  blue: number;
  alpha: number;

  constructor (data?: ColorRGBA) {
    this.red = data?.red || _random(0, 255);
    this.green = data?.green || _random(0, 255);
    this.blue = data?.blue || _random(0, 255);
    this.alpha = data?.alpha || _random(0, 255);
  }

  getColorSwatch(): RGBA {
    return { ...this, type: ColorTypes.rgba };
  }

  getColorAsString(): string {
    return `rgba(${this.red}, ${this.green}, ${this.blue}. ${this.alpha})`;
  }
}
