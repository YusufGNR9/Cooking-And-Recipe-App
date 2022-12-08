import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Categories from "./src/pages/Categories";
import Detail from "./src/pages/Detail";
import Meals from "./src/pages/Meals";
const Stack = createStackNavigator();

export default Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerTitleAlign: "center" }}
        initialRouteName="CategoriesScreen"
      >
        <Stack.Screen
          name="CategoriesScreen"
          component={Categories}
          options={{
            title: "Categories",
            headerStyle: { backgroundColor: "white" },
            headerTitleStyle: { color: "#ffa500", fontSize: 20 },
          }}
        />
        <Stack.Screen
          name="MealsScreen"
          component={Meals}
          options={{
            title: "Meals",
            headerStyle: { backgroundColor: "white" },
            headerTitleStyle: { color: "#ffa500" },
            headerTintColor: "#ffa500",
          }}
        />
        <Stack.Screen
          name="DetailScreen"
          component={Detail}
          options={{
            title: "Detail",
            headerStyle: { backgroundColor: "white" },
            headerTitleStyle: { color: "#ffa500" },
            headerTintColor: "#ffa500",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
