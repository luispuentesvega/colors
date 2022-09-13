import { ColorHSL } from './ColorHSL';

describe('# ColorHSL', () => {
  it('should get color object as expected', () => {
    const colorHSL = new ColorHSL({ hue: 1, saturation: 2, lightness: 3 });
    const expectedResult = { type: 'hsl', hue: 1, saturation: 2, lightness: 3 };
    expect(colorHSL.getColorSwatch()).toMatchObject(expectedResult);
  });

  it('should get color as string with the values mapped', () => {
    const colorHSL = new ColorHSL({ hue: 1, saturation: 2, lightness: 3 });
    expect(colorHSL.getColorAsString()).toBe('hsl(1, 2, 3)');
  });
});
