import { useNavigation } from "@react-navigation/native";
import { Button, StyleSheet, Text, View } from "react-native";

const HomeScreen = () => {
    return (
    <View>
      <Text style = {styles.screen}>Homescreen hffghfh</Text>
    </View>
    );
};

const styles = StyleSheet.create({
  screen: {
    color: "#000",
    textAlign: 'center',
    padding: 20,
    backgroundColor: '#667790',
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomeScreen;
