import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import DestinationSearchScreen from "../screens/DestinationSearch";
import GuestScreen from "../screens/Guests";
import HomeTabNavigator from "./HomeTabNavigator";
import SearchResult from "../screens/searchResult";

const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={"Home"}
          component={HomeTabNavigator}
          options={{
            title: "navigation",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={"Destination Search"}
          component={DestinationSearchScreen}
          options={{
            title: "search your destination",
          }}
        />
        <Stack.Screen
          name={"Guests"}
          component={GuestScreen}
          options={{
            title: "How many people ?",
          }}
        />
        <Stack.Screen
          name={"Search"}
          component={SearchResult}
          options={{
            title: "How many people ?",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
