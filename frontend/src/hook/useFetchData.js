import { useState, useEffect } from "react";
import axios from "axios";

export const useFetchData = () => {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    const { data } = await axios.get("/api/products");
    console.log(data);
    setProducts(data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return { products };
};
