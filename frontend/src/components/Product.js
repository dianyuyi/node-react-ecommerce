import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import useStyles from "../styles/product";

const Product = ({ product }) => {
  const classes = useStyles();
  const { _id, name, description, imgUrl, price, rating } = product;
  return (
    <Card className={classes.root}>
      <CardMedia
        component={Link}
        to={`/product/${_id}`}
        className={classes.media}
        image={imgUrl}
        title={name}
      ></CardMedia>
      <CardContent>
        <div className={classes.cardContent}>
          <Typography
            variant="h5"
            color="textPrimary"
            gutterBottom
            className={classes.productName}
            component={Link}
            to={`/product/${_id}`}
          >
            {name}
          </Typography>
          <Typography variant="h5">$ {price}</Typography>
        </div>
        <Typography
          dangerouslySetInnerHTML={{ __html: description }}
          variant="body2"
          color="textSecondary"
        ></Typography>
        <Typography variant="h6">Rating {rating}</Typography>
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton aria-label="Add to Cart">
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;
