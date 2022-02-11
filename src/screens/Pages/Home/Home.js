import React from "react";
import { View, Text, Image, ScrollView, TextInput } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { styles } from "./style";
import { globalStyles } from "../../../constants/GlobalStyle";
import { getAllProducts } from "./actions";

const Home = () => {
  const [products, setProducts] = React.useState([]);
  const [searched, setSearched] = React.useState("");
  const titles = ["Drinks", "Foods"];

  const handleSearch = React.useCallback((txt) => {
    setSearched(txt);
  }, []);

  const searchFilter = React.useMemo(() => {
    let filtered = products;
    filtered = filtered?.map((products) => {
      return products.filter((product) => {
        if (
          `${product.name}`
            .trim()
            .toLowerCase()
            .includes(searched?.trim().toLowerCase())
        ) {
          return product;
        }
        return false;
      });
    });

    return filtered;
  }, [products, searched]);

  React.useEffect(() => {
    getAllProducts(setProducts);
  }, []);
  return (
    <>
      <View style={styles.header}>
        <Icon name="search" size={30} color="#fff" />
        <TextInput
          style={styles.search_bar}
          onChangeText={handleSearch}
          placeholder="Search"
        />
      </View>
      <ScrollView style={globalStyles.container}>
        <View style={{ ...globalStyles.wrapper }}>
          <View style={styles.img}>
            <Image
              source={require("../../../../assets/great-restourant.png")}
            />
            <View style={styles.img_txt}>
              <Text style={{ color: "#fff" }}>Great Menus</Text>
              <Text style={{ color: "#fff", fontWeight: "bold" }}>
                For Your Healty
              </Text>
            </View>
          </View>

          {searchFilter?.map((product, idx) => (
            <View style={{ marginTop: 50 }} key={idx}>
              <Text
                style={{ fontSize: 20, fontWeight: "bold", marginBottom: 20 }}
              >
                {titles[idx]}
              </Text>
              <View style={globalStyles.row}>
                {product?.length ? (
                  product.map((p) => (
                    <View key={p.id} style={globalStyles.col_6}>
                      <Image
                        source={{ uri: p?.avatar }}
                        style={{
                          height: 200,
                          width: "100%",
                          marginBottom: 20,
                        }}
                      />
                      <View style={styles.card_body}>
                        <Text style={styles.card_body_title}>{p.name}</Text>
                        <Text style={styles.card_body_price}>
                          {p.price[0]} {p.currency}
                        </Text>
                      </View>
                    </View>
                  ))
                ) : (
                  <Text
                    style={{ color: "red", textAlign: "center", width: "100%" }}
                  >
                    Empty
                  </Text>
                )}
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </>
  );
};

export default Home;
