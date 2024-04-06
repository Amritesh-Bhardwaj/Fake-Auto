import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen.js";
import SignUpScreen from "../screens/SignUpScreen.js";
const Stack = createStackNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="LogIn" component={LoginScreen} options={{headerShown:false}} />
      <Stack.Screen name="Home Page" component={HomeScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />

    </Stack.Navigator>
  );
};
