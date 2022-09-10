import { ColorFactory } from './ColorFactory';
import { Keys, SingleKeys } from './types';

// Service
export class ColorService {
  getSwatchColor<K extends Keys>(type: SingleKeys<K>) {
    return ColorFactory.getColorInstance(type).getColorSwatch();
  }
}
