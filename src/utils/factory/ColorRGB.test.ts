import { ColorRGB } from './ColorRGB';

describe('# ColorRGB', () => {
  it('should get color object as expected', () => {
    const colorRGB = new ColorRGB({ red: 1, green: 2, blue: 3 });
    const expectedResult = { type: 'rgb', red: 1, green: 2, blue: 3 };
    expect(colorRGB.getColorSwatch()).toMatchObject(expectedResult);
  });

  it('should get color as string with the values mapped', () => {
    const colorRGB = new ColorRGB({ red: 1, green: 2, blue: 3 });
    expect(colorRGB.getColorAsString()).toBe('rgb(1, 2, 3)');
  });
});
