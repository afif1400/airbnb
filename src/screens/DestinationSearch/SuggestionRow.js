import React from "react";
import { Pressable, Text, View } from "react-native";
import Styles from "./Styles";
import Entypo from "react-native-vector-icons/Entypo";

const SuggestionRow = ({ item, index }) => (
  <View style={Styles.row}>
    <View style={Styles.iconContainer}>
      <Entypo name={"location-pin"} size={30} />
    </View>
    <Text style={Styles.locationText}>{item.description}</Text>
  </View>
);

export default SuggestionRow;
