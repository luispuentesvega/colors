import { render, screen } from '@testing-library/react';
import ColorSwatch from './ColorSwatch';
import { act } from "react-dom/test-utils";
import renderer from 'react-test-renderer';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([{ type: 'rgb' }]),
  }),
) as jest.Mock;

describe('ColorSwatch', () => {
  it('should render Color Swatch title', () => {
    const { container } = render(<ColorSwatch />);

    expect(container).toMatchSnapshot();
  });
});
