import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen.js";
import SignUpScreen from "../screens/SignUpScreen.js";
import { createStackNavigator } from "@react-navigation/stack";
import { View,Text } from "react-native";

const Stack = createStackNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="LogIn" component={LoginScreen} options={{headerShown:false}} />
     <Stack.Screen 
  name="Home Page" 
  component={HomeScreen}
  options={{
    title: 'Fake Auto',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      marginLeft: 58,
      fontSize:30,
    },
  }}
/>
      <Stack.Screen name="SignUp" component={SignUpScreen} options={{headerShown:false}} />

    </Stack.Navigator>
  );
};
