import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import Styles from "./styles";
import { useNavigation } from "@react-navigation/native";

const Post = ({ post }) => {
  const navigation = useNavigation();
  const goToPostPage = () => {
    navigation.navigate("Post", { PostId: post.id });
  };

  return (
    <Pressable onPress={goToPostPage} style={Styles.container}>
      <Image
        style={Styles.image}
        source={{
          uri: post.image,
        }}
      />
      <Text style={Styles.bedrooms}>
        {post.bed} bed. {post.bedroom} bedrooms
      </Text>
      <Text style={Styles.description} numberOfLines={2}>
        {post.type}. {post.title}
      </Text>
      <Text style={Styles.prices}>
        <Text style={Styles.oldPrice}>${post.oldPrice}</Text>
        <Text style={Styles.newPrice}> ${post.newPrice} </Text>
        <Text>/night</Text>
      </Text>
      <Text style={Styles.totalPrice}>${post.totalPrice} total</Text>
    </Pressable>
  );
};

export default Post;
