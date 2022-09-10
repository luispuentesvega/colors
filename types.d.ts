export enum ColorTypes {
  rgb = 'rgb',
  hsl = 'hsl'
}

export type RGB = {
  type: ColorTypes.rgb;
  red: number;
  green: number;
  blue: number;
};

export type HSL = {
  type: ColorTypes.hsl;
  hue: number;
  saturation: string;
  lightness: string;
};

export type Color = RGB | HSL;
