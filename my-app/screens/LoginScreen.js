import React, { useState } from "react";
import {
  Button,
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const navigation = useNavigation();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Implement your login logic here (e.g., authenticate with backend)
    console.log("Username:", username);
    console.log("Password:", password);
    // Based on successful login, navigate to Home Page
    navigation.navigate("Home Page");
  };

  return (
    <View style={styles.outerContainer}>
      <View style={styles.innerContainer}>
        <Text style={styles.text}>Login</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Username"
          placeholderTextColor = '#ffff'
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          placeholderTextColor = '#ffff'
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true} // Hide password characters
        />
        <TouchableOpacity onPress={handleLogin}>
            <Text style = {styles.button}>LOGIN</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
          <Text style={styles.forgotPasswordText}>New User? Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    backgroundColor: "#CCC5B9", // Lightest background color
  },
  innerContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 40,
    backgroundColor: "#403D39", // Darker background color
    borderRadius: 20,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 200,
  },
  text: {
    color: "#EF8257", // Orange color
    fontSize: 44,
    marginBottom: 20, // Add space below title
  },
  textInput: {
    width: "100%",
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#252422", // Darkest background color
    borderRadius: 5,
    color: "#fff", // White color for text input
  },
  forgotPasswordText: {
    marginTop: 10, // Add space above text
    color: "#EF8257", // Orange color
  },
  button:{
    borderRadius: 5,
    backgroundColor: '#2196F3',
    color: '#fff',
    padding: 10
  }
});
