import { FC } from 'react';
import Skeleton from '@mui/material/Skeleton';

const UserSpecialitySkeleton: FC = () => (
  <div>
    <Skeleton variant="rectangular" width="100%" height={56} style={{ marginBottom: 8 }} />
    <Skeleton variant="rectangular" width="30%" height={56} style={{ marginBottom: 8 }} />
    <Skeleton variant="rectangular" width="30%" height={56} style={{ marginBottom: 8 }} />
    <Skeleton variant="rectangular" width="20%" height={25} style={{ marginBottom: 8 }} />
    <Skeleton variant="rectangular" width="20%" height={25} style={{ marginBottom: 8 }} />
    <Skeleton variant="rectangular" width={120} height={36} />
  </div>
);

export default UserSpecialitySkeleton;
