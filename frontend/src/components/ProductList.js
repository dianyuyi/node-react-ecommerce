import React, { useEffect } from "react";
import { Grid } from "@material-ui/core";
import { Product } from "./index";
import useStyles from "../styles/productList";
// import { products } from "../data";
import { useFetchData } from "../hook/useFetchData";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../actions/productActions";

const ProductList = () => {
  const classes = useStyles();

  // const { products } = useFetchData();
  const productList = useSelector((state) => state.productList);

  const { products, loading, error } = productList;
  const dispatch = useDispatch();

  // console.log(loading);

  useEffect(() => {
    dispatch(listProducts());
    return () => {};
  }, []);

  return (
    <>
      {loading ? (
        <div>Loading</div>
      ) : error ? (
        { error }
      ) : (
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Grid container justify="center" spacing={4}>
            {products.map((product, index) => {
              return (
                <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
                  <Product key={product.id} product={product} />
                </Grid>
              );
            })}
          </Grid>
        </main>
      )}
    </>
  );
};

export default ProductList;
