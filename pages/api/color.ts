import type { NextApiRequest, NextApiResponse } from 'next';
import _map from 'lodash/map';
import _range from 'lodash/range';

import { ColorService } from '../../src/utils/ColorService';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const numberOfColors = 5;
  const colors = _range(0, numberOfColors).map(num => new ColorService().getSwatchColor('rgb'));

  res.status(200).json(colors);
}
