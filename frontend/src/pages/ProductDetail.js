import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import useStyles from "../styles/productDetail";
import { detailsProduct } from "../actions/productActions";
// import { products } from "../data";

const ProductDetail = (props) => {
  const classes = useStyles();
  // const { id } = useParams();
  // const product = products.find((item) => item.id == id);
  // const { id, name, description, imgUrl, price, rating } = product;
  // console.log(product);

  const [qty, setQty] = useState(1);

  const productDetails = useSelector((state) => state.productDetails);
  const { product, loading, error } = productDetails;
  const dispatch = useDispatch();

  // console.log(productDetails);
  useEffect(() => {
    dispatch(detailsProduct(props.match.params.id));
    return () => {};
  }, []);

  const handleAddToCart = () => {
    props.history.push(`/cart/${props.match.params.id}?qty=${qty}`);
  };

  return (
    <>
      <div className={classes.backResult}>
        <Link to="/">Back to result</Link>
      </div>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
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
              {/* <li>Price: {product.price}</li> */}
              <li>
                Status: {product.countInStock > 0 ? "In Stock" : "Out Stock."}
              </li>
              {product.countInStock > 0 && (
                <li>
                  Qty:
                  <select value={qty} onChange={(e) => setQty(e.target.value)}>
                    {[...Array(product.countInStock).keys()].map((x) => {
                      return (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      );
                    })}
                    {/* <option>1</option>
                  <option>2</option>
                  <option>3</option> */}
                  </select>
                </li>
              )}
            </ul>
            {product.countInStock > 0 && (
              <button onClick={handleAddToCart}>Add to cart</button>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetail;
