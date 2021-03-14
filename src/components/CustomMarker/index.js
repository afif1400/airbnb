import React from "react";
import { Marker } from "react-native-maps";
import { Text, View } from "react-native";

const CustomMarker = ({ coordinate, totalPrice, onPress, isSelected }) => {
  return (
    <Marker style={{}} coordinate={coordinate} onPress={onPress}>
      <View
        style={{
          backgroundColor: isSelected ? "#222" : "#fff",
          padding: 5,
          borderRadius: 20,
          borderColor: "grey",
          borderWidth: 1,
        }}
      >
        <Text
          style={{ fontWeight: "bold", color: isSelected ? "#fff" : "#222" }}
        >
          ${totalPrice}
        </Text>
      </View>
    </Marker>
  );
};

export default CustomMarker;
