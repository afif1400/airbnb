import React from "react";
import { View, StatusBar, SafeAreaView } from "react-native";
import HomeScreen from "./src/screens/Home";
import Post from "./src/components/Post";

export default function App() {
  return (
    <View>
      <StatusBar style="auto" />
      {/*<SafeAreaView></SafeAreaView>*/}
      <Post />
      {/*<HomeScreen />*/}
    </View>
  );
}
