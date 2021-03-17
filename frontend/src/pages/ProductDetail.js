import React from "react";
import { Link, useParams } from "react-router-dom";
import useStyles from "../styles/productDetail";
import { products } from "../data";
// import axios from "axios";

const ProductDetail = () => {
  const classes = useStyles();
  const { id } = useParams();
  const product = products.find((item) => item.id == id);
  // const { id, name, description, imgUrl, price, rating } = product;
  console.log(product);

  return (
    <>
      <div className={classes.backResult}>
        <Link to="/">Back to result</Link>
      </div>
      <div className={classes.details}>
        <div className={classes.detailsImage}>
          <img src={product.imgUrl} alt="product"></img>
        </div>
        <div className={classes.detailsInfo}>
          <ul>
            <li>
              <h4>{product.name}</h4>
            </li>
            <li>{product.rating}</li>
            <li>
              Price: <b>${product.price}</b>
            </li>
            <li>
              Description:
              <div>{product.description}</div>
            </li>
          </ul>
        </div>
        <div className={classes.detailsAction}>
          <ul>
            <li>Price: {product.price}</li>
            <li>Status: In Stock</li>
            <li>
              Qty:
              <select>
                <option value="">1</option>
                <option value="">2</option>
              </select>
            </li>
          </ul>
          <button>Add to cart</button>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
