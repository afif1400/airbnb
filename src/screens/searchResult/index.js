import React, { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import Post from "../../components/Post";
import { API, graphqlOperation } from "aws-amplify";
import { listPosts } from "../../graphql/queries";

import feed from "../../../assets/data/feed";

const SearchResult = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postResult = await API.graphql(graphqlOperation(listPosts));
        setPosts(postResult.data.listPosts.items);
      } catch (e) {
        console.log(e);
      }
    };
    fetchPosts();
  }, []);
  return (
    <View>
      <FlatList data={posts} renderItem={({ item }) => <Post post={item} />} />
    </View>
  );
};

export default SearchResult;
