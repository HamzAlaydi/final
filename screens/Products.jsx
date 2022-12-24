import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import axios from "axios";
import ProductsDetails from "../component/ProductDetails";

export default function Products(props) {
  const [products, setProducts] = useState([]);
  const fetchData = async () => {
    const data = await axios.get("https://fakestoreapi.com/products");
    setProducts(data.data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  if (products.length == 0) return <>Loading </>;
  return (
    <FlatList
      data={products}
      keyExtractor={(item, index) => item.id + index}
      numColumns={2}
      renderItem={(itemProps) => (
        <ProductsDetails {...itemProps} navigation={props.navigation} />
      )}
    />
  );
}
