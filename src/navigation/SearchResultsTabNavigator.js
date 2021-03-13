import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import SearchResult from "../screens/searchResult";

const Tab = createMaterialTopTabNavigator();

const SearchResultsTabNavigation = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "#f15454",
        indicatorStyle: {
          backgroundColor: "#f15454",
        },
      }}
    >
      <Tab.Screen name={"list"} component={SearchResult} />
      <Tab.Screen name={"map"} component={SearchResult} />
    </Tab.Navigator>
  );
};

export default SearchResultsTabNavigation;
