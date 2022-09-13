import { ColorFactory } from './ColorFactory';
import { ColorHSL } from './ColorHSL';
import { ColorRGB } from './ColorRGB';

describe('# ColorFactory', () => {
  it('should get instance of RGB type when rgb is sent as parameter', () => {
    const instance = ColorFactory.getColorInstance('rgb');
    expect(instance).toBeInstanceOf(ColorRGB);
  });

  it('should get instance of HSL type when hsl is sent as parameter', () => {
    const instance = ColorFactory.getColorInstance('hsl');
    expect(instance).toBeInstanceOf(ColorHSL);
  });
});
