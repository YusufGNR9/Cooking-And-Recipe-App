import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "#gray",
    backgroundColor: "white",
    margin: 10,
    flexDirection: "row",
    borderBottomLeftRadius: 50,
    borderTopLeftRadius: 50,
    overflow: "hidden",
  },
  body_container: {
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
    marginLeft: 15,
  },
  title: {
    fontSize: 25,
    alignItems: "center",
    border: "none",
  },
  image: {
    width: 100,
    minHeight: 100,
    resizeMode: "contain",
    backgroundColor: "white",
    overflow: "hidden",
  },
});
