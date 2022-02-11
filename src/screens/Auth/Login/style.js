import { StyleSheet } from "react-native";
import { Colors } from "../../../constants/Colors";

export const loginStyle = StyleSheet.create({
  img: {
    marginTop: 140,
  },

  txt: {
    fontSize: 30,
    lineHeight: 41,
    fontWeight: "bold",
    textAlign: "center",
    color: Colors.primaryColor,
    marginTop: 77,
  },

  inputs: {
    height: 50,
    marginTop: 40,
    borderBottomWidth: 1,
    // borderColor: "#979797",
    padding: 10,
    marginBottom: 22,
  },
});
