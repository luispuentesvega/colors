import { ClassType, colorMap, Keys, SingleKeys } from './types.d';

// Factory
export class ColorFactory {
  static getColorInstance<K extends Keys>(k: SingleKeys<K>, args?: any): ClassType<K> {
    return new colorMap[k](args);
  }
}
