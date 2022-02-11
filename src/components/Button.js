import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { globalStyles } from "../constants/GlobalStyle";

const Button = ({ onPress, text }) => {
  return (
    <TouchableOpacity style={globalStyles.buttons} onPress={onPress}>
      <Text style={globalStyles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
