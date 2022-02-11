import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome";
import { Colors } from "../../constants/Colors";
import Accounts from "./Accounts";
import Home from "./Home/Home";

const Tab = createBottomTabNavigator();

export default function Pages() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        options={{
          headerStyle: {
            backgroundColor: Colors.secondaryColor,
          },
          headerShown: false,
          tabBarIcon: ({ tintColor }) => (
            <Icon name="home" size={30} color={Colors.secondaryColor} />
          ),
        }}
        component={Home}
      />
      <Tab.Screen
        name="Accounts"
        component={Accounts}
        options={{
          tabBarIcon: ({ tintColor }) => (
            <Icon name="user" size={30} color={Colors.secondaryColor} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
