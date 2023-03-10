import { FC } from 'react';
import { useSelector } from 'react-redux';

import { specialityInfoSelector } from '@modules/UserInfo/store/selectors';

import { getSalaryInfo } from '@utils/resumeUtils';

import TemplateSimple from '../TemplateSimple';

const TemplateSalary: FC = () => {
  const info = useSelector(specialityInfoSelector);

  if (!info?.salary) return <></>;

  return <TemplateSimple title="Зарплата" text={getSalaryInfo(info.salary, info.salaryСurrency)} />;
};

export default TemplateSalary;
