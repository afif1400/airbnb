import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 25,
    marginHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  button: {
    borderWidth: 1,
    width: 30,
    height: 30,
    borderRadius: 15,
    borderColor: "#8b8b8b",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Styles;
