import { StyleSheet } from "react-native";
import { Colors } from "./Colors";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  wrapper: {
    width: "90%",
    marginLeft: "5%",
    marginRight: "5%",
    overflow: "hidden",
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

  row: {
    display: "flex",
    flexDirection: "row",
    marginLeft: -12,
    marginRight: -12,
  },

  col_6: {
    width: "50%",
    paddingLeft: 12,
    paddingRight: 12,
  },
});
