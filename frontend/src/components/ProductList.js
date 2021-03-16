import React from "react";
import { Grid } from "@material-ui/core";
import { Product } from "./index";
import useStyles from "../styles/productList";

const products = [
  {
    id: 1,
    name: "Shoes",
    description: "Running shoes.",
    imgUrl:
      "https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    price: "$5",
  },
  {
    id: 2,
    name: "Macbook",
    description: "Apple macbook.",
    imgUrl:
      "https://images.unsplash.com/photo-1503602642458-232111445657?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    price: "$5",
  },
];

const ProductList = () => {
  const classes = useStyles();
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
        {products.map((product) => {
          return (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <Product product={product} />
            </Grid>
          );
        })}
      </Grid>
    </main>
  );
};

export default ProductList;
