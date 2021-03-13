import React from "react";
import { View, Text, Image } from "react-native";
import Styles from "./styles";

const Post = ({ post }) => {
  return (
    <View style={Styles.container}>
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
    </View>
  );
};

export default Post;
