import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { Favorite } from "@mui/icons-material";
import { addToFavs } from "../../redux/slices/favsSlice";


type CardProps = {
  id: number,
  image: string,
  name: string,
  species: string,
  status: string,
}

export const CardComponent: React.FC<CardProps> = ({ id, image, name, species, status }) => {

  let navigate = useNavigate();
  const dispatch = useAppDispatch()
  const [disabledButton, setDisabledButton] = useState<boolean>(false)

  const itemExists = useAppSelector((state => state.FavsReducer))


  useEffect(() => {
    setDisabledButton(itemExists.some(item => item.id === id))
  }, [itemExists, id])

  const handleAddToFavs = () => {
    dispatch(addToFavs({
      id,
      name,
      image,
      info: [species, status]
    }))
  }


  return (
    <Card>
      <CardMedia
        component="img"
        height="230"
        image={image}
        alt={name}
      />

      <CardContent>
        <Typography variant="h6" sx={{ mb: .5 }}>{name}</Typography>
        <Divider />
        <Typography sx={{ mt: .5 }}>Specie: {species}</Typography>
        <Typography sx={{ mt: .5 }}>Status: {status}</Typography>
      </CardContent>

      <CardActions>
        <Button variant="contained" size="small" fullWidth onClick={() => navigate(`character/${id}`)}>
          {" "}
          More...{" "}
        </Button>
        <Button disabled={disabledButton} variant="contained" size="small" fullWidth onClick={handleAddToFavs}>
          <Favorite />
        </Button>
      </CardActions>
    </Card>
  );
};
