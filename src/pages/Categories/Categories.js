import { FlatList, View } from "react-native";
import useFetch from "../../hooks/useFetch";
import CategoriesCard from "../../components/CategoriesCard";
import styles from "./Categories.style";
import config from "../../../config";

const Categories = ({ navigation }) => {
  const { data } = useFetch(`${config.CATEGORIES_URL}`);

  const handleCategorySelect = (categoryName) => {
    navigation.navigate("MealsScreen", { categoryName });
  };

  const renderCategories = ({ item }) => {
    return (
      <CategoriesCard
        category={item}
        onSelect={() => handleCategorySelect(item.strCategory)}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList data={data.categories} renderItem={renderCategories} />
    </View>
  );
};

export default Categories;
