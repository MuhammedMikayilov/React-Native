import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import { styles } from "./style";
import Button from "../../components/Button";

const Auth = (props) => {
  const imageBackground = require("../../../assets/restuorant-login.png");
  const logo = require("../../../assets/logo.png");
  return (
    <View style={styles.container}>
      <ImageBackground
        source={imageBackground}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.wrapper}>
          <Image
            source={require("../../../assets/logo.png")}
            style={styles.logo}
          />

          <Button
            onPress={() => props.navigation.navigate("Login")}
            text={"SIGN IN"}
          />
          <Button
            onPress={() => props.navigation.navigate("Register")}
            text={"SIGN UP"}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

export default Auth;
