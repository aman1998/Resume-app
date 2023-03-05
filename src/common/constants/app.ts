export const sitename = 'Resumenator';

export interface ILinks {
  id: number;
  title: string;
  link: string;
}

export const links: ILinks[] = [
  {
    id: 1,
    title: 'Личная информация',
    link: '/profile/personal',
  },
  {
    id: 2,
    title: 'Специальность',
    link: '/profile/speciality',
  },
  {
    id: 3,
    title: 'Опыт работы',
    link: '/profile/experience',
  },
  {
    id: 4,
    title: 'Образование',
    link: '/profile/education',
  },
  {
    id: 5,
    title: 'Контакты',
    link: '/profile/contacts',
  },
];

export const templatesLinks: ILinks[] = [
  {
    id: 1,
    title: 'Шаблон 1',
    link: '/template/1',
  },
  {
    id: 2,
    title: 'Шаблон 2',
    link: '/template/2',
  },
  {
    id: 3,
    title: 'Шаблон 3',
    link: '/template/3',
  },
  {
    id: 4,
    title: 'Шаблон 4',
    link: '/template/4',
  },
];

export const privatePages = [
  '/profile/personal',
  '/profile/speciality',
  '/profile/experience',
  '/profile/education',
  '/profile/contacts',
  '/template/1',
  '/template/2',
  '/template/3',
  '/template/4',
];
