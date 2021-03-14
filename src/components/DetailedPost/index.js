import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import Styles from "./styles";

const Post = ({ post }) => {
  return (
    <ScrollView style={Styles.container}>
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
      <Text style={Styles.longDescription}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, aut
        consectetur cumque doloribus eaque eius eos eveniet explicabo fugiat
        inventore ipsam laudantium necessitatibus, nobis odit quidem quisquam
        recusandae rerum sapiente tempora, vero. A aliquam architecto, ea
        incidunt labore necessitatibus velit vero? A accusamus amet assumenda
        blanditiis dolor earum facere id, ipsum maxime modi molestias natus
        nobis nostrum odit perferendis sapiente tenetur velit voluptas. Aperiam
        corporis culpa dicta dolorum ea exercitationem harum, illo ipsam magni
        nam nobis non, obcaecati perspiciatis porro, provident quas quasi quia
        quod! Eaque iste possimus repudiandae! Beatae est id libero molestias
        quibusdam repellendus, sequi tempore? Dignissimos facere minus
        praesentium voluptatem voluptatum. Alias autem, earum facilis magnam
        nemo nesciunt quas quia quidem repellat saepe sed tempora tempore vel.
      </Text>
    </ScrollView>
  );
};

export default Post;
