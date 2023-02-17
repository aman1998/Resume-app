import { FC } from 'react';
import { useSelector } from 'react-redux';

import { userInfoSelector } from './store/selectors';

const UserInfo: FC = () => {
  const user = useSelector(userInfoSelector);

  return <section>{user?.email}</section>;
};

export default UserInfo;
