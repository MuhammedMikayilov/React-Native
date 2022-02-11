import React from "react";
import { Alert } from "react-native";

export const TwoButtonAlert = (alerTitle, alertMessage, alerText, alertPress) =>
  Alert.alert(alerTitle, alertMessage, [
    {
      text: "Cancel",
      style: "cancel",
    },
    {
      text: alerText,
      alertPress,
      onPress: alertPress,
    },
  ]);
