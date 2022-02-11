import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Auth from "./src/screens/Auth";
import { Colors } from "./src/constants/Colors";
import Register from "./src/screens/Auth/Register";
import Login from "./src/screens/Auth/Login";
import UserContextProvider, { useUserContxt } from "./src/context/UserContex";
import Accounts from "./src/screens/Pages/Accounts";
import Pages from "./src/screens/Pages";

const MainStack = createNativeStackNavigator();

const ProtectedUser = () => {
  const { user } = useUserContxt();

  if (user) {
    return (
      <NavigationContainer>
        <MainStack.Navigator>
          <MainStack.Screen
            name="Pages"
            component={Pages}
            options={{
              title: "",
              headerStyle: {
                backgroundColor: Colors.primaryColor,
              },
            }}
          />
        </MainStack.Navigator>
      </NavigationContainer>
    );
  }

  return (
    <NavigationContainer>
      <MainStack.Navigator>
        <MainStack.Screen
          name="Auth"
          component={Auth}
          options={{
            title: "",
            headerStyle: {
              backgroundColor: Colors.primaryColor,
            },
          }}
        />
        <MainStack.Screen
          name="Login"
          component={Login}
          options={{
            title: "",
            headerStyle: {
              backgroundColor: Colors.primaryColor,
            },
          }}
        />
        <MainStack.Screen
          name="Register"
          component={Register}
          options={{
            title: "",
            headerStyle: {
              backgroundColor: Colors.secondaryColor,
            },
          }}
        />
        <MainStack.Screen
          name="Accounts"
          component={Accounts}
          options={{
            title: "",
            headerStyle: {
              backgroundColor: Colors.secondaryColor,
            },
          }}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

function App() {
  return (
    <UserContextProvider>
      <ProtectedUser />
    </UserContextProvider>
  );
}

export default App;

/// Just some styles
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
