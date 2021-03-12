import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 500,
    justifyContent: "center",
    resizeMode: "cover",
  },
  title: {
    fontSize: 80,
    fontWeight: "bold",
    color: "#fff",
    width: "70%",
    marginLeft: 25,
  },
  button: {
    backgroundColor: "#fff",
    width: 200,
    height: 40,
    borderRadius: 12,
    marginTop: 25,
    marginLeft: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  searchButton: {
    backgroundColor: "#fff",
    width: Dimensions.get("screen").width - 20,
    height: 60,
    borderRadius: 30,
    marginHorizontal: 10,
    marginTop: -70,
    marginBottom: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  searchButtonText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default styles;
