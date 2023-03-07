import Image1 from 'src/common/images/icon-1.png';
import Image2 from 'src/common/images/icon-2.png';
import Image3 from 'src/common/images/icon-3.png';
import Image4 from 'src/common/images/icon-4.png';

import { ISteps } from './types';

export const steps: ISteps[] = [
  {
    id: '1',
    text: '1. Зарегистрируйтесь',
    icon: Image1,
  },
  {
    id: '2',
    text: '2. Заполните резюме',
    icon: Image2,
  },
  {
    id: '3',
    text: '3. Выберите шаблон',
    icon: Image3,
  },
  {
    id: '4',
    text: '4. Скачайте резюме',
    icon: Image4,
  },
];
