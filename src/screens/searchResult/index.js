import React from "react";
import { View, Text, FlatList } from "react-native";
import Post from "../../components/Post";

const SearchResult = ({ posts }) => {
  return (
    <View>
      <FlatList data={posts} renderItem={({ item }) => <Post post={item} />} />
    </View>
  );
};

export default SearchResult;
