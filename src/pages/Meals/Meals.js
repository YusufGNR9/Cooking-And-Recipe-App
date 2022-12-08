import { FlatList, View } from "react-native";
import React from "react";
import useFetch from "../../hooks/useFetch";
import styles from "./Meals.style";
import config from "../../../config";

import MealsCard from "../../components/MealsCard";

const Meals = ({ navigation, route }) => {
  const { categoryName } = route.params;
  const { data } = useFetch(`${config.MEALS_URL}${categoryName}`);

  const handleMealSelect = (id) => {
    navigation.navigate("DetailScreen", { id });
  };

  const renderMeals = ({ item }) => {
    return (
      <MealsCard meals={item} onSelect={() => handleMealSelect(item.idMeal)} />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList data={data.meals} renderItem={renderMeals} />
    </View>
  );
};

export default Meals;
