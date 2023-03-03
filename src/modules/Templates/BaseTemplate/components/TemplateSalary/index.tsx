import { FC } from 'react';
import { useSelector } from 'react-redux';

import { specialityInfoSelector } from '@modules/UserInfo/store/selectors';

import { getSalaryType } from '@utils/resumeUtils';

import TemplateSimple from '../TemplateSimple';

const TemplateSalary: FC = () => {
  const info = useSelector(specialityInfoSelector);

  if (!info?.salary) return <></>;

  return (
    <TemplateSimple
      title="Зарплата"
      text={`${String(info.salary)} ${getSalaryType(info.salaryСurrency)}`}
    />
  );
};

export default TemplateSalary;
