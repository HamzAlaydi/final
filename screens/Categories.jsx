import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import axios from "axios";
import Category from "../component/Category";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  const fetchData = async () => {
    const data = await axios.get(
      "https://fakestoreapi.com/products/categories"
    );
    setCategories(data.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (categories.length == 0) return <>Loading...</>;
  return (
    <FlatList
      data={categories}
      keyExtractor={(index) => index}
      numColumns={2}
      renderItem={Category}
    />
  );
};
export default Categories;
