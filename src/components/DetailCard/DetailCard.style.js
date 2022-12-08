import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "#bdbdbd",
    backgroundColor: "#e0e0e0",
    margin: 10,
    flexDirection: "column",
  },
  image: {
    width: 100,
    minHeight: 100,
    resizeMode: "cover",
    backgroundColor: "white",
    minHeight: 250,
    width: "auto",
  },
  body_container: {
    flex: 1,
    padding: 5,
    justifyContent: "space-between",
  },
  title: {
    fontWeight: "bold",
    color: "#a52a2a",
    fontSize: 25,
  },
  nation: {
    fontWeight: "bold",
    color: "#a52a2a",
    fontSize: 18,
  },
  seperator: {
    borderBottomColor: "black",
    opacity: 0.5,
    margin: 3,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  detail: {
    fontSize: 18,
  },
  button: {
    backgroundColor: "#ff0000",
    alignItems: "center",
    borderRadius: 5,
    margin: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
    padding: 10,
  },
});
