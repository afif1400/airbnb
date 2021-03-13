import React from "react";
import { View, Text, Image } from "react-native";
import Styles from "./styles";

const Post = () => {
  return (
    <View style={Styles.container}>
      <Image
        style={Styles.image}
        source={{
          uri:
            "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg",
        }}
      />
      <Text style={Styles.bedrooms}>1 bed .1 bedroom</Text>
      <Text style={Styles.description} numberOfLines={2}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae commodi
        deleniti doloribus totam? Asperiores non, omnis quos repudiandae ullam
        voluptatum.
      </Text>
      <Text style={Styles.prices}>
        <Text style={Styles.oldPrice}>$36</Text>
        <Text style={Styles.newPrice}> $30 </Text>
        <Text>/night</Text>
      </Text>
      <Text style={Styles.totalPrice}>$230 total</Text>
    </View>
  );
};

export default Post;
