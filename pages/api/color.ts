import type { NextApiRequest, NextApiResponse } from 'next';
import _map from 'lodash/map';
import _range from 'lodash/range';
import _sample from 'lodash/sample';

import { ColorService } from '../../src/utils/ColorService';
import { ColorTypes } from '../../types.d';

const numberOfColors = 5;
const colorTypes = Object.values(ColorTypes);

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const colors = _range(0, numberOfColors).map(num => {
    const sample = _sample(colorTypes)! as never;
    console.log('SAmple:', sample);
    return new ColorService().getSwatchColor(sample);
  });

  res.status(200).json(colors);
}
