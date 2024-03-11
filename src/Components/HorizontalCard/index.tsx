
import { FC } from "react"
import { useAppDispatch } from "../../redux/hooks"
import { removeFromFavs } from "../../redux/slices/favsSlice"
import { Card, CardActions, CardContent, CardMedia, Divider, Grid, IconButton, Typography } from "@mui/material"
import { CloseRounded } from "@mui/icons-material"

interface CardHorizontalComponentProps {
  id: string | number
  image: string
  name: string
  info: string[]
}

export const HorizontalCardComponent: FC<CardHorizontalComponentProps> = ({
  id,
  image,
  name,
  info
}) => {
  const dispatch = useAppDispatch()

  const handleRemoveFromFavs = () => {
    dispatch(removeFromFavs({ id }))
  }

  return (
    <Card sx={{ display: 'flex', my: 2 }}>
      <CardMedia
        component='img'
        sx={{ width: 151 }}
        image={image}
        alt={name}
      />
      <Grid container sx={{ mx: 1 }}>
        <Grid item xs={9}>
          <CardContent>
            <Typography variant="h4">{name}</Typography>
            <Divider />
            <Typography variant="h6">{info}</Typography>
          </CardContent>
        </Grid>
        <Grid item xs={2}>
          <CardActions>
            <IconButton onClick={handleRemoveFromFavs}>
              <CloseRounded />
            </IconButton>
          </CardActions>
        </Grid>
      </Grid>
    </Card>
  )
}