import { View, Text, FlatList } from "react-native";
import React from "react";
import useFetch from "../../hooks/useFetch";
import config from "../../../config";

import DetailCard from "../../components/DetailCard/DetailCard";

const Detail = ({ route }) => {
  const { id } = route.params;

  const { data } = useFetch(`${config.DETAIL_URL}${id}`);

  const renderMeal = ({ item }) => {
    return <DetailCard meal={item} />;
  };

  return <FlatList data={data.meals} renderItem={renderMeal} />;
};

export default Detail;
