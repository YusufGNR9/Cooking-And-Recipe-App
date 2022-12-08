import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#bdbdbd",
    backgroundColor: "#e0e0e0",
    margin: 10,
    flexDirection: "column",
    borderColor: "#ffa500",
  },
  image: {
    borderRadius: 10,
    maxWidth: "100%",
    position: "relative",
    width: "auto",
    minHeight: 200,
    resizeMode: "cover",
    zIndex: 1,
  },
  body_container: {
    flex: 1,
    position: "absolute",
    alignSelf: "flex-end",
    bottom: 27,
    width: 800,
    backgroundColor: "black",
    zIndex: 2,
  },
  title: {
    position: "absolute",
    fontWeight: "bold",
    fontSize: 22,
    backgroundColor: "black",
    alignSelf: "flex-end",
    color: "#ffffff",
    justifyContent: "flex-end",
    maxWidth: "100%",
  },
});
