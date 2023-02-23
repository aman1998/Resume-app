import { year } from '@utils/date';
import range from '@utils/range';

const getDateOptions = (dates: string[] | number[]) =>
  dates.map((item) => ({ label: item, value: item }));

export const months = [
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь',
];
export const monthSelectOptions = getDateOptions(months);

export const days = range(31, 1);
export const daysSelectOptions = getDateOptions(days);

export const years = range(80, year).reverse();
export const yearsSelectOptions = getDateOptions(years);

export const uniqueIDWitdhDate = Date.now().toString(36) + Math.random().toString(36).substring(2);
