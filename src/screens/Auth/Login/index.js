import * as React from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  SafeAreaView,
  Alert,
  ScrollView,
} from "react-native";
import { globalStyles } from "../../../constants/GlobalStyle";
import { loginStyle } from "./style";
import PasswordInputText from "react-native-hide-show-password-input";
import Button from "../../../components/Button";
import { TwoButtonAlert } from "../../../components/Alerts/TwoButtonAlert";

import { loginService } from "../../../services/Login";
import { useUserContxt } from "../../../context/UserContex";

const Login = (props) => {
  const [user, setAcount] = React.useState({
    username: "",
    pass: "",
  });

  const onChangeTextEmail = (value) => {
    setAcount({ ...user, username: value });
  };

  const { setUser } = useUserContxt();

  const onChangeTextPass = (value) => setAcount({ ...user, pass: value });
  const handleSubmit = () => {
    loginService
      .getUser()
      .then(({ data }) => {
        const userData = data.find(
          (userD) =>
            userD.username === user.username && userD.pass === user.pass
        );

        if (userData) {
          setUser(userData);
        } else {
          throw "error";
        }
      })
      .catch(() =>
        TwoButtonAlert("OOPS", "Username or pass is wrong", "Register", () =>
          props.navigation.navigate("Register")
        )
      );
  };
  return (
    <ScrollView>
      <View style={globalStyles.container}>
        <View style={globalStyles.wrapper}>
          <Image
            style={loginStyle.img}
            source={require("../../../../assets/logo-biggest.png")}
          />
          <Text style={loginStyle.txt}>SIGN IN</Text>

          <SafeAreaView>
            <TextInput
              style={loginStyle.inputs}
              onChangeText={onChangeTextEmail}
              defaultValue={user.email}
              name="email"
              placeholder="Username"
            />

            <PasswordInputText
              defaultValue={user.pass}
              placeholder="Password"
              onChangeText={onChangeTextPass}
            />

            <View style={{ marginTop: 40 }}>
              <Button text={"SIGN IN"} onPress={handleSubmit} />
            </View>
          </SafeAreaView>
        </View>
      </View>
    </ScrollView>
  );
};

export default Login;
