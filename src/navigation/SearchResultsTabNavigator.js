import React, { useState, useEffect } from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import SearchResult from "../screens/searchResult";
import SearchResultsMap from "../screens/SearchResultsMap";
import { useRoute } from "@react-navigation/native";
import { API, graphqlOperation } from "aws-amplify";
import { listPosts } from "../graphql/queries";

const Tab = createMaterialTopTabNavigator();

const SearchResultsTabNavigation = () => {
  const route = useRoute();
  const { guests, viewport } = route.params;
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postResult = await API.graphql(
          graphqlOperation(listPosts, {
            filter: {
              and: {
                maxGuests: {
                  ge: guests,
                },
                latitude: {
                  between: [viewport.southwest.lat, viewport.northeast.lat],
                },
                longitude: {
                  between: [viewport.southwest.lng, viewport.northeast.lng],
                },
              },
            },
          })
        );
        setPosts(postResult.data.listPosts.items);
      } catch (e) {
        console.log(e);
      }
    };
    fetchPosts();
  }, []);

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
          return <SearchResult posts={posts} />;
        }}
      </Tab.Screen>
      <Tab.Screen name={"map"}>
        {() => {
          return <SearchResultsMap posts={posts} />;
        }}
      </Tab.Screen>
    </Tab.Navigator>
  );
};

export default SearchResultsTabNavigation;
