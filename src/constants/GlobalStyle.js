import { StyleSheet } from "react-native";
import { Colors } from "./Colors";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    width: "90%",
    margin: "5%",
  },

  buttons: {
    width: "100%",
    backgroundColor: Colors.primaryColor,
    borderRadius: 10,
    marginBottom: 24,
  },

  buttonText: {
    color: "white",
    paddingTop: 18,
    paddingBottom: 18,
    fontSize: 16,
    textAlign: "center",
  },
});
