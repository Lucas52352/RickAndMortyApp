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

type CardProps = {
  image: string,
  name: string,
  species: string,
  status: string,
}

export const CardComponent: React.FC<CardProps> = ({ image, name, species, status }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="194"
        image={image}
        alt="rick"
      />

      <CardContent>
        <Typography variant="h4" sx={{mb: .5}}>{name}</Typography>
          <Divider />
          <Typography sx={{mt: .5}}>Specie: {species}</Typography>
          <Typography sx={{mt: .5}}>Status: {status}</Typography>
      </CardContent>

      <CardActions>
        <Button variant="contained" size="small" fullWidth>
          {" "}
          Learn More...{" "}
        </Button>
      </CardActions>
    </Card>
  );
};
