export enum ColorTypes {
  rgb = 'rgb',
  hsl = 'hsl',
  rgba = 'rgba'
}

export type RGB = {
  type: ColorTypes.rgb;
  red: number;
  green: number;
  blue: number;
};


export type RGBA = {
  type: ColorTypes.rgba;
  red: number;
  green: number;
  blue: number;
  alpha: number;
};

export type HSL = {
  type: ColorTypes.hsl;
  hue: number;
  saturation: string;
  lightness: string;
};

export type Color = RGB | HSL | RGBA;
