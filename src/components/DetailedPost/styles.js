import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  image: {
    width: "100%",
    aspectRatio: 3 / 2,
    resizeMode: "cover",
    borderRadius: 10,
  },
  bedrooms: {
    marginVertical: 10,
    color: "#5b5b5b",
    fontSize: 16,
  },
  description: {
    fontSize: 18,
    lineHeight: 26,
  },
  prices: {
    fontSize: 18,
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
  longDescription: {
    marginVertical: 20,
    fontSize: 16,
    lineHeight: 24,
  },
});

export default Styles;
