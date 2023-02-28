import { FC } from 'react';
import Skeleton from '@mui/material/Skeleton';

const UserExperienceSkeleton: FC = () => (
  <div>
    <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
      <Skeleton variant="rectangular" width={100} height={20} style={{ marginBottom: 2 }} />
    </div>
    <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
      <Skeleton variant="rectangular" width={80} height={10} style={{ marginBottom: 8 }} />
    </div>

    <Skeleton variant="rectangular" width={150} height={15} style={{ marginBottom: 2 }} />
    <Skeleton variant="rectangular" width={150} height={15} style={{ marginBottom: 2 }} />
    <Skeleton variant="rectangular" width={150} height={15} style={{ marginBottom: 16 }} />

    <Skeleton variant="rectangular" width="100%" height={60} style={{ marginBottom: 8 }} />
    <Skeleton variant="rectangular" width={120} height={36} />
  </div>
);

export default UserExperienceSkeleton;
