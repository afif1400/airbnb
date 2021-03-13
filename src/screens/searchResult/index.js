import React from "react";
import { View, Text, FlatList } from "react-native";
import Post from "../../components/Post";
import feed from "../../../assets/data/feed";

const SearchResult = () => {
  return (
    <View>
      {/*can also use scroll view but it renders all the children*/}
      {/*hence lowering performance*/}
      {/*<ScrollView>*/}
      {/*  {feed.map((post) => {*/}
      {/*    return <Post key={post.id} post={post} />;*/}
      {/*  })}*/}
      {/*</ScrollView>*/}
      <FlatList data={feed} renderItem={({ item }) => <Post post={item} />} />
      <Text>Search Result</Text>
    </View>
  );
};

export default SearchResult;
