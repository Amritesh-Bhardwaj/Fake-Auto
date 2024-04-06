import { Button, Text, View } from "react-native";
import { Image, ImageBackground, ScrollView, StyleSheet } from "react-native";

import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <ImageBackground source={{ uri: 'https://images.pexels.com/photos/19845819/pexels-photo-19845819/free-photo-of-tall-grasses-blowing-in-the-wind-against-a-blue-sky.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' }}
        style={{ width: 360, height: 800 }}>
        <View style={styles.container}>
          <Text style={styles.text}>Login</Text>
          <Button tit4le="LOG IN" onPress={() => navigation.navigate("Home Page")}></Button>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};
export default LoginScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 20,
    borderRadius: 20,
  },
  text: {
    color: 'red',
    fontSize: 44,
    textAlign: 'left',
    padding: 15,
  }
});
