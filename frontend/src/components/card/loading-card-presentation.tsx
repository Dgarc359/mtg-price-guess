import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

export const LoadingCard = () => {
    return (<>
        <Stack spacing={1}>
            <Skeleton variant="rectangular" width={300} height={300}></Skeleton>
        </Stack>
    </>)
}