import React from "react";
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

type CardProps = {
  id: number,
  image: string,
  name: string,
  species: string,
  status: string,
}

export const CardComponent: React.FC<CardProps> = ({ id, image, name, species, status }) => {

  let navigate = useNavigate();

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
          Learn More...{" "}
        </Button>
      </CardActions>
    </Card>
  );
};
