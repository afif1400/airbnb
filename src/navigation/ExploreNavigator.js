import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/Home";
import SearchResultsTabNavigation from "./SearchResultsTabNavigator";

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={"Welcome"}
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name={"SearchResults"}
        component={SearchResultsTabNavigation}
        options={{
          title: "Search your destination",
        }}
      />
    </Stack.Navigator>
  );
};

export default Router;
