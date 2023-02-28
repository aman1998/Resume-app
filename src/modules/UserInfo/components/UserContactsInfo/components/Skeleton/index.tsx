import Skeleton from '@mui/material/Skeleton';
import { FC } from 'react';

const UserContactsSceleton: FC = () => (
  <div>
    <Skeleton variant="rectangular" width="100%" height={50} style={{ marginBottom: 8 }} />
    <Skeleton variant="rectangular" width="100%" height={50} style={{ marginBottom: 8 }} />
    <Skeleton variant="rectangular" width="100%" height={50} style={{ marginBottom: 8 }} />
    <Skeleton variant="rectangular" width="100%" height={50} style={{ marginBottom: 8 }} />
    <Skeleton variant="rectangular" width={120} height={36} />
  </div>
);

export default UserContactsSceleton;
