import { StyleSheet } from "react-native";
import { Colors } from "../../../constants/Colors";

export const styles = StyleSheet.create({
  header: {
    flex: 1,
    // display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.primaryColor,
    padding: 10,
    // paddingRight: 20,
  },

  search_bar: {
    marginLeft: 20,
    backgroundColor: "#fff",
    width: "80%",
    height: "100%",
    padding: 5,
  },

  img: {
    marginTop: 25,
    position: "relative",
  },

  img_txt: {
    position: "absolute",
    bottom: 12,
    left: 19,
    color: "#fff",
  },
});
