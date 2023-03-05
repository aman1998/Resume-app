import Template1 from 'public/images/template-1.png';
import Template2 from 'public/images/template-2.png';
import Template3 from 'public/images/template-3.png';
import Template4 from 'public/images/template-4.png';

import { ITemplate } from './types';

export const templates: ITemplate[] = [
  {
    id: '1',
    image: Template1,
    link: '/template/1',
  },
  {
    id: '2',
    image: Template2,
    link: '/template/2',
  },
  {
    id: '3',
    image: Template3,
    link: '/template/3',
  },
  {
    id: '4',
    image: Template4,
    link: '/template/4',
  },
];
