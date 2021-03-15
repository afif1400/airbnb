import React, { useState } from "react";
import { View, Text } from "react-native";
import Styles from "./Styles";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { useNavigation, useRoute } from "@react-navigation/native";

const GuestScreen = () => {
  const navigation = useNavigation();
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);

  const route = useRoute();

  return (
    <View style={{ justifyContent: "space-between", height: "100%" }}>
      <View>
        <View style={Styles.row}>
          <View>
            <Text style={{ fontWeight: "bold" }}>Adults</Text>
            <Text style={{ color: "#8d8d8d" }}>Ages 13 or above</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Pressable
              onPress={() => setAdults(Math.max(0, adults - 1))}
              style={Styles.button}
            >
              <Text style={{ fontSize: 20, color: "#474747" }}>-</Text>
            </Pressable>
            <Text style={{ marginHorizontal: 20, fontSize: 16 }}>{adults}</Text>
            <Pressable
              onPress={() => setAdults(adults + 1)}
              style={Styles.button}
            >
              <Text style={{ fontSize: 20, color: "#474747" }}>+</Text>
            </Pressable>
          </View>
        </View>
        <View style={Styles.row}>
          <View>
            <Text style={{ fontWeight: "bold" }}>Children</Text>
            <Text style={{ color: "#8d8d8d" }}>Ages 2 to 12</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Pressable
              onPress={() => setChildren(Math.max(0, children - 1))}
              style={Styles.button}
            >
              <Text style={{ fontSize: 20, color: "#474747" }}>-</Text>
            </Pressable>
            <Text style={{ marginHorizontal: 20, fontSize: 16 }}>
              {children}
            </Text>
            <Pressable
              onPress={() => setChildren(children + 1)}
              style={Styles.button}
            >
              <Text style={{ fontSize: 20, color: "#474747" }}>+</Text>
            </Pressable>
          </View>
        </View>
        <View style={Styles.row}>
          <View>
            <Text style={{ fontWeight: "bold" }}>infants</Text>
            <Text style={{ color: "#8d8d8d" }}>under 2</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Pressable
              onPress={() => setInfants(Math.max(0, infants - 1))}
              style={Styles.button}
            >
              <Text style={{ fontSize: 20, color: "#474747" }}>-</Text>
            </Pressable>
            <Text style={{ marginHorizontal: 20, fontSize: 16 }}>
              {infants}
            </Text>
            <Pressable
              onPress={() => setInfants(infants + 1)}
              style={Styles.button}
            >
              <Text style={{ fontSize: 20, color: "#474747" }}>+</Text>
            </Pressable>
          </View>
        </View>
      </View>
      <View>
        <Pressable
          onPress={() =>
            navigation.navigate("Home", {
              screen: "Explore",
              params: {
                screen: "SearchResults",
                params: {
                  guests: adults + children,
                  viewport: route.params.viewport,
                },
              },
            })
          }
          style={{
            marginBottom: 20,
            backgroundColor: "#f15454",
            alignItems: "center",
            justifyContent: "center",
            height: 50,
            marginHorizontal: 20,
            borderRadius: 10,
          }}
        >
          <Text style={{ fontSize: 16, color: "#fff", fontWeight: "bold" }}>
            search
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default GuestScreen;
