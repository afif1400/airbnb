import React, { useState } from "react";
import { View, TextInput, FlatList, Text } from "react-native";
import Styles from "./Styles";
import searchResults from "../../../assets/data/search";
import Entypo from "react-native-vector-icons/Entypo";

const DestinationSearchScreen = () => {
  const [inputText, setInputText] = useState("");
  return (
    <View style={Styles.container}>
      <TextInput
        style={Styles.textInput}
        placeholder="where are you going ?"
        value={inputText}
        onChangeText={setInputText}
      />
      <FlatList
        data={searchResults}
        renderItem={({ item, index }) => (
          <View style={Styles.row}>
            <View style={Styles.iconContainer}>
              <Entypo name={"location-pin"} size={30} />
            </View>
            <Text style={Styles.locationText}>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default DestinationSearchScreen;
