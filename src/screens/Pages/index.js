import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SearchBar } from "react-native-screens";
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
        }}
        component={Home}
      />
      <Tab.Screen name="Accounts" component={Accounts} />
    </Tab.Navigator>
  );
}
