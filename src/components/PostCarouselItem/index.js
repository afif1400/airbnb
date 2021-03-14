import React from "react";
import { View, Text, Image, useWindowDimensions } from "react-native";
import Styles from "./styles";

const PostCarouselItem = ({ post }) => {
  const windowWidth = useWindowDimensions().width;
  return (
    <View style={[Styles.container, { width: windowWidth - 60 }]}>
      <View style={Styles.innerContainer}>
        <Image
          style={Styles.image}
          source={{
            uri: post.image,
          }}
        />
        <View style={{ flex: 1, marginHorizontal: 10 }}>
          <Text style={Styles.bedrooms}>
            {post.bed} bed. {post.bedroom} bedrooms
          </Text>
          <Text style={Styles.description} numberOfLines={2}>
            {post.type}. {post.title}
          </Text>
          <Text style={Styles.prices}>
            <Text style={Styles.newPrice}> ${post.newPrice} </Text>
            <Text>/night</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default PostCarouselItem;
