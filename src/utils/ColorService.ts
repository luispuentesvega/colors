import { ColorFactory } from './ColorFactory';
import { Keys, SingleKeys } from './types';

export class ColorService {
  getSwatchColor<K extends Keys>(type: SingleKeys<K>) {
    return ColorFactory.getColorInstance(type).getColorSwatch();
  }

  getColorAsString<K extends Keys>(type: SingleKeys<K>, args?: any) {
    return ColorFactory.getColorInstance(type, args).getColorAsString();
  }
}
