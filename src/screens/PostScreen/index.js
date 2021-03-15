import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import DetailedPost from "../../components/DetailedPost";
import { useRoute } from "@react-navigation/native";
import { API, graphqlOperation } from "aws-amplify";
import { listPosts } from "../../graphql/queries";

const PostScreen = () => {
  const route = useRoute();

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postResult = await API.graphql(graphqlOperation(listPosts));
        console.log(postResult);
        setPosts(postResult.data.listPosts.items);
      } catch (e) {
        console.log(e);
      }
    };
    fetchPosts();
  }, []);

  const post = posts.find((place) => place.id === route.params.PostId);
  console.log(post);

  return (
    <View style={{ backgroundColor: "#fff" }}>
      <DetailedPost post={post} />
    </View>
  );
};

export default PostScreen;
