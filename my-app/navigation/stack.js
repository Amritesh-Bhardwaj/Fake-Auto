import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen.js";
const Stack = createStackNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="LogIn" component={LoginScreen} />
      <Stack.Screen name="Home Page" component={HomeScreen} />
    </Stack.Navigator>
  );
};
