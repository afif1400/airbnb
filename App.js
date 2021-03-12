import React from "react";
import { View, StatusBar, SafeAreaView } from "react-native";
import HomeScreen from "./src/screens/Home";

export default function App() {
  return (
    <View>
      <StatusBar style="auto" />
      {/*<SafeAreaView></SafeAreaView>*/}
      <HomeScreen />
    </View>
  );
}
