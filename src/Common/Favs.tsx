import React from 'react'
import { Box, Divider, Drawer, IconButton, Stack, Typography } from '@mui/material';
import { useAppSelector } from '../redux/hooks'
import { CloseRounded } from '@mui/icons-material';
import { HorizontalCardComponent } from '../Components/HorizontalCard';

interface FavsComponentProps {
  open: boolean;
  handleStateViewDrawer: () => void;
}

export const FavsComponent: React.FC<FavsComponentProps> = ({
  open,
  handleStateViewDrawer
}) => {
  const items = useAppSelector((state) => state.FavsReducer)

  return (
    <Drawer SlideProps={{ style: { width: '30%' } }} anchor={'right'} open={open}>
      <Box sx={{ width: '100%', p: 2 }}>
        <Stack
          direction='row'
          justifyContent='space-between'
          alignItems='center'
        >
          <Typography variant='h4' sx={{ mb: 1.4 }}>Favorites</Typography>
          <Divider sx={{ my: 1.5 }} />
          <IconButton color='primary' onClick={handleStateViewDrawer}>
            <CloseRounded />
          </IconButton>
        </Stack>
        <Divider sx={{ my: 1.5 }} />
        {
          items.length > 0
            ? items.map(({ id, image, name, info }) => (
              <HorizontalCardComponent
                key={id}
                id={id}
                image={image}
                name={name}
                info={info}
              />
            ))
            : 'Nothing over here, click 🤍 to add favorites'
        }
      </Box>
    </Drawer>
  )
}