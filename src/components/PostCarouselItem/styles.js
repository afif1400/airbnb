import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  container: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
    height: 130,
    padding: 5,
  },
  innerContainer: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 10,
    overflow: "hidden",
  },
  image: {
    height: "100%",
    aspectRatio: 1,
    resizeMode: "cover",
  },
  bedrooms: {
    marginVertical: 10,
    color: "#5b5b5b",
    fontSize: 16,
  },
  description: {
    fontSize: 15,
  },
  prices: {
    fontSize: 16,
    marginVertical: 10,
  },
  oldPrice: {
    color: "#5b5b5b",
    textDecorationLine: "line-through",
    marginRight: 5,
  },
  newPrice: {
    fontWeight: "bold",
  },
  totalPrice: {
    fontSize: 18,
    color: "#5b5b5b",
    textDecorationLine: "underline",
  },
});

export default Styles;
