import React from "react";
import { View, StatusBar, SafeAreaView, ScrollView } from "react-native";
import HomeScreen from "./src/screens/Home";
import SearchResult from "./src/screens/searchResult";

export default function App() {
  return (
    <View>
      <StatusBar style="auto" />

      <SearchResult />
    </View>
  );
}
