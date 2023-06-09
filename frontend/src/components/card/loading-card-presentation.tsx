import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { cn } from '../../lib/utils';
import { Paper } from '@mui/material';

export const LoadingCard = () => {
    return (
    <div className={cn([
        "p-4 m-4"
    ])}>
      <Paper
        sx={{
          width: {
            sm: 300,
            md: 400,
          },
          height: {
            sm: 400,
            md: 500,
          },
          p: 2
        }}
      >
        <Stack 
        justifyContent="center"
        alignContent={"center"}
        spacing={2}>
            <Skeleton 
              variant='rounded'
              sx={{
                width: {
                  sm: 250,
                },
                // alignItems: "center",
                // justifyContent: "center",
                margin: "auto",
                height: {
                  sm: 350,
                },
              }}
            />
            <Skeleton
              variant='rounded'
              sx={{
                height: {
                  sm: 50,
                },
                width: {
                  sm: 370
                },
                justifyContent: "around"
              }}
            />
            <Skeleton 
              variant='rounded'
            />
        </Stack>
      </Paper>
    </div>)
}