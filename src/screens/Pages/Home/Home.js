import React from "react";
import { useUserContxt } from "../../../context/UserContex";
import { View, Text, Image, ScrollView, TextInput } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { styles } from "./style";
import { globalStyles } from "../../../constants/GlobalStyle";

const Home = (props) => {
  const { user } = useUserContxt();
  return (
    <ScrollView style={globalStyles.container}>
      <View style={styles.header}>
        <Icon name="search" size={30} color="#fff" />
        <TextInput style={styles.search_bar} placeholder="Search" />
      </View>

      <View style={styles.img}>
        <Image source={require("../../../../assets/great-restourant.png")} />
        <View style={styles.img_txt}>
          <Text style={{ color: "#fff" }}>Great Menus</Text>
          <Text style={{ color: "#fff", fontWeight: "bold" }}>
            For Your Healty
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;
