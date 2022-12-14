import { ColorHSL } from './ColorHSL';
import { ColorRGB } from './ColorRGB';

export const colorMap = {
  rgb: ColorRGB,
  hsl: ColorHSL,
};

export type ColorMap = typeof colorMap;
export type Keys = keyof ColorMap;
export type Tuples<T> = T extends Keys ? [T, InstanceType<ColorMap[T]>] : never;
export type SingleKeys<K> = [K] extends (K extends Keys ? [K] : never) ? K : never;
export type ClassType<A extends Keys> = Extract<Tuples<Keys>, [A, any]>[1];
