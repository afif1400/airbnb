import React, { useState } from "react";
import { View, TextInput, FlatList, Text, Pressable } from "react-native";
import Styles from "./Styles";
import { useNavigation } from "@react-navigation/native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import SuggestionRow from "./SuggestionRow";

const DestinationSearchScreen = () => {
  const navigation = useNavigation();
  const [inputText, setInputText] = useState("");
  return (
    <View style={Styles.container}>
      <GooglePlacesAutocomplete
        placeholder="where are you going ?"
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          navigation.navigate("Guests", {
            viewport: details.geometry.viewport,
          });
        }}
        fetchDetails
        query={{
          key: "AIzaSyCfreYmtBVxbo1Vg4tJCdvE7an00CghdCY",
          language: "en",
          types: "(cities)",
        }}
        style={{
          textInput: Styles.textInput,
        }}
        suppressDefaultStyles
        renderRow={(item) => <SuggestionRow item={item} />}
      />
    </View>
  );
};

export default DestinationSearchScreen;
