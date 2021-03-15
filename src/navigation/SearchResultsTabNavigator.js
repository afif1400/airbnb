import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import SearchResult from "../screens/searchResult";
import SearchResultsMap from "../screens/SearchResultsMap";
import { useRoute } from "@react-navigation/native";

const Tab = createMaterialTopTabNavigator();

const SearchResultsTabNavigation = () => {
  const route = useRoute();
  const { guests } = route.params;
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "#f15454",
        indicatorStyle: {
          backgroundColor: "#f15454",
        },
      }}
    >
      <Tab.Screen name={"list"}>
        {() => {
          return <SearchResult guests={guests} />;
        }}
      </Tab.Screen>
      <Tab.Screen name={"map"}>
        {() => {
          return <SearchResultsMap guests={guests} />;
        }}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default SearchResultsTabNavigation;
