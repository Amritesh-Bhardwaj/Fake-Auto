import { useNavigation } from "@react-navigation/native";
import { Button, Text, View } from "react-native";

const LoginScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>This is the Login Screen </Text>
      <Button title="LOG IN"onPress={() => navigation.navigate("Home Page")}></Button>
    </View>
  );
};
export default LoginScreen;
