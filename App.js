import React from "react";
import { View, StatusBar } from "react-native";
import SearchResult from "./src/screens/searchResult";
import DestinationSearchScreen from "./src/screens/DestinationSearch";
import GuestScreen from "./src/screens/Guests";

export default function App() {
  return (
    <View>
      <StatusBar style="auto" />
      {/*<SearchResult />*/}
      {/*<DestinationSearchScreen />*/}
      <GuestScreen />
    </View>
  );
}
