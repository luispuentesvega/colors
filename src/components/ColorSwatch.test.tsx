import { render, screen } from '@testing-library/react';
import ColorSwatch from './ColorSwatch';
import { act } from "react-dom/test-utils";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([{ type: 'rgb' }]),
  }),
) as jest.Mock;

describe('ColorSwatch', () => {
  it('should render Color Swatch title', () => {
    const { container } = render(<ColorSwatch />);

    const heading = screen.getByRole('heading', {
      name: /Color Swatch/i,
    });
    expect(heading).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
