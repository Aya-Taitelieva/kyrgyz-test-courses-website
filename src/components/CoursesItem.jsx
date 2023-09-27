import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { yellow } from "@mui/material/colors";

const colorBtn = yellow[700];

export default function CoursesItem() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="180"
          image="https://koketka.kg/wp-content/uploads/2018/12/IMG-20181205-WA0008.jpg"
          alt="courses"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Кыргызский язык
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          style={{
            color: colorBtn,
          }}>
          Подробнее о курсе
        </Button>
      </CardActions>
    </Card>
  );
}
