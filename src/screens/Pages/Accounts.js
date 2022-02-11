import React from "react";
import { useUserContxt } from "../../context/UserContex";
import { View, Text, Image, ScrollView } from "react-native";

const Accounts = (props) => {
  const { user } = useUserContxt();
  return (
    <ScrollView>
      <View style={{ marginLeft: "40%", marginTop: 20 }}>
        <Image
          source={{ uri: user?.avatar }}
          style={{ width: 100, height: 100, borderRadius: "100%" }}
        />
        <Text>{user?.firstname}</Text>
      </View>
    </ScrollView>
  );
};

export default Accounts;
