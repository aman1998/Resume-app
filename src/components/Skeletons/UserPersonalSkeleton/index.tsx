import { FC } from 'react';
import Skeleton from '@mui/material/Skeleton';

const UserPersonalSkeleton: FC = () => (
  <div>
    <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
      <Skeleton variant="circular" width={150} height={150} style={{ marginBottom: 8 }} />
    </div>
    <Skeleton variant="rectangular" width="100%" height={56} style={{ marginBottom: 8 }} />
    <Skeleton variant="rectangular" width="100%" height={56} style={{ marginBottom: 8 }} />
    <Skeleton variant="rectangular" width="100%" height={56} style={{ marginBottom: 8 }} />
    <Skeleton variant="rectangular" width="100%" height={60} style={{ marginBottom: 8 }} />
    <Skeleton variant="rectangular" width="100%" height={150} style={{ marginBottom: 8 }} />
    <Skeleton variant="rectangular" width={120} height={36} />
  </div>
);

export default UserPersonalSkeleton;
