import React from "react";
import { View, Text } from "react-native";
import DetailedPost from "../../components/DetailedPost";
import places from "../../../assets/data/feed";
import { useRoute } from "@react-navigation/native";

const PostScreen = () => {
  const route = useRoute();

  const post = places.find((place) => place.id === route.params.PostId);

  return (
    <View style={{ backgroundColor: "#fff" }}>
      <DetailedPost post={post} />
    </View>
  );
};

export default PostScreen;
