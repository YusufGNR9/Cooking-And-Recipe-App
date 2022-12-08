import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import Meals from "../../pages/Meals/Meals";
import styles from "./DetailCard.style";

const DetailCard = ({ meal }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: meal.strMealThumb }} />

      <View style={styles.body_container}>
        <Text style={styles.title}>{meal.strMeal}</Text>
        <Text style={styles.nation}>{meal.strArea}</Text>
        <View style={styles.seperator} />
        <Text style={styles.detail}>{meal.strInstructions}</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Watch on Youtube</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DetailCard;
