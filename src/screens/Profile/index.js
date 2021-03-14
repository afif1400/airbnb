import React from "react";
import { View, Text, Pressable } from "react-native";
import { Auth } from "aws-amplify";

const ProfileScreen = () => {
  const logout = async () => {
    await Auth.signOut();
  };
  return (
    <View
      style={{
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text>Profile Screen</Text>
      <Pressable
        style={{
          width: "100%",
          height: 40,
          backgroundColor: "",
          justifyContent: "center",
          alignItems: "center",
        }}
        onPress={logout}
      >
        <Text>Log out</Text>
      </Pressable>
    </View>
  );
};

export default ProfileScreen;
